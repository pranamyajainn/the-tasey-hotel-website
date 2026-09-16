"use client";

import Image from "next/image";
import { Castle, TreePine, Hotel, Compass, Award, Sparkles, MapPin, ArrowRight } from "lucide-react";

export default function Overview() {
  const locationList = [
    {
      num: "01",
      icon: Castle,
      title: "5 KM from Historic Amber Fort",
      distance: "10 Min Scenic Drive",
      desc: "Minutes away from Jaipur's UNESCO World Heritage fortress, Sheesh Mahal, and spectacular hilltop night shows.",
      tag: "Historic Landmark",
    },
    {
      num: "02",
      icon: Hotel,
      title: "100m from Taj Amber & Indiana Place",
      distance: "1 Min Walk",
      desc: "Located in Jaipur's finest luxury hospitality zone with safe, tranquil, and private mountain surroundings.",
      tag: "Elite Enclave",
    },
    {
      num: "03",
      icon: TreePine,
      title: "50m from Nahargarh Zoological Park",
      distance: "Directly Opposite",
      desc: "Pristine nature reserve offering Lion Safaris, birdwatching trails, and lush green forest views.",
      tag: "Nature & Wildlife",
    },
    {
      num: "04",
      icon: Compass,
      title: "3-Side Aravali Hill Panoramas",
      distance: "Uninterrupted Vista",
      desc: "Breathtaking mountain horizons visible from rooms, dining courts, and our rooftop swimming pool.",
      tag: "Panoramic Sanctuary",
    },
  ];

  const stats = [
    { value: "3", label: "Luxury Room Styles" },
    { value: "2", label: "Gourmet Outlets" },
    { value: "720 Ha", label: "Safari Reserve" },
    { value: "360°", label: "Aravalli Views" },
  ];

  return (
    <section id="overview" className="py-24 relative bg-[#070A12] text-gray-100 overflow-hidden">
      {/* Background Architectural Scrim */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#131A2D] border border-[#D4AF37]/30 text-[#E5C365] text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Heritage & Prime Location</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            An Enchanting Haven in Jaipur's <span className="text-gold-gradient">Aravalli Hills</span>
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto my-5" />
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light">
            Situated at Jaipur's most serene hillside destination near Amer Fort, <strong>The TASEY Hotel</strong> offers an unmatched blend of royal Rajasthani warmth, modern opulence, and refreshing mountain air.
          </p>
        </div>

        {/* Editorial Asymmetric Layout (Split Showcase) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Grand Feature Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-[480px] sm:h-[580px] rounded-3xl overflow-hidden border border-[#D4AF37]/35 shadow-2xl group">
              <Image
                src="/images/tasey-09.jpeg"
                alt="The Tasey Aravali Fort View"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070A12] via-[#070A12]/30 to-transparent" />

              {/* Top Floating Badge */}
              <div className="absolute top-6 left-6 right-6 flex justify-between items-center">
                <span className="px-4 py-1.5 rounded-full bg-[#070A12]/80 backdrop-blur-md border border-[#D4AF37]/40 text-[#E5C365] text-xs font-bold uppercase tracking-wider shadow-md flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
                  Boutique Heritage Resort
                </span>
                <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[#D4AF37] text-xs font-mono border border-[#D4AF37]/30">
                  Amer, Jaipur
                </span>
              </div>

              {/* Bottom Quote & Stats Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl glass-panel-dark border border-[#D4AF37]/30 shadow-xl space-y-4">
                <p className="font-serif-luxury text-sm sm:text-base text-white italic font-semibold leading-snug">
                  "Enjoy the tranquil peace of Aravalli nature reserves with historic monuments just a heartbeat away."
                </p>

                <div className="grid grid-cols-4 gap-2 pt-3 border-t border-[#D4AF37]/20">
                  {stats.map((st, i) => (
                    <div key={i} className="text-center">
                      <div className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#E5C365]">
                        {st.value}
                      </div>
                      <div className="text-[9px] text-gray-400 uppercase font-bold tracking-wider mt-0.5">
                        {st.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Staggered Location Milestones */}
          <div className="lg:col-span-6 space-y-4">
            {locationList.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="glass-card-dark p-6 rounded-2xl border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all duration-300 flex items-start gap-5 group cursor-pointer"
                >
                  {/* Number Badge */}
                  <div className="font-serif-luxury text-2xl font-bold text-[#D4AF37]/50 group-hover:text-[#D4AF37] transition-colors shrink-0 mt-1">
                    {item.num}
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap justify-between items-center gap-2 mb-1.5">
                      <h3 className="font-serif-luxury text-lg font-bold text-white group-hover:text-[#E5C365] transition-colors">
                        {item.title}
                      </h3>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-[#131A2D] text-[#E5C365] border border-[#D4AF37]/30">
                        {item.distance}
                      </span>
                    </div>

                    <p className="text-xs text-gray-300 font-light leading-relaxed mb-2">
                      {item.desc}
                    </p>

                    <div className="flex items-center justify-between text-[11px] text-gray-400 font-semibold pt-1">
                      <span>{item.tag}</span>
                      <span className="text-[#D4AF37] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        Discover <ArrowRight className="w-3 h-3" />
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

