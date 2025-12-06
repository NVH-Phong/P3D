import { Kysely, PostgresDialect } from 'kysely';
import { Pool } from 'pg';
import { Database } from './types';

export const dialect = new PostgresDialect({
  pool: new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
    max: 10,
  }),
});

export const db = new Kysely<Database>({
  dialect,
});
