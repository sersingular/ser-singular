import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade — Ser Singular",
  description:
    "Saiba como a Ser Singular coleta, usa e protege seus dados pessoais, em conformidade com a LGPD.",
  robots: { index: false },
};

const sections = [
  {
    title: "1. Quem somos",
    content: (
      <>
        <p>
          A <strong>Ser Singular — Centro de Desenvolvimento e Treinamento</strong> é
          responsável pelo tratamento dos dados pessoais coletados neste site
          (sersingularmed.com.br).
        </p>
        <p className="mt-3">
          <strong>Endereço:</strong> Av. José Callegari, 1820, Centro, Medianeira – PR, CEP 85884-000
          <br />
          <strong>Contato:</strong>{" "}
          <a
            href="https://wa.me/554599771331"
            className="text-[#1f8c7b] hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            (45) 99977-1331
          </a>
        </p>
      </>
    ),
  },
  {
    title: "2. Dados coletados e finalidades",
    content: (
      <div className="space-y-4">
        <div>
          <p className="font-semibold text-[#143a62] mb-1">Formulário de contato</p>
          <p>
            Nome, e-mail e mensagem — usados exclusivamente para responder à sua solicitação.
            Base legal: execução de contrato ou providências pré-contratuais (art. 7º, V, LGPD).
          </p>
        </div>
        <div>
          <p className="font-semibold text-[#143a62] mb-1">Cookies de análise (mediante consentimento)</p>
          <p>
            Quando você aceita cookies, ativamos ferramentas de análise de comportamento
            de navegação para melhorar nosso site. Nenhum dado de saúde é inferido ou
            compartilhado. Base legal: consentimento (art. 7º, I, LGPD).
          </p>
        </div>
        <div>
          <p className="font-semibold text-[#143a62] mb-1">Dados técnicos (automáticos)</p>
          <p>
            Endereço IP, tipo de navegador e páginas visitadas são registrados pelos
            servidores da Vercel (infraestrutura de hospedagem) para fins de segurança
            e estabilidade. Base legal: legítimo interesse (art. 7º, IX, LGPD).
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "3. Cookies e ferramentas de rastreamento",
    content: (
      <div className="space-y-4">
        <p>
          Utilizamos as seguintes ferramentas, <strong>apenas após seu consentimento</strong>:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#f0f7ff]">
                <th className="text-left p-3 border border-[#dde5f0] text-[#143a62] font-semibold">Ferramenta</th>
                <th className="text-left p-3 border border-[#dde5f0] text-[#143a62] font-semibold">Operador</th>
                <th className="text-left p-3 border border-[#dde5f0] text-[#143a62] font-semibold">Finalidade</th>
                <th className="text-left p-3 border border-[#dde5f0] text-[#143a62] font-semibold">Política</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-[#dde5f0]">Facebook Pixel</td>
                <td className="p-3 border border-[#dde5f0]">Meta Platforms, Inc.</td>
                <td className="p-3 border border-[#dde5f0]">Mensurar eficácia de anúncios</td>
                <td className="p-3 border border-[#dde5f0]">
                  <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer" className="text-[#1f8c7b] hover:underline">
                    Ver política
                  </a>
                </td>
              </tr>
              <tr className="bg-[#fafbfc]">
                <td className="p-3 border border-[#dde5f0]">Microsoft Clarity</td>
                <td className="p-3 border border-[#dde5f0]">Microsoft Corporation</td>
                <td className="p-3 border border-[#dde5f0]">Análise de usabilidade e mapas de calor</td>
                <td className="p-3 border border-[#dde5f0]">
                  <a href="https://privacy.microsoft.com/pt-br/privacystatement" target="_blank" rel="noopener noreferrer" className="text-[#1f8c7b] hover:underline">
                    Ver política
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Você pode revogar seu consentimento a qualquer momento limpando os dados do
          site no seu navegador (Configurações → Privacidade → Limpar dados de navegação)
          ou clicando em <strong>&quot;Recusar&quot;</strong> no banner de cookies ao
          acessar o site em modo anônimo.
        </p>
      </div>
    ),
  },
  {
    title: "4. Compartilhamento de dados",
    content: (
      <p>
        Não vendemos nem compartilhamos seus dados pessoais com terceiros para fins
        comerciais. Os dados podem ser compartilhados com:
        <br /><br />
        (a) <strong>Prestadores de serviço essenciais</strong> — Vercel (hospedagem) e,
        mediante consentimento, Meta e Microsoft (ferramentas de análise descritas acima),
        todos sujeitos a obrigações contratuais de confidencialidade e proteção de dados;
        <br /><br />
        (b) <strong>Autoridades competentes</strong> — quando exigido por lei ou ordem judicial.
      </p>
    ),
  },
  {
    title: "5. Retenção dos dados",
    content: (
      <p>
        Os dados do formulário de contato são mantidos pelo tempo necessário para
        atender à sua solicitação e por até 5 anos para fins legais (art. 12 do
        Código Civil). Dados de cookies de análise seguem os prazos definidos pelos
        operadores respectivos (Meta e Microsoft), geralmente de 90 dias a 2 anos.
      </p>
    ),
  },
  {
    title: "6. Seus direitos (LGPD, art. 18)",
    content: (
      <div>
        <p className="mb-3">Como titular dos dados, você tem direito a:</p>
        <ul className="space-y-2 list-none">
          {[
            "Confirmação da existência de tratamento",
            "Acesso aos dados",
            "Correção de dados incompletos, inexatos ou desatualizados",
            "Anonimização, bloqueio ou eliminação de dados desnecessários",
            "Portabilidade dos dados",
            "Eliminação dos dados tratados com base em consentimento",
            "Informação sobre com quem seus dados foram compartilhados",
            "Revogação do consentimento a qualquer momento",
          ].map((right) => (
            <li key={right} className="flex items-start gap-2">
              <svg viewBox="0 0 24 24" fill="none" stroke="#1f8c7b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mt-0.5 flex-shrink-0">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>{right}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4">
          Para exercer qualquer desses direitos, entre em contato pelo WhatsApp{" "}
          <a href="https://wa.me/554599771331" className="text-[#1f8c7b] hover:underline" target="_blank" rel="noopener noreferrer">
            (45) 99977-1331
          </a>{" "}
          ou pelo nosso{" "}
          <a href="/contato" className="text-[#1f8c7b] hover:underline">
            formulário de contato
          </a>
          . Responderemos em até 15 dias úteis.
        </p>
      </div>
    ),
  },
  {
    title: "7. Segurança",
    content: (
      <p>
        Este site é servido exclusivamente via HTTPS (TLS 1.3). Adotamos medidas técnicas
        como headers de segurança (Content-Security-Policy, X-Frame-Options,
        X-Content-Type-Options) para proteger a integridade das páginas e prevenir
        ataques. Nenhum dado de saúde é coletado ou armazenado por este site.
      </p>
    ),
  },
  {
    title: "8. Alterações nesta política",
    content: (
      <p>
        Esta política pode ser atualizada periodicamente. A data da última revisão
        é indicada abaixo. Em caso de alterações relevantes, publicaremos um aviso
        em destaque no site.
        <br /><br />
        <strong>Última atualização:</strong> maio de 2025.
      </p>
    ),
  },
];

export default function PoliticaPrivacidadePage() {
  return (
    <>
      {/* HERO */}
      <section
        className="pt-[70px] py-16 px-8 text-center"
        style={{ background: "linear-gradient(160deg, #0f2440 0%, #143a62 100%)" }}
      >
        <h1 className="text-3xl lg:text-4xl text-white font-bold mb-3">
          Política de Privacidade
        </h1>
        <p className="text-white/80 text-base max-w-[540px] mx-auto">
          Como coletamos, usamos e protegemos seus dados pessoais, em conformidade
          com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).
        </p>
      </section>

      {/* CONTENT */}
      <section className="py-16 px-8 bg-[#f8f9fb]">
        <div className="max-w-[820px] mx-auto space-y-6">
          {sections.map((section) => (
            <div
              key={section.title}
              className="bg-white rounded-[16px] border border-[#e2e8f0] p-8"
            >
              <h2 className="text-lg font-bold text-[#143a62] mb-4">{section.title}</h2>
              <div className="text-[#5a6a7e] text-[0.925rem] leading-relaxed">
                {section.content}
              </div>
            </div>
          ))}

          {/* CTA contato */}
          <div
            className="rounded-[20px] p-8 text-white text-center"
            style={{ background: "linear-gradient(135deg, #143a62, #1f8c7b)" }}
          >
            <h3 className="font-bold text-xl mb-2">Dúvidas sobre seus dados?</h3>
            <p className="text-white/80 text-sm mb-5 max-w-[420px] mx-auto">
              Entre em contato. Respondemos em até 15 dias úteis conforme exigido pela LGPD.
            </p>
            <a
              href="/contato"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-[12px] font-semibold text-[#143a62] bg-white text-sm no-underline hover:bg-[#f8f9fb] transition-colors"
            >
              Falar com a clínica
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
