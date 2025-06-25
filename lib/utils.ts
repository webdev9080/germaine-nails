// lib/utils.ts
export function getBaseUrl() {
  if (typeof window !== 'undefined') return '' // côté client
  // côté serveur
  return process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000'
}