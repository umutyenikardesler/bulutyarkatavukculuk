"use client";

type Review = {
  name: string;
  rating: number; // 1..5
  comment: string;
};

const leftReviews: Review[] = [
  { name: "Ahmet", rating: 5, comment: "Gerçekten ürünleri çok kaliteli, tavsiye ederim." },
  { name: "Emine", rating: 4, comment: "Hızlı teslimat, iletişim çok iyi. Tekrar sipariş vereceğim." },
  { name: "Umut", rating: 5, comment: "Hayvanlarınızın sağlıklı ve yüksek verimli olması bizi çok sevindirdi. Teşekkürler." },
];

const rightReviews: Review[] = [
  { name: "Mehmet", rating: 5, comment: "İlgi ve alaka harikaydı, her şey sorunsuz ilerledi." },
  { name: "Zeynep", rating: 5, comment: "Hızlı dönüş ve temiz teslimat. Tavsiye ederim." },
  { name: "Ayşe", rating: 4, comment: "Ürün kalitesi çok iyi, tekrar alışveriş yapacağım." },
];

function renderStars(rating: number) {
  const filled = "★".repeat(rating);
  const empty = "☆".repeat(5 - rating);
  return (
    <span className="text-cyan-600" aria-label={`Puan: ${rating}/5`}>
      {filled}
      <span className="opacity-40">{empty}</span>
    </span>
  );
}

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-xl font-bold text-cyan-700 mb-6">🎊 MÜŞTERİ YORUMLARI</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          {leftReviews.map((r, idx) => (
            <div key={`left-${r.name}-${idx}`} className="rounded-lg border border-black/10 dark:border-white/10 p-5">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="h-[70px] w-[70px] rounded-full bg-cyan-700 text-white flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-comment text-2xl" aria-hidden="true"></i>
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold">{r.name}</div>
                    <p className="text-sm opacity-80 break-words">{r.comment}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 self-center">{renderStars(r.rating)}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          {rightReviews.map((r, idx) => (
            <div key={`right-${r.name}-${idx}`} className="rounded-lg border border-black/10 dark:border-white/10 p-5">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="h-[70px] w-[70px] rounded-full bg-cyan-700 text-white flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-comment text-2xl" aria-hidden="true"></i>
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold">{r.name}</div>
                    <p className="text-sm opacity-80 break-words">{r.comment}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 self-center">{renderStars(r.rating)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}