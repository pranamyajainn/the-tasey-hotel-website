"use client";

import { MessageCircle, Phone } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* Phone Call Pill */}
      <a
        href="tel:+917073873670"
        className="w-12 h-12 rounded bg-[#011A51] text-[#A95A01] border border-[#A95A01]/40 flex items-center justify-center"
        title="Call The Tasey Reception"
      >
        <Phone className="w-5 h-5" />
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/917073873670?text=Hello%20The%20Tasey,%20I%20would%20like%20to%20enquire%20about%20room%20availability%20and%20dining."
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded bg-emerald-500 text-white flex items-center justify-center"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-white" />
      </a>
    </div>
  );
}
