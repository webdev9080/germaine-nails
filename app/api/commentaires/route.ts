// app/api/commentaires/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { sanity, sanityWrite } from '@/lib/sanity'  // adapte ces imports à ta config

interface CommentPayload {
  articleId: string
  nom: string
  message: string
}

/* -------------------------------------------------------------------------- */
/* GET /api/commentaires?articleId=....                                       */
/* -------------------------------------------------------------------------- */
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const articleId = searchParams.get('articleId')

    if (!articleId) {
      return NextResponse.json(
        { error: 'Paramètre articleId manquant' },
        { status: 400 },
      )
    }

    const commentaires = await sanity.fetch(
      `*[_type == "commentaire" && article._ref == $articleId]
       | order(_createdAt desc){
        _id,
        nom,
        message,
        "createdAt": coalesce(date, _createdAt)
      }`,
      { articleId },
    )

    return NextResponse.json(commentaires)
  } catch (error) {
    console.error('Erreur Sanity GET /api/commentaires', error)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}

/* -------------------------------------------------------------------------- */
/* POST /api/commentaires                                                     */
/* -------------------------------------------------------------------------- */
export async function POST(req: NextRequest) {
  try {
    const { articleId, nom, message } = (await req.json()) as CommentPayload

    if (!articleId || !nom?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: 'Champs requis manquants' },
        { status: 400 },
      )
    }

    const newComment = await sanityWrite.create({
      _type: 'commentaire',
      article: {
        _type: 'reference',
        _ref: articleId,
      },
      nom: nom.trim(),
      message: message.trim(),
      date: new Date().toISOString(), // facultatif si tu préfères _createdAt
    })

    return NextResponse.json(newComment, { status: 201 })
  } catch (error) {
    console.error('Erreur Sanity POST /api/commentaires', error)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}

/* -------------------------------------------------------------------------- */
/* Config : exécution sur l’Edge Runtime (plus rapide, pas obligatoire)       */
/* -------------------------------------------------------------------------- */
export const runtime = 'edge'







/*import { NextResponse, NextRequest } from 'next/server'
import { sanityWrite } from '@/lib/sanity'

export async function POST(_req: NextRequest) {
  const { articleId, nom, message } = await _req.json()

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
}*/
