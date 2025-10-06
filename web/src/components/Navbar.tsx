"use client";
import Link from "next/link";
import Image from "next/image";
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
    <header className="sticky top-0 z-50 bg-cyan-900 backdrop-blur border-b border-black/10 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 font-semibold tracking-tight text-lg text-white">
            <Image src="/images/chicken.png" alt="Bulut Yarka Tavukculuk" width={40} height={40} className="h-10 w-10 rounded" />
            <span>Bulut Yarka Tavukculuk</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-white inline-block rounded px-2 py-1 hover:bg-white hover:text-cyan-700 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="hidden md:flex items-center gap-3 pl-4 text-white">
              <a href="https://www.facebook.com/Kafkastavuk" aria-label="Facebook" className="hover:opacity-80" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f fa-lg" /></a>
              <a href="https://www.instagram.com/bulut_tavukculuk/" aria-label="Instagram" className="hover:opacity-80" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram fa-lg" /></a>
              <a href="https://www.youtube.com/@BULUTYARKATAVUKCULUK" aria-label="YouTube" className="hover:opacity-80" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube fa-lg" /></a>
              <a href="https://www.tiktok.com/@bulutyarkatavukculuk" aria-label="TikTok" className="hover:opacity-80" target="_blank" rel="noopener noreferrer"><i className="fab fa-tiktok fa-lg" /></a>
            </div>
          </nav>

          {/* Mobile social icons (always visible on mobile) */}
          <div className="md:hidden flex items-center gap-3 text-white pr-2">
            <a href="https://www.facebook.com/Kafkastavuk" aria-label="Facebook" className="hover:opacity-80" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f fa-lg" /></a>
            <a href="https://www.instagram.com/bulut_tavukculuk/" aria-label="Instagram" className="hover:opacity-80" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram fa-lg" /></a>
            <a href="https://www.youtube.com/@BULUTYARKATAVUKCULUK" aria-label="YouTube" className="hover:opacity-80" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube fa-lg" /></a>
            <a href="https://www.tiktok.com/@bulutyarkatavukculuk" aria-label="TikTok" className="hover:opacity-80" target="_blank" rel="noopener noreferrer"><i className="fab fa-tiktok fa-lg" /></a>
          </div>

          <button
            aria-label="Menüyü aç/kapat"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 ml-4 rounded border border-white/30 text-white"
          >
            <span className="i-lucide-menu size-5">≡</span>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden absolute left-0 right-0 top-16 border-t border-black/10 bg-white shadow-lg">
          <div className="px-4 py-3 flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-cyan-700 font-semibold inline-block rounded px-2 py-2 hover:bg-gray-100 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="md:hidden flex items-center gap-4 pt-2 text-cyan-700">
              <a href="https://www.facebook.com/Kafkastavuk" aria-label="Facebook" className="hover:opacity-80" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f fa-lg" /></a>
              <a href="https://www.instagram.com/bulut_tavukculuk/" aria-label="Instagram" className="hover:opacity-80" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram fa-lg" /></a>
              <a href="https://www.youtube.com/@BULUTYARKATAVUKCULUK" aria-label="YouTube" className="hover:opacity-80" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube fa-lg" /></a>
              <a href="https://www.tiktok.com/@bulutyarkatavukculuk" aria-label="TikTok" className="hover:opacity-80" target="_blank" rel="noopener noreferrer"><i className="fab fa-tiktok fa-lg" /></a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;


