"use client";

import "@/i18n"; // Initialisation ici
export function I18nProvider({ children }: { children: React.ReactNode }) {
  return children; // juste pour forcer le chargement de `i18n.ts`
}