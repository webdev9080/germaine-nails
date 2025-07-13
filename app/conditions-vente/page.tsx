import { generateMetadata } from "@/utils/metadata";


export const metadata = generateMetadata({
  title: "Conditions générales de vente - Germaine Nails",
  description: "Conditions de vente pour les prestations et produits achetés via WhatsApp.",
  path: "/conditions-vente",
});


export default function ConditionsVentePage() {
  return (
    <main className="container py-5 text-dark">
      <div className="mx-auto" style={{ maxWidth: "800px" }}>
        <h1 className="text-center fw-bold text-pink mb-4">Conditions générales de vente</h1>

        <section className="mb-4">
          <h2 className="h5 fw-bold text-pink">1. Présentation</h2>
          <p>
            Les présentes conditions générales de vente (CGV) régissent les ventes de produits et prestations de <strong>Germaine Nails</strong>, réalisées via une prise de contact directe par <strong>WhatsApp</strong>.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="h5 fw-bold text-pink">2. Commande</h2>
          <p>
            Les commandes s’effectuent exclusivement via <strong>WhatsApp</strong>, à l’initiative du client. Une fois la commande validée par échange écrit, un résumé de la commande (produits, tarifs, lieu de retrait ou livraison) est envoyé au client.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="h5 fw-bold text-pink">3. Tarifs</h2>
          <p>
            Tous les prix sont indiqués en franc CFA (XOF) et peuvent être modifiés à tout moment. Les tarifs applicables sont ceux en vigueur au moment de la confirmation de commande sur WhatsApp.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="h5 fw-bold text-pink">4. Paiement</h2>
          <p>
            Le paiement s’effectue en espèces, via mobile money ou autre moyen convenu entre le client et Germaine Nails au moment de la livraison ou du retrait.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="h5 fw-bold text-pink">5. Livraison / Retrait</h2>
          <p>
            La livraison ou le retrait est convenu avec le client par message. Germaine Nails ne saurait être tenue responsable en cas de retard dû à un cas de force majeure ou à un problème indépendant de sa volonté.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="h5 fw-bold text-pink">6. Droit de rétractation</h2>
          <p>
            Étant donné la nature personnalisée ou hygiénique de certains produits (vernis, soins, etc.), le droit de rétractation peut ne pas s'appliquer. Chaque demande d'annulation sera étudiée au cas par cas.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="h5 fw-bold text-pink">7. Service client</h2>
          <p>
            Pour toute question ou réclamation, vous pouvez nous contacter par e-mail à <strong>smithwedzi@gmail.com</strong> ou via <strong>WhatsApp</strong>.
          </p>
        </section>

        <div className="text-center text-muted small mt-4">
          <p>Dernière mise à jour : <strong>12 juillet 2025</strong></p>
        </div>
      </div>
    </main>
  );
}