


// pages/api/prestations.ts
import { sanity } from '@/lib/sanity'

export async function GET(req: Request) {
  const prestations = await sanity.fetch(`
    *[_type == "prestation"]{
      titre,
      images
    }
  `)

  return Response.json(prestations)
}