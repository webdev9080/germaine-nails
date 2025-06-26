


// pages/api/prestations.ts
import { NextResponse, NextRequest } from 'next/server'
import { sanity } from '@/lib/sanity'

export async function GET(_req: NextRequest) {
  const prestations = await sanity.fetch(`
    *[_type == "prestation"]{
      titre,
      images
    }
  `)

  return NextResponse.json(prestations)
}
