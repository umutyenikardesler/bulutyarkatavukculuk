export type Variety = {
  slug: string;
  name: string;
  category: "Yarka" | "Hindi" | "Tavuk" | "Diğer";
  description: string;
};

export const varieties: Variety[] = [
  {
    slug: "lohman-brown-yarka",
    name: "Lohman Brown Tavuk",
    category: "Tavuk",
    description:
      "Yüksek yumurta verimi ve dayanıklılığı ile bilinen, işletmeler için ideal bir cins.",
  },
  {
    slug: "a-bronz-hindi",
    name: "A.Bronz Hindi",
    category: "Hindi",
    description:
      "Hızlı gelişim ve kaliteli et verimi sunan bronz hindi çeşidi.",
  },
  {
    slug: "pleymut-yarka",
    name: "Pleymut Yarka",
    category: "Tavuk",
    description:
      "Uysal yapısı ve dengeli verimiyle küçük ve orta ölçekli çiftliklere uygundur.",
  },
  {
    slug: "isa-tinted-yarka",
    name: "Isa Tinted Yarka",
    category: "Tavuk",
    description:
      "İyi kabuk kalitesi ve istikrarlı yumurtlama grafiği ile öne çıkar.",
  },
  {
    slug: "ataks-yarka",
    name: "Ataks Tavuk",
    category: "Tavuk",
    description:
      "Türkiye koşullarına dayanıklı, yerli ve verimli bir yumurta tavuğu cinsi.",
  },
  {
    slug: "ligorin-yarka",
    name: "Ligorin Tavuk",
    category: "Tavuk",
    description:
      "Hafif yapılı, enerji etkin kullanımıyla bilinen yumurta tavuğu çeşidi.",
  },
  {
    slug: "tinted-coral-yarka",
    name: "Tinted Coral Tavuk",
    category: "Tavuk",
    description:
      "Dengeli verim ve güçlü bağışıklık özellikleriyle tercih edilir.",
  },
  {
    slug: "suseks-yarka",
    name: "Suseks Tavuk",
    category: "Tavuk",
    description:
      "Dayanıklı yapısı ve dengeli yumurta verimiyle bilinen bir çeşittir.",
  },
  {
    slug: "blue-australorp-yarka",
    name: "Blue Australorp Tavuk",
    category: "Tavuk",
    description:
      "Sakin mizacı ve istikrarlı üretimiyle öne çıkan mavi tonlu bir cins.",
  },
  {
    slug: "lohman-sandy-yarka",
    name: "Lohman Sandy Tavuk",
    category: "Tavuk",
    description:
      "Lohman ailesinin verimli üyelerinden, dengeli performans sunar.",
  },
];

export function getVarietyBySlug(slug: string) {
  return varieties.find((v) => v.slug === slug);
}


