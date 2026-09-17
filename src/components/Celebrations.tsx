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
    <section id="celebrations" className="py-24 relative bg-[#F8F3EA] text-[#011A51] border-t border-b border-[#E5DCCB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#A95A01] font-bold block mb-3">
            Bespoke Gatherings & Receptions
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#011A51] tracking-tight">
            Two Grand <span className="text-gold-gradient">Banquet Halls</span>
          </h2>
          <p className="mt-3 text-[#605A50] text-sm sm:text-base font-normal max-w-2xl mx-auto leading-relaxed">
            Distinguished venues for intimate weddings, corporate symposiums, and private celebrations against the Aravalli hills.
          </p>
        </div>

        {/* Feature Hero Card */}
        <div className="bg-[#FFFDF9] rounded-3xl overflow-hidden border border-[#A95A01]/40 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-0">
          <div className="lg:col-span-7 relative min-h-[340px] sm:min-h-[440px] group overflow-hidden">
            <Image
              src="/images/tasey-10.jpeg"
              alt="The Tasey Banquet Hall Setup"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#011A51]/80 via-[#011A51]/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#FFFDF9]/95 backdrop-blur-md border border-[#E5DCCB] text-xs text-[#011A51] shadow-md">
              <span className="font-serif-luxury text-sm font-bold text-[#A95A01] block">
                Two Spacious Elegant Banquet Halls Available
              </span>
              <span className="text-[#605A50] font-medium">Complete event planning, bespoke floral decor, and royal catering support.</span>
            </div>
          </div>

          <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8F3EA] border border-[#A95A01]/40 text-[#A95A01] text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5 text-[#A95A01]" />
                Bespoke Royal Event Planning
              </div>
              <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#011A51] mb-3">
                Unforgettable Events Near Amber Fort
              </h3>
              <p className="text-[#605A50] text-xs sm:text-sm font-normal leading-relaxed mb-6">
                Our experienced hospitality team handles every detail — from exquisite decor, sound, and lighting to signature live food counters prepared by our heritage chefs.
              </p>

              <div className="space-y-4">
                {halls.map((hall, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DCCB] hover:border-[#A95A01] transition-colors">
                    <div className="flex justify-between items-center mb-1">
                      <div className="font-serif-luxury text-base sm:text-lg font-bold text-[#011A51]">
                        {hall.title}
                      </div>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#A95A01]/20 text-[#A95A01]">
                        {hall.capacity}
                      </span>
                    </div>
                    <div className="text-xs text-[#A95A01] mb-1 font-semibold">
                      {hall.idealFor}
                    </div>
                    <p className="text-[11px] text-[#605A50] font-normal leading-relaxed">
                      {hall.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => onOpenBooking("Banquet Event")}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#A95A01] to-[#A95A01] text-white font-bold text-xs sm:text-sm tracking-wider uppercase shadow-md hover:shadow-[#A95A01]/40 hover:scale-102 transition-all flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-white" />
              <span>Enquire For Events & Banquets</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

