import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";
import { useContactDialog } from "./ContactDialog";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { open: openDialog } = useContactDialog();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Home", href: "#home" },
    { label: "Projeto", href: "#projeto" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur transition-shadow ${
        scrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between">
          <a href="#home" className="flex items-center">
            <img src={logo} alt="Engenhar+ Soluções" className="h-20 w-auto" />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-base font-semibold text-primary-foreground/90 hover:text-accent transition-colors"
              >
                {l.label}
              </a>
            ))}
            <div className="flex items-center gap-2 pl-2 border-l border-primary-foreground/20">
              <a
                href="https://www.instagram.com/engenharmais_solucoes/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-accent transition-colors"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-primary-foreground"><path d="M12 2.2c3.2 0 3.6 0 4.8.07 1.2.06 1.9.24 2.4.4.6.24 1 .53 1.5 1s.76.9 1 1.5c.16.5.34 1.2.4 2.4.07 1.2.07 1.6.07 4.8s0 3.6-.07 4.8c-.06 1.2-.24 1.9-.4 2.4-.24.6-.53 1-1 1.5s-.9.76-1.5 1c-.5.16-1.2.34-2.4.4-1.2.07-1.6.07-4.8.07s-3.6 0-4.8-.07c-1.2-.06-1.9-.24-2.4-.4a4 4 0 0 1-1.5-1 4 4 0 0 1-1-1.5c-.16-.5-.34-1.2-.4-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.8c.06-1.2.24-1.9.4-2.4.24-.6.53-1 1-1.5s.9-.76 1.5-1c.5-.16 1.2-.34 2.4-.4C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.7.07-1 .04-1.6.2-2 .35-.5.2-.9.43-1.3.83-.4.4-.63.8-.83 1.3-.15.4-.31 1-.35 2C2.78 8.5 2.77 8.9 2.77 12s0 3.5.07 4.7c.04 1 .2 1.6.35 2 .2.5.43.9.83 1.3.4.4.8.63 1.3.83.4.15 1 .31 2 .35 1.2.07 1.6.07 4.7.07s3.5 0 4.7-.07c1-.04 1.6-.2 2-.35.5-.2.9-.43 1.3-.83.4-.4.63-.8.83-1.3.15-.4.31-1 .35-2 .07-1.2.07-1.6.07-4.7s0-3.5-.07-4.7c-.04-1-.2-1.6-.35-2-.2-.5-.43-.9-.83-1.3-.4-.4-.8-.63-1.3-.83-.4-.15-1-.31-2-.35-1.2-.07-1.6-.07-4.7-.07zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.8a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4zm5.2-3a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z"/></svg>
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=5551989036374"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-accent transition-colors"
              >
                <svg viewBox="0 0 32 32" className="h-4 w-4 fill-primary-foreground"><path d="M16 4C9.37 4 4 9.37 4 16c0 2.12.55 4.11 1.52 5.84L4 28l6.34-1.66A11.94 11.94 0 0016 28c6.63 0 12-5.37 12-12S22.63 4 16 4z"/></svg>
              </a>
              <a
                href="https://www.linkedin.com/company/engenharsolu%C3%A7%C3%B5es/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-accent transition-colors"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-primary-foreground"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zm7.5 0h4.37v1.92h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 7v7.44h-4.56v-6.6c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.54 1.72-2.54 3.49V22H7.72V8z"/></svg>
              </a>
            </div>
          </nav>

          <button
            type="button"
            onClick={openDialog}
            className="hidden md:inline-flex items-center justify-center rounded-md border border-primary-foreground/90 bg-accent px-7 py-3.5 text-base font-semibold text-accent-foreground hover:bg-accent-hover transition-colors"
          >
            Quero solicitar um orçamento
          </button>

          <button
            aria-label="Abrir menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-primary-foreground"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded px-3 py-2 text-primary-foreground/90 hover:bg-primary-foreground/10"
              >
                {l.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => { setOpen(false); openDialog(); }}
              className="block w-full rounded-md border border-primary-foreground/90 bg-accent px-3 py-2 text-center text-sm font-semibold text-accent-foreground"
            >
              Quero solicitar um orçamento
            </button>
          </div>
        )}
      </div>
    </header>
  );
}