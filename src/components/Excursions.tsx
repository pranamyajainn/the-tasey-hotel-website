"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  Compass, 
  Sparkles, 
  MapPin, 
  ShieldCheck, 
  Camera, 
  Calendar, 
  ArrowRight, 
  CheckCircle2, 
  Footprints, 
  Palmtree, 
  Crown, 
  SunMedium, 
  Car, 
  Users, 
  Heart
} from "lucide-react";

interface ExcursionsProps {
  onOpenBooking: (category?: string) => void;
}

export default function Excursions({ onOpenBooking }: ExcursionsProps) {
  const [activeTab, setActiveTab] = useState<"all" | "wildlife" | "heritage" | "cultural">("all");

  const experiences = [
    {
      id: "elephant-village",
      category: "wildlife",
      icon: Footprints,
      title: "Elephant Village Experience",
      badge: "Signature Experience",
      tagline: "Unforgettable Elephant Interaction at Amer",
      desc: "Experience the charm of Jaipur's famous elephant village at Amer. Guests can enjoy memorable elephant interactions, including meeting, feeding and walking alongside these magnificent animals, subject to availability and applicable regulations.",
      audience: "A memorable experience for families, couples and international travellers.",
      image: "/images/tasey-05.jpeg",
      highlights: [
        "Elephant Village Visit",
        "Elephant Feeding Experience",
        "Elephant Walk Experience"
      ]
    },
    {
      id: "leopard-safari",
      category: "wildlife",
      icon: Palmtree,
      title: "Leopard Safari",
      badge: "Thrilling Wildlife",
      tagline: "Guided Jhalana Leopard Expedition",
      desc: "Discover the wild side of Jaipur with a guided Jhalana Leopard Safari. Explore the natural landscape and look out for leopards, blue bulls, wild boar, spotted deer and a variety of birds.",
      audience: "An exciting wildlife experience just a short drive from Jaipur's city attractions.",
      image: "/images/tasey-06.jpeg",
      highlights: [
        "High Leopard Sighting Probability",
        "Spot Blue Bulls, Wild Boar & Deer",
        "Guided Open-Top 4x4 Jeep Safari"
      ]
    },
    {
      id: "nahargarh-lion-safari",
      category: "wildlife",
      icon: Crown,
      title: "Nahargarh Lion Safari",
      badge: "Near The TASEY",
      tagline: "720 Hectares of Aravalli Wilderness",
      desc: "Experience the thrill of wildlife at Nahargarh Lion Safari, located amidst the beautiful Aravalli hills near Jaipur. Just a short drive from The TASEY Hotel, Amer, the safari offers guests an opportunity to experience the natural surroundings of Nahargarh Biological Park and discover its diverse wildlife.",
      detailText: "The Nahargarh Biological Park is spread across approximately 720 hectares and is home to a variety of wildlife, including Asiatic lions, Bengal tigers, panthers, hyenas, wolves, deer and other species.",
      image: "/images/tasey-07.jpeg",
      perfectFor: [
        { emoji: "🦁", text: "Wildlife & Lion Safari" },
        { emoji: "🌿", text: "Nature and forest exploration" },
        { emoji: "📸", text: "Wildlife photography" },
        { emoji: "👨", text: "Family outings" },
        { emoji: "❤️", text: "Couple experiences" },
        { emoji: "🐾", text: "Adventure and nature lovers" }
      ],
      highlights: [
        "Asiatic Lions & Bengal Tigers",
        "50 meters from hotel entrance",
        "Ideal for photography & nature trails"
      ]
    },
    {
      id: "amer-fort",
      category: "heritage",
      icon: Crown,
      title: "Amer Fort & Royal Heritage",
      badge: "UNESCO World Heritage",
      tagline: "Centuries of Majestic Rajput Splendor",
      desc: "Explore the magnificent Amer Fort, one of Jaipur's most celebrated heritage attractions. Discover Rajput architecture, historic palaces, courtyards and spectacular views of the surrounding Aravalli hills.",
      audience: "5 KM from hotel (10 min scenic drive).",
      image: "/images/tasey-04.jpeg",
      highlights: [
        "Sheesh Mahal (Mirror Palace)",
        "Grand Courtyards & Diwan-i-Aam",
        "Night Illumination & Sound Show"
      ]
    },
    {
      id: "aravalli-nature",
      category: "heritage",
      icon: SunMedium,
      title: "Aravalli Nature Experiences",
      badge: "Serene Wilderness",
      tagline: "Sunrise, Sunset & Scenic Hill Drives",
      desc: "Enjoy the peaceful surroundings of Amer with specially arranged nature excursions, sunrise and sunset experiences, photography opportunities and scenic drives through the Aravalli landscape.",
      audience: "Perfect for peaceful retreats, couples, and photography enthusiasts.",
      image: "/images/tasey-02.jpeg",
      highlights: [
        "Curated Sunrise & Sunset Excursions",
        "Landscape Photography Points",
        "Scenic Mountain Drive Routes"
      ]
    },
    {
      id: "jaipur-culture",
      category: "cultural",
      icon: Sparkles,
      title: "Jaipur Cultural Experiences",
      badge: "Authentic Traditions",
      tagline: "Immersion into Rajasthan's Rich Heritage",
      desc: "Discover the colours and traditions of Rajasthan through curated experiences designed to immerse you into local art, music, and flavors.",
      image: "/images/tasey-08.jpeg",
      highlights: [
        "Rajasthani Folk Performances",
        "Traditional Rajasthani Cuisine",
        "Local Handicraft & Shopping Tours",
        "Cultural & Heritage Walks",
        "Evening Entertainment Experiences"
      ]
    }
  ];

  const assistanceServices = [
    { name: "Safari Booking Assistance", desc: "Instant booking for Jhalana & Nahargarh safaris." },
    { name: "Local Transportation", desc: "Chauffeur-driven luxury cars & private cabs." },
    { name: "Sightseeing Planning", desc: "Tailored itineraries for Amer & Jaipur monuments." },
    { name: "Licensed Guides", desc: "Expert multilingual guides for heritage tours." },
    { name: "Pickup & Drop", desc: "Airport, railway station & city transfers." },
    { name: "Customized Day Tours", desc: "Bespoke day excursions tailored to your preferences." }
  ];

  const filteredExperiences = activeTab === "all" 
    ? experiences 
    : experiences.filter(exp => exp.category === activeTab);

  return (
    <section id="adventures" className="py-24 relative bg-[#FDFBF7] text-[#1C1815] overflow-hidden border-t border-b border-[#C5A059]/20">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#B88E36]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F8F3EA] border border-[#C5A059]/35 text-[#9E7B32] text-xs font-bold uppercase tracking-widest mb-4 shadow-sm">
            <Compass className="w-3.5 h-3.5 text-[#B88E36]" />
            <span>Assistance by TASEY</span>
          </div>
          <h2 className="font-serif-luxury text-4xl sm:text-6xl font-bold tracking-tight text-[#1C1815] leading-tight">
            Your Adventure. <span className="text-gold-gradient">Assistance by Tasey.</span>
          </h2>
          <div className="w-28 h-0.5 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent mx-auto my-6" />
          <p className="text-[#5C5046] text-base sm:text-lg font-normal leading-relaxed max-w-3xl mx-auto">
            <strong className="text-[#1C1815] font-bold">Discover Jaipur Beyond the Ordinary.</strong> At The TASEY Hotel, Amer, Jaipur, your stay is more than just a comfortable retreat. Located amidst the beautiful Aravalli surroundings of Amer, we help you discover the royal heritage, wildlife and vibrant culture of Rajasthan through carefully arranged local experiences and excursions.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {[
            { id: "all", label: "All Experiences" },
            { id: "wildlife", label: "Wildlife & Safaris 🐅" },
            { id: "heritage", label: "Royal Forts & Nature 🏰" },
            { id: "cultural", label: "Rajasthani Culture 🎭" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all border ${
                activeTab === tab.id
                  ? "bg-[#1C1815] text-[#FFFDF9] border-[#1C1815] shadow-lg scale-105"
                  : "bg-[#FFFDF9] text-[#2C2621] border-[#C5A059]/30 hover:border-[#B88E36] hover:text-[#B88E36]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid of Experiences */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {filteredExperiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-[#FFFDF9] rounded-3xl overflow-hidden border border-[#C5A059]/35 shadow-lg hover:shadow-2xl hover:border-[#C5A059] transition-all duration-500 flex flex-col group"
            >
              {/* Image Container */}
              <div className="relative h-64 sm:h-80 overflow-hidden shrink-0">
                <Image
                  src={exp.image}
                  alt={exp.title}
                  fill
                  className="object-cover group-hover:scale-108 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />
                
                {/* Floating Badge */}
                <div className="absolute top-5 left-5 right-5 flex justify-between items-center z-10">
                  <span className="px-3.5 py-1 rounded-full bg-[#FFFDF9]/95 backdrop-blur-md border border-[#C5A059]/40 text-[#9E7B32] text-[11px] font-bold uppercase tracking-wider shadow-sm">
                    {exp.badge}
                  </span>
                </div>

                <div className="absolute bottom-4 left-6 right-6 z-10">
                  <div className="text-xs uppercase font-bold text-amber-300 tracking-widest mb-1">
                    {exp.tagline}
                  </div>
                  <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white group-hover:text-amber-200 transition-colors">
                    {exp.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <p className="text-sm text-[#4E443C] font-normal leading-relaxed">
                    {exp.desc}
                  </p>

                  {exp.detailText && (
                    <div className="p-4 rounded-2xl bg-[#F8F3EA] border border-[#C5A059]/25 text-xs text-[#5C5046] leading-relaxed font-normal">
                      {exp.detailText}
                    </div>
                  )}

                  {exp.audience && (
                    <div className="text-xs text-[#9E7B32] font-semibold italic">
                      ✨ {exp.audience}
                    </div>
                  )}

                  {/* Emojis list for Lion Safari */}
                  {exp.perfectFor && (
                    <div className="pt-2">
                      <div className="text-xs font-bold uppercase tracking-wider text-[#9E7B32] mb-3">
                        A Perfect Experience For:
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {exp.perfectFor.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#F8F3EA] border border-[#C5A059]/20 text-xs text-[#1C1815]">
                            <span>{item.emoji}</span>
                            <span className="font-semibold text-[11px]">{item.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Highlights Bullet List */}
                  {exp.highlights && (
                    <div className="pt-2">
                      <div className="text-xs font-bold uppercase tracking-wider text-[#7A6E63] mb-2">
                        Key Highlights:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {exp.highlights.map((hl, idx) => (
                          <span 
                            key={idx}
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F8F3EA] border border-[#C5A059]/30 text-xs text-[#2C2621] font-medium"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#B88E36]" />
                            {hl}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-[#C5A059]/20">
                  <button
                    onClick={() => onOpenBooking(`Excursion: ${exp.title}`)}
                    className="w-full py-3.5 rounded-xl bg-[#1C1815] hover:bg-[#B88E36] text-[#FFFDF9] font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-md"
                  >
                    <Calendar className="w-4 h-4 text-[#C5A059]" />
                    <span>Arrange {exp.title}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Excursion Assistance Banner */}
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-[#FFFDF9] via-[#F8F3EA] to-[#FDFBF7] border-2 border-[#C5A059]/40 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F8F3EA] border border-[#C5A059]/35 text-[#9E7B32] text-xs font-bold uppercase tracking-widest">
              <Car className="w-4 h-4 text-[#B88E36]" />
              <span>Convenient Excursion Assistance</span>
            </div>

            <h3 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#1C1815]">
              Our Concierge Assistance Team
            </h3>

            <p className="text-[#5C5046] text-sm sm:text-base font-normal max-w-2xl mx-auto leading-relaxed">
              Our front desk and travel desk team will seamlessly arrange tickets, private luxury transport, licensed guides, and custom day itineraries for your stay.
            </p>

            {/* Assistance Services Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
              {assistanceServices.map((service, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-[#FFFDF9] border border-[#C5A059]/30 text-left hover:border-[#B88E36] transition-colors shadow-sm">
                  <div className="text-xs font-bold text-[#9E7B32] uppercase tracking-wider mb-1">
                    {service.name}
                  </div>
                  <div className="text-[11px] text-[#6E645A] font-normal">
                    {service.desc}
                  </div>
                </div>
              ))}
            </div>

            {/* Final Tagline Callout */}
            <div className="pt-8 border-t border-[#C5A059]/25">
              <p className="font-serif-luxury text-xl sm:text-2xl text-[#9E7B32] italic mb-2">
                "Your Adventure. Our Assistance."
              </p>
              <p className="text-sm text-[#4E443C] font-normal mb-6">
                Whether you are looking for wildlife, heritage, culture, adventure or simply a peaceful escape into the Aravallis, The TASEY Hotel helps you make the most of your Jaipur experience.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => onOpenBooking("Custom Excursion Request")}
                  className="px-8 py-4 rounded-xl bg-[#1C1815] hover:bg-[#B88E36] text-[#FFFDF9] font-bold text-xs sm:text-sm uppercase tracking-widest shadow-xl hover:scale-105 transition-all flex items-center gap-2"
                >
                  <span>Plan Your Jaipur Adventure Now</span>
                  <ArrowRight className="w-4 h-4 text-[#C5A059]" />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

