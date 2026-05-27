"use client";

import { useEffect, useState } from "react";

export default function ExitIntentPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let shown = false;

    function handleMouseLeave(e: MouseEvent) {
      if (shown) return;
      if (e.clientY <= 10) {
        shown = true;
        setVisible(true);
      }
    }

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, []);

  if (!visible) return null;

  const waUrl =
    "https://wa.me/5545999771331?text=" +
    encodeURIComponent(
      "Olá! Vim pelo site e gostaria de saber mais sobre a avaliação para meu filho."
    );

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-[9998] bg-black/60 backdrop-blur-sm"
        onClick={() => setVisible(false)}
      />

      {/* Popup */}
      <div className="fixed z-[9999] inset-0 flex items-center justify-center px-4 pointer-events-none">
        <div
          className="relative w-full max-w-[480px] rounded-[24px] overflow-hidden pointer-events-auto shadow-2xl"
          style={{ background: "linear-gradient(160deg, #0f2440 0%, #143a62 100%)" }}
        >
          {/* Close */}
          <button
            onClick={() => setVisible(false)}
            className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Fechar"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Badge */}
          <div className="px-8 pt-8 pb-0">
            <span className="inline-block text-[0.72rem] font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-[#1f8c7b]/25 text-[#7dd8cc] mb-4">
              Antes de sair
            </span>

            <h2 className="text-2xl font-bold text-white leading-snug mb-3">
              Seu filho pode estar esperando por essa avaliação
            </h2>

            <p className="text-white/70 text-sm leading-relaxed mb-5">
              Muitos pais demoram meses para buscar ajuda, sem saber que sinais de TEA, TDAH e atrasos no desenvolvimento têm tratamento eficaz quando identificados cedo.
            </p>

            <div
              className="rounded-[14px] px-4 py-3 mb-6"
              style={{
                background: "rgba(31,140,123,0.15)",
                border: "1px solid rgba(31,140,123,0.35)",
              }}
            >
              <p className="text-white/90 text-sm leading-relaxed">
                Na <strong className="text-[#7dd8cc]">Clínica Ser Singular</strong> em Medianeira, realizamos avaliação completa com equipe interdisciplinar especializada em desenvolvimento infantil.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="px-8 pb-8 flex flex-col gap-3">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[14px] font-semibold text-sm text-white no-underline transition-opacity hover:opacity-90"
              style={{ background: "#25D366" }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Agendar avaliação pelo WhatsApp
            </a>
            <button
              onClick={() => setVisible(false)}
              className="text-white/40 text-xs hover:text-white/70 transition-colors"
            >
              Não, obrigado
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
