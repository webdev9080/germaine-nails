"use client"

import { useState } from "react"
import dynamic from "next/dynamic"
import { HiOutlineChat } from "react-icons/hi"
import { MdChatBubble } from "react-icons/md"
import { BsChatDotsFill } from "react-icons/bs"





const Chatbot = dynamic(() => import("./Chatbot"), { ssr: false })

export default function ChatbotToggle() {
  const [open, setOpen] = useState(false)

  return (
    <div
      style={{
        position: "fixed",
        bottom: 90,          // ← hauteur au-dessus du bord bas (px)
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
            background: "#fff",
            border: "none",
          }}
        >
          {/*<MdChatBubble size={28} color="#93f365b1" />*/}
          <BsChatDotsFill size={28} color="#6f42c1" />
          
        </button>
      )}
    </div>
  )
}