import { generateMetadata } from "@/utils/metadata";
import FormationClient from "./FormationClient";

export const metadata = generateMetadata({
  title: "Formations beauté à Lomé | Germaine Nails",
  description:
    "Inscrivez-vous à nos formations en manucure, pédicure et soins du visage à Lomé. Formateurs qualifiés, certificat délivré et cours pratiques.",
  path: "/formation",
  noIndex: false, // ✅ Page indexable par Google
});

export default function FormationPage() {
  return <FormationClient />;
}