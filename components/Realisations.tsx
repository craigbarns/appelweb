import { ArrowRight, TrendingUp } from "lucide-react";
import { REALISATIONS } from "@/lib/data";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import PhoneMockup from "./ui/PhoneMockup";

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
              Des artisans qui <span className="text-gradient-electric">cartonnent</span>
            </>
          }
          description="Des sites pensés pour le mobile et la conversion. Voici le rendu, et les résultats que ça génère."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {REALISATIONS.map((r, i) => (
            <Reveal key={r.brand} delay={i * 0.1} className="h-full">
              <div className="card group flex h-full flex-col items-center p-6 text-center transition-all duration-500 hover:-translate-y-1 hover:border-white/20 sm:p-7">
                <PhoneMockup
                  brand={r.brand}
                  trade={r.trade}
                  city={r.city}
                  tagline={r.tagline}
                  phone={r.phone}
                />

                <span className="mt-7 inline-flex items-center gap-1.5 rounded-full bg-emerald-500/12 px-3 py-1.5 text-sm font-semibold text-emerald-300 ring-1 ring-inset ring-emerald-500/25">
                  <TrendingUp className="h-4 w-4" />
                  {r.result}
                  <span className="font-normal text-emerald-300/70">{r.resultDetail}</span>
                </span>

                <h3 className="mt-4 text-lg font-semibold text-white">{r.brand}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-electric-300">
                  {r.trade} · {r.city}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">{r.description}</p>

                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-electric-400 transition-colors hover:text-electric-300"
                >
                  Je veux le même
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
