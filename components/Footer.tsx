import { Phone, Mail, MapPin, ArrowRight, MessageCircle } from "lucide-react";
import Logo from "./Logo";
import { CONTACT } from "@/lib/data";
import { cn } from "@/lib/utils";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6.02 4.39 11.01 10.13 11.93v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.08 24 18.09 24 12.07z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.43.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.43.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 01-1.38-.9 3.7 3.7 0 01-.9-1.38c-.16-.43-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.43-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 3.68a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zm0 10.16a4 4 0 110-8 4 4 0 010 8zm6.41-10.4a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.13 2.06 2.06 0 010 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

const socials = [
  { label: "Facebook", href: "#", Icon: FacebookIcon },
  { label: "Instagram", href: "#", Icon: InstagramIcon },
  { label: "LinkedIn", href: "#", Icon: LinkedinIcon },
];

const serviceLinks = [
  { label: "Création de site", href: "#services" },
  { label: "Refonte de site", href: "#services" },
  { label: "Référencement local", href: "#services" },
  { label: "Google Business", href: "#services" },
  { label: "Maintenance", href: "#services" },
];

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Réalisations", href: "#realisations" },
  { label: "Pourquoi nous", href: "#pourquoi" },
  { label: "Tarifs", href: "#tarifs" },
  { label: "Avis clients", href: "#avis" },
];

function FooterCol({
  title,
  links,
  className,
}: {
  title: string;
  links: { label: string; href: string }[];
  className?: string;
}) {
  return (
    <div className={className}>
      <p className="text-sm font-semibold text-white">{title}</p>
      <ul className="mt-4 flex flex-col gap-3">
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} className="text-sm text-slate-400 transition-colors hover:text-white">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink-950 pt-16">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric-500/40 to-transparent" />

      <div className="container-app relative">
        <div className="grid gap-10 pb-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              Des sites internet modernes qui génèrent des appels et des devis pour les artisans et
              entreprises locales.
            </p>
            <div className="mt-5 flex gap-2.5">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition-all hover:-translate-y-0.5 hover:border-electric-500/30 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol className="lg:col-span-2" title="Services" links={serviceLinks} />
          <FooterCol className="lg:col-span-2" title="Navigation" links={navLinks} />

          <div className="lg:col-span-4">
            <p className="text-sm font-semibold text-white">Contact</p>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-slate-400">
              <li>
                <a href={CONTACT.phoneHref} className="inline-flex items-center gap-2 transition-colors hover:text-white">
                  <Phone className="h-4 w-4 text-electric-400" />
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-white"
                >
                  <MessageCircle className="h-4 w-4 text-electric-400" />
                  WhatsApp · {CONTACT.whatsappDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="inline-flex items-center gap-2 transition-colors hover:text-white">
                  <Mail className="h-4 w-4 text-electric-400" />
                  {CONTACT.email}
                </a>
              </li>
              <li className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-electric-400" />
                France entière
              </li>
            </ul>
            <a href="#contact" className="btn-primary mt-6 px-5 py-2.5 text-sm">
              Demander un devis
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 sm:flex-row">
          <p className="text-xs text-slate-500">© {year} AppelWeb. Tous droits réservés.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-slate-500">
            <a href="#" className="transition-colors hover:text-slate-300">Mentions légales</a>
            <a href="#" className="transition-colors hover:text-slate-300">Politique de confidentialité</a>
            <a href="#" className="transition-colors hover:text-slate-300">CGV</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
