'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import ContactMessage from '@/components/ContactMessage';
import UserCard from '@/components/UserCard';

export default function DashboardClient() {
  const [user, setUser] = useState<any>(null);
  const [users, setUsers] = useState<any[]>([]);
  const router = useRouter();

  const fetchUsers = async () => {
    const resUsers = await fetch('/api/users');
    const usersData = await resUsers.json();
    setUsers(usersData);
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/me');
      if (res.status === 401) {
        router.push('/sign-in');
        return;
      }

      const data = await res.json();

      if (data.role !== 'admin') {
        router.push('/unauthorized');
        return;
      }

      setUser(data);
      await fetchUsers();
    };

    fetchData();
  }, []);

  if (!user) return <p className="text-center lead">Vérification d'accès...</p>;

  return (
    <div className="container py-5">
      <div className="mb-5 text-center">
        <h1 className="display-5 fw-bold">Dashboard Admin</h1>
        <p className="text-muted">Bienvenue {user.nom}</p>
      </div>

      <div className="mb-5">
        <ContactMessage />
      </div>

      <h2 className="h4 fw-semibold mb-4 text-center text-primary">
        👥 Liste des utilisateurs
      </h2>

      <div className="row gy-4">
        {users.map((u) => (
          <UserCard
            key={u.id}
            id={u.id}
            email={u.email ?? '—'}
            role={u.role}
            onChange={fetchUsers}
          />
        ))}
      </div>
    </div>
  );
}