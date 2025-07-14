'use client';

import { useEffect, useState } from 'react';
import { Message } from '@/lib/types';
import { format } from 'date-fns';
import Spinner from '@/components/Spinner';

export default function MessagesClient() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await fetch('/api/messagesBottom');
        const data = await res.json();
        setMessages(data);

        const readIds = data.map((m: Message) => m._id);
        localStorage.setItem('readMessageIds', JSON.stringify(readIds));
      } catch (error) {
        console.error('Erreur lors du chargement des messages:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Messages</h1>

      {loading ? (
        <div className="d-flex justify-content-center my-5">
          <Spinner size="sm" variant="primary" text="Chargement des messages" />
        </div>
      ) : (
        <div className="row">
          {messages.length === 0 ? (
            <p className="text-center">Aucun message pour le moment.</p>
          ) : (
            messages.map((msg) => (
              <div key={msg._id} className="col-md-6 mb-4">
                <div className="card shadow-sm h-100">
                  <div className="card-body">
                    <h5 className="card-title">{msg.titre}</h5>
                    <span className="badge bg-secondary text-capitalize mb-2">
                      {msg.type}
                    </span>
                    <p className="card-text">{msg.contenu}</p>
                    <p className="text-muted small">
                      {format(new Date(msg.date), 'dd MMMM yyyy')}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}