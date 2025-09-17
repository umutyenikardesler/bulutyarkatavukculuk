export const metadata = { title: "İletişim" };

export default function IletisimPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div>
        <h1 className="text-2xl font-semibold">İletişim</h1>
        <p className="opacity-80 mt-2">Sorularınız için bize ulaşın.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2 text-sm">
          <div className="font-medium">Adres</div>
          <div>Çeltikçi Mah. 5715 Sk. No: 5/2 İnegöl / BURSA</div>
          <div className="font-medium mt-4">E-posta</div>
          <a href="mailto:info@inegolyarkatavuk.com" className="text-blue-600 hover:underline">info@inegolyarkatavuk.com</a>
          <div className="font-medium mt-4">Telefon</div>
          <a href="tel:+905303083702" className="block">0530 308 37 02</a>
          <a href="tel:+905364871789" className="block">0536 487 17 89</a>
        </div>
        <div id="teklif" className="rounded-lg border border-black/10 dark:border-white/10 p-4">
          <div className="font-medium mb-2">Teklif Formu</div>
          <form className="grid gap-3">
            <input className="rounded border border-black/15 dark:border-white/15 px-3 py-2 bg-transparent" placeholder="Ad Soyad" />
            <input className="rounded border border-black/15 dark:border-white/15 px-3 py-2 bg-transparent" placeholder="Telefon" />
            <input className="rounded border border-black/15 dark:border-white/15 px-3 py-2 bg-transparent" placeholder="E-posta" />
            <textarea className="rounded border border-black/15 dark:border-white/15 px-3 py-2 bg-transparent" placeholder="Mesajınız" rows={4} />
            <button type="button" className="rounded-md bg-blue-600 text-white px-4 py-2 text-sm hover:bg-blue-700">Gönder</button>
          </form>
        </div>
      </div>
    </div>
  );
}


