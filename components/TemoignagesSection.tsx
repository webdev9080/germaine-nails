'use client'

import { useEffect, useState } from 'react'
import { getTemoignagesByCategorie } from '@/lib/sanityQueries'

interface Temoignage {
  _id: string
  auteur: string
  contenu: string
}

export default function TemoignagesSection({ categorie }: { categorie: string }) {
  const [temoignages, setTemoignages] = useState<Temoignage[]>([])

  useEffect(() => {
    getTemoignagesByCategorie(categorie).then(setTemoignages)
  }, [categorie])

  if (!temoignages.length) return null

  return (
    <section className="py-3 bg-light">
      <div className="container">
        <h2 className="text-center mb-4 text-pink">Avis de nos clientes</h2>
        <div className="row g-4 justify-content-center">
          {temoignages.map((t) => (
            <div className="col-md-6" key={t._id}>
              <div className="card shadow-sm p-4 rounded-4">
                <p className="mb-3">&quot;{t.contenu}&quot;</p>
                <p className="text-end fw-semibold">— {t.auteur}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}