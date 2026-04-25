import type { Metadata } from "next";
import { AnimateIn, Stagger, StaggerItem } from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "Nossa Essência — Ser Singular",
  description:
    "Conheça a missão, visão e valores que guiam cada atendimento na Clínica Ser Singular — desenvolvimento infantil em Medianeira, PR.",
};

const valores = [
  {
    emoji: "✨",
    title: "Singularidade",
    desc: "Cada criança é única. Cada família é única. Nossos planos nascem a partir do olhar atento e do cuidado com cada detalhe.",
  },
  {
    emoji: "🤝",
    title: "Comprometimento da família como base do desenvolvimento",
    desc: "Acreditamos que o desenvolvimento acontece quando há confiança, segurança emocional e relações verdadeiras.",
  },
  {
    emoji: "📊",
    title: "Decisões baseadas em evidências científicas",
    desc: "Utilizamos avaliações e coleta de dados unificados com sistemas de gestão para acompanhar a evolução de forma clara, ética e responsável.",
  },
  {
    emoji: "🤍",
    title: "Ética, responsabilidade e transparência",
    desc: "Respeitamos limites profissionais, não fazemos promessas irreais e atuamos com clareza em cada etapa do processo.",
  },
  {
    emoji: "🌱",
    title: "Evolução contínua",
    desc: "Acompanhamos, analisamos, ajustamos e evoluímos sempre respeitando a singularidade de cada criança e da família.",
  },
  {
    emoji: "🎈",
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
                  <span className="text-4xl">🌱</span>
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
                  <span className="text-4xl">🌈</span>
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
            <span className="inline-block bg-white text-[#143a62] px-3.5 py-1 rounded-full text-[0.75rem] font-semibold uppercase tracking-widest mb-4 border border-[#e2e8f0]">
              🤍 Valores
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
                  <span className="text-3xl block mb-4 group-hover:scale-110 transition-transform duration-300">
                    {v.emoji}
                  </span>
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
