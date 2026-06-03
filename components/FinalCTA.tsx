"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Phone, ArrowRight, Clock, ShieldCheck, CalendarCheck } from "lucide-react";
import { CONTACT } from "@/lib/data";

const METIERS = ["Plombier", "Électricien", "Couvreur", "Serrurier", "Climaticien", "Maçon", "Autre artisan"];

type Status = "idle" | "submitting" | "error";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.002-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const trust = [
  { icon: Clock, label: "Réponse sous 24h" },
  { icon: ShieldCheck, label: "Sans engagement" },
  { icon: CalendarCheck, label: "Devis 100% gratuit" },
];

export default function FinalCTA() {
  const router = useRouter();
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    const formEl = e.currentTarget;
    const formData = new FormData(formEl);
    const body = new URLSearchParams();
    formData.forEach((value, key) => body.append(key, value.toString()));

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      router.push("/merci");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="noise relative overflow-hidden bg-ink-950 py-24 sm:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[920px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric-500/20 blur-[140px]" />
        <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(60%_60%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="container-app relative">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="eyebrow">Parlons de votre projet</span>
            <h2 className="mt-5 text-balance text-4xl font-semibold leading-[1.08] sm:text-5xl">
              Prêt à recevoir <span className="text-gradient-electric">plus d&apos;appels</span> ?
            </h2>
            <p className="mt-5 max-w-md text-lg text-slate-400">
              Demandez votre devis gratuit. On vous rappelle sous 24h pour construire le site qui
              fera décoller votre activité.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={CONTACT.phoneHref} className="btn-primary">
                <Phone className="h-4 w-4" />
                {CONTACT.phoneDisplay}
              </a>
              <a
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-[0.95rem] font-semibold text-white shadow-[0_12px_34px_-12px_rgba(37,211,102,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1fb457]"
              >
                <WhatsAppIcon className="h-5 w-5" />
                WhatsApp
              </a>
            </div>

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              {trust.map((t) => (
                <li key={t.label} className="inline-flex items-center gap-2 text-sm text-slate-300">
                  <t.icon className="h-4 w-4 text-electric-400" />
                  {t.label}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-3xl border border-white/10 bg-ink-900/80 p-6 shadow-float backdrop-blur-xl sm:p-8"
          >
            <form
              name="devis"
              method="POST"
              action="/merci/"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
            >
              <input type="hidden" name="form-name" value="devis" />
              <p className="hidden">
                <label>
                  Ne pas remplir : <input name="bot-field" />
                </label>
              </p>

              <div>
                <h3 className="text-xl font-semibold text-white">Recevez votre devis gratuit</h3>
                <p className="mt-1 text-sm text-slate-400">Réponse garantie sous 24h, sans engagement.</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Nom complet" name="nom" placeholder="Jean Martin" required />
                <Field label="Téléphone" name="telephone" type="tel" placeholder="06 12 34 56 78" required />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="metier" className="text-sm font-medium text-slate-300">
                    Votre métier
                  </label>
                  <select
                    id="metier"
                    name="metier"
                    defaultValue=""
                    className="rounded-xl border border-white/10 bg-ink-850 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-electric-500 focus:ring-2 focus:ring-electric-500/30"
                  >
                    <option value="" disabled>
                      Sélectionnez…
                    </option>
                    {METIERS.map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>
                </div>
                <Field label="Ville" name="ville" placeholder="Lyon" />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-sm font-medium text-slate-300">
                  Votre projet <span className="text-slate-500">(optionnel)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  placeholder="Décrivez votre besoin en quelques mots…"
                  className="resize-none rounded-xl border border-white/10 bg-ink-850 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-electric-500 focus:ring-2 focus:ring-electric-500/30"
                />
              </div>

              <button type="submit" disabled={status === "submitting"} className="btn-primary mt-1 w-full">
                {status === "submitting" ? "Envoi en cours…" : "Recevoir mon devis gratuit"}
                {status !== "submitting" && <ArrowRight className="h-4 w-4" />}
              </button>

              {status === "error" && (
                <p className="text-center text-sm text-red-400">
                  Une erreur est survenue. Appelez-nous au {CONTACT.phoneDisplay}.
                </p>
              )}
              <p className="text-center text-xs text-slate-500">
                En envoyant, vous acceptez d&apos;être recontacté. Aucune donnée revendue.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-medium text-slate-300">
        {label} {required && <span className="text-electric-400">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="rounded-xl border border-white/10 bg-ink-850 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-electric-500 focus:ring-2 focus:ring-electric-500/30"
      />
    </div>
  );
}
