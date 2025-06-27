'use client'

import Link from 'next/link' 

import SanityCarousel from '@/components/SanityCarousel' 

import TemoignagesSection from '@/components/TemoignagesSection' 

import FaqSection from '@/components/FaqSection'

export default function ManucurePage() { return ( <main className="bg-white text-dark mt-2">

{/* Bannière */}
  <section className="bg-light py-2 text-center">
    <div className="container">
      <h1 className="display-4 fw-bold text-pink">Manucure</h1>
      <p className="lead text-muted">
        Offrez à vos mains le soin qu'elles méritent avec des prestations professionnelles et élégantes.
      </p>
    </div>
  </section>

  {/* Carrousel Sanity */}
  <div className="bg-light">
    <SanityCarousel type="manucure" />
  </div>

  {/* Prestations */}
  <section className="py-2">
    <div className="container">
      <div className="row g-2">
        {cards.map((card, i) => (
          <div className="col-md-4" key={i}>
            <div className="card h-100 border-0 shadow-sm rounded-4 hover-shadow transition-all">
              <div className="card-body text-center">
                <h5 className="card-title text-pink fw-semibold mb-3">{card.title}</h5>
                <p className="card-text text-muted">{card.description}</p>
                <ul className="list-unstyled mt-3">
                  <li><strong>Durée :</strong> {card.duration}</li>
                  <li><strong>Prix :</strong> {card.price}</li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* Témoignages dynamiques depuis Sanity */}
  <TemoignagesSection categorie="manucure" />

  {/* FAQ dynamique depuis Sanity */}
  <FaqSection categorie="manucure" />

  {/* CTA */}
  <section className="bg-pink text-white text-center py-5 mt-5" style={{ maxWidth: 400, height: 350, margin: '0 auto' }}>
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

</main>

) }

const cards = [ { title: 'Manucure Classique', description: 'Nettoyage, limage, soin des cuticules, pose de vernis.', duration: '30 min', price: '4 000 FCFA', }, { title: 'Semi-Permanent', description: 'Résistance prolongée avec une finition brillante.', duration: '45 min', price: '7 000 FCFA', }, { title: 'Nail Art', description: 'Designs créatifs et personnalisés pour sublimer vos ongles.', duration: '60 min', price: 'à partir de 10 000 FCFA', }, ]

