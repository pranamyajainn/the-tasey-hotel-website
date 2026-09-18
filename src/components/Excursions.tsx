"use client";

import Image from "next/image";

interface ExcursionsProps {
  onOpenBooking: (experience: string) => void;
}

export default function Excursions({ onOpenBooking }: ExcursionsProps) {
  const experiences = [
    {
      id: "nahargarh-lion-safari",
      title: "Nahargarh Lion Safari",
      location: "Across the road, 50 m",
      image: "/images/attractions/lion-safari.jpg",
      desc: "Nahargarh Biological Park is across the road. The safari includes lions and other park animals.",
    },
    {
      id: "amer-fort",
      title: "Amber Fort",
      location: "5 km from hotel, 10-minute drive",
      image: "/images/attractions/amber-fort.jpg",
      desc: "The 16th-century fort includes Sheesh Mahal, courtyards, and evening light and sound shows.",
    },
    {
      id: "elephant-village",
      title: "Elephant Village Amer",
      location: "3 km from hotel, 5-minute drive",
      image: "/images/attractions/elephant-wash.webp",
      desc: "The photo shows an elephant bathing in the lake at Elephant Village Amer.",
    },
    {
      id: "jal-mahal",
      title: "Jal Mahal (Water Palace)",
      location: "6.5 km from hotel, 12-minute drive",
      image: "/images/attractions/jal-mahal.jpg",
      desc: "Jal Mahal stands in the centre of Man Sagar Lake, 6.5 km from the hotel.",
    },
    {
      id: "leopard-safari",
      title: "Jhalana Leopard Expedition",
      location: "Concierge transfer, 25-minute drive",
      image: "/images/attractions/leopard-safari.jpg",
      desc: "Jhalana is a 25-minute drive for guided leopard safaris in open 4x4 jeeps.",
    },
  ];

  return (
    <section id="adventures" className="py-20 sm:py-28 bg-[#FDFBF7] text-[#011A51]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif-luxury text-[28px] sm:text-[40px] text-[#011A51]">
          Jaipur excursions
        </h2>
        <p className="mt-3 text-[16px] leading-[1.6] text-[#605A50] max-w-md">
          Ask the concierge about transport and bookings for nearby forts, parks, and safaris.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 mt-10">
          {experiences.map((exp) => (
            <div key={exp.id}>
              <div className="relative h-64 rounded overflow-hidden">
                <Image
                  src={exp.image}
                  alt={exp.title}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <h3 className="mt-4 text-[20px] text-[#011A51]">{exp.title}</h3>
              <p className="mt-1 text-[16px] leading-[1.6] text-[#605A50] max-w-md">
                {exp.location}. {exp.desc}
              </p>
              <button
                type="button"
                onClick={() => onOpenBooking(exp.title)}
                className="mt-2 text-[16px] text-[#A95A01] hover:underline"
              >
                Inquire with concierge
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
