"use client";

import { useState } from "react";
import Image from "next/image";

interface RoomsProps {
  onOpenBooking: (category: string) => void;
}

export default function Rooms({ onOpenBooking }: RoomsProps) {
  const [activeRoomIndex, setActiveRoomIndex] = useState(0);

  const rooms = [
    {
      id: "executive-room",
      name: "Executive Room",
      tagline: "350 sq ft with a king bed",
      image: "/images/tasey-17.jpeg",
      price: "₹2,900",
      per: "per night + taxes",
      size: "350 sq ft",
      view: "Hill-facing window",
      occupancy: "2 guests",
      desc: "The photo shows an upholstered headboard, split AC, curtains, a TV unit, and a marble floor.",
      specs: "King bed, hill-facing window, marble bathroom, split AC, Wi-Fi, tea and coffee.",
    },
    {
      id: "luxury-room",
      name: "Luxury Room",
      tagline: "450 sq ft with a private balcony",
      image: "/images/tasey-16.jpeg",
      price: "₹3,800",
      per: "per night + taxes",
      size: "450 sq ft",
      view: "Balcony and hill view",
      occupancy: "Up to 3 guests",
      desc: "A larger room with a private balcony, seating area, curtains, and a tiled bathroom.",
      specs: "Private balcony, king bed, bathroom, tea and coffee, seating area, Wi-Fi.",
    },
    {
      id: "suite-room",
      name: "Suite Room",
      tagline: "700 sq ft with a king bed",
      image: "/images/tasey-04.jpeg",
      price: "₹5,400",
      per: "per night + taxes",
      size: "700 sq ft",
      view: "Curtained window",
      occupancy: "Up to 4 guests",
      desc: "The photo shows a leather headboard, a patterned accent wall, curtains, split AC, and a bedside lamp.",
      specs: "King bed, split AC, bathroom, room service, Wi-Fi.",
    },
  ];

  const activeRoom = rooms[activeRoomIndex];

  return (
    <section id="rooms" className="py-20 sm:py-28 bg-[#F8F3EA] text-[#011A51]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="font-serif-luxury text-[28px] sm:text-[40px] text-[#011A51]">
          Rooms and suites
        </h2>
        <p className="mt-3 text-[16px] leading-[1.6] text-[#605A50] max-w-md">
          Room sizes, bed types, and visible furnishings are listed with each room.
        </p>

        {/* Room Tabs */}
        <div className="flex flex-wrap gap-2 mt-8 mb-10 border-b border-[#E5DCCB]">
          {rooms.map((room, idx) => (
            <button
              key={room.id}
              onClick={() => setActiveRoomIndex(idx)}
              className={`px-1 py-2.5 mr-6 text-[16px] border-b-2 transition-colors ${
                activeRoomIndex === idx
                  ? "text-[#011A51] border-[#A95A01]"
                  : "text-[#605A50] border-transparent hover:text-[#011A51]"
              }`}
            >
              {room.name}
            </button>
          ))}
        </div>

        {/* Active Room */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-7 relative min-h-[300px] sm:min-h-[420px] rounded overflow-hidden">
            <Image
              src={activeRoom.image}
              alt={activeRoom.name}
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover"
              priority
            />
          </div>

          <div className="lg:col-span-5 flex flex-col">
            <h3 className="font-serif-luxury text-[28px] text-[#011A51]">
              {activeRoom.name}
            </h3>
            <p className="mt-1 text-[16px] text-[#605A50]">{activeRoom.tagline}</p>

            <div className="mt-4 flex items-baseline gap-2">
              <span className="font-serif-luxury text-[28px] text-[#011A51]">
                {activeRoom.price}
              </span>
              <span className="text-[14px] text-[#605A50]">{activeRoom.per}</span>
            </div>

            <p className="mt-4 text-[16px] leading-[1.6] text-[#605A50] max-w-md">
              {activeRoom.desc}
            </p>

            <p className="mt-4 text-[16px] leading-[1.6] text-[#605A50] max-w-md">
              {activeRoom.size} &middot; {activeRoom.view} &middot; {activeRoom.occupancy}
            </p>

            <p className="mt-2 text-[16px] leading-[1.6] text-[#605A50] max-w-md">
              {activeRoom.specs}
            </p>

            <div className="mt-6">
              <button
                type="button"
                onClick={() => onOpenBooking(activeRoom.name)}
                className="px-6 py-3 rounded bg-[#011A51] hover:bg-[#A95A01] text-[#FFFDF9] text-[16px] font-medium transition-colors"
              >
                Reserve {activeRoom.name}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
