"use client";

import Image from "next/image";
import { Compass, MapPin, ArrowUpRight } from "lucide-react";

interface ExcursionsProps {
  onOpenBooking: (experience: string) => void;
}

export default function Excursions({ onOpenBooking }: ExcursionsProps) {
  const experiences = [
    {
      id: "nahargarh-lion-safari",
      title: "Nahargarh Lion Safari",
      location: "Directly Opposite Hotel • 50m",
      image: "/images/attractions/lion-safari.jpg",
      desc: "Protected 720-hectare Aravalli biological park home to Asiatic lions, panthers, and indigenous deer, located right across our gates.",
      tags: ["Asiatic Lions", "Open-Top 4x4 Safari", "Forest Trails"],
    },
    {
      id: "amer-fort",
      title: "Amber Fort & Royal Citadel",
      location: "5 KM from Hotel • 10 Min Drive",
      image: "/images/attractions/amber-fort.jpg",
      desc: "Jaipur's iconic 16th-century hilltop fortress, featuring the world-famous Sheesh Mahal, royal courtyards, and evening illumination shows.",
      tags: ["UNESCO Heritage", "Private Guided Tours", "Sheesh Mahal"],
    },
    {
      id: "elephant-village",
      title: "Elephant Sanctuary Amer",
      location: "3 KM from Hotel • 5 Min Drive",
      image: "/images/attractions/elephant-village.jpg",
      desc: "Ethical sanctuary in Amer offering intimate morning walks, feeding sessions, and caring interactions alongside gentle elephants.",
      tags: ["Sanctuary Walk", "Feeding Session", "Family Friendly"],
    },
    {
      id: "jal-mahal",
      title: "Jal Mahal (Water Palace)",
      location: "6.5 KM from Hotel • 12 Min Drive",
      image: "/images/attractions/jal-mahal.jpg",
      desc: "A floating Rajput architectural marvel resting serenely in the centre of Man Sagar Lake against the backdrop of the Aravalli hills.",
      tags: ["Scenic Lake Vista", "Sunset Photography", "Historic Palace"],
    },
    {
      id: "leopard-safari",
      title: "Jhalana Leopard Expedition",
      location: "Concierge Transfer • 25 Min Drive",
      image: "/images/attractions/leopard-safari.jpg",
      desc: "Jaipur's premier leopard sanctuary boasting one of the world's highest densities of wild leopards, tracked in open 4x4 safari jeeps.",
      tags: ["Wild Leopards", "Trackers & Guides", "Private 4x4 Jeep"],
    },
  ];

  return (
    <section id="adventures" className="py-24 relative bg-[#FDFBF7] text-[#1C1815]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#8C6310] block mb-3">
            The Concierge Collection
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold tracking-tight text-[#1C1815] leading-tight">
            Curated Jaipur Excursions
          </h2>
          <p className="mt-4 text-[#5C5046] text-sm sm:text-base font-normal leading-relaxed">
            With The TASEY Hotel as your private retreat in Amer, our concierge team handles all safari permits, private transfers, and local heritage guides.
          </p>
        </div>

        {/* Portfolio Visual Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {experiences.map((exp, idx) => (
            <div
              key={exp.id}
              className={`bg-[#FFFDF9] rounded-2xl overflow-hidden border border-[#C5A059]/30 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col group ${
                idx === 0 ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              {/* Photo Showcase */}
              <div className={`relative overflow-hidden ${idx === 0 ? "h-72 sm:h-96" : "h-64 sm:h-72"}`}>
                <Image
                  src={exp.image}
                  alt={exp.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                
                {/* Distance Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFFDF9]/95 backdrop-blur-md text-[#8C6310] text-[11px] font-bold tracking-wide shadow-sm border border-[#C5A059]/30">
                    <MapPin className="w-3 h-3 text-[#C5A059]" />
                    {exp.location}
                  </span>
                </div>

                {/* Card Title on Photo for primary card */}
                {idx === 0 && (
                  <div className="absolute bottom-4 left-6 right-6 z-10 hidden sm:block">
                    <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white">
                      {exp.title}
                    </h3>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className={`font-serif-luxury text-xl sm:text-2xl font-bold text-[#1C1815] mb-2 ${idx === 0 ? "sm:hidden" : ""}`}>
                    {exp.title}
                  </h3>
                  <p className="text-[#5C5046] text-xs sm:text-sm leading-relaxed mb-4">
                    {exp.desc}
                  </p>
                  
                  {/* Clean Tags - No Emojis */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-[#F8F3EA] text-[#8C6310] text-[11px] font-semibold tracking-wide border border-[#C5A059]/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Concierge Action CTA */}
                <button
                  type="button"
                  onClick={() => onOpenBooking(exp.title)}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#F8F3EA] hover:bg-[#1C1815] text-[#1C1815] hover:text-white text-xs font-bold tracking-wider uppercase transition-all duration-300 flex items-center justify-between border border-[#C5A059]/30 group/btn"
                >
                  <span>Inquire with Concierge</span>
                  <ArrowUpRight className="w-4 h-4 text-[#8C6310] group-hover/btn:text-[#C5A059] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
