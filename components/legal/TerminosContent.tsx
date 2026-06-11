import { siteConfig } from "@/lib/site-config";

/**
 * Contenido de los Términos y Condiciones.
 * Se usa tanto en la página /terminos como en el modal del footer
 * (con `as="h2"` para no duplicar el h1 de la landing).
 */
export default function TerminosContent({ as: Heading = "h1" }: { as?: "h1" | "h2" }) {
  return (
    <>
      <Heading className="font-display text-3xl font-bold sm:text-4xl">
        Términos y Condiciones
      </Heading>
      <p className="mt-3 text-sm text-muted">Última actualización: 9 de junio de 2026</p>

      <div className="mt-8 space-y-6 text-muted [&_h2]:mt-8 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-text [&_a]:text-brand-soft [&_a]:underline [&_a]:underline-offset-2">
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
      </div>
    </>
  );
}
