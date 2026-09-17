"use client";

import Image from "next/image";
import { Castle, TreePine, Hotel, Compass, Award, Sparkles, MapPin, ArrowRight } from "lucide-react";

export default function Overview() {
  const locationList = [
    {
      num: "01",
      icon: Castle,
      title: "5 km from Amber Fort",
      distance: "10-minute drive",
      desc: "Amber Fort is a 5 km drive from the hotel. Sheesh Mahal and the fort complex are inside.",
      tag: "Nearby landmark",
      href: "#adventures",
    },
    {
      num: "02",
      icon: Hotel,
      title: "Amer, Jaipur",
      distance: "Hotel location",
      desc: "The hotel is in Amer, near Amber Fort and Nahargarh Biological Park.",
      tag: "Location",
      href: undefined,
    },
    {
      num: "03",
      icon: TreePine,
      title: "50 m from Nahargarh Biological Park",
      distance: "Across the road",
      desc: "The park entrance is about 50 m from the hotel and offers the Nahargarh Lion Safari.",
      tag: "Wildlife",
      href: "#adventures",
    },
    {
      num: "04",
      icon: Compass,
      title: "Views toward the Aravalli hills",
      distance: "From selected areas",
      desc: "The rooftop pool photo shows nearby buildings, a transmission tower, and hills beyond.",
      tag: "Rooftop view",
      href: "#dining",
    },
  ];

  const stats = [
    { value: "3", label: "Room types" },
    { value: "2", label: "Dining spaces" },
    { value: "720 Ha", label: "Safari Reserve" },
    { value: "5 km", label: "To Amber Fort" },
  ];

  return (
    <section id="overview" className="py-24 relative bg-[#FDFBF7] text-[#011A51] overflow-hidden">
      {/* Background Architectural Scrim */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#A95A01]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F8F3EA] border border-[#A95A01]/40 text-[#A95A01] text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#A95A01]" />
            <span>Hotel overview</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#011A51] tracking-tight leading-tight">
            The Tasey Hotel in <span className="text-gold-gradient">Amer, Jaipur</span>
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#A95A01] to-transparent mx-auto my-5" />
          <p className="text-[#605A50] text-sm sm:text-base leading-relaxed font-normal max-w-2xl mx-auto">
            The Tasey Hotel is in Amer, Jaipur, 5 km from Amber Fort and about 50 m from Nahargarh Biological Park.
          </p>
        </div>

        {/* Editorial Asymmetric Layout (Split Showcase) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Grand Feature Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-[480px] sm:h-[580px] rounded-3xl overflow-hidden border border-[#A95A01]/40 shadow-xl group">
              <Image
                src="/images/tasey-09.jpeg"
                alt="The Tasey view toward Amber Fort"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#011A51]/90 via-[#011A51]/20 to-transparent" />

              {/* Top Floating Badge */}
              <div className="absolute top-6 left-6 right-6 flex justify-between items-center">
                <span className="px-4 py-1.5 rounded-full bg-[#FFFDF9]/95 backdrop-blur-md border border-[#A95A01]/50 text-[#A95A01] text-xs font-bold uppercase tracking-wider shadow-md flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-[#A95A01]" />
                  The Tasey Hotel
                </span>
                <span className="px-3 py-1 rounded-full bg-[#011A51]/80 backdrop-blur-md text-[#FFFDF9] text-xs font-mono border border-[#A95A01]/40">
                  Amer, Jaipur
                </span>
              </div>

              {/* Bottom Quote & Stats Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-[#FFFDF9]/95 backdrop-blur-md border border-[#A95A01]/40 shadow-xl space-y-4">
                <p className="font-serif-luxury text-sm sm:text-base text-[#011A51] italic font-semibold leading-snug">
                  Rooms, dining, a rooftop pool, and event spaces near Amber Fort.
                </p>

                <div className="grid grid-cols-4 gap-2 pt-3 border-t border-[#E5DCCB]">
                  {stats.map((st, i) => (
                    <div key={i} className="text-center">
                      <div className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#A95A01]">
                        {st.value}
                      </div>
                      <div className="text-[9px] text-[#605A50] uppercase font-bold tracking-wider mt-0.5">
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
              const Wrapper = item.href ? "a" : "div";
              return (
                <Wrapper
                  key={idx}
                  {...(item.href ? { href: item.href } : {})}
                  className={`bg-[#FFFDF9] p-6 rounded-2xl border border-[#E5DCCB] hover:border-[#A95A01] shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-5 group ${
                    item.href ? "cursor-pointer" : ""
                  }`}
                >
                  {/* Number Badge */}
                  <div className="font-serif-luxury text-2xl font-bold text-[#A95A01] group-hover:text-[#A95A01] transition-colors shrink-0 mt-1">
                    {item.num}
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap justify-between items-center gap-2 mb-1.5">
                      <h3 className="font-serif-luxury text-lg font-bold text-[#011A51] group-hover:text-[#A95A01] transition-colors">
                        {item.title}
                      </h3>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-[#F8F3EA] text-[#A95A01] border border-[#A95A01]/30">
                        {item.distance}
                      </span>
                    </div>

                    <p className="text-xs text-[#605A50] font-normal leading-relaxed mb-2">
                      {item.desc}
                    </p>

                    <div className="flex items-center justify-between text-[11px] text-[#A95A01] font-semibold pt-1">
                      <span>{item.tag}</span>
                      {item.href && (
                        <span className="text-[#A95A01] flex items-center gap-1 group-hover:translate-x-1 transition-transform font-bold">
                          Discover <ArrowRight className="w-3 h-3" />
                        </span>
                      )}
                    </div>
                  </div>
                </Wrapper>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

