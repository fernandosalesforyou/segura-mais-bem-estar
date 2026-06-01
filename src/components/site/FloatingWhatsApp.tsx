import { useContactDialog } from "./ContactDialog";

export function FloatingWhatsApp() {
  const { open } = useContactDialog();
  return (
    <button
      type="button"
      onClick={open}
      aria-label="Solicitar orçamento"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-xl hover:scale-110 transition-transform"
    >
      <svg viewBox="0 0 32 32" className="h-8 w-8 fill-white" aria-hidden="true">
        <path d="M19.11 17.27c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.13-.42-2.16-1.34-.8-.71-1.34-1.6-1.5-1.87-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.46l-.52-.01c-.18 0-.48.07-.73.34s-.95.93-.95 2.27.97 2.63 1.11 2.81c.14.18 1.92 2.93 4.65 4.11.65.28 1.16.45 1.55.58.65.21 1.24.18 1.71.11.52-.08 1.6-.65 1.83-1.28.23-.64.23-1.18.16-1.29-.07-.11-.25-.18-.52-.32zM16 4C9.37 4 4 9.37 4 16c0 2.12.55 4.11 1.52 5.84L4 28l6.34-1.66A11.94 11.94 0 0016 28c6.63 0 12-5.37 12-12S22.63 4 16 4z"/>
      </svg>
    </button>
  );
}