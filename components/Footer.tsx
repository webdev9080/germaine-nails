// components/Footer.tsx
import Link from "next/link";
import { FaFacebookF, FaWhatsapp, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-dark-subtle py-5 mt-5 mb-5">
      <div className="container text-center">
        <h5 className="mb-3">Suivez-nous</h5>

        <div className="d-flex justify-content-center gap-4 mb-3">
          <a
            href="https://wa.me/22870306224"
            target="_blank"
            rel="noopener noreferrer"
            className="fs-4"
            aria-label="Contactez-nous sur WhatsApp"
            title="Contactez-nous sur WhatsApp"
          >
            <FaWhatsapp className="hover-icon" />
          </a>

          <a
            href="https://www.facebook.com/germaine.nails"
            target="_blank"
            rel="noopener noreferrer"
            className="fs-4"
            aria-label="Suivez-nous sur Facebook"
            title="Suivez-nous sur Facebook"
          >
            <FaFacebookF className="hover-icon" />
          </a>

          <a
            href="https://www.tiktok.com/@germaine.nails"
            target="_blank"
            rel="noopener noreferrer"
            className="fs-4"
            aria-label="Suivez-nous sur TikTok"
            title="Suivez-nous sur TikTok"
          >
            <FaTiktok className="hover-icon" />
          </a>
        </div>

        <div className="mt-3 p-2">
          <Link
            href="/politique-confidentialite"
            className="text-decoration-underline text-muted small"
          >
            Politique de confidentialité
          </Link>

          <Link
            href="/mentions-legales"
            className="text-decoration-underline text-muted small text-success-subtle mx-2"
          >
            Mentions Légales
          </Link>

          <Link
            href="/conditions-vente"
            className="text-decoration-underline text-muted small text-warning-subtle"
          >
            Conditions de Vente
          </Link>
        </div>

        <p className="mb-0 mt-2 text-muted small">
          &copy; 2025 Germaine Nails. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}