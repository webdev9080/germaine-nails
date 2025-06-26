'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import Spinner from '@/components/Spinner'
import CommentairesList from '@/components/CommentairesList'
import CommentForm from '@/components/CommentForm'


type Commentaire = {
  _id: string
  nom: string
  message: string
  date: string
}

export default function ArticleClient({
  slug,
  post,
}: {
  slug: string
  post: {
    _id: string
    titre: string
    date: string
    auteur?: string
    imagePrincipale?: { asset: { url: string } }
    contenu: any
  }
}) {
  const [commentaires, setCommentaires] = useState<Commentaire[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchCommentaires() {
      try {
        setLoading(true)
        const res = await fetch(`/api/commentaires/${slug}`)
        const data = await res.json()
        setCommentaires(data)
      } catch (err) {
        console.error('Erreur chargement commentaires', err)
      } finally {
        setLoading(false)
      }
    }

    fetchCommentaires()
  }, [slug])

  {/*const handleSubmit = async (formData: FormData) => {
    const nom = formData.get('nom')?.toString()
    const message = formData.get('message')?.toString()

    if (!nom || !message) return

    await fetch('/api/commentaires', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ articleId: post._id, nom, message }),
    })

    // Recharger les commentaires après soumission
    const res = await fetch(`/api/commentaires/${slug}`)
    const data = await res.json()
    setCommentaires(data)
  }*/}

  const formattedDate = new Date(post.date).toLocaleDateString('fr-FR')

  return (
    <div className="container py-5 position-relative">

      <div className="row justify-content-center">
        <div className="col-lg-10">

          <h1 className="mb-3 fw-bold">{post.titre}</h1>
          <p className="text-muted mb-4">
            Publié le {formattedDate} par <strong>{post.auteur || 'Germaine Nails'}</strong>
          </p>

          {/* Image principale */}
          {post.imagePrincipale?.asset?.url && (
            <div className="mb-4">
              <Image
                src={post.imagePrincipale.asset.url}
                alt={post.titre}
                width={800}
                height={400}
                className="img-fluid rounded shadow-sm w-100"
                unoptimized
              />
            </div>
          )}

          {/* Contenu PortableText */}
          
          <article className="mb-5 fs-5 lh-lg">
            <PortableText
              value={post.contenu}
              components={{
                types: {
                  image: ({ value }) =>
                    value?.asset?.url && (
                      <div className="text-center my-4">
                        <Image
                          src={value.asset.url}
                          alt="image"
                          width={600}
                          height={400}
                          className="img-fluid rounded shadow-sm"
                          unoptimized
                        />
                      </div>
                    ),
                },
                block: {
                  h2: ({ children }) => <h2 className="mt-5 mb-3 h4">{children}</h2>,
                  normal: ({ children }) => <p className="mb-4">{children}</p>,
                },
              }}
            />
          </article>

          {/* Formulaire commentaire */}
          
<div className="card border-0 shadow-sm mb-5">
  <div className="card-body">
    <h4 className="card-title mb-3">Laisser un commentaire</h4>
    <CommentForm
      articleId={post._id}
      onCommentPosted={async () => {
        const res = await fetch(`/api/commentaires/${slug}`)
        
        const data = await res.json()
        setCommentaires(data)
      }}
    />
  </div>
</div>

          {/* Liste des commentaires */}
          {!loading && <CommentairesList commentaires={commentaires} />}
          
          
        </div>
      </div>
    </div>
  )
}
