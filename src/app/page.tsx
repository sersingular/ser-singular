import Link from "next/link";
import { AnimateIn, Stagger, StaggerItem } from "@/components/AnimateIn";

const problems = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-[#1f8c7b] fill-none stroke-[1.8] [stroke-linecap:round] [stroke-linejoin:round]">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "Dificuldades na Fala",
    desc: "Atrasos na linguagem, gagueira, pronúncia e comunicação — nossa fonoaudióloga atua com métodos baseados em evidências como PROMPT e DTTC.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-[#1f8c7b] fill-none stroke-[1.8] [stroke-linecap:round] [stroke-linejoin:round]">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: "Comportamento e Emoções",
    desc: "Crises, birras intensas, dificuldade de regulação emocional — a psicologia infantil oferece suporte especializado para a criança e orientação para os pais.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-[#1f8c7b] fill-none stroke-[1.8] [stroke-linecap:round] [stroke-linejoin:round]">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    title: "Aprendizagem e Escola",
    desc: "Dificuldades de leitura, escrita, atenção e funções executivas — a psicopedagogia identifica o perfil cognitivo e traça um plano individualizado.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-[#1f8c7b] fill-none stroke-[1.8] [stroke-linecap:round] [stroke-linejoin:round]">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
    title: "Sensorialidade e Autonomia",
    desc: "Hipersensibilidade, dificuldades motoras, baixa participação social — a Terapia Ocupacional trabalha integração sensorial e independência na rotina.",
  },
];

const especialidades = [
  { emoji: "🧠", title: "Psicologia", desc: "ABA, Denver, psicoterapia infantil, avaliação neuropsicológica e treino de habilidades sociais." },
  { emoji: "📖", title: "Psicopedagogia", desc: "Avaliação psicopedagógica, perfil cognitivo, alfabetização e funções executivas." },
  { emoji: "🗣️", title: "Fonoaudiologia", desc: "Linguagem, fala, PROMPT, DTTC e motricidade orofacial." },
  { emoji: "👶", title: "Terapia Ocupacional", desc: "Integração sensorial, praxia, autonomia e participação social." },
];

const beneficios = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-[22px] h-[22px] stroke-[#1f8c7b] fill-none stroke-[1.8] [stroke-linecap:round] [stroke-linejoin:round]">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Equipe Multidisciplinar",
    desc: "Psicóloga, fonoaudióloga, psicopedagoga e terapeuta ocupacional atuando de forma integrada.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-[22px] h-[22px] stroke-[#1f8c7b] fill-none stroke-[1.8] [stroke-linecap:round] [stroke-linejoin:round]">
        <polyline points="9 11 12 14 22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
    title: "Baseado em Evidências",
    desc: "Utilizamos apenas métodos com comprovação científica: ABA, PROMPT, Denver, integração sensorial.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-[22px] h-[22px] stroke-[#1f8c7b] fill-none stroke-[1.8] [stroke-linecap:round] [stroke-linejoin:round]">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
    title: "13 Anos de Experiência",
    desc: "Fundada por Daiana, com mais de uma década dedicada ao desenvolvimento infantil.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-[22px] h-[22px] stroke-[#1f8c7b] fill-none stroke-[1.8] [stroke-linecap:round] [stroke-linejoin:round]">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: "Orientação de Pais",
    desc: "Trabalhamos junto com a família, porque o desenvolvimento acontece em casa, na escola e na clínica.",
  },
];

