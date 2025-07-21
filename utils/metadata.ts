// app/utils/metadata.ts
import { Metadata } from "next";

type MetaOptions = {
  title?: string;
  description?: string;
  path?: string;
  noIndex?: boolean; // ✅ Ajout d'une option pour gérer l'indexation
};

export function generateMetadata({
  title = "Germaine | Nails",
  description = "Pédicure, manucure, soins visage à Lomé. Découvrez nos services de qualité !",
  path = "/",
  noIndex = false,
}: MetaOptions): Metadata {
  const baseUrl = "https://germaine-nails-tg.vercel.app";
  const defaultImage = `${baseUrl}/images/og-default.jpg`;

  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}${path}`,
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}${path}`,
      siteName: "Germaine Nails",
      locale: "fr_FR",
      type: "website",
      images: [defaultImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [defaultImage],
    },
    robots: noIndex
      ? { index: false, follow: false, nocache: true } // ✅ Pour les pages privées
      : { index: true, follow: true }, // ✅ Par défaut indexable
  };
}
