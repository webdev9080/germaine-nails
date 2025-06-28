
import { NextRequest, NextResponse } from "next/server";
import { sanity } from "@/lib/sanity";

export const revalidate = 60;

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category");

  const query = `*[_type == "imageGallery"${category ? ` && category == \"${category}\"` : ""}]|order(_createdAt desc){
    _id,
    title,
    alt,
    category,
    image
  }`;

  try {
    const data = await sanity.fetch(query);
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("[api/galerie]", error);
    return NextResponse.json({ message: "Erreur serveur" }, { status: 500 });
  }
}