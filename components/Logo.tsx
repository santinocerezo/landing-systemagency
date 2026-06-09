type LogoProps = {
  className?: string;
  /** Tamaño del isotipo en px. */
  size?: number;
  /** Mostrar el texto "System.agent" al lado del isotipo. */
  withWordmark?: boolean;
};

export default function Logo({ className = "", size = 30, withWordmark = true }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="sa-grad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
            <stop stopColor="var(--brand)" />
            <stop offset="1" stopColor="var(--brand-2)" />
          </linearGradient>
        </defs>
        <rect width="32" height="32" rx="9" fill="url(#sa-grad)" />
        {/* Burbuja de chat */}
        <path
          d="M8.5 9.5h15a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-7.4l-4.1 3.2a.6.6 0 0 1-1-.48V20.5H8.5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2Z"
          fill="#fff"
        />
        {/* Spark (IA) */}
        <path
          d="M16 11.4c.35 2.6 1 3.25 3.6 3.6-2.6.35-3.25 1-3.6 3.6-.35-2.6-1-3.25-3.6-3.6 2.6-.35 3.25-1 3.6-3.6Z"
          fill="url(#sa-grad)"
        />
      </svg>
      {withWordmark && (
        <span className="font-display text-[1.15rem] font-semibold leading-none tracking-tight text-text">
          System<span className="text-brand-soft">.agent</span>
        </span>
      )}
    </span>
  );
}
