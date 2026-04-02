import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#143a62] text-white py-12 px-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-9 h-9 rounded-[10px] flex items-center justify-center text-white font-bold"
                style={{ background: "linear-gradient(135deg, #1a4d7c, #1f8c7b)" }}
              >
                S
              </div>
              <div>
                <strong className="block text-sm font-bold">Ser Singular</strong>
                <span className="text-[0.65rem] text-[#7dd8cc] uppercase tracking-widest">
                  Centro de Desenvolvimento
                </span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Clínica especializada em desenvolvimento infantil em Medianeira, Paraná.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white/50 mb-4">
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
                    className="text-sm text-white/60 hover:text-white transition-colors no-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white/50 mb-4">
              Contato
            </h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>Av. José Callegari, 1820, Centro</li>
              <li>Medianeira — PR</li>
              <li>
                <a
                  href="https://wa.me/554599771331"
                  className="hover:text-white transition-colors"
                >
                  (45) 99977-1331
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/ser.singular.cdt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  @ser.singular.cdt
                </a>
              </li>
              <li>Segunda a Sexta · 8h às 18h</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-white/40">
          <span>© 2025 Ser Singular. Todos os direitos reservados.</span>
          <span>Medianeira, Paraná · (45) 99977-1331</span>
        </div>
      </div>
    </footer>
  );
}
