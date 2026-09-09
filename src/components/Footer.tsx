"use client";

import Image from "next/image";
import { MapPin, Phone, Mail, Globe, Share2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1C1815] text-[#FDFBF7] pt-16 pb-12 text-xs relative overflow-hidden border-t border-[#C5A059]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#C5A059]/20">
          {/* Brand Info */}
          <div className="space-y-4">
            <a href="#" className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-[#D4AF37] via-[#B88E36] to-[#8C6310] p-0.5 shadow-md">
                <div className="w-full h-full bg-[#FFFDF9] rounded-full flex items-center justify-center p-1">
                  <Image src="/logo.png" alt="The Tasey" width={40} height={40} className="object-contain" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-serif-luxury text-2xl font-bold tracking-wider text-[#FDFBF7]">
                  THE TASEY
                </span>
                <span className="text-[9px] tracking-[0.2em] text-[#C5A059] uppercase font-semibold">
                  Boutique Hotel & Restaurant
                </span>
              </div>
            </a>

            <p className="text-gray-300 font-normal leading-relaxed">
              Nestled in the heart of the Aravali Hills near Amber Fort, offering royal hospitality, luxurious rooms, authentic Rajasthani dining at <em>Haldi</em>, and romantic rooftop poolside dining at <em>Jhumka</em>.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:text-[#C5A059] hover:border-[#C5A059] transition-colors" title="Website">
                <Globe className="w-4 h-4 text-[#C5A059]" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:text-[#C5A059] hover:border-[#C5A059] transition-colors" title="Share">
                <Share2 className="w-4 h-4 text-[#C5A059]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif-luxury text-base font-bold text-white tracking-wide uppercase text-[#C5A059]">
              Quick Navigation
            </h4>
            <ul className="space-y-2 font-normal text-gray-300">
              <li>
                <a href="#overview" className="hover:text-[#C5A059] transition-colors">Hotel Overview & Location</a>
              </li>
              <li>
                <a href="#rooms" className="hover:text-[#C5A059] transition-colors">Rooms & Suite Categories</a>
              </li>
              <li>
                <a href="#dining" className="hover:text-[#C5A059] transition-colors">Haldi Indoor Restaurant</a>
              </li>
              <li>
                <a href="#dining" className="hover:text-[#C5A059] transition-colors">Jhumka Rooftop & Pool</a>
              </li>
              <li>
                <a href="#celebrations" className="hover:text-[#C5A059] transition-colors">Banquet Halls & Events</a>
              </li>
              <li>
                <a href="#attractions" className="hover:text-[#C5A059] transition-colors">Jaipur Nearby Attractions</a>
              </li>
            </ul>
          </div>

          {/* Restaurants Timings */}
          <div className="space-y-3">
            <h4 className="font-serif-luxury text-base font-bold text-white tracking-wide uppercase text-[#C5A059]">
              Dining Timings
            </h4>
            <div className="space-y-3 font-normal text-gray-300">
              <div>
                <div className="text-white font-semibold text-xs">Haldi Indoor Restaurant</div>
                <div className="text-[#C5A059] text-[11px]">7:00 AM – 11:00 PM (Daily)</div>
                <div className="text-[10px] text-gray-400">Authentic Rajasthani & North Indian</div>
              </div>
              <div>
                <div className="text-white font-semibold text-xs">Jhumka Rooftop & Pool</div>
                <div className="text-[#C5A059] text-[11px]">5:00 PM – 12:00 Midnight (Daily)</div>
                <div className="text-[10px] text-gray-400">3-Side Hill View & Candlelight Poolside</div>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="font-serif-luxury text-base font-bold text-white tracking-wide uppercase text-[#C5A059]">
              Location & Contact
            </h4>
            <ul className="space-y-2.5 font-normal text-gray-300">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span>
                  Aravali Hills, 100m from Taj Amber, 50m from Nahargarh Zoological Park, Near Amber Fort, Jaipur, Rajasthan 302028
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a href="tel:+919876543210" className="hover:text-[#C5A059] transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a href="mailto:reservations@thetasey.com" className="hover:text-[#C5A059] transition-colors">reservations@thetasey.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-[11px] text-gray-400 gap-4">
          <div>
            © {new Date().getFullYear()} <strong>The Tasey Boutique Hotel & Restaurant</strong>. All Rights Reserved.
          </div>
          <div>
            Crafted with royal elegance for Jaipur hospitality
          </div>
        </div>
      </div>
    </footer>
  );
}
