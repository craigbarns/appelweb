"use client";

import { useRef, useState } from "react";
import { GripVertical, MoveHorizontal, Sparkles, Check } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

function AfterSite() {
  return (
    <div className="absolute inset-0 bg-white">
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between border-b border-slate-100 px-4 py-2.5">
          <span className="font-display text-[0.72rem] font-semibold text-ink-900 sm:text-sm">Couverture Martin</span>
          <span className="rounded-full bg-emerald-500 px-2.5 py-1 text-[0.6rem] font-semibold text-white sm:text-xs">Appeler</span>
        </div>
        <div className="relative flex-1 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_85%_-10%,rgba(47,107,255,0.18),transparent_55%)]" />
          <div className="relative flex h-full flex-col justify-center px-4 sm:px-6">
            <span className="w-fit rounded-full bg-electric-50 px-2 py-0.5 text-[0.55rem] font-semibold uppercase tracking-wider text-electric-600 sm:text-[0.65rem]">
              Couvreur à Marseille
            </span>
            <p className="mt-2 font-display text-base font-semibold leading-tight text-ink-900 sm:text-xl">
              Toiture neuve ou réparée, sans mauvaise surprise
            </p>
            <div className="mt-3 flex gap-2">
              <span className="rounded-md bg-electric-500 px-2.5 py-1 text-[0.6rem] font-semibold text-white sm:text-xs">Devis gratuit</span>
              <span className="rounded-md border border-slate-200 px-2.5 py-1 text-[0.6rem] font-semibold text-ink-900 sm:text-xs">04 91 12 34 56</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 px-4 pb-4">
          {["Toiture", "Zinguerie", "Isolation"].map((s) => (
            <div key={s} className="rounded-lg border border-slate-100 bg-slate-50 px-2 py-2">
              <div className="h-4 w-4 rounded bg-electric-gradient" />
              <p className="mt-1 text-[0.55rem] font-medium text-slate-700 sm:text-[0.65rem]">{s}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function BeforeSite() {
  return (
    <div className="absolute inset-0" style={{ background: "#0c7b78", fontFamily: '"Times New Roman", Times, serif' }}>
      <div className="flex h-full flex-col text-center">
        <div className="bg-yellow-300 py-1.5" style={{ borderBottom: "3px ridge #b00000" }}>
          <p className="text-sm font-bold uppercase text-red-700 sm:text-lg" style={{ textShadow: "1px 1px #fff" }}>
            ★ Couverture Martin ★
          </p>
        </div>
        <div className="flex flex-1 flex-col items-center px-3 py-3 text-white">
          <p className="text-[0.7rem] underline decoration-yellow-200 sm:text-sm">Bienvenue sur notre site internet !!!</p>
          <div className="mt-3 flex h-16 w-24 items-center justify-center border-2 border-dashed border-white/70 bg-gray-300 text-[0.55rem] text-gray-700 sm:h-20 sm:w-32 sm:text-[0.65rem]">
            photo_toiture.jpg
          </div>
          <p className="mt-3 text-[0.6rem] sm:text-xs">Pour un devis, appelez le 04.91.XX.XX.XX</p>
          <p className="mt-2 text-[0.6rem] font-bold text-yellow-200 sm:text-xs">⚠ Optimisé pour Internet Explorer 6 ⚠</p>
          <p className="mt-2 text-[0.55rem] text-white/80 sm:text-[0.65rem]">Nombre de visiteurs : 0004213</p>
        </div>
        <div className="bg-blue-900 py-1 text-[0.55rem] text-yellow-300 sm:text-xs">~ © 2009 ~ Site en construction ~</div>
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
          description="Glissez le curseur pour voir la transformation. À gauche, un site dépassé. À droite, un site AppelWeb qui inspire confiance et génère des appels."
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
            {/* New site (base) */}
            <AfterSite />

            {/* Old site (clipped to left) */}
            <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
              <BeforeSite />
            </div>

            {/* Labels */}
            <span className="pointer-events-none absolute left-3 top-3 z-30 rounded-full bg-black/60 px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-wider text-white/90 backdrop-blur sm:text-xs">
              Avant
            </span>
            <span className="pointer-events-none absolute right-3 top-3 z-30 inline-flex items-center gap-1 rounded-full bg-electric-500 px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-wider text-white sm:text-xs">
              <Sparkles className="h-3 w-3" /> Après
            </span>

            {/* Handle */}
            <div
              className="absolute inset-y-0 z-30 w-0.5 bg-white/90"
              style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
            >
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
