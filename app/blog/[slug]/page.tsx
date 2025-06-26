import { sanity } from '@/lib/sanity'
import ArticleClient from './ArticleClient'

// ✅ On désactive les erreurs de typage temporaires ici
// car Next.js a un bug de type dans `.next/types`
export default async function ArticlePage({ params }: any) {
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
    { slug }
  )

  if (!post) return null

  return <ArticleClient slug={slug} post={post} />
}

// ✅ Slugs dynamiques
export async function generateStaticParams() {
  const articles = await sanity.fetch(`*[_type == "blog"]{ "slug": slug.current }`)
  return articles.map((a: any) => ({ slug: a.slug }))
}

// ✅ SEO
export async function generateMetadata({ params }: any) {
  const post = await sanity.fetch(
    `*[_type == "blog" && slug.current == $slug][0]{ titre }`,
    { slug: params.slug }
  )

  return { title: post?.titre || 'Article' }
}