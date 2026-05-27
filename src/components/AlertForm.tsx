"use client";

import React from "react";

const alertSigns = [
  {
    question: "Como é a comunicação do seu filho?",
    options: [
      "Fala bem para a idade",
      "Tem atraso na fala ou fala pouco",
      "Não fala ou perdeu a fala que tinha",
      "Fala, mas tem dificuldade de manter uma conversa",
    ],
  },
  {
    question: "Como ele se comporta em situações sociais?",
    options: [
      "Interage bem com outras crianças",
      "Prefere ficar sozinho ou evita contato",
      "Tem dificuldade para fazer amigos",
      "Não percebe as emoções dos outros",
    ],
  },
  {
    question: "Você observa comportamentos repetitivos ou rituais?",
    options: [
      "Não",
      "Às vezes (ex: alinhar objetos, rotinas fixas)",
      "Sim, com frequência",
      "Tem crises quando a rotina muda",
    ],
  },
  {
    question: "Como é a atenção e o comportamento dele?",
    options: [
      "Consegue se concentrar bem",
      "Se distrai com facilidade, não termina tarefas",
      "É muito agitado, não para quieto",
      "Age sem pensar, é impulsivo",
    ],
  },
  {
    question: "Como está o rendimento na escola?",
    options: [
      "Vai bem, sem dificuldades",
      "Tem dificuldades de leitura ou escrita",
      "Baixo rendimento, mas não sabemos o motivo",
      "Ainda não está em idade escolar",
    ],
  },
];

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function AlertForm() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("nome") as HTMLInputElement).value;
    const phone = (form.elements.namedItem("telefone") as HTMLInputElement).value;
    const answers: string[] = [];
    alertSigns.forEach((sign, i) => {
      const el = form.elements.namedItem(`q${i}`) as HTMLSelectElement;
      if (el?.value) answers.push(`${i + 1}. ${sign.question}\n   R: ${el.value}`);
    });
    const msg = encodeURIComponent(
      `Olá! Me chamo ${name} (${phone}) e vim pelo site.\n\nRespostas sobre meu filho:\n${answers.join("\n")}\n\nGostaria de saber mais sobre avaliação.`
    );
    window.open(`https://wa.me/5545999771331?text=${msg}`, "_blank");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {alertSigns.map((item, i) => (
        <div key={i} className="p-5 bg-white rounded-[16px] border border-[#e2e8f0]">
          <label className="block text-sm font-semibold text-[#143a62] mb-3">
            {i + 1}. {item.question}
          </label>
          <select
            name={`q${i}`}
            required
            defaultValue=""
            className="w-full px-4 py-2.5 rounded-[10px] border border-[#e2e8f0] text-sm text-[#3d4f63] bg-[#f8f9fb] focus:outline-none focus:border-[#1f8c7b]"
          >
            <option value="" disabled>Selecione uma opção</option>
            {item.options.map((opt, j) => (
              <option key={j} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
      ))}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-5 bg-white rounded-[16px] border border-[#e2e8f0]">
          <label className="block text-sm font-semibold text-[#143a62] mb-3">
            Seu nome
          </label>
          <input
            type="text"
            name="nome"
            required
            placeholder="Nome completo"
            className="w-full px-4 py-2.5 rounded-[10px] border border-[#e2e8f0] text-sm text-[#3d4f63] bg-[#f8f9fb] focus:outline-none focus:border-[#1f8c7b]"
          />
        </div>
        <div className="p-5 bg-white rounded-[16px] border border-[#e2e8f0]">
          <label className="block text-sm font-semibold text-[#143a62] mb-3">
            WhatsApp
          </label>
          <input
            type="tel"
            name="telefone"
            required
            placeholder="(45) 99999-9999"
            className="w-full px-4 py-2.5 rounded-[10px] border border-[#e2e8f0] text-sm text-[#3d4f63] bg-[#f8f9fb] focus:outline-none focus:border-[#1f8c7b]"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-[14px] font-semibold text-sm text-white transition-opacity hover:opacity-90"
        style={{ background: "#25D366" }}
      >
        <WhatsAppIcon />
        Quero ser contactado
      </button>
    </form>
  );
}
