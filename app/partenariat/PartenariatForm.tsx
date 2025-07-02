"use client"

import { useState, FormEvent, ChangeEvent } from "react"
import toast from "react-hot-toast"
import { FaBuilding } from "react-icons/fa"
import SectionInfo from "@/components/SectionInfo"

interface FormDataProps {
  entreprise: string
  email: string
  telephone: string
  siteWeb: string
  message: string
}

export default function PartenariatForm() {
  const [formData, setFormData] = useState<FormDataProps>({
    entreprise: "",
    email: "",
    telephone: "",
    siteWeb: "",
    message: "",
  })

  const [logo, setLogo] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setLogo(e.target.files[0])
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const form = new FormData()
      form.append("entreprise", formData.entreprise)
      form.append("email", formData.email)
      form.append("telephone", formData.telephone)
      form.append("siteWeb", formData.siteWeb)
      form.append("message", formData.message)
      if (logo) form.append("logo", logo)

      const res = await fetch("/api/partenariat", {
        method: "POST",
        body: form,
      })

      if (res.ok) {
        toast.success("Demande envoyée avec succès !")
        setFormData({ entreprise: "", email: "", telephone: "", siteWeb: "", message: "" })
        setLogo(null)
      } else {
        toast.error("Une erreur s'est produite.")
      }
    } catch (err) {
      toast.error("Erreur réseau.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="position-relative p-4 rounded-3 shadow-sm bg-light border">
        
      <h2 className="h5 mb-3 d-flex align-items-center text-info justify-content-center">
        <FaBuilding className="me-2 text-primary" />
        Formulaire de Partenariat
      </h2>
      <SectionInfo message="Veillez renseigner les informations de votre entreprise et soumettez le formulaire, ensuite nous validerons votre candidature et nous prendrons tâches avec le responsable pour le reste des formalités."
       color="danger"/>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input type="text" name="entreprise" value={formData.entreprise} onChange={handleChange} required className="form-control" placeholder="Nom de l'entreprise / Start-up" />
        </div>
        <div className="mb-3">
          <input type="email" name="email" value={formData.email} onChange={handleChange} required className="form-control" placeholder="Adresse email" />
        </div>
        <div className="mb-3">
          <input type="tel" name="telephone" value={formData.telephone} onChange={handleChange} className="form-control" placeholder="Téléphone (optionnel)" />
        </div>
        <div className="mb-3">
          <input type="url" name="siteWeb" value={formData.siteWeb} onChange={handleChange} className="form-control" placeholder="Site Web (optionnel)" />
        </div>
        <div className="mb-3">
          <textarea name="message" value={formData.message} onChange={handleChange} className="form-control" placeholder="Pourquoi souhaitez-vous collaborer avec nous ?" rows={4} />
        </div>

        {/* ✅ Champ logo */}
        <div className="mb-3">
          <label className="form-label">Logo de votre entreprise (optionnel)</label>
          <input type="file" accept="image/*" onChange={handleFileChange} className="form-control" />
        </div>

        <button className="btn btn-primary w-100 d-flex justify-content-center align-items-center gap-2" type="submit" disabled={loading}>
          {loading && <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />}
          {loading ? "Envoi en cours..." : "Envoyer ma demande"}
        </button>
      </form>
    </div>
  )
}