// lib/getArticles.ts
import { sanity } from "./sanity"

export async function getArticles() {
  const query = `*[_type == "article" && disponible == true]{
    _id,
    nom,
    description,
    prix,
    categorie,
    "imageUrl": image.asset->url
  }`

  return await sanity.fetch(query, {}, {
    next: { revalidate: 60 } // ⏱ ISR : revalidation toutes les 60s
  })
}