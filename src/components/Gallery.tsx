"use client";

import { useState } from "react";
import Image from "next/image";
import { Camera, X, Maximize2 } from "lucide-react";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<{ url: string; title: string } | null>(null);

  const galleryItems = [
    {
      id: 1,
      title: "The Tasey Hotel at night",
      category: "Hotel and views",
      image: "/images/tasey-08.jpeg",
    },
    {
      id: 2,
      title: "Hotel exterior in daylight",
      category: "Hotel and views",
      image: "/images/tasey-03.jpeg",
    },
    {
      id: 3,
      title: "Hotel reception desk",
      category: "Hotel and views",
      image: "/images/tasey-14.jpeg",
    },
    {
      id: 4,
      title: "Hotel lobby seating",
      category: "Hotel and views",
      image: "/images/tasey-13.jpeg",
    },
    {
      id: 5,
      title: "Lobby waiting area",
      category: "Hotel and views",
      image: "/images/tasey-15.jpeg",
    },
    {
      id: 6,
      title: "Bedroom with brown headboard",
      category: "Rooms & Suites",
      image: "/images/tasey-17.jpeg",
    },
    {
      id: 7,
      title: "Suite sitting room",
      category: "Rooms & Suites",
      image: "/images/tasey-16.jpeg",
    },
    {
      id: 8,
      title: "Room with cane chairs",
      category: "Rooms & Suites",
      image: "/images/tasey-04.jpeg",
    },
    {
      id: 9,
      title: "Hotel corridor",
      category: "Rooms & Suites",
      image: "/images/tasey-18.jpeg",
    },
    {
      id: 10,
      title: "Room wardrobe and TV unit",
      category: "Rooms & Suites",
      image: "/images/tasey-19.jpeg",
    },
    {
      id: 11,
      title: "Bedroom with curtains",
      category: "Rooms & Suites",
      image: "/images/tasey-07.jpeg",
    },
    {
      id: 12,
      title: "Rooftop pool and open sky",
      category: "Rooftop & Pool",
      image: "/images/tasey-09.jpeg",
    },
    {
      id: 13,
      title: "Rooftop terrace and pool",
      category: "Rooftop & Pool",
      image: "/images/tasey-06.jpeg",
    },
    {
      id: 14,
      title: "Rooftop pool with steel railing",
      category: "Rooftop & Pool",
      image: "/images/tasey-05.jpeg",
    },
    {
      id: 15,
      title: "Haldi restaurant with pendant lights",
      category: "Dining & Banquets",
      image: "/images/tasey-11.jpeg",
    },
    {
      id: 16,
      title: "Haldi restaurant in daylight",
      category: "Dining & Banquets",
      image: "/images/tasey-02.jpeg",
    },
    {
      id: 17,
      title: "Private dining room",
      category: "Dining & Banquets",
      image: "/images/tasey-12.jpeg",
    },
    {
      id: 18,
      title: "Banquet hall with balloons",
      category: "Dining & Banquets",
      image: "/images/tasey-10.jpeg",
    },
  ];

  const categories = ["All", "Hotel and views", "Rooms & Suites", "Rooftop & Pool", "Dining & Banquets"];

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-24 relative bg-[#F8F3EA] text-[#011A51] border-t border-b border-[#E5DCCB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#A95A01] font-bold block mb-3">
            Visual Portfolio
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#011A51] tracking-tight">
            The Tasey <span className="text-gold-gradient">gallery</span>
          </h2>
          <p className="mt-3 text-[#605A50] text-sm sm:text-base font-normal max-w-2xl mx-auto leading-relaxed">
            Photos of the hotel, rooms, rooftop pool, Haldi restaurant, and event spaces.
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
                  ? "bg-gradient-to-r from-[#A95A01] to-[#A95A01] text-white border-transparent shadow-md scale-105"
                  : "bg-[#FFFDF9] text-[#011A51] border-[#E5DCCB] hover:border-[#A95A01] hover:text-[#011A51]"
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
              className="bg-[#FFFDF9] relative h-72 rounded-2xl overflow-hidden border border-[#A95A01]/30 shadow-md group cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#011A51]/90 via-[#011A51]/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#FFC76B] block mb-0.5">
                    {item.category}
                  </span>
                  <h3 className="font-serif-luxury text-base sm:text-lg font-bold text-white group-hover:text-[#FFC76B] transition-colors">
                    {item.title}
                  </h3>
                </div>
                <div className="w-9 h-9 rounded-full bg-[#FFFDF9]/90 backdrop-blur-md border border-[#A95A01]/40 flex items-center justify-center text-[#A95A01] group-hover:bg-[#A95A01] group-hover:text-white transition-colors shrink-0 shadow-md">
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
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-[#A95A01] hover:text-black transition-colors z-10"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="relative w-full max-w-5xl h-[80vh] rounded-3xl overflow-hidden border border-[#A95A01]/40 shadow-2xl flex flex-col justify-end">
            <Image
              src={selectedImage.url}
              alt={selectedImage.title}
              fill
              className="object-contain"
            />
            <div className="relative z-10 p-6 bg-gradient-to-t from-black via-black/80 to-transparent text-center">
              <h4 className="font-serif-luxury text-xl font-bold text-[#FFC76B]">
                {selectedImage.title}
              </h4>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
