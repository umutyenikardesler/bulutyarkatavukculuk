import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsappFloating from "@/components/WhatsappFloating";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Bulut Yarka Tavukculuk",
    template: "%s | Bulut Yarka Tavukculuk",
  },
  description:
    "Kaliteli ve sağlıklı yarka, gezen tavuk ve diğer cinslerde uzman tedarikçi.",
  metadataBase: new URL("https://www.bulutyarkatavukculuk.com"),
  alternates: { canonical: "/" },
  icons: { icon: "/images/favicon/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsappFloating />
      </body>
    </html>
  );
}
