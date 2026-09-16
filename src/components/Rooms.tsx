"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckCircle2, Sparkles, ArrowRight, Bed, Eye, Maximize2 } from "lucide-react";

interface RoomsProps {
  onOpenBooking: (category: string) => void;
}

export default function Rooms({ onOpenBooking }: RoomsProps) {
  const [activeRoomIndex, setActiveRoomIndex] = useState(0);

  const rooms = [
    {
      id: "luxury-room",
      name: "Luxury Room",
      tagline: "Sophisticated Opulence & Serene Hillside Calm",
      image: "/images/tasey-11.jpeg",
      price: "₹5,499",
      per: "night + taxes",
      badge: "Popular Choice",
      size: "350 sq.ft",
      view: "Aravalli Hill View",
      occupancy: "2 Adults + 1 Child",
      desc: "Our Luxury Rooms offer a perfect blend of Rajasthani hand-carved heritage aesthetics and modern comforts. Enjoy plush king bedding, marble floors, and large glass windows revealing green mountain slopes.",
      amenities: [
        "Plush King Bed with 400 Thread-Count Linen",
        "Hill-Facing Panoramic Window",
        "En-suite Marble Bathroom with Organic Toiletries",
        "Individual Climate Control",
        "High-Speed Wi-Fi & Smart HD TV",
        "24/7 In-Room Dining Service",
        "Complimentary Morning Breakfast",
      ],
    },
    {
      id: "executive-room",
      name: "Executive Room",
      tagline: "Ergonomic Elegance with Private Viewing Balcony",
      image: "/images/tasey-12.jpeg",
      price: "₹7,999",
      per: "night + taxes",
      badge: "Best View",
      size: "450 sq.ft",
      view: "Panoramic Hill & Pool View",
      occupancy: "2 Adults + 2 Children",
      desc: "Designed for discerning travelers, the Executive Room features a private sit-out balcony overlooking the Aravalli range, a plush workspace lounge, espresso maker, and rich teak wood accents.",
      amenities: [
        "Private Hillside Balcony with Seating",
        "Plush Workspace & Leather Reading Armchair",
        "Luxury Rain Shower & Soaking Tub",
        "In-Room Espresso Machine & Premium Tea Selection",
        "Stocked Mini Bar & Welcome Drinks",
        "Priority Table Booking at Haldi & Jhumka",
        "24/7 Dedicated Concierge Support",
      ],
    },
    {
      id: "suite-room",
      name: "Suite Room",
      tagline: "Royal Penthouse Sanctuary with 360° Aravalli Vista",
      image: "/images/tasey-13.jpeg",
      price: "₹12,999",
      per: "night + taxes",
      badge: "Ultimate Royal Luxury",
      size: "700 sq.ft",
      view: "360° Aravalli Mountain & Fort View",
      occupancy: "Up to 4 Guests",
      desc: "The pinnacle of royal indulgence. Our Suite Room features a lavish separate living room, plush velvet sofas, floor-to-ceiling glass walls, and a grand marble bathroom with a deep soaking Jacuzzi tub facing the sunset.",
      amenities: [
        "Separate Royal Living Room & Lounge",
        "Deep Soaking Jacuzzi Bath with Mountain View",
        "Floor-to-Ceiling 360° Panoramic Glass Walls",
        "Personalized Butler Service on Call",
        "Complimentary Airport/Station Transfer",
        "Complimentary Poolside High Tea at Jhumka",
        "Luxury Pillow Menu & Turndown Gift Service",
      ],
    },
  ];

  const activeRoom = rooms[activeRoomIndex];

  return (
    <section id="rooms" className="py-24 relative bg-[#070A12] text-gray-100 border-t border-b border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#E5C365] font-bold flex items-center justify-center gap-2 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            Luxurious Stay Categories
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Well-Appointed <span className="text-gold-gradient">Rooms & Suites</span>
          </h2>
          <p className="mt-4 text-gray-300 text-sm sm:text-base font-light">
            Every room at The TASEY Hotel is thoughtfully curated with modern luxury amenities, warm lighting, and captivating Aravalli hill views.
          </p>
        </div>

        {/* Room Category Tabs Selector */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12">
          {rooms.map((room, idx) => (
            <button
              key={room.id}
              onClick={() => setActiveRoomIndex(idx)}
              className={`px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-bold tracking-wider transition-all duration-300 flex items-center gap-2 border ${
                activeRoomIndex === idx
                  ? "bg-gradient-to-r from-[#D4AF37] to-[#B38F24] text-black border-transparent shadow-lg scale-105"
                  : "bg-[#0F172A] text-gray-300 border-[#D4AF37]/20 hover:border-[#D4AF37] hover:text-white"
              }`}
            >
              <Bed className={`w-4 h-4 ${activeRoomIndex === idx ? "text-black" : "text-[#D4AF37]"}`} />
              <span>{room.name}</span>
            </button>
          ))}
        </div>

        {/* Active Room Showcase Card */}
        <div className="glass-card-dark rounded-3xl overflow-hidden border border-[#D4AF37]/35 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Room Image Display */}
          <div className="lg:col-span-7 relative min-h-[360px] sm:min-h-[480px] group overflow-hidden">
            <Image
              src={activeRoom.image}
              alt={activeRoom.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070A12] via-[#070A12]/30 to-transparent" />

            {/* Floating Room Badge */}
            <div className="absolute top-6 left-6 flex items-center gap-2">
              <span className="px-3.5 py-1.5 rounded-full bg-[#070A12]/80 backdrop-blur-md border border-[#D4AF37]/40 text-[#E5C365] text-xs font-bold uppercase tracking-wider shadow-md">
                {activeRoom.badge}
              </span>
            </div>

            {/* Room Quick Specs Strip */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-4 text-xs text-white bg-[#070A12]/80 backdrop-blur-md p-4 rounded-xl border border-[#D4AF37]/30">
              <div className="flex items-center gap-1.5">
                <Maximize2 className="w-4 h-4 text-[#D4AF37]" />
                <span>{activeRoom.size}</span>
              </div>
              <span className="text-gray-500">•</span>
              <div className="flex items-center gap-1.5">
                <Eye className="w-4 h-4 text-[#D4AF37]" />
                <span>{activeRoom.view}</span>
              </div>
              <span className="text-gray-500">•</span>
              <div className="flex items-center gap-1.5">
                <Bed className="w-4 h-4 text-[#D4AF37]" />
                <span>{activeRoom.occupancy}</span>
              </div>
            </div>
          </div>

          {/* Room Details & Amenities */}
          <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white">
                  {activeRoom.name}
                </h3>
                <div className="text-right">
                  <span className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#E5C365]">
                    {activeRoom.price}
                  </span>
                  <span className="text-[11px] text-gray-400 block font-medium">{activeRoom.per}</span>
                </div>
              </div>

              <p className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold mb-4">
                {activeRoom.tagline}
              </p>

              <p className="text-gray-300 text-xs sm:text-sm font-light leading-relaxed mb-6">
                {activeRoom.desc}
              </p>

              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
                Room Amenities & Privileges
              </h4>
              <ul className="space-y-2.5">
                {activeRoom.amenities.map((amenity, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-gray-200 font-normal">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>{amenity}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-[#D4AF37]/20 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => onOpenBooking(activeRoom.name)}
                className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B38F24] text-black font-bold text-xs sm:text-sm tracking-wider uppercase shadow-xl hover:shadow-[#D4AF37]/30 hover:scale-102 transition-all flex items-center justify-center gap-2"
              >
                <span>Reserve {activeRoom.name}</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

