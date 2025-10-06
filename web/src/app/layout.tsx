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
    <html lang="tr" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased" suppressHydrationWarning>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsappFloating />
      </body>
    </html>
  );
}
