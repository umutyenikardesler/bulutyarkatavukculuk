import Link from "next/link";
import Image from "next/image";
import CTAButtons from "@/components/CTAButtons";
import { varieties } from "@/data/varieties";

export const metadata = {
  title: "Kümes Hayvanları",
};

export default function KumesHayvanlariPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8 space-y-3">
        <h1 className="text-2xl font-semibold">Kümes Hayvanları</h1>
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
            "a-bronz-hindi",
          ].map((slug) => {
            const v = varieties.find((i) => i.slug === slug)!;
            return (
              <div key={slug} className="rounded-lg border border-black/10 dark:border-white/10 p-5 flex flex-col gap-3">
                <div className="text-sm uppercase opacity-60">{v.category}</div>
                <Link href={`/kumes-hayvanlari/${v.slug}`}>
                  <h3 className="text-lg font-medium text-amber-800 hover:underline cursor-pointer">{v.name}</h3>
                </Link>
                {/* Yalnızca görseli olan çeşitlerde görsel göster */}
                {(v.slug === "lohman-brown-yarka" ||
                  v.slug === "lohman-sandy-yarka" ||
                  v.slug === "ataks-yarka" ||
                  v.slug === "tinted-coral-yarka" ||
                  v.slug === "ligorin-yarka" ||
                  v.slug === "a-bronz-hindi" ||
                  v.slug === "suseks-yarka" ||
                  v.slug === "blue-australorp-yarka") && (
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
                    </div>
                  </Link>
                )}
                <p className="text-sm opacity-80 flex-1">{v.description}</p>
                <div className="flex items-center justify-between">
                  <Link
                    href={`/kumes-hayvanlari/${v.slug}`}
                    className="inline-flex items-center justify-center rounded-md bg-amber-800 text-white px-4 py-2 text-sm hover:bg-amber-900"
                  >
                    Detayları Gör
                  </Link>
                  <a
                    href={`https://wa.me/905464755164?text=${encodeURIComponent(`${v.name} hakkında bilgi ve fiyat teklifi almak istiyorum.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-md bg-amber-800 text-white px-4 py-2 text-sm hover:bg-amber-900"
                  >
                    Teklif Al
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}


