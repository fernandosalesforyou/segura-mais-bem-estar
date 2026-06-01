import { createFileRoute } from "@tanstack/react-router";
import { SectionPage } from "@/components/site/SectionPage";
import { Anchors } from "@/components/site/Inspections";

export const Route = createFileRoute("/pontos-de-ancoragem")({
  head: () => ({
    meta: [
      { title: "Pontos de Ancoragem — Engenhar+ Soluções" },
      { name: "description", content: "Projeto, instalação e inspeção de pontos de ancoragem com memorial de cálculo e ART." },
      { property: "og:title", content: "Pontos de Ancoragem — Engenhar+ Soluções" },
      { property: "og:description", content: "Segurança estrutural total para trabalhos em altura." },
    ],
  }),
  component: () => (
    <SectionPage>
      <Anchors />
    </SectionPage>
  ),
});
