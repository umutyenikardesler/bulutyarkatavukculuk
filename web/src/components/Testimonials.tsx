"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

type Review = {
  name: string;
  rating: number; // 1..5
  comment: string;
};

const initialReviews: Review[] = [
  { name: "Ahmet", rating: 5, comment: "Gerçekten ürünleri çok kaliteli, tavsiye ederim." },
  { name: "Emine", rating: 4, comment: "Hızlı teslimat, iletişim çok iyi. Tekrar sipariş vereceğim." },
  { name: "Umut", rating: 5, comment: "Hayvanlarınızın sağlıklı ve yüksek verimli olması bizi çok sevindirdi. Teşekkürler." },
];

export default function Testimonials() {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [selectedRating, setSelectedRating] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [comment, setComment] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const itemsPerPage = 3;
  const totalPages = Math.max(1, Math.ceil(reviews.length / itemsPerPage));
  const startIndex = (page - 1) * itemsPerPage;
  const pageReviews = reviews.slice(startIndex, startIndex + itemsPerPage);

  useEffect(() => {
    const newTotalPages = Math.max(1, Math.ceil(reviews.length / itemsPerPage));
    if (page > newTotalPages) {
      setPage(newTotalPages);
    }
  }, [reviews.length, page]);

  const ratingOptions = useMemo(
    () => [
      { label: "Çok Memnun Kaldım", value: 5 },
      { label: "Memnun Kaldım", value: 4 },
      { label: "İyi", value: 3 },
      { label: "Memnun Kalmadım", value: 2 },
      { label: "Hiç Memnun Kalmadım", value: 1 },
    ],
    []
  );

  function renderStars(rating: number) {
    const filled = "★".repeat(rating);
    const empty = "☆".repeat(5 - rating);
    return (
      <span className="text-amber-600" aria-label={`Puan: ${rating}/5`}>
        {filled}
        <span className="opacity-40">{empty}</span>
      </span>
    );
  }

  function handleSubmit() {
    const numericRating = Number(selectedRating);
    if (!numericRating || !fullName.trim() || !comment.trim()) {
      return;
    }
    const newReview: Review = {
      name: fullName.trim(),
      rating: numericRating,
      comment: comment.trim(),
    };
    setReviews((prev) => [newReview, ...prev]);
    setPage(1);
    setSelectedRating("");
    setFullName("");
    setComment("");
  }

  function handleDelete(index: number) {
    setReviews((prev) => prev.filter((_, i) => i !== index));
  }

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-xl font-bold text-amber-800 mb-6">🎊 MÜŞTERİ YORUMLARI</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          {pageReviews.map((r, idx) => {
            const absoluteIndex = startIndex + idx;
            return (
              <div key={`${r.name}-${absoluteIndex}`} className="rounded-lg border border-black/10 dark:border-white/10 p-5">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <Image
                      src="/images/yorum.png"
                      alt={`${r.name} avatar`}
                      width={70}
                      height={70}
                      className="h-[70px] w-[70px] rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold">{r.name}</div>
                      <p className="text-sm opacity-80">{r.comment}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 self-center">
                    {renderStars(r.rating)}
                    <button
                      type="button"
                      onClick={() => handleDelete(absoluteIndex)}
                      className="text-sm px-3 py-1.5 rounded border border-black/20 hover:bg-amber-800 hover:text-white transition-colors"
                      aria-label="Yorumu sil"
                    >
                      Sil
                    </button>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="mt-2 flex items-center justify-center gap-2">
            <button
              aria-label="Önceki sayfa"
              disabled={page === 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              className="px-3 py-1 rounded border border-black/10 dark:border-white/10 disabled:opacity-50"
            >
              Önceki
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                aria-current={p === page ? "page" : undefined}
                onClick={() => setPage(p)}
                className={`px-3 py-1 rounded border text-sm ${
                  p === page
                    ? "bg-amber-800 text-white border-amber-800"
                    : "border-black/10 dark:border-white/10"
                }`}
              >
                {p}
              </button>
            ))}
            <button
              aria-label="Sonraki sayfa"
              disabled={page === totalPages}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              className="px-3 py-1 rounded border border-black/10 dark:border-white/10 disabled:opacity-50"
            >
              Sonraki
            </button>
          </div>
        </div>

        <div className="rounded-lg border border-black/10 dark:border-white/10 p-5">
          <div className="space-y-4">
            <div>
              <label htmlFor="rating" className="block text-sm font-semibold mb-1 text-amber-800">Deneyiminiz</label>
              <select
                id="rating"
                name="rating"
                value={selectedRating}
                onChange={(e) => setSelectedRating(e.target.value)}
                className="w-full rounded border border-black/15 dark:border-white/15 px-3 py-2 text-sm"
              >
                <option value="">-- Lütfen Seçim Yapın --</option>
                {ratingOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-1 text-amber-800">İsim Soyisim</label>
              <input
                id="name"
                name="name"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full rounded border border-black/15 dark:border-white/15 px-3 py-2 text-sm"
                placeholder="Adınız Soyadınız"
              />
            </div>
            <div>
              <label htmlFor="comment" className="block text-sm font-semibold mb-1 text-amber-800">Yorum Yaz</label>
              <textarea
                id="comment"
                name="comment"
                rows={4}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full rounded border border-black/15 dark:border-white/15 px-3 py-2 text-sm"
                placeholder="Deneyiminizi paylaşın..."
              />
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleSubmit}
                className="inline-flex items-center justify-center rounded-md bg-amber-800 text-white px-4 py-2 text-sm hover:bg-amber-900"
              >
                Gönder
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


