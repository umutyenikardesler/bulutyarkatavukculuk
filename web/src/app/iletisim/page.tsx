export const metadata = { title: "İletişim" };

export default function IletisimPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div>
        <h1 className="text-2xl font-semibold">İletişim</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4 text-sm">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-amber-800 flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-white" aria-hidden>
                <path d="M12 2.25c-4.28 0-7.75 3.47-7.75 7.75 0 5.29 6.3 10.2 7.01 10.76.43.34 1.05.34 1.48 0 .71-.56 7.01-5.47 7.01-10.76 0-4.28-3.47-7.75-7.75-7.75zm0 10.25a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/>
              </svg>
            </span>
            <span>Ali Ulvi Kurucu, 17095. Sk., 42000 Meram/Konya</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-amber-800 flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-white" aria-hidden>
                <path d="M1.5 6.75A2.25 2.25 0 0 1 3.75 4.5h16.5a2.25 2.25 0 0 1 2.25 2.25v10.5A2.25 2.25 0 0 1 20.25 19.5H3.75A2.25 2.25 0 0 1 1.5 17.25V6.75zm2.4.75 7.35 5.145a.75.75 0 0 0 .9 0L19.5 7.5H3.9z"/>
              </svg>
            </span>
            <a href="mailto:info@bulutyarkatavukculuk.com" className="text-amber-800 hover:underline">info@bulutyarkatavukculuk.com</a>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-amber-800 flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-white" aria-hidden>
                <path d="M2.25 5.25c0-.414.336-.75.75-.75H7.5c.345 0 .642.234.73.568l.9 3.375c.073.273-.02.563-.24.743l-2.1 1.75a11.986 11.986 0 0 0 4.725 4.725l1.75-2.1a.75.75 0 0 1 .743-.24l3.375.9c.334.088.568.385.568.73v4.5c0 .414-.336.75-.75.75H18c-7.456 0-13.5-6.044-13.5-13.5v-1.5z"/>
              </svg>
            </span>
            <a href="tel:+905464755164" className="text-amber-800 hover:underline">+90 546 475 51 64</a>
          </div>
        </div>

        <div className="rounded-lg overflow-hidden border border-black/10 dark:border-white/10">
          <iframe
            title="Bulut Yarka Tavukculuk Konum"
            src="https://www.google.com/maps?hl=tr&q=Ali%20Ulvi%20Kurucu%2C%2017095.%20Sk.%2C%2042000%20Meram%2FKonya&z=15&output=embed"
            width="100%"
            height="350"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}


