"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, AtSign, Share2, Check } from "lucide-react";

import { GOOGLE_LISTING_URL, GOOGLE_REVIEW_URL, HOTEL, HOTEL_MAP_URL } from "@/lib/site";

export default function Footer() {
  const [linkCopied, setLinkCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: "The Tasey Hotel, Amer, Jaipur",
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

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#011A51] text-[#FDFBF7] pt-16 pb-12 text-[16px] border-t border-[#0B2A6B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#0B2A6B]">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" onClick={scrollToTop} className="flex items-center gap-3">
              <Image src="/logo.png" alt="The Tasey Hotel" width={36} height={36} className="object-contain" />
              <span className="font-serif-luxury text-[20px] tracking-wide text-[#FDFBF7]">
                The Tasey
              </span>
            </Link>

            <p className="text-[16px] leading-[1.6] text-[#D5C9B8]">
              The Tasey Hotel is in Amer, Jaipur, with rooms, Haldi restaurant, Jhumka rooftop pool, event spaces, and nearby safaris.
            </p>

            <button
              type="button"
              onClick={handleShare}
              className="text-[16px] text-[#D5C9B8] hover:text-[#FFC76B] transition-colors inline-flex items-center gap-1.5"
            >
              {linkCopied ? <Check className="w-4 h-4" /> : <Share2 className="w-4 h-4" />}
              {linkCopied ? "Link copied" : "Share this page"}
            </button>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="font-serif-luxury text-[16px] text-[#FDFBF7]">
              Navigation and experiences
            </h3>
            <ul className="space-y-2 text-[#D5C9B8]">
              <li>
                <a href="#overview" className="hover:text-[#FFC76B] transition-colors">Hotel overview and location</a>
              </li>
              <li>
                <a href="#adventures" className="hover:text-[#FFC76B] transition-colors">Nearby excursions</a>
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
            <h3 className="font-serif-luxury text-[16px] text-[#FDFBF7]">
              Local excursions
            </h3>
            <ul className="space-y-3 text-[#D5C9B8]">
              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Elephant+Village+Amer+Jaipur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FFC76B] transition-colors"
                >
                  Elephant Village Amer, Amer, Jaipur.
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Jhalana+Leopard+Safari+Jaipur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FFC76B] transition-colors"
                >
                  Jhalana Leopard Safari. Guided wildlife reserve.
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Nahargarh+Biological+Park+Jaipur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FFC76B] transition-colors"
                >
                  Nahargarh Lion Safari, 720 hectare reserve, 50 m from hotel entrance.
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h3 className="font-serif-luxury text-[16px] text-[#FDFBF7]">
              Location and concierge
            </h3>
            <ul className="space-y-2.5 text-[#D5C9B8]">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span>
                  {HOTEL.name}, {HOTEL.street}, {HOTEL.locality}, {HOTEL.region} {HOTEL.postalCode}
                  <a
                    href={HOTEL_MAP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block underline underline-offset-4 hover:text-[#FFC76B] transition-colors"
                  >
                    View hotel location on Google Maps
                  </a>
                  <a
                    href={GOOGLE_LISTING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block underline underline-offset-4 hover:text-[#FFC76B] transition-colors"
                  >
                    Reviews and directions on Google
                  </a>
                  <a
                    href={GOOGLE_REVIEW_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block underline underline-offset-4 hover:text-[#FFC76B] transition-colors"
                  >
                    Review us on Google
                  </a>
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" />
                <span>
                  <a href="tel:+917073873670" className="hover:text-[#FFC76B] transition-colors">+91 70738 73670</a>
                  {" / "}
                  <a href="tel:+919145824248" className="hover:text-[#FFC76B] transition-colors">+91 91458 24248</a>
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0" />
                <a href="mailto:thetaseyhotel@gmail.com" className="hover:text-[#FFC76B] transition-colors">thetaseyhotel@gmail.com</a>
              </li>
              <li className="flex items-center gap-2">
                <AtSign className="w-4 h-4 shrink-0" />
                <a
                  href={HOTEL.sameAs[0]}
                  target="_blank"
                  rel="noopener noreferrer me"
                  className="hover:text-[#FFC76B] transition-colors"
                >
                  Instagram: {HOTEL.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-[14px] text-[#A89C8C] gap-4">
          <div>
            &copy; {new Date().getFullYear()} The Tasey Hotel, Amer, Jaipur. All rights reserved.
          </div>
          <div className="text-[#D5C9B8]">
            Stay at The Tasey. Explore Amer, Jaipur.
          </div>
        </div>

        <p className="mt-3 text-[14px] text-[#3B5278] text-center sm:text-left leading-normal">
          Landmark &amp; wildlife imagery via Wikimedia Commons contributors (CC BY-SA): Amber Fort (Aparna Mandal), Jal Mahal (Felixfelicis), Nahargarh (Tuhina1234), Asiatic Lion (Bernard Gagnon), Leopard (Genie.prinks). Elephant photo via Pexels.
        </p>

        <p className="mt-1 text-[14px] text-[#3B5278] text-center sm:text-left leading-normal">
          Made by{" "}
          <a
            href="https://sahajta.com"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="hover:text-[#FFC76B] transition-colors"
          >
            Sahajta AI
          </a>
        </p>
      </div>
    </footer>
  );
}
