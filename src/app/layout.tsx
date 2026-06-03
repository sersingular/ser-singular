import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ConditionalLayout from "@/components/ConditionalLayout";
import CookieConsentBanner from "@/components/CookieConsentBanner";
import TrackingScripts from "@/components/TrackingScripts";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  verification: {
    google: "vVUEifVQB0koJDupnVSJEzSFI9-JC-mJjtQeHsbblLQ",
  },
  title: "Clínica Ser Singular | Centro de Desenvolvimento e Treinamento infantil em Medianeira-PR",
  description:
    "Clínica especializada em desenvolvimento infantil em Medianeira. Psicologia, Fonoaudiologia, Terapia Ocupacional e Psicopedagogia. Agende uma avaliação.",
  openGraph: {
    siteName: "Clínica Ser Singular",
    title: "Clínica Ser Singular | Medianeira-PR",
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
        <ConditionalLayout>{children}</ConditionalLayout>
        <CookieConsentBanner />
        <TrackingScripts />
      </body>
    </html>
  );
}
