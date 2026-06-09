import { Mail, Instagram, Facebook, Linkedin } from "lucide-react";
import { siteConfig, navLinks, waLink, waMessages } from "@/lib/site-config";
import Logo from "./Logo";
import WhatsAppIcon from "./WhatsAppIcon";

const year = new Date().getFullYear();

const socials = [
  { href: siteConfig.social.instagram, label: "Instagram", icon: Instagram },
  { href: siteConfig.social.facebook, label: "Facebook", icon: Facebook },
  { href: siteConfig.social.linkedin, label: "LinkedIn", icon: Linkedin },
].filter((s) => s.href);

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-bg-soft">
      <div className="container-x py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          {/* Marca */}
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              {siteConfig.description}
            </p>
            <div className="mt-5 flex items-center gap-3">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-muted transition hover:border-brand/40 hover:text-brand-soft"
                  >
                    <Icon size={17} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navegación */}
          <div>
            <h4 className="text-sm font-semibold text-text">Navegación</h4>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-muted transition hover:text-text">
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="/#agenda" className="text-sm text-muted transition hover:text-text">
                  Agendá una demo
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-sm font-semibold text-text">Contacto</h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={waLink(waMessages.footer)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-muted transition hover:text-text"
                >
                  <WhatsAppIcon size={16} className="text-brand-soft" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2.5 text-sm text-muted transition hover:text-text"
                >
                  <Mail size={16} className="text-brand-soft" />
                  {siteConfig.email}
                </a>
              </li>
              {siteConfig.social.instagramHandle && (
                <li>
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-sm text-muted transition hover:text-text"
                  >
                    <Instagram size={16} className="text-brand-soft" />
                    {siteConfig.social.instagramHandle}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-muted">
            © {year} {siteConfig.name}. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-5 text-xs text-muted">
            <a href="/privacidad" className="transition hover:text-text">
              Privacidad
            </a>
            <a href="/terminos" className="transition hover:text-text">
              Términos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
