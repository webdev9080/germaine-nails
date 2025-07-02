import { NextRequest, NextResponse } from "next/server"
import { sanityWrite } from "@/lib/sanity"
import { v4 as uuidv4 } from "uuid"

export const revalidate = 60

export async function POST(req: NextRequest) {
  try {
    const form = await req.formData()

    const entreprise = form.get("entreprise") as string
    const email = form.get("email") as string
    const telephone = form.get("telephone") as string
    const siteWeb = form.get("siteWeb") as string
    const message = form.get("message") as string
    const logoFile = form.get("logo") as File | null

    let logoRef

    if (logoFile) {
      // ✅ Convertir en buffer au lieu de .stream()
      const arrayBuffer = await logoFile.arrayBuffer()
      const buffer = Buffer.from(arrayBuffer)

      const uploadedAsset = await sanityWrite.assets.upload(
        "image",
        buffer,
        { filename: logoFile.name }
      )

      logoRef = {
        _type: "image",
        asset: {
          _type: "reference",
          _ref: uploadedAsset._id,
        },
      }
    }

    await sanityWrite.create({
      _type: "partenaire",
      _id: uuidv4(),
      entreprise,
      email,
      telephone,
      siteWeb,
      message,
      dateSoumission: new Date().toISOString(),
      logo: logoRef,
      estApprouve: false,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Erreur lors de l'envoi:", error)
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
  }
}