'use client'
import React, { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Commentaire = {
  _id: string
  nom: string
  message: string
  date: string
}

export default function CommentairesList({ commentaires }: { commentaires: Commentaire[] }) {
  const [showModal, setShowModal] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)

  // Bloque le scroll du fond
  useEffect(() => {
    document.body.style.overflow = showModal ? 'hidden' : 'auto'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [showModal])

  // Ferme la modale si on clique en dehors
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setShowModal(false)
    }
  }

  if (commentaires.length === 0) {
    return <p className="text-center text-muted">Aucun commentaire pour le moment.</p>
  }

  return (
    <>
      <div className="d-flex justify-content-center">
          <button className="btn btn-warning rounded-5 mb-3" onClick={() => setShowModal(true)}>
        Voir les commentaires
      </button>
      </div>

      <AnimatePresence>
        {showModal && (
          <motion.div
            className="modal-backdrop"
            onClick={handleBackdropClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 1050,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-start',
              paddingTop: '2rem',
              overflowY: 'auto',
            }}
          >
            <motion.div
              ref={modalRef}
              className="modal-dialog modal-dialog-scrollable"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="modal-content shadow rounded-4"
                style={{
                  backgroundColor: '#fff',
                  maxHeight: '40vh',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div className="modal-header p-2">
                  <h5 className="modal-title">Commentaires</h5>
                  <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                </div>
                <div
                  className="modal-body"
                  style={{
                    overflowY: 'auto',
                    flexGrow: 1,
                    padding: '1rem',
                  }}
                >
                  {commentaires.map((c) => (
                    <div
                      key={c._id}
                      className="list-group-item list-group-item-action flex-column align-items-start mb-3 shadow-sm rounded"
                    >
                      <div className="d-flex w-100 justify-content-between">
                        <strong className="mb-1 text-pink">{c.nom}</strong>
                        <small className="text-muted">
                          {new Date(c.date).toLocaleDateString('fr-FR')}
                        </small>
                      </div>
                      <p className="lead mb-1">{c.message}</p>
                    </div>
                  ))}
                </div>
                <div className="modal-footer p-2">
                  <button className="btn btn-secondary" onClick={() => setShowModal(false)}>
                    Fermer
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}