import Link from "next/link";
import Image from "next/image";
import Testimonials from "@/components/Testimonials";

import { varieties } from "@/data/varieties";

export default function Home() {
  return (
    <div>
      <section
        id="banner"
        className="bg-cover bg-center md:bg-center bg-no-repeat min-h-[50vh] md:min-h-screen"
        style={{ backgroundImage: "url('/images/index/banner.jpg')" }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-6 md:grid-cols-2 items-center">
          <div className="space-y-4">
            <h1 className="text-3xl text-center text-cyan-700 sm:text-left sm:text-4xl font-semibold leading-tight" style={{
                textShadow:
                  "2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff, 1.5px 1.5px 0 #fff, 1.5px -1.5px 0 #fff, -1.5px 1.5px 0 #fff, -1.5px -1.5px 0 #fff",
              }}>
              BULUT YARKA TAVUKCULUK
            </h1>
            <div className="text-3xl uppercase tracking-wider text-white font-bold text-center sm:text-left" style={{
                textShadow:
                  "2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000, 1.5px 1.5px 0 #000, 1.5px -1.5px 0 #000, -1.5px 1.5px 0 #000, -1.5px -1.5px 0 #000",
              }}>0554 312 51 64</div>
            <p
              className="font-extrabold opacity-100 text-black text-center sm:text-left"
              style={{
                textShadow:
                  "2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff, 1.5px 1.5px 0 #fff, 1.5px -1.5px 0 #fff, -1.5px 1.5px 0 #fff, -1.5px -1.5px 0 #fff",
              }}
            >
              Bulut Yarka Tavukculuk olarak, doğal ortamda yetişen sağlıklı ve güçlü kümes hayvanlarımızı güvenle sizlere ulaştırıyoruz.
              <br />
              Aşı garantili, kapıda ödeme ve hızlı teslimat güvencesiyle sizlere en iyi hizmeti sunuyoruz.
            </p>
            <div className="flex gap-3 justify-center sm:justify-start">
              <Link href="/kumes-hayvanlari" className="rounded-md bg-cyan-600 font-bold text-white px-4 py-2 text-sm text-center sm:text-left hover:bg-cyan-500">Kümes Hayvanları</Link>
              <Link href="/hakkimizda" className="rounded-md bg-cyan-600 font-bold text-white px-4 py-2 text-sm  text-center sm:text-left hover:bg-cyan-500">Hakkımızda</Link>
            </div>
          </div>
          {/* <div className="aspect-video rounded-lg bg-black/10 dark:bg-white/10" /> */}
        </div>
      </section>

      <section className="bg-cover bg-center bg-cyan-200/70 md:bg-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:grid-cols-2 items-center">
        <h2 className="text-xl font-bold text-cyan-700 mb-6">💥 ÜRÜNLERİMİZ</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="rounded-lg border border-black/10 dark:border-white/10 p-5">
            <ul className="space-y-1" style={{
                textShadow:
                  "2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff, 1.5px 1.5px 0 #fff, 1.5px -1.5px 0 #fff, -1.5px 1.5px 0 #fff, -1.5px -1.5px 0 #fff",
              }}>
              <li><strong>🐔 ATAKS TAVUK</strong></li>
              <li><strong>🐔 BLACK NİCK TAVUK</strong></li>
              <li><strong>🐔 LOHMAN BROWN  TAVUK</strong></li>
              <li><strong>🐔 LOHMAN SENDY TAVUK</strong></li>
              <li><strong>🐔 TİNTED CORAL TAVUK</strong></li>
              <li><strong>🐔 SASSO HEM ETLIK HEM YUMURTALIK</strong></li>
              <li><strong>🐔 SUSEKS TAVUK</strong></li>
              <li><strong>🐔 ASTROLOP TAVUK</strong></li>
              <li><strong>🦃 A.BRONZ HİNDİ</strong></li>
            </ul>
          </div>

          <div className="rounded-lg border border-black/10 dark:border-white/10 p-5">
            <div className="space-y-2"  style={{
                textShadow:
                  "2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff, 1.5px 1.5px 0 #fff, 1.5px -1.5px 0 #fff, -1.5px 1.5px 0 #fff, -1.5px -1.5px 0 #fff",
              }}  >
              <div>⛺ HER TÜRLÜ ANAHTAR TESLİM KÜMES KURULUMU</div>
              <div>✅ 50 ADET VE ÜZERİ ALIMLARDA KAPI TESLIM</div>
              <div><strong>Ücretsiz nakliye ile kapınıza kadar gelsin.</strong></div>
              <div>💉 AŞILARI YAPILI</div>
              <div>💥 Kapora yok.</div>
              <div>🚛 Kapıda ödeme kolaylığı.</div>
              <div>👍 Her türlü Veterinerlik ve Danışmanlık hizmetleri</div>
              <div className="text-sm"><strong>Not:</strong> Yerin uzaklığına göre teslimat adet sayımız değişmektedir. </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        
      <div className="mb-8 space-y-3">
      <h2 className="text-xl font-bold text-cyan-700 mb-6">💥 KÜMES HAYVANLARIMIZ</h2>
        <p className="w-full">
          Tüm yarka ve hindi çeşitlerimizi inceleyebilir, WhatsApp üzerinden hızlıca iletişime geçebilir veya teklif talebi oluşturabilirsiniz.
        </p>
      </div>

      <div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "ataks-yarka",
            "lohman-brown-yarka",
            "tinted-coral-yarka",
            "ligorin-yarka",
            "suseks-yarka",
            "blue-australorp-yarka",
            "lohman-sandy-yarka",
            "black-nick-yarka",
            "sasso-yarka",
            "a-bronz-hindi",
          ].map((slug) => {
            const v = varieties.find((i) => i.slug === slug)!;
            return (
              <div key={slug} className="rounded-lg border border-black/10 dark:border-white/10 p-5 flex flex-col gap-3">
                <div className="text-sm uppercase opacity-60">{v.category}</div>
                <Link href={`/kumes-hayvanlari/${v.slug}`}>
                  <h3 className="text-lg font-medium text-cyan-700 hover:underline cursor-pointer">{v.name}</h3>
                </Link>
                {/* Yalnızca görseli olan çeşitlerde görsel göster */}
                {(v.slug === "lohman-brown-yarka" ||
                  v.slug === "lohman-sandy-yarka" ||
                  v.slug === "ataks-yarka" ||
                  v.slug === "tinted-coral-yarka" ||
                  v.slug === "ligorin-yarka" ||
                  v.slug === "a-bronz-hindi" ||
                  v.slug === "suseks-yarka" ||
                  v.slug === "blue-australorp-yarka" ||
                  v.slug === "black-nick-yarka" ||
                  v.slug === "sasso-yarka") && (
                  <Link href={`/kumes-hayvanlari/${v.slug}`} className="block">
                    <div className="w-full h-48 flex items-center justify-center">
                      {v.slug === "lohman-brown-yarka" && (
                        <Image src="/images/index/Lohman-Brown.png" alt={v.name} width={400} height={300} className="w-full h-full object-contain" />
                      )}
                      {v.slug === "lohman-sandy-yarka" && (
                        <Image src="/images/index/Lohman-Sandy.png" alt={v.name} width={400} height={300} className="w-full h-full object-contain" />
                      )}
                      {v.slug === "ataks-yarka" && (
                        <Image src="/images/index/Ataks-Yarka.png" alt={v.name} width={400} height={300} className="w-full h-full object-contain" />
                      )}
                      {v.slug === "tinted-coral-yarka" && (
                        <Image src="/images/index/Tinted-Coral-Yarka.png" alt={v.name} width={400} height={300} className="w-full h-full object-contain" />
                      )}
                      {v.slug === "ligorin-yarka" && (
                        <Image src="/images/index/Ligorin-Yarka.png" alt={v.name} width={400} height={300} className="w-full h-full object-contain" />
                      )}
                      {v.slug === "a-bronz-hindi" && (
                        <Image src="/images/index/A-Bronz-Hindi.jpg" alt={v.name} width={400} height={300} className="w-full h-full object-contain" />
                      )}
                      {v.slug === "suseks-yarka" && (
                        <Image src="/images/index/Sussex-Yarka.png" alt={v.name} width={400} height={300} className="w-full h-full object-contain" />
                      )}
                      {v.slug === "blue-australorp-yarka" && (
                        <Image src="/images/index/Blue-Australorp-Yarka.png" alt={v.name} width={400} height={300} className="w-full h-full object-contain" />
                      )}
                      {v.slug === "black-nick-yarka" && (
                        <Image src="/images/black-nick.png" alt={v.name} width={400} height={300} className="w-full h-full object-contain" />
                      )}
                      {v.slug === "sasso-yarka" && (
                        <Image src="/images/sasso.png" alt={v.name} width={400} height={300} className="w-full h-full object-contain" />
                      )}
                    </div>
                  </Link>
                )}
                <p className="text-sm opacity-80 flex-1">{v.description}</p>
                <div className="flex items-center justify-between">
                  <Link
                    href={`/kumes-hayvanlari/${v.slug}`}
                    className="inline-flex items-center justify-center rounded-md bg-cyan-700 text-white px-4 py-2 text-sm hover:bg-cyan-600"
                  >
                    Ürün Bilgisi
                  </Link>
                  <a
                    href={`https://wa.me/905515053607?text=${encodeURIComponent(`${v.name} hakkında bilgi ve fiyat teklifi almak istiyorum.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-md bg-cyan-700 text-white px-4 py-2 text-sm hover:bg-cyan-600"
                  >
                    Fiyat Al
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      </div>

      {/* İLKELERİMİZ */}
     <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
       <h2 className="text-xl font-bold text-cyan-700 mb-6">👉 İLKELERİMİZ</h2>
       {/* <p className="opacity-80 mb-6">Sizlere Neler Sunuyoruz?</p> */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="group rounded-lg border border-black/10 dark:border-white/10 p-5 space-y-2 transition-colors bg-cyan-700 text-white md:bg-transparent md:text-inherit md:hover:bg-cyan-800 md:hover:text-white">
          <div className="text-white md:text-cyan-700 md:group-hover:text-gray-200 font-semibold">Tecrübeli Uzman Ekip</div>
          <p className="text-sm opacity-80 text-white md:text-black md:group-hover:!text-gray-100">Alanında deneyimli ekibimizle, şartlarınıza ve hedeflerinize uygun cinsleri öneriyoruz.</p>
        </div>
        <div className="group rounded-lg border border-black/10 dark:border-white/10 p-5 space-y-2 transition-colors bg-cyan-700 text-white md:bg-transparent md:text-inherit md:hover:bg-cyan-800 md:hover:text-white">
          <div className="text-white md:text-cyan-700 md:group-hover:text-gray-200 font-semibold">Satış Öncesi Danışmanlık</div>
          <p className="text-sm opacity-80 text-white md:text-black md:group-hover:!text-gray-100">Bütçe, iklim ve pazarınıza göre en verimli cinsi birlikte belirleyip yönlendiriyoruz.</p>
        </div>
        <div className="group rounded-lg border border-black/10 dark:border-white/10 p-5 space-y-2 transition-colors bg-cyan-700 text-white md:bg-transparent md:text-inherit md:hover:bg-cyan-800 md:hover:text-white">
          <div className="text-white md:text-cyan-700 md:group-hover:text-gray-200 font-semibold">Satış Sonrası Destek</div>
          <p className="text-sm opacity-80 text-white md:text-black md:group-hover:!text-gray-100">Besleme, aşı ve bakım süreçlerinde sürekli bilgilendirme ve destek sağlıyoruz.</p>
        </div>
        <div className="group rounded-lg border border-black/10 dark:border-white/10 p-5 space-y-2 transition-colors bg-cyan-700 text-white md:bg-transparent md:text-inherit md:hover:bg-cyan-800 md:hover:text-white">
          <div className="text-white md:text-cyan-700 md:group-hover:text-gray-200 font-semibold">Güvenilir & Kaliteli Hizmet</div>
          <p className="text-sm opacity-80 text-white md:text-black md:group-hover:!text-gray-100">Aşılı ve seçkin hayvanları, uygun araçlarla adresinize güvenle teslim ediyoruz.</p>
        </div>
      </div>
     </section>

     <Testimonials />
      
    </div>
  );
}
