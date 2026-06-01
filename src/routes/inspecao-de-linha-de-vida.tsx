import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { ContactDialogProvider } from "@/components/site/ContactDialog";
import { ContactForm } from "@/components/site/ContactForm";
import { Section, SectionTitle } from "@/components/site/Section";
import { CtaButton } from "@/components/site/CtaButton";
import heroBg from "@/assets/hero-bg.jpg";
import img1 from "@/assets/install-1.jpg";
import img2 from "@/assets/install-2.jpg";
import img3 from "@/assets/install-3.jpg";
import img4 from "@/assets/install-4.jpg";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/inspecao-de-linha-de-vida")({
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
      { property: "og:url", content: "/inspecao-de-linha-de-vida" },
    ],
    links: [{ rel: "canonical", href: "/inspecao-de-linha-de-vida" }],
  }),
  component: InspecaoLinhaVida,
});

function Hero() {
  const benefits = [
    "Inspeções conforme normas vigentes",
    "Emissão de laudos técnicos",
    "Avaliação de pontos de ancoragem",
    "Renovação e regularização de sistemas",
  ];
  return (
    <section className="relative isolate overflow-hidden pt-24 pb-20 sm:pt-32 sm:pb-28">
      <div className="absolute inset-0 -z-10 bg-cover bg-center" style={{ backgroundImage: `url(${heroBg})` }} />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/95 via-primary/85 to-primary/70" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="inline-block rounded-full border border-primary-foreground/30 bg-primary-foreground/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary-foreground/90">
            Engenhar+ Soluções
          </p>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-primary-foreground">
            Inspeção de Linha de Vida
          </h1>
          <p className="mt-4 text-2xl sm:text-3xl font-semibold text-accent">
            Laudos e Certificações Técnicas
          </p>
          <p className="mt-5 text-lg text-primary-foreground/85 max-w-2xl">
            Realizamos inspeções rigorosas em sistemas de proteção contra quedas. Renove seu laudo e mantenha sua empresa em conformidade.
          </p>
          <ul className="mt-8 space-y-3">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3 text-primary-foreground/95">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-accent text-accent-foreground text-xs font-bold">✓</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <div className="mt-9">
            <CtaButton size="lg" />
          </div>
          <p className="mt-6 text-sm text-primary-foreground/80 max-w-2xl">
            Atuamos exclusivamente com projetos, inspeção e instalação. Não comercializamos peças, EPIs ou equipamentos avulsos.
          </p>
          <p className="mt-6 text-sm text-primary-foreground/70">
            Referência no RS • Atendimento nacional • Laudos técnicos
          </p>
        </div>
      </div>
    </section>
  );
}

function Inspections() {
  const cards = [
    {
      title: "Inspeções Técnicas Especializadas",
      text: "Equipe certificada e qualificada, utilizando práticas rigorosas para garantir que cada linha de vida esteja em conformidade e plenamente funcional.",
    },
    {
      title: "Atendimento às Normas Vigentes",
      text: "Seguimos rigorosamente a NR-35 e demais normas técnicas aplicáveis a sistemas de proteção contra quedas e pontos de ancoragem.",
    },
    {
      title: "Compromisso com a Segurança",
      text: "Inspeções técnicas detalhadas para garantir a segurança e a conformidade dos sistemas, com foco na proteção de quem trabalha em altura.",
    },
  ];
  return (
    <Section tone="white">
      <SectionTitle
        eyebrow="Inspeções Técnicas Especializadas"
        title="Inspeção de Linha de Vida e Pontos de Ancoragem"
        subtitle="Realizamos inspeções técnicas completas para verificar a integridade, resistência e conformidade dos sistemas de proteção contra quedas."
      />
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {cards.map((c, i) => (
          <article key={c.title} className="flex flex-col rounded-2xl border border-border bg-card p-8 shadow-md hover:shadow-xl transition-shadow">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground text-lg font-bold">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-5 text-xl font-semibold text-primary leading-snug">{c.title}</h3>
            <p className="mt-3 text-base text-muted-foreground leading-relaxed">{c.text}</p>
          </article>
        ))}
      </div>
      <div className="mt-12 text-center">
        <CtaButton size="lg" />
      </div>
    </Section>
  );
}

