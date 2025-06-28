// app/api/sanity-carousel/route.ts
import { NextRequest } from 'next/server'
import { sanity } from '@/lib/sanity'
import { withRevalidation } from '@/lib/apiResponse'

export async function GET(_req: NextRequest) {
  const { searchParams } = new URL(_req.url)
  const type = searchParams.get('type') || 'pedicure'

  const query = `*[_type == "${type}"]{
    _id,
    title,
    description,
    image {
      asset->{
        url
      }
    }
  }`

  const data = await sanity.fetch(query)

  return withRevalidation(data) // ✅ données dynamiques + cache maîtrisé
}