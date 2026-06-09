import { Ear, Languages, MessageCircleHeart, Headphones, UserCheck } from "lucide-react";
import ChatMock, { type ChatMessage } from "./ChatMock";
import Reveal from "./Reveal";

const chat: ChatMessage[] = [
  { from: "them", text: "che me re sirve pero estoy seco hasta el finde 😅 hay forma de reservarlo?", time: "20:14" },
  {
    from: "me",
    text: "¡Jaja te entiendo! Quedate tranqui 🙌 Te lo puedo reservar con una seña chiquita y lo congelamos hasta el viernes. Así no se te escapa. ¿Lo dejamos a tu nombre?",
    time: "20:14",
  },
  { from: "them", audio: "0:07", time: "20:15" },
  {
    from: "me",
    text: "Perfecto, escuché tu audio. Te mando los datos para la seña y queda tuyo hasta el viernes. Cualquier cosa me escribís, ¿dale? 👊",
    time: "20:15",
  },
];

const capabilities = [
  { icon: Languages, text: "Entiende criollo y modismos argentinos" },
  { icon: Headphones, text: "Escucha y responde audios" },
  { icon: Ear, text: "Interpreta lo que el cliente quiere decir" },
  { icon: MessageCircleHeart, text: "Cero respuestas robóticas" },
  { icon: UserCheck, text: "Te deriva el lead cuando hace falta un humano" },
];

export default function AgentSpotlight() {
  return (
    <section id="agente" className="section relative overflow-hidden">
      <div className="pointer-events-none absolute left-[-10%] top-1/3 -z-10 h-[360px] w-[360px] rounded-full bg-brand/15 blur-[120px]" />
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        {/* Texto */}
        <div>
          <Reveal>
            <span className="eyebrow">No es un bot. Es un agente.</span>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="h2 mt-4">
              Atiende como tu mejor vendedor.{" "}
              <span className="bg-gradient-to-r from-brand-soft to-brand-2 bg-clip-text text-transparent">
                No como un robot.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="lead mt-5">
              Entiende el criollo, el lenguaje de la calle y las vueltas de una charla real. Escucha
              audios, lee mensajes largos e interpreta lo que el cliente quiere decir —no solo lo que
              escribe. El cliente siente que habla con una persona, no con un menú de opciones.
            </p>
          </Reveal>

          <ul className="mt-8 flex flex-wrap gap-2.5">
            {capabilities.map((c, i) => {
              const Icon = c.icon;
              return (
                <Reveal key={c.text} delay={150 + i * 60}>
                  <li className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-sm text-text">
                    <Icon size={15} className="text-brand-soft" />
                    {c.text}
                  </li>
                </Reveal>
              );
            })}
          </ul>
        </div>

        {/* Chat */}
        <Reveal delay={120} className="relative mx-auto w-full max-w-sm lg:max-w-md">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-tr from-brand-2/20 to-transparent blur-2xl" />
          <ChatMock messages={chat} status="en línea" />
        </Reveal>
      </div>
    </section>
  );
}
