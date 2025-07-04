
"use client"

import { useState } from "react"
import { Form } from "react-bootstrap"

export const LanguageSelector = () => {
  const [lang, setLang] = useState("fr")

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value
    setLang(selected)
    localStorage.setItem("lang", selected)
    // TODO: intégrer avec i18n
  }

  return (
    <Form.Select value={lang} onChange={handleChange}>
      <option value="fr">Français</option>
      <option value="en">English</option>
      <option value="de">Deutsch</option>
      <option value="es">Español</option>
    </Form.Select>
  )
}