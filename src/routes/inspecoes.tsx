import { createFileRoute } from "@tanstack/react-router";
import { SectionPage } from "@/components/site/SectionPage";
import { Inspections } from "@/components/site/Inspections";
import { InspectionVideos } from "@/components/site/VideoBlock";

export const Route = createFileRoute("/inspecoes")({
  head: () => ({
    meta: [
      { title: "Inspeções de Linha de Vida — Engenhar+ Soluções" },
      { name: "description", content: "Inspeções técnicas especializadas em linhas de vida e pontos de ancoragem conforme NR-35." },
      { property: "og:title", content: "Inspeções de Linha de Vida — Engenhar+ Soluções" },
      { property: "og:description", content: "Inspeções rigorosas para garantir segurança e conformidade." },
    ],
  }),
  component: () => (
    <SectionPage>
      <Inspections />
      <InspectionVideos />
    </SectionPage>
  ),
});
