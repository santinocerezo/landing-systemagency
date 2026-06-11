import Image from "next/image";

/** Relación ancho/alto del isotipo SYS (público: /logo-mark.png). */
const LOGO_RATIO = 825 / 972;

type LogoProps = {
  className?: string;
  /** Alto del isotipo en px. */
  size?: number;
  /** Mostrar el wordmark "System Agent Solutions" al lado del isotipo. */
  withWordmark?: boolean;
  /** Precargar la imagen (solo para el logo above-the-fold del navbar). */
  priority?: boolean;
};

export default function Logo({
  className = "",
  size = 38,
  withWordmark = true,
  priority = false,
}: LogoProps) {
  const width = Math.round(size * LOGO_RATIO);
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <Image
        src="/logo-mark.png"
        alt="System Agent Solutions"
        width={width}
        height={size}
        priority={priority}
        sizes={`${size}px`}
        style={{ height: size, width }}
      />
      {withWordmark && (
        <span className="flex flex-col leading-none" translate="no">
          <span className="font-display text-[1.02rem] font-semibold leading-none tracking-tight text-text">
            System Agent
          </span>
          <span className="mt-1 font-display text-[0.62rem] font-semibold uppercase leading-none tracking-[0.32em] text-brand">
            Solutions
          </span>
        </span>
      )}
    </span>
  );
}
