// middleware.ts
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isPublicRoute = createRouteMatcher([
  '/',
  '/sign-in(.*)',
  '/sign-up(.*)',
  '/unauthorized(.*)',
  '/favicon.ico',
  '/manifest.json',
  '/robots.txt',
  '/sitemap.xml',

  // Pages publiques
  '/galerie(.*)',
  '/prestations(.*)',
  '/prestations/manucure(.*)',
  '/prestations/pedicure(.*)',
  '/prestations/soins-visage(.*)',
  '/contact(.*)',
  '/blog(.*)',
  '/messages(.*)',
  '/shop(.*)',

  // API publiques appelées dans ces pages
  
  '/api/galleryImages',
  '/api/galleryVideos',
  '/api/articles',
  '/api/blogs',
  '/api/prestations',
  '/api/messagesBottom',
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
