import { Camera, Database, Megaphone, BookOpen, Globe } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const steps = [
  {
    icon: <WhatsAppIcon size={22} />,
    title: "Lo mandás por WhatsApp",
    desc: "Fotos, precio y datos del vehículo. Como si se lo mandaras a un empleado.",
  },
  {
    icon: <Database size={22} />,
    title: "Se carga solo a la base",
    desc: "El sistema lo registra en tu base de datos, ordenado y listo.",
  },
  {
    icon: <Megaphone size={22} />,
    title: "Se publica en redes",
    desc: "Aparece automáticamente en Instagram y Facebook, con su ficha.",
  },
  {
    icon: <BookOpen size={22} />,
    title: "Entra al catálogo",
    desc: "Se suma al catálogo de WhatsApp para mostrarlo en cada chat.",
  },
  {
    icon: <Globe size={22} />,
    title: "Queda en tu web",
    desc: "Disponible en tu landing y para que el agente lo ofrezca a los leads.",
  },
];

export default function Automation() {
  return (
    <section className="section relative">
      <div className="container-x">
        <SectionHeading
          eyebrow="Carga automática"
          title="De tu WhatsApp a todos lados, en automático"
          subtitle="Publicar un vehículo deja de ser una tarea. Lo mandás una vez por WhatsApp y aparece en todos tus canales, sincronizado."
        />

        <div className="relative mt-16">
          {/* Línea conectora (desktop) */}
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent lg:block" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 90} className="relative">
                <div className="flex flex-col items-center text-center">
                  <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-brand/30 bg-surface text-brand-soft shadow-lg shadow-brand/10">
                    {s.icon}
                    <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand text-[11px] font-bold text-white">
                      {i + 1}
                    </span>
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-text">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
