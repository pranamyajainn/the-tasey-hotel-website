"use client";

import { useState } from "react";
import Image from "next/image";
import { Camera, X, Maximize2, Sparkles } from "lucide-react";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<{ url: string; title: string } | null>(null);

  const galleryItems = [
    {
      id: 1,
      title: "Exterior & Aravalli Sunset Panorama",
      category: "Heritage & Views",
      image: "/images/tasey-01.jpeg",
    },
    {
      id: 2,
      title: "Scenic Aravalli Mountain Drive",
      category: "Heritage & Views",
      image: "/images/tasey-02.jpeg",
    },
    {
      id: 3,
      title: "Rooftop Sunset & Sky Lounge",
      category: "Rooftop & Pool",
      image: "/images/tasey-03.jpeg",
    },
    {
      id: 4,
      title: "Amer Fort Royal Architecture View",
      category: "Heritage & Views",
      image: "/images/tasey-04.jpeg",
    },
    {
      id: 5,
      title: "Elephant Village Meeting & Feeding",
      category: "Wildlife & Safaris",
      image: "/images/tasey-05.jpeg",
    },
    {
      id: 6,
      title: "Jhalana Guided Leopard Safari",
      category: "Wildlife & Safaris",
      image: "/images/tasey-06.jpeg",
    },
    {
      id: 7,
      title: "Nahargarh Biological Lion Sanctuary",
      category: "Wildlife & Safaris",
      image: "/images/tasey-07.jpeg",
    },
    {
      id: 8,
      title: "Rajasthani Cultural Performance Night",
      category: "Heritage & Views",
      image: "/images/tasey-08.jpeg",
    },
    {
      id: 9,
      title: "The TASEY Boutique Facade & Hills",
      category: "Heritage & Views",
      image: "/images/tasey-09.jpeg",
    },
    {
      id: 10,
      title: "Opulent Lobby & Reception Lounge",
      category: "Rooms & Suites",
      image: "/images/tasey-10.jpeg",
    },
    {
      id: 11,
      title: "Luxury Room King Bed & Teak Wood",
      category: "Rooms & Suites",
      image: "/images/tasey-11.jpeg",
    },
    {
      id: 12,
      title: "Executive Room Sitting Lounge & Balcony",
      category: "Rooms & Suites",
      image: "/images/tasey-12.jpeg",
    },
    {
      id: 13,
      title: "Royal Penthouse Suite & Panoramic Windows",
      category: "Rooms & Suites",
      image: "/images/tasey-13.jpeg",
    },
    {
      id: 14,
      title: "Haldi Fine Dining Royal Indoor Ambiance",
      category: "Dining & Banquets",
      image: "/images/tasey-14.jpeg",
    },
    {
      id: 15,
      title: "Authentic Royal Rajasthani Culinary Delights",
      category: "Dining & Banquets",
      image: "/images/tasey-15.jpeg",
    },
    {
      id: 16,
      title: "Jhumka Open-Air Rooftop Swimming Pool",
      category: "Rooftop & Pool",
      image: "/images/tasey-16.jpeg",
    },
    {
      id: 17,
      title: "Grand Amber Banquet Hall Wedding Setup",
      category: "Dining & Banquets",
      image: "/images/tasey-17.jpeg",
    },
    {
      id: 18,
      title: "Aravalli Executive Conference Room",
      category: "Dining & Banquets",
      image: "/images/tasey-18.jpeg",
    },
    {
      id: 19,
      title: "Twilight Aravalli Horizon & Stargazing View",
      category: "Heritage & Views",
      image: "/images/tasey-19.jpeg",
    },
  ];

  const categories = ["All", "Rooms & Suites", "Rooftop & Pool", "Dining & Banquets", "Wildlife & Safaris", "Heritage & Views"];

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-24 relative bg-[#F8F3EA] text-[#1C1815] border-t border-b border-[#E5DCCB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#8C6310] font-bold flex items-center justify-center gap-2 mb-3">
            <Camera className="w-3.5 h-3.5 text-[#C5A059]" />
            Visual Splendor (19 Curated Photos)
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#1C1815] tracking-tight">
            The TASEY <span className="text-gold-gradient">Gallery</span>
          </h2>
          <p className="mt-4 text-[#5C5248] text-sm sm:text-base font-normal">
            Explore all 19 authentic captures of our boutique hotel rooms, rooftop pool, Haldi restaurant, banquets, and wildlife safaris.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider transition-all border ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-[#C5A059] to-[#8C6310] text-white border-transparent shadow-md scale-105"
                  : "bg-[#FFFDF9] text-[#3B332B] border-[#E5DCCB] hover:border-[#C5A059] hover:text-[#1C1815]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage({ url: item.image, title: item.title })}
              className="bg-[#FFFDF9] relative h-72 rounded-2xl overflow-hidden border border-[#C5A059]/30 shadow-md group cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1815]/90 via-[#1C1815]/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#E5C365] block mb-0.5">
                    {item.category}
                  </span>
                  <h3 className="font-serif-luxury text-base sm:text-lg font-bold text-white group-hover:text-[#E5C365] transition-colors">
                    {item.title}
                  </h3>
                </div>
                <div className="w-9 h-9 rounded-full bg-[#FFFDF9]/90 backdrop-blur-md border border-[#C5A059]/40 flex items-center justify-center text-[#8C6310] group-hover:bg-[#C5A059] group-hover:text-white transition-colors shrink-0 shadow-md">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-300"
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-[#D4AF37] hover:text-black transition-colors z-10"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="relative w-full max-w-5xl h-[80vh] rounded-3xl overflow-hidden border border-[#D4AF37]/40 shadow-2xl flex flex-col justify-end">
            <Image
              src={selectedImage.url}
              alt={selectedImage.title}
              fill
              className="object-contain"
            />
            <div className="relative z-10 p-6 bg-gradient-to-t from-black via-black/80 to-transparent text-center">
              <h4 className="font-serif-luxury text-xl font-bold text-[#E5C365]">
                {selectedImage.title}
              </h4>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

