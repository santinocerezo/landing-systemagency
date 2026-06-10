"use client";

import { useEffect } from "react";

/**
 * Navegación interna a #secciones SIN dejar el hash en la URL.
 * La barra de direcciones muestra siempre la URL limpia (ej. el dominio solo),
 * nunca /#sistema, /#demo, etc.
 *
 * - Intercepta los clicks en links que apuntan a una sección de la página actual,
 *   hace scroll suave y limpia el hash con history.replaceState (no ensucia el historial).
 * - Si se entra con un hash (ej. desde /privacidad → /#demo), scrollea y lo limpia.
 * - Degrada a navegación normal por hash si no hay JS.
 * - Conserva el foco en el destino (skip-link "Saltar al contenido", main, etc.).
 */
export default function ScrollManager() {
  useEffect(() => {
    const cleanUrl = () =>
      history.replaceState(null, "", window.location.pathname + window.location.search);

    const focusTarget = (el: HTMLElement) => {
      // Solo enfoca si el destino es realmente enfocable (ej. <main tabindex="-1">),
      // sin volver a scrollear.
      if (el.hasAttribute("tabindex") || /^(A|BUTTON|INPUT|SELECT|TEXTAREA)$/.test(el.tagName)) {
        el.focus({ preventScroll: true });
      }
    };

    // Al entrar con un hash (navegación entre páginas): scrollear y limpiar.
    if (window.location.hash) {
      const id = decodeURIComponent(window.location.hash.slice(1));
      const el = document.getElementById(id);
      cleanUrl();
      if (el) {
        requestAnimationFrame(() => {
          el.scrollIntoView();
          focusTarget(el);
        });
      }
    }

    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey)
        return;

      const a = (e.target as HTMLElement | null)?.closest("a");
      if (!a || a.target === "_blank" || a.hasAttribute("download")) return;

      const href = a.getAttribute("href");
      if (!href) return;

      const hashIndex = href.indexOf("#");
      if (hashIndex === -1) return;

      // El link debe apuntar a la página actual (o ser un ancla relativa "#id").
      const path = href.slice(0, hashIndex);
      const samePage =
        path === "" ||
        path === window.location.pathname ||
        (path === "/" && window.location.pathname === "/");
      if (!samePage) return;

      const id = decodeURIComponent(href.slice(hashIndex + 1));
      if (!id) return;

      const el = document.getElementById(id);
      if (!el) return; // No está en esta página → navegación normal.

      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      focusTarget(el);
      cleanUrl();
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
