// app/blog/page.tsx
import { getBlogs } from '@/lib/getBlogs'
import BlogClient from './BlogClient'
import { generateMetadata } from '@/utils/metadata' // <-- utilise ta fonction

export const metadata = generateMetadata({
  title: "Blog - Germaine Nails",
  description: "Consultez nos articles sur les soins de beauté, astuces, conseils et nouveautés.",
  path: "/blog",
  noIndex: false,
  
})

export default async function BlogPage() {
  const blogs = await getBlogs()

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Nos Articles</h1>
      <BlogClient blogs={blogs} />
    </div>
  )
}
