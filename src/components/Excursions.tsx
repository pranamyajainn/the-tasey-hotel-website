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
      location: "Across the road • 50 m",
      image: "/images/attractions/lion-safari.jpg",
      desc: "Nahargarh Biological Park is across the road. The safari includes lions and other park animals.",
      tags: ["Asiatic Lions", "Open-Top 4x4 Safari", "Forest Trails"],
    },
    {
      id: "amer-fort",
      title: "Amber Fort",
      location: "5 km from hotel • 10-minute drive",
      image: "/images/attractions/amber-fort.jpg",
      desc: "The 16th-century fort includes Sheesh Mahal, courtyards, and evening light and sound shows.",
      tags: ["Fort complex", "Sheesh Mahal", "Light and sound show"],
    },
    {
      id: "elephant-village",
      title: "Elephant Village Amer",
      location: "3 km from hotel • 5-minute drive",
      image: "/images/attractions/elephant-village.jpg",
      desc: "The photo shows visitors riding painted elephants at Elephant Village Amer.",
      tags: ["Elephant rides", "Painted elephants", "Amer"],
    },
    {
      id: "jal-mahal",
      title: "Jal Mahal (Water Palace)",
      location: "6.5 km from hotel • 12-minute drive",
      image: "/images/attractions/jal-mahal.jpg",
      desc: "Jal Mahal stands in the centre of Man Sagar Lake, 6.5 km from the hotel.",
      tags: ["Man Sagar Lake", "Water palace", "6.5 km"],
    },
    {
      id: "leopard-safari",
      title: "Jhalana Leopard Expedition",
      location: "Concierge transfer • 25-minute drive",
      image: "/images/attractions/leopard-safari.jpg",
      desc: "Jhalana is a 25-minute drive for guided leopard safaris in open 4x4 jeeps.",
      tags: ["Leopard safari", "Guided drive", "Open 4x4 jeep"],
    },
  ];

  return (
    <section id="adventures" className="py-24 relative bg-[#FDFBF7] text-[#011A51]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#011A51] block mb-3">
            Local excursions
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold tracking-tight text-[#011A51] leading-tight">
            Jaipur excursions
          </h2>
          <p className="mt-4 text-[#605A50] text-sm sm:text-base font-normal leading-relaxed">
            Ask the concierge about transport and bookings for nearby forts, parks, and safaris.
          </p>
        </div>

        {/* Portfolio Visual Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {experiences.map((exp, idx) => (
            <div
              key={exp.id}
              className={`bg-[#FFFDF9] rounded-2xl overflow-hidden border border-[#E5DCCB] shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col group ${
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
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFFDF9]/95 backdrop-blur-md text-[#011A51] text-[11px] font-bold tracking-wide shadow-sm border border-[#E5DCCB]">
                    <MapPin className="w-3 h-3 text-[#011A51]" />
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
                  <h3 className={`font-serif-luxury text-xl sm:text-2xl font-bold text-[#011A51] mb-2 ${idx === 0 ? "sm:hidden" : ""}`}>
                    {exp.title}
                  </h3>
                  <p className="text-[#605A50] text-xs sm:text-sm leading-relaxed mb-4">
                    {exp.desc}
                  </p>
                  
                  {/* Clean Tags - No Emojis */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-[#F8F3EA] text-[#011A51] text-[11px] font-semibold tracking-wide border border-[#E5DCCB]"
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
                  className="w-full py-2.5 px-4 rounded-xl bg-[#F8F3EA] hover:bg-[#011A51] text-[#011A51] hover:text-white text-xs font-bold tracking-wider uppercase transition-all duration-300 flex items-center justify-between border border-[#A95A01]/30 group/btn"
                >
                  <span>Inquire with Concierge</span>
                  <ArrowUpRight className="w-4 h-4 text-[#A95A01] group-hover/btn:text-[#A95A01] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
