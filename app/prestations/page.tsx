// app/prestations/page.tsx (SANS `use client`)
import { generateMetadata } from "@/utils/metadata";
import PrestationsClient from "./PrestationsClient";

export const metadata = generateMetadata({
  title: "Prestations - Germaine Nails",
  description: "Découvrez nos prestations de manucure, pédicure et soins du visage à Lomé.",
  path: "/prestations",
  noIndex: false,
});

export default function PrestationsPage() {
  return <PrestationsClient />;
}
