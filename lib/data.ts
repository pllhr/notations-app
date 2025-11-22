import pool from './db';
import { User } from '../types';

export async function getUserByEmail(email: string): Promise<User & { password_hash: string } | null> {
    try {
        const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        return result.rows[0] || null;
    } catch (error) {
        console.error('Failed to fetch user:', error);
        throw new Error('Failed to fetch user.');
    }
}
