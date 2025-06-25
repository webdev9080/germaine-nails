import { sanity } from '@/lib/sanity'
import ArticleClient from './ArticleClient'

// Génère les slugs statiques
export async function generateStaticParams() {
  const articles = await sanity.fetch(`*[_type == "blog"]{ "slug": slug.current }`)
  return articles.map((a: any) => ({ slug: a.slug }))
}

// Génère les métadonnées SEO
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await sanity.fetch(
    `*[_type == "blog" && slug.current == $slug][0]{ titre }`,
    { slug: params.slug }
  )
  return { title: post?.titre || 'Article' }
}

// Page de l'article
export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const slug = params.slug

  const post = await sanity.fetch(
    `*[_type == "blog" && slug.current == $slug][0]{
      _id,
      titre,
      slug,
      date,
      auteur,
      imagePrincipale{asset->{url}},
      contenu
    }`,
    { slug : params.slug }
  )

  if (!post) return null

  return <ArticleClient slug={slug} post={post} />
}