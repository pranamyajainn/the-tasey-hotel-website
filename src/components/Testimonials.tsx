"use client";

import { Star, Quote, CheckCircle2 } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Vikram & Ananya Sharma",
      stay: "Suite Room • Verified Guest",
      rating: 5,
      date: "August 2026",
      comment:
        "The Tasey is Jaipur's best kept secret! Staying in the heart of the Aravali Hills just minutes from Amber Fort was magical. Jhumka Rooftop with the poolside candlelit dinner and mountain views was unforgettable. Pure royal luxury!",
    },
    {
      name: "Marcus Vance",
      stay: "Executive Room • Tourist from UK",
      rating: 5,
      date: "September 2026",
      comment:
        "Extremely peaceful location! Only 50 meters from Nahargarh park and 5km from Amber Fort. The food at Haldi indoor restaurant was the best authentic Rajasthani Thali we had in India.",
    },
    {
      name: "Radhika Kulkarni",
      stay: "Event Organizer • Corporate Gala",
      rating: 5,
      date: "July 2026",
      comment:
        "We hosted our corporate leadership summit in the Grand Amber Banquet Hall. The staff handled the tech, catering, and guest logistics flawlessly. Highly recommended for events!",
    },
  ];

  return (
    <section className="py-24 relative bg-[#FDFBF7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#B88E36] font-bold flex items-center justify-center gap-2 mb-3">
            <Quote className="w-3.5 h-3.5" />
            Guest Memories & Reviews
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#1C1815] tracking-tight">
            Cherished by <span className="text-gold-gradient">Global Guests</span>
          </h2>
          <p className="mt-4 text-[#5C5046] text-sm sm:text-base font-normal">
            Read what travelers and event hosts say about their stay and dining experiences at The Tasey.
          </p>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-[#FFFDF9] p-8 rounded-3xl border border-[#C5A059]/30 shadow-md flex flex-col justify-between hover:shadow-xl hover:border-[#C5A059]/50 transition-all duration-300 group"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#B88E36] text-[#B88E36]" />
                  ))}
                </div>

                <p className="text-[#3D352E] text-xs sm:text-sm font-normal leading-relaxed italic mb-6">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#C5A059]/15 flex items-center justify-between">
                <div>
                  <h4 className="font-serif-luxury text-base font-bold text-[#1C1815] group-hover:text-[#B88E36] transition-colors">
                    {rev.name}
                  </h4>
                  <div className="text-[11px] text-[#7A6E63] font-medium flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-[#B88E36]" />
                    <span>{rev.stay}</span>
                  </div>
                </div>
                <span className="text-[10px] text-[#9C8F84] font-semibold">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
