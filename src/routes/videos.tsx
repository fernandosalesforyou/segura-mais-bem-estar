import { createFileRoute } from "@tanstack/react-router";
import { SectionPage } from "@/components/site/SectionPage";
import { ProjectVideos } from "@/components/site/VideoBlock";

export const Route = createFileRoute("/videos")({
  head: () => ({
    meta: [
      { title: "Vídeos de Projetos — Engenhar+ Soluções" },
      { name: "description", content: "Veja projetos de linha de vida em execução: overhead, telhado e mais." },
      { property: "og:title", content: "Vídeos de Projetos — Engenhar+ Soluções" },
      { property: "og:description", content: "Projetos em execução pela Engenhar+." },
    ],
  }),
  component: () => (
    <SectionPage>
      <ProjectVideos />
    </SectionPage>
  ),
});
