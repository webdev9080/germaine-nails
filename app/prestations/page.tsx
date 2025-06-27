"use client";

import Image from "next/image";
import Link from "next/link";

export default function Prestations() {
  return (
    <main className="bg-white text-dark">
      {/* En-tête */}
      <section className="bg-light py-3 text-center">
        <div className="container">
          <h1 className="display-4 fw-bold mb-3">Nos Prestations</h1>
          <p className="lead text-muted">
            Sublimez votre beauté avec nos soins professionnels
          </p>
        </div>
      </section>

      {/* Prestations */}
      <section className="py-3 bg-white">
        <div className="container">
          <div className="row g-4">
            {/* Manucure */}
            <PrestationCard
              title="Manucure"
              image="/images/manucure.jpg"
              alt="Manucure"
              description="Soin complet des mains et des ongles pour une finition élégante."
              link="/prestations/manucure"
            />

            {/* Pédicure */}
            <PrestationCard
              title="Pédicure"
              image="/images/pedicure.png"
              alt="Pédicure"
              description="Détente, hydratation et soin pour des pieds doux et soignés."
              link="/prestations/pedicure"
            />

            {/* Soins visage */}
            <PrestationCard
              title="Soins Visage"
              image="/images/soins-visage.jpg"
              alt="Soins Visage"
              description="Nettoyage en profondeur et éclat naturel pour votre peau."
              link="/prestations/soins-visage"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

function PrestationCard({
  title,
  image,
  alt,
  description,
  link,
}: {
  title: string;
  image: string;
  alt: string;
  description: string;
  link: string;
}) {
  return (
    <div className="col-md-4">
      <div className="card h-100 shadow-sm border-0 rounded-4 overflow-hidden hover-shadow transition-all">
        <div className="position-relative" style={{ height: "240px" }}>
          <Image
            src={image}
            alt={alt}
            layout="fill"
            objectFit="cover"
            className="card-img-top"
          />
        </div>
        <div className="card-body text-center d-flex flex-column justify-content-between">
          <h4 className="card-title text-pink mt-3 mb-2">{title}</h4>
          <p className="card-text text-muted mb-4">{description}</p>
          <Link href={link} className="btn btn-outline-pink text-warning bg-dark-subtle rounded-pill px-4">
            En savoir plus
          </Link>
        </div>
      </div>
    </div>
  );
}
