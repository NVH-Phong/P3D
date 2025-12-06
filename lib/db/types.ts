import { Generated } from 'kysely';

export interface Database {
  nfc_tags: NfcTagsTable;
}

export interface NfcTagsTable {
  id: Generated<string>; // UUID
  url: string | null;
  user_claim: string | null;
  created_at: Generated<Date>;
  updated_at: Generated<Date>;
}
