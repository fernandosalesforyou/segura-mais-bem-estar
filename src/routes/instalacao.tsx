import { createFileRoute } from "@tanstack/react-router";
import { SectionPage } from "@/components/site/SectionPage";
import { Installation } from "@/components/site/Installation";

export const Route = createFileRoute("/instalacao")({
  head: () => ({
    meta: [
      { title: "Instalação — Engenhar+ Soluções" },
      { name: "description", content: "Implementação e instalação de linhas de vida com alto padrão técnico, agilidade e segurança." },
      { property: "og:title", content: "Instalação — Engenhar+ Soluções" },
      { property: "og:description", content: "Execução segura e eficiente de sistemas de proteção contra quedas." },
    ],
  }),
  component: () => (
    <SectionPage>
      <Installation />
    </SectionPage>
  ),
});
