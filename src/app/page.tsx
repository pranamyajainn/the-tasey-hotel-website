"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import Excursions from "@/components/Excursions";
import Rooms from "@/components/Rooms";
import Dining from "@/components/Dining";
import Celebrations from "@/components/Celebrations";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingData, setBookingData] = useState<{
    category?: string;
    checkIn?: string;
    checkOut?: string;
    guests?: string;
  }>({});

  const handleOpenBooking = (data?: string | { category?: string; checkIn?: string; checkOut?: string; guests?: string }) => {
    if (typeof data === "string") {
      setBookingData({ category: data });
    } else if (data) {
      setBookingData(data);
    } else {
      setBookingData({});
    }
    setIsBookingOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#011A51] flex flex-col selection:bg-[#A95A01] selection:text-white">
      {/* Navbar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Hero Section with Quick Availability Bar */}
      <Hero onOpenBooking={handleOpenBooking} />

      {/* Overview & Architectural Sanctuary */}
      <Overview />

      {/* Hotel Portfolio Core: Rooms & Suites Showcase */}
      <Rooms onOpenBooking={handleOpenBooking} />

      {/* Gastronomy: Haldi Fine Dining & Jhumka Rooftop Pool */}
      <Dining onOpenBooking={handleOpenBooking} />

      {/* Celebrations & Royal Banquet Halls */}
      <Celebrations onOpenBooking={handleOpenBooking} />

      {/* Concierge Portfolio: Safaris & Heritage Excursions */}
      <Excursions onOpenBooking={handleOpenBooking} />

      {/* Authentic Photo Gallery (19 Real Hotel Photos) */}
      <Gallery />

      {/* Footer */}
      <Footer />

      {/* Interactive Reservation Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialData={bookingData}
      />
    </main>
  );
}

