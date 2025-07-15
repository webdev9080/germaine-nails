import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// Liste des routes publiques accessibles sans authentification
const isPublicRoute = createRouteMatcher([
  '/',                        // Accueil
  '/sign-in(.*)',
  '/sign-up(.*)',
  '/unauthorized(.*)',
  '/favicon.ico',
  '/manifest.json',
  '/robots.txt',
  '/sitemap(.*)',
  '/(.*).xml',
  '/ads.txt',

  // Pages publiques
  '/galerie(.*)',
  '/prestations(.*)',
  '/prestations/manucure(.*)',
  '/prestations/pedicure(.*)',
  '/prestations/soins-visage(.*)',
  '/contact(.*)',
  '/blog(.*)',
  '/settings(.*)',
  '/messages(.*)',
  '/shop(.*)',
  '/partenariat(.*)',
  '/formation(.*)',
  '/politique-confidentialite(.*)',
  '/mentions-legales(.*)',
  '/conditions-vente(.*)',

  // API publiques utilisées dans ces pages
  '/api/galleryImages',
  '/api/galleryVideos',
  '/api/articles',
  '/api/blogs',
  '/api/prestations',
  '/api/messagesBottom',
  '/api/chat',
  
])

export default clerkMiddleware(async (auth, req) => {
  // Laisse passer les routes publiques
  if (isPublicRoute(req)) return

  // Protège toutes les autres routes
  await auth.protect()
})

export const config = {
  matcher: [
    // Même pattern que dans la doc Clerk pour ignorer _next et les fichiers statiques
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
}