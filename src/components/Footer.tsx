import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0f2440] text-white py-12 px-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
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
              Clínica especializada em desenvolvimento infantil em Medianeira, Paraná.
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

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-4">
              Contato
            </h4>
            <ul className="space-y-2 text-sm text-white/55">
              <li>Av. José Callegari, 1820, Centro</li>
              <li>Medianeira, Paraná</li>
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
              <li>Segunda a Sexta, 8h às 18h</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-white/35">
          <span>© 2025 Ser Singular. Todos os direitos reservados.</span>
          <span>Medianeira, Paraná</span>
        </div>
      </div>
    </footer>
  );
}
