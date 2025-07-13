import Script from "next/script";
import { generateMetadata } from "@/utils/metadata";
import AdBanner from "@/components/ads/AdBanner";


export const metadata = generateMetadata({
  title: "Politique de confidentialité - Germaine Nails",
  description: "Découvrez notre politique de confidentialité concernant la collecte et l'utilisation de vos données.",
  path: "/politique-confidentialite",
});

export default function PolitiqueConfidentialitePage() {
  return (
    <main className="container mt-2 py-5 text-dark">
      <div className="mx-auto" style={{ maxWidth: "800px" }}>
        <h1 className="mb-4 text-center fw-bold text-pink">Politique de confidentialité</h1>

        <p className="lead text-muted">
          Chez <strong>Germaine Nails</strong>, nous respectons votre vie privée et nous nous engageons à protéger vos données personnelles.
        </p>

        <hr className="my-4" />

        <section className="mb-4">
          <h2 className="h5 fw-bold text-pink">1. Collecte des données</h2>
          <p>
            Nous collectons uniquement les informations nécessaires lorsque vous utilisez notre formulaire de contact ou prenez rendez-vous. Cela peut inclure votre nom, votre numéro de téléphone et votre adresse e-mail.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="h5 fw-bold text-pink">2. Utilisation des données</h2>
          <p>
            Les données collectées sont utilisées uniquement pour vous contacter, répondre à vos demandes et améliorer nos services. Nous ne partageons jamais vos informations avec des tiers sans votre consentement explicite.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="h5 fw-bold text-pink">3. Cookies</h2>
          <p>
            Notre site utilise des cookies nécessaires, ainsi que des cookies optionnels soumis à votre consentement via le bandeau Cookiebot.
          </p>

          {/* ✅ Script Cookiebot pour afficher la liste des cookies déclarés */}
          <Script
            id="CookieDeclaration"
            src="https://consent.cookiebot.com/90249a1a-efa3-4396-ade5-d21396cd07b9/cd.js"
            type="text/javascript"
            strategy="afterInteractive"
            async
          />
          <div id="CookieDeclaration" className="mt-3" />
        </section>

        <section className="mb-4">
          <h2 className="h5 fw-bold text-pink">4. Vos droits</h2>
          <p>
            Vous pouvez demander à accéder, rectifier ou supprimer vos données personnelles à tout moment en nous contactant à l'adresse suivante : <strong>smithwedzi@gmail.com</strong>.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="h5 fw-bold text-pink">5. Contact</h2>
          <p>
            Pour toute question relative à cette politique, n'hésitez pas à nous contacter par e-mail à <strong>smithwedzi@gmail.com</strong>.
          </p>
        </section>

        <div className="text-center">
          <p className="text-muted small">
            Dernière mise à jour : <strong>28 juin 2025</strong>
          </p>
        </div>
      </div>
      <div className="container">
          <AdBanner adSlot="4478125382" />
      </div>
    </main>
  );
}