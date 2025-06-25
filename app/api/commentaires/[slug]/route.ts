import { NextResponse } from 'next/server'
import { sanity } from '@/lib/sanity'

export async function GET(
  _req: Request,
  context: { params: { slug: string } }
) {
  // ✅ on extrait `slug` de `await context.params`
  const { slug } = await context.params

  try {
    const query = `
      *[_type == "commentaire" && article->slug.current == $slug] | order(date desc){
        _id,
        nom,
        message,
        date
      }
    `
    const commentaires = await sanity.fetch(query, { slug })

    return NextResponse.json(commentaires)
  } catch (err) {
    return NextResponse.json({ error: 'Erreur Sanity' }, { status: 500 })
  }
}