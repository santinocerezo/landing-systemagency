import { ShieldCheck, Moon, Filter, LayoutDashboard } from "lucide-react";
import ChatMock, { type ChatMessage } from "./ChatMock";
import Reveal from "./Reveal";

const benefits = [
  {
    icon: ShieldCheck,
    title: "No perdés más leads",
    desc: "Cada mensaje se responde al toque, también fuera de horario.",
  },
  {
    icon: Moon,
    title: "Vendés mientras dormís",
    desc: "El agente trabaja de noche, fines de semana y feriados.",
  },
  {
    icon: Filter,
    title: "Menos tareas, más cierres",
    desc: "Se ocupa de lo repetitivo; vos te dedicás a cerrar ventas.",
  },
  {
    icon: LayoutDashboard,
    title: "Todo bajo control",
    desc: "Conversaciones, leads y ventas ordenados en un solo panel.",
  },
];

const ownerChat: ChatMessage[] = [
  {
    from: "them",
    text: "🔥 Lead caliente: Martín quiere la Amarok V6. Pidió precio final y financiación. ¿Lo llamás vos o sigo yo?",
    time: "10:02",
  },
  { from: "them", text: "📅 Recordatorio: hoy 18:00 viene Carla a ver la Hilux.", time: "10:02" },
  {
    from: "them",
    text: "📊 Reporte de la semana: 47 consultas · 12 leads · 5 visitas agendadas · 2 ventas. Te dejo el detalle 👇",
    time: "10:03",
  },
];

export default function Benefits() {
  return (
    <section className="section">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        {/* Texto + beneficios */}
        <div>
          <Reveal>
            <span className="eyebrow">El control, en tu mano</span>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="h2 mt-4">Lo que cambia en tu negocio desde el día uno</h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="lead mt-4">
              Tu agente no solo atiende clientes: te mantiene informado. Te avisa por WhatsApp cuando
              hay un lead caliente, una visita o una llamada, y te manda el reporte cada semana.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <Reveal key={b.title} delay={150 + i * 70}>
                  <div className="flex gap-3.5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand/15 text-brand-soft ring-1 ring-brand/20">
                      <Icon size={18} />
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-text">{b.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted">{b.desc}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Chat agente → dueño */}
        <Reveal delay={120} className="relative mx-auto w-full max-w-sm lg:max-w-md">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-brand/20 to-transparent blur-2xl" />
          <ChatMock title="Tu agente" status="te mantiene al día" messages={ownerChat} />
        </Reveal>
      </div>
    </section>
  );
}
