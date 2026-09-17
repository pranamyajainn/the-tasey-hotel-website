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
  title: "The Tasey Hotel | Amer, Jaipur",
  description: "The Tasey Hotel in Amer, Jaipur, with rooms, Haldi restaurant, Jhumka rooftop pool, event spaces, and nearby safaris.",
  keywords: [
    "The Tasey", "The Tasey Hotel Amer", "Hotel Near Amber Fort Jaipur", 
    "Elephant Village Jaipur", "Jhalana Leopard Safari", "Nahargarh Lion Safari", 
    "Rooftop Pool Jaipur", "Haldi Restaurant Jaipur", "Jhumka Rooftop Restaurant"
  ],
  openGraph: {
    title: "The Tasey Hotel, Amer, Jaipur",
    description: "Rooms, dining, a rooftop pool, event spaces, and nearby excursions.",
    images: [{ url: "/images/tasey-01.jpeg" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable} ${cormorant.variable} scroll-smooth`}>
      <body className="bg-[#FDFBF7] text-[#011A51] antialiased selection:bg-[#A95A01] selection:text-white">
        {children}
      </body>
    </html>
  );
}


