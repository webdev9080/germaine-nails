import { generateMetadata } from "@/utils/metadata";

export const metadata = generateMetadata({
  title: "Mentions légales - Germaine Nails",
  description: "Mentions légales du site Germaine Nails.",
  path: "/mentions-legales",
  noIndex: false,
});

export default function MentionsLegalesPage() {
  return (
    <main className="container py-5 text-dark">
      <div className="mx-auto" style={{ maxWidth: "800px" }}>
        <h1 className="text-center fw-bold text-pink mb-4">Mentions légales</h1>

        <section className="mb-4">
          <h2 className="h5 fw-bold text-pink">Éditeur du site</h2>
          <p>
            Le site <strong>Germaine Nails</strong> est édité par :
            <br />
            <strong>Wedzi Clément</strong>
            <br />
            Email : <a href="mailto:smithwedzi@gmail.com">smithwedzi@gmail.com</a>
            <br />
            Ville : Lomé, Togo
          </p>
        </section>

        <section className="mb-4">
          <h2 className="h5 fw-bold text-pink">Hébergement</h2>
          <p>
            Le site est hébergé par :
            <br />
            <strong>Vercel Inc.</strong>
            <br />
            340 S Lemon Ave #4133,
            <br />
            Walnut, CA 91789, USA
            <br />
            Site : <a href="https://vercel.com">https://vercel.com</a>
          </p>
        </section>

        <section className="mb-4">
          <h2 className="h5 fw-bold text-pink">Responsabilité</h2>
          <p>
            L'éditeur s'efforce de fournir sur le site <strong>Germaine Nails</strong> des informations aussi précises que possible. Toutefois, il ne pourra être tenu responsable des omissions, inexactitudes ou carences dans la mise à jour.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="h5 fw-bold text-pink">Propriété intellectuelle</h2>
          <p>
            Tout le contenu du site (textes, images, vidéos, logos...) est la propriété exclusive de <strong>Germaine Nails</strong>, sauf mention contraire. Toute reproduction, distribution, modification, adaptation, retransmission ou publication est strictement interdite sans accord écrit.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="h5 fw-bold text-pink">Données personnelles</h2>
          <p>
            Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour exercer ces droits, contactez-nous à :{" "}
            <strong>smithwedzi@gmail.com</strong>.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="h5 fw-bold text-pink">Cookies</h2>
          <p>
            Ce site utilise des cookies essentiels et, avec votre consentement, des cookies à des fins d'analyse ou de publicité via <strong>Cookiebot</strong>. Vous pouvez gérer vos préférences à tout moment.
          </p>
        </section>

        <div className="text-center text-muted small mt-4">
          <p>Dernière mise à jour : <strong>12 juillet 2025</strong></p>
        </div>
      </div>
    </main>
  );
}
