import logo from "@/assets/logo.png";
import salesForYouLogo from "@/assets/sales-for-you.png";
import { useContactDialog } from "./ContactDialog";

export function Footer() {
  const { open } = useContactDialog();
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <img src={logo} alt="Engenhar+" className="h-16 w-auto" />
            <p className="mt-4 text-sm text-primary-foreground/80">
              Soluções mecânicas para um mundo em constante movimento.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="https://www.instagram.com/engenharmais_solucoes/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-accent transition-colors"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-primary-foreground"><path d="M12 2.2c3.2 0 3.6 0 4.8.07 1.2.06 1.9.24 2.4.4.6.24 1 .53 1.5 1s.76.9 1 1.5c.16.5.34 1.2.4 2.4.07 1.2.07 1.6.07 4.8s0 3.6-.07 4.8c-.06 1.2-.24 1.9-.4 2.4-.24.6-.53 1-1 1.5s-.9.76-1.5 1c-.5.16-1.2.34-2.4.4-1.2.07-1.6.07-4.8.07s-3.6 0-4.8-.07c-1.2-.06-1.9-.24-2.4-.4a4 4 0 0 1-1.5-1 4 4 0 0 1-1-1.5c-.16-.5-.34-1.2-.4-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.8c.06-1.2.24-1.9.4-2.4.24-.6.53-1 1-1.5s.9-.76 1.5-1c.5-.16 1.2-.34 2.4-.4C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.7.07-1 .04-1.6.2-2 .35-.5.2-.9.43-1.3.83-.4.4-.63.8-.83 1.3-.15.4-.31 1-.35 2C2.78 8.5 2.77 8.9 2.77 12s0 3.5.07 4.7c.04 1 .2 1.6.35 2 .2.5.43.9.83 1.3.4.4.8.63 1.3.83.4.15 1 .31 2 .35 1.2.07 1.6.07 4.7.07s3.5 0 4.7-.07c1-.04 1.6-.2 2-.35.5-.2.9-.43 1.3-.83.4-.4.63-.8.83-1.3.15-.4.31-1 .35-2 .07-1.2.07-1.6.07-4.7s0-3.5-.07-4.7c-.04-1-.2-1.6-.35-2-.2-.5-.43-.9-.83-1.3-.4-.4-.8-.63-1.3-.83-.4-.15-1-.31-2-.35-1.2-.07-1.6-.07-4.7-.07zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.8a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4zm5.2-3a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z"/></svg>
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=5551989036374"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-accent transition-colors"
              >
                <svg viewBox="0 0 32 32" className="h-5 w-5 fill-primary-foreground"><path d="M16 4C9.37 4 4 9.37 4 16c0 2.12.55 4.11 1.52 5.84L4 28l6.34-1.66A11.94 11.94 0 0016 28c6.63 0 12-5.37 12-12S22.63 4 16 4z"/></svg>
              </a>
              <a
                href="https://www.linkedin.com/company/engenharsolu%C3%A7%C3%B5es/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-accent transition-colors"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-primary-foreground"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zm7.5 0h4.37v1.92h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 7v7.44h-4.56v-6.6c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.54 1.72-2.54 3.49V22H7.72V8z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">Menu</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#home" className="hover:text-accent">Início</a></li>
              <li><a href="#projeto" className="hover:text-accent">Serviços</a></li>
              <li>
                <button type="button" onClick={open} className="hover:text-accent">
                  Orçamento
                </button>
              </li>
              <li><a href="#contato" className="hover:text-accent">Sobre nós</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">Contato</h4>
            <ul className="mt-4 space-y-2 text-sm text-primary-foreground/85">
              <li>📞 (51) 98903-6374</li>
              <li>✉ <a className="hover:text-accent" href="mailto:contato@engenharmais.com.br">contato@engenharmais.com.br</a></li>
              <li>✉ <a className="hover:text-accent" href="mailto:marcos.luz@engenharmais.com.br">marcos.luz@engenharmais.com.br</a></li>
              <li>✉ <a className="hover:text-accent" href="mailto:eduarda.linhar@engenharmais.com.br">eduarda.linhar@engenharmais.com.br</a></li>
            </ul>
            <h4 className="mt-6 text-sm font-semibold uppercase tracking-wider text-accent">Funcionamento</h4>
            <p className="mt-2 text-sm text-primary-foreground/85">Segunda a sexta: 08h às 18:30h</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">Endereço</h4>
            <p className="mt-4 text-sm text-primary-foreground/85">
              Av. Carlos Gomes, 700 - sala 606<br />
              5º andar - Boa Vista<br />
              Porto Alegre - RS
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-primary-foreground/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/70">
          <p>© {new Date().getFullYear()} Engenhar+ Soluções. Todos os direitos reservados.</p>
          <a
            href="https://salesforyou.com.br/?utm_source=engenharmais.com.br"
            target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <span>Site desenvolvido com ♥ por</span>
            <img src={salesForYouLogo} alt="Sales for You" className="h-6 w-auto" />
          </a>
        </div>
      </div>
    </footer>
  );
}