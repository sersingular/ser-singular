import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Profissionais — Ser Singular",
  description: "Conheça a equipe da Ser Singular: psicóloga, fonoaudióloga, psicopedagoga e terapeuta ocupacional especializadas em desenvolvimento infantil.",
};

const profissionais = [
  {
    name: "Daiana Plauth",
    badge: "Fundadora & Psicóloga",
    featured: true,
    photo: "/Daiana.jpeg",
    photoPosition: "center 10%",
    desc: "Com 13 anos de experiência em desenvolvimento infantil, Daiana fundou a Ser Singular com a missão de transformar vidas através de um atendimento singular, acolhedor e baseado em evidências. Especialista em avaliação neuropsicológica e orientação de famílias.",
    especialidades: ["Psicologia Infantil", "ABA", "Denver", "Avaliação Neuropsicológica", "Orientação de Pais"],
    wa: "https://wa.me/554599771331?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20com%20a%20Daiana.",
  },
  {
    name: "Thainá Samara Rigo",
    badge: "Fonoaudióloga",
    featured: false,
    photo: "/Thaina.jpeg",
    photoPosition: "center 15%",
    desc: "Fonoaudióloga especializada em linguagem infantil, fala e motricidade orofacial. Utiliza abordagens baseadas em evidências como PROMPT e DTTC para crianças com dificuldades de comunicação, TEA e outros perfis de desenvolvimento.",
    especialidades: ["Linguagem Infantil", "PROMPT", "DTTC", "Motricidade Orofacial", "TEA"],
    wa: "https://wa.me/554599771331?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20com%20a%20Tha%C3%ADn%C3%A1.",
  },
  {
    name: "Vanessa Marciano",
    badge: "Psicopedagoga",
    featured: false,
    photo: "/Vanessa.jpeg",
    photoPosition: "center 10%",
    desc: "Psicopedagoga especializada em avaliação e intervenção das dificuldades de aprendizagem. Atua com dislexia, discalculia, TDAH e outros perfis cognitivos, traçando planos individualizados e orientando pais e educadores.",
    especialidades: ["Avaliação Psicopedagógica", "Dislexia", "TDAH", "Funções Executivas", "Alfabetização"],
    wa: "https://wa.me/554599771331?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20com%20a%20Vanessa.",
  },
  {
    name: "Romelli Savane Ferreira Leite",
    badge: "Terapeuta Ocupacional",
    featured: false,
    photo: "/Romelli.jpeg",
    photoPosition: "center 10%",
    desc: "Terapeuta Ocupacional especializada em integração sensorial, praxia e autonomia infantil. Trabalha com crianças que apresentam hipersensibilidade, dificuldades motoras e desafios de participação social e nas atividades do dia a dia.",
    especialidades: ["Integração Sensorial", "Praxia", "Autonomia", "Participação Social"],
    wa: "https://wa.me/554599771331?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20com%20a%20Romelli.",
  },
];

export default function ProfissionaisPage() {
  return (
    <>
      {/* Page Hero */}
      <div
        className="pt-[70px] py-16 px-8 text-center"
        style={{ background: "linear-gradient(160deg, #0f2440 0%, #143a62 100%)" }}
      >
        <h1 className="text-3xl lg:text-4xl text-white font-bold mb-3">
          Nossa Equipe
        </h1>
        <p className="text-white/80 text-base max-w-[480px] mx-auto">
          Profissionais especializadas e apaixonadas pelo desenvolvimento infantil.
        </p>
      </div>

      <section className="py-16 px-8 bg-[#f8f9fb]">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {profissionais.map((prof) => (
            <div
              key={prof.name}
              className={`bg-white rounded-[24px] overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_48px_rgba(20,58,98,0.14)] ${
                prof.featured
                  ? "border-2 border-[#1f8c7b]"
                  : "border border-[#e2e8f0]"
              }`}
              style={{ boxShadow: "0 4px 16px rgba(20,58,98,0.06)" }}
            >
              {/* Photo */}
              <div className="w-full h-[300px] relative overflow-hidden">
                <Image
                  src={prof.photo}
                  alt={prof.name}
                  fill
                  className="object-cover"
                  style={{ objectPosition: prof.photoPosition }}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="p-6">
                <span
                  className={`inline-block px-3 py-0.5 rounded-full text-[0.75rem] font-semibold uppercase tracking-wider mb-3 ${
                    prof.featured
                      ? "bg-[#143a62] text-white"
                      : "bg-[#e8f5f3] text-[#1f8c7b]"
                  }`}
                >
                  {prof.badge}
                </span>
                <h3 className="text-[1.2rem] text-[#143a62] font-bold mb-2">{prof.name}</h3>
                <p className="text-[0.87rem] text-[#5a6a7e] leading-relaxed mb-4">{prof.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {prof.especialidades.map((esp) => (
                    <span
                      key={esp}
                      className="text-[0.72rem] px-2 py-0.5 rounded-full bg-[#f8f9fb] text-[#5a6a7e] border border-[#e2e8f0]"
                    >
                      {esp}
                    </span>
                  ))}
                </div>
                <a
                  href={prof.wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#1f8c7b] no-underline text-[0.85rem] font-semibold transition-all duration-200 hover:gap-3"
                >
                  Agendar com {prof.name.split(" ")[0]} →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="max-w-[1100px] mx-auto mt-12 text-center">
          <p className="text-[#5a6a7e] mb-4">Não sabe com quem agendar? A nossa equipe te orienta.</p>
          <Link
            href="/contato"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-[14px] font-semibold text-white no-underline"
            style={{ background: "linear-gradient(135deg, #143a62, #1f8c7b)", boxShadow: "0 8px 24px rgba(20,58,98,0.2)" }}
          >
            Entrar em contato
          </Link>
        </div>
      </section>
    </>
  );
}
