import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { z } from 'zod';

const paramsSchema = z.object({
  id: z.string().uuid('Invalid NFC tag ID format'),
});

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
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
  return NextResponse.json({ id: id });
}
