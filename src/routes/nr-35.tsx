import { createFileRoute } from "@tanstack/react-router";
import { SectionPage } from "@/components/site/SectionPage";
import { NR35 } from "@/components/site/Inspections";

export const Route = createFileRoute("/nr-35")({
  head: () => ({
    meta: [
      { title: "NR-35 — Engenhar+ Soluções" },
      { name: "description", content: "Adequação à NR-35: sistemas, projetos e inspeções para trabalho em altura." },
      { property: "og:title", content: "NR-35 — Engenhar+ Soluções" },
      { property: "og:description", content: "Sua empresa está adequada à NR-35?" },
    ],
  }),
  component: () => (
    <SectionPage>
      <NR35 />
    </SectionPage>
  ),
});
