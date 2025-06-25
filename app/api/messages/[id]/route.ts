import { NextResponse } from "next/server";
import { sanityWrite } from "@/lib/sanity";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;

    if (!id) {
      return NextResponse.json({ error: "ID manquant" }, { status: 400 });
    }

    await sanityWrite.delete(id);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur suppression Sanity:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}