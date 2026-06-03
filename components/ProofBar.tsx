import { STATS } from "@/lib/data";
import Reveal from "./ui/Reveal";

export default function ProofBar() {
  return (
    <section aria-label="Chiffres clés" className="relative border-y border-white/10 bg-ink-950 py-10 sm:py-12">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(60%_100%_at_50%_50%,black,transparent)]" />
      <div className="container-app relative">
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="text-center">
              <p className="font-display text-4xl font-semibold leading-none text-gradient-electric sm:text-5xl">
                {s.value}
              </p>
              <p className="mt-2.5 text-sm font-medium text-slate-400">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
