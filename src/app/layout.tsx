import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The TASEY Hotel & Excursions | Luxury Boutique Hotel Near Amber Fort, Jaipur",
  description: "Discover Jaipur beyond the ordinary at The TASEY Hotel, Amer. Luxury rooms, Haldi restaurant, Jhumka Rooftop Pool, Elephant Village interactions, Jhalana Leopard Safari & Nahargarh Lion Safari.",
  keywords: [
    "The Tasey", "The Tasey Hotel Amer", "Hotel Near Amber Fort Jaipur", 
    "Elephant Village Jaipur", "Jhalana Leopard Safari", "Nahargarh Lion Safari", 
    "Rooftop Pool Jaipur", "Haldi Restaurant Jaipur", "Jhumka Rooftop Restaurant"
  ],
  openGraph: {
    title: "The TASEY Hotel & Excursions — Amer, Jaipur",
    description: "Royal luxury hospitality & curated wildlife & heritage excursions amidst the Aravalli Hills.",
    images: [{ url: "/images/tasey-01.jpeg" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable} ${cormorant.variable} scroll-smooth dark`}>
      <body className="bg-[#070A12] text-[#F7F3EB] antialiased selection:bg-[#D4AF37] selection:text-black">
        {children}
      </body>
    </html>
  );
}

