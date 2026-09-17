"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Share2, Check, Compass } from "lucide-react";

export default function Footer() {
  const [linkCopied, setLinkCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: "The TASEY Hotel & Excursions, Amer",
      url: window.location.href,
    };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // user cancelled the share sheet
      }
      return;
    }
    await navigator.clipboard.writeText(shareData.url);
    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), 2000);
  };

  return (
    <footer className="bg-[#011A51] text-[#FDFBF7] pt-16 pb-12 text-xs relative overflow-hidden border-t border-[#A95A01]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#A95A01]/20">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-[#A95A01] via-[#A95A01] to-[#A95A01] p-0.5 shadow-md">
                <div className="w-full h-full bg-[#011A51] rounded-full flex items-center justify-center p-1">
                  <Image src="/logo.png" alt="The TASEY Hotel" width={40} height={40} className="object-contain" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-serif-luxury text-2xl font-bold tracking-wider text-[#FDFBF7]">
                  THE TASEY
                </span>
                <span className="text-[9px] tracking-[0.2em] text-[#FFC76B] uppercase font-bold">
                  Hotel and excursions, Amer
                </span>
              </div>
            </Link>

            <p className="text-[#D5C9B8] font-normal leading-relaxed">
              The Tasey Hotel is in Amer, Jaipur, with rooms, Haldi restaurant, Jhumka rooftop pool, event spaces, and nearby safaris.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <button
                type="button"
                onClick={handleShare}
                className="w-8 h-8 rounded-full bg-[#0B2A6B] border border-[#A95A01]/30 flex items-center justify-center hover:text-[#A95A01] hover:border-[#A95A01] transition-colors"
                title={linkCopied ? "Link copied" : "Share this page"}
              >
                {linkCopied ? (
                  <Check className="w-4 h-4 text-[#FFC76B]" />
                ) : (
                  <Share2 className="w-4 h-4 text-[#FFC76B]" />
                )}
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif-luxury text-base font-bold tracking-wide uppercase text-[#FFC76B]">
              Navigation & Experiences
            </h4>
            <ul className="space-y-2 font-normal text-[#D5C9B8]">
              <li>
                <a href="#overview" className="hover:text-[#FFC76B] transition-colors">Hotel Overview & Location</a>
              </li>
              <li>
                <a href="#adventures" className="hover:text-[#FFC76B] transition-colors text-[#FFC76B] font-semibold flex items-center gap-1">
                  <Compass className="w-3 h-3 text-[#A95A01]" /> Nearby excursions
                </a>
              </li>
              <li>
                <a href="#rooms" className="hover:text-[#FFC76B] transition-colors">Rooms and suites</a>
              </li>
              <li>
                <a href="#dining" className="hover:text-[#FFC76B] transition-colors">Haldi restaurant</a>
              </li>
              <li>
                <a href="#dining" className="hover:text-[#FFC76B] transition-colors">Jhumka rooftop pool</a>
              </li>
              <li>
                <a href="#celebrations" className="hover:text-[#FFC76B] transition-colors">Banquet halls and celebrations</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#FFC76B] transition-colors">Photo gallery</a>
              </li>
            </ul>
          </div>

          {/* Safaris & Excursions Info */}
          <div className="space-y-3">
            <h4 className="font-serif-luxury text-base font-bold tracking-wide uppercase text-[#FFC76B]">
              Local Excursions
            </h4>
            <div className="space-y-3 font-normal text-[#D5C9B8]">
              <div>
                <div className="text-[#FDFBF7] font-semibold text-xs">Elephant Village Amer</div>
                <div className="text-[#FFC76B] text-[11px]">Amer, Jaipur</div>
                <div className="text-[10px] text-[#A89C8C]">Painted elephant rides</div>
              </div>
              <div>
                <div className="text-[#FDFBF7] font-semibold text-xs">Jhalana Leopard Safari</div>
                <div className="text-[#FFC76B] text-[11px]">Guided Wildlife Reserve</div>
                <div className="text-[10px] text-[#A89C8C]">Leopards, Deer & Bird Watching</div>
              </div>
              <div>
                <div className="text-[#FDFBF7] font-semibold text-xs">Nahargarh Lion Safari</div>
                <div className="text-[#FFC76B] text-[11px]">720 Hectares Reserve</div>
                <div className="text-[10px] text-[#A89C8C]">50 m from hotel entrance</div>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="font-serif-luxury text-base font-bold tracking-wide uppercase text-[#FFC76B]">
              Location & Concierge
            </h4>
            <ul className="space-y-2.5 font-normal text-[#D5C9B8]">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#A95A01] shrink-0 mt-0.5" />
                <span>
                  The Tasey Hotel, Amer, 50 m from Nahargarh Biological Park, near Amber Fort, Jaipur
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#A95A01] shrink-0" />
                <a href="tel:+919876543210" className="hover:text-[#FFC76B] transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#A95A01] shrink-0" />
                <a href="mailto:reservations@thetasey.com" className="hover:text-[#FFC76B] transition-colors">reservations@thetasey.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-[11px] text-[#A89C8C] gap-4">
          <div>
            © {new Date().getFullYear()} <strong>The TASEY Hotel & Excursions, Amer, Jaipur</strong>. All Rights Reserved.
          </div>
          <div className="text-[#FFC76B] font-semibold">
            Stay at The Tasey. Explore Amer, Jaipur.
          </div>
        </div>
      </div>
    </footer>
  );
}

