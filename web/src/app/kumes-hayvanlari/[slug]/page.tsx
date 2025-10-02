import { notFound } from "next/navigation";
import CTAButtons from "@/components/CTAButtons";
import Image from "next/image";
import { getVarietyBySlug, varieties } from "@/data/varieties";
import { varietyDetails } from "@/data/varietyDetails";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return varieties.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const v = getVarietyBySlug(slug);
  return {
    title: v ? v.name : "Ürün",
  };
}

export default async function VarietyDetailPage({ params }: Props) {
  const { slug } = await params;
  const variety = getVarietyBySlug(slug);
  if (!variety) return notFound();

  const detail = varietyDetails[slug];
  if (detail) {
    return (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 space-y-6">
        <h1 className="text-2xl font-semibold">{variety.name}</h1>

        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          <div className="relative rounded-lg overflow-hidden border border-black/10 dark:border-white/10 h-full min-h-[300px]">
            <Image src={detail.imageSrc} alt={variety.name} fill className="object-cover" />
          </div>
          <div className="space-y-4 text-base text-justify">
            {detail.paragraphs.map((text, i) => (
              <p
                key={i}
                dangerouslySetInnerHTML={{
                  __html: text
                    .replace("Lohman Brown tavuk", "<strong>Lohman Brown tavuk</strong>")
                    .replace("Ataks tavuk", "<strong>Ataks tavuk</strong>")
                    .replace("Tinted Coral tavuk", "<strong>Tinted Coral tavuk</strong>")
                    .replace("Ligorin tavuk", "<strong>Ligorin tavuk</strong>")
                    .replace("Suseks tavuk", "<strong>Suseks tavuk</strong>")
                    .replace("Blue Australorp", "<strong>Blue Australorp</strong>")
                    .replace("Lohman Sandy tavuk", "<strong>Lohman Sandy tavuk</strong>")
                    .replace("Amerikan Bronz hindi", "<strong>Amerikan Bronz hindi</strong>"),
                }}
              />
            ))}
            <div>
              <a
                href={`https://wa.me/905515053607?text=${encodeURIComponent(`${variety.name} hakkında bilgi almak istiyorum.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-amber-800 text-white px-4 py-2 text-sm hover:bg-amber-900"
              >
                WhatsApp ile İletişime Geç
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10 space-y-6">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold">{variety.name}</h1>
          <p className="opacity-80 text-justify">{variety.description}</p>
        </div>

      <CTAButtons whatsappMessage={`${variety.name} hakkında bilgi ve fiyat teklifi almak istiyorum.`} />
    </div>
  );
}


