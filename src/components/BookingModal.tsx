"use client";

import { useState, useEffect } from "react";
import { X, Calendar, Users, CheckCircle2, Phone, Sparkles, Copy, Check } from "lucide-react";

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
  const [category, setCategory] = useState("Luxury Room");
  const [checkIn, setCheckIn] = useState("2026-09-12");
  const [checkOut, setCheckOut] = useState("2026-09-14");
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
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-300">
      <div className="relative w-full max-w-2xl bg-[#FFFDF9] rounded-3xl border border-[#C5A059]/40 shadow-2xl overflow-hidden my-auto">
        {/* Modal Header */}
        <div className="p-6 bg-[#F8F3EA] border-b border-[#C5A059]/20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B88E36] p-0.5">
              <div className="w-full h-full bg-[#FFFDF9] rounded-full flex items-center justify-center text-[#1C1815] font-serif font-bold text-lg">
                T
              </div>
            </div>
            <div>
              <h3 className="font-serif-luxury text-xl font-bold text-[#1C1815]">
                The Tasey Reservation
              </h3>
              <p className="text-[11px] text-[#7A6E63] font-medium">
                Boutique Hotel & Restaurant • Aravali Hills, Jaipur
              </p>
            </div>
          </div>
          <button
            onClick={resetAndClose}
            className="p-2 rounded-full text-gray-500 hover:text-[#1C1815] hover:bg-black/5 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form or Confirmation View */}
        {!confirmed ? (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
            {/* Category Choice */}
            <div>
              <label className="text-xs uppercase font-bold tracking-wider text-[#1C1815] block mb-2">
                Select Reservation Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-[#F8F3EA] border border-[#C5A059]/30 rounded-xl px-4 py-3 text-sm text-[#1C1815] font-semibold focus:outline-none focus:border-[#B88E36] cursor-pointer"
              >
                <option value="Luxury Room">Luxury Room (₹5,499/night)</option>
                <option value="Executive Room">Executive Room (₹7,999/night)</option>
                <option value="Suite Room">Suite Room (₹12,999/night)</option>
                <option value="Haldi Restaurant">Haldi Indoor Fine Dining</option>
                <option value="Jhumka Rooftop Pool">Jhumka Rooftop Poolside Dining</option>
                <option value="Banquet Event">Banquet Hall & Event Host</option>
              </select>
            </div>

            {/* Dates & Guests */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="text-xs uppercase font-semibold tracking-wider text-[#6E645A] block mb-1.5 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#B88E36]" />
                  Check-In / Date
                </label>
                <input
                  type="date"
                  required
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full bg-[#F8F3EA] border border-[#C5A059]/25 rounded-xl px-3 py-2.5 text-xs text-[#1C1815] font-medium focus:outline-none focus:border-[#B88E36]"
                />
              </div>

              <div>
                <label className="text-xs uppercase font-semibold tracking-wider text-[#6E645A] block mb-1.5 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#B88E36]" />
                  Check-Out Date
                </label>
                <input
                  type="date"
                  required
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full bg-[#F8F3EA] border border-[#C5A059]/25 rounded-xl px-3 py-2.5 text-xs text-[#1C1815] font-medium focus:outline-none focus:border-[#B88E36]"
                />
              </div>

              <div>
                <label className="text-xs uppercase font-semibold tracking-wider text-[#6E645A] block mb-1.5 flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-[#B88E36]" />
                  Guest Count
                </label>
                <select
                  value={guestsCount}
                  onChange={(e) => setGuestsCount(e.target.value)}
                  className="w-full bg-[#F8F3EA] border border-[#C5A059]/25 rounded-xl px-3 py-2.5 text-xs text-[#1C1815] font-medium focus:outline-none focus:border-[#B88E36] cursor-pointer"
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
            <div className="space-y-4 pt-2 border-t border-[#C5A059]/20">
              <h4 className="text-xs uppercase font-bold tracking-wider text-[#1C1815]">
                Primary Guest Information
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-[#5C5046] block mb-1 font-medium">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-[#F8F3EA] border border-[#C5A059]/25 rounded-xl px-3 py-2.5 text-xs text-[#1C1815] font-medium focus:outline-none focus:border-[#B88E36]"
                  />
                </div>

                <div>
                  <label className="text-xs text-[#5C5046] block mb-1 font-medium">Phone Number (WhatsApp) *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#F8F3EA] border border-[#C5A059]/25 rounded-xl px-3 py-2.5 text-xs text-[#1C1815] font-medium focus:outline-none focus:border-[#B88E36]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-[#5C5046] block mb-1 font-medium">Email Address</label>
                <input
                  type="email"
                  placeholder="rahul@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#F8F3EA] border border-[#C5A059]/25 rounded-xl px-3 py-2.5 text-xs text-[#1C1815] font-medium focus:outline-none focus:border-[#B88E36]"
                />
              </div>

              <div>
                <label className="text-xs text-[#5C5046] block mb-1 font-medium">Special Requests & Preferences</label>
                <textarea
                  rows={2}
                  placeholder="e.g., High-floor hill view, candlelit anniversary table at Jhumka..."
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  className="w-full bg-[#F8F3EA] border border-[#C5A059]/25 rounded-xl px-3 py-2.5 text-xs text-[#1C1815] font-medium focus:outline-none focus:border-[#B88E36] resize-none"
                />
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-4 border-t border-[#C5A059]/20 flex items-center gap-3">
              <button
                type="button"
                onClick={resetAndClose}
                className="px-5 py-3 rounded-xl border border-gray-300 text-xs text-[#5C5046] hover:text-[#1C1815] font-semibold"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 py-3.5 rounded-xl bg-[#1C1815] text-[#FFFDF9] font-bold text-xs sm:text-sm tracking-wider uppercase shadow-md hover:bg-[#B88E36] hover:text-white transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-[#C5A059]" />
                Confirm Reservation Request
              </button>
            </div>
          </form>
        ) : (
          /* Confirmation Receipt View */
          <div className="p-8 text-center space-y-6 animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-[#F8F3EA] border border-[#C5A059]/40 p-1 mx-auto shadow-md">
              <div className="w-full h-full bg-[#B88E36] rounded-full flex items-center justify-center text-white">
                <CheckCircle2 className="w-9 h-9" />
              </div>
            </div>

            <div>
              <span className="text-xs uppercase tracking-widest text-[#B88E36] font-bold">
                Reservation Request Confirmed
              </span>
              <h3 className="font-serif-luxury text-3xl font-bold text-[#1C1815] mt-1">
                We Look Forward to Welcoming You!
              </h3>
              <p className="text-xs text-[#5C5046] font-normal mt-2 max-w-md mx-auto">
                Thank you, <strong className="text-[#1C1815]">{fullName}</strong>. Your reservation request for <strong className="text-[#B88E36]">{category}</strong> has been logged with our royal desk.
              </p>
            </div>

            {/* Booking Reference Card */}
            <div className="bg-[#F8F3EA] p-6 rounded-2xl border border-[#C5A059]/40 max-w-md mx-auto text-left space-y-3 shadow-inner">
              <div className="flex justify-between items-center pb-3 border-b border-[#C5A059]/20">
                <span className="text-xs text-[#7A6E63] uppercase tracking-wider font-semibold">Reference ID</span>
                <button
                  onClick={handleCopyId}
                  className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#9E7B32] hover:underline"
                >
                  <span>{bookingId}</span>
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-[#B88E36]" />}
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-[#7A6E63] block text-[10px]">Category</span>
                  <span className="text-[#1C1815] font-bold">{category}</span>
                </div>
                <div>
                  <span className="text-[#7A6E63] block text-[10px]">Guests</span>
                  <span className="text-[#1C1815] font-bold">{guestsCount}</span>
                </div>
                <div>
                  <span className="text-[#7A6E63] block text-[10px]">Check-In / Date</span>
                  <span className="text-[#1C1815] font-bold">{checkIn}</span>
                </div>
                <div>
                  <span className="text-[#7A6E63] block text-[10px]">Check-Out</span>
                  <span className="text-[#1C1815] font-bold">{checkOut}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
              <a
                href={`https://wa.me/919876543210?text=Hello%20The%20Tasey,%20I%20have%20submitted%20a%20reservation%20request%20with%20ID%20${bookingId}%20for%20${encodeURIComponent(category)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider shadow-md flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Connect on WhatsApp
              </a>
              <button
                onClick={resetAndClose}
                className="px-6 py-3 rounded-xl bg-[#1C1815] hover:bg-[#B88E36] text-[#FFFDF9] font-bold text-xs uppercase tracking-wider transition-colors"
              >
                Close & Return
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
