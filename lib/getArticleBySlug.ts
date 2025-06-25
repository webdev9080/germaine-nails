// lib/getArticleBySlug.ts
import { sanity } from './sanity'

export async function getArticleBySlug(slug: string) {
  const query = `*[_type == "article" && slug.current == $slug][0]{
    _id,
    nom,
    description,
    prix,
    categorie,
    disponible,
    "slug": slug.current,
    "imageUrl": image.asset->url
  }`
  return await sanity.fetch(query, { slug })
}