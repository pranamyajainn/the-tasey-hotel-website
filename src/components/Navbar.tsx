"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Menu, X, MapPin, Compass } from "lucide-react";

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
    { name: "Rooms & suites", href: "#rooms" },
    { name: "Dining", href: "#dining" },
    { name: "Celebrations", href: "#celebrations" },
    { name: "Safaris", href: "#adventures" },
    { name: "Gallery", href: "#gallery" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-[#FFFDF9] border-b border-[#E5DCCB] py-2.5"
          : "bg-[#FDFBF7] py-3 sm:py-4"
      }`}
    >
      {/* Top Bar */}
      <div className="hidden lg:flex justify-between items-center max-w-7xl mx-auto px-6 mb-2 text-[14px] text-[#605A50] border-b border-[#E5DCCB] pb-2">
        <div className="flex items-center gap-5">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Amer+Jaipur"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-[#A95A01] transition-colors"
          >
            <MapPin className="w-3.5 h-3.5 text-[#011A51]" />
            Amer, Jaipur (5 km from Amber Fort)
          </a>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Nahargarh+Biological+Park+Jaipur"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-[#A95A01] transition-colors"
          >
            <Compass className="w-3.5 h-3.5 text-[#011A51]" />
            50 m from Nahargarh Biological Park
          </a>
        </div>
        <div className="flex items-center gap-3">
          <Phone className="w-3.5 h-3.5 text-[#011A51]" />
          <a href="tel:+917073873670" className="font-medium text-[#A95A01] hover:underline">
            +91 70738 73670
          </a>
          <span>/</span>
          <a href="tel:+919145824248" className="font-medium text-[#A95A01] hover:underline">
            +91 91458 24248
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 sm:gap-6">
        {/* Logo & Brand */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/logo.png"
            alt="The Tasey Logo"
            width={36}
            height={36}
            className="object-contain shrink-0"
            priority
          />
          <span className="font-serif-luxury text-[20px] tracking-wide text-[#011A51] whitespace-nowrap">
            The Tasey
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[16px] text-[#011A51] hover:text-[#A95A01] transition-colors whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action CTA & Contact */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            href="tel:+917073873670"
            className="hidden xl:flex items-center gap-1.5 px-3.5 py-2 rounded border border-[#A95A01]/35 text-[#A95A01] text-[14px] hover:bg-[#F8F3EA] transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call us</span>
          </a>

          <button
            onClick={() => onOpenBooking()}
            className="flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded bg-[#A95A01] text-white text-[14px] font-medium shrink-0 whitespace-nowrap"
          >
            <span>Reserve a stay</span>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#011A51]"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFFDF9] border-b border-[#E5DCCB] px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[16px] text-[#011A51] py-2.5 border-b border-[#E5DCCB]"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-3 flex flex-col gap-3">
            <a
              href="tel:+917073873670"
              className="flex items-center justify-center gap-2 w-full py-3 rounded border border-[#A95A01]/40 text-[#A95A01] text-[14px] bg-[#F8F3EA]"
            >
              <Phone className="w-4 h-4" />
              Call: +91 70738 73670
            </a>
            <a
              href="tel:+919145824248"
              className="flex items-center justify-center gap-2 w-full py-3 rounded border border-[#A95A01]/40 text-[#A95A01] text-[14px] bg-[#F8F3EA]"
            >
              <Phone className="w-4 h-4" />
              Call: +91 91458 24248
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 rounded bg-[#A95A01] text-white text-[14px] font-medium"
            >
              Reserve a stay
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
