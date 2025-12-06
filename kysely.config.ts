import { defineConfig } from 'kysely-ctl';
import { dialect } from './lib/db';

export default defineConfig({
  dialect,
  migrations: {
    migrationFolder: 'lib/db/migrations',
  },
});
