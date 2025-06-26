import { NextRequest, NextResponse } from 'next/server'
import { sanity } from '@/lib/sanity'

export async function GET(_req: NextRequest) {
  try {
    const articles = await sanity.fetch(`
      *[_type == "article" && disponible == true] | order(_createdAt desc) {
        _id,
        nom,
        slug,
        description,
        prix,
        categorie,
        "imageUrl": image.asset->url
      }
    `)

    return NextResponse.json(articles)
  } catch {
    return NextResponse.json(
      { message: 'Erreur de chargement' },
      { status: 500 }
    )
  }
}