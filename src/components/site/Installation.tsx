import { useEffect, useState } from "react";
import { Section, SectionTitle } from "./Section";
import { CtaButton } from "./CtaButton";
import img1 from "@/assets/install-1.jpg";
import img2 from "@/assets/install-2.jpg";
import img3 from "@/assets/install-3.jpg";
import img4 from "@/assets/install-4.jpg";

const slides = [img1, img2, img3, img4];
const responsibilities = [
  { title: "Expertise técnica", text: "Equipe qualificada e preparada para projetos complexos." },
  { title: "Agilidade na instalação", text: "Execução organizada, sem atrasos." },
  { title: "Redução de impactos", text: "Minimizamos interferências na sua operação." },
];

export function Installation() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % slides.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <Section tone="white">
      <SectionTitle
        eyebrow="Implementação / Instalação"
        title="Execução segura e eficiente"
        subtitle="Realizamos a instalação com alto padrão técnico, garantindo segurança, rapidez e mínimo impacto na operação do cliente."
      />
      <div className="mt-12 grid gap-10 lg:grid-cols-2 items-center">
        <div className="relative overflow-hidden rounded-2xl shadow-xl border border-border bg-card">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${i * 100}%)` }}
          >
            {slides.map((s, idx) => (
              <img key={idx} src={s} alt={`Instalação ${idx + 1}`} className="w-full shrink-0 aspect-[4/3] object-cover" />
            ))}
          </div>
          <button
            aria-label="Anterior"
            onClick={() => setI((v) => (v - 1 + slides.length) % slides.length)}
            className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-primary/80 text-primary-foreground hover:bg-primary"
          >
            ‹
          </button>
          <button
            aria-label="Próximo"
            onClick={() => setI((v) => (v + 1) % slides.length)}
            className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-primary/80 text-primary-foreground hover:bg-primary"
          >
            ›
          </button>
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                aria-label={`Slide ${idx + 1}`}
                onClick={() => setI(idx)}
                className={`h-2 rounded-full transition-all ${i === idx ? "w-6 bg-accent" : "w-2 bg-primary-foreground/60"}`}
              />
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