import { CtaButton } from "./CtaButton";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-primary py-20">
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-accent-hover/40" />
      <div className="relative mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground">
          Fale com um especialista
        </h2>
        <p className="mt-3 text-primary-foreground/80 text-lg">
          Receba um diagnóstico técnico para sua empresa.
        </p>
        <div className="mt-8">
          <CtaButton size="lg" />
        </div>
      </div>
    </section>
  );
}