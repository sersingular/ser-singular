"use client";

export default function CookieSettingsButton() {
  function reopenBanner() {
    localStorage.removeItem("cookieConsent");
    window.location.reload();
  }

  return (
    <button
      onClick={reopenBanner}
      className="text-xs text-white/35 hover:text-white/60 transition-colors cursor-pointer bg-transparent border-0 p-0"
    >
      Configurações de cookies
    </button>
  );
}
