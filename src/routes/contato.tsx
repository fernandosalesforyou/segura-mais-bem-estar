import { createFileRoute } from "@tanstack/react-router";
import { SectionPage } from "@/components/site/SectionPage";
import { ContactForm } from "@/components/site/ContactForm";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Engenhar+ Soluções" },
      { name: "description", content: "Fale com um especialista e receba um diagnóstico técnico para sua empresa." },
      { property: "og:title", content: "Contato — Engenhar+ Soluções" },
      { property: "og:description", content: "Solicite seu orçamento com a Engenhar+." },
    ],
  }),
  component: () => (
    <SectionPage>
      <ContactForm />
    </SectionPage>
  ),
});
