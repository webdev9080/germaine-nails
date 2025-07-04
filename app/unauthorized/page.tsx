"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"

export default function UnauthorizedPage() {
  const router = useRouter()
  const [countdown, setCountdown] = useState(4)

  useEffect(() => {
    toast.error("⛔ Accès refusé : réservé aux admins", { duration: 4000 })

    // Suppression de la redirection automatique
    // const timeout = setTimeout(() => router.push("/"), 4000)

    const interval = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)

    return () => {
      clearInterval(interval)
      // clearTimeout(timeout)
    }
  }, [router])

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light text-center px-3">
      <h1 className="display-4 text-danger mb-3">⛔ Accès refusé</h1>
      <p className="lead">Cette page est réservée aux administrateurs.</p>
      <p className="text-muted mb-4">
        Redirection dans <strong>{countdown}</strong> seconde{countdown > 1 ? "s" : ""}...
      </p>
      <button onClick={() => router.push("/")} className="btn btn-danger">
        Retour à l'accueil
      </button>
    </div>
  )
}