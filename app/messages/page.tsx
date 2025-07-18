import MessagesClient from './MessagesClient';
import { generateMetadata as createMetadata } from '@/utils/metadata';

export const generateMetadata = () =>
  createMetadata({
    title: 'Messages | Germaine Nails',
    description: 'Retrouvez les annonces, promotions et événements de Germaine Nails.',
    path: '/messages',
    noIndex: false,
  });

export default function MessagesPage() {
  return <MessagesClient />;
}
