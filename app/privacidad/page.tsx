import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import PrivacidadContent from "@/components/legal/PrivacidadContent";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: `Política de privacidad de ${siteConfig.name}.`,
};

export default function PrivacidadPage() {
  return (
    <article className="container-x max-w-3xl pb-24 pt-32">
      <PrivacidadContent />
    </article>
  );
}
