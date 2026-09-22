"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { X, MessageCircle, Copy, Check } from "lucide-react";
import {
  buildBookingMessage,
  buildWhatsAppUrl,
  categoryKind,
  isoDaysFromToday,
  WHATSAPP_DISPLAY,
} from "@/lib/whatsapp";
import { useDialogA11y } from "@/lib/useDialogA11y";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: {
    category?: string;
    checkIn?: string;
    checkOut?: string;
    guests?: string;
  };
}

export default function BookingModal({ isOpen, onClose, initialData }: BookingModalProps) {
  // Seeded straight from the props. The parent gives this component a fresh
  // key each time the modal is opened, so it remounts and these initialisers
  // run again — which is why no effect is needed to copy props into state, and
  // why every guest starts from a clean form rather than the last one's details.
  const [category, setCategory] = useState(initialData?.category ?? "Executive Room");
  // Relative to today, rather than a hardcoded date that goes stale and sends
  // the desk requests for dates already in the past.
  const [checkIn, setCheckIn] = useState(() => initialData?.checkIn ?? isoDaysFromToday(1));
  const [checkOut, setCheckOut] = useState(() => initialData?.checkOut ?? isoDaysFromToday(3));
  const [guestsCount, setGuestsCount] = useState(initialData?.guests ?? "2 Guests");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [bookingId, setBookingId] = useState("");
  const [whatsAppUrl, setWhatsAppUrl] = useState("");
  const [copied, setCopied] = useState(false);

  const dialogRef = useRef<HTMLDivElement>(null);

  const resetAndClose = () => {
    setConfirmed(false);
    setWhatsAppUrl("");
    onClose();
  };

  useDialogA11y(isOpen, resetAndClose, dialogRef);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;

    const generatedId = "TASEY-" + Math.floor(100000 + Math.random() * 900000);
    const url = buildWhatsAppUrl(
      buildBookingMessage({
        reference: generatedId,
        category,
        checkIn,
        checkOut,
        guests: guestsCount,
        fullName,
        phone,
        email,
        specialRequests,
      }),
    );

    setBookingId(generatedId);
    setWhatsAppUrl(url);
    // Opened inside the submit gesture so the browser treats it as user-initiated.
    // If a popup blocker still eats it, the hand-off screen repeats the link.
    window.open(url, "_blank", "noopener,noreferrer");
    setConfirmed(true);
  };

  const handleCopyId = () => {
    navigator.clipboard.writeText(bookingId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) resetAndClose();
      }}
      className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      <div ref={dialogRef} className="relative w-full max-w-2xl bg-[#FFFDF9] rounded border border-[#E5DCCB] overflow-hidden my-auto text-[#011A51]">
        {/* Modal Header */}
        <div className="p-6 bg-[#F8F3EA] border-b border-[#E5DCCB] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="The Tasey logo" width={32} height={32} className="object-contain" />
            <div>
              <h3 id="booking-modal-title" className="font-serif-luxury text-[20px] text-[#011A51]">
                The Tasey Hotel booking desk
              </h3>
              <p className="text-[14px] text-[#605A50]">
                Amer, Jaipur, stay and excursions reservation
              </p>
            </div>
          </div>
          <button
            onClick={resetAndClose}
            aria-label="Close booking dialog"
            className="p-2 rounded text-[#605A50] hover:text-[#011A51] hover:bg-[#E5DCCB]/50 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form or Confirmation View */}
        {!confirmed ? (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
            {/* Category Choice */}
            <div>
              <label htmlFor="bk-category" className="text-[14px] text-[#605A50] block mb-2">
                Select experience or room
              </label>
              <select
                id="bk-category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-[#F8F3EA] border border-[#E5DCCB] rounded px-4 py-3 text-[16px] text-[#011A51] focus:outline-none focus:border-[#A95A01] cursor-pointer"
              >
                <option value="Executive Room">Executive Room (₹2,900/night)</option>
                <option value="Luxury Room">Luxury Room (₹3,800/night)</option>
                <option value="Suite Room">Suite Room (₹5,400/night)</option>
                <option value="Elephant Village Excursion">Elephant Village Interaction</option>
                <option value="Jhalana Leopard Safari">Jhalana Leopard Safari</option>
                <option value="Nahargarh Lion Safari">Nahargarh Lion Safari</option>
                <option value="Haldi Restaurant">Haldi indoor restaurant</option>
                <option value="Jhumka Rooftop Pool">Jhumka rooftop pool dining</option>
                <option value="Banquet Event">Banquet hall and event</option>
                <option value="Custom Excursion Request">Custom day tour and transport</option>
              </select>
            </div>

            {/* Dates & Guests */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label htmlFor="bk-checkin" className="text-[14px] text-[#605A50] block mb-1.5">
                  Check-in date
                </label>
                <input
                  id="bk-checkin"
                  type="date"
                  required
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full bg-[#F8F3EA] border border-[#E5DCCB] rounded px-3 py-2.5 text-[16px] text-[#011A51] focus:outline-none focus:border-[#A95A01]"
                />
              </div>

              <div>
                <label htmlFor="bk-checkout" className="text-[14px] text-[#605A50] block mb-1.5">
                  Check-out date
                </label>
                <input
                  id="bk-checkout"
                  type="date"
                  required
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full bg-[#F8F3EA] border border-[#E5DCCB] rounded px-3 py-2.5 text-[16px] text-[#011A51] focus:outline-none focus:border-[#A95A01]"
                />
              </div>

              <div>
                <label htmlFor="bk-guests" className="text-[14px] text-[#605A50] block mb-1.5">
                  Guest count
                </label>
                <select
                  id="bk-guests"
                  value={guestsCount}
                  onChange={(e) => setGuestsCount(e.target.value)}
                  className="w-full bg-[#F8F3EA] border border-[#E5DCCB] rounded px-3 py-2.5 text-[16px] text-[#011A51] focus:outline-none focus:border-[#A95A01] cursor-pointer"
                >
                  <option value="1 Guest">1 Guest</option>
                  <option value="2 Guests">2 Guests</option>
                  <option value="3 Guests">3 Guests</option>
                  <option value="4+ Guests">4+ Guests / Family</option>
                  <option value="Group Event">Group Event (15+)</option>
                </select>
              </div>
            </div>

            {/* Guest Personal Contact Info */}
            <div className="space-y-4 pt-2 border-t border-[#E5DCCB]">
              <h4 className="text-[16px] text-[#011A51]">
                Primary guest information
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="bk-name" className="text-[14px] text-[#605A50] block mb-1">Full name *</label>
                  <input
                    id="bk-name"
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-[#F8F3EA] border border-[#E5DCCB] rounded px-3 py-2.5 text-[16px] text-[#011A51] focus:outline-none focus:border-[#A95A01]"
                  />
                </div>

                <div>
                  <label htmlFor="bk-phone" className="text-[14px] text-[#605A50] block mb-1">Phone number (WhatsApp) *</label>
                  <input
                    id="bk-phone"
                    type="tel"
                    required
                    placeholder="+91 70738 73670"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#F8F3EA] border border-[#E5DCCB] rounded px-3 py-2.5 text-[16px] text-[#011A51] focus:outline-none focus:border-[#A95A01]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="bk-email" className="text-[14px] text-[#605A50] block mb-1">Email address</label>
                <input
                  id="bk-email"
                  type="email"
                  placeholder="rahul@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#F8F3EA] border border-[#E5DCCB] rounded px-3 py-2.5 text-[16px] text-[#011A51] focus:outline-none focus:border-[#A95A01]"
                />
              </div>

              <div>
                <label htmlFor="bk-requests" className="text-[14px] text-[#605A50] block mb-1">Special requests and excursion preferences</label>
                <textarea
                  id="bk-requests"
                  rows={2}
                  placeholder="e.g., Elephant feeding slot preference, high-floor hill view room..."
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  className="w-full bg-[#F8F3EA] border border-[#E5DCCB] rounded px-3 py-2.5 text-[16px] text-[#011A51] focus:outline-none focus:border-[#A95A01] resize-none"
                />
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-4 border-t border-[#E5DCCB] space-y-3">
              <p className="text-[14px] text-[#605A50]">
                This opens WhatsApp with your request already written out. You review it and press Send — nothing is reserved until you do.
              </p>
              <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={resetAndClose}
                className="px-5 py-3 rounded border border-[#E5DCCB] text-[16px] text-[#605A50] hover:text-[#011A51] hover:bg-[#F8F3EA]"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 py-3.5 rounded bg-emerald-600 hover:bg-emerald-700 text-white text-[16px] font-medium transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Send request on WhatsApp
              </button>
              </div>
            </div>
          </form>
        ) : (
          /* WhatsApp hand-off view */
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded bg-emerald-600 flex items-center justify-center text-white mx-auto">
              <MessageCircle className="w-9 h-9" />
            </div>

            <div>
              <span className="text-[14px] text-[#605A50]">
                One last step
              </span>
              <h3 className="font-serif-luxury text-[28px] text-[#011A51] mt-1">
                Press Send in WhatsApp
              </h3>
              <p className="text-[16px] leading-[1.6] text-[#605A50] mt-2 max-w-md mx-auto">
                Thank you, <strong className="text-[#011A51]">{fullName}</strong>. WhatsApp should have opened with your request for{" "}
                <strong className="text-[#011A51]">{category}</strong> already written out.{" "}
                <strong className="text-[#011A51]">Your request only reaches us once you press Send there.</strong>{" "}
                Our reservations desk replies on the same chat, usually within a few hours.
              </p>
            </div>

            {/* Booking Reference */}
            <div className="bg-[#F8F3EA] p-6 rounded border border-[#E5DCCB] max-w-md mx-auto text-left space-y-3">
              <div className="flex justify-between items-center pb-3 border-b border-[#E5DCCB]">
                <span className="text-[14px] text-[#605A50]">Reference ID</span>
                <button
                  onClick={handleCopyId}
                  className="flex items-center gap-1.5 text-[16px] font-mono text-[#A95A01] hover:underline"
                >
                  <span>{bookingId}</span>
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3 text-[16px]">
                <div>
                  <span className="text-[#605A50] block text-[14px]">Category</span>
                  <span className="text-[#011A51]">{category}</span>
                </div>
                <div>
                  <span className="text-[#605A50] block text-[14px]">Guests</span>
                  <span className="text-[#011A51]">{guestsCount}</span>
                </div>
                {categoryKind(category) === "room" ? (
                  <>
                    <div>
                      <span className="text-[#605A50] block text-[14px]">Check-in date</span>
                      <span className="text-[#011A51]">{checkIn}</span>
                    </div>
                    <div>
                      <span className="text-[#605A50] block text-[14px]">Check-out</span>
                      <span className="text-[#011A51]">{checkOut}</span>
                    </div>
                  </>
                ) : (
                  <div>
                    <span className="text-[#605A50] block text-[14px]">Date</span>
                    <span className="text-[#011A51]">{checkIn}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded bg-emerald-600 hover:bg-emerald-700 text-white text-[16px] font-medium flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Open WhatsApp
              </a>
              <button
                onClick={resetAndClose}
                className="px-6 py-3 rounded bg-[#F8F3EA] hover:bg-[#A95A01] hover:text-white text-[#011A51] text-[16px] font-medium transition-colors border border-[#A95A01]/40"
              >
                Close and return
              </button>
            </div>

            <p className="text-[14px] text-[#605A50] pt-1">
              WhatsApp did not open? Use the button above, or message us directly at{" "}
              <span className="text-[#011A51] whitespace-nowrap">{WHATSAPP_DISPLAY}</span>.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
