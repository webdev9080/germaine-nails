// app/api/blog/[slug]/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { sanity } from '@/lib/sanity'
import { withRevalidation } from '@/lib/apiResponse'

export async function GET(
  _req: NextRequest,
  { params }: { params: { slug: string } }
) {
  const { slug } = params

  try {
    const post = await sanity.fetch(
      `*[_type == "blog" && slug.current == $slug][0]{
        _id,
        titre,
        date,
        auteur,
        imagePrincipale { asset->{url} },
        contenu
      }`,
      { slug }
    )

    if (!post) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 })
    }

    return withRevalidation(post) // ✅ ISR: 60s
  } catch (err) {
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}