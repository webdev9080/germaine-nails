// app/shop/page.tsx
import { getArticles } from '@/lib/getArticles'
import ShopClient from './ShopClient'

export default async function ShopPage() {
  const articles = await getArticles()
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Boutique Germaine Nails</h1>
      <ShopClient articles={articles} />
    </div>
  )
}
