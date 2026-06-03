import { cn } from "@/lib/utils";

type LogoProps = {
  theme?: "onDark" | "onLight";
  className?: string;
};

export default function Logo({ theme = "onDark", className }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-electric-gradient shadow-glow-sm">
        <svg width="20" height="20" viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <rect x="6" y="17" width="4" height="9" rx="2" fill="#fff" />
          <rect x="14" y="11" width="4" height="15" rx="2" fill="#fff" />
          <rect x="22" y="6" width="4" height="20" rx="2" fill="#fff" fillOpacity="0.9" />
        </svg>
      </span>
      <span
        className={cn(
          "font-display text-xl font-semibold tracking-tightest",
          theme === "onDark" ? "text-white" : "text-ink-900"
        )}
      >
        Appel<span className="text-electric-500">Web</span>
      </span>
    </span>
  );
}
