import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { cities, specialties } from "@/data/localSeo";
import AlertForm from "@/components/AlertForm";

interface Props {
  params: Promise<{ cidade: string; especialidade: string }>;
}

export async function generateStaticParams() {
  const params: { cidade: string; especialidade: string }[] = [];
  for (const city of cities) {
    for (const specialty of specialties) {
      params.push({ cidade: city.slug, especialidade: specialty.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { cidade, especialidade } = await params;
  const city = cities.find((c) => c.slug === cidade);
  const specialty = specialties.find((s) => s.slug === especialidade);
  if (!city || !specialty) return {};

  return {
    title: `${specialty.name} em ${city.name} | Clínica Ser Singular Medianeira`,
    description: `Atendemos crianças de ${city.name} com ${specialty.name} especializado. A Clínica Ser Singular fica em Medianeira, a apenas ${city.distance} de ${city.name}. Agende pelo WhatsApp.`,
  };
}

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default async function LocalSeoPage({ params }: Props) {
  const { cidade, especialidade } = await params;
  const city = cities.find((c) => c.slug === cidade);
  const specialty = specialties.find((s) => s.slug === especialidade);
  if (!city || !specialty) notFound();

  const waMessage = encodeURIComponent(
    `Olá! Vim pelo site e gostaria de agendar uma avaliação de ${specialty.name} para uma criança de ${city.name}.`
  );
  const waUrl = `https://wa.me/5545999771331?text=${waMessage}`;

  const faqs = [
    {
      q: `A Clínica Ser Singular atende crianças de ${city.name}?`,
      a: `Sim! Atendemos regularmente famílias de ${city.name} e de toda a região oeste do Paraná. Nossa clínica fica em Medianeira, a apenas ${city.distance} de ${city.name}, ${city.travelTime} de trajeto pela rodovia.`,
    },
    {
      q: `Vale a pena vir de ${city.name} até Medianeira para ${specialty.name}?`,
      a: `A distância de ${city.distance} é compensada pela qualidade do atendimento especializado. Em ${city.name} e na maioria das cidades da região, a oferta de ${specialty.name} especializado para crianças ainda é limitada. Na Ser Singular, sua família encontra profissionais experientes com metodologias baseadas em evidências científicas.`,
    },
    {
      q: `Como funciona o primeiro atendimento vindo de ${city.name}?`,
      a: `O processo começa com uma avaliação inicial, onde o profissional conhece a criança, entende o histórico e define o plano terapêutico. Para famílias de ${city.name}, recomendamos agendar as sessões com frequência regular, geralmente semanal, para garantir a continuidade e melhores resultados.`,
    },
    {
      q: `Qual o endereço da Clínica Ser Singular?`,
      a: `Nossa clínica fica na Av. José Callegari, 1820, Centro, Medianeira, PR. De ${city.name} são apenas ${city.distance}, ${city.travelTime} de trajeto. Use o botão do Google Maps na seção acima para ver a rota completa.`,
    },
  ];

  const otherCities = cities.filter((c) => c.slug !== city.slug);

  return (
    <>
      {/* Hero */}
      <div
        className="pt-[70px] py-16 px-8"
        style={{ background: "linear-gradient(160deg, #0f2440 0%, #143a62 100%)" }}
      >
        <div className="max-w-[800px] mx-auto text-center">
          <span className="inline-block text-[0.72rem] font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4 bg-[#1f8c7b]/20 text-[#7dd8cc]">
            Atendemos {city.name}
          </span>
          <h1 className="text-3xl lg:text-4xl text-white font-bold mb-4 leading-tight">
            {specialty.name} para crianças de {city.name}
          </h1>
          <p className="text-white/80 text-base max-w-[580px] mx-auto mb-8">
            A Clínica Ser Singular fica em Medianeira, a apenas {city.distance} de {city.name}. Atendimento especializado, com hora marcada e equipe experiente em desenvolvimento infantil.
          </p>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[14px] font-semibold text-sm text-white no-underline transition-opacity hover:opacity-90"
            style={{ background: "#25D366" }}
          >
            <WhatsAppIcon />
            Agendar pelo WhatsApp
          </a>
        </div>
      </div>

      {/* Como atendemos */}
      <section className="py-14 px-8 bg-white">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-2xl font-bold text-[#143a62] mb-4">
            Como atendemos famílias de {city.name}
          </h2>
          <p className="text-[#5a6a7e] text-base leading-relaxed mb-4">
            {specialty.intro}
          </p>
          <p className="text-[#5a6a7e] text-base leading-relaxed">
            {city.cityDescription} Muitas famílias de {city.name} já fazem parte da nossa rotina de atendimento, encontrando na Ser Singular o suporte especializado que buscavam para o desenvolvimento dos seus filhos.
          </p>
          <div className="mt-5 inline-flex items-center gap-2 text-sm text-[#1f8c7b] font-medium bg-[#e8f5f3] px-4 py-2 rounded-full">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 flex-shrink-0">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            {specialty.professional}
          </div>
        </div>
      </section>

      {/* Casos */}
      <section className="py-14 px-8 bg-[#f8f9fb]">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-2xl font-bold text-[#143a62] mb-2">
            Casos que mais atendemos vindos de {city.name}
          </h2>
          <p className="text-[#5a6a7e] text-sm mb-8">
            Sinais que levam famílias de {city.name} a buscar {specialty.name} especializado em Medianeira:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {specialty.cases.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 bg-white rounded-[14px] border border-[#e2e8f0]"
              >
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#e8f5f3] flex items-center justify-center mt-0.5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#1f8c7b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span className="text-[#3d4f63] text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Métodos */}
      <section className="py-14 px-8 bg-white">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-2xl font-bold text-[#143a62] mb-2">
            {specialty.name} em Medianeira: como funciona
          </h2>
          <p className="text-[#5a6a7e] text-sm mb-8">
            Abordagens e métodos utilizados no atendimento de crianças de {city.name}:
          </p>
          <div className="flex flex-wrap gap-2.5">
            {specialty.methods.map((method, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full text-sm font-medium bg-[#e8f5f3] text-[#1f8c7b] border border-[#c5e8e3]"
              >
                {method}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Sinais de alerta */}
      <section className="py-14 px-8 bg-[#f8f9fb]">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-2xl font-bold text-[#143a62] mb-2">
            Seu filho pode precisar de avaliação?
          </h2>
          <p className="text-[#5a6a7e] text-sm mb-8">
            Responda as perguntas abaixo. Se identificar um ou mais sinais, entre em contato, nossa equipe pode ajudar.
          </p>
          <AlertForm />
        </div>
      </section>

      {/* Como chegar */}
      <section className="py-14 px-8 bg-white">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-2xl font-bold text-[#143a62] mb-6">
            Como chegar de {city.name}
          </h2>
          <div className="grid grid-cols-2 gap-4 mb-6">
            {[
              { label: "Distância", value: city.distance },
              { label: "Tempo estimado", value: city.travelTime },
            ].map((item) => (
              <div
                key={item.label}
                className="p-5 bg-[#f8f9fb] rounded-[16px] border border-[#e2e8f0] text-center"
              >
                <p className="text-xs text-[#8a9ab0] uppercase tracking-wide mb-1">{item.label}</p>
                <p className="text-lg font-bold text-[#143a62]">{item.value}</p>
              </div>
            ))}
          </div>
          <div className="p-5 bg-[#f8f9fb] rounded-[16px] border border-[#e2e8f0]">
            <p className="text-sm font-semibold text-[#143a62] mb-1">
              Av. José Callegari, 1820, Centro, Medianeira, Paraná
            </p>
            <p className="text-[#5a6a7e] text-sm mb-4">
              Clique para abrir a rota no Google Maps a partir de {city.name}.
            </p>
            <a
              href={city.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[12px] font-semibold text-sm text-white no-underline transition-opacity hover:opacity-90"
              style={{ background: "#4285F4" }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              Ver rota no Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 px-8 bg-[#f8f9fb]">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-2xl font-bold text-[#143a62] mb-8">
            Perguntas frequentes, {specialty.name} para {city.name}
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-[16px] border border-[#e2e8f0]"
              >
                <h3 className="font-semibold text-[#143a62] mb-2">{faq.q}</h3>
                <p className="text-[#5a6a7e] text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 px-8 text-center"
        style={{ background: "linear-gradient(135deg, #143a62, #1f8c7b)" }}
      >
        <div className="max-w-[600px] mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">
            Agende {specialty.name} para sua família de {city.name}
          </h2>
          <p className="text-white/80 text-base mb-8">
            Clínica Ser Singular em Medianeira, a {city.distance} de {city.name}. Atendimento especializado com hora marcada.
          </p>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-[14px] font-semibold text-sm text-[#143a62] bg-white no-underline hover:bg-[#f8f9fb] transition-colors"
          >
            <span className="text-[#25D366]">
              <WhatsAppIcon />
            </span>
            Agendar pelo WhatsApp
          </a>
        </div>
      </section>

      {/* Outras cidades */}
      <section className="py-12 px-8 bg-[#f8f9fb]">
        <div className="max-w-[800px] mx-auto">
          <p className="text-xs text-[#8a9ab0] uppercase tracking-wide mb-4">
            Também atendemos
          </p>
          <div className="flex flex-wrap gap-2">
            {otherCities.map((c) => (
              <Link
                key={c.slug}
                href={`/${c.slug}/${specialty.slug}`}
                className="px-4 py-2 rounded-full text-sm text-[#143a62] bg-white border border-[#e2e8f0] no-underline hover:border-[#1f8c7b] hover:text-[#1f8c7b] transition-colors"
              >
                {specialty.name} em {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
