"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface Profissional {
  name: string;
  badge: string;
  featured: boolean;
  photo: string;
  photoPosition: string;
  desc: string;
  especialidades: string[];
  wa: string;
}

function Modal({ prof, onClose }: { prof: Profissional; onClose: () => void }) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center p-4"
      style={{ background: "rgba(10,20,40,0.75)", backdropFilter: "blur(6px)" }}
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-[24px] overflow-hidden w-full max-w-[720px] max-h-[90vh] flex flex-col md:flex-row shadow-2xl"
        style={{ animation: "modalIn 0.22s ease" }}
        onClick={(e) => e.stopPropagation()}
      >
        <style>{`
          @keyframes modalIn {
            from { opacity: 0; transform: scale(0.95) translateY(12px); }
            to   { opacity: 1; transform: scale(1) translateY(0); }
          }
        `}</style>

        {/* Foto */}
        <div className="relative w-full md:w-[260px] flex-shrink-0 h-[260px] md:h-auto min-h-[260px]">
          <Image
            src={prof.photo}
            alt={prof.name}
            fill
            className="object-cover"
            style={{ objectPosition: prof.photoPosition }}
            sizes="260px"
          />
          {prof.featured && (
            <span className="absolute top-3 left-3 bg-[#143a62] text-white text-[0.68rem] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest">
              Fundadora
            </span>
          )}
        </div>

        {/* Conteúdo */}
        <div className="flex-1 overflow-y-auto p-7 flex flex-col gap-4">
          <div>
            <span className="inline-block bg-[#e8f5f3] text-[#1f8c7b] text-[0.72rem] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-2">
              {prof.badge}
            </span>
            <h2 className="text-[1.5rem] font-bold text-[#143a62] leading-tight">{prof.name}</h2>
          </div>

          <p className="text-[0.9rem] text-[#5a6a7e] leading-relaxed">{prof.desc}</p>

          <div>
            <p className="text-[0.72rem] font-bold text-[#143a62] uppercase tracking-widest mb-2">Especialidades</p>
            <div className="flex flex-wrap gap-1.5">
              {prof.especialidades.map((esp) => (
                <span key={esp} className="text-[0.75rem] px-2.5 py-1 rounded-full bg-[#f1f5fb] text-[#143a62] border border-[#dce7f3] font-medium">
                  {esp}
                </span>
              ))}
            </div>
          </div>

          <a
            href={prof.wa}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[12px] font-semibold text-white text-sm no-underline transition-all hover:opacity-90 active:scale-95"
            style={{ background: "linear-gradient(135deg, #143a62, #1f8c7b)" }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Agendar com {prof.name.split(" ")[0]}
          </a>
        </div>

        {/* Fechar */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/10 hover:bg-black/20 flex items-center justify-center transition-colors"
          aria-label="Fechar"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4 text-white md:text-[#143a62]">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default function ProfissionaisClient({ profissionais }: { profissionais: Profissional[] }) {
  const [selected, setSelected] = useState<Profissional | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {profissionais.map((prof) => (
          <button
            key={prof.name}
            onClick={() => setSelected(prof)}
            className="group relative rounded-[20px] overflow-hidden text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1f8c7b]"
            style={{
              aspectRatio: "3/4",
              boxShadow: prof.featured
                ? "0 0 0 2px #1f8c7b, 0 8px 32px rgba(31,140,123,0.18)"
                : "0 4px 20px rgba(20,58,98,0.08)",
            }}
          >
            {/* Foto */}
            <Image
              src={prof.photo}
              alt={prof.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              style={{ objectPosition: prof.photoPosition }}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
            />

            {/* Gradiente overlay */}
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to top, rgba(10,20,40,0.88) 0%, rgba(10,20,40,0.4) 45%, transparent 70%)",
              }}
            />

            {/* Badge topo */}
            {prof.featured && (
              <span className="absolute top-3 left-3 bg-[#1f8c7b] text-white text-[0.62rem] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-widest">
                Fundadora
              </span>
            )}

            {/* Info rodapé */}
            <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col gap-2">
              <div>
                <p className="text-white font-bold text-[0.95rem] leading-tight">{prof.name.split(" ")[0]}</p>
                <p className="text-white/70 text-[0.75rem] leading-tight">{prof.badge}</p>
              </div>
              <span className="inline-flex items-center justify-center gap-1 px-3 py-1.5 rounded-[8px] text-[0.75rem] font-semibold text-white border border-white/30 bg-white/10 backdrop-blur-sm transition-all duration-200 group-hover:bg-white group-hover:text-[#143a62] group-hover:border-white">
                Ver mais
              </span>
            </div>
          </button>
        ))}
      </div>

      {selected && <Modal prof={selected} onClose={() => setSelected(null)} />}
    </>
  );
}
