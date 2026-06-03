import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowLeft, Phone, PhoneCall, Clock, ShieldCheck } from "lucide-react";
import Logo from "@/components/Logo";
import { CONTACT } from "@/lib/data";

export const metadata: Metadata = {
  title: "Merci — votre demande est bien envoyée",
  description: "Votre demande de devis a bien été reçue. Notre équipe vous rappelle sous 24h.",
  robots: { index: false, follow: false },
};

const steps = [
  { icon: Check, title: "Demande reçue", text: "Votre demande nous est bien parvenue." },
  { icon: PhoneCall, title: "On vous rappelle", text: "Un expert vous contacte sous 24h." },
  { icon: ShieldCheck, title: "Devis gratuit", text: "Sans engagement, ni surprise." },
];

export default function MerciPage() {
  return (
    <main className="noise relative flex min-h-screen flex-col overflow-hidden bg-ink-900">
      {/* Background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-10%] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-electric-500/20 blur-[130px]" />
        <div className="absolute inset-0 bg-grid opacity-50 [mask-image:radial-gradient(60%_55%_at_50%_40%,black,transparent)]" />
      </div>

      <header className="container-app relative py-6">
        <Link href="/" aria-label="AppelWeb — Accueil">
          <Logo />
        </Link>
      </header>

      <div className="container-app relative flex flex-1 items-center justify-center py-12">
        <div className="mx-auto max-w-2xl text-center">
          <div className="relative mx-auto flex h-20 w-20 items-center justify-center">
            <span aria-hidden className="absolute inset-0 animate-pulse-ring rounded-full bg-emerald-400/60" />
            <span className="relative inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-400/30">
              <Check className="h-10 w-10" />
            </span>
          </div>

          <span className="eyebrow mt-7">Demande envoyée</span>

          <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.08] sm:text-5xl">
            Merci ! Votre demande est <span className="text-gradient-electric">bien envoyée</span>.
          </h1>

          <p className="mx-auto mt-5 max-w-md text-lg text-slate-400">
            Notre équipe vous rappelle sous 24h pour discuter de votre projet et vous préparer un
            devis gratuit, sans engagement.
          </p>

          <div className="mx-auto mt-10 grid max-w-xl gap-4 sm:grid-cols-3">
            {steps.map((s) => (
              <div key={s.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-left">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-electric-500/15 text-electric-300">
                  <s.icon className="h-5 w-5" />
                </span>
                <p className="mt-3 text-sm font-semibold text-white">{s.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-slate-400">{s.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={CONTACT.phoneHref} className="btn-primary w-full sm:w-auto">
              <Phone className="h-4 w-4" />
              Appeler maintenant
            </a>
            <Link href="/" className="btn-ghost w-full sm:w-auto">
              <ArrowLeft className="h-4 w-4" />
              Retour à l&apos;accueil
            </Link>
          </div>

          <p className="mt-8 inline-flex items-center gap-2 text-sm text-slate-500">
            <Clock className="h-4 w-4 text-electric-400" />
            Besoin d&apos;une réponse immédiate ? Appelez le {CONTACT.phoneDisplay}.
          </p>
        </div>
      </div>
    </main>
  );
}
