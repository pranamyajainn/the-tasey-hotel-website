"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Phone, Calendar, Menu, X, Sparkles, MapPin, Compass } from "lucide-react";

interface NavbarProps {
  onOpenBooking: (category?: string) => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Overview", href: "#overview" },
    { name: "Safaris & Adventures", href: "#adventures" },
    { name: "Rooms & Suites", href: "#rooms" },
    { name: "Dining & Rooftop", href: "#dining" },
    { name: "Celebrations", href: "#celebrations" },
    { name: "Attractions", href: "#attractions" },
    { name: "Gallery", href: "#gallery" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#070A12]/90 backdrop-blur-xl border-b border-[#D4AF37]/30 shadow-2xl py-3"
          : "bg-gradient-to-b from-[#070A12]/95 via-[#070A12]/60 to-transparent py-4"
      }`}
    >
      {/* Top Announcement Bar */}
      <div className="hidden lg:flex justify-between items-center max-w-7xl mx-auto px-6 mb-2 text-xs text-gray-300 border-b border-[#D4AF37]/20 pb-2">
        <div className="flex items-center space-x-6">
          <span className="flex items-center gap-1.5 font-light">
            <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
            Amer, Jaipur, Rajasthan 302028
          </span>
          <span className="text-[#D4AF37]/40">•</span>
          <span className="flex items-center gap-1.5 font-light">
            <Compass className="w-3.5 h-3.5 text-[#D4AF37]" />
            Elephant Village • Jhalana Leopard Safari • Nahargarh Lion Safari
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="tel:+919876543210"
            className="flex items-center gap-1.5 hover:text-[#D4AF37] font-semibold transition-colors text-[#E5C365]"
          >
            <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
            +91 98765 43210
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo & Monogram */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#D4AF37] via-[#C5A059] to-[#8C6310] p-0.5 shadow-xl group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#070A12] rounded-full overflow-hidden flex items-center justify-center p-1">
              <Image
                src="/logo.png"
                alt="The Tasey Logo"
                width={46}
                height={46}
                className="object-contain"
                priority
              />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-serif-luxury text-xl sm:text-2xl font-bold tracking-wider text-white group-hover:text-[#D4AF37] transition-colors">
              THE TASEY
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-[0.25em] text-[#E5C365] uppercase font-semibold">
              Boutique Hotel & Excursions
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs sm:text-sm font-medium tracking-wide text-gray-200 hover:text-[#D4AF37] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#D4AF37] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action CTA & Phone */}
        <div className="hidden sm:flex items-center space-x-4">
          <a
            href="tel:+919876543210"
            className="lg:hidden p-2.5 rounded-full bg-[#0F172A] text-[#D4AF37] border border-[#D4AF37]/30"
          >
            <Phone className="w-4 h-4" />
          </a>
          <button
            onClick={() => onOpenBooking()}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B38F24] text-black font-bold text-xs sm:text-sm tracking-wider uppercase shadow-xl hover:shadow-[#D4AF37]/30 hover:scale-105 transition-all"
          >
            <Calendar className="w-4 h-4 text-black" />
            Reserve Your Stay
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-white hover:text-[#D4AF37] transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#070A12]/98 backdrop-blur-2xl border-b border-[#D4AF37]/30 px-6 py-6 space-y-4 shadow-2xl">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base text-gray-200 hover:text-[#D4AF37] font-medium py-2 border-b border-[#D4AF37]/10"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-4 flex flex-col gap-3">
            <a
              href="tel:+919876543210"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-[#D4AF37]/40 text-[#E5C365] text-sm font-semibold bg-[#0F172A]"
            >
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              Call Us: +91 98765 43210
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B38F24] text-black font-bold text-sm uppercase tracking-wider shadow-lg"
            >
              Reserve Your Stay
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

