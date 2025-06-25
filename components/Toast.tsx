"use client";

import { useEffect, useRef } from "react";

export default function Toast({ message }: { message: string }) {
  const toastRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (toastRef.current && (window as any).bootstrap?.Toast) {
      const toast = new (window as any).bootstrap.Toast(toastRef.current);
      toast.show();
    }
  }, []);

  return (
    <div
      className="toast align-items-center text-bg-success border-0 position-fixed bottom-0 end-0 m-4"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      ref={toastRef}
    >
      <div className="d-flex">
        <div className="toast-body">{message}</div>
        <button
          type="button"
          className="btn-close btn-close-white me-2 m-auto"
          data-bs-dismiss="toast"
          aria-label="Fermer"
        ></button>
      </div>
    </div>
  );
}