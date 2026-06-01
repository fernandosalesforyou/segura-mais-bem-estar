import { createFileRoute } from "@tanstack/react-router";
import { SectionPage } from "@/components/site/SectionPage";
import { Special } from "@/components/site/Special";

export const Route = createFileRoute("/solucoes-especiais")({
  head: () => ({
    meta: [
      { title: "Soluções Especiais — Engenhar+ Soluções" },
      { name: "description", content: "Projetos personalizados para indústria, construção civil, agronegócio, logística e condomínios." },
      { property: "og:title", content: "Soluções Especiais — Engenhar+ Soluções" },
      { property: "og:description", content: "Projetos para diferentes segmentos com foco em custo-benefício e segurança." },
    ],
  }),
  component: () => (
    <SectionPage>
      <Special />
    </SectionPage>
  ),
});
