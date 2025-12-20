"use server";

import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { z } from "zod";
import { revalidatePath } from "next/cache";

const updateSchema = z.object({
  url: z.url("Invalid URL format"),
});

export async function getNfcTags() {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  const nfcTags = await db
    .selectFrom("nfc_tags")
    .select(["id", "url"])
    .where("user_claim", "=", userId)
    .execute();

  return nfcTags;
}

export async function updateNfcTagUrl(nfcTagId: string, url: string) {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  // Validate the URL
  const validation = updateSchema.safeParse({ url });
  if (!validation.success) {
    throw new Error("Invalid URL format");
  }

  // Check if the NFC tag exists and belongs to the user
  const nfcTag = await db
    .selectFrom("nfc_tags")
    .selectAll()
    .where("id", "=", nfcTagId)
    .where("user_claim", "=", userId)
    .executeTakeFirst();

  if (!nfcTag) {
    throw new Error("NFC tag not found or unauthorized");
  }

  // Update the URL
  await db
    .updateTable("nfc_tags")
    .set({
      url: validation.data.url,
      updated_at: new Date(),
    })
    .where("id", "=", nfcTagId)
    .where("user_claim", "=", userId)
    .execute();

  // Revalidate the page to refresh data
  revalidatePath("/link-swap");

  return { success: true, message: "URL updated successfully" };
}
