"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppFloat from "./WhatsAppFloat";
import ExitIntentPopup from "./ExitIntentPopup";

const BARE_PATHS = ["/avaliacao-autismo"];

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isBare = BARE_PATHS.some((p) => pathname === p || pathname.startsWith(p + "/"));

  return (
    <>
      {!isBare && <Navbar />}
      <main>{children}</main>
      {!isBare && <Footer />}
      {!isBare && <WhatsAppFloat />}
      {!isBare && <ExitIntentPopup />}
    </>
  );
}
