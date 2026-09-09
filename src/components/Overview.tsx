"use client";

import Image from "next/image";
import { Castle, TreePine, Hotel, Compass, Award, Sparkles, MapPin, ArrowRight } from "lucide-react";

export default function Overview() {
  const locationList = [
    {
      num: "01",
      icon: Castle,
      title: "5 KM from Historic Amber Fort",
      distance: "10 Min Drive",
      desc: "Minutes away from Jaipur's UNESCO World Heritage fortress, Sheesh Mahal, and light-and-sound show.",
      tag: "Historic Landmark",
    },
    {
      num: "02",
      icon: Hotel,
      title: "100m from Taj Amber & Indiana Place",
      distance: "1 Min Walk",
      desc: "Nestled in Jaipur's elite luxury hospitality enclave with serene, safe, and prime mountain backdrop.",
      tag: "Elite Enclave",
    },
    {
      num: "03",
      icon: TreePine,
      title: "50m from Nahargarh Zoological Park",
      distance: "Step Outside",
      desc: "Located directly opposite the lush green Nahargarh nature reserve and wildlife sanctuary.",
      tag: "Nature & Wildlife",
    },
    {
      num: "04",
      icon: Compass,
      title: "3-Side Aravali Hill Panoramas",
      distance: "Uninterrupted Vista",
      desc: "Breathtaking mountain horizons from our rooms, garden courts, and rooftop swimming pool.",
      tag: "Panoramic Sanctuary",
    },
  ];

  const stats = [
    { value: "3", label: "Room Categories" },
    { value: "2", label: "Restaurants" },
    { value: "2", label: "Banquet Halls" },
    { value: "360°", label: "Hill Panoramas" },
  ];

  return (
    <section id="overview" className="py-24 relative bg-[#FDFBF7] overflow-hidden">
      {/* Background Architectural Scrim */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F8F3EA] border border-[#C5A059]/30 text-[#9E7B32] text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#B88E36]" />
            <span>Location Advantage & Heritage</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#1C1815] tracking-tight leading-tight">
            An Enchanting Haven in Jaipur's <span className="text-gold-gradient">Aravali Hills</span>
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent mx-auto my-5" />
          <p className="text-[#5C5046] text-sm sm:text-base leading-relaxed font-normal">
            Situated at Jaipur's most serene hillside destination near Amber Fort, <strong>The Tasey</strong> offers an unmatched blend of royal Rajasthani warmth, modern opulence, and refreshing natural hill air.
          </p>
        </div>

        {/* Editorial Asymmetric Layout (Split Showcase) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Grand Feature Card with Arched Frame */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-[480px] sm:h-[580px] rounded-t-[4rem] rounded-b-3xl overflow-hidden border-2 border-[#C5A059]/30 shadow-2xl group">
              <Image
                src="/images/hero.jpg"
                alt="The Tasey Aravali Fort View"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Top Floating Badge */}
              <div className="absolute top-6 left-6 right-6 flex justify-between items-center">
                <span className="px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#C5A059]/40 text-[#9E7B32] text-xs font-bold uppercase tracking-wider shadow-md flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-[#B88E36]" />
                  Boutique Heritage Sanctuary
                </span>
                <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-amber-200 text-xs font-mono">
                  Jaipur, RJ
                </span>
              </div>

              {/* Bottom Quote & Stats Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-[#FFFDF9]/95 backdrop-blur-md border border-[#C5A059]/40 shadow-xl space-y-4">
                <p className="font-serif-luxury text-sm sm:text-base text-[#1C1815] italic font-semibold leading-snug">
                  "Enjoy the tranquil peace of Aravali nature reserves with historic monuments just a heartbeat away."
                </p>

                <div className="grid grid-cols-4 gap-2 pt-3 border-t border-[#C5A059]/20">
                  {stats.map((st, i) => (
                    <div key={i} className="text-center">
                      <div className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#9E7B32]">
                        {st.value}
                      </div>
                      <div className="text-[9px] text-[#6E645A] uppercase font-bold tracking-wider mt-0.5">
                        {st.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Staggered Timeline List */}
          <div className="lg:col-span-6 space-y-4">
            {locationList.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#FFFDF9] p-6 rounded-2xl border border-[#C5A059]/30 shadow-sm hover:shadow-xl hover:border-[#C5A059] transition-all duration-300 flex items-start gap-5 group cursor-pointer"
                >
                  {/* Number Badge */}
                  <div className="font-serif-luxury text-2xl font-bold text-[#C5A059]/60 group-hover:text-[#B88E36] transition-colors shrink-0 mt-1">
                    {item.num}
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap justify-between items-center gap-2 mb-1.5">
                      <h3 className="font-serif-luxury text-lg font-bold text-[#1C1815] group-hover:text-[#B88E36] transition-colors">
                        {item.title}
                      </h3>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-[#F8F3EA] text-[#9E7B32] border border-[#C5A059]/25">
                        {item.distance}
                      </span>
                    </div>

                    <p className="text-xs text-[#5C5046] font-normal leading-relaxed mb-2">
                      {item.desc}
                    </p>

                    <div className="flex items-center justify-between text-[11px] text-[#7A6E63] font-semibold pt-1">
                      <span>{item.tag}</span>
                      <span className="text-[#B88E36] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        Explore <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
