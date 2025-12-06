import { Generated } from 'kysely';

export interface Database {
  users: UsersTable;
  // Add other tables here
}

export interface UsersTable {
  id: Generated<number>;
  email: string;
  name: string | null;
  created_at: Generated<Date>;
}
