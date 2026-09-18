"use client";

import Image from "next/image";

interface CelebrationsProps {
  onOpenBooking: (category: string) => void;
}

export default function Celebrations({ onOpenBooking }: CelebrationsProps) {
  const halls = [
    {
      title: "Grand Amber Banquet Hall",
      capacity: "Up to 250 guests",
      idealFor: "Weddings and private events",
      desc: "A hall set up with balloons, ceiling lights, tables, and chairs.",
    },
    {
      title: "Executive Hall",
      capacity: "Up to 100 guests",
      idealFor: "Meetings and group events",
      desc: "A second event space for seated gatherings and celebrations.",
    },
  ];

  return (
    <section id="celebrations" className="py-20 sm:py-28 bg-[#F8F3EA] text-[#011A51]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-7 relative min-h-[300px] sm:min-h-[420px] rounded overflow-hidden">
            <Image
              src="/images/tasey-10.jpeg"
              alt="The Tasey banquet hall setup"
              fill
              className="object-cover"
            />
          </div>

          <div className="lg:col-span-5">
            <h2 className="font-serif-luxury text-[28px] sm:text-[40px] text-[#011A51]">
              Two banquet halls
            </h2>
            <p className="mt-3 text-[16px] leading-[1.6] text-[#605A50] max-w-md">
              Two rooms for weddings, meetings, and private events near Amber Fort. Ask the events team about room layouts, food, lighting, and sound for your date. The photographed hall has balloons, ceiling lights, tables, and chairs.
            </p>

            <ul className="mt-8 space-y-5">
              {halls.map((hall, idx) => (
                <li key={idx} className={idx > 0 ? "pt-5 border-t border-[#E5DCCB]" : ""}>
                  <h3 className="text-[20px] text-[#011A51]">
                    {hall.title} &middot; {hall.capacity}
                  </h3>
                  <p className="mt-1 text-[16px] leading-[1.6] text-[#605A50] max-w-md">
                    {hall.idealFor}. {hall.desc}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <button
                onClick={() => onOpenBooking("Banquet Event")}
                className="px-6 py-3 rounded bg-[#A95A01] hover:bg-[#8C4A00] text-white text-[16px] font-medium transition-colors"
              >
                Enquire for events and banquets
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
