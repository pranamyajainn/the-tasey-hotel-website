"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface DiningProps {
  onOpenBooking: (restaurant: string) => void;
}

export default function Dining({ onOpenBooking }: DiningProps) {
  const [activeDiningTab, setActiveDiningTab] = useState<"haldi" | "jhumka">("haldi");
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const restaurants = {
    haldi: {
      name: "Haldi",
      subtitle: "The indoor restaurant",
      tagline: "Rajasthani and Indian dishes",
      images: [
        "/images/tasey-11.jpeg",
        "/images/tasey-11b.jpeg",
        "/images/tasey-11c.jpeg",
        "/images/tasey-11d.jpeg",
        "/images/tasey-02.jpeg",
        "/images/tasey-11e.jpeg",
        "/images/tasey-11f.jpeg",
        "/images/tasey-11g.jpeg",
        "/images/tasey-11h.jpeg",
        "/images/tasey-11i.jpeg",
        "/images/tasey-11j.jpeg",
        "/images/tasey-11k.jpeg",
        "/images/tasey-11l.jpeg",
        "/images/tasey-11m.jpeg",
      ],
      ambience: "Indoor dining room with ceiling fans and opening-day balloons",
      timings: "7:00 AM to 11:00 PM daily",
      highlights: "Rajasthani thali served in brassware. Laal Maas, Ker Sangri and Dal Baati Churma. North Indian curries and tandoori breads. Indoor seating with ceiling fans.",
      specialty: "Laal Maas and saffron phirni",
      ctaText: "Reserve a table at Haldi",
    },
    jhumka: {
      name: "Jhumka",
      subtitle: "The rooftop restaurant and pool",
      tagline: "Rooftop dining beside the pool",
      images: ["/images/tasey-05.jpeg"],
      ambience: "Open rooftop with a pool and steel railing",
      timings: "5:00 PM to midnight daily",
      highlights: "Rooftop pool with a steel railing. Open-air seating beside the pool. Views of nearby buildings and a transmission tower. Cocktails, mocktails and tandoori grills. Multi-cuisine menu.",
      specialty: "Poolside dining",
      ctaText: "Reserve a table at Jhumka",
    },
  };

  const current = restaurants[activeDiningTab];

  return (
    <section id="dining" className="py-20 sm:py-28 bg-[#FDFBF7] text-[#011A51]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif-luxury text-[28px] sm:text-[40px] text-[#011A51]">
          Two dining spaces
        </h2>
        <p className="mt-3 text-[16px] leading-[1.6] text-[#605A50] max-w-md">
          Haldi is an indoor restaurant. Jhumka is a rooftop restaurant beside the pool.
        </p>

        {/* Restaurant Tabs */}
        <div className="flex gap-6 mt-8 mb-10 border-b border-[#E5DCCB]">
          <button
            onClick={() => {
              setActiveDiningTab("haldi");
              setActiveImageIndex(0);
            }}
            className={`px-1 py-2.5 text-[16px] border-b-2 transition-colors ${
              activeDiningTab === "haldi"
                ? "text-[#011A51] border-[#A95A01]"
                : "text-[#605A50] border-transparent hover:text-[#011A51]"
            }`}
          >
            Haldi
          </button>
          <button
            onClick={() => {
              setActiveDiningTab("jhumka");
              setActiveImageIndex(0);
            }}
            className={`px-1 py-2.5 text-[16px] border-b-2 transition-colors ${
              activeDiningTab === "jhumka"
                ? "text-[#011A51] border-[#A95A01]"
                : "text-[#605A50] border-transparent hover:text-[#011A51]"
            }`}
          >
            Jhumka
          </button>
        </div>

        {/* Selected Restaurant */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-7 relative min-h-[300px] sm:min-h-[420px] rounded overflow-hidden">
            <Image
              src={current.images[activeImageIndex]}
              alt={current.name}
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover"
              priority
            />
            {current.images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() =>
                    setActiveImageIndex(
                      (activeImageIndex - 1 + current.images.length) % current.images.length
                    )
                  }
                  aria-label="Previous photo"
                  className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-full bg-[#011A51]/60 hover:bg-[#011A51]/80 text-white transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setActiveImageIndex((activeImageIndex + 1) % current.images.length)
                  }
                  aria-label="Next photo"
                  className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-full bg-[#011A51]/60 hover:bg-[#011A51]/80 text-white transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
                  {current.images.map((_, imgIdx) => (
                    <button
                      key={imgIdx}
                      type="button"
                      onClick={() => setActiveImageIndex(imgIdx)}
                      aria-label={`Go to photo ${imgIdx + 1}`}
                      className={`h-1.5 rounded transition-all duration-300 ${
                        imgIdx === activeImageIndex ? "w-6 bg-white" : "w-1.5 bg-white/60 hover:bg-white/90"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="lg:col-span-5 flex flex-col">
            <p className="text-[16px] text-[#605A50]">{current.subtitle}</p>
            <h3 className="font-serif-luxury text-[28px] text-[#011A51]">
              {current.name}
            </h3>
            <p className="mt-1 text-[16px] text-[#605A50]">{current.tagline}</p>
            <p className="mt-4 text-[16px] leading-[1.6] text-[#605A50] max-w-md">
              {current.timings}. {current.ambience}.
            </p>
            <p className="mt-4 text-[16px] leading-[1.6] text-[#605A50] max-w-md">
              {current.highlights}
            </p>
            <p className="mt-2 text-[16px] leading-[1.6] text-[#605A50] max-w-md">
              Specialty: {current.specialty}.
            </p>

            <div className="mt-6">
              <button
                onClick={() => onOpenBooking(current.name)}
                className="px-6 py-3 rounded bg-[#A95A01] hover:bg-[#8C4A00] text-white text-[16px] font-medium transition-colors"
              >
                {current.ctaText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
