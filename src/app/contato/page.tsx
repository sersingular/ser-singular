import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contato — Ser Singular",
  description: "Entre em contato com a Ser Singular. Agende uma avaliação para seu filho em Medianeira, Paraná.",
};

export default function ContatoPage() {
  return (
    <>
      <div
        className="pt-[70px] py-16 px-8 text-center"
        style={{ background: "linear-gradient(160deg, #0f2440 0%, #143a62 100%)" }}
      >
        <h1 className="text-3xl lg:text-4xl text-white font-bold mb-3">Entre em Contato</h1>
        <p className="text-white/80 text-base max-w-[480px] mx-auto">
          Agende uma avaliação ou tire suas dúvidas. Respondemos em até 24h.
        </p>
      </div>

      <section className="py-16 px-8 bg-[#f8f9fb]">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Info */}
          <div>
            <h2 className="text-2xl text-[#143a62] font-bold mb-6">Informações</h2>
            <div className="space-y-5">
              {[
                {
                  icon: "📍",
                  title: "Endereço",
                  desc: "Av. José Callegari, 1820, Centro, Medianeira, PR",
                },
                {
                  icon: "📱",
                  title: "WhatsApp",
                  desc: "(45) 99977-1331",
                  href: "https://wa.me/554599771331",
                },
                {
                  icon: "🕐",
                  title: "Horário de atendimento",
                  desc: "Segunda a Sexta · 8h às 18h",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 items-start p-5 bg-white rounded-[16px] border border-[#e2e8f0]">
                  <div className="text-2xl flex-shrink-0">{item.icon}</div>
                  <div>
                    <h4 className="font-semibold text-[#143a62] text-sm mb-0.5">{item.title}</h4>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-[#1f8c7b] text-sm no-underline hover:underline">
                        {item.desc}
                      </a>
                    ) : (
                      <p className="text-[#5a6a7e] text-sm">{item.desc}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div
              className="mt-8 p-6 rounded-[20px] text-white"
              style={{ background: "linear-gradient(135deg, #143a62, #1f8c7b)" }}
            >
              <h3 className="font-bold text-lg mb-2">Prefere pelo WhatsApp?</h3>
              <p className="text-white/75 text-sm mb-4">
                Atendemos pelo WhatsApp também. Clique e inicie a conversa agora.
              </p>
              <a
                href="https://wa.me/554599771331?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20na%20Ser%20Singular."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[12px] font-semibold text-sm text-[#143a62] bg-white no-underline hover:bg-[#f8f9fb] transition-colors"
              >
                Abrir WhatsApp
              </a>
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 className="text-2xl text-[#143a62] font-bold mb-6">Enviar mensagem</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
