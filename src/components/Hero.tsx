"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Calendar as CalendarIcon,
  Users,
  Sparkles,
  MapPin,
  Search,
  Compass,
  Moon,
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
  Check,
  ShieldCheck,
  Crown
} from "lucide-react";

interface HeroProps {
  onOpenBooking: (details?: { category?: string; checkIn?: string; checkOut?: string; guests?: string }) => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  // Booking state
  const [checkIn, setCheckIn] = useState("2026-09-20");
  const [checkOut, setCheckOut] = useState("2026-09-22");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [experience, setExperience] = useState("Luxury Stay");

  // Popover controls
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [guestsOpen, setGuestsOpen] = useState(false);
  const [selectingTarget, setSelectingTarget] = useState<"in" | "out">("in");

  // Calendar month state (defaults to Sep 2026 for demonstration, easily navigable)
  const [calYear, setCalYear] = useState(2026);
  const [calMonth, setCalMonth] = useState(8); // 8 is September (0-indexed)

  const bookingBarRef = useRef<HTMLDivElement>(null);

  // Close popovers on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (bookingBarRef.current && !bookingBarRef.current.contains(event.target as Node)) {
        setCalendarOpen(false);
        setGuestsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const heroSlides = [
    {
      image: "/images/tasey-08.jpeg",
      subtitle: "Boutique Sanctuary in Amer, Jaipur",
      title: "Where Royal Heritage Meets Aravalli Serenity",
    },
    {
      image: "/images/tasey-09.jpeg",
      subtitle: "Rooftop Pool & Gastronomy",
      title: "Romantic Sunset Dining at Jhumka Rooftop",
    },
    {
      image: "/images/tasey-17.jpeg",
      subtitle: "Luxurious Rooms & Suites",
      title: "Experience Rajasthan in Pure Luxury",
    },
    {
      image: "/images/tasey-03.jpeg",
      subtitle: "Steps Away from Amer Fort",
      title: "Welcome to The TASEY Hotel, Amer",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  // Date utilities
  const parseDate = (dateStr: string) => {
    const [y, m, d] = dateStr.split("-").map(Number);
    return new Date(y, m - 1, d);
  };

  const formatDateStr = (year: number, month: number, day: number) => {
    const mm = String(month + 1).padStart(2, "0");
    const dd = String(day).padStart(2, "0");
    return `${year}-${mm}-${dd}`;
  };

  const inDateObj = parseDate(checkIn);
  const outDateObj = parseDate(checkOut);

  const calculateNights = () => {
    const diff = Math.round((outDateObj.getTime() - inDateObj.getTime()) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff : 1;
  };

  const nightsCount = calculateNights();

  // Calendar days generator
  const daysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

  const handleDateClick = (day: number) => {
    const clickedStr = formatDateStr(calYear, calMonth, day);
    const clickedDate = new Date(calYear, calMonth, day);

    if (selectingTarget === "in") {
      setCheckIn(clickedStr);
      // If checkout is before or equal to new checkin, push checkout by 1 day
      if (clickedDate >= outDateObj) {
        const nextDay = new Date(clickedDate);
        nextDay.setDate(clickedDate.getDate() + 1);
        setCheckOut(formatDateStr(nextDay.getFullYear(), nextDay.getMonth(), nextDay.getDate()));
      }
      setSelectingTarget("out");
    } else {
      if (clickedDate <= inDateObj) {
        // Reset checkin if clicked date is earlier than checkin
        setCheckIn(clickedStr);
        const nextDay = new Date(clickedDate);
        nextDay.setDate(clickedDate.getDate() + 1);
        setCheckOut(formatDateStr(nextDay.getFullYear(), nextDay.getMonth(), nextDay.getDate()));
      } else {
        setCheckOut(clickedStr);
        setCalendarOpen(false);
      }
    }
  };

  const handleQuickDuration = (nights: number) => {
    const newOut = new Date(inDateObj);
    newOut.setDate(inDateObj.getDate() + nights);
    setCheckOut(formatDateStr(newOut.getFullYear(), newOut.getMonth(), newOut.getDate()));
    setCalendarOpen(false);
  };

  const guestsSummary = `${adults} ${adults === 1 ? "Adult" : "Adults"}${
    children > 0 ? `, ${children} ${children === 1 ? "Child" : "Children"}` : ""
  }, ${rooms} ${rooms === 1 ? "Room" : "Rooms"}`;

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenBooking({
      category: experience,
      checkIn,
      checkOut,
      guests: guestsSummary,
    });
  };

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

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

        <p className="mt-5 text-sm sm:text-base md:text-lg text-gray-100 max-w-2xl font-normal leading-relaxed drop-shadow-md">
          A boutique sanctuary nestled at the foot of the Aravalli hills in Amer, Jaipur. Featuring luxury suites, authentic dining at Haldi, and sunset pool views at Jhumka Rooftop.
        </p>

        {/* Location Credentials */}
        <div className="mt-7 flex flex-wrap justify-center gap-2.5 sm:gap-4 text-xs text-[#1C1815]">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFDF9]/90 backdrop-blur-md border border-[#C5A059]/35 shadow-sm font-medium">
            <MapPin className="w-3.5 h-3.5 text-[#8C6310]" />
            <span>5 KM from Amber Fort</span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFDF9]/90 backdrop-blur-md border border-[#C5A059]/35 shadow-sm font-medium">
            <Compass className="w-3.5 h-3.5 text-[#8C6310]" />
            <span>Facing Nahargarh Park</span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFDF9]/90 backdrop-blur-md border border-[#C5A059]/35 shadow-sm font-medium">
            <Sparkles className="w-3.5 h-3.5 text-[#8C6310]" />
            <span>Rooftop Pool & Panoramas</span>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="mt-7 flex items-center gap-2">
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

      {/* Bespoke Luxury Booking & Availability Engine */}
      <div ref={bookingBarRef} className="relative z-30 max-w-5xl mx-auto px-4 sm:px-6 w-full mt-8">
        {/* Experience Selector Tabs */}
        <div className="flex justify-center sm:justify-start gap-1.5 mb-2 px-2 overflow-x-auto pb-1">
          {[
            { id: "Luxury Stay", label: "Rooms & Suites", icon: Crown },
            { id: "Nahargarh Lion Safari", label: "Wildlife Safaris", icon: Compass },
            { id: "Elephant Village Excursion", label: "Elephant Village", icon: Sparkles },
            { id: "Haldi Restaurant", label: "Dining & Rooftop", icon: Sparkles },
          ].map((tab) => {
            const Icon = tab.icon;
            const active = experience === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setExperience(tab.id)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-t-xl text-xs font-bold tracking-wider uppercase transition-all duration-200 whitespace-nowrap ${
                  active
                    ? "bg-[#FFFDF9] text-[#8C6310] border-t-2 border-x border-[#C5A059] shadow-sm -mb-px z-10"
                    : "bg-[#F8F3EA]/90 text-[#7A6E63] hover:text-[#1C1815] border-t border-x border-[#C5A059]/30"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${active ? "text-[#C5A059]" : "text-[#7A6E63]"}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Main Floating Booking Card */}
        <form
          onSubmit={handleSearchSubmit}
          className="bg-[#FFFDF9] backdrop-blur-xl p-4 sm:p-5 rounded-2xl sm:rounded-3xl shadow-xl border border-[#C5A059]/40 relative"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 items-stretch">
            
            {/* 1. Check-In Dedicated Tile */}
            <div className="lg:col-span-3">
              <button
                type="button"
                onClick={() => {
                  setSelectingTarget("in");
                  setCalendarOpen(!calendarOpen);
                  setGuestsOpen(false);
                }}
                className={`w-full h-full flex flex-col text-left p-3.5 rounded-xl border border-[#C5A059]/30 bg-[#F8F3EA]/60 transition-all ${
                  calendarOpen && selectingTarget === "in"
                    ? "bg-[#FFFDF9] ring-2 ring-[#C5A059] shadow-sm"
                    : "hover:bg-[#FFFDF9]"
                }`}
              >
                <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] uppercase tracking-wider text-[#8C6310] font-bold mb-1">
                  <CalendarIcon className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Check-In</span>
                </div>
                <div className="mt-auto flex items-baseline gap-2">
                  <span className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#1C1815]">
                    {inDateObj.getDate()}
                  </span>
                  <div className="flex flex-col text-xs leading-tight text-[#5C5046]">
                    <span className="font-semibold">{monthNames[inDateObj.getMonth()].slice(0, 3)} {inDateObj.getFullYear()}</span>
                    <span className="text-[11px] text-[#8C6310] font-medium">
                      {inDateObj.toLocaleDateString("en-US", { weekday: "short" })}
                    </span>
                  </div>
                </div>
              </button>
            </div>

            {/* 2. Check-Out Dedicated Tile (With Duration Pill In Header - Never Overlaps!) */}
            <div className="lg:col-span-3">
              <button
                type="button"
                onClick={() => {
                  setSelectingTarget("out");
                  setCalendarOpen(!calendarOpen);
                  setGuestsOpen(false);
                }}
                className={`w-full h-full flex flex-col text-left p-3.5 rounded-xl border border-[#C5A059]/30 bg-[#F8F3EA]/60 transition-all ${
                  calendarOpen && selectingTarget === "out"
                    ? "bg-[#FFFDF9] ring-2 ring-[#C5A059] shadow-sm"
                    : "hover:bg-[#FFFDF9]"
                }`}
              >
                <div className="flex items-center justify-between text-[10px] sm:text-[11px] uppercase tracking-wider text-[#8C6310] font-bold mb-1">
                  <div className="flex items-center gap-1.5">
                    <CalendarIcon className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Check-Out</span>
                  </div>
                  <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#FFFDF9] border border-[#C5A059]/40 text-[10px] font-bold text-[#8C6310] shadow-xs">
                    <Moon className="w-2.5 h-2.5 text-[#C5A059]" />
                    <span>{nightsCount} {nightsCount === 1 ? "Night" : "Nights"}</span>
                  </span>
                </div>
                <div className="mt-auto flex items-baseline gap-2">
                  <span className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#1C1815]">
                    {outDateObj.getDate()}
                  </span>
                  <div className="flex flex-col text-xs leading-tight text-[#5C5046]">
                    <span className="font-semibold">{monthNames[outDateObj.getMonth()].slice(0, 3)} {outDateObj.getFullYear()}</span>
                    <span className="text-[11px] text-[#8C6310] font-medium">
                      {outDateObj.toLocaleDateString("en-US", { weekday: "short" })}
                    </span>
                  </div>
                </div>
              </button>
            </div>

            {/* 3. Guests & Rooms Dedicated Tile */}
            <div className="lg:col-span-3">
              <button
                type="button"
                onClick={() => {
                  setGuestsOpen(!guestsOpen);
                  setCalendarOpen(false);
                }}
                className={`w-full h-full flex flex-col text-left p-3.5 rounded-xl border border-[#C5A059]/30 bg-[#F8F3EA]/60 transition-all ${
                  guestsOpen ? "bg-[#FFFDF9] ring-2 ring-[#C5A059] shadow-sm" : "hover:bg-[#FFFDF9]"
                }`}
              >
                <div className="flex items-center justify-between text-[10px] sm:text-[11px] uppercase tracking-wider text-[#8C6310] font-bold mb-1">
                  <div className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Guests & Rooms</span>
                  </div>
                </div>
                <div className="mt-auto">
                  <div className="font-serif-luxury text-lg sm:text-xl font-bold text-[#1C1815] truncate">
                    {adults} {adults === 1 ? "Adult" : "Adults"}{children > 0 ? `, ${children} Ch` : ""}
                  </div>
                  <div className="text-xs text-[#5C5046] font-medium mt-0.5">
                    {rooms} {rooms === 1 ? "Room" : "Rooms"} • Standard / Suite
                  </div>
                </div>
              </button>
            </div>

            {/* 4. Search Availability Button */}
            <div className="lg:col-span-3 flex">
              <button
                type="submit"
                className="w-full min-h-[64px] sm:min-h-[72px] flex flex-col items-center justify-center gap-1 rounded-xl bg-gradient-to-r from-[#1C1815] to-[#2C2621] hover:from-[#8C6310] hover:to-[#C5A059] text-[#FFFDF9] font-bold text-xs sm:text-sm tracking-wider uppercase shadow-md transition-all group border border-[#C5A059]/40 active:scale-[0.98]"
              >
                <div className="flex items-center gap-2">
                  <Search className="w-4 h-4 text-[#C5A059] group-hover:text-white transition-colors" />
                  <span className="tracking-wider">Check Rates</span>
                </div>
                <span className="text-[10px] font-normal tracking-wide text-amber-200/90 lowercase group-hover:text-white/90">
                  direct best price guarantee
                </span>
              </button>
            </div>
          </div>

          {/* Direct Booking Trust Guarantees */}
          <div className="mt-3.5 pt-3 border-t border-[#C5A059]/20 flex flex-wrap items-center justify-between gap-3 text-[11px] text-[#7A6E63]">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 font-medium text-[#1C1815]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
                Best Direct Rate Guarantee
              </span>
              <span className="hidden sm:inline text-[#C5A059]/40">•</span>
              <span className="hidden sm:flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                Welcome High Tea
              </span>
              <span className="hidden md:inline text-[#C5A059]/40">•</span>
              <span className="hidden md:flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-[#C5A059]" />
                Concierge Safari Permits
              </span>
            </div>
            <span className="font-semibold text-[#8C6310]">Amer, Jaipur • Free Cancellation Options</span>
          </div>

          {/* Bespoke Interactive Calendar Popover */}
          {calendarOpen && (
            <div className="absolute top-[102%] left-4 right-4 sm:left-6 sm:right-auto sm:w-[380px] bg-[#FFFDF9] rounded-2xl border border-[#C5A059]/50 shadow-2xl p-4 z-50 animate-in fade-in zoom-in-95 duration-200">
              {/* Header */}
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#E5DCCB]">
                <div className="flex flex-col text-left">
                  <span className="text-[10px] uppercase font-bold text-[#8C6310] tracking-wider">
                    Select {selectingTarget === "in" ? "Check-In" : "Check-Out"} Date
                  </span>
                  <span className="font-serif-luxury text-base font-bold text-[#1C1815]">
                    {monthNames[calMonth]} {calYear}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => {
                      if (calMonth === 0) {
                        setCalMonth(11);
                        setCalYear(calYear - 1);
                      } else {
                        setCalMonth(calMonth - 1);
                      }
                    }}
                    className="p-1.5 rounded-lg hover:bg-[#F8F3EA] text-[#1C1815]"
                    aria-label="Previous Month"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      if (calMonth === 11) {
                        setCalMonth(0);
                        setCalYear(calYear + 1);
                      } else {
                        setCalMonth(calMonth + 1);
                      }
                    }}
                    className="p-1.5 rounded-lg hover:bg-[#F8F3EA] text-[#1C1815]"
                    aria-label="Next Month"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Quick Duration Shortcuts */}
              <div className="flex items-center gap-1.5 mb-3 overflow-x-auto pb-1">
                {[
                  { label: "1 Night", nights: 1 },
                  { label: "2 Nights", nights: 2 },
                  { label: "3 Nights", nights: 3 },
                  { label: "Weekend", nights: 2 },
                ].map((sc) => (
                  <button
                    key={sc.label}
                    type="button"
                    onClick={() => handleQuickDuration(sc.nights)}
                    className="px-2.5 py-1 rounded-full bg-[#F8F3EA] hover:bg-[#EBDDC5] text-[#8C6310] text-[11px] font-bold transition-colors whitespace-nowrap"
                  >
                    {sc.label}
                  </button>
                ))}
              </div>

              {/* Calendar Days of Week */}
              <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-bold text-[#7A6E63] uppercase mb-1">
                <span>Su</span>
                <span>Mo</span>
                <span>Tu</span>
                <span>We</span>
                <span>Th</span>
                <span>Fr</span>
                <span>Sa</span>
              </div>

              {/* Days Grid */}
              <div className="grid grid-cols-7 gap-1 text-xs">
                {/* Empty leading padding */}
                {Array.from({ length: firstDayOfMonth(calYear, calMonth) }).map((_, idx) => (
                  <div key={`empty-${idx}`} className="h-8" />
                ))}

                {/* Month Days */}
                {Array.from({ length: daysInMonth(calYear, calMonth) }).map((_, idx) => {
                  const dayNum = idx + 1;
                  const dayDateStr = formatDateStr(calYear, calMonth, dayNum);
                  const isCheckIn = dayDateStr === checkIn;
                  const isCheckOut = dayDateStr === checkOut;
                  const isInRange = dayDateStr > checkIn && dayDateStr < checkOut;

                  return (
                    <button
                      key={dayNum}
                      type="button"
                      onClick={() => handleDateClick(dayNum)}
                      className={`h-8 rounded-lg flex items-center justify-center font-semibold transition-all ${
                        isCheckIn || isCheckOut
                          ? "bg-[#C5A059] text-white shadow-md font-bold scale-105"
                          : isInRange
                          ? "bg-[#C5A059]/15 text-[#8C6310] rounded-none"
                          : "text-[#1C1815] hover:bg-[#F8F3EA]"
                      }`}
                    >
                      {dayNum}
                    </button>
                  );
                })}
              </div>

              {/* Footer */}
              <div className="mt-3 pt-2 border-t border-[#E5DCCB] flex justify-between items-center text-xs">
                <span className="text-[#8C6310] font-semibold">
                  {nightsCount} {nightsCount === 1 ? "Night Stay" : "Nights Stay"}
                </span>
                <button
                  type="button"
                  onClick={() => setCalendarOpen(false)}
                  className="px-3 py-1 rounded-lg bg-[#1C1815] text-white text-[11px] font-bold hover:bg-[#8C6310] transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          )}

          {/* Bespoke Guests & Rooms Popover */}
          {guestsOpen && (
            <div className="absolute top-[102%] left-4 right-4 sm:left-auto sm:right-6 sm:w-[320px] bg-[#FFFDF9] rounded-2xl border border-[#C5A059]/50 shadow-2xl p-4 z-50 animate-in fade-in zoom-in-95 duration-200">
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#E5DCCB]">
                <span className="font-serif-luxury text-base font-bold text-[#1C1815]">
                  Guests & Rooms
                </span>
                <span className="text-[11px] font-bold text-[#8C6310]">Max 6 Guests</span>
              </div>

              {/* Adults Counter */}
              <div className="flex items-center justify-between py-2 border-b border-[#F8F3EA]">
                <div>
                  <div className="text-xs font-bold text-[#1C1815]">Adults</div>
                  <div className="text-[11px] text-[#7A6E63]">Age 12+ years</div>
                </div>
                <div className="flex items-center gap-2.5">
                  <button
                    type="button"
                    disabled={adults <= 1}
                    onClick={() => setAdults(Math.max(1, adults - 1))}
                    className="w-7 h-7 rounded-full bg-[#F8F3EA] border border-[#C5A059]/40 flex items-center justify-center text-[#1C1815] disabled:opacity-30 hover:bg-[#EBDDC5]"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="font-bold text-sm text-[#1C1815] w-4 text-center">{adults}</span>
                  <button
                    type="button"
                    disabled={adults >= 8}
                    onClick={() => setAdults(adults + 1)}
                    className="w-7 h-7 rounded-full bg-[#F8F3EA] border border-[#C5A059]/40 flex items-center justify-center text-[#1C1815] hover:bg-[#EBDDC5]"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Children Counter */}
              <div className="flex items-center justify-between py-2 border-b border-[#F8F3EA]">
                <div>
                  <div className="text-xs font-bold text-[#1C1815]">Children</div>
                  <div className="text-[11px] text-[#7A6E63]">Age 0-11 years</div>
                </div>
                <div className="flex items-center gap-2.5">
                  <button
                    type="button"
                    disabled={children <= 0}
                    onClick={() => setChildren(Math.max(0, children - 1))}
                    className="w-7 h-7 rounded-full bg-[#F8F3EA] border border-[#C5A059]/40 flex items-center justify-center text-[#1C1815] disabled:opacity-30 hover:bg-[#EBDDC5]"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="font-bold text-sm text-[#1C1815] w-4 text-center">{children}</span>
                  <button
                    type="button"
                    disabled={children >= 4}
                    onClick={() => setChildren(children + 1)}
                    className="w-7 h-7 rounded-full bg-[#F8F3EA] border border-[#C5A059]/40 flex items-center justify-center text-[#1C1815] hover:bg-[#EBDDC5]"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Rooms Counter */}
              <div className="flex items-center justify-between py-2 border-b border-[#F8F3EA]">
                <div>
                  <div className="text-xs font-bold text-[#1C1815]">Rooms</div>
                  <div className="text-[11px] text-[#7A6E63]">Standard / Suite</div>
                </div>
                <div className="flex items-center gap-2.5">
                  <button
                    type="button"
                    disabled={rooms <= 1}
                    onClick={() => setRooms(Math.max(1, rooms - 1))}
                    className="w-7 h-7 rounded-full bg-[#F8F3EA] border border-[#C5A059]/40 flex items-center justify-center text-[#1C1815] disabled:opacity-30 hover:bg-[#EBDDC5]"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="font-bold text-sm text-[#1C1815] w-4 text-center">{rooms}</span>
                  <button
                    type="button"
                    disabled={rooms >= 4}
                    onClick={() => setRooms(rooms + 1)}
                    className="w-7 h-7 rounded-full bg-[#F8F3EA] border border-[#C5A059]/40 flex items-center justify-center text-[#1C1815] hover:bg-[#EBDDC5]"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="mt-3 flex justify-end">
                <button
                  type="button"
                  onClick={() => setGuestsOpen(false)}
                  className="px-4 py-1.5 rounded-lg bg-[#1C1815] text-white text-xs font-bold hover:bg-[#8C6310] transition-colors"
                >
                  Apply
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
