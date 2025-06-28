"use client";

import { useEffect, useState } from "react"; import Image from "next/image"; import Link from "next/link"; import { Swiper, SwiperSlide } from "swiper/react"; import "swiper/css"; import "swiper/css/navigation"; import { Navigation } from "swiper/modules"; import { sanity } from "@/lib/sanity"; import imageUrlBuilder from "@sanity/image-url"; import Spinner from "@/components/Spinner"; import { FaPlayCircle } from "react-icons/fa";

const builder = imageUrlBuilder(sanity); function urlFor(source: any) { return builder.image(source).width(800).height(600).fit("crop"); }

type ImageDoc = { _id: string; title: string; alt: string; category: string; image: any; };

type VideoDoc = { _id: string; title: string; category: string; videoUrl: string; thumbnail?: any; };

const categories = ["Tous", "Manucure", "Pédicure", "Soins Visage"];

export default function GaleriePage() { const [images, setImages] = useState<ImageDoc[]>([]); const [videos, setVideos] = useState<VideoDoc[]>([]); const [selectedCategory, setSelectedCategory] = useState("Tous"); const [loadingImages, setLoadingImages] = useState(true); const [loadingVideos, setLoadingVideos] = useState(true);

useEffect(() => { const fetchImages = async () => { try { const res = await fetch("/api/galleryImages"); const data = await res.json(); setImages(data); } catch (error) { console.error("Erreur de chargement des images :", error); } finally { setLoadingImages(false); } };

const fetchVideos = async () => {
  try {
    const res = await fetch("/api/galleryVideos");
    const data = await res.json();
    setVideos(data);
  } catch (error) {
    console.error("Erreur de chargement des vidéos :", error);
  } finally {
    setLoadingVideos(false);
  }
};

fetchImages();
fetchVideos();

}, []);

const filteredImages = selectedCategory === "Tous" ? images : images.filter((img) => img.category === selectedCategory);

const filteredVideos = selectedCategory === "Tous" ? videos : videos.filter((vid) => vid.category === selectedCategory);

return ( <main className="bg-white text-dark"> <section className="bg-light py-5 text-center"> <div className="container"> <h1 className="display-4 fw-bold text-pink">Galerie</h1> <p className="lead text-muted"> Découvrez nos plus belles réalisations : manucures, pédicures et soins visage pour vous inspirer. </p>

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

  <section className="py-5">
    <div className="container">
      <h2 className="text-center mb-4">Photos</h2>
      {loadingImages ? (
        <div className="text-center py-5">
          <Spinner size="sm" variant="warning" text="Chargement des images..." />
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

  <section className="bg-light py-5 border-top">
    <div className="container">
      <h2 className="text-center mb-4">Vidéos</h2>
      {loadingVideos ? (
        <div className="text-center py-5">
          <Spinner size="sm" variant="warning" text="Chargement des vidéos..." />
        </div>
      ) : filteredVideos.length > 0 ? (
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
          {filteredVideos.map((vid) => (
            <SwiperSlide key={vid._id}>
              <div className="card border-0 shadow-sm rounded-4 overflow-hidden position-relative">
                <div className="ratio ratio-4x3">
                  <video
                    src={vid.videoUrl}
                    className="w-100 h-100 object-fit-cover"
                    controls
                  />
                </div>
                <div className="card-body text-center">
                  <p className="mb-0 text-muted small">{vid.title}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="text-center text-muted">Aucune vidéo disponible.</p>
      )}
    </div>
  </section>

  <section className="py-5 text-center">
    <div className="container">
      <h2 className="fw-bold mb-3">Encore plus d'inspirations ?</h2>
      <p className="text-muted mb-4">
        Suivez-nous sur <strong>Instagram</strong> pour nos dernières créations !
      </p>
      <Link
        href="https://www.instagram.com/germaine.nails"
        target="_blank"
        rel="noopener"
        className="btn btn-pink rounded-pill px-5 py-2 fw-bold"
      >
        Voir notre feed
      </Link>
    </div>
  </section>

  <section className="bg-pink text-white text-center py-5 mt-5">
    <div className="container">
      <h2 className="mb-4">Envie de vous faire chouchouter ?</h2>
      <p className="mb-4">Prenez rendez-vous dès maintenant pour une expérience de beauté inoubliable.</p>
      <Link href="/contact" className="btn btn-light text-pink fw-bold px-4 py-2">
        Prendre rendez-vous
      </Link>
      
      {/*<Link href="/galerieOld" className="btn btn-light text-pink fw-bold px-4 py-2">
        Ancienne galerie
      </Link>*/}
      
    </div>
  </section>

</main>

); }

