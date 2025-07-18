// app/galerie/page.tsx
import GalerieClient from "./GalerieClient";
import { generateMetadata } from "@/utils/metadata";

export const metadata = generateMetadata({
  title: "Galerie - Germaine Nails",
  description: "Inspirez-vous de nos plus belles manucures, pédicures et soins visage à Lomé.",
  path: "/galerie",
  noIndex: false,
});

export default function GaleriePage() {
  return <GalerieClient />;
}
