import { generateMetadata as createMetadata } from '@/utils/metadata';
import UnauthorizedClient from './UnauthorizedClient';

export const generateMetadata = () =>
  createMetadata({
    title: 'Accès refusé | Germaine Nails',
    description: 'Cette page est réservée aux administrateurs.',
    path: '/unauthorized',
    
  });

export default function UnauthorizedPage() {
  return <UnauthorizedClient />;
}