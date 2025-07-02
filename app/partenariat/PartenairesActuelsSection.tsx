// app/partenariat/PartenairesActuelsSection.tsx
import { getPartenairesActuels } from "@/lib/sanityQueries"
import { FaUsers } from "react-icons/fa"
import SectionInfo from "@/components/SectionInfo"

export default async function PartenairesActuelsSection() {
  const partenaires = await getPartenairesActuels()

  if (!partenaires?.length) return null

  return (
    <section className="container position-relative mt-5 p-4 rounded-3 shadow-sm bg-light border">
      <h2 className="mb-4 d-flex justify-content-center text-pink text-center">
        <FaUsers className="me-2 text-primary text-center " /> Nos Partenaires
      </h2>
      <SectionInfo message="Ici sont affichés nos partenaires fiable, avec qui nous collaborons et avançons ensemble, visitez leur site en cliquant sur leur icons..." color="success"/>
      <div className="row row-cols-2 row-cols-md-4 g-4">
        {partenaires.map((p: any) => (
          <div className="col col-md-4 text-center" key={p._id}>
            <a
              href={p.siteWeb}
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              <img
                src={p.logo}
                alt={p.nom}
                className="img-fluid mb-2"
                style={{ maxHeight: "80px", objectFit: "contain" }}
              />
              <p className="text-muted small mb-0">{p.nom}</p>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}