// app/prestations/manucure/ManucureClient.tsx
"use client"

import { useTranslation } from "react-i18next"

export default function ManucureClient() {
  const { t } = useTranslation("manucure")

  const services = t("services", { returnObjects: true }) as {
    title: string
    description: string
    duration: string
    price: string
  }[]

  return (
    <>
      {/* Bannière */}
      <section className="bg-light py-2 text-center">
        <div className="container">
          <h1 className="display-4 fw-bold text-pink">{t("title")}</h1>
          <p className="lead text-muted">{t("subtitle")}</p>
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
    </>
  )
}