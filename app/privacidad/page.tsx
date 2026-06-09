import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: `Política de privacidad de ${siteConfig.name}.`,
};

export default function PrivacidadPage() {
  return (
    <article className="container-x max-w-3xl pb-24 pt-32">
      <h1 className="font-display text-3xl font-bold sm:text-4xl">Política de Privacidad</h1>
      <p className="mt-3 text-sm text-muted">Última actualización: 9 de junio de 2026</p>

      <div className="mt-8 space-y-6 text-muted [&_h2]:mt-8 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-text [&_a]:text-brand-soft">
        <p>
          En {siteConfig.name} respetamos tu privacidad. Esta política describe qué datos recopilamos,
          cómo los usamos y cuáles son tus derechos al utilizar nuestro sitio y servicios.
        </p>

        <h2>1. Datos que recopilamos</h2>
        <p>
          Recopilamos la información que nos brindás voluntariamente al contactarnos por WhatsApp, email
          o al agendar una reunión (nombre, datos de contacto y los detalles de tu consulta). También
          podemos recopilar datos de navegación de forma anónima para mejorar el sitio.
        </p>

        <h2>2. Cómo usamos tus datos</h2>
        <p>
          Usamos tus datos para responder consultas, agendar reuniones, brindarte nuestros servicios y
          enviarte información relacionada. No vendemos ni alquilamos tus datos a terceros.
        </p>

        <h2>3. Terceros</h2>
        <p>
          Para agendar reuniones utilizamos Calendly, y la mensajería se gestiona mediante WhatsApp y
          plataformas de Meta. Estos servicios tienen sus propias políticas de privacidad.
        </p>

        <h2>4. Tus derechos</h2>
        <p>
          Podés solicitar acceder, rectificar o eliminar tus datos personales en cualquier momento
          escribiéndonos a <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
        </p>

        <h2>5. Contacto</h2>
        <p>
          Ante cualquier duda sobre esta política, contactanos a{" "}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
        </p>

        <p className="text-xs">
          Este texto es una plantilla orientativa y debería ser revisado por un profesional legal antes
          de su publicación definitiva.
        </p>
      </div>
    </article>
  );
}
