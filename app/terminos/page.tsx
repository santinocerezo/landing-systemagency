import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import TerminosContent from "@/components/legal/TerminosContent";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description: `Términos y condiciones de uso de ${siteConfig.name}.`,
};

export default function TerminosPage() {
  return (
    <article className="container-x max-w-3xl pb-24 pt-32">
      <TerminosContent />
    </article>
  );
}
