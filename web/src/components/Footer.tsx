import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-black/10 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div className="space-y-2">
          <div className="font-semibold">Bulut Yarka Tavukculuk</div>
          <p className="text-sm opacity-80">Kaliteli & Sağlıklı Tavuklarımız ile tanışın.</p>
        </div>
        <div>
          <div className="font-semibold mb-2">Menü</div>
          <ul className="space-y-1 text-sm">
            <li><Link href="/hakkimizda">Hakkımızda</Link></li>
            <li><Link href="/kumes-hayvanlari">Kümes Hayvanları</Link></li>
            <li><Link href="/galeri">Galeri</Link></li>
            <li><Link href="/iletisim">İletişim</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">İletişim</div>
          <ul className="space-y-1 text-sm">
            <li>Adres: Ali Ulvi Kurucu, 17095. Sk., 42000 Meram/Konya</li>
            <li>E-posta: <a href="mailto:info@bulutyarkatavukculuk.com">info@bulutyarkatavukculuk.com</a></li>
            <li>Tel: <a href="tel:+905543125164">0554 312 51 64</a></li>
          </ul>
        </div>
        
      </div>
      <div className="mx-auto w-full my-4">
        <div className="flex justify-center items-center text-center">
        <div className="text-lg font-semibold">
          © {new Date().getFullYear()} Tüm hakları saklıdır.
        </div>
          </div>
        </div>
      
    </footer>
  );
}


