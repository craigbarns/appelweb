import type { ReactNode } from "react";
import Reveal from "./Reveal";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  theme?: "onDark" | "onLight";
  align?: "center" | "left";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  theme = "onDark",
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl", className)}>
      <Reveal>
        <span className={theme === "onDark" ? "eyebrow" : "eyebrow-dark"}>{eyebrow}</span>
      </Reveal>
      <Reveal delay={0.06}>
        <h2
          className={cn(
            "mt-5 text-balance text-[2rem] font-semibold leading-[1.1] sm:text-4xl lg:text-[2.75rem]",
            theme === "onLight" ? "text-ink-900" : "text-white"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.12}>
          <p className={cn("mt-4 text-lg", theme === "onDark" ? "text-slate-400" : "text-slate-600")}>
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
