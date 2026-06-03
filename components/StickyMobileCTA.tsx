"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Phone } from "lucide-react";
import { CONTACT } from "@/lib/data";
import WhatsAppIcon from "./ui/WhatsAppIcon";

export default function StickyMobileCTA() {
  const [scrolled, setScrolled] = useState(false);
  const [nearForm, setNearForm] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 620);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const targets = [document.getElementById("contact"), document.querySelector("footer")].filter(
      Boolean
    ) as Element[];
    const visible = new Set<Element>();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => (e.isIntersecting ? visible.add(e.target) : visible.delete(e.target)));
        setNearForm(visible.size > 0);
      },
      { threshold: 0.1 }
    );
    targets.forEach((t) => io.observe(t));

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  const show = scrolled && !nearForm;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 110, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 110, opacity: 0 }}
          transition={{ type: "spring", damping: 26, stiffness: 280 }}
          className="fixed inset-x-0 bottom-0 z-40 lg:hidden"
        >
          <div className="border-t border-white/10 bg-ink-900/90 px-4 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 backdrop-blur-xl">
            <div className="flex gap-2.5">
              <a href={CONTACT.phoneHref} className="btn-primary flex-1 py-3">
                <Phone className="h-4 w-4" />
                Appeler
              </a>
              <a
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] py-3 text-[0.95rem] font-semibold text-white shadow-[0_10px_28px_-12px_rgba(37,211,102,0.7)]"
              >
                <WhatsAppIcon className="h-5 w-5" />
                WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
