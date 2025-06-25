"use client";

import Link from "next/link";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function ContactDetails() {
  return (
    <section className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-lg rounded-4 p-4 border-0 text-center">
            <h3 className="mb-4 text-primary">📍 Nos Coordonnées</h3>
            <p className="mb-3">
              <FaMapMarkerAlt className="me-2 text-danger" />
              <strong>Pharmacie Djidjolé, Lomé, Togo</strong>
            </p>
            <p className="mb-3">
              <FaPhone className="me-2 text-success" />
              <a href="tel:+22890805252" className="text-decoration-none text-dark">
                +228 90805252
              </a>
            </p>
            <p className="mb-3">
              <FaEnvelope className="me-2 text-warning" />
              <a href="mailto:contact@germainails.com" className="text-decoration-none text-dark">
                contact@germainails.com
              </a>
            </p>

            <Link
              href="https://wa.me/22890805252"
              target="_blank"
              className="btn btn-success btn-lg rounded-pill d-inline-flex align-items-center justify-content-center mt-3"
            >
              <FaWhatsapp className="me-2" />
              Écrire sur WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}