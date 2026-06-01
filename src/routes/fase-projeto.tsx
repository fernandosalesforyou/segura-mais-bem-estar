import { createFileRoute } from "@tanstack/react-router";
import { SectionPage } from "@/components/site/SectionPage";
import { ProjectPhase } from "@/components/site/ProjectPhase";

export const Route = createFileRoute("/fase-projeto")({
  head: () => ({
    meta: [
      { title: "Fase de Projeto — Engenhar+ Soluções" },
      { name: "description", content: "Análise de risco, croqui, projeto executivo, ART e databook técnico completo." },
      { property: "og:title", content: "Fase de Projeto — Engenhar+ Soluções" },
      { property: "og:description", content: "Etapas do desenvolvimento técnico de cada projeto." },
    ],
  }),
  component: () => (
    <SectionPage>
      <ProjectPhase />
    </SectionPage>
  ),
});
