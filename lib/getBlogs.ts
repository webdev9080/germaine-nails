// lib/getBlogs.ts
import { sanity } from './sanity'

export async function getBlogs() {
  const query = `*[_type == "blog"] | order(date desc) {
    _id,
    titre,
    extrait,
    date,
    categorie,
    "slug": slug.current,
    "imagePrincipale": {
      "url": imagePrincipale.asset->url
    }
  }`

  return await sanity.fetch(query, {}, {
    next: { revalidate: 60 } // ⏱ Revalidation toutes les 60 secondes
  })
}