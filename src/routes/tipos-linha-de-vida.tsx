import { createFileRoute } from "@tanstack/react-router";
import { SectionPage } from "@/components/site/SectionPage";
import { Types } from "@/components/site/Types";

export const Route = createFileRoute("/tipos-linha-de-vida")({
  head: () => ({
    meta: [
      { title: "Tipos de Linha de Vida — Engenhar+ Soluções" },
      { name: "description", content: "Linha de Vida Horizontal, Vertical, Overhead e Pontos de Ancoragem para trabalho em altura." },
      { property: "og:title", content: "Tipos de Linha de Vida — Engenhar+ Soluções" },
      { property: "og:description", content: "Soluções completas em sistemas de proteção contra quedas." },
    ],
  }),
  component: () => (
    <SectionPage>
      <Types />
    </SectionPage>
  ),
});
