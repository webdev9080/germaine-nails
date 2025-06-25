// app/shop/[slug]/page.tsx
import Image from 'next/image'
import Link from 'next/link'
import { getArticleBySlug } from '@/lib/getArticleBySlug'
import { notFound } from 'next/navigation'

export const revalidate = 60 // ISR toutes les 60s

interface Props {
  params: { slug: string }
}

export default async function ArticlePage({ params }: Props) {
  const article = await getArticleBySlug(params.slug)

  if (!article) return notFound()

  const whatsappMessage = `Bonjour, je suis intéressé(e) par le produit : ${article.nom} (${article.prix.toLocaleString()} FCFA)`
  const whatsappLink = `https://wa.me/22890805252?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <div className="container py-5">
      <Link href="/shop" className="btn btn-outline-secondary mb-4">
        ← Retour à la boutique
      </Link>

      <div className="row">
        <div className="col-md-6 mb-4">
          <Image
            src={article.imageUrl}
            alt={article.nom}
            width={600}
            height={400}
            className="img-fluid rounded shadow-sm"
            priority
          />
        </div>
        <div className="col-md-6">
          <h2 className="mb-3">{article.nom}</h2>
          <p className="text-muted">Catégorie : {article.categorie}</p>
          <h4 className="text-primary">{article.prix.toLocaleString()} FCFA</h4>
          <p className="text-center mt-4">{article.description}</p>

          {article.disponible ? (
            <a
              href={whatsappLink}
              className="btn btn-success d-flex justify-content-center mt-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              Acheter via WhatsApp
            </a>
          ) : (
            <p className="text-center text-danger mt-3 fw-bold">
              ⛔ Produit indisponible
            </p>
          )}
        </div>
      </div>
    </div>
  )
}