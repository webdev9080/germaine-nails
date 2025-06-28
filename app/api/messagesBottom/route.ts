// app/api/messages/route.ts ou pages/api/messages.ts
import { NextResponse, NextRequest } from 'next/server'
import { sanity } from '@/lib/sanity'
import { withRevalidation } from '@/lib/apiResponse'

export async function GET(_req: NextRequest) {
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

    return withRevalidation(messages, 120) // 💡 simple et propre toute les (120secondes = 2min)
  } catch (err) {
    return NextResponse.json(
      { error: 'Erreur API Sanity' },
      { status: 500 }
    )
  }
}