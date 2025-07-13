// app/robots.ts
import { type MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://germaine-nails-tg.vercel.app/sitemap.xml',
    host: 'https://germaine-nails-tg.vercel.app',
  }
}