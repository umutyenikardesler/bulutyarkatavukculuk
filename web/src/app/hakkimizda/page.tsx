export const metadata = { title: "Hakkımızda" };

import Image from "next/image";

export default function HakkimizdaPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid md:grid-cols-2 gap-6 items-start">
        <div>
          <div className="aspect-[4/3] w-full overflow-hidden rounded-lg px-4">
            <Image src="/images/hakkimizda.jpeg" alt="Hakkımızda" width={800} height={600} className="h-full w-full object-contain" />
          </div>
        </div>
        <div className="space-y-4">
          <h1 className="text-2xl font-semibold">İşimizin Uzmanıyız</h1>
          <p>
            Bulut Yarka Tavukculuk olarak, uzun yıllara dayanan tecrübemiz ve
            uzmanlığımızla sektörde güvenilir bir iş ortağı olmanın gururunu
            yaşıyoruz. Türkiye’nin dört bir yanına sağlıklı, dayanıklı ve yüksek
            verimli yarka tavuklar ulaştırarak müşterilerimizin başarısına katkı
            sağlamayı hedefliyoruz.
          </p>
          <p>
            Bulut Yarka Tavukculuk; Ataks, Lohman Brown, Tinted Coral, Ligorin,
            Suseks, Blue Australorp, Lohman Sandy ve A.Bronz Hindi çeşitlerimizle
            ihtiyaçlarınıza uygun, sağlıklı ve aşılı kümes hayvanlarını sunuyoruz.
          </p>
          <p>
            Bizim için kalite yalnızca bir standart değil, aynı zamanda bir
            sorumluluktur. Yetiştirme sürecinde doğal ve sağlıklı koşulları
            önceliklendirir, en yüksek verimi alabilmek için uzman ekibimizle her
            aşamayı titizlikle takip ederiz. Modern tesislerimizde hijyen ve bakım
            standartlarını en üst düzeyde tutarız.
          </p>
          <p>
            Hizmetimiz yalnızca ürün teslimatıyla sınırlı değildir; aynı zamanda
            yetiştiricilik konusunda danışmanlık sunar, tavuk bakımıyla ilgili bilgi
            ve deneyimlerimizi paylaşırız. Müşteri memnuniyetini esas alır,
            güvenilirliğimizi dürüstlüğümüzden alırız. Kaliteye ve güvene önem veren
            herkes için doğru iş ortağıyız.
          </p>
        </div>
      </div>
    </div>
  );
}


