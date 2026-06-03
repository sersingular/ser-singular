"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const questions = [
  {
    id: 1,
    text: "Seu filho tem dificuldade para se comunicar ou expressar o que quer?",
    options: ["Sim, muita dificuldade", "Às vezes", "Não"],
  },
  {
    id: 2,
    text: "Ele fica muito incomodado com mudanças de rotina ou lugares novos?",
    options: ["Sim, sempre", "Às vezes", "Não"],
  },
  {
    id: 3,
    text: "Você percebe que ele evita olhar nos olhos das pessoas?",
    options: ["Sim, frequentemente", "Às vezes", "Não"],
  },
  {
    id: 4,
    text: "Ele é muito sensível a barulhos, texturas de roupa ou alimentos?",
    options: ["Sim, muito", "Um pouco", "Não"],
  },
  {
    id: 5,
    text: "Ele tem dificuldade para brincar ou interagir com outras crianças?",
    options: ["Sim", "Às vezes", "Não"],
  },
  {
    id: 6,
    text: "Essas características têm gerado prejuízos na rotina ou no funcionamento familiar?",
    options: ["Sim", "Às vezes", "Não"],
  },
];

export default function AvaliacaoAutismo() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const yesCount = Object.values(answers).filter((v) => v === 0).length;
  const answeredCount = Object.keys(answers).length;
  const showAlert = yesCount >= 4;

  const handleAnswer = (questionId: number, optionIndex: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let v = e.target.value.replace(/\D/g, "");
    if (v.length <= 2) v = v.replace(/^(\d{0,2})/, "($1");
    else if (v.length <= 7) v = v.replace(/^(\d{2})(\d{0,5})/, "($1) $2");
    else v = v.replace(/^(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
    setForm((p) => ({ ...p, phone: v.slice(0, 15) }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/quiz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          answers: questions.map((q) => ({
            question: q.text,
            answer:
              answers[q.id] !== undefined
                ? q.options[answers[q.id]]
                : "Não respondido",
          })),
          yesCount,
          showAlert,
        }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return <SuccessScreen name={form.name} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#eef2f7] via-[#f8f9fb] to-[#e8f5f3]">
      {/* Header */}
      <header className="bg-white border-b border-[#e2e8f0] shadow-sm">
        <div className="max-w-2xl mx-auto px-4 py-4 flex justify-center">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Clínica Ser Singular"
              width={200}
              height={75}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-4 py-8 pb-16">
        {/* Hero */}
        <div className="text-center mb-8">
          <span className="inline-block bg-[#e8f5f3] text-[#1f8c7b] text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
            Triagem gratuita · TEA e Desenvolvimento Infantil
          </span>
          <h1 className="text-2xl md:text-3xl font-bold text-[#143a62] leading-tight mb-3">
            Você observou algum desses comportamentos no seu filho?
          </h1>
          <p className="text-[#5a6a7e] text-base leading-relaxed max-w-lg mx-auto">
            Responda as perguntas abaixo. Nossa equipe analisará suas respostas e
            entrará em contato com orientações personalizadas.
          </p>
        </div>

        {/* Progress */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-[#5a6a7e]">
              Perguntas respondidas
            </span>
            <span className="text-sm font-bold text-[#143a62]">
              {answeredCount}/{questions.length}
            </span>
          </div>
          <div className="h-2 bg-[#e2e8f0] rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#143a62] to-[#1f8c7b] rounded-full"
              initial={{ width: 0 }}
              animate={{
                width: `${(answeredCount / questions.length) * 100}%`,
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>
        </div>

        {/* Questions */}
        <div className="space-y-4 mb-6">
          {questions.map((q, qi) => (
            <motion.div
              key={q.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: qi * 0.05 }}
              className={`bg-white rounded-2xl p-5 shadow-sm border transition-all duration-200 ${
                answers[q.id] !== undefined
                  ? "border-[#1f8c7b]/40 shadow-[0_0_0_2px_rgba(31,140,123,0.08)]"
                  : "border-[#e2e8f0]"
              }`}
            >
              <p className="font-semibold text-[#143a62] mb-4 leading-snug flex items-start gap-2.5">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#143a62] text-white text-xs font-bold shrink-0 mt-0.5">
                  {qi + 1}
                </span>
                {q.text}
              </p>
              <div className="space-y-2">
                {q.options.map((option, oi) => {
                  const isSelected = answers[q.id] === oi;
                  const isYes = oi === 0;
                  return (
                    <label
                      key={oi}
                      className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-150 border select-none ${
                        isSelected
                          ? isYes
                            ? "bg-[#eef2f7] border-[#143a62]"
                            : "bg-[#e8f5f3] border-[#1f8c7b]"
                          : "border-[#e2e8f0] hover:border-[#1f8c7b]/40 hover:bg-[#f8f9fb]"
                      }`}
                    >
                      <input
                        type="radio"
                        name={`q${q.id}`}
                        className="sr-only"
                        checked={isSelected}
                        onChange={() => handleAnswer(q.id, oi)}
                      />
                      <span
                        className={`w-4 h-4 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all ${
                          isSelected
                            ? isYes
                              ? "border-[#143a62] bg-[#143a62]"
                              : "border-[#1f8c7b] bg-[#1f8c7b]"
                            : "border-[#c7d2dd]"
                        }`}
                      >
                        {isSelected && (
                          <span className="w-1.5 h-1.5 rounded-full bg-white" />
                        )}
                      </span>
                      <span
                        className={`text-sm ${
                          isSelected ? "font-semibold" : "text-[#1a2332]"
                        } ${
                          isSelected
                            ? isYes
                              ? "text-[#143a62]"
                              : "text-[#1f8c7b]"
                            : ""
                        }`}
                      >
                        {option}
                      </span>
                    </label>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Alert */}
        <AnimatePresence>
          {showAlert && (
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-5 mb-6"
            >
              <div className="flex gap-3 items-start">
                <div className="shrink-0 w-9 h-9 rounded-full bg-amber-100 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-amber-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-amber-800 mb-1 text-base">
                    Atenção, mãe/pai
                  </p>
                  <p className="text-amber-700 text-sm leading-relaxed">
                    Esses sinais podem indicar que seu filho se beneficiaria de
                    uma avaliação especializada. Nossa equipe entrará em contato
                    para orientar o próximo passo.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#e2e8f0]">
          <h2 className="text-lg font-bold text-[#143a62] mb-1">
            Receba orientação da nossa equipe
          </h2>
          <p className="text-sm text-[#5a6a7e] mb-5">
            Preencha seus dados e entraremos em contato o mais breve possível.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-[#143a62] mb-1.5">
                Nome completo *
              </label>
              <input
                type="text"
                required
                placeholder="Seu nome"
                value={form.name}
                onChange={(e) =>
                  setForm((p) => ({ ...p, name: e.target.value }))
                }
                className="w-full px-4 py-3 rounded-xl border border-[#e2e8f0] text-[#1a2332] placeholder:text-[#c7d2dd] focus:outline-none focus:border-[#1f8c7b] focus:ring-2 focus:ring-[#1f8c7b]/10 transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#143a62] mb-1.5">
                WhatsApp *
              </label>
              <input
                type="tel"
                required
                placeholder="(45) 99999-9999"
                value={form.phone}
                onChange={handlePhoneChange}
                className="w-full px-4 py-3 rounded-xl border border-[#e2e8f0] text-[#1a2332] placeholder:text-[#c7d2dd] focus:outline-none focus:border-[#1f8c7b] focus:ring-2 focus:ring-[#1f8c7b]/10 transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#143a62] mb-1.5">
                E-mail{" "}
                <span className="font-normal text-[#5a6a7e]">(opcional)</span>
              </label>
              <input
                type="email"
                placeholder="seu@email.com"
                value={form.email}
                onChange={(e) =>
                  setForm((p) => ({ ...p, email: e.target.value }))
                }
                className="w-full px-4 py-3 rounded-xl border border-[#e2e8f0] text-[#1a2332] placeholder:text-[#c7d2dd] focus:outline-none focus:border-[#1f8c7b] focus:ring-2 focus:ring-[#1f8c7b]/10 transition-all"
              />
            </div>

            {status === "error" && (
              <p className="text-red-600 text-sm bg-red-50 rounded-xl px-4 py-3 border border-red-100">
                Ocorreu um erro. Tente novamente ou nos chame pelo WhatsApp.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading" || !form.name || !form.phone}
              className="w-full py-4 bg-gradient-to-r from-[#143a62] to-[#1f8c7b] text-white font-bold rounded-xl text-base shadow-lg hover:shadow-xl hover:opacity-95 active:scale-[0.99] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading"
                ? "Enviando..."
                : "Quero receber orientação gratuita →"}
            </button>

            <p className="text-xs text-center text-[#5a6a7e]">
              Seus dados estão seguros. Não compartilhamos suas informações.
            </p>
          </form>
        </div>

        {/* Mini footer */}
        <div className="text-center mt-8">
          <p className="text-sm text-[#5a6a7e]">
            Clínica Ser Singular · Medianeira, PR ·{" "}
            <a
              href="https://wa.me/554599771331"
              className="text-[#1f8c7b] font-medium hover:underline"
            >
              (45) 99977-1331
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

function SuccessScreen({ name }: { name: string }) {
  const firstName = name.split(" ")[0];
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#eef2f7] via-[#f8f9fb] to-[#e8f5f3] flex flex-col items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="bg-white rounded-3xl p-8 shadow-lg border border-[#e2e8f0] max-w-md w-full text-center"
      >
        <div className="w-16 h-16 rounded-full bg-[#e8f5f3] flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-[#1f8c7b]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h2 className="text-xl font-bold text-[#143a62] mb-2">
          Recebemos suas respostas, {firstName}!
        </h2>
        <p className="text-[#5a6a7e] text-sm leading-relaxed mb-6">
          Nossa equipe analisará seu questionário e entrará em contato em breve
          com as melhores orientações para o seu filho.
        </p>
        <a
          href="https://wa.me/554599771331?text=Ol%C3%A1!%20Acabei%20de%20preencher%20o%20question%C3%A1rio%20no%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
          className="inline-flex items-center justify-center gap-2 w-full py-4 bg-[#25D366] text-white font-bold rounded-xl shadow-md hover:opacity-90 transition-all"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          Falar agora no WhatsApp
        </a>
        <p className="text-xs text-[#5a6a7e] mt-4">
          Clínica Ser Singular · Medianeira, PR
        </p>
      </motion.div>
    </div>
  );
}
