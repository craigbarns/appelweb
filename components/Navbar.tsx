"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import Logo from "./Logo";
import { NAV_LINKS, CONTACT } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 transition-all duration-300", scrolled ? "py-3" : "py-4 sm:py-5")}>
      <div className="container-app">
        <nav
          className={cn(
            "flex items-center justify-between rounded-2xl px-3 py-2.5 transition-all duration-300 sm:px-4",
            scrolled
              ? "border border-white/10 bg-ink-900/70 shadow-card backdrop-blur-xl"
              : "border border-transparent"
          )}
        >
          <a href="#accueil" aria-label="AppelWeb — Accueil" className="shrink-0">
            <Logo />
          </a>

          <div className="hidden items-center gap-0.5 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-slate-200 transition-colors hover:text-white"
            >
              <Phone className="h-4 w-4 text-electric-400" />
              {CONTACT.phoneDisplay}
            </a>
            <a href="#contact" className="btn-primary px-5 py-2.5 text-sm">
              Demander un devis
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10 lg:hidden"
            aria-label="Ouvrir le menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            <div className="absolute inset-0 bg-ink-950/80 backdrop-blur-sm" onClick={() => setOpen(false)} />
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 320 }}
              className="absolute inset-x-0 top-0 rounded-b-3xl border-b border-white/10 bg-ink-900 p-5 pt-5 shadow-float"
            >
              <div className="flex items-center justify-between">
                <Logo />
                <button
                  onClick={() => setOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white"
                  aria-label="Fermer le menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-6 flex flex-col gap-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i + 0.05 }}
                    className="rounded-xl px-4 py-3 text-lg font-medium text-slate-200 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>

              <div className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-5">
                <a href="#contact" onClick={() => setOpen(false)} className="btn-primary w-full">
                  Demander un devis
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href={CONTACT.phoneHref} className="btn-ghost w-full">
                  <Phone className="h-4 w-4 text-electric-400" />
                  {CONTACT.phoneDisplay}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
