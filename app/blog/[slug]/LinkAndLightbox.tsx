"use client";

import { useState } from "react";
import Lightbox from "@/components/ui/Lightbox";
import ContactForm from "@/components/ContactForm";
import PartenariatForm from "@/app/partenariat/PartenariatForm";



export default function LinkAndLightbox () {
  const [showContact, setShowContact] = useState(false);
  const [showPartenaire, setShowPartenaire] = useState(false);

  return (
    <>
      {/* ✅ Liens sous forme de boutons ou simples liens */}
      <div className="text-center my-4 space-x-4">
        <button
          className="text-primary rounded-3 hover:underline"
          onClick={() => setShowContact(true)}
        >
          Nous contacter
        </button>
        
        <button
          className="text-primary rounded-3 hover:underline"
          onClick={() => setShowPartenaire(true)}
        >
          Devenir partenaire
        </button>
      </div>

      {/* ✅ Lightbox Contact */}
      <Lightbox isOpen={showContact} onClose={() => setShowContact(false)}>
        <h2 className="text-xl font-bold mb-4">Nous contacter</h2>
        <ContactForm />
      </Lightbox>

      {/* ✅ Lightbox Partenariat */}
      <Lightbox isOpen={showPartenaire} onClose={() => setShowPartenaire(false)}>
        <h2 className="text-xl font-bold mb-4">Devenir partenaire</h2>
        <PartenariatForm />
      </Lightbox>
    </>
  );
}