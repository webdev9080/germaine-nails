// app/page.tsx (Server Component)
import Home from "./Home";
import { generateMetadata } from "@/utils/metadata"; // utilitaire réutilisable

export const metadata = generateMetadata({
  title: "Accueil - Germaine Nails",
  description: "Visitez notre page d'accueil et découvrez nos services de manucure, pédicure et soins du visage à Lomé.",
  path: "/",
});

export default function Page() {
  return <Home />;
}