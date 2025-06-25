import { NextResponse } from 'next/server'
import { sanityWrite } from '@/lib/sanity'

export async function POST(req: Request) {
  const { articleId, nom, message } = await req.json()

  if (!articleId || !nom || !message) {
    return NextResponse.json({ error: 'Champs requis manquants' }, { status: 400 })
  }

  try {
    const newComment = await sanityWrite.create({
      _type: 'commentaire',
      article: { _type: 'reference', _ref: articleId },
      nom,
      message,
      date: new Date().toISOString(),
    })

    return NextResponse.json(newComment)
  } catch (err) {
    console.error('Erreur Sanity', err)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}