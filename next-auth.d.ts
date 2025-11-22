import NextAuth, { DefaultSession } from 'next-auth';

declare module 'next-auth' {
    interface Session {
        user: {
            role: 'USER' | 'ADMIN';
            createdAt: number;
            id: string;
        } & DefaultSession['user'];
    }
}

declare module 'next-auth/jwt' {
    interface JWT {
        role: 'USER' | 'ADMIN';
        createdAt: number;
        name?: string;
        image?: string;
    }
}
