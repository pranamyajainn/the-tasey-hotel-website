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
      tagline: "Rajasthani and Indian dishes",
      image: "/images/tasey-11.jpeg",
      ambience: "Indoor dining room with ceiling fans and opening-day balloons",
      timings: "7:00 AM to 11:00 PM daily",
      highlights: [
        "Rajasthani thali served in brassware",
        "Laal Maas, Ker Sangri and Dal Baati Churma",
        "North Indian curries and tandoori breads",
        "Indoor seating with ceiling fans",
      ],
      specialty: "Laal Maas and saffron phirni",
      ctaText: "Reserve Table at Haldi",
    },
    jhumka: {
      name: "Jhumka",
      subtitle: "The Rooftop Restaurant & Pool",
      tagline: "Rooftop dining beside the pool",
      image: "/images/tasey-05.jpeg",
      ambience: "Open rooftop with a pool and steel railing",
      timings: "5:00 PM to midnight daily",
      highlights: [
        "Rooftop pool with a steel railing",
        "Open-air seating beside the pool",
        "Views of nearby buildings and a transmission tower",
        "Cocktails, mocktails and tandoori grills",
        "Multi-cuisine menu",
      ],
      specialty: "Poolside dining",
      ctaText: "Reserve Table at Jhumka",
    },
  };

  const current = restaurants[activeDiningTab];

  return (
    <section id="dining" className="py-24 relative bg-[#FDFBF7] text-[#011A51]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#A95A01] font-bold block mb-3">
            Dining and rooftop pool
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#011A51] tracking-tight">
            Two <span className="text-gold-gradient">dining spaces</span>
          </h2>
          <p className="mt-3 text-[#605A50] text-sm sm:text-base font-normal max-w-2xl mx-auto leading-relaxed">
            Haldi is an indoor restaurant. Jhumka is a rooftop restaurant beside the pool.
          </p>
        </div>

        {/* Restaurant Tab Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12">
          <button
            onClick={() => setActiveDiningTab("haldi")}
            className={`p-5 rounded-2xl border text-left transition-all duration-300 flex items-center gap-4 ${
              activeDiningTab === "haldi"
                ? "bg-gradient-to-r from-[#A95A01] to-[#A95A01] text-white border-transparent shadow-md scale-102"
                : "bg-[#FFFDF9] text-[#011A51] border-[#E5DCCB] hover:border-[#A95A01]"
            }`}
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
              activeDiningTab === "haldi" ? "bg-white/20 text-white" : "bg-[#F8F3EA] text-[#A95A01]"
            }`}>
              <Utensils className="w-6 h-6" />
            </div>
            <div>
              <div className="font-serif-luxury text-xl font-bold flex items-center gap-2">
                <span>Haldi</span>
                <span className={`text-[10px] font-sans uppercase font-bold tracking-widest px-2 py-0.5 rounded ${
                  activeDiningTab === "haldi" ? "bg-white/20 text-white" : "bg-[#A95A01]/20 text-[#A95A01]"
                }`}>
                  Indoor restaurant
                </span>
              </div>
              <div className={`text-xs font-medium mt-0.5 ${activeDiningTab === "haldi" ? "text-white/90" : "text-[#605A50]"}`}>
                  Rajasthani and Indian dishes
              </div>
            </div>
          </button>

          <button
            onClick={() => setActiveDiningTab("jhumka")}
            className={`p-5 rounded-2xl border text-left transition-all duration-300 flex items-center gap-4 ${
              activeDiningTab === "jhumka"
                ? "bg-gradient-to-r from-[#A95A01] to-[#A95A01] text-white border-transparent shadow-md scale-102"
                : "bg-[#FFFDF9] text-[#011A51] border-[#E5DCCB] hover:border-[#A95A01]"
            }`}
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
              activeDiningTab === "jhumka" ? "bg-white/20 text-white" : "bg-[#F8F3EA] text-[#A95A01]"
            }`}>
              <Waves className="w-6 h-6" />
            </div>
            <div>
              <div className="font-serif-luxury text-xl font-bold flex items-center gap-2">
                <span>Jhumka</span>
                <span className={`text-[10px] font-sans uppercase font-bold tracking-widest px-2 py-0.5 rounded ${
                  activeDiningTab === "jhumka" ? "bg-white/20 text-white" : "bg-[#A95A01]/20 text-[#A95A01]"
                }`}>
                  Rooftop and pool
                </span>
              </div>
              <div className={`text-xs font-medium mt-0.5 ${activeDiningTab === "jhumka" ? "text-white/90" : "text-[#605A50]"}`}>
                Rooftop pool and open-air seating
              </div>
            </div>
          </button>
        </div>

        {/* Selected Restaurant Showcase Card */}
        <div className="bg-[#FFFDF9] rounded-3xl overflow-hidden border border-[#A95A01]/40 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Restaurant Image */}
          <div className="lg:col-span-7 relative min-h-[360px] sm:min-h-[480px] group overflow-hidden">
            <Image
              src={current.image}
              alt={current.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#011A51]/80 via-[#011A51]/20 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#FFFDF9]/95 backdrop-blur-md border border-[#E5DCCB] flex items-center justify-between text-xs text-[#011A51] font-semibold shadow-md">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#A95A01]" />
                <span>{current.timings}</span>
              </div>
              <div className="flex items-center gap-1.5 text-[#A95A01]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{current.specialty}</span>
              </div>
            </div>
          </div>

          {/* Restaurant Details */}
          <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6">
            <div>
              <div className="inline-block text-xs uppercase tracking-widest text-[#A95A01] font-bold mb-1">
                {current.subtitle}
              </div>
              <h3 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#011A51] mb-2">
                {current.name}
              </h3>
              <p className="text-xs text-[#605A50] font-normal mb-6">
                {current.tagline}
              </p>

              <div className="p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DCCB] mb-6">
                <div className="text-[11px] uppercase tracking-wider text-[#A95A01] font-bold mb-1">
                  Ambience & Setting
                </div>
                <div className="text-xs text-[#011A51] font-medium">
                  {current.ambience}
                </div>
              </div>

              <h4 className="text-xs font-bold uppercase tracking-wider text-[#011A51] mb-3">
                Culinary & Experience Highlights
              </h4>
              <ul className="space-y-3">
                {current.highlights.map((hl, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-[#011A51] font-medium">
                    <Check className="w-4 h-4 text-[#A95A01] shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-[#E5DCCB]">
              <button
                onClick={() => onOpenBooking(current.name)}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#A95A01] to-[#A95A01] text-white font-bold text-xs sm:text-sm tracking-wider uppercase shadow-md hover:shadow-[#A95A01]/40 hover:scale-102 transition-all flex items-center justify-center gap-2"
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

