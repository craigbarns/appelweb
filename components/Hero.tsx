"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, Phone, Star, PhoneCall, TrendingUp, Check, ShieldCheck } from "lucide-react";
import { CONTACT, TARGETS } from "@/lib/data";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

function Stars({ className = "" }: { className?: string }) {
  return (
    <span className={"inline-flex " + className}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
      ))}
    </span>
  );
}

export default function Hero() {
  return (
    <section id="accueil" className="noise relative overflow-hidden bg-ink-900 pb-24 pt-32 sm:pt-36 lg:pt-44">
      {/* Animated background layers */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-10%] h-[640px] w-[1000px] -translate-x-1/2 rounded-full bg-electric-500/20 blur-[130px]" />
        <div className="absolute -left-24 top-44 h-72 w-72 animate-float-slow rounded-full bg-electric-600/25 blur-[110px]" />
        <div className="absolute -right-10 top-24 h-72 w-72 animate-float-slow rounded-full bg-azure/10 blur-[110px]" style={{ animationDelay: "2s" }} />
        <div className="absolute inset-0 bg-grid opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
      </div>

      <div className="container-app relative">
        <motion.div variants={container} initial="hidden" animate="visible" className="mx-auto max-w-3xl text-center">
          <motion.div variants={item} className="flex justify-center">
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-azure" />
              Sites web pour artisans &amp; entreprises locales
            </span>
          </motion.div>

          <motion.h1 variants={item} className="mt-6 text-balance text-[2.6rem] font-semibold leading-[1.04] sm:text-6xl lg:text-7xl">
            Des sites internet qui{" "}
            <span className="text-gradient-electric">génèrent des appels</span> et des devis.
          </motion.h1>

          <motion.p variants={item} className="mx-auto mt-6 max-w-xl text-balance text-lg text-slate-400">
            Création, hébergement, maintenance et référencement local inclus. Un site moderne qui
            transforme vos visiteurs en clients. À partir de{" "}
            <span className="font-semibold text-white">49€/mois</span>.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#contact" className="btn-primary group w-full sm:w-auto">
              Demander un devis
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a href="#contact" className="btn-ghost w-full sm:w-auto">
              <Phone className="h-4 w-4 text-electric-400" />
              Être rappelé
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5 text-sm text-slate-400">
            <span className="inline-flex items-center gap-2">
              <Stars />
              <span className="font-medium text-slate-300">4,9/5 · +200 artisans</span>
            </span>
            <span className="hidden h-4 w-px bg-white/10 sm:block" />
            <span className="inline-flex items-center gap-1.5">
              <Check className="h-4 w-4 text-electric-400" /> Sans engagement
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-electric-400" /> En ligne en 5 jours
            </span>
          </motion.div>
        </motion.div>

        {/* Hero visual */}
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-16 max-w-4xl sm:mt-20"
        >
          {/* Glow behind window */}
          <div aria-hidden className="absolute inset-x-10 -bottom-10 top-10 rounded-[2rem] bg-electric-500/20 blur-3xl" />

          {/* Browser window */}
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-ink-850 shadow-float">
            <div className="flex items-center gap-2 border-b border-white/10 bg-ink-800/80 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400/80" />
              <span className="h-3 w-3 rounded-full bg-amber-400/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
              <div className="ml-3 flex flex-1 items-center gap-2 rounded-lg border border-white/10 bg-ink-900/80 px-3 py-1.5 text-xs text-slate-400">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                plomberie-berton.fr
              </div>
            </div>

            {/* Mini site preview */}
            <div className="relative">
              <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_80%_-10%,rgba(47,107,255,0.35),transparent_55%)]" />
              <div className="relative px-6 py-8 sm:px-10 sm:py-12">
                <div className="flex items-center justify-between">
                  <span className="font-display text-lg font-semibold text-white">Plomberie Berton</span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500 px-3 py-1.5 text-xs font-semibold text-white">
                    <Phone className="h-3.5 w-3.5" /> Appeler
                  </span>
                </div>

                <div className="mt-8 max-w-md">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-widest text-electric-300">
                    Plombier à Lyon · 24h/24
                  </span>
                  <h3 className="mt-4 font-display text-2xl font-semibold leading-tight text-white sm:text-3xl">
                    Dépannage plomberie rapide &amp; garanti
                  </h3>
                  <p className="mt-3 text-sm text-slate-400">
                    Intervention en moins d&apos;une heure. Devis gratuit, travail soigné.
                  </p>
                  <div className="mt-5 flex flex-wrap items-center gap-2.5">
                    <span className="rounded-lg bg-electric-500 px-4 py-2 text-xs font-semibold text-white">
                      Demander un devis
                    </span>
                    <span className="rounded-lg border border-white/15 px-4 py-2 text-xs font-semibold text-white">
                      06 12 34 56 78
                    </span>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-3 gap-3">
                  {["Dépannage", "Rénovation", "Chauffage"].map((s) => (
                    <div key={s} className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-3">
                      <div className="h-6 w-6 rounded-md bg-electric-gradient" />
                      <p className="mt-2 text-xs font-medium text-slate-200">{s}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Floating cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="absolute -left-4 top-16 hidden sm:block lg:-left-12"
          >
            <div className="animate-float rounded-2xl border border-white/10 bg-ink-800/90 p-3.5 shadow-float backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400">
                  <PhoneCall className="h-5 w-5" />
                  <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-emerald-400">
                    <span className="absolute inset-0 animate-pulse-ring rounded-full bg-emerald-400" />
                  </span>
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">Nouvel appel reçu</p>
                  <p className="text-xs text-slate-400">il y a 2 minutes</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.15 }}
            className="absolute -right-4 top-40 hidden sm:block lg:-right-12"
          >
            <div className="animate-float rounded-2xl border border-white/10 bg-ink-800/90 p-4 shadow-float backdrop-blur-xl" style={{ animationDelay: "1.5s" }}>
              <div className="flex items-center justify-between gap-6">
                <div>
                  <p className="text-xs text-slate-400">Appels ce mois</p>
                  <p className="font-display text-2xl font-semibold text-white">+38%</p>
                </div>
                <TrendingUp className="h-5 w-5 text-emerald-400" />
              </div>
              <div className="mt-3 flex items-end gap-1">
                {[40, 55, 48, 70, 62, 88, 100].map((h, i) => (
                  <span key={i} className="w-2 rounded-sm bg-electric-gradient" style={{ height: `${h * 0.32}px` }} />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="absolute -bottom-8 left-6 hidden sm:block lg:-left-6"
          >
            <div className="animate-float rounded-2xl border border-white/10 bg-ink-800/90 p-4 shadow-float backdrop-blur-xl" style={{ animationDelay: "0.8s" }}>
              <Stars />
              <p className="mt-2 max-w-[180px] text-xs text-slate-300">« Très réactif, site impeccable. »</p>
              <p className="mt-1 text-xs font-medium text-slate-500">Marie L. · Avis Google</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Targets marquee */}
        <div className="relative mt-20 mask-fade-x">
          <div className="flex w-max animate-marquee">
            {[0, 1].map((half) => (
              <div key={half} className="flex items-center" aria-hidden={half === 1}>
                {TARGETS.map((t) => (
                  <span key={t} className="mx-5 inline-flex items-center gap-5 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                    {t}
                    <span className="text-electric-500/50">◆</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
