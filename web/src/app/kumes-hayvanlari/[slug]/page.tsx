import { notFound } from "next/navigation";
import CTAButtons from "@/components/CTAButtons";
import { getVarietyBySlug, varieties } from "@/data/varieties";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return varieties.map((v) => ({ slug: v.slug }));
}

export function generateMetadata({ params }: Props) {
  const v = getVarietyBySlug(params.slug);
  return {
    title: v ? v.name : "Ürün",
  };
}

export default function VarietyDetailPage({ params }: Props) {
  const variety = getVarietyBySlug(params.slug);
  if (!variety) return notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10 space-y-6">
      <div className="space-y-2">
        <div className="text-sm uppercase opacity-60">{variety.category}</div>
        <h1 className="text-2xl font-semibold">{variety.name}</h1>
        <p className="opacity-80">{variety.description}</p>
      </div>

      <CTAButtons whatsappMessage={`${variety.name} hakkında bilgi ve fiyat teklifi almak istiyorum.`} />
    </div>
  );
}


