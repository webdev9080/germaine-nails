'use client'

import { useState, useRef } from 'react'
import toast from 'react-hot-toast'

export default function CommentForm({
  articleId,
  onCommentPosted,
}: {
  articleId: string
  onCommentPosted: () => void
}) {
  const [sending, setSending] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const nom = formData.get('nom')?.toString()
    const message = formData.get('message')?.toString()

    if (!nom || !message) return

    try {
      setSending(true)
      const toastId = toast.loading('Envoi du commentaire...')
      await fetch('/api/commentaires', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ articleId, nom, message }),
      })

      toast.success('Commentaire envoyé avec succès !', { id: toastId })
      formRef.current?.reset()
      onCommentPosted()
    } catch (err) {
      toast.error("Erreur lors de l'envoi du commentaire")
      console.error('Erreur envoi commentaire', err)
    } finally {
      setSending(false)
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div className="mb-3">
        <input name="nom" className="form-control" placeholder="Votre nom" required />
      </div>
      <div className="mb-3">
        <textarea
          name="message"
          className="form-control"
          placeholder="Votre message"
          rows={4}
          required
        />
      </div>
      <button className="btn btn-primary" type="submit" disabled={sending}>
        {sending ? 'Envoi en cours...' : 'Envoyer'}
      </button>
    </form>
  )
}