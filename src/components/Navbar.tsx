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
          ? "bg-[#FFFDF9]/95 backdrop-blur-xl border-b border-[#C5A059]/30 shadow-md py-3"
          : "bg-gradient-to-b from-[#FDFBF7]/95 via-[#FDFBF7]/70 to-transparent py-4"
      }`}
    >
      {/* Top Announcement Bar */}
      <div className="hidden lg:flex justify-between items-center max-w-7xl mx-auto px-6 mb-2 text-xs text-[#5C5248] border-b border-[#C5A059]/20 pb-2">
        <div className="flex items-center space-x-6">
          <span className="flex items-center gap-1.5 font-medium">
            <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
            Amer, Jaipur, Rajasthan 302028
          </span>
          <span className="text-[#C5A059]/40">•</span>
          <span className="flex items-center gap-1.5 font-medium">
            <Compass className="w-3.5 h-3.5 text-[#C5A059]" />
            Elephant Village • Jhalana Leopard Safari • Nahargarh Lion Safari
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="tel:+919876543210"
            className="flex items-center gap-1.5 hover:text-[#C5A059] font-bold transition-colors text-[#8C6310]"
          >
            <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
            +91 98765 43210
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo & Monogram */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#C5A059] via-[#D4AF37] to-[#8C6310] p-0.5 shadow-md group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#FFFDF9] rounded-full overflow-hidden flex items-center justify-center p-1">
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
            <span className="font-serif-luxury text-xl sm:text-2xl font-bold tracking-wider text-[#1C1815] group-hover:text-[#C5A059] transition-colors">
              THE TASEY
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-[0.25em] text-[#8C6310] uppercase font-bold">
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
              className="text-xs sm:text-sm font-semibold tracking-wide text-[#3B332B] hover:text-[#C5A059] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C5A059] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action CTA & Phone */}
        <div className="hidden sm:flex items-center space-x-4">
          <a
            href="tel:+919876543210"
            className="lg:hidden p-2.5 rounded-full bg-[#F8F3EA] text-[#8C6310] border border-[#C5A059]/40"
          >
            <Phone className="w-4 h-4" />
          </a>
          <button
            onClick={() => onOpenBooking()}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#C5A059] to-[#8C6310] text-white font-bold text-xs sm:text-sm tracking-wider uppercase shadow-md hover:shadow-[#C5A059]/40 hover:scale-105 transition-all"
          >
            <Calendar className="w-4 h-4 text-white" />
            Reserve Your Stay
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#1C1815] hover:text-[#C5A059] transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFFDF9] backdrop-blur-2xl border-b border-[#C5A059]/30 px-6 py-6 space-y-4 shadow-2xl">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base text-[#1C1815] hover:text-[#C5A059] font-semibold py-2 border-b border-[#E5DCCB]"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-4 flex flex-col gap-3">
            <a
              href="tel:+919876543210"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-[#C5A059]/40 text-[#8C6310] text-sm font-semibold bg-[#F8F3EA]"
            >
              <Phone className="w-4 h-4 text-[#C5A059]" />
              Call Us: +91 98765 43210
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#C5A059] to-[#8C6310] text-white font-bold text-sm uppercase tracking-wider shadow-lg"
            >
              Reserve Your Stay
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

