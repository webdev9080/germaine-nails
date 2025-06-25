import { NextResponse } from 'next/server'
import { sanity } from '@/lib/sanity'

export async function GET() {
  try {
    const messages = await sanity.fetch(`
      *[_type == "message"] | order(date desc){
        _id,
        titre,
        contenu,
        type,
        date
      }
    `)

    return NextResponse.json(messages)
  } catch (err) {
    return NextResponse.json({ error: 'Erreur API Sanity' }, { status: 500 })
  }
}