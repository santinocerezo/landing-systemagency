import { ArrowRight, PlayCircle, Sparkles } from "lucide-react";
import { siteConfig, waLink, waMessages } from "@/lib/site-config";
import ChatMock, { type ChatMessage } from "./ChatMock";
import Reveal from "./Reveal";

const heroChat: ChatMessage[] = [
  { from: "them", text: "Hola, vi la Amarok que tenían. Sigue disponible? 🤔", time: "12:30" },
  {
    from: "me",
    text: "¡Hola! Sí, justo la tenemos. Es la V6 2021, full, con 48.000 km. ¿La querés para uso o tomás algo en parte de pago?",
    time: "12:30",
  },
  { from: "them", audio: "0:09", time: "12:31" },
  {
    from: "me",
    text: "Genial, escuché tu audio 🙌 Tu Hilux 2018 entra sin problema en parte de pago. Te paso una estimación y, si querés, lo coordinamos para que la veas hoy mismo. ¿Te queda bien a las 18?",
    time: "12:31",
  },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-32">
      {/* Glows de fondo */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-[480px] w-[680px] -translate-x-1/2 rounded-full bg-brand/25 blur-[120px]" />
        <div className="absolute right-[-10%] top-[20%] h-[360px] w-[360px] rounded-full bg-brand-2/20 blur-[110px]" />
      </div>
      {/* Grid sutil */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 0%, #000 50%, transparent 100%)",
        }}
      />

      <div className="container-x grid items-center gap-12 pb-20 sm:pb-28 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Columna texto */}
        <div>
          <Reveal>
            <span className="eyebrow">
              <Sparkles size={14} className="text-brand-soft" />
              Sistema de ventas con IA para concesionarias
            </span>
          </Reveal>

          <Reveal delay={60}>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.07] tracking-tight sm:text-5xl lg:text-6xl">
              Tu negocio{" "}
              <span className="bg-gradient-to-r from-brand-soft via-brand to-brand-2 bg-clip-text text-transparent">
                vende y responde solo
              </span>
              , las 24 horas.
            </h1>
          </Reveal>

          <Reveal delay={120}>
            <p className="lead mt-6 max-w-xl">
              Le ponemos a tu negocio una web profesional, un agente de IA que atiende WhatsApp,
              Instagram y Messenger <span className="text-text">como un humano</span>, y un panel
              donde ves cada lead, conversación y venta. Vos publicás un auto desde WhatsApp; nosotros
              lo mostramos en todos lados.
            </p>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#agenda" className="btn-primary">
                Agendá una demo
                <ArrowRight size={18} />
              </a>
              <a
                href={siteConfig.demo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <PlayCircle size={18} />
                Ver demo en vivo
              </a>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <p className="mt-6 text-sm text-muted">
              <span className="text-brand-soft">●</span> Demo real funcionando:{" "}
              <a
                href={siteConfig.demo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-text underline-offset-4 hover:underline"
              >
                {siteConfig.demo.name}
              </a>{" "}
              — atendido por su agente de IA.
            </p>
          </Reveal>
        </div>

        {/* Columna chat */}
        <Reveal delay={160} className="relative mx-auto w-full max-w-sm lg:max-w-md">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-brand/20 to-transparent blur-2xl" />
          <ChatMock messages={heroChat} status="escribiendo…" />
          <div className="absolute -bottom-4 -left-4 hidden rounded-xl border border-white/10 bg-surface/90 px-3 py-2 text-xs text-muted backdrop-blur sm:block">
            <span className="font-semibold text-text">Responde en segundos</span> · sin que muevas un dedo
          </div>
        </Reveal>
      </div>
    </section>
  );
}
