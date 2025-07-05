import SoinsVisageClient from "./SoinsVisageClient"
import SanityCarousel from "@/components/SanityCarousel"
import TemoignagesSection from "@/components/TemoignagesSection"
import FaqSection from "@/components/FaqSection"

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