function YT({ id, title }: { id: string; title: string }) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card shadow-md">
      <div className="aspect-video">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube.com/embed/${id}`}
          title={title}
          loading="lazy"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="p-4">
        <p className="font-semibold text-primary">{title}</p>
      </div>
    </div>
  );
}

function FieldVideos() {
  return (
    <Section tone="gray">
      <SectionTitle
        eyebrow="Inspeções realizadas em campo"
        title="Casos Reais de Inspeção de Linha de Vida"
        subtitle="Conheça algumas inspeções realizadas pela Engenhar+ em diferentes segmentos e estruturas."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <YT id="S0WAqhzKOAY" title="Inspeção em Coberturas" />
        <YT id="0ZdujswYjzA" title="Inspeção em Escadas" />
      </div>
      <p className="mt-8 text-center text-muted-foreground">
        Após cada inspeção entregamos toda a documentação técnica exigida, garantindo conformidade com a NR-35.
      </p>
    </Section>
  );
}

function CompleteSolution() {
  const cards = [
    { t: "Avaliação Técnica", d: "Verificação completa das condições estruturais do sistema de proteção contra quedas." },
    { t: "Emissão de Laudos", d: "Documentação técnica elaborada por profissionais habilitados, com base na NR-35." },
    { t: "Adequação Normativa", d: "Identificação de não conformidades e recomendações corretivas para regularização." },
  ];
  return (
    <Section tone="white">
      <SectionTitle
        eyebrow="Inspeção e Certificação"
        title="Solução Completa para Inspeção e Certificação"
        subtitle="Da avaliação técnica à emissão do laudo, cuidamos de todas as etapas para manter sua linha de vida em conformidade."
      />
      <ul className="mt-14 grid gap-6 md:grid-cols-3">
        {cards.map((c) => (
          <li key={c.t} className="flex items-start gap-4 rounded-xl bg-card p-6 shadow-md border border-border hover:shadow-xl hover:-translate-y-0.5 transition-all">
            <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground text-base font-bold">✓</span>
            <div>
              <h3 className="text-lg font-semibold text-primary leading-snug">{c.t}</h3>
              <p className="mt-2 text-base text-muted-foreground leading-relaxed">{c.d}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-12 text-center">
        <CtaButton size="lg" />
      </div>
    </Section>
  );
}

function HowWeWork() {
  const pillars = [
    { title: "Excelência garantida", text: "Inspeções com alto padrão técnico, certificações e laudos confiáveis." },
    { title: "Soluções que transformam", text: "Avaliações personalizadas para cada sistema de linha de vida." },
    { title: "Atendimento que conecta", text: "Relacionamento próximo, transparente e técnico do início ao laudo." },
  ];
  return (
    <Section tone="white">
      <SectionTitle
        eyebrow="Como a Engenhar+ trabalha"
        title="Metodologia de Inspeção Técnica"
        subtitle="Nossa metodologia de inspeção permite identificar riscos ocultos, desgastes, falhas estruturais e pontos que precisam de adequação."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {pillars.map((p, i) => (
          <div key={p.title} className="rounded-xl bg-primary p-8 text-primary-foreground shadow-md hover:shadow-xl transition-shadow">
            <div className="text-5xl font-bold text-accent">0{i + 1}</div>
            <h3 className="mt-4 text-xl font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm text-primary-foreground/80">{p.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function InspectionSteps() {
  const steps = [
    { title: "Visita técnica", text: "Deslocamento até o local para análise das condições do sistema instalado." },
    { title: "Levantamento fotográfico", text: "Registro detalhado dos componentes, fixações e estrutura existente." },
    { title: "Avaliação dos componentes", text: "Verificação de cabos, ancoragens, conectores e demais elementos." },
    { title: "Verificação normativa", text: "Conferência da conformidade com a NR-35 e demais normas aplicáveis." },
    { title: "Emissão de laudo técnico", text: "Documentação completa com diagnóstico, recomendações e ART." },
  ];
  return (
    <Section tone="gray">
      <SectionTitle
        eyebrow="Etapas da Inspeção Técnica"
        title="Como Funciona Nossa Inspeção"
        subtitle="Cada etapa é planejada para garantir um diagnóstico preciso e um laudo técnico confiável."
      />
      <ol className="relative mt-14 mx-auto max-w-3xl">
        <span aria-hidden className="absolute left-5 top-2 bottom-2 w-px bg-accent/40 sm:left-1/2 sm:-translate-x-1/2" />
        {steps.map((s, i) => (
          <li key={s.title} className="relative pl-16 pb-10 sm:pl-0 sm:grid sm:grid-cols-2 sm:gap-10 last:pb-0">
            <span className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold shadow-md sm:left-1/2 sm:-translate-x-1/2">
              {i + 1}
            </span>
            <div className={`${i % 2 === 0 ? "sm:col-start-1 sm:text-right sm:pr-12" : "sm:col-start-2 sm:pl-12"}`}>
              <h3 className="text-lg font-semibold text-primary">{s.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function SystemsInspected() {
  const items = [
    {
      title: "Linha de Vida Flexível Horizontal",
      text: "Sistema com cabo de aço aplicado em telhados e estruturas horizontais. Inspecionamos a integridade do cabo, fixações e dispositivos de tensão.",
    },
    {
      title: "Linha de Vida Horizontal",
      text: "Inspeção de sistemas overhead em cabo de aço ou trilho rígido, com avaliação de ancoragens, batentes e elementos estruturais.",
    },
    {
      title: "Linha de Vida Vertical",
      text: "Verificação de cabos verticais, trava-quedas deslizantes e fixações em escadas tipo marinheiro e acessos verticais.",
    },
    {
      title: "Pontos de Ancoragem",
      text: "Avaliação técnica de dispositivos fixos quanto à resistência, integridade estrutural e conformidade normativa.",
    },
  ];
  return (
    <Section tone="white">
      <SectionTitle
        eyebrow="Tipos de Sistemas Inspecionados"
        title="Sistemas que Inspecionamos"
        subtitle="Realizamos inspeções em sistemas novos e já instalados, verificando sua condição de uso e conformidade técnica."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it, i) => (
          <article key={it.title} className="group relative rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
              0{i + 1}
            </div>
            <h3 className="text-lg font-semibold text-primary">{it.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.text}</p>
            <div className="mt-4 h-1 w-10 rounded bg-accent group-hover:w-20 transition-all" />
          </article>
        ))}
      </div>
      <div className="mt-12 text-center">
        <CtaButton size="lg" />
      </div>
    </Section>
  );
}

function InspectionAdequacy() {
  const cards = [
    { t: "Inspeção Periódica", d: "Avaliação técnica completa do sistema de linha de vida, identificando desgastes e não conformidades." },
    { t: "Laudo e Certificação", d: "Emissão da documentação técnica necessária para comprovação da conformidade com a NR-35." },
    { t: "Plano de Adequação", d: "Recomendações claras para correções e melhorias quando o sistema apresenta inconformidades." },
  ];
  return (
    <Section tone="gray">
      <SectionTitle
        eyebrow="Inspeção, Adequação e Regularização"
        title="Inspeção, Adequação e Regularização"
        subtitle="Mais do que apontar problemas, indicamos o caminho técnico para regularizar e manter sua linha de vida operando com segurança."
      />
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {cards.map((c) => (
          <div key={c.t} className="rounded-2xl border border-border bg-card p-8 shadow-sm hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-primary">{c.t}</h3>
            <p className="mt-3 text-base text-muted-foreground leading-relaxed">{c.d}</p>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <CtaButton size="lg" />
      </div>
    </Section>
  );
}

const slides = [img1, img2, img3, img4];

function Corrections() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % slides.length), 4000);
    return () => clearInterval(t);
  }, []);
  const responsibilities = [
    { title: "Expertise técnica", text: "Equipe qualificada para executar adequações identificadas na inspeção." },
    { title: "Agilidade na correção", text: "Soluções rápidas para regularizar o sistema sem comprometer a operação." },
    { title: "Redução de impactos", text: "Adequações planejadas para minimizar interferências na rotina do cliente." },
  ];
  return (
    <Section tone="white">
      <SectionTitle
        eyebrow="Implementação de Adequações"
        title="Correções e Adequações Identificadas"
        subtitle="Quando identificamos não conformidades, nossa equipe pode desenvolver as soluções necessárias para regularizar o sistema e garantir sua segurança."
      />
      <div className="mt-12 grid gap-10 lg:grid-cols-2 items-center">
        <div className="relative overflow-hidden rounded-2xl shadow-xl border border-border bg-card">
          <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${i * 100}%)` }}>
            {slides.map((s, idx) => (
              <img key={idx} src={s} alt={`Adequação ${idx + 1}`} className="w-full shrink-0 aspect-[4/3] object-cover" />
            ))}
          </div>
          <button aria-label="Anterior" onClick={() => setI((v) => (v - 1 + slides.length) % slides.length)} className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-primary/80 text-primary-foreground hover:bg-primary">‹</button>
          <button aria-label="Próximo" onClick={() => setI((v) => (v + 1) % slides.length)} className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-primary/80 text-primary-foreground hover:bg-primary">›</button>
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
            {slides.map((_, idx) => (
              <button key={idx} aria-label={`Slide ${idx + 1}`} onClick={() => setI(idx)} className={`h-2 rounded-full transition-all ${i === idx ? "w-6 bg-accent" : "w-2 bg-primary-foreground/60"}`} />
            ))}
          </div>
        </div>
        <ul className="space-y-5">
          {responsibilities.map((r) => (
            <li key={r.title} className="rounded-xl border-l-4 border-accent bg-secondary p-5">
              <h3 className="font-semibold text-primary">{r.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{r.text}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-12 text-center">
        <CtaButton size="lg" />
      </div>
    </Section>
  );
}

function Segments() {
  const diff = ["Inspeções personalizadas", "Foco em conformidade normativa", "Laudos técnicos completos"];
  const segments = ["Indústria", "Construção Civil", "Agronegócio", "Centros logísticos", "Condomínios", "Empresas com NR-35"];
  return (
    <Section tone="primary">
      <SectionTitle
        eyebrow="Projetos para Diferentes Segmentos"
        title="Inspeção de Linha de Vida para Diferentes Segmentos"
        subtitle="Realizamos inspeções em indústrias, centros logísticos, condomínios, agronegócio, construção civil e empresas que executam atividades em altura."
        light
      />
      <div className="mt-12 grid gap-8 lg:grid-cols-5 lg:items-start">
        <div className="lg:col-span-2 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-8">
          <h3 className="text-lg font-semibold text-accent">Diferenciais</h3>
          <ul className="mt-4 space-y-3">
            {diff.map((d) => (
              <li key={d} className="flex items-start gap-3 text-primary-foreground/90">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-3">
          <h3 className="text-lg font-semibold text-accent">Segmentos atendidos</h3>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {segments.map((s) => (
              <div key={s} className="rounded-lg border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-3 text-sm font-medium text-primary-foreground">
                {s}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function NR35Block() {
  return (
    <Section tone="white">
      <SectionTitle
        eyebrow="NR-35"
        title="Sua Linha de Vida Está Regularizada?"
        subtitle="A NR-35 exige que sistemas de proteção contra quedas sejam submetidos a inspeções periódicas para garantir segurança e conformidade operacional."
      />
      <div className="mt-12 mx-auto max-w-4xl rounded-2xl border-l-4 border-accent bg-secondary p-10 shadow-md">
        <h3 className="text-2xl font-semibold text-primary">Principais exigências</h3>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            "Inspeções periódicas obrigatórias",
            "Laudo técnico atualizado",
            "Avaliação de pontos de ancoragem",
            "Profissional habilitado responsável",
          ].map((e) => (
            <li key={e} className="flex gap-3 text-base text-foreground">
              <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground text-xs font-bold">✓</span>
              {e}
            </li>
          ))}
        </ul>
        <p className="mt-8 text-base text-muted-foreground">
          A falta de inspeção pode gerar riscos de acidentes, responsabilização legal, multas e interdições.
        </p>
        <div className="mt-8 text-center">
          <CtaButton size="lg" />
        </div>
      </div>
    </Section>
  );
}

function FAQ() {
  const items = [
    {
      q: "Quando a inspeção da linha de vida deve ser realizada?",
      a: "A periodicidade depende das condições de uso e das recomendações normativas, mas inspeções periódicas são indispensáveis para garantir segurança.",
    },
    {
      q: "O que é avaliado durante a inspeção?",
      a: "São avaliados cabos, ancoragens, componentes, fixações, integridade estrutural e conformidade com as normas aplicáveis.",
    },
    {
      q: "Vocês emitem laudo técnico?",
      a: "Sim. Após a inspeção, emitimos documentação técnica com os resultados e recomendações.",
    },
    {
      q: "A inspeção atende à NR-35?",
      a: "Sim. Seguimos rigorosamente os critérios técnicos exigidos para sistemas de proteção contra quedas.",
    },
    {
      q: "Vocês vendem equipamentos?",
      a: "Não. Atuamos exclusivamente com projetos, inspeção e instalação.",
    },
  ];
  return (
    <Section tone="gray">
      <SectionTitle
        eyebrow="FAQ"
        title="Perguntas Frequentes sobre Inspeção de Linha de Vida"
      />
      <div className="mt-12 mx-auto max-w-3xl space-y-4">
        {items.map((it) => (
          <details key={it.q} className="group rounded-xl border border-border bg-card p-6 shadow-sm">
            <summary className="flex cursor-pointer items-start justify-between gap-4 text-base font-semibold text-primary">
              {it.q}
              <span className="ml-2 text-accent transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-base text-muted-foreground leading-relaxed">{it.a}</p>
          </details>
        ))}
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: items.map((it) => ({
              "@type": "Question",
              name: it.q,
              acceptedAnswer: { "@type": "Answer", text: it.a },
            })),
          }),
        }}
      />
    </Section>
  );
}

function FormIntro() {
  return (
    <Section tone="white">
      <SectionTitle
        eyebrow="Solicite uma Inspeção Técnica"
        title="Solicite uma Inspeção Técnica"
        subtitle="Receba uma avaliação completa do seu sistema de linha de vida e mantenha sua empresa em conformidade."
      />
    </Section>
  );
}

function InspecaoLinhaVida() {
  return (
    <ContactDialogProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <Inspections />
          <FieldVideos />
          <CompleteSolution />
          <HowWeWork />
          <InspectionSteps />
          <SystemsInspected />
          <InspectionAdequacy />
          <Corrections />
          <Segments />
          <NR35Block />
          <FAQ />
          <FormIntro />
          <ContactForm />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </ContactDialogProvider>
  );
}