'use server';

import pool from '../lib/db';
import { Note } from '../types';

async function ensureTable() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS notes (
        id TEXT PRIMARY KEY,
        title TEXT,
        data JSONB NOT NULL
      );
    `);

    // Create Users Table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id TEXT PRIMARY KEY,
        email TEXT UNIQUE NOT NULL,
        password_hash TEXT NOT NULL,
        role TEXT NOT NULL DEFAULT 'USER',
        created_at BIGINT NOT NULL,
        name TEXT,
        image TEXT
      );
    `);

    // Add columns if they don't exist (migration)
    try {
      await pool.query(`ALTER TABLE users ADD COLUMN IF NOT EXISTS name TEXT;`);
      await pool.query(`ALTER TABLE users ADD COLUMN IF NOT EXISTS image TEXT;`);
    } catch (e) {
      console.log("Columns might already exist");
    }

  } catch (e) {
    console.error("Failed to ensure tables exist:", e);
  }
}

// ... (rest of file)

export async function updateUserProfile(name: string, image: string) {
  try {
    const session = await import('../auth').then(mod => mod.auth());
    if (!session?.user?.email) return { error: 'Not authenticated' };

    await pool.query(
      'UPDATE users SET name = $1, image = $2 WHERE email = $3',
      [name, image, session.user.email]
    );
    return { success: true };
  } catch (error: any) {
    if (error.code === '42703') { // Undefined column
      await ensureTable();
      try {
        const session = await import('../auth').then(mod => mod.auth());
        if (!session?.user?.email) return { error: 'Not authenticated' };

        await pool.query(
          'UPDATE users SET name = $1, image = $2 WHERE email = $3',
          [name, image, session.user.email]
        );
        return { success: true };
      } catch (retryError) {
        console.error('Failed to update profile after migration:', retryError);
        return { error: 'Failed to update profile' };
      }
    }
    console.error('Failed to update profile:', error);
    return { error: 'Failed to update profile' };
  }
}

export async function signOutAction() {
  const { signOut } = await import('../auth');
  await signOut({ redirectTo: '/login' });
}

export async function getNotes(): Promise<Note[]> {
  // ... (rest of file)
  try {
    const result = await pool.query('SELECT data FROM notes');
    return result.rows
      .map(row => row.data)
      .filter((n): n is Note => n !== null && typeof n === 'object' && 'id' in n);
  } catch (e: any) {
    // Handle case where table might not exist yet
    if (e.code === '42P01') {
      await ensureTable();
      return [];
    }
    // Handle case where column might not exist (schema mismatch)
    if (e.code === '42703') {
      await fixSchema();
      // Retry fetch
      try {
        const retryResult = await pool.query('SELECT data FROM notes');
        return retryResult.rows
          .map(row => row.data)
          .filter((n): n is Note => n !== null && typeof n === 'object' && 'id' in n);
      } catch (retryError) {
        console.error("Retry failed after schema fix:", retryError);
        return [];
      }
    }
    console.error("Database Error:", e);
    return [];
  }
}

async function fixSchema() {
  try {
    await pool.query(`
            ALTER TABLE notes ADD COLUMN IF NOT EXISTS data JSONB;
        `);
  } catch (e) {
    console.error("Failed to fix schema:", e);
  }
}

export async function saveNote(note: Note) {
  try {
    await pool.query(
      `INSERT INTO notes (id, title, data) VALUES ($1, $2, $3) 
       ON CONFLICT (id) DO UPDATE SET title = $2, data = $3`,
      [note.id, note.title || '', JSON.stringify(note)]
    );
  } catch (e: any) {
    if (e.code === '42P01') {
      await ensureTable();
      // Retry once
      await pool.query(
        `INSERT INTO notes (id, title, data) VALUES ($1, $2, $3) 
             ON CONFLICT (id) DO UPDATE SET title = $2, data = $3`,
        [note.id, note.title || '', JSON.stringify(note)]
      );
    } else if (e.code === '42703') {
      await fixSchema();
      // Retry once
      await pool.query(
        `INSERT INTO notes (id, title, data) VALUES ($1, $2, $3) 
             ON CONFLICT (id) DO UPDATE SET title = $2, data = $3`,
        [note.id, note.title || '', JSON.stringify(note)]
      );
    } else {
      throw e;
    }
  }
}

export async function deleteNoteAction(id: string) {
  try {
    await pool.query('DELETE FROM notes WHERE id = $1', [id]);
  } catch (e) {
    console.error("Delete Error:", e);
  }
}

export async function syncNotes(notes: Note[]) {
  // Utility for bulk updates if needed, though granular is better for performance
  for (const note of notes) {
    await saveNote(note);
  }
}

import bcrypt from 'bcryptjs';
import { signIn } from '../auth';
import { AuthError } from 'next-auth';

export async function registerUser(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const role = formData.get('role') as 'USER' | 'ADMIN' || 'USER';

  if (!email || !password) {
    return { error: 'Email and password are required.' };
  }

  // Ensure table exists before registering
  await ensureTable();

  const hashedPassword = await bcrypt.hash(password, 10);
  const id = crypto.randomUUID();

  try {
    await pool.query(
      `INSERT INTO users (id, email, password_hash, role, created_at) VALUES ($1, $2, $3, $4, $5)`,
      [id, email, hashedPassword, role, Date.now()]
    );
    return { success: true };
  } catch (error: any) {
    if (error.code === '23505') { // Unique violation
      return { error: 'User already exists.' };
    }
    console.error('Registration error:', error);
    return { error: 'Failed to register user.' };
  }
}

export async function authenticate(prevState: string | undefined, formData: FormData) {
  try {
    await signIn('credentials', {
      ...Object.fromEntries(formData),
      redirectTo: '/',
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}