import { NextResponse, NextRequest } from "next/server";
import { getAuth } from "@clerk/nextjs/server";
import { clerkClient } from "@clerk/clerk-sdk-node";

export async function GET(request: NextRequest) {
  const { userId } = getAuth(request); // ✅ Fix ici

  if (!userId) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const currentUser = await clerkClient.users.getUser(userId);

  if (currentUser.publicMetadata?.role !== "admin") {
    return NextResponse.json({ error: "forbidden" }, { status: 403 });
  }

  const users = await clerkClient.users.getUserList();

  return NextResponse.json(
    users.map((u) => ({
      id: u.id,
      email: u.emailAddresses[0]?.emailAddress ?? "",
      role: u.publicMetadata?.role ?? "aucun",
    }))
  );
}