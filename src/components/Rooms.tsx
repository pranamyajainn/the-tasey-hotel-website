"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Bed, Eye, Maximize2, Sparkles, Wifi, Wind, Bath, Coffee } from "lucide-react";

interface RoomsProps {
  onOpenBooking: (category: string) => void;
}

export default function Rooms({ onOpenBooking }: RoomsProps) {
  const [activeRoomIndex, setActiveRoomIndex] = useState(0);

  const rooms = [
    {
      id: "luxury-room",
      name: "Luxury Room",
      tagline: "Serene Hillside Calm with Hand-Carved Teak Accents",
      image: "/images/tasey-17.jpeg",
      price: "₹5,499",
      per: "per night + taxes",
      badge: "Premier Choice",
      size: "350 sq.ft",
      view: "Aravalli Mountain View",
      occupancy: "2 Guests",
      desc: "Warm Rajasthani heritage aesthetics meet modern luxury. Features plush king bedding, polished marble flooring, bespoke teak furniture, and sweeping mountain panoramas.",
      specs: [
        { label: "Plush King Bed", icon: Bed },
        { label: "Mountain Panorama", icon: Eye },
        { label: "En-suite Marble Bath", icon: Bath },
        { label: "Climate Control", icon: Wind },
        { label: "High-Speed Wi-Fi", icon: Wifi },
        { label: "24/7 In-Room Dining", icon: Coffee },
      ],
    },
    {
      id: "executive-room",
      name: "Executive Balcony Room",
      tagline: "Private Sit-Out Balcony Overlooking the Aravalli Slopes",
      image: "/images/tasey-16.jpeg",
      price: "₹7,999",
      per: "per night + taxes",
      badge: "Private Balcony",
      size: "450 sq.ft",
      view: "Private Balcony & Hill View",
      occupancy: "Up to 3 Guests",
      desc: "Designed for peaceful retreats, featuring a private sit-out balcony facing the hillside, an executive reading lounge, and spacious bathroom with deep rain shower.",
      specs: [
        { label: "Private Balcony", icon: Eye },
        { label: "Plush King Bed", icon: Bed },
        { label: "Rain Shower & Tub", icon: Bath },
        { label: "Espresso Maker", icon: Coffee },
        { label: "Reading Lounge", icon: Maximize2 },
        { label: "High-Speed Wi-Fi", icon: Wifi },
      ],
    },
    {
      id: "suite-room",
      name: "Royal Penthouse Suite",
      tagline: "Grand Penthouse Sanctuary with Separate Royal Living Salon",
      image: "/images/tasey-04.jpeg",
      price: "₹12,999",
      per: "per night + taxes",
      badge: "Signature Suite",
      size: "700 sq.ft",
      view: "360° Aravalli Vista",
      occupancy: "Up to 4 Guests",
      desc: "The pinnacle of boutique luxury at The TASEY. Includes an expansive royal salon with cane armchairs, panoramic floor-to-ceiling windows, and dedicated concierge service.",
      specs: [
        { label: "Private Living Salon", icon: Maximize2 },
        { label: "360° Aravalli Views", icon: Eye },
        { label: "King Master Bedroom", icon: Bed },
        { label: "Luxury Soaking Bath", icon: Bath },
        { label: "Concierge Butler", icon: Sparkles },
        { label: "High-Speed Wi-Fi", icon: Wifi },
      ],
    },
  ];

  const activeRoom = rooms[activeRoomIndex];

  return (
    <section id="rooms" className="py-24 relative bg-[#F8F3EA] text-[#1C1815] border-t border-b border-[#E5DCCB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#8C6310] block mb-3">
            Accommodations
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#1C1815] tracking-tight">
            Rooms & Suites
          </h2>
          <p className="mt-3 text-[#5C5046] text-sm sm:text-base font-normal leading-relaxed">
            Thoughtfully curated with warm Rajput architectural elements, marble finishes, and unhurried Aravalli hillside views.
          </p>
        </div>

        {/* Room Category Tabs */}
        <div className="flex flex-wrap gap-2.5 sm:gap-3 mb-10">
          {rooms.map((room, idx) => (
            <button
              key={room.id}
              onClick={() => setActiveRoomIndex(idx)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 flex items-center gap-2 border ${
                activeRoomIndex === idx
                  ? "bg-[#1C1815] text-[#FFFDF9] border-[#1C1815] shadow-md"
                  : "bg-[#FFFDF9] text-[#5C5046] border-[#C5A059]/30 hover:border-[#8C6310] hover:text-[#1C1815]"
              }`}
            >
              <Bed className={`w-3.5 h-3.5 ${activeRoomIndex === idx ? "text-[#C5A059]" : "text-[#8C6310]"}`} />
              <span>{room.name}</span>
            </button>
          ))}
        </div>

        {/* Active Room Portfolio Card */}
        <div className="bg-[#FFFDF9] rounded-3xl overflow-hidden border border-[#C5A059]/30 shadow-lg grid grid-cols-1 lg:grid-cols-12">
          
          {/* Room Photo Showcase */}
          <div className="lg:col-span-7 relative min-h-[340px] sm:min-h-[460px] overflow-hidden group">
            <Image
              src={activeRoom.image}
              alt={activeRoom.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Room Badge */}
            <div className="absolute top-5 left-5">
              <span className="px-3.5 py-1 rounded-full bg-[#FFFDF9]/95 backdrop-blur-md border border-[#C5A059]/40 text-[#8C6310] text-[11px] font-bold uppercase tracking-wider shadow-sm">
                {activeRoom.badge}
              </span>
            </div>

            {/* Bottom Floating Dimensions */}
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-xs text-white bg-black/50 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20">
              <span className="font-semibold">{activeRoom.size}</span>
              <span className="text-[#C5A059]">•</span>
              <span className="font-semibold">{activeRoom.view}</span>
              <span className="text-[#C5A059]">•</span>
              <span className="font-semibold">{activeRoom.occupancy}</span>
            </div>
          </div>

          {/* Room Specs & Reserve Action */}
          <div className="lg:col-span-5 p-7 sm:p-9 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#1C1815]">
                  {activeRoom.name}
                </h3>
              </div>

              <div className="flex items-baseline gap-2 mb-4">
                <span className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#8C6310]">
                  {activeRoom.price}
                </span>
                <span className="text-xs text-[#7A6E63]">{activeRoom.per}</span>
              </div>

              <p className="text-xs uppercase tracking-widest text-[#8C6310] font-semibold mb-3">
                {activeRoom.tagline}
              </p>

              <p className="text-[#5C5046] text-xs sm:text-sm font-normal leading-relaxed mb-6">
                {activeRoom.desc}
              </p>

              {/* Architectural Feature Specs */}
              <div className="grid grid-cols-2 gap-2.5 mb-8">
                {activeRoom.specs.map((spec, i) => {
                  const Icon = spec.icon;
                  return (
                    <div
                      key={i}
                      className="flex items-center gap-2 p-2 rounded-lg bg-[#F8F3EA] text-xs text-[#3B332B] font-medium border border-[#C5A059]/20"
                    >
                      <Icon className="w-3.5 h-3.5 text-[#8C6310] shrink-0" />
                      <span className="truncate">{spec.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Direct Booking Button */}
            <div className="pt-4 border-t border-[#E5DCCB]">
              <button
                type="button"
                onClick={() => onOpenBooking(activeRoom.name)}
                className="w-full py-3 px-5 rounded-xl bg-[#1C1815] hover:bg-[#8C6310] text-[#FFFDF9] font-bold text-xs tracking-wider uppercase shadow-md transition-all flex items-center justify-center gap-2 group"
              >
                <span>Reserve {activeRoom.name}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C5A059] group-hover:text-white group-hover:translate-x-1 transition-all" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