const depoimentos = [
  {
    initial: "M",
    author: "Mãe da Mariana, 5 anos",
    specialty: "Fonoaudiologia",
    quote:
      "Em poucos meses de acompanhamento, minha filha passou a falar de forma muito mais clara. A Thainá é incrível, muito dedicada e paciente. A família toda notou a diferença.",
  },
  {
    initial: "A",
    author: "Mãe do Arthur, 7 anos",
    specialty: "Psicologia · ABA",
    quote:
      "Meu filho tem TEA e a abordagem da clínica foi transformadora. A orientação de pais me ajudou a entender como posso apoiá-lo em casa. Finalmente me sinto segura.",
  },
  {
    initial: "C",
    author: "Mãe do Caio, 9 anos",
    specialty: "Psicopedagogia",
    quote:
      "A Daiana identificou em uma avaliação o que ninguém tinha visto antes. Meu filho tem dislexia e hoje está se alfabetizando com muito mais confiança e alegria.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section
        className="min-h-screen flex items-center pt-[70px] relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #143a62 0%, #1a4d7c 40%, #1a5a6e 100%)",
        }}
      >
        {/* dot pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="max-w-[1200px] mx-auto px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Left */}
          <div>
            <AnimateIn delay={0}>
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[0.78rem] font-medium tracking-widest uppercase text-[#7dd8cc] mb-6"
              style={{
                background: "rgba(31,140,123,0.25)",
                border: "1px solid rgba(31,140,123,0.4)",
              }}
            >
              <span className="text-[#1f8c7b] text-[0.6rem]">●</span>
              Medianeira · PR
            </div>
            </AnimateIn>
            <AnimateIn delay={0.1}>
            <h1 className="text-4xl lg:text-5xl text-white leading-tight mb-5 font-bold tracking-tight">
              Seu filho merece evoluir com quem{" "}
              <em className="not-italic text-[#7dd8cc]">
                realmente entende dele
              </em>
            </h1>
            </AnimateIn>
            <AnimateIn delay={0.2}>
            <p className="text-white/75 text-lg leading-relaxed mb-8 font-light">
              Dificuldades na fala, comportamento, aprendizagem ou desenvolvimento? Na Ser Singular, cada criança é única — e o tratamento também é.
            </p>
            </AnimateIn>
            <AnimateIn delay={0.3}>
            <div className="flex gap-4 flex-wrap">
              <a
                href="https://wa.me/554599771331?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20para%20meu%20filho."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-[14px] font-semibold text-[0.95rem] text-white no-underline transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: "rgba(37,211,102,0.18)",
                  border: "1.5px solid rgba(37,211,102,0.55)",
                  backdropFilter: "blur(16px)",
                  boxShadow: "0 4px 24px rgba(37,211,102,0.2), inset 0 1px 0 rgba(255,255,255,0.15)",
                }}
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.553 4.112 1.523 5.842L.057 23.886a.5.5 0 0 0 .622.607l6.148-1.61A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.697-.504-5.248-1.387l-.351-.206-3.652.957.924-3.565-.225-.36A9.975 9.975 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
                Falar no WhatsApp
              </a>
              <Link
                href="/contato"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-[14px] font-medium text-[0.95rem] text-white no-underline transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: "rgba(255,255,255,0.10)",
                  border: "1.5px solid rgba(255,255,255,0.30)",
                  backdropFilter: "blur(16px)",
                  boxShadow: "0 4px 24px rgba(255,255,255,0.06), inset 0 1px 0 rgba(255,255,255,0.18)",
                }}
              >
                Agendar Avaliação
              </Link>
            </div>

            </AnimateIn>
            {/* Stats */}
            <AnimateIn delay={0.4}>
            <div className="flex gap-8 mt-10 pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}>
              <div>
                <div className="text-3xl font-bold text-white leading-none">13+</div>
                <div className="text-[0.78rem] text-white/60 mt-1">Anos de experiência</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white leading-none">300+</div>
                <div className="text-[0.78rem] text-white/60 mt-1">Famílias atendidas</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white leading-none">4</div>
                <div className="text-[0.78rem] text-white/60 mt-1">Especialidades</div>
              </div>
            </div>
            </AnimateIn>
          </div>

          {/* Right — placeholder image */}
          <AnimateIn delay={0.2} direction="right" className="flex justify-center">
            <div className="relative">
              <div
                className="w-[340px] h-[420px] lg:w-[380px] lg:h-[480px] rounded-[24px] overflow-hidden flex items-center justify-center"
                style={{
                  border: "3px solid rgba(255,255,255,0.15)",
                  boxShadow: "0 32px 64px rgba(0,0,0,0.35)",
                  background: "linear-gradient(135deg, rgba(31,140,123,0.3), rgba(20,58,98,0.5))",
                }}
              >
                <div className="text-center text-white/60 p-8">
                  <div className="text-6xl mb-4">👨‍👩‍👧</div>
                  <p className="text-sm">Adicione a foto da clínica aqui</p>
                  <p className="text-xs mt-1 opacity-60">Substitua pelo componente {'<Image>'} do Next.js</p>
                </div>
              </div>
              {/* Card */}
              <div
                className="absolute -bottom-5 -left-7 flex items-center gap-3 px-4 py-3 rounded-[18px] min-w-[210px]"
                style={{
                  background: "rgba(255,255,255,0.85)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid rgba(255,255,255,0.6)",
                  boxShadow: "0 8px 32px rgba(20,58,98,0.18), inset 0 1px 0 rgba(255,255,255,0.9)",
                }}
              >
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-lg"
                  style={{ background: "linear-gradient(135deg, #143a62, #1f8c7b)" }}
                >
                  D
                </div>
                <div>
                  <strong className="block text-[0.88rem] text-[#143a62] font-bold">Daiana</strong>
                  <span className="text-[0.72rem] text-[#5a6a7e]">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#25D366] mr-1" style={{ boxShadow: "0 0 0 2px rgba(37,211,102,0.2)" }} />
                    Disponível agora
                  </span>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* COMO PODEMOS AJUDAR */}
      <section className="py-20 px-8 bg-[#f8f9fb]">
        <div className="max-w-[1200px] mx-auto">
          <AnimateIn className="text-center mb-14">
            <span className="inline-block bg-[#e8f5f3] text-[#1f8c7b] px-3.5 py-1 rounded-full text-[0.78rem] font-semibold uppercase tracking-widest mb-4">
              Como podemos ajudar
            </span>
            <h2 className="text-3xl lg:text-4xl text-[#143a62] leading-tight mb-4">
              Reconhece alguma dessas situações?
            </h2>
            <p className="text-[#5a6a7e] text-lg max-w-xl mx-auto leading-relaxed">
              Cada dificuldade tem um caminho. Nossa equipe está pronta para orientar você.
            </p>
          </AnimateIn>
          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {problems.map((card) => (
              <StaggerItem
                key={card.title}
                className="bg-white rounded-[20px] p-8 border border-[#e2e8f0] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_48px_rgba(20,58,98,0.12)] hover:border-transparent relative overflow-hidden group"
              >
                <div className="absolute bottom-0 left-0 right-0 h-[3px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" style={{ background: "linear-gradient(90deg, #143a62, #1f8c7b)" }} />
                <div className="w-[52px] h-[52px] rounded-[14px] bg-[#e8f5f3] flex items-center justify-center mb-5" style={{ border: "1.5px solid rgba(31,140,123,0.12)" }}>
                  {card.icon}
                </div>
                <h3 className="text-[1.1rem] text-[#143a62] font-bold mb-2">{card.title}</h3>
                <p className="text-[0.9rem] text-[#5a6a7e] leading-relaxed">{card.desc}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ESPECIALIDADES STRIP */}
      <section className="py-16 px-8 bg-[#143a62]">
        <div className="max-w-[1200px] mx-auto">
          <AnimateIn className="text-center mb-10">
            <span className="inline-block text-[#7dd8cc] text-[0.78rem] font-semibold uppercase tracking-widest mb-3">
              Nossas especialidades
            </span>
            <h2 className="text-2xl lg:text-3xl text-white font-bold">
              Atendimento especializado e integrado
            </h2>
          </AnimateIn>
          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {especialidades.map((esp) => (
              <StaggerItem key={esp.title}>
              <Link
                href="/especialidades"
                className="no-underline rounded-[16px] p-6 transition-all duration-300 cursor-pointer hover:border-[#1f8c7b] block"
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                <div className="text-[1.8rem] mb-3">{esp.emoji}</div>
                <h3 className="text-white font-bold text-base mb-1.5">{esp.title}</h3>
                <p className="text-white/60 text-[0.82rem] leading-relaxed">{esp.desc}</p>
              </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <AnimateIn direction="left">
            <span className="inline-block bg-[#e8f5f3] text-[#1f8c7b] px-3.5 py-1 rounded-full text-[0.78rem] font-semibold uppercase tracking-widest mb-4">
              Por que escolher a Ser Singular
            </span>
            <h2 className="text-3xl lg:text-4xl text-[#143a62] leading-tight mb-10">
              Uma clínica pensada para resultados reais
            </h2>
            <ul className="space-y-5">
              {beneficios.map((b) => (
                <li
                  key={b.title}
                  className="flex gap-4 items-start p-5 rounded-[16px] transition-colors duration-200 hover:bg-[#f8f9fb]"
                >
                  <div className="w-11 h-11 rounded-[12px] bg-[#e8f5f3] flex items-center justify-center flex-shrink-0" style={{ border: "1.5px solid rgba(31,140,123,0.15)" }}>
                    {b.icon}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#143a62] mb-1">{b.title}</h4>
                    <p className="text-[0.87rem] text-[#5a6a7e] leading-relaxed">{b.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </AnimateIn>
          <AnimateIn direction="right">
          <div className="relative">
            <div className="rounded-[24px] overflow-hidden shadow-[0_24px_56px_rgba(20,58,98,0.15)] h-[420px] flex items-center justify-center" style={{ background: "linear-gradient(135deg, #e8f5f3, #eef2f7)" }}>
              <div className="text-center p-8">
                <div className="text-6xl mb-4">🏥</div>
                <p className="text-[#5a6a7e] text-sm">Foto da clínica</p>
              </div>
            </div>
            <div
              className="absolute -top-5 -right-5 w-[100px] h-[100px] rounded-full flex flex-col items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #c9a84c, #e8c06a)",
                boxShadow: "0 8px 24px rgba(201,168,76,0.35)",
              }}
            >
              <strong className="text-2xl text-white font-bold leading-none">13</strong>
              <span className="text-[0.6rem] text-white/85 text-center uppercase tracking-wide leading-tight mt-0.5">
                anos de<br />exp.
              </span>
            </div>
          </div>
          </AnimateIn>
        </div>
      </section>

      {/* SEÇÃO EMOCIONAL */}
      <section
        className="py-20 px-8"
        style={{ background: "linear-gradient(135deg, #e8f5f3 0%, #f0f7ff 100%)" }}
      >
        <div className="max-w-[760px] mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl text-[#143a62] leading-snug mb-6">
            Você não precisa carregar sozinho essa preocupação com o seu filho
          </h2>
          <p className="text-[#5a6a7e] text-lg leading-relaxed mb-5">
            Sabemos que ver seu filho enfrentar dificuldades é angustiante. Cada criança tem um ritmo, e a maioria das dificuldades tem solução com o suporte certo.
          </p>
          <p className="text-[#5a6a7e] text-lg leading-relaxed mb-8">
            Na Ser Singular, você encontra uma equipe que ouve, orienta e trabalha com você — não apenas com a criança.
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-[14px] font-semibold text-white no-underline transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg, #143a62, #1f8c7b)",
              boxShadow: "0 8px 24px rgba(20,58,98,0.25)",
            }}
          >
            Agendar uma avaliação
          </Link>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="py-20 px-8 bg-[#f8f9fb]">
        <div className="max-w-[1200px] mx-auto">
          <AnimateIn className="text-center mb-14">
            <span className="inline-block bg-[#e8f5f3] text-[#1f8c7b] px-3.5 py-1 rounded-full text-[0.78rem] font-semibold uppercase tracking-widest mb-4">
              Depoimentos
            </span>
            <h2 className="text-3xl lg:text-4xl text-[#143a62] leading-tight">
              Famílias que transformamos juntos
            </h2>
          </AnimateIn>
          <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {depoimentos.map((dep) => (
              <StaggerItem key={dep.author} className="bg-white rounded-[20px] p-8 border border-[#e2e8f0]">
                <div className="text-5xl text-[#1f8c7b] leading-none mb-4 font-bold">"</div>
                <div className="flex gap-1 text-amber-400 text-sm mb-3">{"★★★★★"}</div>
                <p className="text-[0.9rem] text-[#5a6a7e] leading-relaxed mb-5 italic">
                  {dep.quote}
                </p>
                <div className="flex items-center gap-2.5">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                    style={{ background: "linear-gradient(135deg, #143a62, #1f8c7b)" }}
                  >
                    {dep.initial}
                  </div>
                  <div>
                    <strong className="block text-[0.87rem] text-[#143a62]">{dep.author}</strong>
                    <span className="text-[0.78rem] text-[#5a6a7e]">{dep.specialty}</span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CTA FINAL */}
      <section
        className="py-24 px-8 text-center relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #143a62 0%, #1a4d7c 50%, #1a5a6e 100%)" }}
      >
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(31,140,123,0.15) 0%, transparent 70%)" }} />
        <div className="relative z-10 max-w-[640px] mx-auto">
          <h2 className="text-3xl lg:text-5xl text-white font-bold leading-tight mb-4">
            Pronto para dar o primeiro passo?
          </h2>
          <p className="text-white/75 text-lg leading-relaxed mb-10">
            Agende uma avaliação e descubra como podemos ajudar seu filho a desenvolver todo o seu potencial.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://wa.me/554599771331?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20na%20Ser%20Singular."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-[14px] font-semibold text-white no-underline transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: "rgba(37,211,102,0.18)",
                border: "1.5px solid rgba(37,211,102,0.55)",
                backdropFilter: "blur(16px)",
                boxShadow: "0 4px 24px rgba(37,211,102,0.2)",
              }}
            >
              Falar no WhatsApp
            </a>
            <Link
              href="/contato"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-[14px] font-medium text-white no-underline transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: "rgba(255,255,255,0.10)",
                border: "1.5px solid rgba(255,255,255,0.30)",
                backdropFilter: "blur(16px)",
              }}
            >
              Formulário de Contato
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
