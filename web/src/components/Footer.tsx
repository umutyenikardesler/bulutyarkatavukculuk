import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-amber-900/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <div className="flex items-center gap-4">
            <Image src="/images/chicken.png" alt="Bulut Yarka Tavukculuk" width={40} height={40} className="h-10 w-10 rounded" />
            <div>
              <div className="font-semibold">Bulut Yarka Tavukculuk</div>
              <p className="text-sm opacity-80">Kaliteli & Sağlıklı Tavuklarımız ile tanışın.</p>
            </div>
          </div>
        </div>
        <div>
          <div className="font-semibold mb-2">Sayfalarımız</div>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-1 text-sm">
            <li><Link href="/hakkimizda">Hakkımızda</Link></li>
            <li><Link href="/kumes-hayvanlari">Kümes Hayvanları</Link></li>
            <li><Link href="/galeri">Galeri</Link></li>
            <li><Link href="/iletisim">İletişim</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">İletişim</div>
          <ul className="space-y-1 text-sm">
            <li>
              <span className="text-amber-800 font-semibold">Adres:</span> Meram / KONYA — Tarsus / MERSİN
              </li>
            <li>
              <span className="text-amber-800 font-semibold">E-posta:</span> 
              <a href="mailto:bulutyarkatavukculuk@gmail.com"> bulutyarkatavukculuk@gmail.com</a>
              </li> 
            <li>
              <span className="text-amber-800 font-semibold">E-posta:</span> 
              <a href="mailto:info@bulutyarkatavukculuk.com"> info@bulutyarkatavukculuk.com</a>
              </li>
            <li>
              <div className="flex items-center gap-4 flex-wrap">
                <span><span className="text-amber-800 font-semibold">Telefon:</span> 
                <a href="tel:05543125164"> 0554 312 51 64</a></span>
                <span><span className="text-amber-800 font-semibold">WhatsApp:</span> 
                <a href="tel:05515053607"> 0551 505 36 07</a></span>
              </div>
            </li>
          </ul>
        </div>
        
      </div>
      <div className="bg-amber-900 text-white py-3">
        <div className="flex justify-center items-center text-center">
          <div className="lg:text-lg sm:text-sm font-semibold">
            Bulut Yarka Tavukculuk <span suppressHydrationWarning>© {new Date().getUTCFullYear()}</span>
            <span className="hidden sm:inline"> Tüm hakları saklıdır.</span>
          </div>
        </div>
      </div>
      
    </footer>
  );
}


