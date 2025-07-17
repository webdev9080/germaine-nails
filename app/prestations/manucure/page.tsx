// app/prestations/manucure/page.tsx ✅ NE PAS ajouter "use client"


import Link from 'next/link'
import SanityCarousel from '@/components/SanityCarousel'
import TemoignagesSection from '@/components/TemoignagesSection'
import FaqSection from '@/components/FaqSection'
import ManucureClient from './ManucureClient'
import AdBanner from "@/components/ads/AdBanner";

import { generateMetadata } from '@/utils/metadata'

export const metadata = generateMetadata({
  title: "Manucure - Germaine Nails",
  description: "Découvrez nos soins de manucure à Lomé pour des ongles éclatants et soignés.",
  path: "/prestations/manucure",
});
  
export default function ManucurePage() {
  return (
    <main className="bg-white text-dark mt-2">
        
      <div className="mb-1 bg-light">
          <ManucureClient />
      </div>

      <div className="bg-light">
        <SanityCarousel type="manucure" />
      </div>
      
      <TemoignagesSection categorie="manucure" />
      <FaqSection categorie="manucure" />

      <section className="bg-pink text-white text-center py-5 mt-5" style={{ maxWidth: 1000, height: 250, margin: '0 auto' }}>
        <div className="container">
          <h2 className="mb-4 display-6">Réservez votre séance de manucure dès aujourd'hui</h2>
          <Link
            href="/contact"
            className="btn btn-light text-pink fw-bold px-4 py-2 rounded-pill shadow-sm"
          >
            Prendre rendez-vous
          </Link>
        </div>
      </section>
      <AdBanner adSlot="4478125382" />
    </main>
  )
}
