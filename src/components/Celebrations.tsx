"use client";

import Image from "next/image";
import { PartyPopper, Sparkles, Calendar } from "lucide-react";

interface CelebrationsProps {
  onOpenBooking: (category: string) => void;
}

export default function Celebrations({ onOpenBooking }: CelebrationsProps) {
  const halls = [
    {
      title: "Grand Amber Banquet Hall",
      capacity: "Up to 250 Guests",
      idealFor: "Weddings, Gala Receptions & Royal Celebrations",
      desc: "Opulent high-ceiling hall decorated with crystal chandeliers, acoustic soundproofing, custom royal drapes, and flexible stage configurations.",
    },
    {
      title: "Aravalli Executive Hall",
      capacity: "Up to 100 Guests",
      idealFor: "Corporate Conferences, Product Launches & Cocktail Parties",
      desc: "Sophisticated executive venue equipped with seamless presentation technology, climate control, and direct balcony access to Aravalli mountain breezes.",
    },
  ];

  return (
    <section id="celebrations" className="py-24 relative bg-[#070A12] text-gray-100 border-t border-b border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#E5C365] font-bold flex items-center justify-center gap-2 mb-3">
            <PartyPopper className="w-3.5 h-3.5 text-[#D4AF37]" />
            Celebrations & Banquets
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Host Your Special Occasions in <span className="text-gold-gradient">Grand Style</span>
          </h2>
          <p className="mt-4 text-gray-300 text-sm sm:text-base font-light">
            With two spacious, elegant banquet halls, The TASEY Hotel is the ideal venue for destination weddings, corporate summits, birthday galas, and memorable parties in Jaipur.
          </p>
        </div>

        {/* Feature Hero Card */}
        <div className="glass-card-dark rounded-3xl overflow-hidden border border-[#D4AF37]/35 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-0">
          <div className="lg:col-span-7 relative min-h-[340px] sm:min-h-[440px] group overflow-hidden">
            <Image
              src="/images/tasey-17.jpeg"
              alt="The Tasey Banquet Hall Setup"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070A12] via-[#070A12]/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#070A12]/80 backdrop-blur-md border border-[#D4AF37]/30 text-xs text-white">
              <span className="font-serif-luxury text-sm font-bold text-[#E5C365] block">
                Two Spacious Elegant Banquet Halls Available
              </span>
              <span className="text-gray-300 font-light">Complete event planning, bespoke floral decor, and royal catering support.</span>
            </div>
          </div>

          <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#131A2D] border border-[#D4AF37]/30 text-[#E5C365] text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                Bespoke Royal Event Planning
              </div>
              <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white mb-3">
                Unforgettable Events Near Amber Fort
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm font-light leading-relaxed mb-6">
                Our experienced hospitality team handles every detail — from exquisite decor, sound, and lighting to signature live food counters prepared by our heritage chefs.
              </p>

              <div className="space-y-4">
                {halls.map((hall, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#0F172A] border border-[#D4AF37]/25 hover:border-[#D4AF37] transition-colors">
                    <div className="flex justify-between items-center mb-1">
                      <div className="font-serif-luxury text-base sm:text-lg font-bold text-white">
                        {hall.title}
                      </div>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#D4AF37]/20 text-[#E5C365]">
                        {hall.capacity}
                      </span>
                    </div>
                    <div className="text-xs text-[#D4AF37] mb-1 font-semibold">
                      {hall.idealFor}
                    </div>
                    <p className="text-[11px] text-gray-300 font-light leading-relaxed">
                      {hall.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => onOpenBooking("Banquet Event")}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B38F24] text-black font-bold text-xs sm:text-sm tracking-wider uppercase shadow-xl hover:shadow-[#D4AF37]/30 hover:scale-102 transition-all flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-black" />
              <span>Enquire For Events & Banquets</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

