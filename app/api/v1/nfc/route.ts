import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

export async function GET(req: NextRequest) {
  const { userId } = await auth();
  if (!userId)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  console.log(userId);
  const nfcTags = await db
    .selectFrom("nfc_tags")
    .select(["id", "url"])
    .where("user_claim", "=", userId)
    .execute();
  return NextResponse.json({ nfcTags });
}
