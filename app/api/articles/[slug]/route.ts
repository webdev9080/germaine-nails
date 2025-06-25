import { sanity } from '@/lib/sanity'
import { NextResponse } from 'next/server'

export async function GET(req: Request, { params }: { params: { slug: string } }) {
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

    if (!article) return NextResponse.json({ message: 'Not found' }, { status: 404 })

    return NextResponse.json(article)
  } catch (error) {
    return NextResponse.json({ message: 'Erreur serveur' }, { status: 500 })
  }
}