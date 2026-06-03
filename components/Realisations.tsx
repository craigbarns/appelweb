import { ArrowRight, Check } from "lucide-react";
import { REALISATIONS } from "@/lib/data";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import SiteShowcase from "./ui/SiteShowcase";
import { cn } from "@/lib/utils";

export default function Realisations() {
  return (
    <section className="noise relative overflow-hidden bg-ink-900 py-24 sm:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-10 h-72 w-[800px] -translate-x-1/2 rounded-full bg-electric-600/12 blur-[120px]" />
      </div>

      <div className="container-app relative">
        <SectionHeading
          eyebrow="Réalisations"
          title={
            <>
              Des sites <span className="text-gradient-electric">sur-mesure</span> qui rapportent
            </>
          }
          description="Chaque artisan a son design, ses couleurs et son site responsive. Voici des exemples, sur ordinateur et sur mobile."
        />

        <div className="mt-16 flex flex-col gap-20 sm:gap-24 lg:gap-28">
          {REALISATIONS.map((r, i) => {
            const flip = i % 2 === 1;
            return (
              <Reveal key={r.brand}>
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                  <div className={cn("relative", flip && "lg:order-2")}>
                    <SiteShowcase data={r} />
                  </div>

                  <div className={cn(flip && "lg:order-1")}>
                    <span
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider"
                      style={{ color: r.accent }}
                    >
                      <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: r.accent }} />
                      {r.trade} · {r.city}
                    </span>

                    <h3 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">{r.brand}</h3>

                    <div className="mt-4 flex items-baseline gap-2">
                      <span className="font-display text-3xl font-semibold sm:text-4xl" style={{ color: r.accent }}>
                        {r.result}
                      </span>
                      <span className="text-sm text-slate-400">{r.resultDetail}</span>
                    </div>

                    <p className="mt-4 max-w-md text-slate-400">{r.description}</p>

                    <ul className="mt-6 flex flex-col gap-2.5">
                      {r.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2.5 text-sm text-slate-300">
                          <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-electric-500/15">
                            <Check className="h-3 w-3 text-electric-300" />
                          </span>
                          {h}
                        </li>
                      ))}
                    </ul>

                    <a href="#contact" className="btn-primary mt-8">
                      Je veux le même
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
