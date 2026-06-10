import { CalendarClock, Check } from "lucide-react";
import { hasBooking, siteConfig, waLink, waMessages } from "@/lib/site-config";
import WhatsAppIcon from "./WhatsAppIcon";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const perks = [
  "Reunión sin compromiso",
  "Lo vemos con tu caso real",
  "Te respondemos todas las dudas",
];

/** Construye la URL del embed de Calendly con el theme de marca (azul eléctrico). */
function calendlyEmbedSrc(url: string): string {
  const sep = url.includes("?") ? "&" : "?";
  const params = new URLSearchParams({
    hide_gdpr_banner: "1",
    // Oculta el panel de detalles del evento → menos contenido interno, sin scroll propio.
    hide_event_type_details: "1",
    hide_landing_page_details: "1",
    background_color: "141414",
    text_color: "f5f5f5",
    primary_color: "146bff",
  });
  return `${url}${sep}${params.toString()}`;
}

export default function BookingSection() {
  return (
    <section id="agenda" className="section bg-white/[0.015]">
      <div className="container-x">
        <SectionHeading
          eyebrow="Agendá una demo"
          title="Veámoslo juntos en una demo en vivo"
          subtitle="Te mostramos el sistema funcionando y armamos un plan para tu negocio. Elegí el día y horario que mejor te quede."
        />

        <Reveal delay={80} className="mx-auto mt-8 max-w-3xl">
          {hasBooking ? (
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-surface shadow-2xl shadow-black/30">
              <iframe
                src={calendlyEmbedSrc(siteConfig.bookingUrl)}
                title="Agendá una demo con System.agent"
                className="h-[80svh] max-h-[820px] min-h-[700px] w-full"
                loading="lazy"
              />
            </div>
          ) : (
            <div className="card flex flex-col items-center gap-6 p-8 text-center sm:p-10">
              <span aria-hidden="true" className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/15 text-brand-soft ring-1 ring-brand/20">
                <CalendarClock size={26} />
              </span>
              <div>
                <h3 className="font-display text-2xl font-bold text-text">Coordinemos tu demo</h3>
                <p className="lead mt-3">
                  Escribinos por WhatsApp y en el momento te damos un horario. Te mostramos todo
                  funcionando, sin vueltas.
                </p>
              </div>
              <ul className="flex flex-col gap-2 text-sm text-muted sm:flex-row sm:gap-6">
                {perks.map((p) => (
                  <li key={p} className="flex items-center gap-2">
                    <Check size={15} className="text-brand-soft" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
              <a
                href={waLink(waMessages.demo)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <WhatsAppIcon size={18} />
                Agendar por WhatsApp
              </a>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
