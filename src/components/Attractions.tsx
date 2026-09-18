"use client";

import Image from "next/image";
import { MapPin, Navigation } from "lucide-react";

export default function Attractions() {
  const attractions = [
    {
      name: "Amber Fort",
      distance: "5 km, 10-minute drive",
      desc: "See Sheesh Mahal, the courtyards, and evening light and sound shows.",
      image: "/images/attractions/amber-fort.jpg",
    },
    {
      name: "Elephant Village Amer",
      distance: "3 km, 5-minute drive",
      desc: "The photo shows tourists riding painted elephants.",
      image: "/images/attractions/elephant-village.jpg",
    },
    {
      name: "Nahargarh Biological Park",
      distance: "50 m, across the road",
      desc: "The park entrance and Nahargarh Lion Safari are across the road.",
      image: "/images/attractions/nahargarh-fort.jpg",
    },
    {
      name: "Jal Mahal (Water Palace)",
      distance: "6.5 km, 12-minute drive",
      desc: "Jal Mahal stands in the centre of Man Sagar Lake.",
      image: "/images/attractions/jal-mahal.jpg",
    },
  ];

  return (
    <section id="attractions" className="py-20 sm:py-28 bg-[#FDFBF7] text-[#011A51]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif-luxury text-[28px] sm:text-[40px] text-[#011A51]">
          Nearby Jaipur attractions
        </h2>
        <p className="mt-3 text-[16px] leading-[1.6] text-[#605A50] max-w-md">
          Amber Fort, Nahargarh Biological Park, and Jal Mahal are within driving distance.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 mt-10">
          {attractions.map((att, idx) => (
            <div key={idx}>
              <div className="relative h-64 rounded overflow-hidden">
                <Image
                  src={att.image}
                  alt={att.name}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <h3 className="mt-4 text-[20px] text-[#011A51]">{att.name}</h3>
              <p className="mt-1 text-[16px] leading-[1.6] text-[#605A50] max-w-md">
                {att.distance}. {att.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Map Banner */}
        <div className="mt-12 pt-8 border-t border-[#E5DCCB] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-[#011A51] shrink-0" />
            <div>
              <div className="text-[16px] text-[#011A51]">The Tasey Hotel & Excursions</div>
              <div className="text-[14px] text-[#605A50]">
                Amer, Jaipur, 50 m from Nahargarh Biological Park, near Amber Fort
              </div>
            </div>
          </div>
          <a
            href="https://maps.google.com/?q=The+Tasey+Hotel+Amer+Jaipur"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded bg-[#A95A01] hover:bg-[#8C4A00] text-white text-[16px] font-medium shrink-0 flex items-center gap-2 transition-colors"
          >
            <Navigation className="w-4 h-4" />
            Open in Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
