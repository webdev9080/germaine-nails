// app/api/prestations/route.ts
import { NextRequest } from 'next/server'
import { sanity } from '@/lib/sanity'
import { withRevalidation } from '@/lib/apiResponse'

export async function GET(_req: NextRequest) {
  const prestations = await sanity.fetch(`
    *[_type == "prestation"]{
      titre,
      images
    }
  `)

  return withRevalidation(prestations) // ✅ simple, lisible et maintenu
}