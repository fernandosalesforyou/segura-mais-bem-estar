import type { ReactNode } from "react";

type Tone = "white" | "gray" | "primary";

const toneClass: Record<Tone, string> = {
  white: "bg-background text-foreground",
  gray: "bg-brand-gray text-foreground",
  primary: "bg-primary text-primary-foreground",
};

export function Section({
  id,
  tone = "white",
  children,
  className = "",
}: {
  id?: string;
  tone?: Tone;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`${toneClass[tone]} py-16 sm:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow && (
        <p className={`text-xs font-semibold uppercase tracking-widest ${light ? "text-accent" : "text-accent-hover"}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight ${light ? "text-primary-foreground" : "text-primary"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-5 text-base sm:text-lg ${light ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}