import { sanity } from "@/lib/sanity";
import ArticleClient from "./ArticleClient";
import { generateMetadata as seoMetadata } from "@/utils/metadata";

// ✅ Revalidation ISR toutes les 60s
export const revalidate = 60;

// ✅ Page Article dynamique
export default async function ArticlePage({ params }: any) {
  const slug = params.slug;

  const post = await sanity.fetch(
    `*[_type == "blog" && slug.current == $slug][0]{
      _id,
      titre,
      slug,
      date,
      auteur,
      "image": imagePrincipale.asset->url,
      contenu
    }`,
    { slug }
  );

  if (!post) return null;

  return <ArticleClient slug={slug} post={post} />;
}

// ✅ Génération des slugs statiques (SSG)
export async function generateStaticParams() {
  const articles = await sanity.fetch(`*[_type == "blog"]{ "slug": slug.current }`);
  return articles.map((a: any) => ({ slug: a.slug }));
}

// ✅ SEO dynamique avec description extraite du contenu
export async function generateMetadata({ params }: any) {
  const post = await sanity.fetch(
    `*[_type == "blog" && slug.current == $slug][0]{
      titre,
      "image": imagePrincipale.asset->url,
      contenu
    }`,
    { slug: params.slug }
  );

  const plainText = Array.isArray(post?.contenu)
    ? post.contenu
        .map((block: any) =>
          block.children?.map((child: any) => child.text).join(" ")
        )
        .join(" ")
    : "";

  const shortDescription = plainText
    ? plainText.substring(0, 150) + (plainText.length > 150 ? "..." : "")
    : `Lisez "${post?.titre}" sur Germaine Nails.`;

  return seoMetadata({
    title: post?.titre ? `${post.titre} | Germaine Nails` : "Article | Germaine Nails",
    description: shortDescription,
    path: `/blog/${params.slug}`,
    noIndex: false,
  });
}