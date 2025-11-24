import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import bcrypt from 'bcryptjs';
import { authConfig } from './auth.config';
import { getUserByEmail } from './lib/data';

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
            // Image is NOT stored in session anymore to prevent header overflow
            return session;
        },
        async jwt({ token, user, trigger, session }) {
            if (user) {
                token.role = (user as any).role;
                token.createdAt = (user as any).created_at;
                token.name = user.name;
                // token.image is intentionally omitted
            }

            // Update token if session is updated (e.g. name change)
            if (trigger === "update" && session) {
                token.name = session.user.name;
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
                    const user = await getUserByEmail(email);
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
