

import Link from 'next/link' 
import SanityCarousel from '@/components/SanityCarousel' 
import TemoignagesSection from '@/components/TemoignagesSection' 
import FaqSection from '@/components/FaqSection'

export default function SoinsVisagePage() { return ( <main className="bg-white text-dark mt-2">

{/* Bannière */}
  <section className="bg-light py-2 text-center">
    <div className="container">
      <h1 className="display-4 fw-bold text-pink">Soins du Visage</h1>
      <p className="lead text-muted">
        Redonnez éclat et fraîcheur à votre peau grâce à nos soins du visage adaptés à chaque type de peau.
      </p>
    </div>
  </section>

  {/* Carrousel Sanity */}
  <div className="bg-light">
    <SanityCarousel type="soins-visage" />
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
  <TemoignagesSection categorie="soins-visage" />

  {/* FAQ dynamique depuis Sanity */}
  <FaqSection categorie="soins-visage" />

  {/* CTA */}
  <section className="bg-pink text-white text-center py-5 mt-5">
    <div className="container">
      <h2 className="mb-4 display-6">Offrez à votre visage une nouvelle jeunesse</h2>
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

const cards = [ { title: 'Nettoyage Express', description: 'Démaquillage, gommage, tonification et hydratation.', duration: '30 min', price: '5 000 FCFA', }, { title: 'Soin Anti-Acné', description: 'Nettoyage profond, masque purifiant et traitement ciblé.', duration: '45 min', price: '8 000 FCFA', }, { title: 'Soin Anti-Âge', description: 'Massage liftant, masque raffermissant et sérum revitalisant.', duration: '60 min', price: '12 000 FCFA', }, ]

