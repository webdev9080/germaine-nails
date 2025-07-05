// components/FaqSection.tsx  
import { getFaqByCategorie } from '@/lib/sanityQueries'

type Props = {
  categorie: string
}

interface FaqItem {
  _id: string
  question: string
  reponse: string
}

export default async function FaqSection({ categorie }: Props) {
  const faq: FaqItem[] = await getFaqByCategorie(categorie)

  if (!faq?.length) return null

  return (
    <section className="py-3">
      <div className="container">
        <h2 className="text-center mb-4 text-pink">Questions fréquentes</h2>

        <div className="accordion" id={`faqAccordion-${categorie}`}>
          {faq.map((item: FaqItem, i: number) => (
            <div className="accordion-item" key={item._id}>
              <h2 className="accordion-header" id={`heading-${categorie}-${i}`}>
                <button
                  className={`accordion-button ${i !== 0 ? 'collapsed' : ''}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse-${categorie}-${i}`}
                  aria-expanded={i === 0}
                  aria-controls={`collapse-${categorie}-${i}`}
                >
                  {item.question}
                </button>
              </h2>

              <div
                id={`collapse-${categorie}-${i}`}
                className={`accordion-collapse collapse ${i === 0 ? 'show' : ''}`}
                aria-labelledby={`heading-${categorie}-${i}`}
                data-bs-parent={`#faqAccordion-${categorie}`}
              >
                <div className="accordion-body">{item.reponse}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
