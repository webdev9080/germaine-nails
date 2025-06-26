import { NextRequest, NextResponse } from 'next/server'
import { sanity } from '@/lib/sanity'

export async function GET(_req: NextRequest) {
  try {
    const blogs = await sanity.fetch(`*[_type == "blog"] | order(date desc){
      _id,
      titre,
      slug,
      extrait,
      date,
      categorie,
      imagePrincipale { asset -> { url } }
    }`)

    return NextResponse.json(blogs)
  } catch {
    return NextResponse.json({ error: 'Erreur Sanity' }, { status: 500 })
  }
}