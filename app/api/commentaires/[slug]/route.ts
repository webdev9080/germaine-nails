// app/api/article/[slug]/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { sanity } from '@/lib/sanity'
import { withRevalidation } from '@/lib/apiResponse'

export async function GET(_req: NextRequest, { params }: { params: { slug: string } }) {
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

    return withRevalidation(article) // ✅ revalidation toutes les 60s
  } catch {
    return NextResponse.json({ message: 'Erreur serveur' }, { status: 500 })
  }
}