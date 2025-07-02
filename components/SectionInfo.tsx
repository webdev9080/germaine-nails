"use client"

import { useState } from "react"
import { Modal, Button, OverlayTrigger, Tooltip } from "react-bootstrap"
import { BsInfoCircle } from "react-icons/bs"

interface SectionInfoProps {
  message: string
  color?: string // Bootstrap color: "primary", "danger", etc.
}

export default function SectionInfo({ message, color = "info" }: SectionInfoProps) {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <OverlayTrigger
        placement="left"
        overlay={<Tooltip id="info-tooltip">Voir les détails</Tooltip>}
      >
        <div
          onClick={handleShow}
          className="position-absolute top-0 end-0 m-2 p-1"
          style={{
            cursor: "pointer",
            color: `var(--bs-${color})`,
            transition: "transform 0.2s ease",
          }}
          onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.2)")}
          onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
        >
          <BsInfoCircle size={20} />
        </div>
      </OverlayTrigger>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton className={`bg-${color} bg-opacity-10 border-0`}>
          <Modal.Title className={`text-${color}`}>Information</Modal.Title>
        </Modal.Header>
        <Modal.Body className="fs-6 bg-dark-subtle text-secondary">
          {message}
        </Modal.Body>
        <Modal.Footer className="border-0 bg-dark-subtle">
          <Button variant={color} onClick={handleClose}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}