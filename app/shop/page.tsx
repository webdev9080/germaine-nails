// app/shop/page.tsx
import { getArticles } from '@/lib/getArticles'
import ShopClient from './ShopClient'
import { generateMetadata } from '@/utils/metadata'

export const metadata = generateMetadata({
  title: "Boutique - Germaine Nails",
  description: "Découvrez les produits en vente chez Germaine Nails : vernis, soins, accessoires et plus.",
  path: "/shop",
});

export default async function ShopPage() {
  const articles = await getArticles()

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Boutique Germaine Nails</h1>
      <ShopClient articles={articles} />
    </div>
  )
}