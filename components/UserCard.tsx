// components/UserCard.tsx
'use client';

import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

type Props = {
  id: string;
  email: string;
  role: string | null;
  onChange: () => void; // nouveau prop
};

export default function UserCard({ id, email, role, onChange }: Props) {
  const isAdmin = role === 'admin';

  const handleClick = async () => {
    const endpoint = isAdmin
      ? '/api/demote-from-admin'
      : '/api/promote-to-admin';

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: id }),
      });

      if (!res.ok) {
        throw new Error((await res.json()).error ?? 'Erreur inattendue');
      }

      toast.success(isAdmin ? 'Rôle admin retiré ✅' : 'Utilisateur promu admin ✅');
      onChange(); // appelle le parent pour recharger les données
    } catch (err: any) {
      toast.error(`💥 ${err.message}`);
    }
  };

  return (
    <div className="col-md-6 col-lg-4">
      <div className="card shadow-sm border-0 h-100">
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">📧 {email}</h5>
          <p className="card-text">
            🛡️ <strong>Rôle :</strong> {role || 'aucun'}
          </p>
          <button
            onClick={handleClick}
            className={`btn btn-sm mt-auto ${isAdmin ? 'btn-danger' : 'btn-success'}`}
          >
            {isAdmin ? 'Retirer admin' : 'Promouvoir admin'}
          </button>
        </div>
      </div>
    </div>
  );
}