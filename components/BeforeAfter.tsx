"use client";

import { useRef, useState } from "react";
import { GripVertical, MoveHorizontal, Sparkles, Check, Phone, Star } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

const PHOTO = "/img/toiture.webp";
const BRAND = "Couverture Durand";

/* The site AppelWeb would build — real photo, modern, conversion-focused */
function AfterSite() {
  return (
    <div className="absolute inset-0 bg-ink-950">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={PHOTO} alt="Site internet moderne d'un couvreur réalisé par AppelWeb" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-tr from-ink-950/92 via-ink-950/55 to-ink-950/15" />

      <div className="absolute inset-x-0 top-0 flex items-center justify-between px-4 py-3 sm:px-6">
        <span className="font-display text-sm font-semibold text-white sm:text-lg">{BRAND}</span>
        <div className="hidden items-center gap-4 text-xs font-medium text-white/85 lg:flex">
          <span>Accueil</span>
          <span>Services</span>
          <span>Réalisations</span>
          <span>Avis</span>
        </div>
        <span className="rounded-full bg-electric-500 px-3.5 py-1.5 text-[0.7rem] font-semibold text-white sm:text-xs">
          Devis gratuit
        </span>
      </div>

      <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6">
        <span className="w-fit rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-wider text-white backdrop-blur sm:text-xs">
          Couvreur à Nice · 15 ans d&apos;expérience
        </span>
        <h3 className="mt-3 max-w-[82%] font-display text-xl font-semibold leading-tight text-white sm:text-3xl lg:text-4xl">
          Toiture neuve, rénovation &amp; étanchéité
        </h3>
        <p className="mt-2 max-w-[70%] text-xs text-white/75 sm:text-sm">Devis gratuit sous 24h. Travail garanti 10 ans.</p>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="rounded-lg bg-electric-500 px-3.5 py-2 text-[0.7rem] font-semibold text-white shadow-glow-sm sm:text-xs">
            Demander un devis
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/30 bg-white/5 px-3.5 py-2 text-[0.7rem] font-semibold text-white backdrop-blur sm:text-xs">
            <Phone className="h-3 w-3" />
            04 93 12 34 56
          </span>
        </div>
        <div className="mt-3 flex items-center gap-1.5">
          <span className="inline-flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
            ))}
          </span>
          <span className="text-[0.65rem] text-white/80 sm:text-xs">4,9 sur Google · 126 avis</span>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 hidden grid-cols-3 gap-px bg-white/10 sm:grid">
        {["Toiture", "Zinguerie", "Étanchéité"].map((s) => (
          <div key={s} className="bg-ink-950/70 px-3 py-2.5 text-center text-[0.7rem] font-medium text-white backdrop-blur">
            {s}
          </div>
        ))}
      </div>
    </div>
  );
}

