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

      {/* Overview */}
      <Overview />

      {/* Rooms and suites */}
      <Rooms onOpenBooking={handleOpenBooking} />

      {/* Dining */}
      <Dining onOpenBooking={handleOpenBooking} />

      {/* Events */}
      <Celebrations onOpenBooking={handleOpenBooking} />

      {/* Excursions */}
      <Excursions onOpenBooking={handleOpenBooking} />

      {/* Photo gallery */}
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

