"use client";

import Image from "next/image";

export default function Overview() {
  const locationList = [
    {
      title: "5 km from Amber Fort",
      desc: "Amber Fort is a 5 km drive from the hotel. Sheesh Mahal and the fort complex are inside.",
      href: "#adventures",
    },
    {
      title: "Amer, Jaipur",
      desc: "The hotel is in Amer, near Amber Fort and Nahargarh Biological Park.",
      href: undefined,
    },
    {
      title: "50 m from Nahargarh Biological Park",
      desc: "The park entrance is about 50 m from the hotel and offers the Nahargarh Lion Safari.",
      href: "#adventures",
    },
    {
      title: "Views toward the Aravalli hills",
      desc: "The rooftop pool photo shows nearby buildings, a transmission tower, and hills beyond.",
      href: "#dining",
    },
  ];

  return (
    <section id="overview" className="py-20 sm:py-28 bg-[#FDFBF7] text-[#011A51]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Photo */}
          <div className="lg:col-span-6">
            <div className="relative h-[340px] sm:h-[440px] rounded overflow-hidden">
              <Image
                src="/images/tasey-09.jpeg"
                alt="The Tasey view toward Amber Fort"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-6">
            <h2 className="font-serif-luxury text-[28px] sm:text-[40px] text-[#011A51] leading-tight">
              The Tasey Hotel in Amer, Jaipur
            </h2>
            <p className="mt-4 text-[16px] leading-[1.6] text-[#605A50] max-w-md">
              The Tasey Hotel is in Amer, Jaipur, 5 km from Amber Fort and about 50 m from Nahargarh Biological Park.
            </p>

            <ul className="mt-8 space-y-5">
              {locationList.map((item, idx) => {
                const Wrapper = item.href ? "a" : "div";
                return (
                  <li key={idx} className={idx > 0 ? "pt-5 border-t border-[#E5DCCB]" : ""}>
                    <Wrapper
                      {...(item.href ? { href: item.href, className: "block group" } : {})}
                    >
                      <h3 className="text-[20px] text-[#011A51] group-hover:text-[#A95A01] transition-colors">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-[16px] leading-[1.6] text-[#605A50] max-w-md">
                        {item.desc}
                      </p>
                    </Wrapper>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
