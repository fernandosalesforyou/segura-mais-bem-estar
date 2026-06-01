import { Section, SectionTitle } from "./Section";
import { CtaButton } from "./CtaButton";

const items = [
  {
    title: "Linha de Vida Flexível Horizontal",
    text: "Sistema com cabo de aço aplicado em telhados e estruturas horizontais. Permite mobilidade contínua com segurança durante deslocamentos em altura — ideal para manutenções e inspeções frequentes.",
  },
  {
    title: "Linha de Vida Horizontal (Overhead)",
    text: "Instalada acima da cabeça, em cabo de aço ou trilho rígido. Indicada para operações industriais como carga, descarga e manutenção, com uso de trava-quedas retrátil.",
  },
  {
    title: "Linha de Vida Vertical",
    text: "Cabo de aço vertical e trava-quedas deslizante, aplicado em escadas tipo marinheiro. Garante segurança no acesso vertical e deslocamento contínuo.",
  },
  {
    title: "Pontos de Ancoragem",
    text: "Dispositivos fixados na estrutura com alta resistência, projetados para suportar cargas em caso de queda. Essenciais para garantir segurança em diversas aplicações.",
  },
];

export function Types() {
  return (
    <Section id="projeto" tone="white">
      <SectionTitle
        eyebrow="Tipos de Linha de Vida"
        title="Soluções completas em sistemas de proteção contra quedas"
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it, i) => (
          <article
            key={it.title}
            className="group relative rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
          >
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
              0{i + 1}
            </div>
            <h3 className="text-lg font-semibold text-primary">{it.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.text}</p>
            <div className="mt-4 h-1 w-10 rounded bg-accent group-hover:w-20 transition-all" />
          </article>
        ))}
      </div>
      <div className="mt-12 text-center">
        <CtaButton size="lg" />
      </div>
    </Section>
  );
}