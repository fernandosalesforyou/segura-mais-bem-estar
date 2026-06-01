import { Section, SectionTitle } from "./Section";

const steps = [
  { title: "Análise de risco detalhada", text: "Avaliamos o local, identificamos riscos e definimos as melhores soluções técnicas." },
  { title: "Croqui inicial do sistema", text: "Esboço com o posicionamento dos pontos e linhas para validação prévia." },
  { title: "Aprovação do cliente", text: "Alinhamento técnico e comercial antes de avançar para o executivo." },
  { title: "Projeto executivo", text: "Detalhamento completo com memorial, ART e desenhos 2D/3D." },
  { title: "Entrega do databook técnico", text: "Documentação completa para uso, inspeção e manutenção do sistema." },
];

export function ProjectPhase() {
  return (
    <Section tone="gray">
      <SectionTitle
        eyebrow="Fase de projeto"
        title="Etapas do desenvolvimento técnico"
        subtitle="Antes da execução, estruturamos todo o projeto para garantir precisão, segurança e eficiência."
      />
      <ol className="relative mt-14 mx-auto max-w-3xl">
        <span aria-hidden className="absolute left-5 top-2 bottom-2 w-px bg-accent/40 sm:left-1/2 sm:-translate-x-1/2" />
        {steps.map((s, i) => (
          <li key={s.title} className="relative pl-16 pb-10 sm:pl-0 sm:grid sm:grid-cols-2 sm:gap-10 last:pb-0">
            <span className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold shadow-md sm:left-1/2 sm:-translate-x-1/2">
              {i + 1}
            </span>
            <div className={`${i % 2 === 0 ? "sm:col-start-1 sm:text-right sm:pr-12" : "sm:col-start-2 sm:pl-12"}`}>
              <h3 className="text-lg font-semibold text-primary">{s.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}