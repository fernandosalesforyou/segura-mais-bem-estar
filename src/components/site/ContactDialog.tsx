import { createContext, useContext, useState, type FormEvent, type ReactNode } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const WEBHOOK_URL = "https://hook.integrator.boost.space/ldb4bmsorq8e5spe6xt5spw3v29ea5yc";

type Ctx = { open: () => void };
const ContactDialogContext = createContext<Ctx>({ open: () => {} });

export function useContactDialog() {
  return useContext(ContactDialogContext);
}

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

declare global {
  interface Window {
    gtag_report_conversion?: (url?: string) => boolean;
  }
}

function reportConversion() {
  if (typeof window !== "undefined" && typeof window.gtag_report_conversion === "function") {
    window.gtag_report_conversion();
  }
}

export function ContactDialogProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({ nome: "", telefone: "" });

  function reset() {
    setForm({ nome: "", telefone: "" });
    setDone(false);
    setError(null);
    setLoading(false);
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const digits = form.telefone.replace(/\D/g, "");
      const fullPhone = `+55${digits}`;
      const fd = new FormData();
      fd.append("nome", form.nome.trim());
      fd.append("telefone", fullPhone);
      fd.append("whatsapp", fullPhone);
      fd.append("origem", "engenharmais.com.br");
      fd.append("data_entrada", new Date().toISOString());
      fd.append("url_pagina", typeof window !== "undefined" ? window.location.href : "");
      const res = await fetch(WEBHOOK_URL, { method: "POST", body: fd });
      if (!res.ok) throw new Error(`Erro ${res.status}`);
      setDone(true);
      reportConversion();
      window.location.href = "https://wa.me/5551989036374?text=Conversar%20com%20Engenhar%20+";
    } catch (err) {
      setError(err instanceof Error ? err.message : "Falha ao enviar");
    } finally {
      setLoading(false);
    }
  }

  return (
    <ContactDialogContext.Provider value={{ open: () => { reset(); setIsOpen(true); } }}>
      {children}
      <Dialog open={isOpen} onOpenChange={(v) => { setIsOpen(v); if (!v) reset(); }}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-primary">Solicite seu orçamento</DialogTitle>
            <DialogDescription>
              Preencha seus dados e nossa equipe entra em contato rapidamente.
            </DialogDescription>
          </DialogHeader>

          {done ? (
            <div className="py-4 text-center">
              <p className="text-base font-semibold text-primary">Recebemos sua solicitação!</p>
              <p className="mt-2 text-sm text-muted-foreground">Em instantes nossa equipe entra em contato.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-4">
              <Field label="Nome" value={form.nome} onChange={(v) => setForm({ ...form, nome: v })} required />
              <div>
                <label className="text-sm font-medium text-foreground">Telefone (WhatsApp)</label>
                <div className="mt-1 flex">
                  <span className="inline-flex items-center rounded-l-md border border-r-0 border-input bg-muted px-3 text-sm text-muted-foreground">+55</span>
                  <input
                    type="tel"
                    required
                    inputMode="numeric"
                    placeholder="(51) 98903-6374"
                    value={form.telefone}
                    onChange={(e) => setForm({ ...form, telefone: formatPhone(e.target.value) })}
                    className="w-full rounded-r-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
              </div>
              {error && <p className="text-sm text-destructive">{error}</p>}
              <button
                type="submit"
                disabled={loading}
                className="mt-2 inline-flex items-center justify-center rounded-md border border-white bg-accent px-6 py-3 font-semibold text-accent-foreground hover:bg-accent-hover transition-colors disabled:opacity-60"
              >
                {loading ? "Enviando..." : "Enviar agora"}
              </button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </ContactDialogContext.Provider>
  );
}

function Field({
  label, value, onChange, type = "text", required,
}: { label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-sm font-medium text-foreground">{label}</label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}