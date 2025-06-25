// /app/api/sanity-carousel/route.ts

import { NextResponse } from 'next/server'
import { sanity } from '@/lib/sanity'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
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