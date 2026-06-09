import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description: `Términos y condiciones de uso de ${siteConfig.name}.`,
};

export default function TerminosPage() {
  return (
    <article className="container-x max-w-3xl pb-24 pt-32">
      <h1 className="font-display text-3xl font-bold sm:text-4xl">Términos y Condiciones</h1>
      <p className="mt-3 text-sm text-muted">Última actualización: 9 de junio de 2026</p>

      <div className="mt-8 space-y-6 text-muted [&_h2]:mt-8 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-text [&_a]:text-brand-soft">
        <p>
          Al utilizar el sitio y los servicios de {siteConfig.name} aceptás los siguientes términos y
          condiciones. Te recomendamos leerlos con atención.
        </p>

        <h2>1. Servicios</h2>
        <p>
          {siteConfig.name} ofrece servicios de creación de sitios web, automatización de atención con
          agentes de inteligencia artificial e integración con canales de mensajería y un panel de
          gestión. El alcance específico se acuerda con cada cliente.
        </p>

        <h2>2. Uso del sitio</h2>
        <p>
          El contenido de este sitio es informativo. Te comprometés a utilizarlo de forma lícita y a no
          realizar acciones que afecten su funcionamiento o el de terceros.
        </p>

        <h2>3. Propiedad intelectual</h2>
        <p>
          La marca, el diseño y los contenidos de este sitio pertenecen a {siteConfig.name}, salvo
          indicación contraria. No está permitida su reproducción sin autorización.
        </p>

        <h2>4. Limitación de responsabilidad</h2>
        <p>
          {siteConfig.name} no se responsabiliza por daños derivados del uso del sitio o de la
          imposibilidad de acceder a él. Los servicios contratados se rigen por el acuerdo
          correspondiente con cada cliente.
        </p>

        <h2>5. Contacto</h2>
        <p>
          Ante cualquier consulta sobre estos términos, escribinos a{" "}
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
