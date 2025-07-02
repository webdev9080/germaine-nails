

import { sanity } from "@/lib/sanity"
import { NextResponse } from "next/server"
import { withRevalidation } from '@/lib/apiResponse'

export async function GET() {
  try {
    const partenaires = await sanity.fetch(`*[_type == "partenaireActif"]{ _id, nom, siteWeb, "logo": logo.asset->url }`)
    return withRevalidation(partenaires)
  } catch (error) {
    return NextResponse.json({ error: "Erreur Partenaires" }, { status: 500 })
  }
}