# System.agent — Landing

Landing de marketing para **System.agent**: sistema de ventas con IA para concesionarias y negocios
(web profesional + agente de IA omnicanal + CRM + carga automática de vehículos).

Sitio estático construido con **Next.js + TypeScript + Tailwind CSS**. Contacto 100% vía **WhatsApp** y
agenda de reuniones con **Calendly** embebido. Sin backend, sin costos de API.

---

## 🚀 Desarrollo

```bash
npm install      # instalar dependencias
npm run dev      # http://localhost:3000
npm run build    # build de producción
npm run start    # servir el build
```

Requiere Node.js 18.18+ (recomendado LTS).

---

## ✏️ Cómo cambiar los datos (sin tocar componentes)

Casi todo se edita en **un solo lugar**:

### Contacto, redes y agenda → [`lib/site-config.ts`](lib/site-config.ts)

| Campo | Qué es |
| --- | --- |
| `whatsappNumber` | Número de WhatsApp en formato internacional, **sin `+` ni espacios** (ej. Argentina: `54911...`). |
| `email` | Email de contacto. |
| `bookingUrl` | Link de tu evento de Calendly. Si lo dejás vacío, la sección de agenda cae a WhatsApp. |
| `social.*` | Links y handle de Instagram / Facebook / LinkedIn (vacíos no se muestran). |
| `url` | Dominio final del sitio (para SEO / Open Graph). |

### Color de marca (violeta) → [`app/globals.css`](app/globals.css)

Cambiá las variables al principio del archivo (`--brand`, `--brand-2`, `--brand-soft`). Todo el sitio
se actualiza solo. Si cambiás el violeta, actualizá también:
- el `primary_color` del embed de Calendly en [`components/BookingSection.tsx`](components/BookingSection.tsx),
- los colores del favicon en [`app/icon.svg`](app/icon.svg) y del OG en [`app/opengraph-image.tsx`](app/opengraph-image.tsx).

---

## ☁️ Deploy a Vercel

1. Subí el repo a GitHub.
2. Importá el repo en [vercel.com](https://vercel.com) (detecta Next.js automáticamente) o corré `vercel --prod`.
3. No hace falta ninguna variable de entorno.
4. Conectá tu **dominio propio** en *Project → Settings → Domains*.

---

## 🧩 Estructura

```
app/            layout, página principal, legales, OG e icono
components/      secciones (Hero, Features, AgentSpotlight, …) y UI reutilizable
lib/            site-config.ts (fuente única de datos de marca)
```
