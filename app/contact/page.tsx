// app/contact/page.tsx

import { generateMetadata } from "@/utils/metadata";
import ContactPage from "./ContactPage";

export const metadata = generateMetadata({
  title: "Contact - Germaine Nails",
  description: "Prenez contact avec Germaine Nails à Lomé pour vos rendez-vous beauté.",
  path: "/contact",
});

export default function Page() {
  return <ContactPage />;
}