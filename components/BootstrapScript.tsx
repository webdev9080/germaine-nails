// components/BootstrapScript.tsx
"use client";

import { useEffect } from "react";

export default function BootstrapScript() {
  useEffect(() => {
    // Dynamically import bootstrap only on the client
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return null;
}