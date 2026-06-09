import { Check, CheckCheck, Mic, Play } from "lucide-react";

export type ChatMessage = {
  from: "them" | "me";
  text?: string;
  /** Si es un audio, mostramos un reproductor con esta duración (ej. "0:12"). */
  audio?: string;
  time?: string;
};

type ChatMockProps = {
  title?: string;
  status?: string;
  messages: ChatMessage[];
  className?: string;
};

/** Maqueta visual de una conversación tipo WhatsApp (decorativa, sin lógica). */
export default function ChatMock({
  title = "System.agent",
  status = "en línea",
  messages,
  className = "",
}: ChatMockProps) {
  return (
    <div
      className={`overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#0b141a] shadow-2xl shadow-black/50 ${className}`}
    >
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-white/5 bg-[#202c33] px-4 py-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-2 text-sm font-bold text-brand-ink">
          SA
        </span>
        <div className="leading-tight">
          <p className="text-sm font-semibold text-white">{title}</p>
          <p className="text-xs text-emerald-400">{status}</p>
        </div>
      </div>

      {/* Cuerpo */}
      <div className="space-y-2.5 bg-[#0b141a] px-3.5 py-4">
        {messages.map((m, i) => {
          const mine = m.from === "me";
          return (
            <div key={i} className={`flex ${mine ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[82%] rounded-2xl px-3 py-2 text-sm shadow-sm ${
                  mine
                    ? "rounded-br-md bg-[#005c4b] text-white"
                    : "rounded-bl-md bg-[#202c33] text-zinc-100"
                }`}
              >
                {m.audio ? (
                  <div className="flex items-center gap-2.5 py-0.5">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15">
                      <Play size={13} className="ml-0.5 fill-current" />
                    </span>
                    <span className="flex h-5 flex-1 items-center gap-[3px]">
                      {[6, 11, 16, 9, 14, 7, 12, 17, 8, 13, 6, 10, 15, 7].map((h, k) => (
                        <span
                          key={k}
                          className="w-[2.5px] rounded-full bg-white/45"
                          style={{ height: `${h}px` }}
                        />
                      ))}
                    </span>
                    <Mic size={14} className="text-white/60" />
                    <span className="text-[11px] text-white/70">{m.audio}</span>
                  </div>
                ) : (
                  <span className="whitespace-pre-line">{m.text}</span>
                )}
                <span
                  className={`mt-1 flex items-center justify-end gap-1 text-[10px] ${
                    mine ? "text-white/60" : "text-white/40"
                  }`}
                >
                  {m.time ?? "12:32"}
                  {mine &&
                    (m.audio ? <Check size={13} /> : <CheckCheck size={13} className="text-sky-400" />)}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
