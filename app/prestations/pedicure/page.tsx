"use client"

import Link from 'next/link'
import SanityCarousel from '@/components/SanityCarousel'

export default function PedicurePage() {
  return (
    <main className="container py-5">
      <section className="text-center mb-5">
        <h1 className="display-5 fw-bold text-pink">Pédicure</h1>
        <p className="lead text-muted">
          Chouchoutez vos pieds avec nos soins relaxants et esthétiques.
        </p>
      </section>

      <section className="mb-5">
        <SanityCarousel type="pedicure" />
      </section>

      <div className="text-center mb-5">
        <Link href="/contact" className="btn btn-pink text-white px-4 py-2 fs-5 rounded-pill shadow">
          Prendre rendez-vous
        </Link>
      </div>

      <section className="mt-5">
        <h2 className="text-center text-pink mb-4">Pourquoi choisir nos soins pédicure ?</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="p-4 border rounded shadow-sm h-100 text-center">
              <h5 className="text-pink">Hygiène irréprochable</h5>
              <p className="text-muted">
                Nous utilisons des outils stérilisés et respectons les normes les plus strictes.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 border rounded shadow-sm h-100 text-center">
              <h5 className="text-pink">Confort & bien-être</h5>
              <p className="text-muted">
                Chaque soin est un moment de détente pour sublimer vos pieds tout en vous relaxant.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 border rounded shadow-sm h-100 text-center">
              <h5 className="text-pink">Produits de qualité</h5>
              <p className="text-muted">
                Nous utilisons uniquement des produits professionnels pour des résultats durables.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}