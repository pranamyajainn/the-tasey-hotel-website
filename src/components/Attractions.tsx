"use client";

import Image from "next/image";
import { MapPin, Navigation, Compass, ExternalLink } from "lucide-react";

export default function Attractions() {
  const attractions = [
    {
      name: "Amber Fort",
      distance: "5 km (10 min)",
      category: "Fort complex",
      desc: "See Sheesh Mahal, the courtyards, and evening light and sound shows.",
      badge: "Nearby",
      image: "/images/attractions/amber-fort.jpg",
      span: "lg:col-span-2 h-96",
    },
    {
      name: "Elephant Village Amer",
      distance: "3 km (5 min drive)",
      category: "Elephant Village Amer",
      desc: "The photo shows tourists riding painted elephants.",
      badge: "Amer",
      image: "/images/attractions/elephant-village.jpg",
      span: "lg:col-span-1 h-96",
    },
    {
      name: "Nahargarh Biological Park",
      distance: "50 m (across the road)",
      category: "Wildlife park",
      desc: "The park entrance and Nahargarh Lion Safari are across the road.",
      badge: "50 m away",
      image: "/images/attractions/nahargarh-fort.jpg",
      span: "lg:col-span-1 h-84",
    },
    {
      name: "Jal Mahal (Water Palace)",
      distance: "6.5 KM (12 Min)",
      category: "Palace on Lake",
      desc: "Jal Mahal stands in the centre of Man Sagar Lake.",
      badge: "6.5 km away",
      image: "/images/attractions/jal-mahal.jpg",
      span: "lg:col-span-2 h-84",
    },
  ];

  return (
    <section id="attractions" className="py-24 relative bg-[#FDFBF7] text-[#011A51]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F8F3EA] border border-[#A95A01]/40 text-[#A95A01] text-xs font-bold uppercase tracking-widest mb-4">
            <Compass className="w-3.5 h-3.5 text-[#A95A01]" />
            <span>Nearby places</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#011A51] tracking-tight">
            Nearby <span className="text-gold-gradient">Jaipur attractions</span>
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#A95A01] to-transparent mx-auto my-5" />
          <p className="text-[#605A50] text-sm sm:text-base font-normal">
            Amber Fort, Nahargarh Biological Park, and Jal Mahal are within driving distance.
          </p>
        </div>

        {/* Visual Photography Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {attractions.map((att, idx) => (
            <div
              key={idx}
              className={`relative rounded-3xl overflow-hidden border border-[#A95A01]/40 shadow-xl group cursor-pointer ${att.span}`}
            >
              <Image
                src={att.image}
                alt={att.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                unoptimized
              />
              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#011A51]/90 via-[#011A51]/30 to-transparent" />

              {/* Top Badges */}
              <div className="absolute top-5 left-5 right-5 flex justify-between items-center z-10">
                <span className="text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full bg-[#FFFDF9]/95 backdrop-blur-md text-[#A95A01] border border-[#A95A01]/40 shadow-sm">
                  {att.badge}
                </span>
                <div className="flex items-center gap-1 text-xs text-[#A95A01] bg-[#FFFDF9]/95 backdrop-blur-md px-3 py-1 rounded-full border border-[#A95A01]/40 font-bold shadow-sm">
                  <Navigation className="w-3.5 h-3.5 text-[#A95A01]" />
                  <span>{att.distance}</span>
                </div>
              </div>

              {/* Bottom Content overlay */}
              <div className="absolute bottom-6 left-6 right-6 z-10 text-white space-y-2">
                <div className="text-[10px] text-[#FFC76B] uppercase tracking-widest font-bold">
                  {att.category}
                </div>
                <h3 className="font-serif-luxury text-2xl font-bold text-white group-hover:text-[#FFC76B] transition-colors">
                  {att.name}
                </h3>
                <p className="text-xs text-gray-200 font-normal leading-relaxed line-clamp-2">
                  {att.desc}
                </p>

                <div className="pt-2 flex items-center justify-between text-xs text-[#FFC76B] font-bold">
                  <span className="group-hover:underline flex items-center gap-1">
                    Get Directions <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Map Banner */}
        <div className="bg-[#FFFDF9] p-6 rounded-3xl border border-[#A95A01]/40 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#F8F3EA] border border-[#A95A01]/40 flex items-center justify-center text-[#A95A01] shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <div className="font-serif-luxury text-lg font-bold text-[#011A51]">
                The TASEY Hotel & Excursions
              </div>
              <div className="text-xs text-[#605A50] font-normal">
                Amer, Jaipur, 50 m from Nahargarh Biological Park, near Amber Fort
              </div>
            </div>
          </div>
          <a
            href="https://maps.google.com/?q=The+Tasey+Hotel+Amer+Jaipur"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#A95A01] to-[#A95A01] text-white font-bold text-xs uppercase tracking-wider transition-all shrink-0 flex items-center gap-2 shadow-md hover:scale-105"
          >
            <Navigation className="w-4 h-4 text-white" />
            Open in Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
