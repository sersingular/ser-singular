"use client";

import { useEffect, useState } from "react";

export default function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("cookieConsent") === null) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem("cookieConsent", "true");
    window.dispatchEvent(new Event("cookieConsentGranted"));
    setVisible(false);
  }

  function decline() {
    localStorage.setItem("cookieConsent", "false");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        background: "#1a1a1a",
        color: "#fff",
        padding: "16px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "16px",
        flexWrap: "wrap",
        boxShadow: "0 -2px 12px rgba(0,0,0,0.3)",
      }}
    >
      <p style={{ margin: 0, fontSize: "0.875rem", flex: 1 }}>
        Usamos cookies de análise (Facebook Pixel, Microsoft Clarity) para
        melhorar nosso site. Ao continuar, você concorda com nossa{" "}
        <a
          href="/politica-de-privacidade"
          style={{ color: "#a78bfa", textDecoration: "underline" }}
        >
          Política de Privacidade
        </a>
        .
      </p>
      <div style={{ display: "flex", gap: "8px" }}>
        <button
          onClick={decline}
          style={{
            padding: "8px 16px",
            background: "transparent",
            color: "#ccc",
            border: "1px solid #555",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "0.875rem",
          }}
        >
          Recusar
        </button>
        <button
          onClick={accept}
          style={{
            padding: "8px 16px",
            background: "#7c3aed",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "0.875rem",
            fontWeight: 600,
          }}
        >
          Aceitar
        </button>
      </div>
    </div>
  );
}
