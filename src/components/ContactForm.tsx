"use client";

import { useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    setError("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      specialty: (form.elements.namedItem("specialty") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const json = await res.json();
        throw new Error(json.error || "Erro ao enviar mensagem.");
      }

      setState("success");
      form.reset();
    } catch (err) {
      setState("error");
      setError(err instanceof Error ? err.message : "Erro ao enviar mensagem.");
    }
  }

  if (state === "success") {
    return (
      <div className="bg-white rounded-[20px] p-10 border border-[#e2e8f0] text-center">
        <div className="text-5xl mb-4">💚</div>
        <h3 className="text-xl font-bold text-[#143a62] mb-2">Mensagem enviada!</h3>
        <p className="text-[#5a6a7e] text-sm leading-relaxed mb-6">
          Recebemos seu contato e retornaremos em até 24h. Você também pode nos chamar pelo WhatsApp para agilizar.
        </p>
        <button
          onClick={() => setState("idle")}
          className="text-sm text-[#1f8c7b] font-semibold hover:underline"
        >
          Enviar outra mensagem
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-[20px] p-8 border border-[#e2e8f0] space-y-4"
    >
      <div>
        <label className="block text-sm font-medium text-[#143a62] mb-1.5" htmlFor="name">
          Seu nome *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Nome completo"
          className="w-full px-4 py-2.5 border border-[#e2e8f0] rounded-[10px] text-sm text-[#1a2332] outline-none focus:border-[#1f8c7b] transition-colors"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-[#143a62] mb-1.5" htmlFor="phone">
            Telefone / WhatsApp *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="(45) 99999-9999"
            className="w-full px-4 py-2.5 border border-[#e2e8f0] rounded-[10px] text-sm text-[#1a2332] outline-none focus:border-[#1f8c7b] transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#143a62] mb-1.5" htmlFor="email">
            E-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="seu@email.com"
            className="w-full px-4 py-2.5 border border-[#e2e8f0] rounded-[10px] text-sm text-[#1a2332] outline-none focus:border-[#1f8c7b] transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-[#143a62] mb-1.5" htmlFor="specialty">
          Especialidade de interesse
        </label>
        <select
          id="specialty"
          name="specialty"
          className="w-full px-4 py-2.5 border border-[#e2e8f0] rounded-[10px] text-sm text-[#1a2332] outline-none focus:border-[#1f8c7b] transition-colors bg-white"
        >
          <option value="">Selecione...</option>
          <option value="Psicologia">Psicologia</option>
          <option value="Fonoaudiologia">Fonoaudiologia</option>
          <option value="Terapia Ocupacional">Terapia Ocupacional</option>
          <option value="Psicopedagogia">Psicopedagogia</option>
          <option value="Não sei ainda — preciso de orientação">
            Não sei ainda — preciso de orientação
          </option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-[#143a62] mb-1.5" htmlFor="message">
          Conte um pouco sobre seu filho
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Descreva brevemente a dificuldade ou o motivo do contato..."
          className="w-full px-4 py-2.5 border border-[#e2e8f0] rounded-[10px] text-sm text-[#1a2332] outline-none focus:border-[#1f8c7b] transition-colors resize-none"
        />
      </div>

      {state === "error" && (
        <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-[10px] px-4 py-3">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={state === "loading"}
        className="w-full py-3.5 rounded-[12px] font-semibold text-white text-sm transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
        style={{
          background: "linear-gradient(135deg, #143a62, #1f8c7b)",
          boxShadow: "0 4px 16px rgba(20,58,98,0.2)",
        }}
      >
        {state === "loading" ? "Enviando..." : "Enviar e Aguardar Contato 💚"}
      </button>
    </form>
  );
}
