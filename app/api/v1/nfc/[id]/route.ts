import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { z } from 'zod';
import { auth } from '@clerk/nextjs/server';

const paramsSchema = z.object({
  id: z.string().uuid('Invalid NFC tag ID format'),
});
const urlSchema = z.string().url('Invalid URL format');

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const validation = paramsSchema.safeParse({ id });
  if (!validation.success) {
    return NextResponse.json({ error: 'Invalid id format' }, { status: 400 });
  }
  const nfcTag = await db.selectFrom('nfc_tags').selectAll().where('id', '=', id).executeTakeFirst();
  if (!nfcTag) {
    return NextResponse.json({ error: 'NFC tag not found' }, { status: 404 });
  }
  if (!nfcTag.url) {
    return NextResponse.json({ message: 'NFC tag not setup' }, { status: 200 });
  }
  const urlValidation = urlSchema.safeParse(nfcTag.url);
  if (!urlValidation.success) {
    return NextResponse.json({ error: 'Invalid URL configured for this NFC tag' }, { status: 500 });
  }
  return NextResponse.redirect(nfcTag.url, 302);
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;
    const validation = paramsSchema.safeParse({ id });
    if (!validation.success) {
      return NextResponse.json({ error: 'Invalid id format' }, { status: 400 });
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

    // Delete the NFC tag
    await db
      .deleteFrom('nfc_tags')
      .where('id', '=', id)
      .where('user_claim', '=', userId)
      .execute();

    return NextResponse.json(
      { message: 'NFC tag deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error deleting NFC tag:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
