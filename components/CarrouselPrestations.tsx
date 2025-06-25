'use client';

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import Link from "next/link";
import { urlFor } from '@/lib/urlFor';
import SkeletonCard from '@/components/SkeletonCard';

interface Prestation {
  titre: string;
  images?: any[];
}

export default function CarrouselPrestations() {
  const [prestations, setPrestations] = useState<Prestation[]>([]);
  const [isLoading, setIsLoading] = useState(true); // ⏳ état de chargement

  useEffect(() => {
    fetch('/api/prestations')
      .then(res => res.json())
      .then(data => setPrestations(data))
      .catch(err => console.error("Erreur chargement prestations", err))
      .finally(() => setIsLoading(false)); // ⏹️ fin de chargement
  }, []);

  return (
    <div className="carrousel-wrapper mb-2">
      {isLoading ? (
        // 🟡 Skeleton en attendant
        <>
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </>
      ) : prestations.length === 0 ? (
        <p className="fallback-global">Aucune prestation trouvée.</p>
      ) : (
        prestations.map((item, index) => (
          <div key={index} className="carrousel-item">
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              spaceBetween={10}
              slidesPerView={1}
              className="swiper-container"
            >
              {(item.images && item.images.length > 0 ? item.images : [null]).map((img, i) => {
                const imageUrl = img
                  ? urlFor(img)
                      .width(600)
                      .height(600)
                      .auto('format')
                      .fit('crop')
                      .url()
                  : '/images/manucure.jpg';

                return (
                  <SwiperSlide key={i}>
                    <Image
                      src={imageUrl}
                      alt={img ? `${item.titre} ${i + 1}` : 'Image non disponible'}
                      width={300}
                      height={300}
                      priority={i === 0}
                      placeholder="blur"
                      blurDataURL="/images/manucure.jpg"
                      className="slide-image"
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>

            <h3 className="title">{item.titre}</h3>
            <Link href="/galerie">
              <button className="voir-plus">Voir plus</button>
            </Link>
          </div>
        ))
      )}
    </div>
  );
}
