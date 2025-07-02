
// app/api/chat/route.ts
import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'
import { sanity } from '@/lib/sanity'

/** ─────────────────────────────────────────────────────────────
 *  Configuration OpenRouter
 *  ────────────────────────────────────────────────────────────*/
const openai = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,                 // clé or-xxxx
  baseURL: 'https://openrouter.ai/api/v1',
  defaultHeaders: {
    // domaine(s) autorisé(s) par OpenRouter
    'HTTP-Referer':
      process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000',
    'X-Title': 'Germaine Nails Assistant',                // nom de ton app
  },
})

/** ─────────────────────────────────────────────────────────────
 *  POST /api/chat
 *  ────────────────────────────────────────────────────────────*/
export async function POST(req: NextRequest) {
  try {
    /* ── 1. Lecture du message utilisateur ─────────────────── */
    const { message } = await req.json()
    if (!message || typeof message !== 'string' || message.trim() === '') {
      return NextResponse.json({ error: 'Le message est vide.' }, { status: 400 })
    }

    /* ── 2. Récupération des données Sanity en parallèle ────── */
    
    const [prestations, articles, formations, blogs, faq, temoignages, partenaires] = await Promise.all([
    
      sanity.fetch(`*[_type == "prestation"]{ titre, images }`),
      
      sanity.fetch(`*[_type == "article"]{ _id,
        nom,
        description,
        prix,
        categorie
         }`),
        
      sanity.fetch(`*[_type == "formation"]{ nom,
      formation
      }`),
      
      sanity.fetch(`*[_type == "blog"]{titre,
      extrait,
      date,
      categorie
      }`),
      
      sanity.fetch(`*[_type == "faq"]{ question, reponse }`),
      
      sanity.fetch(`*[_type == "temoignage"]{ auteur, contenu }`),
      
      sanity.fetch(`*[_type == "partenaire"]{ nom,
        siteWeb }`),
    ])

    /* ── 3. Construction du prompt contextuel ───────────────── */
    const prompt = `
### Contexte
Tu es l'assistant virtuel du salon Germaine Nails (Lomé). Réponds de façon claire, professionnelle et chaleureuse.

### Prestations
${prestations.map((p: any) => `- ${p.titre} : ${p.description}`).join('\n')}

### Articles
${articles.map((a: any) => `- ${a.nom} : ${a.description} : ${a.prix} : ${a.categorie}`).join('\n')}

### Formations
${formations.map((f: any) => `- ${f.formation} (paiement : ${f.paiement})`).join('\n')}
  
### blogs
${blogs.map((b: any) => `- ${b.titre} : ${b.categorie} : ${b.date}`).join('\n')}

### FAQ
${faq.map((f: any) => `Q : ${f.question}\nR : ${f.reponse}`).join('\n\n')}

### Temoignages
${temoignages.map((t: any) => `Q : ${t.auteur}\nR : ${t.contenu}`).join('\n\n')}

### Partenaires 
${partenaires.map((p: any) => `- ${p.nom} : ${p.siteWeb}`).join('\n')}

### Question utilisateur
"${message}"

### Consignes de réponse
- Max. 200 mots
- Ton amical et persuasif
- Si la réponse manque, propose de vérifier et de revenir vers le client
    `.trim()

    /* ── 4. Appel au modèle OpenRouter ─────────────────────── */
    const completion = await openai.chat.completions.create({
      model: 'openrouter/cypher-alpha:free',   // modèle gratuit
      messages: [
        {
          role: 'system',
          content:
            'Tu es un assistant beauté pour le salon Germaine Nails. Ta réponse doit être concise, amicale et utile.',
        },
        { role: 'user', content: prompt },
      ],
      temperature: 0.7,
    })

    const reply =
      completion.choices[0]?.message?.content ??
      'Désolé, je n’ai pas de réponse pour le moment.'

    /* ── 5. Réponse HTTP ───────────────────────────────────── */
    return NextResponse.json({ reply })
  } catch (err: any) {
    console.error('OpenRouter Chat Error:', err)
    return NextResponse.json(
      { error: err?.message ?? 'Une erreur inconnue est survenue.' },
      { status: err?.status ?? 500 },
    )
  }
}





/*/ app/api/chat/route.ts
import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
  defaultHeaders: {
    "HTTP-Referer": "https://germaine-nails-tg.vercel.app", // obligatoire
    "X-Title": "Germaine Nails Assistant",
  },
})

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json()

    const prompt = `Tu es un assistant beauté pour un salon nommé Germaine Nails. Réponds clairement, professionnellement et avec bienveillance à ce message : "${message}"`

    const completion = await openai.chat.completions.create({
      model: "openrouter/cypher-alpha:free", // ✅ modèle gratuit valide
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.7,
    })

    return NextResponse.json({ reply: completion.choices[0].message.content })
  } catch (error: any) {
    console.error('OpenRouter API error:', error)
    return NextResponse.json({ error: error.message || 'Erreur inconnue' }, { status: 500 })
  }
}*/