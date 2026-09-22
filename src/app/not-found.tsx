import Link from "next/link";
import type { Metadata } from "next";

import { WHATSAPP_DISPLAY, WHATSAPP_NUMBER } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#011A51] flex items-center justify-center px-6 py-20">
      <div className="max-w-md text-center">
        <p className="text-[14px] text-[#605A50]">Error 404</p>
        <h1 className="font-serif-luxury text-[32px] sm:text-[40px] mt-1 leading-[1.15]">
          We could not find that page
        </h1>
        <p className="text-[16px] leading-[1.6] text-[#605A50] mt-3">
          The link may be out of date. Everything about the hotel — rooms, dining,
          the rooftop pool and safaris — is on the main page.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
          <Link
            href="/"
            className="px-6 py-3 rounded bg-[#011A51] hover:bg-[#A95A01] text-white text-[16px] font-medium transition-colors"
          >
            Back to the hotel
          </Link>
          <a
            href={`tel:+${WHATSAPP_NUMBER}`}
            className="px-6 py-3 rounded border border-[#E5DCCB] text-[16px] text-[#605A50] hover:text-[#011A51] hover:bg-[#F8F3EA] transition-colors"
          >
            Call {WHATSAPP_DISPLAY}
          </a>
        </div>
      </div>
    </main>
  );
}
