import { Star, BadgeCheck } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

function Stars() {
  return (
    <span className="inline-flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
      ))}
    </span>
  );
}

export default function Testimonials() {
  return (
    <section id="avis" className="noise relative overflow-hidden bg-ink-950 py-24 sm:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute right-1/4 top-0 h-72 w-[600px] rounded-full bg-electric-600/12 blur-[120px]" />
      </div>

      <div className="container-app relative">
        <SectionHeading
          eyebrow="Avis clients"
          title={
            <>
              Ils reçoivent plus d&apos;appels <span className="text-gradient-electric">chaque semaine</span>
            </>
          }
          description="Plus de 200 artisans nous font confiance partout en France, avec une note moyenne de 4,9/5."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 0.08} className="h-full">
              <figure className="card flex h-full flex-col p-6 hover:-translate-y-1 hover:border-white/20">
                <div className="flex items-center justify-between">
                  <Stars />
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-500">
                    <BadgeCheck className="h-4 w-4 text-electric-400" /> Avis vérifié
                  </span>
                </div>
                <blockquote className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-slate-300">
                  « {t.quote} »
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-electric-gradient text-sm font-semibold text-white">
                    {t.initials}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-slate-400">
                      {t.job} · {t.city}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
