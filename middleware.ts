import { auth } from "@/auth";
import { authorizeRoutes, nonAuthorizeRoutes } from "./routes";

export default auth((req): any => {
    const { nextUrl } = req;
    const isLoggedIn = !!req.auth;
    console.log("LOGGED IN: ", isLoggedIn);

    const pathname = nextUrl.pathname;

    const isNonAuthRoute = nonAuthorizeRoutes.includes(pathname);

    const isAuthRoute =
        authorizeRoutes.includes(pathname) ||
        authorizeRoutes.some(route => pathname.startsWith(route) && !route.includes("[id]"));

    if (isNonAuthRoute) {
        if (isLoggedIn) {
            return Response.redirect(new URL('/blogs', nextUrl));
        }
        return null;
    }

    if (isAuthRoute || pathname.startsWith('/edit/')) {
        if (!isLoggedIn) {
            return Response.redirect(new URL('/', nextUrl));
        }
        return null;
    }

    return null; 
});

export const config = {
    matcher: [
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        '/(api|trpc)(.*)',
        '/'
    ],
};
