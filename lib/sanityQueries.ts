import { groq } from 'next-sanity'
import { sanity } from './sanity' // ← ça utilise ton client déjà configuré

export async function getTemoignagesByCategorie(categorie: string) {
  return sanity.fetch(
    groq`*[_type == "temoignage" && categorie == $categorie]{
      _id,
      auteur,
      contenu
    }`,
    { categorie }
  )
}

export async function getFaqByCategorie(categorie: string) {
  return sanity.fetch(
    groq`*[_type == "faq" && categorie == $categorie]{
      _id,
      question,
      reponse
    }`,
    { categorie }
  )
}