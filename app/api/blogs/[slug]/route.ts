export const runtime = 'nodejs'

import { NextResponse } from 'next/server'
import { sanity } from '@/lib/sanity'

export async function GET(
  _req: Request,
  context: { params: { slug: string } }
) {
  const { slug } = await context.params // ✅ await obligatoire

  try {
    const post = await sanity.fetch(
      `*[_type == "blog" && slug.current == $slug][0]{
        _id,
        titre,
        date,
        auteur,
        imagePrincipale{asset->{url}},
        contenu
      }`,
      { slug }
    )

    if (!post) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 })
    }

    return NextResponse.json(post)
  } catch (err) {
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}