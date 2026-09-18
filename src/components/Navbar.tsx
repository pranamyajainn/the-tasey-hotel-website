"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Calendar, Menu, X, MapPin, Compass } from "lucide-react";

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
    { name: "Dining", href: "#dining" },
    { name: "Celebrations", href: "#celebrations" },
    { name: "Safaris", href: "#adventures" },
    { name: "Gallery", href: "#gallery" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FFFDF9]/95 backdrop-blur-md border-b border-[#A95A01]/25 shadow-sm py-2.5"
          : "bg-gradient-to-b from-[#FDFBF7]/95 via-[#FDFBF7]/80 to-transparent py-3 sm:py-4"
      }`}
    >
      {/* Top Announcement Bar */}
      <div className="hidden lg:flex justify-between items-center max-w-7xl mx-auto px-6 mb-2 text-xs text-[#605A50] border-b border-[#A95A01]/15 pb-2">
        <div className="flex items-center space-x-5">
          <span className="flex items-center gap-1.5 font-medium">
            <MapPin className="w-3.5 h-3.5 text-[#A95A01]" />
            Amer, Jaipur (5 km from Amber Fort)
          </span>
          <span className="text-[#A95A01]/40">•</span>
          <span className="flex items-center gap-1.5 font-medium">
            <Compass className="w-3.5 h-3.5 text-[#A95A01]" />
            50 m from Nahargarh Biological Park
          </span>
        </div>
        <div className="flex items-center space-x-3">
          <Phone className="w-3.5 h-3.5 text-[#A95A01]" />
          <a href="tel:+917073873670" className="font-semibold text-[#A95A01] hover:underline transition-colors">
            +91 70738 73670
          </a>
          <span className="text-[#A95A01]/40">/</span>
          <a href="tel:+919145824248" className="font-semibold text-[#A95A01] hover:underline transition-colors">
            +91 91458 24248
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 sm:gap-6">
        {/* Logo & Brand */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[#A95A01] to-[#A95A01] p-0.5 shadow-sm group-hover:scale-105 transition-transform shrink-0">
            <div className="w-full h-full bg-[#FFFDF9] rounded-full overflow-hidden flex items-center justify-center p-0.5">
              <Image
                src="/logo.png"
                alt="The Tasey Logo"
                width={38}
                height={38}
                className="object-contain"
                priority
              />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-serif-luxury text-base sm:text-lg xl:text-xl font-bold tracking-widest text-[#011A51] group-hover:text-[#A95A01] transition-colors whitespace-nowrap">
              THE TASEY
            </span>
            <span className="text-[8px] sm:text-[9px] tracking-[0.25em] text-[#A95A01] uppercase font-bold whitespace-nowrap">
              Amer • Jaipur
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-8 2xl:gap-9">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[13px] xl:text-sm font-medium tracking-wide text-[#011A51] hover:text-[#A95A01] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#A95A01] hover:after:w-full after:transition-all after:duration-200 whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action CTA & Contact */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            href="tel:+917073873670"
            className="hidden xl:flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-[#A95A01]/35 text-[#A95A01] text-xs font-semibold hover:bg-[#F8F3EA] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#A95A01]" />
            <span>Call Us</span>
          </a>

          <button
            onClick={() => onOpenBooking()}
            className="flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-[#A95A01] to-[#A95A01] text-white font-bold text-xs sm:text-xs xl:text-sm tracking-wider uppercase shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all shrink-0 whitespace-nowrap"
          >
            <Calendar className="w-3.5 h-3.5 text-white" />
            <span>Reserve Stay</span>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#011A51] hover:text-[#A95A01] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFFDF9] border-b border-[#A95A01]/30 px-6 py-6 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base text-[#011A51] hover:text-[#A95A01] font-medium py-2.5 border-b border-[#E5DCCB]/60 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-[#A95A01] text-xs uppercase font-bold tracking-wider">Explore</span>
              </a>
            ))}
          </nav>

          <div className="pt-3 flex flex-col gap-3">
            <a
              href="tel:+917073873670"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-[#A95A01]/40 text-[#A95A01] text-sm font-semibold bg-[#F8F3EA]"
            >
              <Phone className="w-4 h-4 text-[#A95A01]" />
              Call: +91 70738 73670
            </a>
            <a
              href="tel:+919145824248"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-[#A95A01]/40 text-[#A95A01] text-sm font-semibold bg-[#F8F3EA]"
            >
              <Phone className="w-4 h-4 text-[#A95A01]" />
              Call: +91 91458 24248
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#A95A01] to-[#A95A01] text-white font-bold text-sm uppercase tracking-wider shadow-md"
            >
              Reserve Stay
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

