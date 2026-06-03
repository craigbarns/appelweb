import { Star } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import { cn } from "@/lib/utils";

type PhoneMockupProps = {
  brand: string;
  trade: string;
  city: string;
  tagline: string;
  phone: string;
  className?: string;
};

export default function PhoneMockup({ brand, trade, city, tagline, phone, className }: PhoneMockupProps) {
  return (
    <div className={cn("relative w-[210px]", className)}>
      <div aria-hidden className="absolute -inset-3 -z-10 rounded-[3rem] bg-electric-500/20 blur-2xl" />

      <div className="relative overflow-hidden rounded-[2.5rem] border-[7px] border-ink-700 bg-ink-950 shadow-float">
        {/* Dynamic island */}
        <div className="absolute left-1/2 top-2.5 z-20 h-[18px] w-[70px] -translate-x-1/2 rounded-full bg-black" />

        {/* Screen */}
        <div className="relative aspect-[9/19] overflow-hidden bg-white">
          {/* Status bar */}
          <div className="flex items-center justify-between px-5 pb-1 pt-3 text-[0.5rem] font-semibold text-ink-900">
            <span>9:41</span>
            <span className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-ink-900" />
              <span className="h-1.5 w-3 rounded-[2px] bg-ink-900" />
            </span>
          </div>

          {/* Nav */}
          <div className="flex items-center justify-between px-3.5 pt-1.5">
            <span className="font-display text-[0.72rem] font-semibold text-ink-900">{brand}</span>
            <span className="rounded-full bg-emerald-500 px-2 py-0.5 text-[0.5rem] font-semibold text-white">
              Appeler
            </span>
          </div>

          {/* Hero */}
          <div className="relative mt-1.5">
            <div className="absolute inset-0 bg-[radial-gradient(120%_100%_at_85%_0%,rgba(47,107,255,0.16),transparent_55%)]" />
            <div className="relative px-3.5 py-2.5">
              <span className="inline-block rounded-full bg-electric-50 px-1.5 py-0.5 text-[0.45rem] font-semibold uppercase tracking-wide text-electric-600">
                {trade} · {city}
              </span>
              <p className="mt-1.5 font-display text-[0.85rem] font-semibold leading-tight text-ink-900">{tagline}</p>
              <div className="mt-2 flex flex-col gap-1">
                <span className="rounded-md bg-electric-500 px-2 py-1 text-center text-[0.5rem] font-semibold text-white">
                  Demander un devis
                </span>
                <span className="rounded-md border border-slate-200 px-2 py-1 text-center text-[0.5rem] font-semibold text-ink-900">
                  {phone}
                </span>
              </div>
              <div className="mt-1.5 flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-2 w-2 fill-amber-400 text-amber-400" />
                ))}
                <span className="ml-1 text-[0.45rem] text-slate-500">4,9 · 87 avis</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="grid grid-cols-3 gap-1 px-3.5 pt-0.5">
            {["Dépannage", "Devis", "Urgence"].map((s) => (
              <div key={s} className="rounded-md border border-slate-100 bg-slate-50 px-1 py-1">
                <div className="h-2.5 w-2.5 rounded bg-electric-gradient" />
                <p className="mt-0.5 text-[0.4rem] font-medium text-slate-600">{s}</p>
              </div>
            ))}
          </div>

          {/* WhatsApp FAB */}
          <div className="absolute bottom-2.5 right-2.5 flex h-7 w-7 items-center justify-center rounded-full bg-[#25D366] shadow-md">
            <WhatsAppIcon className="h-3.5 w-3.5 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}
