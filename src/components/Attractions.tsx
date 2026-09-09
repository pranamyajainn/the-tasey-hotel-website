"use client";

import Image from "next/image";
import { MapPin, Navigation, Compass, ExternalLink, Sparkles } from "lucide-react";

export default function Attractions() {
  const attractions = [
    {
      name: "Historic Amber Fort",
      distance: "5 KM (10 Min)",
      category: "UNESCO Heritage Fort",
      desc: "Jaipur's iconic 16th-century fortress featuring Sheesh Mahal (Mirror Palace) and hilltop light-and-sound shows.",
      badge: "Must Visit",
      image: "/images/amber-fort.jpg",
      span: "lg:col-span-2 h-96",
    },
    {
      name: "Taj Amber & Indiana Place",
      distance: "100 Meters (1 Min Walk)",
      category: "Luxury Landmark Enclave",
      desc: "Located right next door in Jaipur's finest heritage hospitality zone.",
      badge: "Adjacent",
      image: "/images/hero.jpg",
      span: "lg:col-span-1 h-96",
    },
    {
      name: "Nahargarh Zoological Park",
      distance: "50 Meters (Step Outside)",
      category: "Nature & Wildlife Reserve",
      desc: "Pristine wildlife sanctuary offering lion safaris, birdwatching, and forest trails right across our entrance.",
      badge: "Across the Road",
      image: "/images/hero.jpg",
      span: "lg:col-span-1 h-84",
    },
    {
      name: "Jal Mahal (Water Palace)",
      distance: "6.5 KM (12 Min)",
      category: "Palace on Lake",
      desc: "Stunning Rajput style palace floating gracefully in the middle of Man Sagar Lake.",
      badge: "Scenic Spot",
      image: "/images/jal-mahal.jpg",
      span: "lg:col-span-2 h-84",
    },
  ];

  return (
    <section id="attractions" className="py-24 relative bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F8F3EA] border border-[#C5A059]/30 text-[#9E7B32] text-xs font-bold uppercase tracking-widest mb-4">
            <Compass className="w-3.5 h-3.5 text-[#B88E36]" />
            <span>Prime Hillside Location</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#1C1815] tracking-tight">
            Explore Nearby <span className="text-gold-gradient">Jaipur Attractions</span>
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent mx-auto my-5" />
          <p className="text-[#5C5046] text-sm sm:text-base font-normal">
            Enjoy peace of the hills with Jaipur's most famous monuments and wildlife sanctuaries right at your doorstep.
          </p>
        </div>

        {/* Visual Photography Magazine Grid (Asymmetric Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {attractions.map((att, idx) => (
            <div
              key={idx}
              className={`relative rounded-t-[2.5rem] rounded-b-2xl overflow-hidden border border-[#C5A059]/35 shadow-lg group cursor-pointer ${att.span}`}
            >
              <Image
                src={att.image}
                alt={att.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Gradient Scrim for crisp text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />

              {/* Top Badges */}
              <div className="absolute top-5 left-5 right-5 flex justify-between items-center z-10">
                <span className="text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#9E7B32] border border-[#C5A059]/40 shadow-sm">
                  {att.badge}
                </span>
                <div className="flex items-center gap-1 text-xs text-amber-200 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 font-bold">
                  <Navigation className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>{att.distance}</span>
                </div>
              </div>

              {/* Bottom Content overlay */}
              <div className="absolute bottom-6 left-6 right-6 z-10 text-white space-y-2">
                <div className="text-[10px] text-amber-300 uppercase tracking-widest font-bold">
                  {att.category}
                </div>
                <h3 className="font-serif-luxury text-2xl font-bold text-white group-hover:text-amber-200 transition-colors">
                  {att.name}
                </h3>
                <p className="text-xs text-gray-200 font-light leading-relaxed line-clamp-2">
                  {att.desc}
                </p>

                <div className="pt-2 flex items-center justify-between text-xs text-[#C5A059] font-bold">
                  <span className="group-hover:underline flex items-center gap-1">
                    Get Directions <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Map Banner */}
        <div className="bg-[#FFFDF9] p-6 rounded-2xl border border-[#C5A059]/35 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#F8F3EA] border border-[#C5A059]/30 flex items-center justify-center text-[#B88E36] shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <div className="font-serif-luxury text-lg font-bold text-[#1C1815]">
                The Tasey Hotel & Restaurant
              </div>
              <div className="text-xs text-[#5C5046] font-normal">
                Aravali Hills, 50m from Nahargarh Zoological Park, Near Amber Fort, Jaipur, Rajasthan 302028
              </div>
            </div>
          </div>
          <a
            href="https://maps.google.com/?q=Amber+Fort+Jaipur"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-[#1C1815] hover:bg-[#B88E36] text-[#FFFDF9] border border-[#1C1815] text-xs font-bold uppercase tracking-wider transition-colors shrink-0 flex items-center gap-2 shadow-md"
          >
            <Navigation className="w-4 h-4 text-[#C5A059]" />
            Open in Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
