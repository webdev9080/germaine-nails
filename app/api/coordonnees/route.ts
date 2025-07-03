// app/api/coordonnees/route.ts
import { NextResponse } from "next/server"
import { sanity } from "@/lib/sanity"

export async function GET() {
  const data = await sanity.fetch(`*[_type == "coordonnees"][0]`)
  return NextResponse.json(data)
}