import { STATS } from "@/lib/data";
import Reveal from "./ui/Reveal";

export default function ProofBar() {
  return (
    <section
      aria-label="Preuves sociales"
      className="noise relative overflow-hidden border-y border-white/10 bg-ink-950 py-16 sm:py-20"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-64 w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric-600/12 blur-[120px]" />
        <div className="absolute inset-0 bg-grid opacity-25 [mask-image:radial-gradient(60%_100%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="container-app relative">
        <Reveal className="text-center">
          <span className="eyebrow">Ils nous font confiance</span>
        </Reveal>

        <div className="mt-9 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {STATS.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <Reveal key={stat.label} delay={i * 0.08} className="h-full">
                <div className="group flex h-full flex-col items-center rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-center backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-electric-500/30 sm:p-7">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-electric-500/12 text-electric-300 ring-1 ring-inset ring-electric-500/20 transition-colors duration-500 group-hover:bg-electric-gradient group-hover:text-white group-hover:ring-0">
                    <Icon className="h-6 w-6" />
                  </span>
                  <p className="mt-4 font-display text-4xl font-semibold leading-none text-gradient-electric sm:text-5xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm font-medium text-slate-400">{stat.label}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
