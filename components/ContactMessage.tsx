
"use client";

import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

interface Message {
  _id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

export default function ContactMessages() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await fetch("/api/messages");
        const data = await res.json();
        setMessages(data);
      } catch (err) {
        console.error("Erreur récupération des messages:", err);
      }
    };

    fetchMessages();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(`/api/messages/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setMessages((prev) => prev.filter((msg) => msg._id !== id));
        toast.success('Message supprimer')
      } else {
        console.error("Erreur lors de la suppression du message");
      }
    } catch (err) {
      console.error("Erreur suppression:", err);
    }
  };

  return (
    <div className="container my-2">
      <h2 className="text-center mb-4">📩</h2>
      {messages.length === 0 ? (
        <p className="text-center">Aucun message pour le moment.</p>
      ) : (
        messages.map((msg) => (
          <div key={msg._id} className="card mb-3 shadow-sm">
            <div className="card-body">
              <h5 className="text-center card-title">{msg.name}</h5>
              <h6 className="text-center card-subtitle text-muted">{msg.email}</h6>
              <p className="py-1 card-text mt-2 text-center">{msg.message}</p>
              <p className="text-end text-muted small">
                {new Date(msg._createdAt).toLocaleString()}
              </p>
              <div className="text-end">
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(msg._id)}
                >
                  Supprimer
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

/*"use client";

import { useEffect, useState } from "react";

interface Message {
  _id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

export default function ContactMessages() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await fetch("/api/messages");
        const data = await res.json();
        setMessages(data);
      } catch (err) {
        console.error("Erreur récupération des messages:", err);
      }
    };

    fetchMessages();
  }, []);

  return (
    <div className="container my-2">
      <h2 className="text-center mb-4">📩</h2>
      {messages.length === 0 ? (
        <p>Aucun message pour le moment.</p>
      ) : (
        messages.map((msg) => (
          <div key={msg._id} className="card mb-3 shadow-sm">
            <div className="card-body">
              <h5 className="text-center card-title">{msg.name}</h5>
              <h6 className="card-subtitle text-muted">{msg.email}</h6>
              <p className="card-text mt-2 text-center">{msg.message}</p>
              <p className="text-end text-muted small">
                {new Date(msg._createdAt).toLocaleString()}
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}*/