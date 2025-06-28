import { groq } from 'next-sanity'
import { sanity } from './sanity'

// Témoignages par catégorie (insensible à la casse)
export async function getTemoignagesByCategorie(categorie: string) {
  return sanity.fetch(
    groq`*[_type == "temoignage" && lower(categorie) == lower($categorie)]{
      _id,
      auteur,
      contenu
    }`,
    { categorie: categorie.trim().toLowerCase() }
  )
}

// FAQ par catégorie (insensible à la casse)
export async function getFaqByCategorie(categorie: string) {
  return sanity.fetch(
    groq`*[_type == "faq" && lower(categorie) == lower($categorie)]{
      _id,
      question,
      reponse
    }`,
    { categorie: categorie.trim().toLowerCase() }
  )
}