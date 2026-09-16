"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Calendar, Users, Sparkles, MapPin, Search, ChevronRight, Compass } from "lucide-react";

interface HeroProps {
  onOpenBooking: (details?: { category?: string; checkIn?: string; checkOut?: string; guests?: string }) => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  const [checkIn, setCheckIn] = useState("2026-09-20");
  const [checkOut, setCheckOut] = useState("2026-09-22");
  const [guests, setGuests] = useState("2 Guests, 1 Room");
  const [experience, setExperience] = useState("Luxury Stay");

  const heroSlides = [
    {
      image: "/images/tasey-01.jpeg",
      subtitle: "Boutique Sanctuary in Amer, Jaipur",
      title: "Where Royal Heritage Meets Aravalli Serenity",
    },
    {
      image: "/images/tasey-02.jpeg",
      subtitle: "Wildlife & Nature Excursions",
      title: "Elephant Village & Leopard Safari Adventures",
    },
    {
      image: "/images/tasey-03.jpeg",
      subtitle: "Rooftop Pool & Gastronomy",
      title: "Romantic Sunset Dining at Jhumka Rooftop",
    },
    {
      image: "/images/tasey-04.jpeg",
      subtitle: "Steps Away from Amer Fort",
      title: "Experience Rajasthan in Pure Luxury",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

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
    <section className="relative min-h-screen flex flex-col justify-between pt-28 pb-16 overflow-hidden bg-[#070A12]">
      {/* Background Slideshow */}
      {heroSlides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? "opacity-100 scale-105" : "opacity-0 scale-100"
          } transition-transform duration-[7000ms]`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={idx === 0}
            className="object-cover object-center"
          />
          {/* Obsidian dark luxury scrims */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#070A12] via-[#070A12]/60 to-[#070A12]/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070A12]/80 via-transparent to-[#070A12]/80" />
        </div>
      ))}

      {/* Main Hero Banner Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto text-center flex flex-col items-center">
        {/* Location Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0F172A]/80 backdrop-blur-md border border-[#D4AF37]/40 text-[#E5C365] text-xs font-bold uppercase tracking-widest mb-6 shadow-xl animate-fade-in">
          <Sparkles className="w-4 h-4 text-[#D4AF37]" />
          <span>The TASEY Hotel, Amer</span>
          <span className="text-[#D4AF37]">•</span>
          <span className="text-gray-300">5 KM from Amber Fort</span>
        </div>

        {/* Hero Dynamic Subtitle & Title */}
        <p className="text-xs sm:text-sm uppercase tracking-[0.3em] font-semibold text-[#D4AF37] mb-3">
          {heroSlides[currentSlide].subtitle}
        </p>

        <h1 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white max-w-5xl leading-[1.1] drop-shadow-lg">
          {heroSlides[currentSlide].title}
        </h1>

        <p className="mt-6 text-sm sm:text-lg text-gray-300 max-w-3xl font-light leading-relaxed">
          Welcome to <strong className="text-white font-semibold">The TASEY Hotel</strong> — your gateway to royal luxury rooms, authentic dining at <em className="font-serif text-[#D4AF37]">Haldi</em>, rooftop poolside views at <em className="font-serif text-[#D4AF37]">Jhumka</em>, and curated <span className="text-[#E5C365] font-normal underline decoration-[#D4AF37]/40">Elephant & Wildlife Safaris</span>.
        </p>

        {/* Location Badges & Highlights */}
        <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4 text-xs text-gray-200">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0F172A]/70 backdrop-blur-md border border-[#D4AF37]/25 shadow-md">
            <MapPin className="w-4 h-4 text-[#D4AF37]" />
            <span>5 KM from Amber Fort</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0F172A]/70 backdrop-blur-md border border-[#D4AF37]/25 shadow-md">
            <Compass className="w-4 h-4 text-[#D4AF37]" />
            <span>50m from Nahargarh Zoological Park</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0F172A]/70 backdrop-blur-md border border-[#D4AF37]/25 shadow-md">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span>Elephant Village & Safari Assistance</span>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="mt-8 flex items-center gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === currentSlide ? "w-8 bg-[#D4AF37]" : "w-2 bg-white/30 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Floating Dark Luxury Availability Bar */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 w-full mt-10">
        <form
          onSubmit={handleSearchSubmit}
          className="glass-panel-dark p-5 sm:p-7 rounded-2xl sm:rounded-3xl shadow-2xl border border-[#D4AF37]/35 grid grid-cols-1 md:grid-cols-4 gap-4 items-end"
        >
          {/* Check-In */}
          <div className="flex flex-col gap-1.5 text-left">
            <label className="text-[11px] uppercase tracking-wider text-[#E5C365] font-bold flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
              Check-In Date
            </label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full bg-[#070A12]/90 border border-[#D4AF37]/30 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-white font-medium focus:outline-none focus:border-[#D4AF37]"
            />
          </div>

          {/* Check-Out */}
          <div className="flex flex-col gap-1.5 text-left">
            <label className="text-[11px] uppercase tracking-wider text-[#E5C365] font-bold flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
              Check-Out Date
            </label>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full bg-[#070A12]/90 border border-[#D4AF37]/30 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-white font-medium focus:outline-none focus:border-[#D4AF37]"
            />
          </div>

          {/* Category */}
          <div className="flex flex-col gap-1.5 text-left">
            <label className="text-[11px] uppercase tracking-wider text-[#E5C365] font-bold flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-[#D4AF37]" />
              Select Experience
            </label>
            <select
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              className="w-full bg-[#070A12]/90 border border-[#D4AF37]/30 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-white font-medium focus:outline-none focus:border-[#D4AF37] cursor-pointer"
            >
              <option value="Luxury Stay">Luxury Stay (Rooms & Suites)</option>
              <option value="Elephant Village Excursion">Elephant Village Interaction</option>
              <option value="Jhalana Leopard Safari">Jhalana Leopard Safari</option>
              <option value="Nahargarh Lion Safari">Nahargarh Lion Safari</option>
              <option value="Haldi Restaurant">Haldi Indoor Dining</option>
              <option value="Jhumka Rooftop Pool">Jhumka Rooftop Pool</option>
            </select>
          </div>

          {/* Search CTA */}
          <div>
            <button
              type="submit"
              className="w-full h-11 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B38F24] text-black font-bold text-xs sm:text-sm tracking-wider uppercase shadow-xl hover:shadow-[#D4AF37]/30 hover:scale-102 transition-all"
            >
              <Search className="w-4 h-4 text-black" />
              Check Availability
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

