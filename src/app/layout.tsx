import type { Metadata, Viewport } from "next";
import { Newsreader, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { HOTEL, HOTEL_MAP_URL, SITE_URL } from "@/lib/site";

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
    default: "The Tasey Hotel, Amer, Jaipur | Official Website",
    template: "%s | The Tasey Hotel",
  },
  description: HOTEL.description,
  applicationName: HOTEL.name,
  alternates: { canonical: "/" },
  // Google Search Console HTML-tag verification. Set GOOGLE_SITE_VERIFICATION
  // in Vercel to the token Google issues; nothing is emitted while it's unset.
  // Not needed if ownership is verified with a DNS TXT record instead.
  ...(process.env.GOOGLE_SITE_VERIFICATION && {
    verification: { google: process.env.GOOGLE_SITE_VERIFICATION },
  }),
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
    // The photo is portrait; the declared size must match the file.
    images: [{ url: HOTEL.image, width: 1067, height: 1600, alt: "The Tasey Hotel, Amer, Jaipur" }],
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
  alternateName: HOTEL.alternateNames,
  description: HOTEL.description,
  url: SITE_URL,
  image: `${SITE_URL}${HOTEL.image}`,
  logo: `${SITE_URL}${HOTEL.logo}`,
  sameAs: HOTEL.sameAs,
  telephone: HOTEL.phones[0],
  email: HOTEL.email,
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
  hasMap: HOTEL_MAP_URL,
  // Check-in, check-out and payment match the "Good to know" list in the Rooms section.
  checkinTime: "11:00",
  checkoutTime: "13:00",
  paymentAccepted: "Cash, UPI, Credit Card, Debit Card",
  amenityFeature: [
    "Rooftop swimming pool",
    "Indoor restaurant",
    "Banquet and event halls",
    "Wildlife safari booking",
    "Free Wi-Fi",
    "Free parking",
    "Air conditioning",
    "Room service",
  ].map((name) => ({ "@type": "LocationFeatureSpecification", name, value: true })),
  // All three rates are also printed in the Rooms section, so the markup
  // describes what a visitor can read on the page.
  makesOffer: [
    { "@type": "Offer", name: "Executive Room", price: "4200", priceCurrency: "INR" },
    { "@type": "Offer", name: "Luxury Room", price: "4800", priceCurrency: "INR" },
    { "@type": "Offer", name: "Suite Room", price: "7200", priceCurrency: "INR" },
  ],
};

/**
 * Schema.org WebSite record. Google reads this on the home page to decide the
 * site name shown above the result, and ties the domain to the hotel entity.
 */
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: HOTEL.name,
  alternateName: HOTEL.alternateNames,
  url: `${SITE_URL}/`,
  publisher: { "@id": `${SITE_URL}/#hotel` },
};

/** Escape `<` so a stray "</script>" in any string can't close the tag early. */
const toJsonLd = (data: object) => JSON.stringify(data).replace(/</g, "\\u003c");

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
          dangerouslySetInnerHTML={{ __html: toJsonLd(hotelJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: toJsonLd(websiteJsonLd) }}
        />
      </body>
    </html>
  );
}
