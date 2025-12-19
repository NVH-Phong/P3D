import { Metadata } from '@/actions/createCheckoutSession';
import stripe from '@/lib/stripe';
import { backendClient } from '@/sanity/lib/backendClient';
import { headers } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { db } from '@/lib/db';

export const config = { api: { bodyParser: false } };

export async function POST(req: NextRequest) {
  const body = await req.text();
  const headersList = await headers();
  const sig = headersList.get('stripe-signature');
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!sig) {
    console.error('Request does not have `stripe-signature`');
    return NextResponse.json(
      { error: 'Request does not have `stripe-signature`' },
      { status: 400 }
    );
  }

  if (!webhookSecret) {
    console.error('Stripe webhook secret is not set');
    return NextResponse.json(
      { error: 'Stripe webhook secret is not set' },
      { status: 400 }
    );
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (error) {
    console.error('Webhook signature verification failed:', error);
    return NextResponse.json(
      { error: `Webhook Error: ${error}` },
      { status: 400 }
    );
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const invoice = session.invoice
      ? await stripe.invoices.retrieve(session.invoice as string)
      : null;
    console.log('session', session, 'invoice', invoice);
    try {
      const order = await createOrderInSanity(session, invoice);
      console.log('Order created in Sanity:', order);

      // Create NFC tags for NFC tag products
      await createNfcTagsForOrder(session);
    } catch (error) {
      console.error('Error creating order in sanity:', error);
      return NextResponse.json(
        { error: `Error creating order: ${error}` },
        { status: 400 }
      );
    }
  }
  return NextResponse.json({ received: true }, { status: 200 });
}

async function createOrderInSanity(
  session: Stripe.Checkout.Session,
  invoice: Stripe.Invoice | null
) {
  // console.log("createOrderInSanity", invoice);

  const {
    id,
    amount_total,
    currency,
    metadata,
    payment_intent,
    // customer,
    total_details,
  } = session;

  const { orderNumber, customerName, customerEmail, clerkUserId } =
    metadata as unknown as Metadata;

  const lineItemsWithProduct = await stripe.checkout.sessions.listLineItems(
    id,
    { expand: ['data.price.product'] }
  );

  // Creating sanity product reference
  const sanityProducts = lineItemsWithProduct.data.map((item) => ({
    _key: crypto.randomUUID(),
    product: {
      _type: 'reference',
      _ref: (item.price?.product as Stripe.Product)?.metadata?.id,
    },
    quantity: item?.quantity || 0,
  }));
  const order = await backendClient.create({
    _type: 'order',
    orderNumber,
    stripeCheckoutSessionId: id,
    stripePaymentIntentId: payment_intent,
    customerName,
    stripeCustomerId: customerEmail,
    clerkUserId: clerkUserId,
    email: customerEmail,
    currency,
    amountDiscount: total_details?.amount_discount
      ? total_details.amount_discount / 100
      : 0,

    products: sanityProducts,
    totalPrice: amount_total ? amount_total / 100 : 0,
    status: 'paid',
    orderDate: new Date().toISOString(),
    invoice: invoice
      ? {
          id: invoice.id,
          number: invoice.number,
          hosted_invoice_url: invoice.hosted_invoice_url,
        }
      : null,
  });
  return order;
}

async function createNfcTagsForOrder(session: Stripe.Checkout.Session) {
  const { metadata } = session;
  const { clerkUserId } = metadata as unknown as Metadata;

  const lineItemsWithProduct = await stripe.checkout.sessions.listLineItems(
    session.id,
    {
      expand: ['data.price.product'],
    }
  );

  for (const item of lineItemsWithProduct.data) {
    const stripeProduct = item.price?.product as Stripe.Product;
    const productId = stripeProduct?.metadata?.id;

    if (!productId) continue;

    // Fetch the product from Sanity to check if it's an NFC tag
    const product = await backendClient.fetch(
      `*[_type == "product" && _id == $productId][0]{variant, title}`,
      {
        productId,
      }
    );

    if (product?.variant === 'nfc tag') {
      const quantity = item.quantity || 1;

      // Create NFC tags for each quantity
      for (let i = 0; i < quantity; i++) {
        try {
          await db
            .insertInto('nfc_tags')
            .values({
              url: null,
              user_claim: clerkUserId,
            })
            .execute();

          console.log(`Created NFC tag for user ${clerkUserId}`);
        } catch (error) {
          console.error(`Error creating NFC tag:`, error);
        }
      }
    }
  }
}
