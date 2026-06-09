import Image from "next/image";

/** Relación ancho/alto del isotipo SYS (público: /logo-mark.png). */
const LOGO_RATIO = 825 / 972;

type LogoProps = {
  className?: string;
  /** Alto del isotipo en px. */
  size?: number;
  /** Mostrar el wordmark "System Agency Solutions" al lado del isotipo. */
  withWordmark?: boolean;
};

export default function Logo({ className = "", size = 38, withWordmark = true }: LogoProps) {
  const width = Math.round(size * LOGO_RATIO);
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <Image
        src="/logo-mark.png"
        alt="System Agency Solutions"
        width={width}
        height={size}
        priority
        sizes={`${size}px`}
        style={{ height: size, width }}
      />
      {withWordmark && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-[1.02rem] font-semibold leading-none tracking-tight text-text">
            System Agency
          </span>
          <span className="mt-1 font-display text-[0.62rem] font-semibold uppercase leading-none tracking-[0.32em] text-brand">
            Solutions
          </span>
        </span>
      )}
    </span>
  );
}
