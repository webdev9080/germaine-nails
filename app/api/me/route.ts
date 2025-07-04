// app/api/me/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { getAuth } from '@clerk/nextjs/server'
import { clerkClient } from '@clerk/clerk-sdk-node'

export async function GET(request: NextRequest) {

  const { userId } = getAuth(request)

  if (!userId) {
    return NextResponse.json({ error: 'Utilisateur non connecté' }, { status: 401 })
  }

  try {
    const user = await clerkClient.users.getUser(userId)

    return NextResponse.json({
      id: user.id,
      email: user.emailAddresses[0]?.emailAddress,
      nom: user.firstName,
      prenom: user.lastName,
      role: user.publicMetadata?.role || 'aucun',
    })
  } catch (error) {
    return NextResponse.json(
      { error: "Impossible de récupérer l'utilisateur depuis Clerk" },
      { status: 500 }
    )
  }
}