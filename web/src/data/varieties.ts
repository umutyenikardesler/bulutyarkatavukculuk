export type Variety = {
  slug: string;
  name: string;
  category: "Yarka" | "Hindi" | "Tavuk" | "Diğer";
  description: string;
};

export const varieties: Variety[] = [
  {
    slug: "lohman-brown-yarka",
    name: "Lohman Brown Yarka",
    category: "Yarka",
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
    category: "Yarka",
    description:
      "Uysal yapısı ve dengeli verimiyle küçük ve orta ölçekli çiftliklere uygundur.",
  },
  {
    slug: "isa-tinted-yarka",
    name: "Isa Tinted Yarka",
    category: "Yarka",
    description:
      "İyi kabuk kalitesi ve istikrarlı yumurtlama grafiği ile öne çıkar.",
  },
  {
    slug: "ataks-yarka",
    name: "Ataks Yarka",
    category: "Yarka",
    description:
      "Türkiye koşullarına dayanıklı, yerli ve verimli bir yumurta tavuğu cinsi.",
  },
  {
    slug: "ligorin-yarka",
    name: "Ligorin Yarka",
    category: "Yarka",
    description:
      "Hafif yapılı, enerji etkin kullanımıyla bilinen yumurta tavuğu çeşidi.",
  },
  {
    slug: "tinted-coral-yarka",
    name: "Tinted Coral Yarka",
    category: "Yarka",
    description:
      "Dengeli verim ve güçlü bağışıklık özellikleriyle tercih edilir.",
  },
];

export function getVarietyBySlug(slug: string) {
  return varieties.find((v) => v.slug === slug);
}


