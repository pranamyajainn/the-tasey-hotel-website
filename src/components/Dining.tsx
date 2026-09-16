"use client";

import { useState } from "react";
import Image from "next/image";
import { Utensils, Waves, Clock, Sparkles, Check, Calendar } from "lucide-react";

interface DiningProps {
  onOpenBooking: (restaurant: string) => void;
}

export default function Dining({ onOpenBooking }: DiningProps) {
  const [activeDiningTab, setActiveDiningTab] = useState<"haldi" | "jhumka">("haldi");

  const restaurants = {
    haldi: {
      name: "Haldi",
      subtitle: "The Indoor Restaurant",
      tagline: "Authentic Rajasthani & Indian Culinary Heritage",
      image: "/images/tasey-14.jpeg",
      ambience: "Traditional Rajasthani Royal Decor & Warm Brass Lighting",
      timings: "7:00 AM – 11:00 PM (Daily)",
      highlights: [
        "Royal Rajasthani Thali served in Traditional Brassware",
        "Authentic Laal Maas, Ker Sangri & Dal Baati Churma",
        "Rich North Indian Curries, Hand-Carved Tandoori Breads",
        "Fine Dining Air-Conditioned Royal Hall Setting",
        "Chefs trained in Heritage Royal Kitchen Techniques",
      ],
      specialty: "Chef's Signature Laal Maas & Saffron Phirni",
      ctaText: "Reserve Table at Haldi",
    },
    jhumka: {
      name: "Jhumka",
      subtitle: "The Rooftop Restaurant & Pool",
      tagline: "Rooftop Dining with Swimming Pool & 3-Side Aravalli Hill Views",
      image: "/images/tasey-16.jpeg",
      ambience: "Open-Air Rooftop, Poolside Candlelight & Starry Night Sky",
      timings: "5:00 PM – 12:00 Midnight (Daily)",
      highlights: [
        "Breathtaking 3-Side Uninterrupted View of Aravalli Hills",
        "Open-Air Rooftop Infinity Swimming Pool Setting",
        "Romantic Candlelight Dinners Under the Stars",
        "Signature Sunset Cocktails, Mocktails & Tandoori Grills",
        "Multi-cuisine Global Menu & Live Acoustic Music Nights",
      ],
      specialty: "Poolside Romantic Sunset Candlelight Dinner",
      ctaText: "Reserve Table at Jhumka",
    },
  };

  const current = restaurants[activeDiningTab];

  return (
    <section id="dining" className="py-24 relative bg-[#FDFBF7] text-[#1C1815]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#8C6310] font-bold flex items-center justify-center gap-2 mb-3">
            <Utensils className="w-3.5 h-3.5 text-[#C5A059]" />
            Exquisite Gastronomy
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#1C1815] tracking-tight">
            Dining Experiences at <span className="text-gold-gradient">The TASEY Hotel</span>
          </h2>
          <p className="mt-4 text-[#5C5248] text-sm sm:text-base font-normal">
            Savour exquisite flavours at our two signature restaurants — choose traditional indoor royal warmth or starry rooftop poolside hill views.
          </p>
        </div>

        {/* Restaurant Tab Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12">
          <button
            onClick={() => setActiveDiningTab("haldi")}
            className={`p-5 rounded-2xl border text-left transition-all duration-300 flex items-center gap-4 ${
              activeDiningTab === "haldi"
                ? "bg-gradient-to-r from-[#C5A059] to-[#8C6310] text-white border-transparent shadow-md scale-102"
                : "bg-[#FFFDF9] text-[#3B332B] border-[#E5DCCB] hover:border-[#C5A059]"
            }`}
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
              activeDiningTab === "haldi" ? "bg-white/20 text-white" : "bg-[#F8F3EA] text-[#C5A059]"
            }`}>
              <Utensils className="w-6 h-6" />
            </div>
            <div>
              <div className="font-serif-luxury text-xl font-bold flex items-center gap-2">
                <span>Haldi</span>
                <span className={`text-[10px] font-sans uppercase font-bold tracking-widest px-2 py-0.5 rounded ${
                  activeDiningTab === "haldi" ? "bg-white/20 text-white" : "bg-[#C5A059]/20 text-[#8C6310]"
                }`}>
                  Indoor Fine Dining
                </span>
              </div>
              <div className={`text-xs font-medium mt-0.5 ${activeDiningTab === "haldi" ? "text-white/90" : "text-[#5C5248]"}`}>
                Rajasthani & Indian Gourmet Cuisine
              </div>
            </div>
          </button>

          <button
            onClick={() => setActiveDiningTab("jhumka")}
            className={`p-5 rounded-2xl border text-left transition-all duration-300 flex items-center gap-4 ${
              activeDiningTab === "jhumka"
                ? "bg-gradient-to-r from-[#C5A059] to-[#8C6310] text-white border-transparent shadow-md scale-102"
                : "bg-[#FFFDF9] text-[#3B332B] border-[#E5DCCB] hover:border-[#C5A059]"
            }`}
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
              activeDiningTab === "jhumka" ? "bg-white/20 text-white" : "bg-[#F8F3EA] text-[#C5A059]"
            }`}>
              <Waves className="w-6 h-6" />
            </div>
            <div>
              <div className="font-serif-luxury text-xl font-bold flex items-center gap-2">
                <span>Jhumka</span>
                <span className={`text-[10px] font-sans uppercase font-bold tracking-widest px-2 py-0.5 rounded ${
                  activeDiningTab === "jhumka" ? "bg-white/20 text-white" : "bg-[#C5A059]/20 text-[#8C6310]"
                }`}>
                  Rooftop & Pool
                </span>
              </div>
              <div className={`text-xs font-medium mt-0.5 ${activeDiningTab === "jhumka" ? "text-white/90" : "text-[#5C5248]"}`}>
                3-Side Aravalli View & Poolside Lounge
              </div>
            </div>
          </button>
        </div>

        {/* Selected Restaurant Showcase Card */}
        <div className="bg-[#FFFDF9] rounded-3xl overflow-hidden border border-[#C5A059]/40 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Restaurant Image */}
          <div className="lg:col-span-7 relative min-h-[360px] sm:min-h-[480px] group overflow-hidden">
            <Image
              src={current.image}
              alt={current.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1815]/80 via-[#1C1815]/20 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#FFFDF9]/95 backdrop-blur-md border border-[#E5DCCB] flex items-center justify-between text-xs text-[#1C1815] font-semibold shadow-md">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#C5A059]" />
                <span>{current.timings}</span>
              </div>
              <div className="flex items-center gap-1.5 text-[#8C6310]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{current.specialty}</span>
              </div>
            </div>
          </div>

          {/* Restaurant Details */}
          <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6">
            <div>
              <div className="inline-block text-xs uppercase tracking-widest text-[#8C6310] font-bold mb-1">
                {current.subtitle}
              </div>
              <h3 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#1C1815] mb-2">
                {current.name}
              </h3>
              <p className="text-xs text-[#5C5248] font-normal mb-6">
                {current.tagline}
              </p>

              <div className="p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DCCB] mb-6">
                <div className="text-[11px] uppercase tracking-wider text-[#8C6310] font-bold mb-1">
                  Ambience & Setting
                </div>
                <div className="text-xs text-[#3B332B] font-medium">
                  {current.ambience}
                </div>
              </div>

              <h4 className="text-xs font-bold uppercase tracking-wider text-[#1C1815] mb-3">
                Culinary & Experience Highlights
              </h4>
              <ul className="space-y-3">
                {current.highlights.map((hl, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-[#3B332B] font-medium">
                    <Check className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-[#E5DCCB]">
              <button
                onClick={() => onOpenBooking(current.name)}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#C5A059] to-[#8C6310] text-white font-bold text-xs sm:text-sm tracking-wider uppercase shadow-md hover:shadow-[#C5A059]/40 hover:scale-102 transition-all flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>{current.ctaText}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

