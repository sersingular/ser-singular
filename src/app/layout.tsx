import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ser Singular — Centro de Desenvolvimento e Treinamento | Medianeira",
  description:
    "Clínica especializada em desenvolvimento infantil em Medianeira. Psicologia, Fonoaudiologia, Terapia Ocupacional e Psicopedagogia. Agende uma avaliação.",
  openGraph: {
    title: "Ser Singular — Centro de Desenvolvimento e Treinamento",
    description:
      "Clínica especializada em desenvolvimento infantil em Medianeira.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
