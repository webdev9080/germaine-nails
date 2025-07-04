"use client";

import { useTranslation } from "react-i18next";
import { FiGlobe } from "react-icons/fi";
import { useState, useRef, useEffect } from "react";

export default function LanguageSelector() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
    setOpen(false);
  };

  return (
    <div ref={ref} className="position-relative">
      <button
        className="btn btn-light border rounded-circle d-flex align-items-center justify-content-center"
        onClick={() => setOpen(!open)}
        style={{ width: "40px", height: "40px" }}
        aria-label="Choisir la langue"
      >
        <FiGlobe size={20} />
      </button>

      {open && (
        <div className="dropdown-menu show position-absolute mt-2" style={{ right: 0 }}>
          <button className="dropdown-item" onClick={() => handleLanguageChange("fr")}>
            🇫🇷 Français
          </button>
          <button className="dropdown-item" onClick={() => handleLanguageChange("en")}>
            🇬🇧 English
          </button>
        </div>
      )}
    </div>
  );
}