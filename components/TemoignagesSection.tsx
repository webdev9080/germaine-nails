// components/TemoignagesSection.tsx
import { getTemoignagesByCategorie } from '@/lib/sanityQueries'

type Props = { categorie: string }

interface Temoignage {
  _id: string
  auteur: string
  contenu: string
}

export default async function TemoignagesSection({ categorie }: Props) {
  const temoignages: Temoignage[] = await getTemoignagesByCategorie(categorie)

  if (!temoignages?.length) return null

  return (
    <section className="mt-2 py-1 bg-light">
      <div className="container">
        <h2 className="text-center mb-4 text-pink">Avis de nos clientes</h2>
        <div className="row g-2 justify-content-center">
          {temoignages.map((t: Temoignage) => (
            <div className="col-md-6" key={t._id}>
              <div className="card shadow-sm p-2 rounded-4">
                <p className="mb-2 text-center">&quot;{t.contenu}&quot;</p>
                <p className="text-end fw-semibold">— {t.auteur}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}