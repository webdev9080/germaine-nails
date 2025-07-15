import { generateMetadata as createMetadata } from '@/utils/metadata';
import SettingsClient from './SettingsClient';

export const generateMetadata = () =>
  createMetadata({
    title: 'Paramètres | Germaine Nails',
    description: 'Gérez votre profil, thème et langue d’affichage.',
    path: '/settings',
    noIndex: true,
  });

export default function SettingsPage() {
  return <SettingsClient />;
}