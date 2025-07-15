import DashboardClient from './DashboardClient';
import { generateMetadata as createMetadata } from '@/utils/metadata';

export const generateMetadata = () =>
  createMetadata({
    title: 'Dashboard Admin | Germaine Nails',
    description: 'Accédez au tableau de bord pour gérer les utilisateurs et messages.',
    path: '/dashboard',
    noIndex: true, // 👈 ici
  });

export default function DashboardPage() {
  return <DashboardClient />;
}
