import { Star, Phone, Clock, ShieldCheck } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import { cn } from "@/lib/utils";

export type MockupConfig = {
  brand: string;
  trade: string;
  city: string;
  tagline: string;
  phone: string;
  services: string[];
  accent: string;
  tint: string;
  rating: string;
  variant: "classic" | "split" | "urgency";
};

function StatusBar() {
  return (
    <div className="flex items-center justify-between px-5 pb-1 pt-3 text-[0.5rem] font-semibold text-ink-900">
      <span>9:41</span>
      <span className="flex items-center gap-1">
        <span className="h-1.5 w-1.5 rounded-full bg-ink-900" />
        <span className="h-1.5 w-3 rounded-[2px] bg-ink-900" />
      </span>
    </div>
  );
}

function WhatsAppFab() {
  return (
    <div className="absolute bottom-2.5 right-2.5 flex h-7 w-7 items-center justify-center rounded-full bg-[#25D366] shadow-md">
      <WhatsAppIcon className="h-3.5 w-3.5 text-white" />
    </div>
  );
}

/* Variant A — clean white hero, blue plumber feel */
function ClassicLayout({ c }: { c: MockupConfig }) {
  return (
    <>
      <div className="flex items-center justify-between px-3.5 pt-1.5">
        <span className="font-display text-[0.72rem] font-semibold text-ink-900">{c.brand}</span>
        <span className="rounded-full px-2 py-0.5 text-[0.5rem] font-semibold text-white" style={{ backgroundColor: c.accent }}>
          Appeler
        </span>
      </div>
      <div className="relative mt-1.5">
        <div className="absolute inset-0" style={{ background: `radial-gradient(120% 100% at 85% 0%, ${c.accent}29, transparent 55%)` }} />
        <div className="relative px-3.5 py-2.5">
          <span className="inline-block rounded-full px-1.5 py-0.5 text-[0.45rem] font-semibold uppercase tracking-wide" style={{ backgroundColor: c.tint, color: c.accent }}>
            {c.trade} · {c.city}
          </span>
          <p className="mt-1.5 font-display text-[0.85rem] font-semibold leading-tight text-ink-900">{c.tagline}</p>
          <div className="mt-2 flex flex-col gap-1">
            <span className="rounded-md px-2 py-1 text-center text-[0.5rem] font-semibold text-white" style={{ backgroundColor: c.accent }}>
              Demander un devis
            </span>
            <span className="rounded-md border border-slate-200 px-2 py-1 text-center text-[0.5rem] font-semibold text-ink-900">{c.phone}</span>
          </div>
          <div className="mt-1.5 flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-2 w-2 fill-amber-400 text-amber-400" />
            ))}
            <span className="ml-1 text-[0.45rem] text-slate-500">{c.rating}</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-1 px-3.5 pt-0.5">
        {c.services.map((s) => (
          <div key={s} className="rounded-md border border-slate-100 bg-slate-50 px-1 py-1">
            <div className="h-2.5 w-2.5 rounded" style={{ backgroundColor: c.accent }} />
            <p className="mt-0.5 text-[0.4rem] font-medium leading-tight text-slate-600">{s}</p>
          </div>
        ))}
      </div>
      <WhatsAppFab />
    </>
  );
}

