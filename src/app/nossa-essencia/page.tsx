import type { Metadata } from "next";
import { AnimateIn, Stagger, StaggerItem } from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "Nossa Essência — Ser Singular",
  description:
    "Conheça a missão, visão e valores que guiam cada atendimento na Clínica Ser Singular — desenvolvimento infantil em Medianeira, PR.",
};

const valores = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8" stroke="#1f8c7b">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    title: "Singularidade",
    desc: "Cada criança é única. Cada família é única. Nossos planos nascem a partir do olhar atento e do cuidado com cada detalhe.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8" stroke="#1f8c7b">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: "Comprometimento da família como base do desenvolvimento",
    desc: "Acreditamos que o desenvolvimento acontece quando há confiança, segurança emocional e relações verdadeiras.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8" stroke="#1f8c7b">
        <line x1="18" y1="20" x2="18" y2="10"/>
        <line x1="12" y1="20" x2="12" y2="4"/>
        <line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
    title: "Decisões baseadas em evidências científicas",
    desc: "Utilizamos avaliações e coleta de dados unificados com sistemas de gestão para acompanhar a evolução de forma clara, ética e responsável.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8" stroke="#1f8c7b">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    title: "Ética, responsabilidade e transparência",
    desc: "Respeitamos limites profissionais, não fazemos promessas irreais e atuamos com clareza em cada etapa do processo.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8" stroke="#1f8c7b">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/>
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
      </svg>
    ),
    title: "Evolução contínua",
    desc: "Acompanhamos, analisamos, ajustamos e evoluímos sempre respeitando a singularidade de cada criança e da família.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8" stroke="#1f8c7b">
        <circle cx="12" cy="12" r="10"/>
        <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
        <line x1="9" y1="9" x2="9.01" y2="9"/>
        <line x1="15" y1="9" x2="15.01" y2="9"/>
      </svg>
    ),
    title: "Brincar como princípio de intervenção",
    desc: "Quando usamos o brincar, respeitamos a forma mais autêntica da criança aprender.",
  },
];

export default function NossaEssenciaPage() {
  return (
    <>
      {/* HERO */}
      <section
        className="pt-32 pb-20 px-8 text-center relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #143a62 0%, #1a4d7c 50%, #1a5a6e 100%)" }}
      >
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at center, rgba(31,140,123,0.18) 0%, transparent 70%)" }}
        />
        <div className="relative z-10 max-w-[680px] mx-auto">
          <AnimateIn>
            <span className="inline-block bg-white/10 text-white/80 px-3.5 py-1 rounded-full text-[0.75rem] font-semibold uppercase tracking-widest mb-5 border border-white/20">
              Nossa Essência
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
              O que nos move em cada atendimento
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              A Ser Singular existe para transformar o desenvolvimento infantil com humanidade, método e presença. Estes são os princípios que orientam cada decisão e cada cuidado.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* MISSÃO + VISÃO */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Missão */}
            <AnimateIn>
              <div
                className="rounded-[20px] p-8 h-full"
                style={{
                  background: "linear-gradient(135deg, #e8f5f3 0%, #f0faf8 100%)",
                  border: "1.5px solid rgba(31,140,123,0.2)",
                }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 flex-shrink-0" stroke="#1f8c7b">
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/>
                    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
                  </svg>
                  <div>
                    <div className="text-[0.7rem] font-bold uppercase tracking-widest text-[#1f8c7b] mb-0.5">
                      Missão
                    </div>
                    <div className="text-xl font-bold text-[#143a62]">Ser Singular</div>
                  </div>
                </div>
                <p className="text-[#3a5068] text-base leading-relaxed">
                  Promover o desenvolvimento infantil de forma humana, ética e personalizada, respeitando a singularidade de cada criança e fortalecendo o vínculo com sua família.
                </p>
              </div>
            </AnimateIn>

            {/* Visão */}
            <AnimateIn>
              <div
                className="rounded-[20px] p-8 h-full"
                style={{
                  background: "linear-gradient(135deg, #eef2f7 0%, #f4f8ff 100%)",
                  border: "1.5px solid rgba(20,58,98,0.15)",
                }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 flex-shrink-0" stroke="#143a62">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                  <div>
                    <div className="text-[0.7rem] font-bold uppercase tracking-widest text-[#143a62] mb-0.5">
                      Visão
                    </div>
                    <div className="text-xl font-bold text-[#143a62]">Ser Singular</div>
                  </div>
                </div>
                <p className="text-[#3a5068] text-base leading-relaxed">
                  Ser referência em desenvolvimento infantil por unir acolhimento, vínculo familiar e excelência técnica, utilizando gestão organizada e sistemas inteligentes para acompanhar evoluções, ajustar caminhos e garantir resultados reais.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* VALORES */}
      <section className="py-20 px-8 bg-[#f8f9fb]">
        <div className="max-w-[1100px] mx-auto">
          <AnimateIn className="text-center mb-14">
            <span className="inline-flex items-center gap-1.5 bg-white text-[#143a62] px-3.5 py-1 rounded-full text-[0.75rem] font-semibold uppercase tracking-widest mb-4 border border-[#e2e8f0]">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5" stroke="#143a62">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
              Valores
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#143a62] leading-snug">
              Os princípios que guiam cada passo
            </h2>
            <p className="text-[#5a6a7e] text-base mt-4 max-w-[560px] mx-auto leading-relaxed">
              Mais do que palavras, esses valores estão presentes em cada sessão, cada relatório e cada conversa com as famílias.
            </p>
          </AnimateIn>

          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {valores.map((v) => (
              <StaggerItem key={v.title}>
                <div className="rounded-[16px] p-7 h-full bg-white border border-[#e8eaf0] hover:border-[#1f8c7b]/30 hover:shadow-lg transition-all duration-300 group">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300 w-fit">
                    {v.icon}
                  </div>
                  <div className="text-[0.8rem] font-bold text-[#143a62] uppercase tracking-wide mb-2 leading-snug">
                    {v.title}
                  </div>
                  <p className="text-[#5a6a7e] text-[0.9rem] leading-relaxed">{v.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 px-8 text-center"
        style={{ background: "linear-gradient(135deg, #e8f5f3 0%, #f0f7ff 100%)" }}
      >
        <div className="max-w-[620px] mx-auto">
          <AnimateIn>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#143a62] mb-4">
              Esses valores estão em cada atendimento
            </h2>
            <p className="text-[#5a6a7e] leading-relaxed mb-8">
              Conheça nossa equipe e as especialidades que tornam possível um cuidado singular, humano e baseado em evidências.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="/profissionais"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[12px] font-semibold text-white no-underline transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg, #143a62, #1f8c7b)",
                  boxShadow: "0 6px 20px rgba(20,58,98,0.2)",
                }}
              >
                Conhecer a equipe
              </a>
              <a
                href="/contato"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[12px] font-semibold no-underline transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: "rgba(31,140,123,0.1)",
                  color: "#1f8c7b",
                  border: "1.5px solid rgba(31,140,123,0.35)",
                }}
              >
                Agendar avaliação
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
