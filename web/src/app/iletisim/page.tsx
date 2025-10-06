export const metadata = { title: "İletişim" };

export default function IletisimPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      <div>
        <h1 className="text-2xl font-semibold">İletişim</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-cyan-700 flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-white" aria-hidden>
                <path d="M12 2.25c-4.28 0-7.75 3.47-7.75 7.75 0 5.29 6.3 10.2 7.01 10.76.43.34 1.05.34 1.48 0 .71-.56 7.01-5.47 7.01-10.76 0-4.28-3.47-7.75-7.75-7.75zm0 10.25a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/>
              </svg>
            </span>
            <span> Meram / KONYA — Tarsus / MERSİN </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-cyan-700 flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-white" aria-hidden>
                <path d="M1.5 6.75A2.25 2.25 0 0 1 3.75 4.5h16.5a2.25 2.25 0 0 1 2.25 2.25v10.5A2.25 2.25 0 0 1 20.25 19.5H3.75A2.25 2.25 0 0 1 1.5 17.25V6.75zm2.4.75 7.35 5.145a.75.75 0 0 0 .9 0L19.5 7.5H3.9z"/>
              </svg>
            </span>
            <a href="mailto:bulutyarkatavukculuk@gmail.com" className="text-cyan-700 hover:underline">bulutyarkatavukculuk@gmail.com</a>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-cyan-700 flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-white" aria-hidden>
                <path d="M1.5 6.75A2.25 2.25 0 0 1 3.75 4.5h16.5a2.25 2.25 0 0 1 2.25 2.25v10.5A2.25 2.25 0 0 1 20.25 19.5H3.75A2.25 2.25 0 0 1 1.5 17.25V6.75zm2.4.75 7.35 5.145a.75.75 0 0 0 .9 0L19.5 7.5H3.9z"/>
              </svg>
            </span>
            <a href="mailto:info@bulutyarkatavukculuk.com" className="text-cyan-700 hover:underline">info@bulutyarkatavukculuk.com</a>
          </div>

        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-cyan-700 flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-white" aria-hidden>
                <path d="M2.25 5.25c0-.414.336-.75.75-.75H7.5c.345 0 .642.234.73.568l.9 3.375c.073.273-.02.563-.24.743l-2.1 1.75a11.986 11.986 0 0 0 4.725 4.725l1.75-2.1a.75.75 0 0 1 .743-.24l3.375.9c.334.088.568.385.568.73v4.5c0 .414-.336.75-.75.75H18c-7.456 0-13.5-6.044-13.5-13.5v-1.5z"/>
              </svg>
            </span>
            <a href="tel:+905543125164" className="text-cyan-700 hover:underline">+90 554 312 51 64</a>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-cyan-700 flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5 text-white"
                aria-hidden
              >
                <path d="M20.52 3.48A11.94 11.94 0 0012.06 0C5.44.03.1 5.38.12 12c0 2.1.55 4.15 1.6 5.97L0 24l6.2-1.63a11.95 11.95 0 005.86 1.53h.01c6.6-.01 11.94-5.36 11.96-11.98a11.9 11.9 0 00-3.5-8.44zM12.06 22.1h-.01a10.06 10.06 0 01-5.13-1.41l-.37-.22-3.68.97.98-3.59-.24-.37A10.03 10.03 0 1122.1 12.92c-.02 5.52-4.53 9.98-10.04 9.98zm5.56-7.5c-.3-.16-1.78-.88-2.06-.98-.28-.1-.49-.16-.7.16-.2.3-.8.98-.98 1.17-.18.2-.36.22-.66.08-.3-.14-1.26-.46-2.4-1.47-.88-.78-1.47-1.76-1.64-2.06-.17-.3-.02-.46.13-.62.14-.14.3-.36.46-.54.16-.18.22-.3.34-.5.12-.2.06-.38-.02-.54-.08-.16-.7-1.7-.96-2.34-.25-.6-.5-.52-.7-.53l-.6-.01c-.2 0-.54.08-.82.38-.28.3-1.07 1.04-1.07 2.55s1.1 2.96 1.26 3.16c.16.2 2.16 3.3 5.24 4.63.73.32 1.3.5 1.74.64.73.23 1.4.2 1.93.12.58-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.07-.12-.26-.2-.56-.36z" />
              </svg>
            </span>
            <a href="tel:+905515053607" className="text-cyan-700 hover:underline">+90 551 505 36 07</a>
          </div>
        </div>
      </div>
    </div>
  );
}


