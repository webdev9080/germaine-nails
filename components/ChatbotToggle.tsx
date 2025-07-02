"use client"

import { useState } from "react"
import dynamic from "next/dynamic"
import { HiOutlineChat } from "react-icons/hi"

const Chatbot = dynamic(() => import("./Chatbot"), { ssr: false })

export default function ChatbotToggle() {
  const [open, setOpen] = useState(false)

  return (
    <div
      style={{
        position: "fixed",
        bottom: 80,          // ← hauteur au-dessus du bord bas (px)
        right: 20,           // ← distance du bord droit (px)
        zIndex: 1080,
      }}
    >
      {open ? (
        <Chatbot onClose={() => setOpen(false)} />
      ) : (
        <button
          aria-label="Ouvrir le chat"
          onClick={() => setOpen(true)}
          className="btn shadow-lg d-flex align-items-center justify-content-center messenger-icon-animated"
          style={{
            width: 64,
            height: 64,
            borderRadius: "50%",
            background: "#d81b60",
            border: "none",
          }}
        >
          <HiOutlineChat size={28} color="#fff" />
        </button>
      )}
    </div>
  )
}