/* The old site — same business, dated 2008 look (the real photo, mistreated) */
function BeforeSite() {
  return (
    <div className="absolute inset-0 flex flex-col overflow-hidden" style={{ background: "#0c6b6b", fontFamily: '"Times New Roman", Times, serif' }}>
      <div className="py-1.5 text-center" style={{ background: "linear-gradient(#ffe14d,#f5c518)", borderBottom: "3px ridge #b00000" }}>
        <p className="text-sm font-bold uppercase tracking-wide text-red-700 sm:text-xl" style={{ textShadow: "1px 1px #fff" }}>
          ★ Couverture Durand ★
        </p>
      </div>

      <div className="bg-blue-950/40 py-1 text-center text-[0.55rem] text-yellow-200 sm:text-xs">
        <span className="underline">Accueil</span> | <span className="underline">Nos services</span> |{" "}
        <span className="underline">Livre d&apos;or</span> | <span className="underline">Contact</span>
      </div>

      <div className="flex flex-1 flex-col items-center px-3 py-3 text-center text-white">
        <p className="text-[0.7rem] font-bold underline decoration-yellow-300 sm:text-base">
          Bienvenue sur notre site internet !!!
        </p>
        <div className="mt-2.5 inline-block bg-white p-1" style={{ border: "3px ridge #cccccc" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={PHOTO} alt="toiture" className="h-14 w-24 object-cover sm:h-20 sm:w-32" style={{ filter: "sepia(0.5) saturate(0.8) contrast(0.9)" }} />
          <p className="text-[0.5rem] text-gray-600 sm:text-[0.6rem]">photo_toiture.jpg</p>
        </div>
        <p className="mt-2 text-[0.6rem] sm:text-xs">Pour un devis gratuit, appelez le 04.93.XX.XX.XX</p>
        <p className="mt-1.5 animate-pulse text-[0.6rem] font-bold text-yellow-300 sm:text-sm">★ NOUVEAU ★</p>
        <p className="mt-1 text-[0.55rem] sm:text-[0.65rem]">⚠ Site optimisé pour Internet Explorer 6 ⚠</p>
        <p className="mt-1.5 text-[0.5rem] text-white/80 sm:text-[0.6rem]">Vous êtes le visiteur n° 0004213</p>
      </div>

      <div className="bg-blue-950 py-1 text-center text-[0.5rem] text-yellow-300 sm:text-xs">
        ~ © 2008 ~ Site en construction 🚧 ~ Devis gratuit ~
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  const [pos, setPos] = useState(52);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateFromClientX = (clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(3, Math.min(97, p)));
  };

  return (
    <section id="realisations" className="noise relative overflow-hidden bg-ink-950 py-24 sm:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-80 w-[700px] -translate-x-1/2 rounded-full bg-electric-600/15 blur-[120px]" />
      </div>

      <div className="container-app relative">
        <SectionHeading
          eyebrow="Avant / Après"
          title={
            <>
              Le jour et la nuit pour <span className="text-gradient-electric">votre image</span>
            </>
          }
          description="Le même couvreur, deux sites. Glissez le curseur : à gauche, un site dépassé qui fait fuir. À droite, un site AppelWeb qui inspire confiance et génère des appels."
        />

        <Reveal className="mx-auto mt-14 max-w-4xl">
          <div
            ref={containerRef}
            className="relative aspect-[4/3] w-full select-none overflow-hidden rounded-2xl border border-white/10 shadow-float sm:aspect-[16/10]"
            style={{ touchAction: "none" }}
            onPointerDown={(e) => {
              dragging.current = true;
              (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
              updateFromClientX(e.clientX);
            }}
            onPointerMove={(e) => dragging.current && updateFromClientX(e.clientX)}
            onPointerUp={() => (dragging.current = false)}
            onPointerCancel={() => (dragging.current = false)}
          >
            <AfterSite />

            <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
              <BeforeSite />
            </div>

            <span className="pointer-events-none absolute left-3 top-3 z-30 rounded-full bg-black/60 px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-wider text-white/90 backdrop-blur sm:text-xs">
              Avant
            </span>
            <span className="pointer-events-none absolute right-3 top-3 z-30 inline-flex items-center gap-1 rounded-full bg-electric-500 px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-wider text-white sm:text-xs">
              <Sparkles className="h-3 w-3" /> Après
            </span>

            <div className="absolute inset-y-0 z-30 w-0.5 bg-white/90" style={{ left: `${pos}%`, transform: "translateX(-50%)" }}>
              <div
                role="slider"
                aria-label="Comparer avant et après"
                aria-valuenow={Math.round(pos)}
                aria-valuemin={0}
                aria-valuemax={100}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "ArrowLeft") setPos((p) => Math.max(3, p - 4));
                  if (e.key === "ArrowRight") setPos((p) => Math.min(97, p + 4));
                }}
                className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full border border-white/30 bg-ink-900/90 text-white shadow-glow backdrop-blur transition-colors hover:bg-ink-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-400"
              >
                <GripVertical className="h-5 w-5" />
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-6 flex max-w-4xl flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-400">
          <span className="inline-flex items-center gap-1.5">
            <MoveHorizontal className="h-4 w-4 text-electric-400" /> Glissez pour comparer
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Check className="h-4 w-4 text-emerald-400" /> Refonte offerte la 1<sup>re</sup> année
          </span>
        </Reveal>
      </div>
    </section>
  );
}
