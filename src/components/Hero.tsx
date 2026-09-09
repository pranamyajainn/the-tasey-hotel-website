"use client";

import { useState } from "react";
import Image from "next/image";
import { Calendar, Users, Sparkles, MapPin, Search } from "lucide-react";

interface HeroProps {
  onOpenBooking: (details?: { category?: string; checkIn?: string; checkOut?: string; guests?: string }) => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  const [checkIn, setCheckIn] = useState("2026-09-12");
  const [checkOut, setCheckOut] = useState("2026-09-14");
  const [guests, setGuests] = useState("2 Guests, 1 Room");
  const [experience, setExperience] = useState("Luxury Stay");

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenBooking({
      category: experience,
      checkIn,
      checkOut,
      guests,
    });
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-[#FDFBF7]">
      {/* Background Image with Light Scrim Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpg"
          alt="The Tasey Boutique Hotel Aravali View"
          fill
          priority
          className="object-cover object-center scale-105"
        />
        {/* Soft elegant gradient scrims for contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FDFBF7] via-[#FDFBF7]/50 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFFDF9]/60 via-transparent to-[#FDFBF7]" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto text-center flex flex-col items-center">
        {/* Location Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFFDF9]/90 backdrop-blur-md border border-[#C5A059]/40 text-[#1C1815] text-xs sm:text-sm font-semibold uppercase tracking-widest mb-6 shadow-md">
          <Sparkles className="w-4 h-4 text-[#B88E36]" />
          <span>Jaipur's Serene Hillside Sanctuary</span>
          <span className="text-[#C5A059]">•</span>
          <span className="text-[#9E7B32]">Near Amber Fort</span>
        </div>

        {/* Hero Title */}
        <h1 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#1C1815] max-w-5xl leading-[1.1] drop-shadow-sm">
          Where <span className="text-gold-gradient italic">Royal Luxury</span> Meets Aravali Hills
        </h1>

        {/* Hero Subtitle */}
        <p className="mt-6 text-base sm:text-xl text-[#3D352E] max-w-3xl font-normal leading-relaxed">
          Welcome to <strong className="text-[#1C1815] font-bold">The Tasey</strong> — a boutique hotel & restaurant offering opulent rooms, authentic Rajasthani dining at <em className="font-serif text-[#B88E36] font-semibold">Haldi</em>, and romantic rooftop poolside dining at <em className="font-serif text-[#B88E36] font-semibold">Jhumka</em>.
        </p>

        {/* Quick Highlights Pills */}
        <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-[#2C2621]">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFFDF9]/85 border border-[#C5A059]/30 shadow-sm font-medium">
            <MapPin className="w-4 h-4 text-[#B88E36]" />
            <span>5 KM from Amber Fort</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFFDF9]/85 border border-[#C5A059]/30 shadow-sm font-medium">
            <MapPin className="w-4 h-4 text-[#B88E36]" />
            <span>100m from Taj Amber</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFFDF9]/85 border border-[#C5A059]/30 shadow-sm font-medium">
            <MapPin className="w-4 h-4 text-[#B88E36]" />
            <span>50m from Zoological Park</span>
          </div>
        </div>
      </div>

      {/* Floating Light Luxury Availability Bar */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 w-full mt-12">
        <form
          onSubmit={handleSearchSubmit}
          className="bg-[#FFFDF9]/95 backdrop-blur-md p-5 sm:p-7 rounded-2xl sm:rounded-3xl shadow-xl border border-[#C5A059]/35 grid grid-cols-1 md:grid-cols-4 gap-4 items-end"
        >
          {/* Check-In */}
          <div className="flex flex-col gap-1.5 text-left">
            <label className="text-[11px] uppercase tracking-wider text-[#7A6E63] font-bold flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#B88E36]" />
              Check-In Date
            </label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full bg-[#F8F3EA] border border-[#C5A059]/25 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-[#1C1815] font-medium focus:outline-none focus:border-[#B88E36]"
            />
          </div>

          {/* Check-Out */}
          <div className="flex flex-col gap-1.5 text-left">
            <label className="text-[11px] uppercase tracking-wider text-[#7A6E63] font-bold flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#B88E36]" />
              Check-Out Date
            </label>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full bg-[#F8F3EA] border border-[#C5A059]/25 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-[#1C1815] font-medium focus:outline-none focus:border-[#B88E36]"
            />
          </div>

          {/* Guests & Category */}
          <div className="flex flex-col gap-1.5 text-left">
            <label className="text-[11px] uppercase tracking-wider text-[#7A6E63] font-bold flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-[#B88E36]" />
              Experience Category
            </label>
            <select
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              className="w-full bg-[#F8F3EA] border border-[#C5A059]/25 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-[#1C1815] font-medium focus:outline-none focus:border-[#B88E36] cursor-pointer"
            >
              <option value="Luxury Stay">Luxury Stay (Rooms)</option>
              <option value="Executive Room">Executive Room</option>
              <option value="Suite Room">Suite Room</option>
              <option value="Haldi Restaurant">Haldi Indoor Dining</option>
              <option value="Jhumka Rooftop Pool">Jhumka Rooftop & Pool</option>
              <option value="Banquet & Event">Banquet & Celebrations</option>
            </select>
          </div>

          {/* Search CTA */}
          <div>
            <button
              type="submit"
              className="w-full h-11 flex items-center justify-center gap-2 rounded-xl bg-[#1C1815] text-[#FDFBF7] font-bold text-xs sm:text-sm tracking-wider uppercase shadow-md hover:bg-[#B88E36] hover:text-white transition-all transform hover:-translate-y-0.5"
            >
              <Search className="w-4 h-4 text-[#C5A059]" />
              Check Availability
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
