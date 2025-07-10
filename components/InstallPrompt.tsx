// components/InstallPrompt.tsx

"use client";

import { useEffect, useState } from "react";
import toast from 'react-hot-toast'

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<Event | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowPrompt(true);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    (deferredPrompt as any).prompt();
    const result = await (deferredPrompt as any).userChoice;
    if (result.outcome === "accepted") {
      console.log("App installée !");
      toast.success("Application installer avec succès.")
    } else {
      console.log("Installation annulée");
      toast.error("Erreur lors de l'installation.")
    }
    setShowPrompt(false);
  };

  if (!showPrompt) return null;

  return (
    <div className="position-fixed bottom-0 start-0 end-0 bg-light p-3 shadow-lg z-50 d-flex justify-content-between align-items-center" style={{ zIndex: 2000 }}>
      <span>📲 Installer l'application Germaine Nails ?</span>
      <button className="btn btn-primary btn-sm ms-3" onClick={handleInstall}>
        Installer
      </button>
    </div>
  );
}