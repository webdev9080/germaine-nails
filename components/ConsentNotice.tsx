"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const TEN_MINUTES = 10 * 60 * 1000; // 10 minutes en millisecondes

export default function ConsentNotice() {
  const [visible, setVisible] = useState(false);
  const [bottomOffset, setBottomOffset] = useState(16);

  useEffect(() => {
    const lastAccepted = localStorage.getItem("consent-timestamp");
    const now = Date.now();

    const shouldShow =
      !lastAccepted || now - parseInt(lastAccepted, 10) > TEN_MINUTES;

    const isInEurope = Intl.DateTimeFormat()
      .resolvedOptions()
      .timeZone.startsWith("Europe");

    if (!isInEurope && shouldShow) {
      setVisible(true);

      const nav = document.querySelector(".bottom-navbar, .navbar-fixed-bottom");
      if (nav instanceof HTMLElement) {
        const navHeight = nav.offsetHeight;
        setBottomOffset(navHeight + 16);
      }
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("consent-timestamp", Date.now().toString());
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="position-fixed start-50 translate-middle-x bg-dark text-white text-center p-3 rounded shadow"
      style={{
        bottom: `${bottomOffset}px`,
        zIndex: 9999,
        maxWidth: "90%",
        width: "500px",
      }}
    >
      <p className="mb-2 small">
        Ce site utilise des cookies pour améliorer votre expérience.{" "}
        <Link
          href="/politique-confidentialite"
          className="text-info text-decoration-underline"
        >
          En savoir plus
        </Link>
      </p>
      <button className="btn btn-sm btn-light" onClick={handleAccept}>
        J'ai compris
      </button>
    </div>
  );
}