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
    { categorie: categorie.trim().toLowerCase() },
    {
      next: { revalidate: 60 } // ⏱ ISR : revalidation toutes les 60 secondes
    }
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
    { categorie: categorie.trim().toLowerCase() },
    {
      next: { revalidate: 60 } // Ajout aussi ici pour la FAQ si besoin
    }
  )
}