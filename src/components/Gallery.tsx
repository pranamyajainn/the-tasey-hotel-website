"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<{ url: string; title: string } | null>(null);

  const galleryItems = [
    {
      id: 1,
      title: "Hotel entrance and facade",
      category: "Hotel and views",
      image: "/images/tasey-01.jpeg",
    },
    {
      id: 4,
      title: "Hotel reception desk",
      category: "Hotel and views",
      image: "/images/tasey-14.jpeg",
    },
    {
      id: 5,
      title: "Hotel lobby seating",
      category: "Hotel and views",
      image: "/images/tasey-13.jpeg",
    },
    {
      id: 6,
      title: "Lobby waiting area",
      category: "Hotel and views",
      image: "/images/tasey-15.jpeg",
    },
    {
      id: 7,
      title: "Hotel corridor",
      category: "Hotel and views",
      image: "/images/tasey-18.jpeg",
    },
    {
      id: 8,
      title: "Lobby staircase and elevator",
      category: "Hotel and views",
      image: "/images/gallery/tasey-gallery-01.jpg",
    },
    {
      id: 9,
      title: "Lobby lounge with TV",
      category: "Hotel and views",
      image: "/images/gallery/tasey-gallery-02.jpg",
    },
    {
      id: 11,
      title: "Hotel wall art portrait",
      category: "Hotel and views",
      image: "/images/gallery/tasey-gallery-04.jpg",
    },
    {
      id: 12,
      title: "Guest room with patterned headboard",
      category: "Rooms and suites",
      image: "/images/tasey-17.jpeg",
    },
    {
      id: 13,
      title: "Guest room with floral wallpaper",
      category: "Rooms and suites",
      image: "/images/tasey-16.jpeg",
    },
    {
      id: 14,
      title: "Room lounge seating",
      category: "Rooms and suites",
      image: "/images/tasey-04.jpeg",
    },
    {
      id: 15,
      title: "Bedroom with curtains",
      category: "Rooms and suites",
      image: "/images/tasey-07.jpeg",
    },
    {
      id: 16,
      title: "Room with wall-mounted TV",
      category: "Rooms and suites",
      image: "/images/tasey-19.jpeg",
    },
    {
      id: 17,
      title: "Bathroom and wardrobe",
      category: "Rooms and suites",
      image: "/images/gallery/tasey-gallery-05.jpg",
    },
    {
      id: 18,
      title: "Rooftop pool and open sky",
      category: "Rooftop and pool",
      image: "/images/tasey-09.jpeg",
    },
    {
      id: 19,
      title: "Rooftop terrace and pool",
      category: "Rooftop and pool",
      image: "/images/tasey-06.jpeg",
    },
    {
      id: 20,
      title: "Rooftop pool with steel railing",
      category: "Rooftop and pool",
      image: "/images/tasey-05.jpeg",
    },
    {
      id: 21,
      title: "Haldi restaurant in daylight",
      category: "Dining and banquets",
      image: "/images/tasey-02.jpeg",
    },
    {
      id: 22,
      title: "Haldi restaurant with pendant lights",
      category: "Dining and banquets",
      image: "/images/tasey-11.jpeg",
    },
    {
      id: 23,
      title: "Private dining room",
      category: "Dining and banquets",
      image: "/images/tasey-12.jpeg",
    },
    {
      id: 24,
      title: "Banquet hall with balloons",
      category: "Dining and banquets",
      image: "/images/tasey-10.jpeg",
    },
    {
      id: 25,
      title: "Crockery station",
      category: "Dining and banquets",
      image: "/images/gallery/tasey-gallery-06.jpg",
    },
    {
      id: 26,
      title: "Jhumka restaurant menu",
      category: "Dining and banquets",
      image: "/images/gallery/tasey-gallery-07.jpg",
    },
    {
      id: 27,
      title: "Chef at the buffet counter",
      category: "Dining and banquets",
      image: "/images/gallery/tasey-gallery-08.jpg",
    },
    {
      id: 28,
      title: "Restaurant team",
      category: "Dining and banquets",
      image: "/images/gallery/tasey-gallery-09.jpg",
    },
  ];

  const categories = ["All", "Hotel and views", "Rooms and suites", "Rooftop and pool", "Dining and banquets"];

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#F8F3EA] text-[#011A51]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif-luxury text-[28px] sm:text-[40px] text-[#011A51]">
          The Tasey gallery
        </h2>
        <p className="mt-3 text-[16px] leading-[1.6] text-[#605A50] max-w-md">
          Photos of the hotel, rooms, rooftop pool, Haldi restaurant, and event spaces.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-x-6 gap-y-2 mt-8 mb-10 border-b border-[#E5DCCB] pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-[16px] transition-colors ${
                activeCategory === cat
                  ? "text-[#011A51]"
                  : "text-[#605A50] hover:text-[#011A51]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
          {filteredItems.map((item) => (
            <div key={item.id}>
              <button
                onClick={() => setSelectedImage({ url: item.image, title: item.title })}
                className="relative h-64 w-full rounded overflow-hidden block"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </button>
              <p className="mt-2 text-[16px] text-[#011A51]">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 sm:p-8"
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-3 rounded text-white hover:bg-white/10 transition-colors z-10"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative w-full max-w-5xl h-[80vh] flex flex-col justify-end">
            <Image
              src={selectedImage.url}
              alt={selectedImage.title}
              fill
              sizes="100vw"
              className="object-contain"
            />
            <p className="relative z-10 pt-4 text-center text-[16px] text-white">
              {selectedImage.title}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
