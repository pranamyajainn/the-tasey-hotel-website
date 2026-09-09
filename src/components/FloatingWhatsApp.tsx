"use client";

import { MessageCircle, Phone } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* Phone Call Pill */}
      <a
        href="tel:+919876543210"
        className="w-12 h-12 rounded-full bg-[#0b132b] text-[#d4af37] border border-[#d4af37]/40 shadow-2xl flex items-center justify-center hover:scale-110 transition-transform group"
        title="Call The Tasey Reception"
      >
        <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919876543210?text=Hello%20The%20Tasey,%20I%20would%20like%20to%20enquire%20about%20room%20availability%20and%20dining."
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-emerald-500 text-white shadow-2xl flex items-center justify-center hover:scale-110 transition-transform group animate-bounce duration-[3000ms]"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-white" />
      </a>
    </div>
  );
}
