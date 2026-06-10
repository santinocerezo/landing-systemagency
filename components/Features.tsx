import {
  Globe,
  Bot,
  LayoutDashboard,
  Share2,
  BellRing,
  RefreshCw,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const features = [
  {
    icon: Globe,
    title: "Web profesional que vende",
    desc: "Si no tenés una web, te la hacemos. Rápida, linda y pensada para convertir visitas en clientes, con tu catálogo siempre actualizado.",
  },
  {
    icon: Bot,
    title: "Agente de IA omnicanal",
    desc: "Atiende WhatsApp, Instagram y Messenger por vos. Responde consultas, filtra interesados y agenda visitas, como lo haría tu mejor vendedor.",
  },
  {
    icon: LayoutDashboard,
    title: "Panel de control (CRM)",
    desc: "Todas las conversaciones, leads, ventas y la agenda en un solo lugar. Sabés exactamente qué pasa con cada cliente.",
  },
  {
    icon: Share2,
    title: "Publicás desde WhatsApp",
    desc: "Mandás fotos y datos del vehículo por WhatsApp. El sistema lo carga, lo publica en redes, lo suma al catálogo y a tu web. Todo solo.",
  },
  {
    icon: BellRing,
    title: "Leads calientes y reportes",
    desc: "Te avisa por WhatsApp cuando hay un lead caliente, una cita o una llamada. Y te manda un reporte completo cada semana.",
  },
  {
    icon: RefreshCw,
    title: "Catálogo sincronizado",
    desc: "Tu stock vive en un solo lugar y se muestra igual en la web, en el chat y en las redes. Sin cargar lo mismo cinco veces.",
  },
];

export default function Features() {
  return (
    <section id="sistema" className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="Qué hace el sistema"
          title="Todo lo que tu negocio necesita para vender online, en uno solo"
          subtitle="No es una herramienta más. Es el equipo de ventas digital completo de tu concesionaria, funcionando solo."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 [&_.card]:p-5">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <Reveal key={f.title} delay={(i % 3) * 80}>
                <div className="card card-hover h-full">
                  <span aria-hidden="true" className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/15 text-brand-soft ring-1 ring-brand/20">
                    <Icon size={18} />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-text">{f.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{f.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
