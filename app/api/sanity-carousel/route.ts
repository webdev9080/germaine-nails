// /app/api/sanity-carousel/route.ts

import { NextResponse, NextRequest } from 'next/server'
import { sanity } from '@/lib/sanity'

export async function GET(_req: NextRequest) {
  const { searchParams } = new URL(_req.url)
  const type = searchParams.get('type') || 'pedicure'

  const data = await sanity.fetch(`*[_type == "${type}"]{
    _id,
    title,
    description,
    image {
      asset->{
        url
      }
    }
  }`)

  return NextResponse.json(data)
}
