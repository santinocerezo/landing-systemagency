"use client";

import { useEffect, useState } from "react";
import { waLink, waMessages } from "@/lib/site-config";
import WhatsAppIcon from "./WhatsAppIcon";

/** Botón flotante de WhatsApp, visible en toda la página. Sin backend. */
export default function WhatsAppFab() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={waLink(waMessages.general)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
      className={`fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] py-3 pl-3 pr-4 font-semibold text-white shadow-xl shadow-black/30 transition-all duration-300 hover:scale-105 hover:brightness-105 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-20" />
      <WhatsAppIcon size={24} />
      <span className="hidden text-sm sm:inline">Escribinos</span>
    </a>
  );
}
