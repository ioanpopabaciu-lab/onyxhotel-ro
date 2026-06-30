import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ONYX B&B Hotel & Restaurant — Cazare Borș, Lângă Vama Borș",
  description: "Hotel 3 stele la 100m de frontiera România–Ungaria, pe E60. Camere confortabile, restaurant cu 100 locuri, săli conferințe. Rezervări: 0732 403 464.",
  keywords: "cazare Borș, hotel vama Borș, hotel frontieră Ungaria, cazare corporate Bihor, hotel E60 Borș, ONYX B&B",
  openGraph: {
    title: "ONYX B&B Hotel & Restaurant — Borș, la frontiera RO-HU",
    description: "Hotel 3 stele la 100m de Vama Borș, pe E60. Rezervări online sau telefonic.",
    type: "website",
    locale: "ro_RO",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
