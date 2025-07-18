"use client";

import { useState } from "react";
import { FaWhatsapp, FaCheckCircle, FaCertificate, FaTools, FaHandSparkles } from "react-icons/fa";
import { Accordion } from "react-bootstrap";
import toast from "react-hot-toast";
import SectionInfo from "@/components/SectionInfo";

export default function FormationClient() {
  const [form, setForm] = useState({
    nom: "",
    telephone: "",
    email: "",
    formation: "",
    paiement: "",
    message: "",
  });

  const formations = [
    { titre: "Manucure & Pédicure", duree: "2 semaines", niveau: "Débutant à avancé", couleur: "primary" },
    { titre: "Soins du visage", duree: "1 semaine", niveau: "Tous niveaux", couleur: "success" },
    { titre: "Pose de faux ongles / gel", duree: "1 semaine", niveau: "Intermédiaire", couleur: "warning" },
    { titre: "Formation complète", duree: "1 mois", niveau: "Débutant", couleur: "danger" },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const loadingToast = toast.loading("Envoi en cours...");
    try {
      const res = await fetch("/api/formation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        toast.success("Inscription enregistrée avec succès !", { id: loadingToast });
        setForm({ nom: "", telephone: "", email: "", formation: "", paiement: "", message: "" });
      } else {
        toast.error("Erreur lors de l'envoi. Réessayez.", { id: loadingToast });
      }
    } catch {
      toast.error("Erreur réseau. Veuillez réessayer.", { id: loadingToast });
    }
  };

  return (
    <div>
      {/* ✅ Hero Section */}
      <section className="bg-danger text-white text-center py-5">
        <div className="container">
          <h1 className="display-4 fw-bold mb-3">Rejoins nos formations beauté</h1>
          <p className="lead">Deviens une professionnelle en manucure, soins du visage et esthétique</p>
          <a href="#inscription" className="btn btn-light btn-lg mt-3">
            S'inscrire maintenant
          </a>
        </div>
      </section>

      {/* ✅ Pourquoi choisir Germaine */}
      <section className="container py-5">
        <h2 className="text-center text-pink mb-3">Pourquoi choisir Germaine Nails ?</h2>
        <div className="row text-center g-2 p-4 rounded-3 shadow-sm bg-light border">
          <div className="col-md-3">
            <FaCheckCircle size={40} className="text-success mb-3" />
            <h5>Formateurs qualifiés</h5>
          </div>
          <div className="col-md-3">
            <FaCertificate size={40} className="text-info mb-3" />
            <h5>Certificat délivré</h5>
          </div>
          <div className="col-md-3">
            <FaHandSparkles size={40} className="text-warning mb-3" />
            <h5>Cours pratiques</h5>
          </div>
          <div className="col-md-3">
            <FaTools size={40} className="text-danger mb-3" />
            <h5>Matériel fourni</h5>
          </div>
        </div>
      </section>

      {/* ✅ Nos formations */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center text-pink mb-4">Nos formations disponibles</h2>
          <div className="row g-4">
            {formations.map((item, index) => (
              <div key={index} className="col-md-3">
                <div className={`card border-${item.couleur} shadow-sm h-100`}>
                  <div className={`card-header bg-${item.couleur} text-white fw-semibold`}>
                    {item.titre}
                  </div>
                  <div className="card-body">
                    <p className="card-text">Durée : {item.duree}</p>
                    <p className="card-text">Niveau : {item.niveau}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ FAQ */}
      <section className="container py-5">
        <h2 className="text-center text-pink mb-4">Foire aux questions</h2>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Quels sont les horaires ?</Accordion.Header>
            <Accordion.Body>Les cours ont lieu du lundi au samedi de 9h à 13h.</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Peut-on payer en plusieurs fois ?</Accordion.Header>
            <Accordion.Body>Oui, un paiement en deux tranches est possible.</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Où se déroulent les formations ?</Accordion.Header>
            <Accordion.Body>À notre institut à Agbalépédogan, Lomé.</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </section>

      {/* ✅ Formulaire */}
      <section id="inscription" className="bg-body-secondary position-relative py-4">
        <div className="container">
          <h2 className="text-center text-pink mb-1">Formulaire d'inscription</h2>

          <SectionInfo
            message="Veillez saisir vos informations correctes, elles seront utilisées pour votre attestation de fin de formation. Vous recevrez un mail après analyse de votre candidature."
            color="danger"
          />

          <form className="row mt-3 g-3 bg-white p-5 rounded shadow-sm" onSubmit={handleSubmit}>
            <div className="col-md-6">
              <input
                type="text"
                name="nom"
                value={form.nom}
                placeholder="Nom complet"
                className="form-control"
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <input
                type="tel"
                name="telephone"
                value={form.telephone}
                placeholder="Téléphone"
                className="form-control"
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <input
                type="email"
                name="email"
                value={form.email}
                placeholder="Email (facultatif)"
                className="form-control"
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <select
                name="formation"
                className="form-select"
                value={form.formation}
                onChange={handleChange}
                required
              >
                <option value="">Choisissez une formation</option>
                {formations.map((f, idx) => (
                  <option key={idx} value={f.titre}>
                    {f.titre}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-6">
              <select
                name="paiement"
                className="form-select"
                value={form.paiement}
                onChange={handleChange}
                required
              >
                <option value="">Mode de paiement</option>
                <option value="espèces">Espèces</option>
                <option value="mobile money">Mobile Money</option>
              </select>
            </div>
            <div className="col-md-12">
              <textarea
                name="message"
                value={form.message}
                placeholder="Message ou remarque"
                rows={3}
                className="form-control"
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="col-md-12 text-center">
              <button type="submit" className="btn btn-danger px-4">
                Je m'inscris
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* ✅ Carte d'accès + CTA */}
      <section className="bg-dark text-white py-5 text-center">
        <div className="container">
          <h3 className="mb-3">Notre institut vous attend à Djidjolé</h3>
          <p className="mb-4">Contactez-nous dès maintenant pour toute question</p>
          <a href="https://wa.me/22870306224" className="btn btn-success btn-lg">
            <FaWhatsapp className="me-2" /> Écrire sur WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}