// app/prestations/soins-visage/page.tsx
import SoinsVisageClient from "./SoinsVisageClient"
import SanityCarousel from "@/components/SanityCarousel"
import TemoignagesSection from "@/components/TemoignagesSection"
import FaqSection from "@/components/FaqSection"
import { generateMetadata } from "@/utils/metadata"

export const metadata = generateMetadata({
  title: "Soins du visage - Germaine Nails",
  description: "Profitez de soins du visage professionnels à Lomé pour une peau éclatante et en bonne santé.",
  path: "/prestations/soins-visage",
  noIndex: false,
});

export default function SoinsVisagePage() {
  return (
    <main className="bg-white text-dark mt-2">
        
      <div className="bg-light mb-1">
        <SoinsVisageClient />
      </div>

      {/* Carrousel Sanity */}
      <div className="bg-light">
        <SanityCarousel type="soins-visage" />
      </div>

      {/* Témoignages dynamiques */}
      <TemoignagesSection categorie="soins-visage" />

      {/* FAQ dynamique */}
      <FaqSection categorie="soins-visage" />
    </main>
  )
}
