import { Section, SectionTitle } from "./Section";
import { CtaButton } from "./CtaButton";
import tesla from "@/assets/partners/tesla.png";
import tsea from "@/assets/partners/tsea.png";
import arcelor from "@/assets/partners/arcelor.png";
import craRs from "@/assets/partners/cra-rs.png";
import solistica from "@/assets/partners/solistica.png";
import trombini from "@/assets/partners/trombini.png";
import isla from "@/assets/partners/isla.png";
import dorfKetal from "@/assets/partners/dorf-ketal.png";
import madesa from "@/assets/partners/madesa.png";
import newPartner from "@/assets/partners/new-partner.png";
import sap from "@/assets/partners/sap.png";

const services = [
  "Projeto técnico 2D e 3D",
  "Instalação completa dos sistemas",
  "Inspeções iniciais e periódicas",
  "Relatórios técnicos e documentação",
  "Avaliação de risco no local",
  "Consultoria especializada",
  "Manual de montagem",
  "Plano de manutenção",
  "Análise do melhor sistema",
  "Memorial de cálculo",
  "Memorial descritivo",
];

export function Services() {
  return (
    <Section tone="gray">
      <SectionTitle
        eyebrow="Serviços"
        title="Solução completa do projeto à execução"
        subtitle="Oferecemos um conjunto completo de serviços técnicos para garantir segurança, conformidade e eficiência."
      />
      <ul className="mt-16 mx-auto grid gap-5 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl">
        {services.map((s) => (
          <li
            key={s}
            className="flex items-start gap-4 rounded-xl bg-card p-6 shadow-md border border-border hover:shadow-xl hover:-translate-y-0.5 transition-all"
          >
            <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground text-base font-bold">✓</span>
            <span className="text-base sm:text-lg font-semibold text-foreground leading-snug">{s}</span>
          </li>
        ))}
      </ul>

      <div className="mt-12 text-center">
        <CtaButton size="lg" />
      </div>

      <PartnersCarousel />
    </Section>
  );
}

function PartnersCarousel() {
  const items = [
    { name: "Tesla", src: tesla },
    { name: "TSEA Energia", src: tsea },
    { name: "ArcelorMittal / Gonvarri", src: arcelor },
    { name: "CRA-RS", src: craRs },
    { name: "Solistica", src: solistica },
    { name: "Trombini", src: trombini },
    { name: "Isla", src: isla },
    { name: "Dorf Ketal", src: dorfKetal },
    { name: "Madesa", src: madesa },
    { name: "Parceiro", src: newPartner },
    { name: "SAP", src: sap },
  ];
  const loop = [...items, ...items];
  return (
    <div className="mt-16">
      <p className="text-center text-base font-semibold uppercase tracking-widest text-muted-foreground">
        Alguns de nossos parceiros
      </p>
      <div className="mt-6 overflow-hidden">
        <div className="flex gap-10 animate-[marquee_30s_linear_infinite] w-max">
          {loop.map((p, i) => (
            <div
              key={i}
              className="flex h-32 w-60 shrink-0 items-center justify-center rounded-lg border border-border bg-card p-4"
            >
              <img
                src={p.src}
                alt={p.name}
                loading="lazy"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
    </div>
  );
}