"use client"

// /app/prestations/pedicure/page.tsx
import Link from 'next/link'
import { useEffect, useState } from 'react'

import SanityCarousel from '@/components/SanityCarousel'
import CommentairesList from '@/components/CommentairesList'
import Spinner from '@/components/Spinner'


type Commentaire = {
  _id: string
  nom: string
  message: string
  date: string
}


export default function PedicurePage() {

  const [commentaires, setCommentaires] = useState<Commentaire[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchCommentaires() {
      try {
        const res = await fetch('/api/commentaires/pedicure')
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
    <main className="container py-5">
      <h1 className="mb-4 text-pink">Pédicure</h1>
      <p className="lead">
        Chouchoutez vos pieds avec nos soins relaxants et esthétiques.
      </p>

      <div className="mt-4">
        <SanityCarousel type="pedicure" />
      </div>

      <div className="mt-5 d-flex justify-content-center gap-3">
        {/*<Link href="/" className="btn btn-outline-secondary">
          Retour à l'accueil
        </Link>*/}
        <Link href="/contact" className="btn btn-pink text-white">
          Prendre rendez-vous
        </Link>
      </div>
      
      
      {/*<section className="mt-4 justify-content-center container">
          <h2 className="mb-3 text-center text-pink">Avis de nos clients/(es)</h2>
           {loading ? <Spinner variant="primary" size="sm" text="Chargement commentaires en cours..." /> : <CommentairesList commentaires={commentaires} />}
      </section>*/}
      
      
    </main>
  )
}
