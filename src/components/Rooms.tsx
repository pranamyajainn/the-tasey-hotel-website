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
      id: "standard-room",
      name: "Standard Room",
      tagline: "350 sq ft with a king bed",
      image: "/images/tasey-17.jpeg",
      price: "₹5,499",
      per: "per night + taxes",
      badge: "350 sq ft",
      size: "350 sq.ft",
      view: "Hill-facing window",
      occupancy: "2 Guests",
      desc: "The photo shows an upholstered headboard, split AC, curtains, a TV unit, and a marble floor.",
      specs: [
        { label: "King bed", icon: Bed },
        { label: "Hill-facing window", icon: Eye },
        { label: "Marble bathroom", icon: Bath },
        { label: "Split AC", icon: Wind },
        { label: "Wi-Fi", icon: Wifi },
        { label: "Tea and coffee", icon: Coffee },
      ],
    },
    {
      id: "executive-room",
      name: "Executive Room",
      tagline: "450 sq ft with a private balcony",
      image: "/images/tasey-16.jpeg",
      price: "₹7,999",
      per: "per night + taxes",
      badge: "Private Balcony",
      size: "450 sq.ft",
      view: "Balcony and hill view",
      occupancy: "Up to 3 Guests",
      desc: "A larger room with a private balcony, seating area, curtains, and a tiled bathroom.",
      specs: [
        { label: "Private balcony", icon: Eye },
        { label: "King bed", icon: Bed },
        { label: "Bathroom", icon: Bath },
        { label: "Tea and coffee", icon: Coffee },
        { label: "Seating area", icon: Maximize2 },
        { label: "Wi-Fi", icon: Wifi },
      ],
    },
    {
      id: "suite-room",
      name: "Suite Room",
      tagline: "700 sq ft with a separate living room",
      image: "/images/tasey-04.jpeg",
      price: "₹12,999",
      per: "per night + taxes",
      badge: "700 sq ft",
      size: "700 sq.ft",
      view: "Hill-facing windows",
      occupancy: "Up to 4 Guests",
      desc: "The photo shows a separate living room with cane chairs, a bedroom, curtains, and large windows.",
      specs: [
        { label: "Separate living room", icon: Maximize2 },
        { label: "Large windows", icon: Eye },
        { label: "King bed", icon: Bed },
        { label: "Bathroom", icon: Bath },
        { label: "Room service", icon: Sparkles },
        { label: "Wi-Fi", icon: Wifi },
      ],
    },
  ];

  const activeRoom = rooms[activeRoomIndex];

  return (
    <section id="rooms" className="py-24 relative bg-[#F8F3EA] text-[#011A51] border-t border-b border-[#E5DCCB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#A95A01] block mb-3">
            Accommodations
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#011A51] tracking-tight">
            Rooms and suites
          </h2>
          <p className="mt-3 text-[#605A50] text-sm sm:text-base font-normal leading-relaxed">
            Room sizes, bed types, and visible furnishings are listed with each room.
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
                  ? "bg-[#011A51] text-[#FFFDF9] border-[#011A51] shadow-md"
                  : "bg-[#FFFDF9] text-[#605A50] border-[#A95A01]/30 hover:border-[#A95A01] hover:text-[#011A51]"
              }`}
            >
              <Bed className={`w-3.5 h-3.5 ${activeRoomIndex === idx ? "text-[#A95A01]" : "text-[#A95A01]"}`} />
              <span>{room.name}</span>
            </button>
          ))}
        </div>

        {/* Active Room Portfolio Card */}
        <div className="bg-[#FFFDF9] rounded-3xl overflow-hidden border border-[#A95A01]/30 shadow-lg grid grid-cols-1 lg:grid-cols-12">
          
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
              <span className="px-3.5 py-1 rounded-full bg-[#FFFDF9]/95 backdrop-blur-md border border-[#A95A01]/40 text-[#A95A01] text-[11px] font-bold uppercase tracking-wider shadow-sm">
                {activeRoom.badge}
              </span>
            </div>

            {/* Bottom Floating Dimensions */}
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-xs text-white bg-black/50 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20">
              <span className="font-semibold">{activeRoom.size}</span>
              <span className="text-[#A95A01]">•</span>
              <span className="font-semibold">{activeRoom.view}</span>
              <span className="text-[#A95A01]">•</span>
              <span className="font-semibold">{activeRoom.occupancy}</span>
            </div>
          </div>

          {/* Room Specs & Reserve Action */}
          <div className="lg:col-span-5 p-7 sm:p-9 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#011A51]">
                  {activeRoom.name}
                </h3>
              </div>

              <div className="flex items-baseline gap-2 mb-4">
                <span className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#A95A01]">
                  {activeRoom.price}
                </span>
                <span className="text-xs text-[#605A50]">{activeRoom.per}</span>
              </div>

              <p className="text-xs uppercase tracking-widest text-[#A95A01] font-semibold mb-3">
                {activeRoom.tagline}
              </p>

              <p className="text-[#605A50] text-xs sm:text-sm font-normal leading-relaxed mb-6">
                {activeRoom.desc}
              </p>

              {/* Architectural Feature Specs */}
              <div className="grid grid-cols-2 gap-2.5 mb-8">
                {activeRoom.specs.map((spec, i) => {
                  const Icon = spec.icon;
                  return (
                    <div
                      key={i}
                      className="flex items-center gap-2 p-2 rounded-lg bg-[#F8F3EA] text-xs text-[#011A51] font-medium border border-[#A95A01]/20"
                    >
                      <Icon className="w-3.5 h-3.5 text-[#A95A01] shrink-0" />
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
                className="w-full py-3 px-5 rounded-xl bg-[#011A51] hover:bg-[#A95A01] text-[#FFFDF9] font-bold text-xs tracking-wider uppercase shadow-md transition-all flex items-center justify-center gap-2 group"
              >
                <span>Reserve {activeRoom.name}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#A95A01] group-hover:text-white group-hover:translate-x-1 transition-all" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
