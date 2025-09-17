export const metadata = { title: "Galeri" };

const images = Array.from({ length: 8 }).map((_, i) => ({
  id: i + 1,
  src: `/placeholder-${i + 1}.jpg`,
}));

export default function GaleriPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl font-semibold mb-6">Kümesimizden Görüntüler</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img) => (
          <div key={img.id} className="aspect-square rounded-lg bg-black/5 dark:bg-white/5" />
        ))}
      </div>
    </div>
  );
}


