"use client";
import Link from "next/link";
import { useState } from "react";

const navItems: Array<{ href: string; label: string }> = [
  { href: "/", label: "Anasayfa" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/kumes-hayvanlari", label: "Kümes Hayvanları" },
  { href: "/galeri", label: "Galeri" },
  { href: "/iletisim", label: "İletişim" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b border-black/10 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="font-semibold tracking-tight text-lg">
            İnegöl Yarka Tavuk
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm hover:opacity-80 transition-opacity"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            aria-label="Menüyü aç/kapat"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded border border-black/10 dark:border-white/10"
          >
            <span className="i-lucide-menu size-5">≡</span>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-black/10 dark:border-white/10">
          <div className="px-4 py-3 flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-1"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;


