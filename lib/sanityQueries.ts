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

// Récupération des partenaires Actuels (Page Partenariat )

export async function getPartenairesActuels() {
  return await sanity.fetch(
    `*[_type == "partenaire" && estApprouve == true && defined(logo.asset)]{
      _id,
      "nom": entreprise,
      siteWeb,
      "logo": logo.asset->url
    } | order(_createdAt desc)`,
    {},
    {
      next: { revalidate: 60 }
    }
  )
}