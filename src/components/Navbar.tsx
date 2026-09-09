"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Phone, Calendar, Menu, X, Sparkles, MapPin } from "lucide-react";

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
          ? "bg-[#FAF6F0]/95 backdrop-blur-md border-b border-[#C5A059]/25 shadow-md py-3"
          : "bg-gradient-to-b from-[#FFFDF9] via-[#FFFDF9]/80 to-transparent py-4"
      }`}
    >
      {/* Top Announcement Bar */}
      <div className="hidden lg:flex justify-between items-center max-w-7xl mx-auto px-6 mb-2 text-xs text-[#5C5046] border-b border-[#C5A059]/15 pb-2">
        <div className="flex items-center space-x-6">
          <span className="flex items-center gap-1.5 font-medium">
            <MapPin className="w-3.5 h-3.5 text-[#B88E36]" />
            Aravali Hills, Near Amber Fort, Jaipur
          </span>
          <span className="text-[#C5A059]/40">•</span>
          <span className="flex items-center gap-1.5 font-medium">
            <Sparkles className="w-3.5 h-3.5 text-[#B88E36]" />
            100m from Taj Amber & 50m from Nahargarh Zoological Park
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="tel:+919876543210"
            className="flex items-center gap-1.5 hover:text-[#B88E36] font-semibold transition-colors text-[#2C2621]"
          >
            <Phone className="w-3.5 h-3.5 text-[#B88E36]" />
            +91 98765 43210
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo & Monogram */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#D4AF37] via-[#B88E36] to-[#8C6310] p-0.5 shadow-md group-hover:scale-105 transition-transform">
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
            <span className="font-serif-luxury text-xl sm:text-2xl font-bold tracking-wider text-[#1C1815] group-hover:text-[#B88E36] transition-colors">
              THE TASEY
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-[0.25em] text-[#7A6E63] uppercase font-semibold">
              Boutique Hotel & Restaurant
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs sm:text-sm font-semibold tracking-wide text-[#2C2621] hover:text-[#B88E36] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#B88E36] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action CTA & Phone */}
        <div className="hidden sm:flex items-center space-x-4">
          <a
            href="tel:+919876543210"
            className="lg:hidden p-2.5 rounded-full bg-[#F5EFE6] text-[#B88E36] border border-[#C5A059]/30"
          >
            <Phone className="w-4 h-4" />
          </a>
          <button
            onClick={() => onOpenBooking()}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1C1815] text-[#FDFBF7] font-semibold text-xs sm:text-sm tracking-wider uppercase shadow-md hover:bg-[#B88E36] hover:text-white transition-all transform hover:-translate-y-0.5"
          >
            <Calendar className="w-4 h-4 text-[#C5A059]" />
            Reserve Your Stay
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#2C2621] hover:text-[#B88E36] transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFFDF9]/98 backdrop-blur-xl border-b border-[#C5A059]/30 px-6 py-6 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base text-[#2C2621] hover:text-[#B88E36] font-medium py-2 border-b border-[#C5A059]/10"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-4 flex flex-col gap-3">
            <a
              href="tel:+919876543210"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-[#C5A059]/40 text-[#2C2621] text-sm font-semibold bg-[#F8F3EA]"
            >
              <Phone className="w-4 h-4 text-[#B88E36]" />
              Call Us: +91 98765 43210
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 rounded-xl bg-[#1C1815] text-[#FDFBF7] font-bold text-sm uppercase tracking-wider shadow-md hover:bg-[#B88E36]"
            >
              Reserve Your Stay
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
