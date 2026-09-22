"use client";

import { MessageCircle, Phone } from "lucide-react";
import { enquiryUrl, WHATSAPP_DISPLAY, WHATSAPP_NUMBER } from "@/lib/whatsapp";

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 print:hidden">
      {/* Phone Call Pill */}
      <a
        href={`tel:+${WHATSAPP_NUMBER}`}
        aria-label={`Call The Tasey Hotel reception on ${WHATSAPP_DISPLAY}`}
        className="w-12 h-12 rounded bg-[#011A51] text-[#A95A01] border border-[#A95A01]/40 flex items-center justify-center shadow-lg transition-colors hover:bg-[#012a7a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A95A01]"
      >
        <Phone className="w-5 h-5" aria-hidden="true" />
      </a>

      {/* WhatsApp Button */}
      <a
        href={enquiryUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with The Tasey Hotel on WhatsApp (opens in a new tab)"
        className="w-14 h-14 rounded bg-emerald-500 text-white flex items-center justify-center shadow-lg transition-colors hover:bg-emerald-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
      >
        <MessageCircle className="w-7 h-7 fill-white" aria-hidden="true" />
      </a>
    </div>
  );
}
