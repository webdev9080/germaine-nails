// app/api/contact/route.ts
import { NextResponse, NextRequest } from 'next/server'
import { sanityWrite } from "@/lib/sanity";


export async function POST(_req: NextRequest) {
  try {
    const { name, email, message } = await _req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Champs requis manquants" }, { status: 400 });
    }

    await sanityWrite.create({
      _type: "contactMessage",
      name,
      email,
      message,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Erreur API:", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
