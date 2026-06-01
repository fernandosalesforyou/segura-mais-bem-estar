import { Section, SectionTitle } from "./Section";

const diff = ["Projetos personalizados", "Foco em custo-benefício", "Soluções técnicas completas"];
const segments = [
  "Indústria",
  "Construção Civil",
  "Agronegócio",
  "Centros logísticos",
  "Condomínios",
  "Empresas com NR-35",
];

export function Special() {
  return (
    <Section tone="primary">
      <SectionTitle
        eyebrow="Soluções especiais"
        title="Projetos para diferentes segmentos"
        subtitle="Desenvolvemos soluções adaptadas para diferentes setores, sempre considerando custo, eficiência e segurança."
        light
      />
      <div className="mt-12 grid gap-8 lg:grid-cols-5 lg:items-start">
        <div className="lg:col-span-2 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-8">
          <h3 className="text-lg font-semibold text-accent">Diferenciais</h3>
          <ul className="mt-4 space-y-3">
            {diff.map((d) => (
              <li key={d} className="flex items-start gap-3 text-primary-foreground/90">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-3">
          <h3 className="text-lg font-semibold text-accent">Segmentos atendidos</h3>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {segments.map((s) => (
              <div
                key={s}
                className="rounded-lg border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-3 text-sm font-medium text-primary-foreground"
              >
                {s}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}