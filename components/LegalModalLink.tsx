"use client";

import { useCallback, useEffect, useRef } from "react";
import { X } from "lucide-react";

/**
 * Link a una página legal que se abre en un modal sin cambiar la URL.
 * El href real se conserva como fallback (sin JS, ctrl/cmd+click, crawlers).
 */
export default function LegalModalLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const open = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey)
      return;
    e.preventDefault();
    dialogRef.current?.showModal();
    document.body.style.overflow = "hidden";
  }, []);

  // <dialog> nativo: Esc dispara "close" y el foco vuelve solo al link.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const unlockScroll = () => {
      document.body.style.overflow = "";
    };
    dialog.addEventListener("close", unlockScroll);
    return () => {
      dialog.removeEventListener("close", unlockScroll);
      unlockScroll();
    };
  }, []);

  return (
    <>
      <a href={href} onClick={open} className="link-focus transition hover:text-text">
        {label}
      </a>
      <dialog
        ref={dialogRef}
        aria-label={label}
        onClick={(e) => {
          // Click en el backdrop (el propio <dialog>) cierra el modal.
          if (e.target === dialogRef.current) dialogRef.current?.close();
        }}
        className="m-auto w-[min(92vw,48rem)] rounded-2xl border border-white/10 bg-bg-soft text-text shadow-2xl backdrop:bg-black/70 backdrop:backdrop-blur-sm"
      >
        <div className="relative max-h-[85vh] overflow-y-auto overscroll-contain p-6 sm:p-10">
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            aria-label="Cerrar"
            className="sticky top-0 float-right -mr-2 -mt-2 flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-muted transition hover:border-brand/40 hover:text-text focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          >
            <X size={18} aria-hidden="true" />
          </button>
          {children}
        </div>
      </dialog>
    </>
  );
}
