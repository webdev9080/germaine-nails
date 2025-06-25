"use client";

import Link from "next/link";

import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";

import ContactForm from "@/components/ContactForm";
import ContactDetails from "@/components/ContactDetails";

export default function ContactPage() {
  return (
    <main className="bg-white text-dark">
      {/* Titre */}
      <section className="bg-light py-5 text-center">
        <div className="container">
          <h1 className="display-5 fw-bold text-pink">Contactez-nous</h1>
          <p className="lead">Prenez rendez-vous ou posez-nous vos questions</p>
        </div>
      </section>
      
      {/* Formulaire */}
      <div className="container col-md-6">
          
          <h3 className="mb-4 text-pink text-center">
              Formulaire de contact
          </h3>
          
          <ContactForm />  
      </div>
            
            
      {/* Coordonnées */}
      <div>
          <ContactDetails />
      </div>

      {/* Carte */}
      <section className="mt-5">
        <div className="container">
          <h4 className="text-center text-pink mb-4">Localisation</h4>
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.google.com/maps?q=Pharmacie Djidjolé,+Lomé,+Togo&output=embed"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}