import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Especialidades — Ser Singular",
  description: "Conheça as especialidades da Ser Singular: Psicologia, Fonoaudiologia, Terapia Ocupacional e Psicopedagogia para desenvolvimento infantil.",
};

const especialidades = [
  {
    id: "psicologia",
    emoji: "🧠",
    tag: "Psicologia",
    title: "Psicologia Infantil",
    desc1: "A Psicologia na Ser Singular atua com crianças que apresentam dificuldades emocionais, comportamentais e de desenvolvimento. Nosso trabalho é baseado em evidências científicas, com abordagens como ABA (Análise do Comportamento Aplicada) e o Modelo Denver.",
    desc2: "Além da intervenção direta com a criança, oferecemos orientação estruturada aos pais e familiares, pois entendemos que o desenvolvimento acontece em todos os ambientes da criança.",
    problems: [
      "Crises e birras intensas",
      "Dificuldade de regulação emocional",
      "Diagnóstico ou suspeita de TEA",
      "Ansiedade e fobias",
      "Comportamentos desafiadores",
      "Dificuldades de socialização",
    ],
    benefits: [
      "Psicoterapia infantil baseada em evidências",
      "Aplicação do método ABA e Denver",
      "Avaliação neuropsicológica",
      "Treino de habilidades sociais",
      "Orientação e suporte aos pais",
      "Relatórios para escola e outros profissionais",
    ],
  },
  {
    id: "fonoaudiologia",
    emoji: "🗣️",
    tag: "Fonoaudiologia",
    title: "Fonoaudiologia",
    desc1: "A Fonoaudiologia na Ser Singular é especializada em linguagem infantil, fala e motricidade orofacial. Utilizamos abordagens baseadas em evidências como PROMPT (Prompts for Restructuring Oral Muscular Phonetic Targets) e DTTC (Dynamic Temporal and Tactile Cueing).",
    desc2: "Cada criança recebe uma avaliação individualizada para identificar seu perfil de comunicação e desenvolver um plano terapêutico personalizado, com participação ativa da família no processo.",
    problems: [
      "Atraso na fala ou linguagem",
      "Gagueira",
      "Pronúncia difícil de entender",
      "Dificuldades de comunicação no TEA",
      "Problemas de mastigação ou deglutição",
      "Respiração bucal",
    ],
    benefits: [
      "Avaliação completa da linguagem e fala",
      "PROMPT e DTTC para transtornos motores de fala",
      "Estimulação da linguagem oral e escrita",
      "Orientação para pais e cuidadores",
      "Integração com a equipe multidisciplinar",
    ],
  },
  {
    id: "terapia-ocupacional",
    emoji: "👶",
    tag: "Terapia Ocupacional",
    title: "Terapia Ocupacional",
    desc1: "A Terapia Ocupacional na Ser Singular trabalha com a integração sensorial, desenvolvimento motor e autonomia da criança. Atuamos com crianças que apresentam hipersensibilidade sensorial, dificuldades motoras e desafios na rotina diária.",
    desc2: "Nosso objetivo é que a criança participe plenamente das atividades do dia a dia: brincar, se alimentar, se vestir e aprender com confiança e independência.",
    problems: [
      "Hipersensibilidade ao toque, barulho ou textura",
      "Dificuldades motoras finas ou grossas",
      "Problemas de coordenação",
      "Dificuldade para se vestir ou alimentar",
      "Baixa participação social",
      "Perfil sensorial diferente",
    ],
    benefits: [
      "Avaliação do perfil sensorial",
      "Intervenção de integração sensorial",
      "Desenvolvimento de habilidades motoras",
      "Treino de autonomia e AVDs",
      "Adaptações e estratégias para a escola",
      "Orientação familiar",
    ],
  },
  {
    id: "psicopedagogia",
    emoji: "📖",
    tag: "Psicopedagogia",
    title: "Psicopedagogia",
    desc1: "A Psicopedagogia na Ser Singular investiga as dificuldades de aprendizagem da criança, identificando seu perfil cognitivo e traçando um plano de intervenção individualizado. Trabalhamos com dislexia, discalculia, TDAH e outros perfis de aprendizagem.",
    desc2: "A avaliação psicopedagógica é um processo detalhado que considera aspectos cognitivos, emocionais e pedagógicos, gerando um mapa completo para orientar pais, educadores e outros profissionais.",
    problems: [
      "Dificuldades de leitura e escrita",
      "Dislexia e disortografia",
      "Dificuldades com matemática (discalculia)",
      "Falta de atenção e concentração",
      "Baixo rendimento escolar",
      "Suspeita de TDAH",
    ],
    benefits: [
      "Avaliação psicopedagógica completa",
      "Identificação do perfil cognitivo",
      "Plano de intervenção individualizado",
      "Apoio à alfabetização",
      "Desenvolvimento das funções executivas",
      "Relatório para escola e equipe",
    ],
  },
];

export default function EspecialidadesPage() {
  return (
    <>
      <div
        className="pt-[70px] py-16 px-8 text-center"
        style={{ background: "linear-gradient(160deg, #0f2440 0%, #143a62 100%)" }}
      >
        <h1 className="text-3xl lg:text-4xl text-white font-bold mb-3">Especialidades</h1>
        <p className="text-white/80 text-base max-w-[480px] mx-auto">
          Atendimento multidisciplinar e integrado para o desenvolvimento do seu filho.
        </p>
      </div>

      <section className="py-12 px-8 bg-[#f8f9fb]">
        <div className="max-w-[1100px] mx-auto space-y-6">
          {especialidades.map((esp) => (
            <div key={esp.id} id={esp.id} className="bg-white rounded-[24px] p-8 lg:p-10 border border-[#e2e8f0]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                {/* Left */}
                <div>
                  <span className="inline-block bg-[#e8f5f3] text-[#1f8c7b] px-3 py-0.5 rounded-full text-[0.78rem] font-semibold uppercase tracking-widest mb-3">
                    {esp.emoji} {esp.tag}
                  </span>
                  <h2 className="text-2xl text-[#143a62] font-bold mb-4">{esp.title}</h2>
                  <p className="text-[0.92rem] text-[#5a6a7e] leading-relaxed mb-4">{esp.desc1}</p>
                  <p className="text-[0.92rem] text-[#5a6a7e] leading-relaxed">{esp.desc2}</p>
                  <Link
                    href="/contato"
                    className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-[12px] font-semibold text-white no-underline text-sm"
                    style={{ background: "linear-gradient(135deg, #143a62, #1f8c7b)" }}
                  >
                    Agendar avaliação
                  </Link>
                </div>
                {/* Right */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-[0.85rem] font-semibold uppercase tracking-widest text-[#143a62] mb-3">
                      Indicações
                    </h4>
                    <ul className="space-y-2">
                      {esp.problems.map((p) => (
                        <li key={p} className="flex gap-2 items-start text-[0.88rem] text-[#5a6a7e] leading-snug">
                          <span className="text-[#1f8c7b] font-bold flex-shrink-0 mt-0.5">✓</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[0.85rem] font-semibold uppercase tracking-widest text-[#143a62] mb-3">
                      O que oferecemos
                    </h4>
                    <ul className="space-y-2">
                      {esp.benefits.map((b) => (
                        <li key={b} className="flex gap-2 items-start text-[0.88rem] text-[#5a6a7e] leading-snug">
                          <span className="text-[#1f8c7b] font-bold flex-shrink-0 mt-0.5">✓</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
