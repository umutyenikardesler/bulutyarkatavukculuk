import Link from "next/link";

type CTAButtonsProps = {
  whatsappMessage?: string;
};

const WHATSAPP_NUMBER = "+905515053607";

export default function CTAButtons({ whatsappMessage }: CTAButtonsProps) {
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER.replace("+", "")}?text=${encodeURIComponent(
    whatsappMessage || "Merhaba, ürünleriniz hakkında bilgi ve fiyat teklifi almak istiyorum."
  )}`;

  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-md bg-emerald-600 text-white px-4 py-2 text-sm hover:bg-emerald-700"
      >
        WhatsApp ile iletişime geç
      </a>
      <Link
        href="/iletisim#teklif"
        className="inline-flex items-center justify-center rounded-md bg-amber-800 text-white px-4 py-2 text-sm hover:bg-amber-900"
      >
        Teklif al
      </Link>
    </div>
  );
}


