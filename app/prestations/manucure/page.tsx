"use client";
import { useEffect, useState } from 'react'
import Link from "next/link";

import SanityCarousel from '@/components/SanityCarousel'
import CommentairesList from '@/components/CommentairesList'
import Spinner from '@/components/Spinner'


type Commentaire = {
  _id: string
  nom: string
  message: string
  date: string
}

export default function ManucurePage() {

const [commentaires, setCommentaires] = useState<Commentaire[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchCommentaires() {
      try {
        const res = await fetch('/api/commentaires/manucure')
        const data = await res.json()
        setCommentaires(data)
      } catch (err) {
        console.error('Erreur lors du chargement des commentaires', err)
      } finally {
        setLoading(false)
      }
    }

    fetchCommentaires()
  }, [])

  
  return (
    <main className="bg-white text-dark">
      {/* Bannière */}
      <section className="bg-light py-5 text-center">
        <div className="container">
          <h1 className="display-4 fw-bold text-pink">Manucure</h1>
          <p className="lead text-muted">
            Offrez à vos mains le soin qu'elles méritent avec des prestations professionnelles et élégantes.
          </p>
        </div>
      </section>
      
      <div className="mt-4">
        <SanityCarousel type="manucure" />
      </div>

      {/* Détails des prestations */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {cards.map((card, i) => (
              <div className="col-md-4" key={i}>
                <div className="card h-100 border-0 shadow-sm rounded-4 hover-shadow transition-all">
                  <div className="card-body text-center">
                    <h5 className="card-title text-pink fw-semibold mb-3">{card.title}</h5>
                    <p className="card-text text-muted">{card.description}</p>
                    <ul className="list-unstyled mt-3">
                      <li>
                        <strong>Durée :</strong> {card.duration}
                      </li>
                      <li>
                        <strong>Prix :</strong> {card.price}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appel à l'action */}
      <section className="bg-pink text-white text-center py-5 mt-5">
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

      {/* Boutons de retour */}
      <section className="py-4 text-center">
        <Link href="/" className="btn btn-outline-secondary me-3 rounded-pill px-4">
          Retour à l'accueil
        </Link>
        
        {/*<Link href="/prestations" className="btn btn-outline-pink rounded-pill px-4">
          Voir toutes les prestations
        </Link>*/}
        
      </section>
      
      <section className="container">
           {loading ? <Spinner variant="primary" size="sm" text="Chargement en cours..." /> : <CommentairesList commentaires={commentaires} />}
           
      </section>
      
          
    </main>
  );
}

const cards = [
  {
    title: "Manucure Classique",
    description: "Nettoyage, limage, soin des cuticules, pose de vernis.",
    duration: "30 min",
    price: "4 000 FCFA",
  },
  {
    title: "Semi-Permanent",
    description: "Résistance prolongée avec une finition brillante.",
    duration: "45 min",
    price: "7 000 FCFA",
  },
  {
    title: "Nail Art",
    description: "Designs créatifs et personnalisés pour sublimer vos ongles.",
    duration: "60 min",
    price: "à partir de 10 000 FCFA",
  },
];
