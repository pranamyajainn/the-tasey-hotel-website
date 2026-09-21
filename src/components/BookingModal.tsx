"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, CheckCircle2, Phone, Copy, Check } from "lucide-react";

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
  const [category, setCategory] = useState("Executive Room");
  const [checkIn, setCheckIn] = useState("2026-09-20");
  const [checkOut, setCheckOut] = useState("2026-09-22");
  const [guestsCount, setGuestsCount] = useState("2 Guests");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [bookingId, setBookingId] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialData?.category) setCategory(initialData.category);
    if (initialData?.checkIn) setCheckIn(initialData.checkIn);
    if (initialData?.checkOut) setCheckOut(initialData.checkOut);
    if (initialData?.guests) setGuestsCount(initialData.guests);
  }, [initialData]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;
    const generatedId = "TASEY-" + Math.floor(100000 + Math.random() * 900000);
    setBookingId(generatedId);
    setConfirmed(true);
  };

  const handleCopyId = () => {
    navigator.clipboard.writeText(bookingId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const resetAndClose = () => {
    setConfirmed(false);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      <div className="relative w-full max-w-2xl bg-[#FFFDF9] rounded border border-[#E5DCCB] overflow-hidden my-auto text-[#011A51]">
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
              <label className="text-[14px] text-[#605A50] block mb-2">
                Select experience or room
              </label>
              <select
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
                <label className="text-[14px] text-[#605A50] block mb-1.5">
                  Check-in date
                </label>
                <input
                  type="date"
                  required
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full bg-[#F8F3EA] border border-[#E5DCCB] rounded px-3 py-2.5 text-[16px] text-[#011A51] focus:outline-none focus:border-[#A95A01]"
                />
              </div>

              <div>
                <label className="text-[14px] text-[#605A50] block mb-1.5">
                  Check-out date
                </label>
                <input
                  type="date"
                  required
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full bg-[#F8F3EA] border border-[#E5DCCB] rounded px-3 py-2.5 text-[16px] text-[#011A51] focus:outline-none focus:border-[#A95A01]"
                />
              </div>

              <div>
                <label className="text-[14px] text-[#605A50] block mb-1.5">
                  Guest count
                </label>
                <select
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
                  <label className="text-[14px] text-[#605A50] block mb-1">Full name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-[#F8F3EA] border border-[#E5DCCB] rounded px-3 py-2.5 text-[16px] text-[#011A51] focus:outline-none focus:border-[#A95A01]"
                  />
                </div>

                <div>
                  <label className="text-[14px] text-[#605A50] block mb-1">Phone number (WhatsApp) *</label>
                  <input
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
                <label className="text-[14px] text-[#605A50] block mb-1">Email address</label>
                <input
                  type="email"
                  placeholder="rahul@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#F8F3EA] border border-[#E5DCCB] rounded px-3 py-2.5 text-[16px] text-[#011A51] focus:outline-none focus:border-[#A95A01]"
                />
              </div>

              <div>
                <label className="text-[14px] text-[#605A50] block mb-1">Special requests and excursion preferences</label>
                <textarea
                  rows={2}
                  placeholder="e.g., Elephant feeding slot preference, high-floor hill view room..."
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  className="w-full bg-[#F8F3EA] border border-[#E5DCCB] rounded px-3 py-2.5 text-[16px] text-[#011A51] focus:outline-none focus:border-[#A95A01] resize-none"
                />
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-4 border-t border-[#E5DCCB] flex items-center gap-3">
              <button
                type="button"
                onClick={resetAndClose}
                className="px-5 py-3 rounded border border-[#E5DCCB] text-[16px] text-[#605A50] hover:text-[#011A51] hover:bg-[#F8F3EA]"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 py-3.5 rounded bg-[#A95A01] hover:bg-[#8C4A00] text-white text-[16px] font-medium transition-colors"
              >
                Confirm reservation request
              </button>
            </div>
          </form>
        ) : (
          /* Confirmation Receipt View */
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded bg-[#011A51] flex items-center justify-center text-white mx-auto">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div>
              <span className="text-[14px] text-[#605A50]">
                Reservation request received
              </span>
              <h3 className="font-serif-luxury text-[28px] text-[#011A51] mt-1">
                We look forward to your stay
              </h3>
              <p className="text-[16px] leading-[1.6] text-[#605A50] mt-2 max-w-md mx-auto">
                Thank you, <strong className="text-[#011A51]">{fullName}</strong>. Your reservation request for <strong className="text-[#011A51]">{category}</strong> has been received. This is not a confirmed booking yet. Our reservations desk will call or email you at the details you provided to confirm availability, usually within 24 hours.
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
                <div>
                  <span className="text-[#605A50] block text-[14px]">Check-in date</span>
                  <span className="text-[#011A51]">{checkIn}</span>
                </div>
                <div>
                  <span className="text-[#605A50] block text-[14px]">Check-out</span>
                  <span className="text-[#011A51]">{checkOut}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
              <a
                href={`https://wa.me/917073873670?text=Hello%20The%20TASEY,%20I%20have%20submitted%20a%20reservation%20request%20with%20ID%20${bookingId}%20for%20${encodeURIComponent(category)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded bg-emerald-600 hover:bg-emerald-700 text-white text-[16px] font-medium flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Connect on WhatsApp
              </a>
              <button
                onClick={resetAndClose}
                className="px-6 py-3 rounded bg-[#F8F3EA] hover:bg-[#A95A01] hover:text-white text-[#011A51] text-[16px] font-medium transition-colors border border-[#A95A01]/40"
              >
                Close and return
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
