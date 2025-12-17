import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs/server';
import { getMyOrders } from '@/sanity/helpers/queries';

export async function GET(req: NextRequest) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Get all orders for this user
    const orders = await getMyOrders(userId);

    if (!orders || orders.length === 0) {
      return NextResponse.json({ products: [] }, { status: 200 });
    }

    // Get all NFC tags for this user
    const nfcTags = await db
      .selectFrom('nfc_tags')
      .selectAll()
      .where('user_claim', '=', userId)
      .execute();

    if (!nfcTags || nfcTags.length === 0) {
      return NextResponse.json({ products: [] }, { status: 200 });
    }

    // Extract all products with variant="nfc tag" from orders
    const nfcProducts: any[] = [];
    let nfcTagIndex = 0;

    for (const order of orders) {
      if (!order.products) continue;

      for (const orderProduct of order.products) {
        const product = orderProduct.product;

        // Check if this product is an NFC tag
        if (product?.variant === 'nfc tag') {
          const quantity = orderProduct.quantity || 1;

          // Assign each quantity to an NFC tag from the user's tags
          for (let i = 0; i < quantity && nfcTagIndex < nfcTags.length; i++) {
            const nfcTag = nfcTags[nfcTagIndex];
            nfcTagIndex++;

            nfcProducts.push({
              productId: product._id,
              productTitle: product.title,
              productImage: product.images && product.images[0] ? product.images[0] : null,
              nfcTagId: nfcTag.id,
              currentUrl: nfcTag.url,
              quantity: 1,
            });
          }
        }
      }
    }

    return NextResponse.json({ products: nfcProducts }, { status: 200 });
  } catch (error) {
    console.error('Error fetching user NFC products:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
