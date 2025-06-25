'use client'

import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import Image from 'next/image';

import SkeletonCard from '@/components/SkeletonCard'

interface SanityCarouselProps {
  type: string
}

interface SanityItem {
  _id: string
  title: string
  description: string
  image: {
    asset: {
      url: string
    }
  }
}

export default function SanityCarousel({ type }: SanityCarouselProps) {
  const [items, setItems] = useState<SanityItem[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/sanity-carousel?type=${type}`)
      const data = await res.json()
      setItems(data)
    }

    fetchData()
  }, [type])

  if (!items.length) return <div className="bg-dark-subtle d-flex justify-content-center p-2"><SkeletonCard /></div>
    

  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={20}
      slidesPerView={1}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
    >
      {items.map((item, index) => (
        <SwiperSlide key={item._id}>
          <div className="card">
            <Image
              width={400}
              height={600}
              src={item.image.asset.url}
              className="card-img-top"
              alt={item.title}
              style={{ maxHeight: 300, objectFit: 'cover' }}
            />
            <div className="card-body d-flex justify-content-center ">
              <h5 className="card-title px-3">{item.title}</h5>
              <p className="card-text">{item.description}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
