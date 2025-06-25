import { NextResponse } from 'next/server'
import { createClient } from '@sanity/client'
import { sanity } from '@/lib/sanity';

export async function GET() {
  try {
    const blogs = await sanity.fetch(`*[_type == "blog"] | order(date desc){
      _id,
      titre,
      slug,
      extrait,
      date,
      categorie,
      imagePrincipale{asset->{url}}
    }`)

    return NextResponse.json(blogs)
  } catch (err) {
    return NextResponse.json({ error: 'Erreur Sanity' }, { status: 500 })
  }
}