"use client"

// /app/prestations/soins-visage/page.tsx
import Link from 'next/link'
import { useEffect, useState } from 'react'

import SanityCarousel from '@/components/SanityCarousel'

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
        const res = await fetch('/api/commentaires/soins-visage')
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
      <h1 className="mb-4 text-pink">Soins-visage</h1>
      <p className="lead">
        Chouchoutez vos pieds avec nos soins relaxants et esthétiques.
      </p>

      <div className="mt-4">
        <SanityCarousel type="soins-visage" />
      </div>

      <div className="mt-5 d-flex justify-content-center  gap-3">
        {/*<Link href="/" className="btn btn-outline-secondary">
          Retour à l'accueil
        </Link>*/}
        <Link href="/contact" className="btn btn-pink text-dark rounded-5 bg-secondary-subtle">
          Prendre rendez-vous
        </Link>
      </div>
      
      
    </main>
  )
}
