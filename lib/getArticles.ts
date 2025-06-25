// lib/getArticles.ts
import { sanity } from './sanity'

export async function getArticles() {
  const query = `*[_type == "article" && disponible == true]{
    _id,
    nom,
    description,
    prix,
    categorie,
    "slug": slug.current,
    "imageUrl": image.asset->url
  }`
  return await sanity.fetch(query)
}