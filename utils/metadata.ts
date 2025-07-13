// app/utils/metadata.ts
import { Metadata } from "next";

type MetaOptions = {
  title?: string;
  description?: string;
  path?: string; // pour gérer les URL dynamiques
};

export function generateMetadata({
  title = "Germaine | Nails",
  description = "Pédicure, manucure, soins visage à Lomé. Découvrez nos services de qualité !",
  path = "/",
}: MetaOptions): Metadata {
  const baseUrl = "https://germaine-nails-tg.vercel.app"; // à personnaliser

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
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}