

import Link from 'next/link' 

import SanityCarousel from '@/components/SanityCarousel' 
import TemoignagesSection from '@/components/TemoignagesSection' 
import FaqSection from '@/components/FaqSection'

export default function PedicurePage() { return ( <main className="bg-white text-dark mt-2">

{/* Bannière */}
  <section className="bg-light py-2 text-center">
    <div className="container">
      <h1 className="display-4 fw-bold text-pink">Pédicure</h1>
      <p className="lead text-muted">
        Offrez à vos pieds un moment de détente et de beauté avec nos soins spécialisés et apaisants.
      </p>
    </div>
  </section>

  {/* Carrousel Sanity */}
  <div className="bg-light">
    <SanityCarousel type="pedicure" />
  </div>

  {/* Prestations */}
  <section className="bg-light">
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
  <TemoignagesSection categorie="pedicure" />

  {/* FAQ dynamique depuis Sanity */}
  <FaqSection categorie="pedicure" />

  {/* CTA */}
  <section className="bg-pink text-white text-center py-5 mt-5" style={{ maxWidth: 1000, height: 250, margin: '0 auto' }}>
    <div className="container">
      <h2 className="mb-4 display-6">Prenez soin de vos pieds dès aujourd'hui</h2>
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

 const cards = [ { title: 'Pédicure Classique', description: 'Nettoyage, coupe, limage et hydratation des pieds.', duration: '40 min', price: '5 000 FCFA', }, { title: 'Soin Spa', description: 'Bain de pieds, gommage, massage relaxant et masque hydratant.', duration: '60 min', price: '9 000 FCFA', }, { title: 'Beauté des Ongles', description: 'Pose de vernis classique ou semi-permanent sur les pieds.', duration: '30 à 45 min', price: 'à partir de 6 000 FCFA', }, ]

