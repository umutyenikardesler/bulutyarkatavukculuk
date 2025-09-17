import Link from "next/link";
import CTAButtons from "@/components/CTAButtons";

export default function Home() {
  return (
    <div>
      <section className="bg-gradient-to-b from-black/5 to-transparent dark:from-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-6 md:grid-cols-2 items-center">
          <div className="space-y-4">
            <div className="text-sm uppercase tracking-wider opacity-60">İşimizin Uzmanıyız</div>
            <h1 className="text-3xl sm:text-4xl font-semibold leading-tight">
              Kaliteli & Sağlıklı Tavuklarımız ile Tanışın
            </h1>
            <p className="opacity-80">
              Yarka, gezen tavuk, Lohman Brown ve diğer cinslerde uzman tedarikçi.
              Teslimat ağımızla hızlı ve güvenilir hizmet sunuyoruz.
            </p>
            <div className="flex gap-3">
              <Link href="/kumes-hayvanlari" className="rounded-md bg-blue-600 text-white px-4 py-2 text-sm hover:bg-blue-700">Kümes Hayvanları</Link>
              <Link href="/hakkimizda" className="rounded-md border border-black/15 dark:border-white/15 px-4 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/5">Hakkımızda</Link>
            </div>
          </div>
          <div className="aspect-video rounded-lg bg-black/10 dark:bg-white/10" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-xl font-semibold mb-6">Son Eklenen Kümes Hayvanları</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {["Lohman Brown Yarka", "Tinted Coral Yarka", "Ataks Yarka"].map((name) => (
            <div key={name} className="rounded-lg border border-black/10 dark:border-white/10 p-5 flex flex-col gap-3">
              <h3 className="text-lg font-medium">{name}</h3>
              <p className="text-sm opacity-80">Sipariş için bizimle iletişime geçiniz.</p>
              <CTAButtons whatsappMessage={`${name} hakkında bilgi ve fiyat teklifi almak istiyorum.`} />
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

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-xl font-semibold mb-2">B2B Platformumuz ile İşinizi Kolaylaştırın</h2>
        <p className="opacity-80 mb-4">Kolay sipariş, toptan fiyat avantajları ve özel müşteri desteği.</p>
        <CTAButtons />
      </section>
    </div>
  );
}
