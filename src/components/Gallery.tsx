"use client";

import { useState } from "react";
import Image from "next/image";
import { Camera, X, Maximize2 } from "lucide-react";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryItems = [
    {
      id: 1,
      title: "Exterior & Aravali Sunset",
      category: "Aravali Views",
      image: "/images/hero.jpg",
    },
    {
      id: 2,
      title: "Luxury Room King Bed",
      category: "Rooms",
      image: "/images/luxury-room.jpg",
    },
    {
      id: 3,
      title: "Executive Balcony View",
      category: "Rooms",
      image: "/images/executive-room.jpg",
    },
    {
      id: 4,
      title: "Royal Penthouse Suite & Jacuzzi",
      category: "Rooms",
      image: "/images/suite-room.jpg",
    },
    {
      id: 5,
      title: "Haldi Indoor Rajasthani Dining",
      category: "Haldi Restaurant",
      image: "/images/haldi-restaurant.jpg",
    },
    {
      id: 6,
      title: "Jhumka Rooftop Pool & Aravali Vista",
      category: "Rooftop & Pool",
      image: "/images/jhumka-rooftop.jpg",
    },
    {
      id: 7,
      title: "Grand Amber Banquet Hall Setup",
      category: "Banquets",
      image: "/images/banquet-hall.jpg",
    },
  ];

  const categories = ["All", "Rooms", "Rooftop & Pool", "Haldi Restaurant", "Banquets", "Aravali Views"];

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-24 relative bg-[#F8F3EA] border-t border-b border-[#C5A059]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#B88E36] font-bold flex items-center justify-center gap-2 mb-3">
            <Camera className="w-3.5 h-3.5" />
            Visual Splendor
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#1C1815] tracking-tight">
            The Tasey <span className="text-gold-gradient">Gallery</span>
          </h2>
          <p className="mt-4 text-[#5C5046] text-sm sm:text-base font-normal">
            Take a visual tour of our boutique rooms, rooftop swimming pool, fine dining halls, and mountain vistas.
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
                  ? "bg-[#1C1815] text-[#FFFDF9] border-[#1C1815] shadow-md"
                  : "bg-[#FFFDF9] text-[#2C2621] border-[#C5A059]/30 hover:border-[#B88E36]"
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
              onClick={() => setSelectedImage(item.image)}
              className="relative h-72 rounded-2xl overflow-hidden bg-[#FFFDF9] border border-[#C5A059]/30 shadow-md group cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#C5A059] block mb-0.5">
                    {item.category}
                  </span>
                  <h3 className="font-serif-luxury text-lg font-bold text-white">
                    {item.title}
                  </h3>
                </div>
                <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white group-hover:bg-[#C5A059] group-hover:text-black transition-colors">
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
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-300"
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/20 text-white hover:bg-[#C5A059] hover:text-black transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="relative w-full max-w-5xl h-[80vh] rounded-2xl overflow-hidden border border-[#C5A059]/40 shadow-2xl">
            <Image
              src={selectedImage}
              alt="Expanded Gallery Photo"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
