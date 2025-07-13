"use client";

import { useEffect } from "react";
import Link from "next/link";
import styles from "./page.module.css";

import OptionCard from "@/components/OptionCard";
import CarrouselPrestations from "@/components/CarrouselPrestations";
import ClientWrapper from "@/components/ClientWrapper";
import Bienvenue from "@/components/Bienvenue";
import { useTranslation } from "react-i18next";



export default function Home() {
  const { t } = useTranslation("common");

  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("Adsense error:", e);
    }
  }, []);

  return (
    <main className="bg-white text-dark">
      {/* Hero Section */}
      <section
        className="hero-section position-relative text-white d-flex align-items-center justify-content-center py-3"
        style={{
          minHeight: "50vh",
          background: "url('/images/hero.jpg') center/cover no-repeat",
        }}
      >
        <div className="overlay position-absolute w-100 h-100 bg-dark opacity-50"></div>
        <div className="container position-relative text-center animate-fade-in">
          <h1 className="display-4 fw-bold mb-3">
            {t("hero.title1")} <span className="text-pink">Germaine Nails</span>
          </h1>
          <p className="lead mb-4">{t("hero.subtitle")}</p>
          <Link
            href="/contact"
            className="btn btn-pink bg-info-subtle lead text-black px-4 py-2 shadow rounded-5"
          >
            {t("hero.button")}
          </Link>
        </div>
      </section>

      {/* Prestations */}
      <section className="bg-light py-3">
        <div className="container text-center mb-4">
          <h2 className="display-5 fw-semibold">{t("prestations.title")}</h2>
          <p className="text-muted">{t("prestations.subtitle")}</p>
        </div>
        <ClientWrapper>
          <CarrouselPrestations />
        </ClientWrapper>
      </section>

      {/* Services */}
      <section id="services" className="py-5 bg-body-tertiary text-center">
        <div className="container">
          <h3 className="mb-5 display-6 fw-bold">{t("services.title")}</h3>
          <div className="row g-4">
            {[
              {
                title: t("services.manucure.title"),
                desc: t("services.manucure.desc"),
                href: "/prestations/manucure",
              },
              {
                title: t("services.pedicure.title"),
                desc: t("services.pedicure.desc"),
                href: "/prestations/pedicure",
              },
              {
                title: t("services.soinsVisage.title"),
                desc: t("services.soinsVisage.desc"),
                href: "/prestations/soins-visage",
              },
            ].map((item, i) => (
              <div key={i} className="col-md-4">
                <Link
                  href={item.href}
                  className="text-decoration-none text-dark"
                >
                  <div className="p-4 border rounded-4 shadow-sm bg-white h-100 hover-shadow transition">
                    <h4 className="text-pink mb-2">{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* AdSense */}
        <ins
          className="adsbygoogle"
          style={{ display: "block", marginTop: "2rem" }}
          data-ad-client="ca-pub-8324514138250709"
          data-ad-slot="4478125382"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </section>

      {/* Formations */}
      <section className="py-5 bg-info-subtle">
        <div className="container">
          <h2 className="text-center mb-4 fw-bold">{t("formationSection.title")}</h2>
          <OptionCard />
        </div>
      </section>

      <Bienvenue />
    </main>
  );
}