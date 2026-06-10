import { Clock, Instagram, MessageSquare, Zap } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import Reveal from "./Reveal";

const channels = [
  { label: "WhatsApp", icon: <WhatsAppIcon size={18} /> },
  { label: "Instagram", icon: <Instagram size={18} /> },
  { label: "Messenger", icon: <MessageSquare size={18} /> },
];

const props = [
  { icon: <Clock size={16} />, text: "Atiende 24/7" },
  { icon: <Zap size={16} />, text: "Responde en segundos" },
  { icon: <MessageSquare size={16} />, text: "Habla como humano" },
];

export default function TrustStrip() {
  return (
    <section className="border-y border-white/5 bg-white/[0.015]">
      <div className="container-x flex flex-col items-center justify-between gap-6 py-7 md:flex-row">
        <Reveal className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          <span className="text-sm text-muted">Atiende donde están tus clientes:</span>
          <div className="flex items-center gap-5">
            {channels.map((c) => (
              <span key={c.label} className="flex items-center gap-2 text-sm font-medium text-text">
                <span className="text-brand-soft" aria-hidden="true">{c.icon}</span>
                {c.label}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={80} className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {props.map((p) => (
            <span key={p.text} className="flex items-center gap-2 text-sm text-muted">
              <span className="text-brand" aria-hidden="true">{p.icon}</span>
              {p.text}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
