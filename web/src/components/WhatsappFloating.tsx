const WHATSAPP_NUMBER = "+905303083702";

export default function WhatsappFloating() {
  const href = `https://wa.me/${WHATSAPP_NUMBER.replace("+", "")}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp ile hızlı iletişim"
      className="fixed right-4 bottom-4 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg hover:bg-emerald-700"
    >
      {/* Basit WhatsApp simgesi */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-6 w-6"
      >
        <path d="M20.52 3.48A11.94 11.94 0 0012.06 0C5.44.03.1 5.38.12 12c0 2.1.55 4.15 1.6 5.97L0 24l6.2-1.63a11.95 11.95 0 005.86 1.53h.01c6.6-.01 11.94-5.36 11.96-11.98a11.9 11.9 0 00-3.5-8.44zM12.06 22.1h-.01a10.06 10.06 0 01-5.13-1.41l-.37-.22-3.68.97.98-3.59-.24-.37A10.03 10.03 0 1122.1 12.92c-.02 5.52-4.53 9.98-10.04 9.98zm5.56-7.5c-.3-.16-1.78-.88-2.06-.98-.28-.1-.49-.16-.7.16-.2.3-.8.98-.98 1.17-.18.2-.36.22-.66.08-.3-.14-1.26-.46-2.4-1.47-.88-.78-1.47-1.76-1.64-2.06-.17-.3-.02-.46.13-.62.14-.14.3-.36.46-.54.16-.18.22-.3.34-.5.12-.2.06-.38-.02-.54-.08-.16-.7-1.7-.96-2.34-.25-.6-.5-.52-.7-.53l-.6-.01c-.2 0-.54.08-.82.38-.28.3-1.07 1.04-1.07 2.55s1.1 2.96 1.26 3.16c.16.2 2.16 3.3 5.24 4.63.73.32 1.3.5 1.74.64.73.23 1.4.2 1.93.12.58-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.07-.12-.26-.2-.56-.36z" />
      </svg>
    </a>
  );
}


