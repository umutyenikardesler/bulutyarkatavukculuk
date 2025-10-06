"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const images: string[] = Array.from({ length: 27 }, (_, i) => `/images/galeri/${i + 1}.jpeg`);

export default function GalleryGrid() {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [page, setPage] = useState<number>(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(images.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const pageImages = images.slice(startIndex, startIndex + itemsPerPage);
  const pageLastIndex = Math.min(startIndex + itemsPerPage, images.length) - 1;

  useEffect(() => {
    setCurrentIndex(null);
  }, [page]);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-4 gap-4">
        {pageImages.map((src, idx) => (
          <button
            key={startIndex + idx}
            className="group aspect-square rounded-lg overflow-hidden bg-black/5 dark:bg-white/5"
            onClick={() => setCurrentIndex(startIndex + idx)}
          >
            <Image
              src={src}
              alt={`Galeri ${startIndex + idx + 1}`}
              width={600}
              height={600}
              className="h-full w-full object-cover transition-transform group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center gap-2">
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
                ? "bg-cyan-800 text-white border-cyan-800"
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

      {currentIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={() => setCurrentIndex(null)}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <button
              aria-label="Kapat"
              className="absolute -top-3 -right-3 h-10 w-10 rounded-full bg-black/70 text-white"
              onClick={() => setCurrentIndex(null)}
            >
              ✕
            </button>

            <button
              aria-label="Önceki"
              disabled={currentIndex !== null ? currentIndex <= startIndex : true}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 md:-translate-x-20 h-12 w-12 md:h-16 md:w-16 rounded-full bg-black/80 text-white shadow-xl ring-1 ring-white/30 hover:bg-black/90 disabled:opacity-50 flex items-center justify-center text-2xl md:text-3xl"
              onClick={() =>
                setCurrentIndex((prev) => {
                  if (prev === null) return prev;
                  return prev > startIndex ? prev - 1 : prev;
                })
              }
            >
              ‹
            </button>

            <button
              aria-label="Sonraki"
              disabled={currentIndex !== null ? currentIndex >= pageLastIndex : true}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 md:translate-x-20 h-12 w-12 md:h-16 md:w-16 rounded-full bg-black/80 text-white shadow-xl ring-1 ring-white/30 hover:bg-black/90 disabled:opacity-50 flex items-center justify-center text-2xl md:text-3xl"
              onClick={() =>
                setCurrentIndex((prev) => {
                  if (prev === null) return prev;
                  return prev < pageLastIndex ? prev + 1 : prev;
                })
              }
            >
              ›
            </button>

            <div className="w-[80vw] h-auto max-h-[70vh] md:w-[800px] md:h-[600px] md:max-h-[70vh]">
              <Image
                src={images[currentIndex]}
                alt="Tam boy resim"
                width={800}
                height={600}
                className="w-[80vw] h-auto max-h-[70vh] md:w-[800px] md:h-[600px] md:max-h-[70vh] object-contain rounded"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}


