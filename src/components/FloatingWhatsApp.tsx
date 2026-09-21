"use client";

import { MessageCircle, Phone } from "lucide-react";
import { enquiryUrl, WHATSAPP_NUMBER } from "@/lib/whatsapp";

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* Phone Call Pill */}
      <a
        href={`tel:+${WHATSAPP_NUMBER}`}
        className="w-12 h-12 rounded bg-[#011A51] text-[#A95A01] border border-[#A95A01]/40 flex items-center justify-center"
        title="Call The Tasey Reception"
      >
        <Phone className="w-5 h-5" />
      </a>

      {/* WhatsApp Button */}
      <a
        href={enquiryUrl()}
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
