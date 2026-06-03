"use client";

import { motion } from "framer-motion";
import { STEPS } from "@/lib/data";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

export default function Process() {
  return (
    <section id="processus" className="noise relative overflow-hidden bg-ink-900 py-24 sm:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid opacity-50 [mask-image:radial-gradient(70%_60%_at_50%_40%,black,transparent)]" />
        <div className="absolute left-1/2 top-10 h-72 w-[800px] -translate-x-1/2 rounded-full bg-electric-600/15 blur-[120px]" />
      </div>

      <div className="container-app relative">
        <SectionHeading
          eyebrow="Comment ça marche"
          title={
            <>
              Votre site en ligne en <span className="text-gradient-electric">4 étapes simples</span>
            </>
          }
          description="Un processus clair, rapide et sans jargon. On s'occupe de la technique, vous vous occupez de vos clients."
        />

        <div className="relative mt-16">
          {/* Connecting line (desktop) */}
          <div aria-hidden className="absolute left-[12%] right-[12%] top-7 hidden h-px bg-white/10 lg:block" />
          <motion.div
            aria-hidden
            className="absolute left-[12%] top-7 hidden h-px origin-left bg-gradient-to-r from-electric-500 to-azure lg:block"
            style={{ right: "12%" }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          />

          <div className="grid gap-10 sm:gap-12 lg:grid-cols-4">
            {STEPS.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.12}>
                <div className="relative flex items-start gap-4 lg:block">
                  <span className="relative z-10 inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-ink-800 font-display text-lg font-semibold text-white shadow-glow-sm">
                    {step.number}
                    <span aria-hidden className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-electric-500 ring-4 ring-ink-900" />
                  </span>
                  <div className="lg:mt-6">
                    <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-slate-400 lg:pr-6">{step.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
