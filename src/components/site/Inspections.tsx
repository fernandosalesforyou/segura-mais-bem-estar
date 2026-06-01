import { Section, SectionTitle } from "./Section";
import { CtaButton } from "./CtaButton";

const cards = [
  {
    title: "Inspeções técnicas especializadas",
    text: "Reconhecemos a importância crucial desses sistemas na proteção de trabalhadores em altura. Nossa equipe certificada e qualificada utiliza práticas de inspeção rigorosas e detalhadas para garantir que todos os sistemas estejam em conformidade e plenamente funcionais.",
  },
  {
    title: "Atendimento às normas vigentes",
    text: "Seguimos rigorosamente as normas e regulamentos em vigor, assegurando que os sistemas de proteção contra quedas (linhas de vida) e sistemas de ancoragem estejam em total conformidade com as exigências de segurança e proteção.",
  },
  {
    title: "Compromisso com a segurança",
    text: "Executamos inspeções técnicas detalhadas para garantir a segurança e a conformidade em sistemas de proteção contra quedas (linhas de vida) e pontos de ancoragem, reforçando nosso compromisso com você.",
  },
];

export function Inspections() {
  return (
    <Section tone="white">
      <SectionTitle
        eyebrow="Inspeções Linha de Vida"
        title="Inspeções técnicas especializadas"
        subtitle="Realizamos inspeções completas para garantir que os sistemas estejam seguros, funcionando corretamente e em conformidade com as normas vigentes."
      />
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {cards.map((c, i) => (
          <article
            key={c.title}
            className="flex flex-col rounded-2xl border border-border bg-card p-8 shadow-md hover:shadow-xl transition-shadow"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground text-lg font-bold">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-5 text-xl font-semibold text-primary leading-snug">{c.title}</h3>
            <p className="mt-3 text-base text-muted-foreground leading-relaxed">{c.text}</p>
          </article>
        ))}
      </div>
      <p className="mt-10 mx-auto max-w-3xl text-center text-base text-foreground">
        Executamos inspeções técnicas detalhadas em <strong>Sistemas de Proteção Contra Quedas (linhas de vida)</strong> e <strong>Pontos de Ancoragem</strong>.
      </p>
      <div className="mt-12 text-center">
        <CtaButton size="lg" />
      </div>
    </Section>
  );
}

export function Anchors() {
  return (
    <Section tone="gray">
      <SectionTitle
        eyebrow="Pontos de ancoragem"
        title="Projeto, instalação e inspeção de ancoragem"
        subtitle="Projetamos, instalamos e inspecionamos pontos de ancoragem conforme normas técnicas, garantindo segurança estrutural e proteção total para trabalhos em altura."
      />
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {[
          { t: "Projeto técnico", d: "Dimensionamento estrutural com memorial de cálculo, ART e desenhos técnicos." },
          { t: "Instalação certificada", d: "Execução por equipe qualificada, com materiais homologados e testes de carga." },
          { t: "Inspeção periódica", d: "Verificação de integridade, fixação e conformidade conforme exigências da NR-35." },
        ].map((c) => (
          <div key={c.t} className="rounded-2xl border border-border bg-card p-8 shadow-sm hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-primary">{c.t}</h3>
            <p className="mt-3 text-base text-muted-foreground leading-relaxed">{c.d}</p>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <CtaButton size="lg" />
      </div>
    </Section>
  );
}

export function NR35() {
  return (
    <Section tone="white">
      <SectionTitle
        eyebrow="NR-35"
        title="Sua empresa está adequada à NR-35?"
        subtitle="Toda atividade acima de 2 metros exige sistema de proteção contra quedas."
      />
      <div className="mt-12 mx-auto max-w-4xl rounded-2xl border-l-4 border-accent bg-secondary p-10 shadow-md">
        <h3 className="text-2xl font-semibold text-primary">Principais exigências</h3>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            "Sistema adequado ao risco",
            "Projeto por profissional habilitado",
            "Resistência certificada",
            "Inspeções periódicas obrigatórias",
          ].map((e) => (
            <li key={e} className="flex gap-3 text-base text-foreground">
              <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground text-xs font-bold">✓</span>
              {e}
            </li>
          ))}
        </ul>
        <p className="mt-8 text-base text-muted-foreground">
          A falta de adequação pode gerar multas, interdições e riscos graves à sua operação.
        </p>
        <div className="mt-8 text-center">
          <CtaButton size="lg" />
        </div>
      </div>
    </Section>
  );
}