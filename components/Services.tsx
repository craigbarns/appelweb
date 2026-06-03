import { ArrowRight } from "lucide-react";
import { SERVICES, type Service } from "@/lib/data";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { cn } from "@/lib/utils";

function ServiceCard({ service, featured = false }: { service: Service; featured?: boolean }) {
  const { icon: Icon, title, description, highlights } = service;
  return (
    <div
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-ink-900/[0.07] bg-white p-7 shadow-card-light transition-all duration-500 hover:-translate-y-1 hover:border-electric-500/30 hover:shadow-glow-sm",
        featured && "lg:flex-row lg:items-center lg:gap-8 lg:p-8"
      )}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric-500/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
      <div className={cn(featured && "lg:flex-1")}>
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-electric-50 text-electric-600 ring-1 ring-inset ring-electric-500/10 transition-all duration-500 group-hover:bg-electric-gradient group-hover:text-white group-hover:ring-0">
          <Icon className="h-6 w-6" />
        </span>
        <h3 className="mt-5 text-xl font-semibold text-ink-900">{title}</h3>
        <p className="mt-2.5 text-[0.95rem] leading-relaxed text-slate-600">{description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {highlights.map((h) => (
            <span key={h} className="rounded-full bg-ink-900/[0.05] px-3 py-1 text-xs font-medium text-slate-700">
              {h}
            </span>
          ))}
        </div>
      </div>

      {featured && (
        <div className="mt-7 lg:mt-0 lg:w-64 lg:shrink-0">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-ink-850 p-5">
            <div aria-hidden className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-electric-500/30 blur-2xl" />
            <div className="relative">
              <div className="flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-white/25" />
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="h-2 w-2 rounded-full bg-white/15" />
              </div>
              <div className="mt-4 h-2.5 w-2/3 rounded-full bg-white/20" />
              <div className="mt-2 h-2.5 w-1/2 rounded-full bg-white/10" />
              <div className="mt-5 inline-flex items-center gap-1.5 rounded-lg bg-electric-gradient px-3 py-1.5 text-xs font-semibold text-white">
                Demander un devis
                <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative bg-white py-24 sm:py-28">
      <div className="container-app">
        <SectionHeading
          theme="onLight"
          eyebrow="Nos services"
          title={
            <>
              Tout pour être <span className="text-electric-500">visible</span> et recevoir des appels
            </>
          }
          description="Un seul partenaire pour votre présence en ligne. On crée, on héberge, on référence et on entretient votre site, pendant que vous vous concentrez sur votre métier."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal
              key={service.title}
              delay={i * 0.06}
              className={cn("h-full", i === 0 && "sm:col-span-2 lg:col-span-2")}
            >
              <ServiceCard service={service} featured={i === 0} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
