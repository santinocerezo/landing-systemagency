import { ArrowRight } from "lucide-react";
import { waLink, waMessages } from "@/lib/site-config";
import WhatsAppIcon from "./WhatsAppIcon";
import Reveal from "./Reveal";

export default function CTASection() {
  return (
    <section className="section">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-brand/30 bg-gradient-to-br from-brand/25 via-surface to-brand-2/20 px-6 py-14 text-center sm:px-12 sm:py-20">
            <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-brand/30 blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-brand-2/30 blur-[100px]" />

            <h2 className="relative text-balance font-display text-3xl font-bold tracking-tight sm:text-5xl">
              ¿Listo para que tu negocio
              <br className="hidden sm:block" /> venda solo?
            </h2>
            <p className="relative mx-auto mt-5 max-w-xl text-lg text-zinc-200">
              Sumate a las concesionarias que ya atienden 24/7 con un agente de IA. Te mostramos cómo
              en una demo en vivo.
            </p>
            <div className="relative mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href="#agenda" className="btn-primary">
                Agendá una demo
                <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a
                href={waLink(waMessages.pricing)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <WhatsAppIcon size={18} />
                Hablar por WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
