import { Pool } from '@neondatabase/serverless';

// Prevent multiple connections in dev mode
const globalForDb = globalThis as unknown as {
    conn: Pool | undefined;
};

const pool = globalForDb.conn ?? new Pool({ connectionString: process.env.DATABASE_URL });

if (process.env.NODE_ENV !== 'production') globalForDb.conn = pool;

export default pool;