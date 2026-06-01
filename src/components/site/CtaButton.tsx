import type { ReactNode } from "react";
import { useContactDialog } from "./ContactDialog";

export const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=5551989036374";

export function CtaButton({
  children = "Quero solicitar um orçamento",
  className = "",
  size = "md",
}: {
  children?: ReactNode;
  className?: string;
  size?: "md" | "lg";
}) {
  const sizes = size === "lg" ? "px-9 py-5 text-lg" : "px-6 py-3.5 text-base";
  const { open } = useContactDialog();
  return (
    <button
      type="button"
      onClick={open}
      className={`inline-flex items-center justify-center rounded-md border border-white bg-accent ${sizes} font-semibold text-accent-foreground shadow-md hover:bg-accent-hover transition-colors ${className}`}
    >
      {children}
    </button>
  );
}