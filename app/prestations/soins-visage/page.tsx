"use client"

import Link from 'next/link'
import SanityCarousel from '@/components/SanityCarousel'

export default function SoinsVisagePage() {
  return (
    <main className="container py-5">
      <section className="text-center mb-5">
        <h1 className="display-5 fw-bold text-pink">Soins Visage</h1>
        <p className="lead text-muted">
          Redonnez éclat et vitalité à votre peau avec nos soins du visage adaptés à tous les types de peau.
        </p>
      </section>

      <section className="mb-5">
        <SanityCarousel type="soins-visage" />
      </section>

      <div className="text-center mb-5">
        <Link href="/contact" className="btn btn-pink text-dark rounded-5 bg-secondary-subtle px-4 py-2 fs-5 shadow-sm">
          Prendre rendez-vous
        </Link>
      </div>

      <section className="mt-5">
        <h2 className="text-center text-pink mb-4">Pourquoi choisir nos soins visage ?</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="p-4 border rounded shadow-sm h-100 text-center">
              <h5 className="text-pink">Diagnostic personnalisé</h5>
              <p className="text-muted">
                Chaque soin commence par une analyse de votre peau pour un traitement sur mesure.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 border rounded shadow-sm h-100 text-center">
              <h5 className="text-pink">Effet immédiat</h5>
              <p className="text-muted">
                Teint lumineux, peau hydratée et sensation de fraîcheur dès la première séance.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 border rounded shadow-sm h-100 text-center">
              <h5 className="text-pink">Produits naturels</h5>
              <p className="text-muted">
                Nous utilisons des soins à base d’ingrédients naturels respectueux de votre peau.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}