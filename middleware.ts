import { auth } from "@/auth"
import { authorizeRoutes, nonAuthorizeRoutes } from "./routes";

export default auth((req): any => {
    const { nextUrl } = req;
    const isLoggedIn = !!req.auth

    const isNonAuthRoute = nonAuthorizeRoutes.includes(nextUrl.pathname);
    const isAuthRoute = authorizeRoutes.includes(nextUrl.pathname);

    // if (isNonAuthRoute) {
    //     if (isLoggedIn) {
    //         return Response.redirect(new URL('/blogs', nextUrl));
    //     }
    //     return null;
    // }

    // if (isAuthRoute) {
    //     if (!isLoggedIn) {
    //         return Response.redirect(new URL('/', nextUrl));
    //     }
    //     return null;
    // }
})

export const config = {
    matcher: [
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        '/(api|trpc)(.*)',
        '/'
    ],
}