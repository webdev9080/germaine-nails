"use client"

import { useTranslation } from "react-i18next"
import Link from "next/link"

export default function SoinsVisageClient() {
  const { t } = useTranslation("soins-visage")

  const rawServices = t("services", { returnObjects: true })
  const services = Array.isArray(rawServices) ? rawServices : []

  return (
    <>
      {/* Bannière */}
      <section className="bg-light py-2 text-center">
        <div className="container">
          <h1 className="display-4 fw-bold text-pink">{t("bannerTitle")}</h1>
          <p className="lead text-muted">{t("bannerDescription")}</p>
        </div>
      </section>

      {/* Prestations */}
      <section className="py-2">
        <div className="container">
          <div className="row g-2">
            {services.map((card, i) => (
              <div className="col-md-4" key={i}>
                <div className="card h-100 border-0 shadow-sm rounded-4 hover-shadow transition-all">
                  <div className="card-body text-center">
                    <h5 className="card-title text-pink fw-semibold mb-3">{card.title}</h5>
                    <p className="card-text text-muted">{card.description}</p>
                    <ul className="list-unstyled mt-3">
                      <li><strong>Durée :</strong> {card.duration}</li>
                      <li><strong>Prix :</strong> {card.price}</li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-pink text-white text-center py-5 mt-5">
        <div className="container">
          <h2 className="mb-4 display-6">{t("ctaTitle")}</h2>
          <Link
            href="/contact"
            className="btn btn-light text-pink fw-bold px-4 py-2 rounded-pill shadow-sm"
          >
            {t("ctaButton")}
          </Link>
        </div>
      </section>
    </>
  )
}