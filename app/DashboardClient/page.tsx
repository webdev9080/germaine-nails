/*'use client';

import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import ContactMessage from '@/components/ContactMessage';

export default function DashboardClient() {
  const { user, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded) {
      if (!user) {
        router.push('/sign-in?redirect_url=/dashboard');
      } else if (user?.publicMetadata?.role !== 'admin') {
        router.push('/');
      }
    }
  }, [isLoaded, user]);

  if (!isLoaded || !user) return <p>Chargement...</p>;

  return (
    <div className="container py-5">
      <h1 className="text-center text-primary mb-4 fw-bold">
        📬 Tableau de Bord des Messages
      </h1>
      <ContactMessage />
    </div>
  );
}*/


'use client';

import { useUser } from '@clerk/nextjs';

export default function TestUser() {
  const { isLoaded, user } = useUser();

  if (!isLoaded) return <p>Chargement...</p>;
  if (!user) return <p>Non connecté</p>;

  return (
    <div>
      <p>Email: {user.emailAddresses[0].emailAddress}</p>
      <p>Rôle: {user.publicMetadata?.role || 'aucun'}</p>
    </div>
  );
}