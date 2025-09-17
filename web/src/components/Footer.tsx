import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-black/10 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-2">
          <div className="font-semibold">İnegöl Yarka Tavuk</div>
          <p className="text-sm opacity-80">Kaliteli & Sağlıklı Tavuklarımız ile tanışın.</p>
        </div>
        <div>
          <div className="font-medium mb-2">Menü</div>
          <ul className="space-y-1 text-sm">
            <li><Link href="/hakkimizda">Hakkımızda</Link></li>
            <li><Link href="/kumes-hayvanlari">Kümes Hayvanları</Link></li>
            <li><Link href="/galeri">Galeri</Link></li>
            <li><Link href="/iletisim">İletişim</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-medium mb-2">İletişim</div>
          <ul className="space-y-1 text-sm">
            <li>Adres: Çeltikçi Mah. 5715 Sk. No: 5/2 İnegöl / BURSA</li>
            <li>E-posta: <a href="mailto:info@inegolyarkatavuk.com">info@inegolyarkatavuk.com</a></li>
            <li>Tel: <a href="tel:+905303083702">0530 308 37 02</a></li>
            <li>Tel: <a href="tel:+905364871789">0536 487 17 89</a></li>
          </ul>
        </div>
        <div className="text-sm opacity-80">
          © {new Date().getFullYear()} Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
}


