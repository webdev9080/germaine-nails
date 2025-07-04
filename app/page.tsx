"use client";

import Image from "next/image";
import Link from 'next/link';
import styles from "./page.module.css";

import OptionCard from "@/components/OptionCard";
import CarrouselPrestations from "@/components/CarrouselPrestations";
import ClientWrapper from "@/components/ClientWrapper";
import Bienvenue from "@/components/Bienvenue";

export default function Home() {
  return (
    <main className="bg-white text-dark">
        

      {/* Hero Section */}
      <section className="hero-section position-relative text-white d-flex align-items-center justify-content-center py-3" style={{ minHeight: "50vh", background: "url('/images/hero.jpg') center/cover no-repeat" }}>
        <div className="overlay position-absolute w-100 h-100 bg-dark opacity-50"></div>
        <div className="container position-relative text-center animate-fade-in">
          <h1 className="display-4 fw-bold mb-3">
            Révélez votre beauté avec <span className="text-pink">Germaine Nails</span>
          </h1>
          <p className="lead mb-4">
            Des soins professionnels pour vos mains, pieds et visage
          </p>
          <Link href="/contact" className="btn btn-pink bg-info-subtle lead text-black px-4 py-2 shadow rounded-5">
            Prendre rendez-vous
          </Link>
        </div>
      </section>

      {/* Prestations Section */}
      <section className="bg-light py-3">
        <div className="container text-center mb-4">
          <h2 className="display-5 fw-semibold">Nos prestations</h2>
          <p className="text-muted">Un aperçu de notre savoir-faire</p>
        </div>
        <ClientWrapper>
          <CarrouselPrestations />
        </ClientWrapper>
      </section>

      {/* Services Aperçu */}
      <section id="services" className="py-5 bg-body-tertiary text-center">
        <div className="container">
          <h3 className="mb-5 display-6 fw-bold">Nos Services</h3>
          <div className="row g-4">
            {[
              {
                title: "Manucure",
                href: "/prestations/manucure",
                desc: "Sublimez vos ongles avec élégance"
              },
              {
                title: "Pédicure",
                href: "/prestations/pedicure",
                desc: "Détente et soin pour vos pieds"
              },
              {
                title: "Soins Visage",
                href: "/prestations/soins-visage",
                desc: "Éclat naturel et hydratation en profondeur"
              }
            ].map((item, i) => (
              <div key={i} className="col-md-4">
                <Link href={item.href} className="text-decoration-none text-dark">
                  <div className="p-4 border rounded-4 shadow-sm bg-white h-100 hover-shadow transition">
                    <h4 className="text-pink mb-2">{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OptionCard Section */}
      <section className="py-5 bg-info-subtle">
        <div className="container">
          <h2 className="text-center mb-4 fw-bold">Formation • Partenariat • Blog</h2>
          <OptionCard />
        </div>
      </section>
      
      <Bienvenue />

    </main>
  );
}
