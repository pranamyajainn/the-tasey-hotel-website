import type { Metadata, Viewport } from "next";
import { Newsreader, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { HOTEL, SITE_URL } from "@/lib/site";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "The Tasey Hotel | Amer, Jaipur",
    template: "%s | The Tasey Hotel",
  },
  description: HOTEL.description,
  applicationName: HOTEL.name,
  alternates: { canonical: "/" },
  keywords: [
    "The Tasey", "The Tasey Hotel Amer", "Hotel Near Amber Fort Jaipur",
    "Elephant Village Jaipur", "Jhalana Leopard Safari", "Nahargarh Lion Safari",
    "Rooftop Pool Jaipur", "Haldi Restaurant Jaipur", "Jhumka Rooftop Restaurant"
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website",
    siteName: HOTEL.name,
    locale: "en_IN",
    url: SITE_URL,
    title: "The Tasey Hotel, Amer, Jaipur",
    description: "Rooms, dining, a rooftop pool, event spaces, and nearby excursions.",
    images: [{ url: HOTEL.image, width: 1600, height: 1067, alt: "The Tasey Hotel, Amer, Jaipur" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Tasey Hotel, Amer, Jaipur",
    description: "Rooms, dining, a rooftop pool, event spaces, and nearby excursions.",
    images: [HOTEL.image],
  },
};

export const viewport: Viewport = {
  themeColor: "#011A51",
  colorScheme: "light",
};

/**
 * Schema.org Hotel record. This is what lets Google show the property as a
 * hotel — name, location, phone, price band — rather than a generic web page.
 */
const hotelJsonLd = {
  "@context": "https://schema.org",
  "@type": "Hotel",
  "@id": `${SITE_URL}/#hotel`,
  name: HOTEL.name,
  description: HOTEL.description,
  url: SITE_URL,
  image: `${SITE_URL}${HOTEL.image}`,
  telephone: HOTEL.phones[0],
  priceRange: HOTEL.priceRange,
  address: {
    "@type": "PostalAddress",
    streetAddress: HOTEL.street,
    addressLocality: HOTEL.locality,
    addressRegion: HOTEL.region,
    postalCode: HOTEL.postalCode,
    addressCountry: HOTEL.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: HOTEL.latitude,
    longitude: HOTEL.longitude,
  },
  amenityFeature: [
    "Rooftop swimming pool",
    "Indoor restaurant",
    "Banquet and event halls",
    "Wildlife safari booking",
    "Free WiFi",
  ].map((name) => ({ "@type": "LocationFeatureSpecification", name, value: true })),
  makesOffer: [
    { "@type": "Offer", name: "Executive Room", price: "2900", priceCurrency: "INR" },
    { "@type": "Offer", name: "Luxury Room", price: "3800", priceCurrency: "INR" },
    { "@type": "Offer", name: "Suite Room", price: "5400", priceCurrency: "INR" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${newsreader.variable} ${instrumentSans.variable} scroll-smooth`}>
      <body className="bg-[#FDFBF7] text-[#011A51] antialiased selection:bg-[#A95A01] selection:text-white">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded focus:bg-[#011A51] focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          // Static object, no user input; this is the documented way to emit JSON-LD.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelJsonLd) }}
        />
      </body>
    </html>
  );
}
