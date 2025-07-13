// app/prestations/pedicure/page.tsx
import PedicureClient from "./PedicureClient"
import SanityCarousel from "@/components/SanityCarousel"
import TemoignagesSection from "@/components/TemoignagesSection"
import FaqSection from "@/components/FaqSection"
import { generateMetadata } from "@/utils/metadata"

export const metadata = generateMetadata({
  title: "Pédicure - Germaine Nails",
  description: "Offrez à vos pieds les meilleurs soins à Lomé avec notre service de pédicure professionnel.",
  path: "/prestations/pedicure",
});

export default function PedicurePage() {
  return (
    <main className="bg-white text-dark mt-2">
      {/* Section Bannière + Prestations + CTA */}
      
      <div className="bg-light mb-1">
        <PedicureClient />
      </div>

      {/* Carrousel depuis Sanity */}
      <div className="bg-light">
        <SanityCarousel type="pedicure" />
      </div>

      {/* Témoignages dynamiques depuis Sanity */}
      <TemoignagesSection categorie="pedicure" />

      {/* FAQ dynamique depuis Sanity */}
      <FaqSection categorie="pedicure" />
    </main>
  )
}