'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface Blog {
  _id: string
  titre: string
  slug: string
  extrait: string
  date: string
  categorie: string
  imagePrincipale?: { url: string }
}

export default function BlogClient({ blogs }: { blogs: Blog[] }) {
  const [filtered, setFiltered] = useState<Blog[]>(blogs)
  const [categories, setCategories] = useState<string[]>([])
  const [search, setSearch] = useState('')
  const [activeCat, setActiveCat] = useState<string>('')

  useEffect(() => {
    const uniqueCats = Array.from(new Set(blogs.map((b) => b.categorie).filter(Boolean)))
    setCategories(uniqueCats)

    // Marquer les articles comme lus
    const ids = blogs.map((b) => b._id)
    localStorage.setItem('readBlogIds', JSON.stringify(ids))
  }, [blogs])

  useEffect(() => {
    let result = [...blogs]

    if (activeCat) {
      result = result.filter((b) => b.categorie === activeCat)
    }

    if (search) {
      const s = search.toLowerCase()
      result = result.filter(
        (b) => (b.titre + b.extrait).toLowerCase().includes(s)
      )
    }

    setFiltered(result)
  }, [search, activeCat, blogs])

  return (
    <>
      {/* 🔍 Barre de recherche */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Rechercher un article..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* 🏷️ Filtres */}
      <div className="mb-4 d-flex gap-2 flex-wrap">
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

      {/* 📄 Liste d'articles */}
      <div className="row">
        {filtered.length === 0 && <p>Aucun article trouvé.</p>}
        {filtered.map((blog) => (
          <div className="col-md-4 mb-4" key={blog._id}>
            <div className="card h-100 shadow-sm">
              {blog.imagePrincipale?.url && (
                <Image
                  src={blog.imagePrincipale.url}
                  alt={blog.titre}
                  width={400}
                  height={250}
                  className="card-img-top"
                  loading="lazy"
                />
              )}
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{blog.titre}</h5>
                <p className="card-text">{blog.extrait}</p>
                <Link
                  href={`/blog/${blog.slug}`}
                  className="btn btn-primary mt-auto"
                >
                  Lire plus
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
