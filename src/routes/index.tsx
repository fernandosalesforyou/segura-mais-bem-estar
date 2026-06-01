import { createFileRoute } from "@tanstack/react-router";
import { InspecaoLinhaVidaPage } from "@/components/site/InspecaoLinhaVidaPage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Inspeção de Linha de Vida | Laudo Técnico NR-35 | Engenhar+" },
      {
        name: "description",
        content:
          "Realizamos inspeção de linha de vida e pontos de ancoragem com emissão de laudos técnicos e adequação à NR-35. Solicite uma avaliação.",
      },
      { property: "og:title", content: "Inspeção de Linha de Vida | Laudo Técnico NR-35 | Engenhar+" },
      {
        property: "og:description",
        content:
          "Inspeção de linha de vida, pontos de ancoragem e sistemas de proteção contra quedas. Laudos técnicos e conformidade com a NR-35.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: InspecaoLinhaVidaPage,
});
