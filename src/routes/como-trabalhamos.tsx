import { createFileRoute } from "@tanstack/react-router";
import { SectionPage } from "@/components/site/SectionPage";
import { HowWeWork } from "@/components/site/HowWeWork";

export const Route = createFileRoute("/como-trabalhamos")({
  head: () => ({
    meta: [
      { title: "Como Trabalhamos — Engenhar+ Soluções" },
      { name: "description", content: "Excelência técnica, soluções que transformam e atendimento próximo em cada projeto." },
      { property: "og:title", content: "Como Trabalhamos — Engenhar+ Soluções" },
      { property: "og:description", content: "Como a Engenhar+ desenvolve cada projeto." },
    ],
  }),
  component: () => (
    <SectionPage>
      <HowWeWork />
    </SectionPage>
  ),
});
