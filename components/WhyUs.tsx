import { ArrowRight } from "lucide-react";
import { FEATURES } from "@/lib/data";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

export default function WhyUs() {
  return (
    <section id="pourquoi" className="relative bg-slate-50 py-24 sm:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-light opacity-70 [mask-image:radial-gradient(70%_60%_at_50%_30%,black,transparent)]" />
      <div className="container-app relative">
        <SectionHeading
          theme="onLight"
          eyebrow="Pourquoi AppelWeb"
          title={
            <>
              Pensé pour <span className="text-electric-500">convertir</span>, pas juste pour exister
            </>
          }
          description="Chaque détail de votre site est conçu pour transformer un visiteur en appel ou en demande de devis."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <Reveal key={feature.title} delay={(i % 4) * 0.06} className="h-full">
                <div className="group h-full rounded-2xl border border-ink-900/[0.07] bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-electric-500/30 hover:shadow-card-light">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-electric-50 text-electric-600 transition-all duration-500 group-hover:bg-electric-gradient group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-ink-900">{feature.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{feature.description}</p>
                </div>
              </Reveal>
            );
          })}

          <Reveal delay={0.12} className="h-full">
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-electric-gradient p-6 text-white shadow-glow">
              <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(255,255,255,0.3),transparent_55%)]" />
              <div className="relative">
                <p className="font-display text-lg font-semibold">Tout est inclus.</p>
                <p className="mt-1.5 text-sm text-white/85">Hébergement, maintenance et SEO. Zéro frais caché, jamais.</p>
              </div>
              <a
                href="#tarifs"
                className="relative mt-5 inline-flex items-center gap-1.5 self-start rounded-full bg-white px-4 py-2 text-sm font-semibold text-electric-600 transition-transform hover:-translate-y-0.5"
              >
                Voir les tarifs
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
