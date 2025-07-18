// app/contact/page.tsx

import { generateMetadata } from "@/utils/metadata";
import ContactPage from "./ContactPage";
import AdBanner from "@/components/ads/AdBanner";

export const metadata = generateMetadata({
  title: "Contact - Germaine Nails",
  description: "Prenez contact avec Germaine Nails à Lomé pour vos rendez-vous beauté.",
  path: "/contact",
  noIndex: false,
});

export default function Page() {
  return <ContactPage />;
  <AdBanner adSlot="4478125382" />
}
