import Link from "next/link";
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
        <p className="opacity-80 max-w-2xl">
          Tüm yarka ve hindi çeşitlerimizi inceleyebilir, WhatsApp üzerinden hızlıca
          iletişime geçebilir veya teklif talebi oluşturabilirsiniz.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {varieties.map((v) => (
          <div key={v.slug} className="rounded-lg border border-black/10 dark:border-white/10 p-5 flex flex-col gap-3">
            <div className="text-sm uppercase opacity-60">{v.category}</div>
            <h3 className="text-lg font-medium">{v.name}</h3>
            <p className="text-sm opacity-80 flex-1">{v.description}</p>
            <div className="flex items-center justify-between">
              <Link href={`/kumes-hayvanlari/${v.slug}`} className="text-sm text-blue-600 hover:underline">
                Detayları Gör
              </Link>
              <CTAButtons whatsappMessage={`${v.name} hakkında bilgi ve fiyat teklifi almak istiyorum.`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


