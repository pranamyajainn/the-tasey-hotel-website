"use client";

import Image from "next/image";
import { MapPin, Phone, Mail, Globe, Share2, Compass } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1C1815] text-[#FDFBF7] pt-16 pb-12 text-xs relative overflow-hidden border-t border-[#C5A059]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#C5A059]/20">
          {/* Brand Info */}
          <div className="space-y-4">
            <a href="#" className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-[#C5A059] via-[#D4AF37] to-[#8C6310] p-0.5 shadow-md">
                <div className="w-full h-full bg-[#1C1815] rounded-full flex items-center justify-center p-1">
                  <Image src="/logo.png" alt="The TASEY Hotel" width={40} height={40} className="object-contain" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-serif-luxury text-2xl font-bold tracking-wider text-[#FDFBF7]">
                  THE TASEY
                </span>
                <span className="text-[9px] tracking-[0.2em] text-[#E5C365] uppercase font-bold">
                  Hotel & Excursions • Amer
                </span>
              </div>
            </a>

            <p className="text-[#D5C9B8] font-normal leading-relaxed">
              Nestled amidst the Aravalli Hills in Amer, Jaipur. Offering royal luxury stay, authentic dining at <em>Haldi</em>, rooftop poolside views at <em>Jhumka</em>, and curated <span className="text-[#E5C365] font-semibold">Elephant & Wildlife Safaris</span>.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="w-8 h-8 rounded-full bg-[#2A241F] border border-[#C5A059]/30 flex items-center justify-center hover:text-[#C5A059] hover:border-[#C5A059] transition-colors" title="Website">
                <Globe className="w-4 h-4 text-[#E5C365]" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-[#2A241F] border border-[#C5A059]/30 flex items-center justify-center hover:text-[#C5A059] hover:border-[#C5A059] transition-colors" title="Share">
                <Share2 className="w-4 h-4 text-[#E5C365]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif-luxury text-base font-bold tracking-wide uppercase text-[#E5C365]">
              Navigation & Experiences
            </h4>
            <ul className="space-y-2 font-normal text-[#D5C9B8]">
              <li>
                <a href="#overview" className="hover:text-[#E5C365] transition-colors">Hotel Overview & Location</a>
              </li>
              <li>
                <a href="#adventures" className="hover:text-[#E5C365] transition-colors text-[#E5C365] font-semibold flex items-center gap-1">
                  <Compass className="w-3 h-3 text-[#C5A059]" /> Elephant & Wildlife Safaris
                </a>
              </li>
              <li>
                <a href="#rooms" className="hover:text-[#E5C365] transition-colors">Rooms & Suite Categories</a>
              </li>
              <li>
                <a href="#dining" className="hover:text-[#E5C365] transition-colors">Haldi Fine Dining Restaurant</a>
              </li>
              <li>
                <a href="#dining" className="hover:text-[#E5C365] transition-colors">Jhumka Rooftop Poolside Dining</a>
              </li>
              <li>
                <a href="#celebrations" className="hover:text-[#E5C365] transition-colors">Banquet Halls & Celebrations</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#E5C365] transition-colors">Photo Gallery (19 Photos)</a>
              </li>
            </ul>
          </div>

          {/* Safaris & Excursions Info */}
          <div className="space-y-3">
            <h4 className="font-serif-luxury text-base font-bold tracking-wide uppercase text-[#E5C365]">
              Local Excursions
            </h4>
            <div className="space-y-3 font-normal text-[#D5C9B8]">
              <div>
                <div className="text-[#FDFBF7] font-semibold text-xs">🐘 Elephant Village Experience</div>
                <div className="text-[#E5C365] text-[11px]">Amer, Jaipur</div>
                <div className="text-[10px] text-[#A89C8C]">Meeting, Feeding & Walking Interactions</div>
              </div>
              <div>
                <div className="text-[#FDFBF7] font-semibold text-xs">🐆 Jhalana Leopard Safari</div>
                <div className="text-[#E5C365] text-[11px]">Guided Wildlife Reserve</div>
                <div className="text-[10px] text-[#A89C8C]">Leopards, Deer & Bird Watching</div>
              </div>
              <div>
                <div className="text-[#FDFBF7] font-semibold text-xs">🐅 Nahargarh Lion Safari</div>
                <div className="text-[#E5C365] text-[11px]">720 Hectares Reserve</div>
                <div className="text-[10px] text-[#A89C8C]">50m from hotel entrance</div>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="font-serif-luxury text-base font-bold tracking-wide uppercase text-[#E5C365]">
              Location & Concierge
            </h4>
            <ul className="space-y-2.5 font-normal text-[#D5C9B8]">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span>
                  The TASEY Hotel, Amer, 50m from Nahargarh Zoological Park, Near Amber Fort, Jaipur, Rajasthan 302028
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a href="tel:+919876543210" className="hover:text-[#E5C365] transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a href="mailto:reservations@thetasey.com" className="hover:text-[#E5C365] transition-colors">reservations@thetasey.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-[11px] text-[#A89C8C] gap-4">
          <div>
            © {new Date().getFullYear()} <strong>The TASEY Hotel & Excursions, Amer, Jaipur</strong>. All Rights Reserved.
          </div>
          <div className="text-[#E5C365] font-semibold">
            Your Adventure. Our Assistance. Stay at The TASEY. Explore Amer, Jaipur.
          </div>
        </div>
      </div>
    </footer>
  );
}

