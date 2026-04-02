"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/profissionais", label: "Profissionais" },
    { href: "/especialidades", label: "Especialidades" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white/97 backdrop-blur-md border-b border-[#e2e8f0] px-8 flex items-center justify-between h-[70px] transition-shadow duration-300 ${
        scrolled ? "shadow-[0_4px_24px_rgba(20,58,98,0.10)]" : ""
      }`}
    >
      <Link href="/" className="flex items-center no-underline">
        <Image
          src="/logo.png"
          alt="Ser Singular — Centro de Desenvolvimento e Treinamento"
          width={160}
          height={60}
          className="h-[52px] w-auto object-contain"
          priority
        />
      </Link>

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-1">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-sm font-medium px-[0.85rem] py-2 rounded-lg transition-all duration-200 no-underline ${
              pathname === link.href
                ? "text-[#143a62] bg-[#eef2f7]"
                : "text-[#2d3748] hover:text-[#143a62] hover:bg-[#eef2f7]"
            }`}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/contato"
          className="ml-2 text-sm font-semibold px-5 py-2 rounded-[10px] no-underline transition-all duration-200"
          style={{
            background: "rgba(31,140,123,0.15)",
            color: "#1f8c7b",
            border: "1.5px solid rgba(31,140,123,0.4)",
            boxShadow:
              "0 2px 12px rgba(31,140,123,0.12), inset 0 1px 0 rgba(255,255,255,0.5)",
          }}
        >
          Agendar Avaliação
        </Link>
      </div>

      {/* Hamburger */}
      <button
        className="flex md:hidden flex-col gap-[5px] cursor-pointer bg-transparent border-none p-1"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        <span
          className={`block w-6 h-0.5 bg-[#143a62] rounded-sm transition-all duration-300 ${
            menuOpen ? "rotate-45 translate-y-[7px]" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-[#143a62] rounded-sm transition-all duration-300 ${
            menuOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-[#143a62] rounded-sm transition-all duration-300 ${
            menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
          }`}
        />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-[70px] left-0 right-0 bg-white border-b border-[#e2e8f0] shadow-lg flex flex-col p-4 gap-1 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-sm font-medium px-4 py-2.5 rounded-lg no-underline transition-all ${
                pathname === link.href
                  ? "text-[#143a62] bg-[#eef2f7]"
                  : "text-[#2d3748] hover:text-[#143a62] hover:bg-[#eef2f7]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contato"
            onClick={() => setMenuOpen(false)}
            className="mt-2 text-sm font-semibold px-4 py-2.5 rounded-[10px] no-underline text-[#1f8c7b]"
            style={{
              background: "rgba(31,140,123,0.12)",
              border: "1.5px solid rgba(31,140,123,0.3)",
            }}
          >
            Agendar Avaliação
          </Link>
        </div>
      )}
    </nav>
  );
}
