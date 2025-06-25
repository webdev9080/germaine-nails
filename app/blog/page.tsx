// app/blog/page.tsx
import { getBlogs } from '@/lib/getBlogs'
import BlogClient from './BlogClient'


export default async function BlogPage() {
  const blogs = await getBlogs()

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Nos Articles</h1>
      <BlogClient blogs={blogs} />
    </div>
  )
}