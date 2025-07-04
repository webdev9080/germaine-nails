// middleware.ts
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isPublicRoute = createRouteMatcher([
  '/sign-in(.*)',
  '/sign-up(.*)',
  '/unauthorized(.*)',
])

export default clerkMiddleware(async (auth, req) => {
  // Laisse passer les routes publiques
  if (isPublicRoute(req)) return

  // Protège tout le reste
  await auth.protect()           // ⬅️ on attend la Response
})

export const config = {
  matcher: [
    // même pattern que dans la doc Clerk pour ignorer _next et les statiques
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
}