"use client";

import { useEffect } from "react";

import { WHATSAPP_DISPLAY, WHATSAPP_NUMBER } from "@/lib/whatsapp";

/**
 * Route-level error boundary. Without this a render error drops the visitor on
 * the default Next.js error screen with no way back and no way to reach the
 * hotel — which, for a page whose whole job is taking bookings, loses the guest.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Unhandled page error:", error);
  }, [error]);

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#011A51] flex items-center justify-center px-6 py-20">
      <div className="max-w-md text-center">
        <p className="text-[14px] text-[#605A50]">Something went wrong</p>
        <h1 className="font-serif-luxury text-[32px] sm:text-[40px] mt-1 leading-[1.15]">
          This page did not load
        </h1>
        <p className="text-[16px] leading-[1.6] text-[#605A50] mt-3">
          Please try again. If it keeps happening, message or call the reservations
          desk directly and we will take your booking over the phone.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
          <button
            onClick={reset}
            className="px-6 py-3 rounded bg-[#011A51] hover:bg-[#A95A01] text-white text-[16px] font-medium transition-colors"
          >
            Try again
          </button>
          <a
            href={`tel:+${WHATSAPP_NUMBER}`}
            className="px-6 py-3 rounded border border-[#E5DCCB] text-[16px] text-[#605A50] hover:text-[#011A51] hover:bg-[#F8F3EA] transition-colors"
          >
            Call {WHATSAPP_DISPLAY}
          </a>
        </div>

        {error.digest ? (
          <p className="mt-6 text-[14px] text-[#605A50] font-mono">Reference: {error.digest}</p>
        ) : null}
      </div>
    </main>
  );
}
