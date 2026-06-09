/**
 * ============================================================
 *  FUENTE ÚNICA DE VERDAD — System.agent
 *  Cambiá acá los datos de contacto, redes y links.
 *  (El color violeta se cambia en app/globals.css → --brand)
 * ============================================================
 *
 *  PENDIENTE de reemplazar por los datos reales:
 *   - whatsappNumber  (formato internacional, sin "+" ni espacios)
 *   - email
 *   - bookingUrl      (link de tu evento de Calendly)
 *   - social.*        (handles / URLs de redes)
 *   - url             (dominio final cuando lo tengas)
 */

export const siteConfig = {
  name: "System.agent",
  legalName: "System.agent",
  tagline: "Tu negocio vende y responde solo, las 24 horas.",
  description:
    "System.agent le da a tu concesionaria una web profesional, un agente de IA que atiende WhatsApp, Instagram y Messenger como un humano, y un panel donde ves cada lead, conversación y venta.",

  // Dominio final (cambialo cuando lo conectes en Vercel)
  url: "https://systemagent.app",

  // --- CONTACTO (PLACEHOLDERS — reemplazar) ---
  // WhatsApp en formato internacional sin "+", ej. Argentina: 54911XXXXXXXX
  whatsappNumber: "5491112345678",
  email: "hola@system.agent",

  // --- AGENDA (Calendly) ---
  // Si queda vacío, la sección de agenda muestra un fallback a WhatsApp.
  bookingUrl: "https://calendly.com/systemagencia1/1h-demo-meeting",

  // --- REDES (PLACEHOLDERS — reemplazar) ---
  social: {
    instagram: "https://instagram.com/system.agent",
    instagramHandle: "@system.agent",
    facebook: "",
    tiktok: "",
    linkedin: "",
  },

  // --- DEMO REAL EN VIVO ---
  demo: {
    name: "Sarandí Cars",
    url: "https://sarandicars-landing.fly.dev/",
    agentName: "Sofía",
  },
} as const;

/** Genera un link de WhatsApp con un mensaje opcional pre-cargado. */
export function waLink(message?: string): string {
  const base = `https://wa.me/${siteConfig.whatsappNumber}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

/** Mensajes pre-cargados de WhatsApp por sección (para trackear de dónde viene el lead). */
export const waMessages = {
  general: "¡Hola System.agent! Quiero más info sobre el sistema.",
  demo: "¡Hola! Quiero agendar una demo de System.agent para mi negocio.",
  hero: "¡Hola! Vi la web y quiero que mi negocio venda solo con System.agent.",
  pricing: "¡Hola! Quiero saber los planes y cómo empezar con System.agent.",
  footer: "¡Hola System.agent! Tengo una consulta.",
} as const;

/** Indica si Calendly está configurado. */
export const hasBooking = siteConfig.bookingUrl.trim().length > 0;

/** Links de navegación (anclas de la single-page; absolutas para que anden desde /privacidad, etc.). */
export const navLinks = [
  { label: "El sistema", href: "/#sistema" },
  { label: "El agente", href: "/#agente" },
  { label: "Cómo funciona", href: "/#como-funciona" },
  { label: "Demo", href: "/#demo" },
] as const;
