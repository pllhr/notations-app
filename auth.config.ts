import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
    pages: {
        signIn: '/login',
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;

            // Define public routes that don't require authentication
            const publicRoutes = ['/login', '/register'];
            const isOnPublicRoute = publicRoutes.some(route => nextUrl.pathname.startsWith(route));

            if (isOnPublicRoute) {
                if (isLoggedIn) {
                    // Redirect logged-in users to home if they try to access login/register
                    return Response.redirect(new URL('/', nextUrl));
                }
                return true;
            }

            // Protect all other routes
            if (!isLoggedIn) {
                return false; // Redirects to signIn page
            }

            return true;
        },
    },
    providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
