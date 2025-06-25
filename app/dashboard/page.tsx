//"use client";



import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import Link from 'next/link'

import { UserButton, SignInButton, SignUpButton } from '@clerk/nextjs';
import { auth, currentUser } from '@clerk/nextjs/server';

import ContactMessage from "@/components/ContactMessage";
 

export default async function Dashboard() {

// ✅ auth est synchrone
  const { userId } = await auth();
  
  if (!userId) {
    return <div>Sign in to view this page <SignInButton /></div>;
  }

  // ✅ currentUser est async
  const user = await currentUser();
 
  return (
    <div className="container py-5">
      <h1 className="text-center text-primary mb-4 fw-bold">📬 Tableau de Bord des Messages</h1>

      <div>
          <ContactMessage />
      </div>
      
    </div>
  );
}
