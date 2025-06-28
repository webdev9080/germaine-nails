"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { sanity } from "@/lib/sanity";
import imageUrlBuilder from "@sanity/image-url";
import Spinner from "@/components/Spinner";

// Pour générer les URLs d'image Sanity
const builder = imageUrlBuilder(sanity);
function urlFor(source: any) {
  return builder.image(source).width(800).height(600).fit("crop");
}

// Types des données
type ImageDoc = {
  _id: string;
  title: string;
  alt: string;
  category: string;
  image: any;
};

const categories = ["Tous", "Manucure", "Pédicure", "Soins Visage"];

export default function GaleriePage() {
  const [images, setImages] = useState<ImageDoc[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [loading, setLoading] = useState(true);

  // Charger les images depuis Sanity
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch("/api/galerie");
        const data = await res.json();
        setImages(data);
      } catch (error) {
        console.error("Erreur de chargement des images :", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  const filteredImages =
    selectedCategory === "Tous"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  return (
    <main className="bg-white text-dark">
      {/* Section Héro */}
      <section className="bg-light py-5 text-center">
        <div className="container">
          <h1 className="display-4 fw-bold text-pink">Galerie</h1>
          <p className="lead text-muted">
            Découvrez nos plus belles réalisations : manucures, pédicures et soins visage pour vous inspirer.
          </p>

          {/* Filtres */}
          <div className="d-flex justify-content-center gap-3 mt-4 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`btn ${
                  selectedCategory === cat ? "btn-pink" : "btn-outline-pink"
                } rounded-pill px-4`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Galerie Carousel */}
      <section className="py-5">
        <div className="container">
          {loading ? (
            <div className="text-center py-5">
              <Spinner size="sm" variant="warning" text="Loading images..." />
            </div>
          ) : filteredImages.length > 0 ? (
            <Swiper
              modules={[Navigation]}
              navigation
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                992: { slidesPerView: 3 },
              }}
            >
              {filteredImages.map((img) => (
                <SwiperSlide key={img._id}>
                  <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
                    <div className="position-relative" style={{ height: 250 }}>
                      <Image
                        src={urlFor(img.image).url()}
                        alt={img.alt}
                        fill
                        style={{ objectFit: "cover", borderRadius: "1rem" }}
                        priority
                      />
                    </div>
                    <div className="card-body text-center">
                      <p className="mb-0 text-muted small">{img.title}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <p className="text-center text-muted">Aucune image disponible.</p>
          )}
        </div>
      </section>

      {/* Réservation */}
      <section className="bg-pink text-white text-center py-5 mt-5">
        <div className="container">
          <h2 className="mb-4">Envie de vous faire chouchouter ?</h2>
          <p className="mb-4">Prenez rendez-vous dès maintenant pour une expérience de beauté inoubliable.</p>
          <Link href="/contact" className="btn btn-light text-pink fw-bold px-4 py-2">
            Prendre rendez-vous
          </Link>
        </div>
      </section>

      {/* Boutons de retour */}
      <section className="py-4 text-center">
         
        {/*<Link href="/" className="btn btn-outline-secondary me-3">
          Retour à l'accueil
        </Link>*/}
        
        <Link href="/prestations" className="btn btn-outline-pink text-pink bg-success rounded-5">
          Voir toutes les prestations
        </Link>
        
        <Link href="/dashboard" className="btn btn-outline-pink">
          Tableau de bord
        </Link>
        
      </section>
    </main>
  );
}
