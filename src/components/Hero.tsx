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
    <section className="relative min-h-screen flex flex-col justify-between pt-28 pb-16 overflow-hidden bg-[#FDFBF7]">
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
          {/* Soft elegant warm light luxury scrims */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#FDFBF7] via-black/40 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FFFDF9]/80 via-transparent to-[#FDFBF7]" />
        </div>
      ))}

      {/* Main Hero Banner Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto text-center flex flex-col items-center">
        {/* Location Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFFDF9]/95 backdrop-blur-md border border-[#C5A059]/40 text-[#1C1815] text-xs font-bold uppercase tracking-widest mb-6 shadow-md">
          <Sparkles className="w-4 h-4 text-[#B88E36]" />
          <span>The TASEY Hotel, Amer</span>
          <span className="text-[#C5A059]">•</span>
          <span className="text-[#9E7B32]">5 KM from Amber Fort</span>
        </div>

        {/* Hero Dynamic Subtitle & Title */}
        <p className="text-xs sm:text-sm uppercase tracking-[0.3em] font-semibold text-amber-200 mb-3 drop-shadow-md">
          {heroSlides[currentSlide].subtitle}
        </p>

        <h1 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white max-w-5xl leading-[1.1] drop-shadow-lg">
          {heroSlides[currentSlide].title}
        </h1>

        <p className="mt-6 text-sm sm:text-lg text-gray-100 max-w-3xl font-normal leading-relaxed drop-shadow-md">
          Welcome to <strong className="text-white font-bold">The TASEY Hotel</strong> — your gateway to royal luxury rooms, authentic dining at <em className="font-serif text-amber-300 font-semibold">Haldi</em>, rooftop poolside views at <em className="font-serif text-amber-300 font-semibold">Jhumka</em>, and curated <span className="text-amber-200 font-semibold underline decoration-[#C5A059]">Elephant & Wildlife Safaris</span>.
        </p>

        {/* Location Badges & Highlights */}
        <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4 text-xs text-[#1C1815]">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFFDF9]/90 backdrop-blur-md border border-[#C5A059]/35 shadow-md font-semibold">
            <MapPin className="w-4 h-4 text-[#B88E36]" />
            <span>5 KM from Amber Fort</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFFDF9]/90 backdrop-blur-md border border-[#C5A059]/35 shadow-md font-semibold">
            <Compass className="w-4 h-4 text-[#B88E36]" />
            <span>50m from Zoological Park</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFFDF9]/90 backdrop-blur-md border border-[#C5A059]/35 shadow-md font-semibold">
            <Sparkles className="w-4 h-4 text-[#B88E36]" />
            <span>Elephant Village & Safaris</span>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="mt-8 flex items-center gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === currentSlide ? "w-8 bg-[#C5A059]" : "w-2 bg-white/40 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Floating Light Luxury Availability Bar */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 w-full mt-10">
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
              className="w-full bg-[#F8F3EA] border border-[#C5A059]/30 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-[#1C1815] font-semibold focus:outline-none focus:border-[#B88E36]"
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
              className="w-full bg-[#F8F3EA] border border-[#C5A059]/30 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-[#1C1815] font-semibold focus:outline-none focus:border-[#B88E36]"
            />
          </div>

          {/* Category */}
          <div className="flex flex-col gap-1.5 text-left">
            <label className="text-[11px] uppercase tracking-wider text-[#7A6E63] font-bold flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-[#B88E36]" />
              Select Experience
            </label>
            <select
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              className="w-full bg-[#F8F3EA] border border-[#C5A059]/30 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-[#1C1815] font-semibold focus:outline-none focus:border-[#B88E36] cursor-pointer"
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


