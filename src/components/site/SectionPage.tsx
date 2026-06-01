import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { FloatingWhatsApp } from "./FloatingWhatsApp";
import { ContactDialogProvider } from "./ContactDialog";

export function SectionPage({ children }: { children: ReactNode }) {
  return (
    <ContactDialogProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </ContactDialogProvider>
  );
}