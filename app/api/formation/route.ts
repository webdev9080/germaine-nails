
// app/api/formation/route.ts
import { NextResponse, NextRequest } from 'next/server';
import { sanityWrite } from '@/lib/sanity'; // ton client Sanity

export async function POST(_req: NextRequest) {
  try {
    const body = await _req.json();
    const { nom, telephone, email, formation, paiement, message } = body;

    const res = await sanityWrite.create({
      _type: "formation",
      nom,
      telephone,
      email,
      formation,
      paiement,
      message,
      createdAt: new Date().toISOString()
    });

    return NextResponse.json({ success: true, data: res });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, error: "Erreur d'enregistrement" }, { status: 500 });
  }
}