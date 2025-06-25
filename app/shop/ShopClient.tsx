'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Article {
  _id: string
  nom: string
  slug: string
  description: string
  prix: number
  categorie: string
  imageUrl: string
}

export default function ShopClient({ articles }: { articles: Article[] }) {
  const [activeCat, setActiveCat] = useState<string>('')

  const categories = Array.from(new Set(articles.map((a) => a.categorie).filter(Boolean)))
  const filtered = activeCat ? articles.filter((a) => a.categorie === activeCat) : articles

  useEffect(() => {
    const ids = articles.map((a) => a._id)
    localStorage.setItem('readShopIds', JSON.stringify(ids))
  }, [articles])

  return (
    <>
      {/* 🏷️ Filtres par catégorie */}
      <div className="d-flex flex-wrap gap-2 mb-4">
        <button
          className={`btn btn-sm ${activeCat === '' ? 'btn-primary' : 'btn-outline-primary'}`}
          onClick={() => setActiveCat('')}
        >
          Tous
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`btn btn-sm ${activeCat === cat ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setActiveCat(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 🛍️ Articles */}
      <div className="row">
        {filtered.length > 0 ? (
          filtered.map((a) => (
            <div className="col-md-4 mb-4" key={a._id}>
              <div className="card h-100 shadow-sm">
                {a.imageUrl && (
                  <Image
                    src={a.imageUrl}
                    alt={a.nom}
                    width={400}
                    height={300}
                    className="card-img-top object-fit-cover"
                    loading="lazy"
                  />
                )}
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title d-flex p-2 justify-content-between align-items-center">
                    <span className="text-dark">{a.nom}</span>
                    <Link
                      href={`/shop/${a.slug}`}
                      className="btn btn-info rounded-3 text-white"
                    >
                      Consulter
                    </Link>
                  </h5>
                  <p className="card-text text-center">{a.description}</p>
                  <div className="mt-auto fw-bold text-primary">
                    {a.prix.toLocaleString()} FCFA
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-muted text-center">Aucun article trouvé dans cette catégorie.</p>
        )}
      </div>
    </>
  )
}