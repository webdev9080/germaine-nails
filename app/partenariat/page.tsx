import { FaHandshake, FaCheckCircle } from "react-icons/fa"
import PartenariatForm from "./PartenariatForm"
import FaqServerSection from "./FaqServerSection"
import PartenairesActuelsSection from "./PartenairesActuelsSection"

export default function PartenariatPage() {
  return (
    <div className="container py-3">
      <div className="text-center mb-5 p-4 rounded-3 shadow-sm bg-light border bg-primary-subtle">
        <FaHandshake size={50} className="text-primary mb-3" />
        <h1 className="display-5 fw-bold">Devenez Partenaire de Germaine Nails</h1>
        <p className="lead text-muted">
          Collaborons ensemble pour offrir des services d'exception à notre clientèle.
        </p>
      </div>

      <div className="row g-5 align-items-start">
        <div className="col-md-6 bg-light p-3">
          <h2 className="h4 text-center mb-4 text-warning">Pourquoi devenir notre partenaire&nbsp;?</h2>
          <ul className="list-unstyled fs-6 rounded-3 shadow-sm bg-light border p-4">
            <li className="mb-3 d-flex align-items-start gap-2">
              <FaCheckCircle className="text-success flex-shrink-0 mt-1" />
              <span>Visibilité auprès de notre clientèle fidèle</span>
            </li>
            <li className="mb-3 d-flex align-items-start gap-2">
              <FaCheckCircle className="text-success flex-shrink-0 mt-1" />
              <span>Opportunités de co-branding et promotions croisées</span>
            </li>
            <li className="mb-3 d-flex align-items-start gap-2">
              <FaCheckCircle className="text-success flex-shrink-0 mt-1" />
              <span>Communication professionnelle &amp; événements partagés</span>
            </li>
            <li className="mb-3 d-flex align-items-start gap-2">
              <FaCheckCircle className="text-success flex-shrink-0 mt-1" />
              <span>🤝 Créez une collaboration gagnant-gagnant</span>
            </li>
            
            <li className="mb-3 d-flex align-items-start gap-2">
              <FaCheckCircle className="text-success flex-shrink-0 mt-1" />
              <span>📈 Boostez vos ventes par des actions conjointes</span>
            </li>
            
            <li className="mb-3 d-flex align-items-start gap-2">
              <FaCheckCircle className="text-success flex-shrink-0 mt-1" />
              <span>🚀 Développez votre notoriété locale et digitale</span>
            </li>
          </ul>
        </div>

        <div className="col-md-6">
          <PartenariatForm />
        </div>
      </div>

      <div className="mt-5">
        <FaqServerSection />
      </div>

      <div className="mt-5">
        <PartenairesActuelsSection />
      </div>
    </div>
  )
}