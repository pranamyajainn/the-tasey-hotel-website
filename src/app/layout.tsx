import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
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

export const metadata: Metadata = {
  title: "The Tasey | Boutique Hotel & Restaurant Near Amber Fort, Jaipur",
  description: "Experience royal luxury & serenity at The Tasey. Boutique hotel nestled in the Aravali Hills near Amber Fort, featuring Luxury Rooms, Suites, Haldi Indoor Restaurant & Jhumka Rooftop Poolside Restaurant.",
  keywords: ["The Tasey", "Boutique Hotel Jaipur", "Amber Fort Hotel", "Hotel near Amber Fort", "Rooftop Restaurant Jaipur", "Haldi Restaurant Jaipur", "Jhumka Rooftop Restaurant", "Aravali Hills Hotel"],
  openGraph: {
    title: "The Tasey - Luxury Boutique Hotel & Restaurant",
    description: "Royal hospitality with a hill view at Jaipur's most serene location near Amber Fort.",
    images: [{ url: "/images/hero.jpg" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable} scroll-smooth`}>
      <body className="bg-[#FDFBF7] text-[#2C2621] antialiased selection:bg-[#C5A059] selection:text-white">
        {children}
      </body>
    </html>
  );
}
