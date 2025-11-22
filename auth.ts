import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import bcrypt from 'bcryptjs';
import pool from './lib/db';
import { User } from './types';
import { authConfig } from './auth.config';

async function getUser(email: string): Promise<User & { password_hash: string } | null> {
    try {
        const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        return result.rows[0] || null;
    } catch (error) {
        console.error('Failed to fetch user:', error);
        throw new Error('Failed to fetch user.');
    }
}

export const { auth, signIn, signOut, handlers } = NextAuth({
    ...authConfig,
    callbacks: {
        ...authConfig.callbacks,
        async session({ session, token }) {
            if (token.sub && session.user) {
                session.user.id = token.sub;
            }
            if (token.role && session.user) {
                session.user.role = token.role as 'USER' | 'ADMIN';
            }
            if (token.createdAt && session.user) {
                session.user.createdAt = token.createdAt as number;
            }
            if (token.name && session.user) {
                session.user.name = token.name;
            }
            if (token.image && session.user) {
                session.user.image = token.image as string;
            }
            return session;
        },
        async jwt({ token, user, trigger, session }) {
            if (user) {
                token.role = (user as any).role;
                token.createdAt = (user as any).created_at;
                token.name = user.name;

                // Prevent large base64 images from bloating the cookie
                if (user.image && user.image.length < 2000) {
                    token.image = user.image;
                } else {
                    console.warn("User image is too large for session cookie, skipping.");
                    token.image = null; // Or set a default placeholder if needed
                }
            }

            // Update token if session is updated (e.g. name change)
            if (trigger === "update" && session) {
                token.name = session.user.name;
                if (session.user.image && session.user.image.length < 2000) {
                    token.image = session.user.image;
                }
            }

            return token;
        },
    },
    providers: [
        Credentials({
            async authorize(credentials) {
                const parsedCredentials = z
                    .object({ email: z.string().email(), password: z.string().min(6) })
                    .safeParse(credentials);

                if (parsedCredentials.success) {
                    const { email, password } = parsedCredentials.data;
                    const user = await getUser(email);
                    if (!user) return null;

                    const passwordsMatch = await bcrypt.compare(password, user.password_hash);
                    if (passwordsMatch) return user;
                }

                console.log('Invalid credentials');
                return null;
            },
        }),
    ],
});
