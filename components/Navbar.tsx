"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const navbarRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Fermer le menu au changement de page
  useEffect(() => {
    const closeNavbar = async () => {
      const navbarCollapse = document.getElementById("mainNavbar");
      if (navbarCollapse?.classList.contains("show")) {
        const Collapse = (await import("bootstrap/js/dist/collapse")).default;
        const bsCollapse = new Collapse(navbarCollapse, { toggle: false });
        bsCollapse.hide();
      }
    };
    closeNavbar();
  }, [pathname]);

  // Fermer le menu si on clique en dehors
  useEffect(() => {
    const handleClickOutside = async (event: MouseEvent) => {
      const target = event.target as Node;
      const navbarCollapse = document.getElementById("mainNavbar");

      if (
        navbarRef.current &&
        !navbarRef.current.contains(target) &&
        navbarCollapse?.classList.contains("show")
      ) {
        const Collapse = (await import("bootstrap/js/dist/collapse")).default;
        const bsCollapse = new Collapse(navbarCollapse, { toggle: false });
        bsCollapse.hide();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className="navbar w-70 navbar-expand-lg navbar-light bg-light shadow-sm py-3 sticky-top"
      ref={navbarRef}
    >
      <div className="container">
        {/* Logo */}
        <Link href="/" className="navbar-brand d-flex align-items-center gap-2">
          <Image
            src="/images/logo2.png"
            alt="Germaine Nails"
            width={80}
            height={60}
            className="rounded-circle"
          />
          <span className="fw-bold fs-5">Germaine Nails</span>
        </Link>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation links */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/dashboardclerk" className="nav-link">Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link href="/prestations" className="nav-link">Prestations</Link>
            </li>
            <li className="nav-item">
              <Link href="/galerie" className="nav-link">Galerie</Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className="nav-link">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
