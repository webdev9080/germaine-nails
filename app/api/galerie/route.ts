import { NextResponse, NextRequest } from 'next/server'
import { sanity } from '@/lib/sanity';

export async function GET(_req: NextRequest) {
  try {
    const data = await sanity.fetch(`*[_type == "galerie"]{
      _id, title, alt, category, image
    }`);
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ error: "Erreur Sanity", details: err }, { status: 500 });
  }
}
