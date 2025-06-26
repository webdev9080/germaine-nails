import { NextRequest, NextResponse } from 'next/server'
import { sanity } from '@/lib/sanity'

type Params = {
  params: {
    slug: string
  }
}

export async function GET(_req: NextRequest, { params }: Params) {
  const { slug } = params

  try {
    const query = `
      *[_type == "article" && slug.current == $slug][0] {
        _id,
        nom,
        slug,
        description,
        prix,
        categorie,
        disponible,
        "imageUrl": image.asset->url
      }
    `
    const article = await sanity.fetch(query, { slug })

    if (!article) {
      return NextResponse.json({ message: 'Not found' }, { status: 404 })
    }

    return NextResponse.json(article)
  } catch {
    return NextResponse.json({ message: 'Erreur serveur' }, { status: 500 })
  }
}