/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'
import { sanity } from '@/lib/sanity'

/* ──────────────────────────────────────────────────────────────
 *  Configuration OpenRouter
 *  ────────────────────────────────────────────────────────────*/
const openai = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY!, // Clé API OpenRouter (or-xxxx)
  baseURL: 'https://openrouter.ai/api/v1',
  defaultHeaders: {
    'HTTP-Referer': process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000',
    'X-Title': 'Germaine Nails Assistant',
  },
})

/* ──────────────────────────────────────────────────────────────
 *  Fonction utilitaire : Appel modèle avec fallback
 *  ────────────────────────────────────────────────────────────*/
async function generateCompletion(prompt: string) {
  const models = [
    'mistralai/mistral-7b-instruct:free',
    'deepseek/deepseek-v3-base:free',
  ]

  for (const model of models) {
    try {
      console.log(`🔄 Tentative avec le modèle : ${model}`)
      const completion = await openai.chat.completions.create({
        model,
        temperature: 0.7,
        messages: [
          {
            role: 'system',
            content:
              `Tu es l'assistant beauté du salon Germaine Nails. ` +
              `Sois précis, chaleureux et professionnel.`
          },
          { role: 'user', content: prompt }
        ],
      })

      const reply =
        completion.choices[0]?.message?.content ??
        'Désolé, je n’ai pas de réponse pour le moment.'

      return { reply, model }
    } catch (err: any) {
      console.error(`❌ Erreur avec ${model} :`, err.message)
      continue // Passe au modèle suivant
    }
  }

  return {
    reply: 'Désolé, notre assistant est indisponible pour le moment. Merci de réessayer plus tard.',
    model: 'aucun',
  }
}

/* ──────────────────────────────────────────────────────────────
 *  POST /api/chat
 *  ────────────────────────────────────────────────────────────*/
export async function POST(req: NextRequest) {
  try {
    /* ── 1. Lecture du message utilisateur ──────────────────── */
    const { message } = await req.json()
    if (!message || typeof message !== 'string' || !message.trim()) {
      return NextResponse.json({ error: 'Le message est vide.' }, { status: 400 })
    }

    /* ── 2. Récupération des données Sanity ─────────────────── */
    const [
      coordonnees, prestations, articles, formations,
      blogs, faq, temoignages, partenaires
    ]: any[] = await Promise.all([
      sanity.fetch(`*[_type == "coordonnees"][0]{nom,email,telephone,adresse,ville,pays,reseaux{facebook,instagram,whatsapp}}`),
      sanity.fetch(`*[_type == "prestation"]{titre,description}`),
      sanity.fetch(`*[_type == "article"]{nom,description,prix,categorie}`),
      sanity.fetch(`*[_type == "formation"]{formation,paiement}`),
      sanity.fetch(`*[_type == "blog"]{titre,categorie,date}`),
      sanity.fetch(`*[_type == "faq"]{question,reponse}`),
      sanity.fetch(`*[_type == "temoignage"]{auteur,contenu}`),
      sanity.fetch(`*[_type == "partenaire"]{nom,siteWeb}`)
    ])

    /* ── 3. Construction du prompt ───────────────────────────── */
    const coordText = `
### Coordonnées
- Salon : ${coordonnees.nom}
- E-mail : ${coordonnees.email}
- Téléphone : ${coordonnees.telephone}
- Adresse : ${coordonnees.adresse}, ${coordonnees.ville}, ${coordonnees.pays}
${coordonnees.reseaux?.facebook ? `- Facebook : ${coordonnees.reseaux.facebook}` : ''}
${coordonnees.reseaux?.instagram ? `- Instagram : ${coordonnees.reseaux.instagram}` : ''}
${coordonnees.reseaux?.whatsapp ? `- WhatsApp : ${coordonnees.reseaux.whatsapp}` : ''}
`.trim()

    const prompt = `
${coordText}

### Prestations
${prestations.slice(0, 15).map((p: any) => `- ${p.titre} : ${p.description}`).join('\n')}

### Articles
${articles.slice(0, 15).map((a: any) => `- ${a.nom} : ${a.description} | ${a.prix} FCFA | ${a.categorie}`).join('\n')}

### Formations
${formations.map((f: any) => `- ${f.formation} (paiement : ${f.paiement})`).join('\n')}

### Blogs
${blogs.slice(0, 10).map((b: any) => `- ${b.titre} | ${b.categorie} | ${b.date}`).join('\n')}

### FAQ
${faq.slice(0, 10).map((f: any) => `Q : ${f.question}\nR : ${f.reponse}`).join('\n\n')}

### Témoignages
${temoignages.slice(0, 5).map((t: any) => `Auteur : ${t.auteur}\nAvis : ${t.contenu}`).join('\n\n')}

### Partenaires
${partenaires.map((p: any) => `- ${p.nom} : ${p.siteWeb}`).join('\n')}

### Question utilisateur
"${message}"

### Consignes de réponse
- 200 mots max
- Ton amical et persuasif
- Si l’info manque, propose de vérifier et de revenir vers le client
`.trim()

    /* ── 4. Génération avec fallback ────────────────────────── */
    const { reply, model } = await generateCompletion(prompt)

    return NextResponse.json({ reply, model })
  } catch (err: any) {
    console.error('OpenRouter Chat Error:', err)
    return NextResponse.json(
      { error: err?.message ?? 'Une erreur inconnue est survenue.' },
      { status: err?.status ?? 500 }
    )
  }
}