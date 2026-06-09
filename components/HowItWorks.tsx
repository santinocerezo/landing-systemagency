import { Settings2, PlugZap, TrendingUp } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const steps = [
  {
    icon: Settings2,
    step: "01",
    title: "Lo configuramos a tu medida",
    desc: "Armamos tu web (si la necesitás) y entrenamos al agente con tu stock, tus precios y tu forma de vender. Queda con la identidad de tu marca.",
  },
  {
    icon: PlugZap,
    step: "02",
    title: "Conectamos tus canales",
    desc: "WhatsApp, Instagram y Messenger quedan atendidos por el agente e integrados a tu panel. Vos no tocás nada técnico.",
  },
  {
    icon: TrendingUp,
    step: "03",
    title: "Empezás a vender solo",
    desc: "Seguís con lo tuyo. El sistema responde, agenda, publica y te pasa los leads listos para cerrar.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="section bg-white/[0.015]">
      <div className="container-x">
        <SectionHeading
          eyebrow="Cómo funciona"
          title="Lo dejamos andando. Vos solo vendés."
          subtitle="En pocos días tenés todo el sistema funcionando, sin complicaciones y sin saber nada de tecnología."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.step} delay={i * 100}>
                <div className="card card-hover h-full">
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/15 text-brand-soft ring-1 ring-brand/20">
                      <Icon size={20} />
                    </span>
                    <span className="font-display text-3xl font-bold text-white/10">{s.step}</span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-text">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{s.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
