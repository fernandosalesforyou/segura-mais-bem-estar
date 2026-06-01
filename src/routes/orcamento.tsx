import { createFileRoute } from "@tanstack/react-router";
import { SectionPage } from "@/components/site/SectionPage";
import { ContactForm } from "@/components/site/ContactForm";

export const Route = createFileRoute("/orcamento")({
  head: () => ({
    meta: [
      { title: "Solicitar Orçamento — Engenhar+ Soluções" },
      { name: "description", content: "Solicite um orçamento para projeto, instalação ou inspeção de linha de vida." },
      { property: "og:title", content: "Solicitar Orçamento — Engenhar+ Soluções" },
      { property: "og:description", content: "Receba uma proposta personalizada da Engenhar+." },
    ],
  }),
  component: () => (
    <SectionPage>
      <ContactForm />
    </SectionPage>
  ),
});
