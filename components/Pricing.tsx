import { Check, Sparkles, ArrowRight } from "lucide-react";
import { PLANS, type Plan } from "@/lib/data";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

function PricingCard({ plan }: { plan: Plan }) {
  const { name, price, tagline, features, cta, featured } = plan;

  if (featured) {
    return (
      <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-electric-500/40 bg-ink-900 p-7 shadow-glow-lg lg:-my-4 lg:py-11">
        <div aria-hidden className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_50%_-40%,rgba(47,107,255,0.55),transparent_70%)]" />
        <div className="relative flex h-full flex-col">
          <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-electric-500/15 px-3 py-1 text-xs font-semibold text-electric-300 ring-1 ring-inset ring-electric-500/30">
            <Sparkles className="h-3.5 w-3.5" /> Le plus populaire
          </span>
          <h3 className="mt-4 font-display text-xl font-semibold text-white">{name}</h3>
          <p className="mt-1.5 text-sm text-slate-400">{tagline}</p>
          <div className="mt-5 flex items-baseline gap-1">
            <span className="font-display text-5xl font-semibold text-white">{price}€</span>
            <span className="text-sm text-slate-400">/mois</span>
          </div>
          <a href="#contact" className="btn-primary mt-6 w-full">
            {cta}
            <ArrowRight className="h-4 w-4" />
          </a>
          <div className="my-6 h-px bg-white/10" />
          <ul className="flex flex-1 flex-col gap-3">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm text-slate-200">
                <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-electric-500/20">
                  <Check className="h-3 w-3 text-electric-300" />
                </span>
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex h-full flex-col rounded-3xl border border-ink-900/[0.08] bg-white p-7 shadow-card-light transition-all duration-500 hover:-translate-y-1 hover:shadow-glow-sm">
      <h3 className="font-display text-xl font-semibold text-ink-900">{name}</h3>
      <p className="mt-1.5 text-sm text-slate-600">{tagline}</p>
      <div className="mt-5 flex items-baseline gap-1">
        <span className="font-display text-5xl font-semibold text-ink-900">{price}€</span>
        <span className="text-sm text-slate-500">/mois</span>
      </div>
      <a href="#contact" className="btn-dark mt-6 w-full">
        {cta}
      </a>
      <div className="my-6 h-px bg-ink-900/10" />
      <ul className="flex flex-1 flex-col gap-3">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm text-slate-700">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-electric-500" />
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Pricing() {
  return (
    <section id="tarifs" className="relative bg-white py-24 sm:py-28">
      <div className="container-app">
        <SectionHeading
          theme="onLight"
          eyebrow="Tarifs"
          title={
            <>
              Un abonnement simple, <span className="text-electric-500">tout compris</span>
            </>
          }
          description="Aucun gros budget à sortir. Un prix mensuel clair, sans engagement, qui inclut la création, l'hébergement, la maintenance et le référencement."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3 lg:items-stretch">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.1} className="h-full">
              <PricingCard plan={plan} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-10 text-center text-sm text-slate-500">
            Sans engagement · Résiliable à tout moment · Frais de mise en service offerts
          </p>
        </Reveal>
      </div>
    </section>
  );
}
