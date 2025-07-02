// app/api/prestations/route.ts
import { NextRequest } from 'next/server'
import { sanity } from '@/lib/sanity'
import { withRevalidation } from '@/lib/apiResponse'

export async function GET(_req: NextRequest) {
  try {
    const prestations = await sanity.fetch(`
      *[_type == "prestation"]{
        titre,
        images
      }
    `)

    return withRevalidation(prestations)
  } catch (error) {
    console.error('Erreur Sanity:', error)
    return new Response(JSON.stringify({ error: 'Erreur serveur Sanity' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}