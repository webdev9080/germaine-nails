
// app/api/messages/route.ts
import { NextResponse, NextRequest } from 'next/server'
import { sanity } from "@/lib/sanity";


export async function GET(_req: NextRequest) {
  try {
    const query = `*[_type == "contactMessage"] | order(_createdAt desc){
  _id,
  name,
  email,
  message,
  _createdAt
}`;

    const messages = await sanity.fetch(query);
    return NextResponse.json(messages);
  } catch (err) {
    console.error("Erreur Sanity:", err);
    return NextResponse.json({ error: "Erreur lors de la récupération" }, { status: 500 });
  }
}
