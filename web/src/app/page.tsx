import Link from "next/link";
import Image from "next/image";
import CTAButtons from "@/components/CTAButtons";

export default function Home() {
  return (
    <div>
      <section id="banner" className="bg-cover bg-center min-h-screen" style={{ backgroundImage: "url('/images/index/banner.jpg')" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-6 md:grid-cols-2 items-center">
          <div className="space-y-4">
            <div className="text-xl uppercase tracking-wider opacity-80">İşimizin Uzmanıyız</div>
            <h1 className="text-3xl sm:text-4xl font-semibold leading-tight">
              Kaliteli & Sağlıklı Tavuklarımız ile Tanışın
            </h1>
            <p
              className="font-extrabold opacity-100 text-black"
              style={{
                textShadow:
                  "2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff, 1.5px 1.5px 0 #fff, 1.5px -1.5px 0 #fff, -1.5px 1.5px 0 #fff, -1.5px -1.5px 0 #fff",
              }}
            >
              Yarka, gezen tavuk, Lohman Brown ve diğer cinslerde uzman tedarikçi.
              Teslimat ağımızla hızlı ve güvenilir hizmet sunuyoruz.
            </p>
            <div className="flex gap-3">
              <Link href="/kumes-hayvanlari" className="rounded-md bg-amber-800 text-white px-4 py-2 text-sm hover:bg-amber-700">Kümes Hayvanları</Link>
              <Link href="/hakkimizda" className="rounded-md bg-amber-800 text-white px-4 py-2 text-sm hover:bg-amber-700">Hakkımızda</Link>
            </div>
          </div>
          {/* <div className="aspect-video rounded-lg bg-black/10 dark:bg-white/10" /> */}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-xl font-bold text-amber-800 mb-6">Son Eklenen Kümes Hayvanları</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {["Lohman Brown Yarka", "Lohman Sandy", "Ataks Yarka"].map((name) => (
            <div key={name} className="rounded-lg border border-black/10 dark:border-white/10 p-5 flex flex-col gap-3">
              <h3 className="text-lg font-medium text-amber-800 text-center">{name}</h3>
              {name === "Lohman Brown Yarka" && (
                <div className="w-full h-48 flex items-center justify-center">
                  <Image
                    src="/images/index/Lohman-Brown.png"
                    alt="Lohman Brown Yarka"
                    width={400}
                    height={300}
                    className="w-full h-full object-contain"
                  />
                </div>
              )}
              {name === "Lohman Sandy" && (
                <div className="w-full h-48 flex items-center justify-center">
                  <Image
                    src="/images/index/Lohman-Sandy.png"
                    alt="Lohman Sandy"
                    width={400}
                    height={300}
                    className="w-full h-full object-contain"
                  />
                </div>
              )}
              {name === "Ataks Yarka" && (
                <div className="w-full h-48 flex items-center justify-center">
                  <Image
                    src="/images/index/Ataks-Yarka.png"
                    alt="Ataks Yarka"
                    width={400}
                    height={300}
                    className="w-full h-full object-contain"
                  />
                </div>
              )}
              <a
                href={`https://wa.me/905464755164?text=${encodeURIComponent(
                  `${name} hakkında bilgi ve fiyat teklifi almak istiyorum.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-amber-800 text-white px-4 py-2 text-sm hover:bg-amber-900"
              >
                Whatsapp ile İletişime Geç & Teklif Al
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-xl font-semibold mb-4">Teslimat Bölgelerimiz</h2>
        <div className="flex flex-wrap gap-2 text-sm">
          {["Bursa","Balıkesir","Manisa","İzmir","Yalova","İstanbul","Kırklareli","Eskişehir","Bilecik","Kütahya","Ankara"].map((city) => (
            <span key={city} className="rounded-full border border-black/15 dark:border-white/15 px-3 py-1">{city}</span>
          ))}
        </div>
      </section>

      
    </div>
  );
}
