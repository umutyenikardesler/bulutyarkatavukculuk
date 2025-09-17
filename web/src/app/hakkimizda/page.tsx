export const metadata = { title: "Hakkımızda" };

export default function HakkimizdaPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10 space-y-6">
      <h1 className="text-2xl font-semibold">İşimizin Uzmanıyız</h1>
      <p>
        İnegöl Yarka Tavuk olarak yarka, gezen tavuk, Lohman Brown ve diğer cinslerde
        uzmanlaşmış, güvenilir bir tedarikçiyiz. Yılların tecrübesiyle sağlıklı ve aşılı
        hayvanları, hızlı lojistik altyapımızla sizlere ulaştırıyoruz.
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Aşılı ve sağlıklı hayvanlar</li>
        <li>Çeşitli tavuk cinsleri</li>
        <li>Hızlı teslimat ve rekabetçi fiyatlar</li>
      </ul>
    </div>
  );
}


