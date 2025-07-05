'use client'

import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import styles from './Bienvenue.module.css'

interface Utilisateur {
  id: string
  email: string
  nom: string
  prenom: string
  role: string
}

export default function Bienvenue() {
  const [user, setUser] = useState<Utilisateur | null>(null)
  const [showAnimation, setShowAnimation] = useState(false)
  const [greeting, setGreeting] = useState('Bienvenue')

  // 👋 Fonction pour déterminer la salutation en fonction de l'heure
  const getGreeting = () => {
    const hour = new Date().getHours()

    if (hour >= 5 && hour < 12) return '☀️ Bonjour'
    if (hour >= 12 && hour < 18) return '🌤 Bon après-midi'
    return '🌙 Bonsoir'
  }

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch('/api/me')
        if (!res.ok) throw new Error('Erreur lors de la récupération de l’utilisateur')

        const data = await res.json()
        setUser(data)

        const lastToastUserId = localStorage.getItem('lastToastUserId')

        if (data.id !== lastToastUserId) {
          const greetingText = getGreeting()
          setGreeting(greetingText)

          toast.success(`${greetingText}, ${data.nom ?? 'Utilisateur'} 👋`, {
            duration: 6000,
          })

          setShowAnimation(true)
          setTimeout(() => setShowAnimation(false), 4000)

          localStorage.setItem('lastToastUserId', data.id)
        }
      } catch (err) {
        console.error(err)
      }
    }

    fetchUser()
  }, [])

  return (
    <>
      {showAnimation && user && (
        <div className={styles.bienvenueBox}>
          {greeting}, <strong>{user.nom ?? 'Utilisateur'}</strong> !
        </div>
      )}
    </>
  )
}