/* Variant B — bold colored hero band + promo strip, HVAC feel */
function SplitLayout({ c }: { c: MockupConfig }) {
  return (
    <>
      <div className="flex items-center justify-between px-3.5 pt-1.5">
        <span className="font-display text-[0.72rem] font-semibold text-ink-900">{c.brand}</span>
        <span className="rounded-full border px-2 py-0.5 text-[0.5rem] font-semibold" style={{ borderColor: c.accent, color: c.accent }}>
          Devis
        </span>
      </div>
      <div className="mx-2.5 mt-2 rounded-xl p-2.5 text-white" style={{ backgroundColor: c.accent }}>
        <span className="text-[0.42rem] font-semibold uppercase tracking-wide opacity-90">{c.trade} · {c.city}</span>
        <p className="mt-1 font-display text-[0.8rem] font-semibold leading-tight">{c.tagline}</p>
        <span className="mt-2 inline-block rounded-md bg-white px-2 py-1 text-[0.5rem] font-semibold" style={{ color: c.accent }}>
          Obtenir un devis
        </span>
      </div>
      <div className="mx-2.5 mt-2 flex items-center gap-1 rounded-lg px-2 py-1.5" style={{ backgroundColor: c.tint }}>
        <Clock className="h-2.5 w-2.5" style={{ color: c.accent }} />
        <span className="text-[0.45rem] font-semibold" style={{ color: c.accent }}>−15% avant l&apos;été · sous 24h</span>
      </div>
      <div className="mt-2 space-y-1 px-3.5">
        {c.services.map((s) => (
          <div key={s} className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: c.accent }} />
            <span className="text-[0.5rem] text-slate-700">{s}</span>
          </div>
        ))}
      </div>
      <div className="mx-2.5 mt-2 rounded-md border border-slate-200 px-2 py-1 text-center text-[0.5rem] font-semibold text-ink-900">{c.phone}</div>
      <WhatsAppFab />
    </>
  );
}

/* Variant C — emergency-first layout, big phone CTA, locksmith feel */
function UrgencyLayout({ c }: { c: MockupConfig }) {
  return (
    <>
      <div className="flex items-center justify-between px-3.5 pt-1.5">
        <span className="font-display text-[0.72rem] font-semibold text-ink-900">{c.brand}</span>
        <span className="flex items-center gap-0.5 text-[0.45rem] font-semibold" style={{ color: c.accent }}>
          <ShieldCheck className="h-2.5 w-2.5" /> Agréé assurances
        </span>
      </div>
      <div className="mx-2.5 mt-2 rounded-lg px-2 py-1.5 text-center" style={{ backgroundColor: `${c.accent}1A` }}>
        <span className="text-[0.5rem] font-bold uppercase tracking-wide" style={{ color: c.accent }}>● Urgence 24h/24 — 7j/7</span>
      </div>
      <div className="px-3.5 pt-2 text-center">
        <p className="font-display text-[0.82rem] font-semibold leading-tight text-ink-900">{c.tagline}</p>
        <p className="mt-1 text-[0.45rem] text-slate-500">{c.trade} · {c.city} · sur place en 30 min</p>
        <div className="mt-2 flex items-center justify-center gap-1 rounded-lg py-1.5 text-white" style={{ backgroundColor: c.accent }}>
          <Phone className="h-3 w-3" />
          <span className="text-[0.55rem] font-bold">{c.phone}</span>
        </div>
        <span className="mt-1 inline-block text-[0.45rem] font-semibold text-emerald-600">Devis gratuit immédiat</span>
      </div>
      <div className="grid grid-cols-3 gap-1 px-3.5 pt-2">
        {c.services.map((s) => (
          <div key={s} className="rounded-md border px-1 py-1" style={{ borderColor: `${c.accent}33`, backgroundColor: c.tint }}>
            <div className="h-2.5 w-2.5 rounded" style={{ backgroundColor: c.accent }} />
            <p className="mt-0.5 text-[0.4rem] font-medium leading-tight text-slate-700">{s}</p>
          </div>
        ))}
      </div>
      <WhatsAppFab />
    </>
  );
}

export default function PhoneMockup({ config, className }: { config: MockupConfig; className?: string }) {
  return (
    <div className={cn("relative w-[210px]", className)}>
      <div aria-hidden className="absolute -inset-3 -z-10 rounded-[3rem] blur-2xl" style={{ backgroundColor: config.accent, opacity: 0.18 }} />
      <div className="relative overflow-hidden rounded-[2.5rem] border-[7px] border-ink-700 bg-ink-950 shadow-float">
        <div className="absolute left-1/2 top-2.5 z-20 h-[18px] w-[70px] -translate-x-1/2 rounded-full bg-black" />
        <div className="relative aspect-[9/19] overflow-hidden bg-white">
          <StatusBar />
          {config.variant === "classic" && <ClassicLayout c={config} />}
          {config.variant === "split" && <SplitLayout c={config} />}
          {config.variant === "urgency" && <UrgencyLayout c={config} />}
        </div>
      </div>
    </div>
  );
}
