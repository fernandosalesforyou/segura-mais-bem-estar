import { createFileRoute } from "@tanstack/react-router";
import { SectionPage } from "@/components/site/SectionPage";
import { Services } from "@/components/site/Services";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços — Engenhar+ Soluções" },
      { name: "description", content: "Projeto, instalação, inspeção e consultoria em Linha de Vida e Sistemas de Proteção Contra Quedas." },
      { property: "og:title", content: "Serviços — Engenhar+ Soluções" },
      { property: "og:description", content: "Solução completa do projeto à execução em sistemas de proteção contra quedas." },
    ],
  }),
  component: () => (
    <SectionPage>
      <Services />
    </SectionPage>
  ),
});
