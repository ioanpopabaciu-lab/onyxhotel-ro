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
  title: {
    default: "ONYX B&B Hotel & Restaurant | Cazare Borș — La 100m de Vama Borș",
    template: "%s | ONYX B&B Hotel & Restaurant Borș",
  },
  description:
    "Hotel 3 stele la 100 metri de Vama Borș pe E60. Camere single, duble, triple, restaurant cu 100 locuri, catering, săli evenimente, parcare TIR. Recepție 24/7. Rezervări: 0732 403 464.",
  keywords: [
    "hotel Borș",
    "cazare Borș",
    "hotel vama Borș",
    "hotel frontieră Ungaria",
    "cazare E60 Bihor",
    "restaurant Borș",
    "sală evenimente Borș",
    "catering Borș",
    "hotel TIR Borș",
    "cazare corporate Bihor",
    "ONYX B&B",
    "hotel Oradea frontieră",
  ],
  authors: [{ name: "ONYX B&B Hotel & Restaurant" }],
  creator: "ONYX B&B Hotel & Restaurant",
  publisher: "ONYX B&B Hotel & Restaurant",
  metadataBase: new URL("https://onyxhotel.ro"),
  alternates: { canonical: "https://onyxhotel.ro" },
  openGraph: {
    title: "ONYX B&B Hotel & Restaurant | Cazare Borș — La 100m de Vama Borș",
    description:
      "Hotel 3 stele la 100m de Vama Borș, pe E60. Restaurant 100 locuri, catering, evenimente, parcare TIR. Rezervați acum: 0732 403 464.",
    type: "website",
    locale: "ro_RO",
    url: "https://onyxhotel.ro",
    siteName: "ONYX B&B Hotel & Restaurant",
    images: [
      {
        url: "/images/hotel-facade.png",
        width: 1200,
        height: 630,
        alt: "ONYX B&B Hotel & Restaurant Borș",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ONYX B&B Hotel & Restaurant Borș",
    description: "Hotel 3 stele la 100m de Vama Borș, pe E60. Rezervați acum!",
    images: ["/images/hotel-facade.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Hotel",
      "@id": "https://onyxhotel.ro/#hotel",
      name: "ONYX B&B Hotel & Restaurant",
      description:
        "Hotel 3 stele la 100 metri de Vama Borș pe E60. Camere confortabile, restaurant cu 100 locuri, catering și organizare evenimente.",
      url: "https://onyxhotel.ro",
      telephone: "+40732403464",
      email: "rezervari@onyxhotel.ro",
      starRating: { "@type": "Rating", ratingValue: "3" },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Șos. E60, Borșului nr. 157",
        addressLocality: "Borș",
        addressRegion: "Bihor",
        postalCode: "417046",
        addressCountry: "RO",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 47.0453,
        longitude: 21.9961,
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Parcare gratuită", value: true },
        { "@type": "LocationFeatureSpecification", name: "Wi-Fi gratuit", value: true },
        { "@type": "LocationFeatureSpecification", name: "Restaurant", value: true },
        { "@type": "LocationFeatureSpecification", name: "Recepție 24/7", value: true },
        { "@type": "LocationFeatureSpecification", name: "Parcare TIR", value: true },
        { "@type": "LocationFeatureSpecification", name: "Animale de companie permise", value: true },
      ],
      priceRange: "$$",
      currenciesAccepted: "RON",
      paymentAccepted: "Cash, Card",
    },
    {
      "@type": "FoodEstablishment",
      "@id": "https://onyxhotel.ro/restaurant#restaurant",
      name: "Restaurant ONYX B&B",
      description: "Restaurant cu 100 locuri, bar funcțional, bucătărie tradițională și internațională. Deschis zilnic 07:00–23:00.",
      url: "https://onyxhotel.ro/restaurant",
      telephone: "+40732403464",
      servesCuisine: ["Romanian", "International"],
      openingHours: "Mo-Su 07:00-23:00",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Șos. E60, Borșului nr. 157",
        addressLocality: "Borș",
        addressRegion: "Bihor",
        addressCountry: "RO",
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://onyxhotel.ro/#business",
      name: "ONYX B&B Hotel & Restaurant",
      url: "https://onyxhotel.ro",
      telephone: "+40732403464",
      sameAs: ["https://www.booking.com", "https://www.tripadvisor.com"],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
