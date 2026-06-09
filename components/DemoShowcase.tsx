import { ArrowUpRight, Check, ExternalLink } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const bullets = [
  "Su propia web con catálogo de vehículos en vivo",
  `Su agente de IA (${siteConfig.demo.agentName}) atendiendo por WhatsApp y Messenger`,
  "Respuestas reales, naturales y al instante",
];

export default function DemoShowcase() {
  return (
    <section id="demo" className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="Demo real en vivo"
          title="No te lo contamos. Te lo mostramos funcionando."
          subtitle="Sarandí Cars es una concesionaria real usando el sistema hoy. Entrá, mirá su web y escribile al agente para ver cómo responde."
        />

        <Reveal delay={80} className="mt-14">
          <div className="grid items-center gap-10 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-6 sm:p-8 lg:grid-cols-2 lg:p-10">
            {/* Marco navegador */}
            <a
              href={siteConfig.demo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden rounded-xl border border-white/10 bg-[#0b0b0c] shadow-2xl shadow-black/40 transition hover:border-brand/40"
            >
              <div className="flex items-center gap-2 border-b border-white/10 bg-[#161618] px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                <span className="ml-3 flex-1 truncate rounded-md bg-black/30 px-3 py-1 text-xs text-muted">
                  {siteConfig.demo.url.replace("https://", "")}
                </span>
              </div>
              <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand/20 via-transparent to-brand-2/20" />
                <div className="relative px-6 text-center">
                  <p className="font-display text-2xl font-bold text-white sm:text-3xl">{siteConfig.demo.name}</p>
                  <p className="mt-2 text-sm text-muted">Web + catálogo + agente de IA</p>
                  <span className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur transition group-hover:bg-white/20">
                    Abrir demo
                    <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </div>
            </a>

            {/* Texto */}
            <div>
              <h3 className="font-display text-2xl font-bold text-text">Mirá lo que vas a tener vos</h3>
              <ul className="mt-5 space-y-3">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-muted">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/20 text-brand-soft">
                      <Check size={13} />
                    </span>
                    <span className="text-text">{b}</span>
                  </li>
                ))}
              </ul>
              <a
                href={siteConfig.demo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-8"
              >
                Ver demo en vivo
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
