"use client";
import Image from "next/image";
import { useState } from "react";

const images: string[] = [
  "/images/gallery/galeri1.jpg",
  "/images/gallery/galeri2.jpg",
  "/images/gallery/galeri3.jpg",
  "/images/gallery/galeri4.jpg",
  "/images/gallery/galeri5.jpg",
  "/images/gallery/galeri6.jpg",
  "/images/gallery/galeri7.jpg",
  "/images/gallery/galeri8.jpg",
];

export default function GalleryGrid() {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((src, idx) => (
          <button
            key={idx}
            className="group aspect-square rounded-lg overflow-hidden bg-black/5 dark:bg-white/5"
            onClick={() => setCurrentIndex(idx)}
          >
            <Image
              src={src}
              alt={`Galeri ${idx + 1}`}
              width={600}
              height={600}
              className="h-full w-full object-cover transition-transform group-hover:scale-105"
            />
          </button>
        ))}
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
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-20 h-16 w-16 rounded-full bg-black/80 text-white shadow-xl ring-1 ring-white/30 hover:bg-black/90 flex items-center justify-center text-3xl"
              onClick={() =>
                setCurrentIndex((prev) => {
                  if (prev === null) return prev;
                  return (prev - 1 + images.length) % images.length;
                })
              }
            >
              ‹
            </button>

            <button
              aria-label="Sonraki"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-20 h-16 w-16 rounded-full bg-black/80 text-white shadow-xl ring-1 ring-white/30 hover:bg-black/90 flex items-center justify-center text-3xl"
              onClick={() =>
                setCurrentIndex((prev) => {
                  if (prev === null) return prev;
                  return (prev + 1) % images.length;
                })
              }
            >
              ›
            </button>

            <div className="w-[800px] h-[600px] max-w-full max-h-[80vh]">
              <Image
                src={images[currentIndex]}
                alt="Tam boy resim"
                width={800}
                height={600}
                className="w-[800px] h-[600px] max-w-full max-h-[80vh] object-contain rounded"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}


