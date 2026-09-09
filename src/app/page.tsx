"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import Rooms from "@/components/Rooms";
import Dining from "@/components/Dining";
import Celebrations from "@/components/Celebrations";
import Attractions from "@/components/Attractions";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

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
    <main className="min-h-screen bg-[#070a14] text-gray-100 flex flex-col selection:bg-[#d4af37] selection:text-black">
      {/* Navbar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Hero Section with Quick Availability Bar */}
      <Hero onOpenBooking={handleOpenBooking} />

      {/* Overview & Location Advantage */}
      <Overview />

      {/* Rooms & Suites Showcase */}
      <Rooms onOpenBooking={handleOpenBooking} />

      {/* Dining: Haldi & Jhumka Rooftop Pool */}
      <Dining onOpenBooking={handleOpenBooking} />

      {/* Celebrations & Banquet Halls */}
      <Celebrations onOpenBooking={handleOpenBooking} />

      {/* Nearby Attractions */}
      <Attractions />

      {/* Photo Gallery */}
      <Gallery />

      {/* Guest Reviews & Testimonials */}
      <Testimonials />

      {/* Footer */}
      <Footer />

      {/* Interactive Reservation Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialData={bookingData}
      />

      {/* Floating Call & WhatsApp Buttons */}
      <FloatingWhatsApp />
    </main>
  );
}
