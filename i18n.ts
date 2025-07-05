import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Importation des fichiers de traduction
import frCommon from "./public/locales/fr/common.json";
import enCommon from "./public/locales/en/common.json";

import frManucure from "./public/locales/fr/manucure.json";
import enManucure from "./public/locales/en/manucure.json";

import frPedicure from "./public/locales/fr/pedicure.json";
import enPedicure from "./public/locales/en/pedicure.json";

import frSoinsVisage from "./public/locales/fr/soins-visage.json";
import enSoinsVisage from "./public/locales/en/soins-visage.json"

// ⚠️ Ajoute ici d'autres fichiers si besoin plus tard (faq.json, settings.json, etc.)

i18n
  .use(initReactI18next)
  .init({
    resources: {
      fr: {
        common: frCommon,
        manucure: frManucure,
        pedicure: frPedicure,
        "soins-visage": frSoinsVisage,
        // Ajoute d'autres namespaces ici
      },
      en: {
        common: enCommon,
        manucure: enManucure,
        pedicure: enPedicure,
        "soins-visage": enSoinsVisage
        // Ajoute d'autres namespaces ici
      },
    },
    fallbackLng: "fr",
    lng: typeof window !== "undefined" ? localStorage.getItem("lang") || "fr" : "fr",
    ns: ["common", "manucure", "pedicure", "soins-visage"], // 👉 Déclare tous les namespaces ici
    defaultNS: "common",         // Namespace utilisé par défaut
    interpolation: { escapeValue: false },
  });

export default i18n;