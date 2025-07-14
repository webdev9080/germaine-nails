"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function ConsentNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hasAccepted = localStorage.getItem("consent-given");

    // Si l'utilisateur n'a pas encore accepté, et qu'il n'est pas dans l'EEE (CMP Google)
    const regionNotInEEE =
      !navigator.language.startsWith("fr") &&
      !navigator.language.startsWith("de") &&
      !navigator.language.startsWith("es") &&
      !navigator.language.startsWith("it") &&
      !navigator.language.startsWith("nl") &&
      !navigator.language.startsWith("en");

    if (!hasAccepted && regionNotInEEE) {
      setVisible(true);
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