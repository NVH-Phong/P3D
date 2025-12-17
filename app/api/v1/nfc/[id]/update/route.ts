import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs/server';
import { z } from 'zod';

const updateSchema = z.object({
  url: z.string().url('Invalid URL format'),
});

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;
    const body = await req.json();

    // Validate the URL
    const validation = updateSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { error: 'Invalid URL format' },
        { status: 400 }
      );
    }

    // Check if the NFC tag exists and belongs to the user
    const nfcTag = await db
      .selectFrom('nfc_tags')
      .selectAll()
      .where('id', '=', id)
      .where('user_claim', '=', userId)
      .executeTakeFirst();

    if (!nfcTag) {
      return NextResponse.json(
        { error: 'NFC tag not found or unauthorized' },
        { status: 404 }
      );
    }

    // Update the URL
    await db
      .updateTable('nfc_tags')
      .set({
        url: validation.data.url,
        updated_at: new Date(),
      })
      .where('id', '=', id)
      .where('user_claim', '=', userId)
      .execute();

    return NextResponse.json(
      { message: 'URL updated successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error updating NFC tag URL:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
