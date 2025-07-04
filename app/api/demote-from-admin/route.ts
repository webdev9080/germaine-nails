import { NextResponse, NextRequest } from "next/server"
import { getAuth } from "@clerk/nextjs/server"
import { clerkClient } from "@clerk/clerk-sdk-node"
import { headers } from "next/headers"

export async function POST(req: NextRequest) {
  
  const { userId } = getAuth(req)

  if (!userId) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 })
  }

  const currentUser = await clerkClient.users.getUser(userId)
  if (currentUser.publicMetadata?.role !== "admin") {
    return NextResponse.json({ error: "Accès refusé" }, { status: 403 })
  }

  const { userId: targetUserId } = await req.json()
  if (!targetUserId) {
    return NextResponse.json({ error: "ID utilisateur requis" }, { status: 400 })
  }

  await clerkClient.users.updateUserMetadata(targetUserId, {
    publicMetadata: { role: null },
  })

  return NextResponse.json({ success: true })
}