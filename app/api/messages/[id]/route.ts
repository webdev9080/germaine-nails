import { NextResponse, NextRequest } from 'next/server'
import { sanityWrite } from '@/lib/sanity'

export async function DELETE(_req: NextRequest, context: any) {
  const id = context.params?.id

  try {
    if (!id) {
      return NextResponse.json({ error: 'ID manquant' }, { status: 400 })
    }

    await sanityWrite.delete(id)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Erreur suppression Sanity:', error)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}