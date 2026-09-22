"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Calendar as CalendarIcon,
  Users,
  Search,
  Compass,
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
  Crown,
  UtensilsCrossed,
  PawPrint,
} from "lucide-react";
import { isoDaysFromToday } from "@/lib/whatsapp";

interface HeroProps {
  onOpenBooking: (details?: { category?: string; checkIn?: string; checkOut?: string; guests?: string }) => void;
}

/** Placeholder dates for the prerendered HTML only — see the mount effect in Hero. */
const SEED_CHECK_IN = "2026-09-20";
const SEED_CHECK_OUT = "2026-09-22";

export default function Hero({ onOpenBooking }: HeroProps) {
  // Booking state.
  //
  // These seeds only ever reach the prerendered HTML. The page is statically
  // built, so deriving "today" during render would bake the build date into the
  // markup and disagree with the browser's clock on every later visit, which
  // breaks hydration. The mount effect below swaps in real dates instead.
  const [checkIn, setCheckIn] = useState(SEED_CHECK_IN);
  const [checkOut, setCheckOut] = useState(SEED_CHECK_OUT);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [experience, setExperience] = useState("Executive Room");

  // Popover controls
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [guestsOpen, setGuestsOpen] = useState(false);
  const [selectingTarget, setSelectingTarget] = useState<"in" | "out">("in");

  // Calendar month state, moved onto the real check-in month once mounted.
  const [calYear, setCalYear] = useState(2026);
  const [calMonth, setCalMonth] = useState(8); // 8 is September (0-indexed)

  const bookingBarRef = useRef<HTMLDivElement>(null);

  // Runs once after hydration, where the visitor's actual date is safe to read.
  // The client clock is an external system, so seeding from it here is the
  // hydration-safe option: deriving it during render would bake the build date
  // into the prerendered HTML.
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    const nextIn = isoDaysFromToday(1);
    const nextOut = isoDaysFromToday(3);
    setCheckIn(nextIn);
    setCheckOut(nextOut);
    const [y, m] = nextIn.split("-").map(Number);
    setCalYear(y);
    setCalMonth(m - 1);
  }, []);
  /* eslint-enable react-hooks/set-state-in-effect */

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
      subtitle: "The Tasey Hotel in Amer, Jaipur",
      title: "A hotel near Amber Fort",
    },
    {
      image: "/images/tasey-09.jpeg",
      subtitle: "Jhumka rooftop pool",
      title: "Rooftop pool at Jhumka",
    },
    {
      image: "/images/tasey-17.jpeg",
      subtitle: "Rooms and suites",
      title: "Rooms with hill-facing windows",
    },
    {
      image: "/images/tasey-03.jpeg",
      subtitle: "Steps from Amber Fort",
      title: "Welcome to The Tasey Hotel, Amer",
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
    <section className="relative min-h-screen flex flex-col justify-between pt-24 pb-6 sm:pt-28 sm:pb-16 bg-[#FDFBF7]">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {heroSlides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              sizes="100vw"
              priority={idx === 0}
              className="object-cover object-center"
            />
            {/* Navy scrim keeps the headline and booking bar legible. */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#011A51]/10 via-[#011A51]/45 to-[#011A51]/75 sm:from-[#011A51]/15 sm:via-[#011A51]/55 sm:to-[#011A51]/85" />
          </div>
        ))}
      </div>

      {/* Main Hero Banner Content */}
      <div className="relative z-10 max-w-3xl mx-4 sm:mx-auto px-2 sm:px-6 my-auto">
        <p className="text-[14px] font-medium text-white/80 mb-3">
          {heroSlides[currentSlide].subtitle}
        </p>

        <h1 className="font-serif-luxury text-[28px] sm:text-[40px] lg:text-[56px] text-white max-w-2xl leading-[1.15]">
          {heroSlides[currentSlide].title}
        </h1>

        <p className="mt-4 text-[16px] leading-[1.6] text-gray-100 max-w-md">
          Rooms, an indoor restaurant, a rooftop pool, and event halls, 5 km from Amber Fort.
        </p>

        {/* Slide Indicators */}
        <div className="mt-6 flex items-center gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 rounded transition-all duration-300 ${
                i === currentSlide ? "w-8 bg-[#A95A01]" : "w-2 bg-white/40 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Booking and availability */}
      <div ref={bookingBarRef} className="relative z-30 max-w-5xl mx-auto px-3 sm:px-6 w-full mt-4 sm:mt-8">
        {/* Experience Selector Tabs */}
        <div className="grid grid-cols-4 sm:flex sm:flex-nowrap justify-start gap-1.5 sm:gap-1.5 mb-2 sm:mb-2 px-0 sm:px-2">
          {[
            { id: "Executive Room", label: "Rooms and suites", shortLabel: "Rooms", icon: Crown, sectionId: "rooms" },
            { id: "Nahargarh Lion Safari", label: "Wildlife safaris", shortLabel: "Safaris", icon: Compass, sectionId: "nahargarh-lion-safari" },
            { id: "Elephant Village Excursion", label: "Elephant Village", shortLabel: "Elephants", icon: PawPrint, sectionId: "elephant-village" },
            { id: "Haldi Restaurant", label: "Dining and rooftop", shortLabel: "Dining", icon: UtensilsCrossed, sectionId: "dining" },
          ].map((tab) => {
            const Icon = tab.icon;
            const active = experience === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  setExperience(tab.id);
                  document.getElementById(tab.sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className={`flex items-center justify-center sm:justify-start gap-0 sm:gap-1.5 px-1 py-1.5 sm:px-3.5 sm:py-1.5 rounded sm:rounded-t sm:rounded-b-none text-[11px] sm:text-[14px] transition-all duration-200 whitespace-nowrap border sm:border-b-0 shrink-0 ${
                  active
                    ? "bg-[#FFFDF9] text-[#A95A01] border-[#A95A01] sm:border-t-2 sm:-mb-px z-10"
                    : "bg-[#F8F3EA]/90 text-[#605A50] hover:text-[#011A51] border-[#E5DCCB]"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 shrink-0 hidden sm:block ${active ? "text-[#A95A01]" : "text-[#605A50]"}`} />
                <span className="md:hidden">{tab.shortLabel}</span>
                <span className="hidden md:inline">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Main Floating Booking Card */}
        <form
          onSubmit={handleSearchSubmit}
          className="bg-[#FFFDF9] p-3 sm:p-5 rounded border border-[#E5DCCB] relative"
        >
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-12 gap-2 sm:gap-3 items-stretch">

            {/* Check-in and check-out share one anchor so the calendar popover always lines up under them */}
            <div className="col-span-2 sm:col-span-2 lg:col-span-6 relative grid grid-cols-2 gap-2 sm:gap-3">

            {/* 1. Check-In Dedicated Tile */}
            <div>
              <button
                type="button"
                onClick={() => {
                  setSelectingTarget("in");
                  setCalendarOpen(!calendarOpen);
                  setGuestsOpen(false);
                }}
                className={`w-full h-full flex flex-col text-left p-2.5 sm:p-3.5 rounded border border-[#E5DCCB] bg-[#F8F3EA]/60 transition-all ${
                  calendarOpen && selectingTarget === "in"
                    ? "bg-[#FFFDF9] ring-1 ring-[#A95A01]"
                    : "hover:bg-[#FFFDF9]"
                }`}
              >
                <div className="flex items-center gap-1.5 text-[12px] sm:text-[14px] text-[#011A51] mb-1">
                  <CalendarIcon className="w-3.5 h-3.5" />
                  <span>Check-in</span>
                </div>
                <div className="mt-auto flex items-baseline gap-2">
                  <span className="font-serif-luxury text-[22px] sm:text-[28px] text-[#011A51]">
                    {inDateObj.getDate()}
                  </span>
                  <div className="flex flex-col text-[12px] sm:text-[14px] leading-tight text-[#605A50]">
                    <span>{monthNames[inDateObj.getMonth()].slice(0, 3)} {inDateObj.getFullYear()}</span>
                    <span>{inDateObj.toLocaleDateString("en-US", { weekday: "short" })}</span>
                  </div>
                </div>
              </button>
            </div>

            {/* 2. Check-Out Dedicated Tile */}
            <div>
              <button
                type="button"
                onClick={() => {
                  setSelectingTarget("out");
                  setCalendarOpen(!calendarOpen);
                  setGuestsOpen(false);
                }}
                className={`w-full h-full flex flex-col text-left p-2.5 sm:p-3.5 rounded border border-[#E5DCCB] bg-[#F8F3EA]/60 transition-all ${
                  calendarOpen && selectingTarget === "out"
                    ? "bg-[#FFFDF9] ring-1 ring-[#A95A01]"
                    : "hover:bg-[#FFFDF9]"
                }`}
              >
                <div className="flex items-center justify-between gap-1 text-[12px] sm:text-[14px] text-[#011A51] mb-1">
                  <div className="flex items-center gap-1.5">
                    <CalendarIcon className="w-3.5 h-3.5" />
                    <span>Check-out</span>
                  </div>
                  <span className="text-[11px] sm:text-[14px] text-[#605A50] shrink-0">
                    {nightsCount} {nightsCount === 1 ? "night" : "nights"}
                  </span>
                </div>
                <div className="mt-auto flex items-baseline gap-2">
                  <span className="font-serif-luxury text-[22px] sm:text-[28px] text-[#011A51]">
                    {outDateObj.getDate()}
                  </span>
                  <div className="flex flex-col text-[12px] sm:text-[14px] leading-tight text-[#605A50]">
                    <span>{monthNames[outDateObj.getMonth()].slice(0, 3)} {outDateObj.getFullYear()}</span>
                    <span>{outDateObj.toLocaleDateString("en-US", { weekday: "short" })}</span>
                  </div>
                </div>
              </button>
            </div>
            {/* Calendar popover lines up under the check-in/check-out pair */}
            {calendarOpen && (
              <div className="absolute top-full mt-2 left-0 right-0 sm:right-auto sm:w-[380px] bg-[#FFFDF9] rounded border border-[#E5DCCB] p-4 z-50">
                {/* Header */}
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#E5DCCB]">
                  <div className="flex flex-col text-left">
                    <span className="text-[14px] text-[#605A50]">
                      Select {selectingTarget === "in" ? "check-in" : "check-out"} date
                    </span>
                    <span className="font-serif-luxury text-[20px] text-[#011A51]">
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
                      className="p-1.5 rounded hover:bg-[#F8F3EA] text-[#011A51]"
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
                      className="p-1.5 rounded hover:bg-[#F8F3EA] text-[#011A51]"
                      aria-label="Next Month"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Quick Duration Shortcuts */}
                <div className="flex items-center flex-wrap gap-1.5 mb-3">
                  {[
                    { label: "1 night", nights: 1 },
                    { label: "2 nights", nights: 2 },
                    { label: "3 nights", nights: 3 },
                    { label: "Weekend", nights: 2 },
                  ].map((sc) => (
                    <button
                      key={sc.label}
                      type="button"
                      onClick={() => handleQuickDuration(sc.nights)}
                      className="px-2.5 py-1 rounded bg-[#F8F3EA] hover:bg-[#EBDDC5] text-[#A95A01] text-[14px] transition-colors whitespace-nowrap"
                    >
                      {sc.label}
                    </button>
                  ))}
                </div>

                {/* Calendar Days of Week */}
                <div className="grid grid-cols-7 gap-1 text-center text-[14px] text-[#605A50] mb-1">
                  <span>Su</span>
                  <span>Mo</span>
                  <span>Tu</span>
                  <span>We</span>
                  <span>Th</span>
                  <span>Fr</span>
                  <span>Sa</span>
                </div>

                {/* Days Grid */}
                <div className="grid grid-cols-7 gap-1 text-[14px]">
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
                        className={`h-8 rounded flex items-center justify-center transition-all ${
                          isCheckIn || isCheckOut
                            ? "bg-[#A95A01] text-white"
                            : isInRange
                            ? "bg-[#A95A01]/15 text-[#A95A01]"
                            : "text-[#011A51] hover:bg-[#F8F3EA]"
                        }`}
                      >
                        {dayNum}
                      </button>
                    );
                  })}
                </div>

                {/* Footer */}
                <div className="mt-3 pt-2 border-t border-[#E5DCCB] flex justify-between items-center text-[14px]">
                  <span className="text-[#011A51]">
                    {nightsCount} {nightsCount === 1 ? "night stay" : "nights stay"}
                  </span>
                  <button
                    type="button"
                    onClick={() => setCalendarOpen(false)}
                    className="px-3 py-1 rounded bg-[#011A51] text-white hover:bg-[#A95A01] transition-colors"
                  >
                    Done
                  </button>
                </div>
              </div>
            )}
            </div>

            {/* 3. Guests & Rooms Dedicated Tile */}
            <div className="col-span-2 sm:col-span-1 lg:col-span-3 relative">
              <button
                type="button"
                onClick={() => {
                  setGuestsOpen(!guestsOpen);
                  setCalendarOpen(false);
                }}
                className={`w-full h-full flex flex-col text-left p-2.5 sm:p-3.5 rounded border border-[#E5DCCB] bg-[#F8F3EA]/60 transition-all ${
                  guestsOpen ? "bg-[#FFFDF9] ring-1 ring-[#A95A01]" : "hover:bg-[#FFFDF9]"
                }`}
              >
                <div className="flex items-center gap-1.5 text-[12px] sm:text-[14px] text-[#011A51] mb-1">
                  <Users className="w-3.5 h-3.5" />
                  <span>Guests and rooms</span>
                </div>
                <div className="mt-auto">
                  <div className="font-serif-luxury text-[20px] text-[#011A51] truncate">
                    {adults} {adults === 1 ? "Adult" : "Adults"}{children > 0 ? `, ${children} Ch` : ""}
                  </div>
                  <div className="text-[14px] text-[#605A50] mt-0.5">
                    {rooms} {rooms === 1 ? "Room" : "Rooms"}
                  </div>
                </div>
              </button>
          {/* Guests and rooms popover lines up under its own tile */}
          {guestsOpen && (
            <div className="absolute top-full mt-2 right-0 left-0 sm:left-auto sm:w-[320px] bg-[#FFFDF9] rounded border border-[#E5DCCB] p-4 z-50">
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#E5DCCB]">
                <span className="font-serif-luxury text-[20px] text-[#011A51]">
                  Guests and rooms
                </span>
                <span className="text-[14px] text-[#605A50]">Max 6 guests</span>
              </div>

              {/* Adults Counter */}
              <div className="flex items-center justify-between py-2 border-b border-[#F8F3EA]">
                <div>
                  <div className="text-[14px] text-[#011A51]">Adults</div>
                  <div className="text-[14px] text-[#605A50]">Age 12+ years</div>
                </div>
                <div className="flex items-center gap-2.5">
                  <button
                    type="button"
                    disabled={adults <= 1}
                    onClick={() => setAdults(Math.max(1, adults - 1))}
                    className="w-7 h-7 rounded bg-[#F8F3EA] border border-[#E5DCCB] flex items-center justify-center text-[#011A51] disabled:opacity-30 hover:bg-[#EBDDC5]"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[14px] text-[#011A51] w-4 text-center">{adults}</span>
                  <button
                    type="button"
                    disabled={adults >= 8}
                    onClick={() => setAdults(adults + 1)}
                    className="w-7 h-7 rounded bg-[#F8F3EA] border border-[#E5DCCB] flex items-center justify-center text-[#011A51] hover:bg-[#EBDDC5]"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Children Counter */}
              <div className="flex items-center justify-between py-2 border-b border-[#F8F3EA]">
                <div>
                  <div className="text-[14px] text-[#011A51]">Children</div>
                  <div className="text-[14px] text-[#605A50]">Age 0-11 years</div>
                </div>
                <div className="flex items-center gap-2.5">
                  <button
                    type="button"
                    disabled={children <= 0}
                    onClick={() => setChildren(Math.max(0, children - 1))}
                    className="w-7 h-7 rounded bg-[#F8F3EA] border border-[#E5DCCB] flex items-center justify-center text-[#011A51] disabled:opacity-30 hover:bg-[#EBDDC5]"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[14px] text-[#011A51] w-4 text-center">{children}</span>
                  <button
                    type="button"
                    disabled={children >= 4}
                    onClick={() => setChildren(children + 1)}
                    className="w-7 h-7 rounded bg-[#F8F3EA] border border-[#E5DCCB] flex items-center justify-center text-[#011A51] hover:bg-[#EBDDC5]"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Rooms Counter */}
              <div className="flex items-center justify-between py-2 border-b border-[#F8F3EA]">
                <div>
                  <div className="text-[14px] text-[#011A51]">Rooms</div>
                  <div className="text-[14px] text-[#605A50]">Up to 4 rooms</div>
                </div>
                <div className="flex items-center gap-2.5">
                  <button
                    type="button"
                    disabled={rooms <= 1}
                    onClick={() => setRooms(Math.max(1, rooms - 1))}
                    className="w-7 h-7 rounded bg-[#F8F3EA] border border-[#E5DCCB] flex items-center justify-center text-[#011A51] disabled:opacity-30 hover:bg-[#EBDDC5]"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[14px] text-[#011A51] w-4 text-center">{rooms}</span>
                  <button
                    type="button"
                    disabled={rooms >= 4}
                    onClick={() => setRooms(rooms + 1)}
                    className="w-7 h-7 rounded bg-[#F8F3EA] border border-[#E5DCCB] flex items-center justify-center text-[#011A51] hover:bg-[#EBDDC5]"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="mt-3 flex justify-end">
                <button
                  type="button"
                  onClick={() => setGuestsOpen(false)}
                  className="px-4 py-1.5 rounded bg-[#011A51] text-white text-[14px] hover:bg-[#A95A01] transition-colors"
                >
                  Apply
                </button>
              </div>
            </div>
          )}
            </div>

            {/* 4. Search Availability Button */}
            <div className="col-span-2 sm:col-span-1 lg:col-span-3 flex">
              <button
                type="submit"
                className="w-full min-h-[52px] sm:min-h-[72px] flex items-center justify-center gap-2 rounded bg-[#011A51] hover:bg-[#A95A01] text-[#FFFDF9] text-[16px] font-medium transition-colors"
              >
                <Search className="w-4 h-4" />
                <span>Check rates</span>
              </button>
            </div>
          </div>

          {/* Booking Info */}
          <div className="mt-3.5 pt-3 border-t border-[#E5DCCB] hidden sm:flex flex-wrap items-center justify-between gap-3 text-[14px] text-[#605A50]">
            <span>Concierge safari permits included</span>
            <span className="text-[#011A51]">Amer, Jaipur</span>
          </div>

        </form>
      </div>
    </section>
  );
}
