"use client"

import { useState, useRef, useEffect, KeyboardEvent } from "react"
import { Button, Form, Spinner } from "react-bootstrap"
import { FaTimes } from "react-icons/fa"

interface ChatbotProps {
  onClose: () => void
}

type Message = {
  from: "user" | "bot"
  text: string
}

export default function Chatbot({ onClose }: ChatbotProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const sendMessage = async () => {
    if (!input.trim()) return

    const userMessage: Message = { from: "user", text: input }
    setMessages((prev) => [...prev, userMessage])
    setLoading(true)

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      })

      const data = await res.json()
      const botMessage: Message = {
        from: "bot",
        text: data.reply || "Désolé, je n'ai pas compris.",
      }

      setMessages((prev) => [...prev, botMessage])
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "❌ Une erreur est survenue." },
      ])
    } finally {
      setInput("")
      setLoading(false)
    }
  }

  const handleKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !loading) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <div
      className="shadow-lg rounded-3 d-flex flex-column bg-dark-subtle mb-5"
      style={{ width: 320, maxHeight: 480, border: "2px solid #d81b60" }}
    >
      {/* Header */}
      <div
        className="d-flex justify-content-between align-items-center px-3 py-2 text-white rounded-top-3"
        style={{ background: "#d81b60" }}
      >
        <strong>Assistant Germaine Nails</strong>
        <button
          onClick={onClose}
          className="btn btn-sm btn-light text-danger d-flex align-items-center justify-content-center"
          style={{ width: 28, height: 28 }}
          aria-label="Fermer"
        >
          <FaTimes size={14} />
        </button>
      </div>

      {/* Messages */}
      <div
        className="flex-grow-1 p-3 overflow-auto"
        style={{ background: "#fffafc" }}
      >
        {messages.map((m, i) => (
          <div
            key={i}
            className={`mb-2 d-flex ${m.from === "user" ? "justify-content-end" : "justify-content-start"}`}
          >
            <span
              className={`px-3 py-2 rounded-3 ${
                m.from === "user"
                  ? "text-white"
                  : "bg-light border text-dark"
              }`}
              style={{
                background: m.from === "user" ? "#d81b60" : undefined,
                maxWidth: "80%",
                whiteSpace: "pre-wrap",
              }}
            >
              {m.text}
            </span>
          </div>
        ))}

        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="p-3 border-top bg-white">
        <Form.Control
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKey}
          placeholder="Posez votre question..."
          disabled={loading}
          className="mb-2"
        />
        <Button
          variant="danger"
          style={{ background: "#d81b60", borderColor: "#d81b60" }}
          onClick={sendMessage}
          disabled={loading || !input.trim()}
          className="w-100"
        >
          {loading ? <Spinner animation="border" size="sm" /> : "Envoyer"}
        </Button>
      </div>
    </div>
  )
}