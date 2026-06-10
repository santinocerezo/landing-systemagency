"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, waLink, waMessages } from "@/lib/site-config";
import Logo from "./Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 8);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bloquea scroll del body con el menú mobile abierto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled ? "border-b border-white/10 bg-bg/80 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between">
        <a href="/" aria-label="System Agency Solutions — inicio" className="link-focus">
          <Logo priority />
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="link-focus text-sm text-muted transition hover:text-text"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a href="/#agenda" className="btn-primary">
            Agendá una demo
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-text focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-bg md:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </nav>

      {/* Menú mobile */}
      {open && (
        <div id="mobile-menu" className="overscroll-contain border-t border-white/10 bg-bg/95 backdrop-blur-md md:hidden">
          <ul className="container-x flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base text-muted transition hover:bg-white/5 hover:text-text focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2 flex flex-col gap-2">
              <a href="/#agenda" onClick={() => setOpen(false)} className="btn-primary w-full">
                Agendá una demo
              </a>
              <a
                href={waLink(waMessages.general)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="btn-secondary w-full"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
