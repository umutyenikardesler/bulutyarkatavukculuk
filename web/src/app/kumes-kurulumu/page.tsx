import Image from "next/image";

export const metadata = { title: "Kümes Kurulumu" };

export default function KumesKurulumuPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 space-y-6">

      <h1 className="text-2xl font-semibold">Kümes Kurulumu</h1>
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="rounded-lg overflow-hidden border border-black/10 dark:border-white/10">
          <Image
            src="/images/kumes1.jpeg"
            alt="Kümes 1"
            width={800}
            height={600}
            className="w-full h-64 object-cover"
          />
        </div>
        <div className="rounded-lg overflow-hidden border border-black/10 dark:border-white/10">
          <Image
            src="/images/kumes2.jpeg"
            alt="Kümes 2"
            width={800}
            height={600}
            className="w-full h-64 object-cover"
          />
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-lg font-bold text-amber-800">SEKTÖRÜN EN GÜVENİLİR İSMİNDEN KALİTELİ ÇADIR YAPILAR</h2>
        <h3 className="font-semibold">MENTEŞELİ PENCERELER VE ÜSTE MAHYA SİSTEMLİ HAVALANDIRMALAR</h3>
        <p className="opacity-80 text-sm">
          Tüm çadırlar hayvanların rahat edebilmesi için özel olarak dizayn edilmiştir. Ayrıca zorlu hava şartlarına karşı da
          oldukça kalitesi ile ön planda yer alır. Siz de tercih ederek kullanım sağlayabilirsiniz. Hayvan çadırı fiyatlarımız
          ise ekonomik ve garantili olarak size sunulur. Hizmet içeriklerinden yararlanarak sağlıklı sonuçlar elde edebilirsiniz.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-[35%_40%_25%]">
        <div className="space-y-3">
          <h3 className="font-semibold">DIŞ KAPLAMA</h3>
          <ul className="list-disc pl-6 text-sm space-y-1">
            <li>Üst branda m² 650 gr</li>
            <li>-30°C ile +70°C ısı derecelerine dayanıklı</li>
            <li>Su geçirmez PVC kaplamalı polyester, özel dokuma branda</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="font-semibold">İZOLASYON MALZEMELERİ</h3>
          <ul className="list-disc pl-6 text-sm space-y-1">
            <li>Alüminyum folyo kaplamalı 8 cm cam yünü izolasyon malzemesi</li>
            <li>Alüminyum folyo kaplı çift hava kabarcıklı 1 cm izolasyon malzemesi</li>
            <li>m² ağırlığı 500 gr özel dokuma olan 1 cm geçe malzemesi</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="font-semibold">ASTAR MALZEMELERİ</h3>
          <ul className="list-disc pl-6 text-sm space-y-1">
            <li>Alt branda m² 180 gr pilsa branda</li>
            <li>Çuval bezi (jut)</li>
          </ul>
        </div>
      </div>

      <div className="space-y-2 text-sm">
        <p>- Dış kaplama; güneş ışınlarına, soğuğa, yırtılmaya karşı dayanıklıdır (PVC kaplı polyester dokuma branda).</p>
        <p>- Işık geçirmez.</p>
        <p>· Aynı büyüklükteki bir binadan yarı yarıya daha ucuzdur.</p>
        <p>
          – Cam yünü dolgulu ısı yalıtım şilteleri, ısının dışarıdan içeriye kaçmasını engeller ve içeride kalmasını sağlar.
        </p>
        <p>– 60 km/s rüzgâra, 50 kg/m² kar tabakasına dayanıklıdır.</p>
        <p>– Özel bir temel, kolon veya başka bir destek gerektirmez.</p>
        <p>
          – Her an sökülebilmesi nedeniyle, resmi yazışmalar ve inşaat iskan ruhsatlarına gerek kalmadan dilediğiniz yere
          kurulabilir.
        </p>
      </div>

      <div className="space-y-2">
        <h3 className="font-semibold">KURMUŞ OLDUĞUMUZ ÖRNEK ÇADIRLAR</h3>
        <ul className="list-disc pl-6 text-sm space-y-1">
          <li>Büyükbaş — Depo Çadırları</li>
          <li>Küçükbaş — Besi Çadırı</li>
          <li>Tavuk Kümesleri — Makaslı Sistemler</li>
          <li>Mantar Çadırları — Solucan Çadırları</li>
        </ul>
      </div>
    </div>
  );
}


