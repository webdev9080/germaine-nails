import { NextResponse } from 'next/server';
import { sanity } from '@/lib/sanity';

export async function GET() {
  try {
    const data = await sanity.fetch(`*[_type == "galerie"]{
      _id, title, alt, category, image
    }`);
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ error: "Erreur Sanity", details: err }, { status: 500 });
  }
}