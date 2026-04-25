import Link from "next/link";
import Image from "next/image";

const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Av.+José+Callegari,+1820,+Centro,+Medianeira,+PR";
const MAPS_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3599.6!2d-54.0940!3d-25.2950!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f3e5b6b5c5c5c5%3A0x0!2sAv.+Jos%C3%A9+Callegari%2C+1820%2C+Centro%2C+Medianeira%2C+PR!5e0!3m2!1spt-BR!2sbr!4v1700000000000";

export default function Footer() {
  return (
    <>
      {/* Seção Localização */}
      <section className="bg-[#0d1e36] py-14 px-8">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Info */}
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#1f8c7b] border border-[#1f8c7b]/40 rounded-full px-3 py-1 mb-6">
              <svg viewBox="0 0 24 24" fill="none" stroke="#1f8c7b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              Nossa Localização
            </span>
            <h3 className="text-2xl font-bold text-white mb-1">Ser Singular</h3>
            <p className="text-white/60 text-sm mb-6">
              Av. José Callegari, 1820 · Centro<br />
              Medianeira, Paraná
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-sm text-white/70">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 flex-shrink-0">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
                Seg a Sex · 07:15 às 11:45 e 13:30 às 17:45
              </li>
              <li className="flex items-center gap-3 text-sm text-white/70">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 flex-shrink-0">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                  <line x1="12" y1="18" x2="12.01" y2="18"/>
                </svg>
                <a
                  href="https://wa.me/554599771331"
                  className="hover:text-white transition-colors"
                >
                  (45) 99977-1331
                </a>
              </li>
            </ul>

            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[12px] border border-white/20 text-sm text-white/80 hover:text-white hover:border-white/40 transition-colors no-underline"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              Ver no Google Maps
            </a>
          </div>

          {/* Mapa */}
          <div className="rounded-[20px] overflow-hidden border border-white/10 h-[260px] lg:h-[300px]">
            <iframe
              src={MAPS_EMBED}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Ser Singular"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f2440] text-white py-12 px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
            {/* Brand */}
            <div>
              <div className="mb-5">
                <Image
                  src="/logo.png"
                  alt="Ser Singular"
                  width={200}
                  height={74}
                  className="h-[44px] w-auto object-contain brightness-0 invert"
                />
              </div>
              <p className="text-white/55 text-sm leading-relaxed">
                Clínica especializada em desenvolvimento infantil, autismo (TEA) e TDAH em Medianeira, Paraná.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-4">
                Navegação
              </h4>
              <ul className="space-y-2">
                {[
                  { href: "/", label: "Home" },
                  { href: "/profissionais", label: "Profissionais" },
                  { href: "/especialidades", label: "Especialidades" },
                  { href: "/blog", label: "Blog" },
                  { href: "/contato", label: "Contato" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/55 hover:text-white transition-colors no-underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-white/35">
            <span className="font-semibold text-white/50">Ser Singular · Centro de Desenvolvimento e Treinamento</span>
            <span className="whitespace-nowrap">© 2025 Ser Singular. Todos os direitos reservados.</span>
          </div>
        </div>
      </footer>
    </>
  );
}
