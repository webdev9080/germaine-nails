"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function ConsentNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hasAccepted = localStorage.getItem("consent-given");

    if (!hasAccepted) {
      // CMP Google ne s’affiche que dans l’EEE, donc on affiche cette bannière partout ailleurs
      const isInEurope = Intl.DateTimeFormat().resolvedOptions().timeZone.startsWith("Europe");

      if (!isInEurope) {
        setVisible(true);
      }
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("consent-given", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="position-fixed bottom-0 start-0 end-0 bg-dark text-white text-center p-3 z-50 shadow-lg">
      <p className="mb-2">
        Ce site utilise des cookies pour améliorer votre expérience.{" "}
        <Link href="/politique-confidentialite" className="text-pink text-decoration-underline">
          En savoir plus
        </Link>
      </p>
      <button className="btn btn-sm btn-pink" onClick={handleAccept}>
        J'ai compris
      </button>
    </div>
  );
}