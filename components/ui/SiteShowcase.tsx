import { Phone, Star, Menu } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import type { Realisation } from "@/lib/data";

function Stars({ count = 5, className = "h-3 w-3" }: { count?: number; className?: string }) {
  return (
    <span className="inline-flex">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className={`${className} fill-amber-400 text-amber-400`} />
      ))}
    </span>
  );
}

export default function SiteShowcase({ data }: { data: Realisation }) {
  const { brand, trade, city, tagline, phone, accent, image, domain } = data;

  return (
    <div className="relative">
      <div aria-hidden className="absolute -inset-4 -z-10 rounded-[2rem] blur-3xl" style={{ backgroundColor: accent, opacity: 0.14 }} />

      {/* Desktop browser */}
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-ink-850 shadow-float">
        <div className="flex items-center gap-2 border-b border-white/10 bg-ink-800/80 px-3 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          <div className="ml-2 hidden flex-1 items-center gap-1.5 rounded-md bg-ink-900/80 px-2.5 py-1 text-[0.65rem] text-slate-400 sm:flex">
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: accent }} />
            {domain}
          </div>
        </div>

        <div className="relative aspect-[16/10]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image} alt={`Aperçu du site ${brand}, ${trade.toLowerCase()} à ${city}`} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950/92 via-ink-950/65 to-ink-950/25" />

          <div className="absolute inset-x-0 top-0 flex items-center justify-between px-4 py-3 sm:px-5">
            <span className="font-display text-sm font-semibold text-white sm:text-base">{brand}</span>
            <div className="hidden items-center gap-4 text-[0.7rem] font-medium text-white/80 md:flex">
              <span>Accueil</span>
              <span>Services</span>
              <span>Avis</span>
            </div>
            <span className="rounded-full px-3 py-1.5 text-[0.7rem] font-semibold text-white" style={{ backgroundColor: accent }}>
              Devis gratuit
            </span>
          </div>

          <div className="absolute inset-0 flex flex-col justify-center px-5 sm:px-7">
            <span className="w-fit rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-wider text-white backdrop-blur">
              {trade} · {city}
            </span>
            <h3 className="mt-3 max-w-[78%] font-display text-xl font-semibold leading-tight text-white sm:text-3xl">{tagline}</h3>
            <p className="mt-2 max-w-[64%] text-[0.7rem] text-white/70 sm:text-sm">Intervention rapide, devis gratuit et travail garanti.</p>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="rounded-lg px-3 py-1.5 text-[0.7rem] font-semibold text-white" style={{ backgroundColor: accent }}>
                Demander un devis
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/30 px-3 py-1.5 text-[0.7rem] font-semibold text-white">
                <Phone className="h-3 w-3" />
                {phone}
              </span>
            </div>
            <div className="mt-3 flex items-center gap-1.5">
              <Stars />
              <span className="text-[0.65rem] text-white/80">4,9 sur Google</span>
            </div>
          </div>
        </div>
      </div>

      {/* Phone — mobile version */}
      <div className="absolute -bottom-6 right-3 w-[26%] min-w-[92px] max-w-[136px] sm:-right-6">
        <div className="overflow-hidden rounded-[1.4rem] border-[4px] border-ink-700 bg-ink-950 shadow-float">
          <div className="relative aspect-[9/19] bg-white">
            <div className="absolute left-1/2 top-1 z-10 h-2.5 w-9 -translate-x-1/2 rounded-full bg-black" />

            <div className="relative h-[46%]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 to-ink-950/20" />
              <div className="absolute inset-x-0 top-0 flex items-center justify-between px-2 pt-2">
                <span className="text-[0.5rem] font-semibold text-white">{brand}</span>
                <Menu className="h-2.5 w-2.5 text-white" />
              </div>
              <p className="absolute inset-x-0 bottom-1.5 px-2 font-display text-[0.58rem] font-semibold leading-tight text-white">{tagline}</p>
            </div>

            <div className="px-2 py-2">
              <span className="block rounded-md px-1 py-1 text-center text-[0.5rem] font-semibold text-white" style={{ backgroundColor: accent }}>
                Demander un devis
              </span>
              <span className="mt-1 flex items-center justify-center gap-1 rounded-md border border-slate-200 px-1 py-1 text-[0.5rem] font-semibold text-ink-900">
                <Phone className="h-2 w-2" />
                {phone}
              </span>
              <div className="mt-1.5 flex items-center gap-0.5">
                <Stars count={5} className="h-1.5 w-1.5" />
                <span className="ml-0.5 text-[0.42rem] text-slate-500">4,9</span>
              </div>
            </div>

            <div className="absolute bottom-1.5 right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#25D366]">
              <WhatsAppIcon className="h-2.5 w-2.5 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
