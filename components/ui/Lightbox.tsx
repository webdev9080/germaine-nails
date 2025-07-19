"use client";

import { useEffect } from "react";
import { FaTimes } from "react-icons/fa";

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Lightbox({ isOpen, onClose, children }: LightboxProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 d-flex align-items-center justify-content-center bg-dark bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-100 p-4 position-relative">
        <button
          type="button"
          className="btn position-absolute top-0 end-0 m-2 p-1"
          onClick={onClose}
        >
          <FaTimes className="text-danger" size={24} />
        </button>
        {children}
      </div>
    </div>
  );
}