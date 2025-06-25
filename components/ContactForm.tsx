"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSent(true);
        toast.success("Message envoyé !");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSent(false), 4000);
      } else {
        const data = await res.json();
        toast.error(`Erreur : ${data.error}`);
      }
    } catch (err) {
      toast.error("Erreur réseau. Réessayez plus tard.");
    }
  };

  return (
    <div className="container my-5">
      <div className="card shadow-lg border-0 rounded-4">
        <div className="card-body p-5">
          <h2 className="mb-4 text-center">
            <i className="bi bi-envelope-fill me-2"></i>Contactez-nous
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <input
                type="text"
                name="name"
                className="form-control rounded-5"
                id="floatingName"
                placeholder="Votre nom"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <label htmlFor="floatingName">Nom</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="email"
                name="email"
                className="form-control rounded-5"
                id="floatingEmail"
                placeholder="Votre email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label htmlFor="floatingEmail">Email</label>
            </div>
            <div className="form-floating mb-4">
              <textarea
                name="message"
                className="form-control rounded-3"
                id="floatingMessage"
                placeholder="Votre message"
                style={{ height: "100px" }}
                value={formData.message}
                onChange={handleChange}
                required
              />
              <label htmlFor="floatingMessage">Message</label>
            </div>

            <div className="d-grid">
              <button
                type="submit"
                className="btn btn-primary btn-lg rounded-pill"
              >
                <i className="bi bi-send me-2"></i>Envoyer le message
              </button>
            </div>

            {sent && (
              <div
                className="alert alert-success mt-4 text-center rounded-3"
                role="alert"
              >
                Merci pour votre message ! Nous vous répondrons rapidement.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}