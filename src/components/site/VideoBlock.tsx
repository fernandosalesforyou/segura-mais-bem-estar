import { Section, SectionTitle } from "./Section";

function YT({ id, title }: { id: string; title: string }) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card shadow-md">
      <div className="aspect-video">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube.com/embed/${id}`}
          title={title}
          loading="lazy"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="p-4">
        <p className="font-semibold text-primary">{title}</p>
      </div>
    </div>
  );
}

export function ProjectVideos() {
  return (
    <Section tone="white">
      <SectionTitle eyebrow="Vídeos" title="Veja projetos em execução" />
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <YT id="FM_8UOq_nvE" title="Projeto Overhead" />
        <YT id="0Wn0sRStvms" title="Projeto em Telhado" />
      </div>
    </Section>
  );
}

export function InspectionVideos() {
  return (
    <Section tone="gray">
      <SectionTitle eyebrow="Casos de inspeção" title="Inspeções realizadas em campo" />
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <YT id="S0WAqhzKOAY" title="Inspeção em Coberturas" />
        <YT id="0ZdujswYjzA" title="Inspeção em Escadas" />
      </div>
      <p className="mt-8 text-center text-muted-foreground">
        Após a inspeção, entregamos toda a documentação técnica exigida, garantindo conformidade total.
      </p>
    </Section>
  );
}