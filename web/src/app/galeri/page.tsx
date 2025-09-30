export const metadata = { title: "Galeri" };

import GalleryGrid from "./GalleryGrid";

export default function GaleriPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl font-semibold mb-6">Kümesimizden Görüntüler</h1>
      <GalleryGrid />
    </div>
  );
}


