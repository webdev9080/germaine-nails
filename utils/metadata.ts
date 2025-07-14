// app/utils/metadata.ts
import { Metadata } from "next";

type MetaOptions = {
  title?: string;
  description?: string;
  path?: string;
  robots?: string; // 👈 on ajoute ici
};

export function generateMetadata({
  title = "Germaine | Nails",
  description = "Pédicure, manucure, soins visage à Lomé. Découvrez nos services de qualité !",
  path = "/",
  robots,
}: MetaOptions): Metadata {
  const baseUrl = "https://germaine-nails-tg.vercel.app";

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
    robots, // 👈 on ajoute ici
  };
}