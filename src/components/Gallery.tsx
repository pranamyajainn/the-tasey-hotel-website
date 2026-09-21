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
      id: 2,
      title: "The Tasey Hotel facade",
      category: "Hotel and views",
      image: "/images/tasey-exterior.jpeg",
    },
    {
      id: 3,
      title: "Hotel exterior in daylight",
      category: "Hotel and views",
      image: "/images/tasey-03.jpeg",
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
      title: "Hotel lobby seating",
      category: "Hotel and views",
      image: "/images/gallery/tasey-gallery-013.jpg",
    },
    {
      id: 9,
      title: "Hotel lobby seating 2",
      category: "Hotel and views",
      image: "/images/gallery/tasey-gallery-014.jpg",
    },
    {
      id: 10,
      title: "Hotel lobby seating 3",
      category: "Hotel and views",
      image: "/images/gallery/tasey-gallery-015.jpg",
    },
    {
      id: 11,
      title: "Hotel lobby and staircase",
      category: "Hotel and views",
      image: "/images/gallery/tasey-gallery-032.jpg",
    },
    {
      id: 12,
      title: "Hotel lobby and staircase 2",
      category: "Hotel and views",
      image: "/images/gallery/tasey-gallery-033.jpg",
    },
    {
      id: 13,
      title: "Lobby lounge with TV",
      category: "Hotel and views",
      image: "/images/gallery/tasey-gallery-037.jpg",
    },
    {
      id: 14,
      title: "Hotel wall art",
      category: "Hotel and views",
      image: "/images/gallery/tasey-gallery-046.jpg",
    },
    {
      id: 15,
      title: "Hotel wall art 2",
      category: "Hotel and views",
      image: "/images/gallery/tasey-gallery-047.jpg",
    },
    {
      id: 16,
      title: "Reception desk",
      category: "Hotel and views",
      image: "/images/gallery/tasey-gallery-051.jpg",
    },
    {
      id: 17,
      title: "Reception desk 2",
      category: "Hotel and views",
      image: "/images/gallery/tasey-gallery-052.jpg",
    },
    {
      id: 18,
      title: "Reception desk 3",
      category: "Hotel and views",
      image: "/images/gallery/tasey-gallery-053.jpg",
    },
    {
      id: 19,
      title: "Reception desk 4",
      category: "Hotel and views",
      image: "/images/gallery/tasey-gallery-054.jpg",
    },
    {
      id: 20,
      title: "Reception desk 5",
      category: "Hotel and views",
      image: "/images/gallery/tasey-gallery-055.jpg",
    },
    {
      id: 21,
      title: "Reception desk 6",
      category: "Hotel and views",
      image: "/images/gallery/tasey-gallery-056.jpg",
    },
    {
      id: 22,
      title: "Reception desk 7",
      category: "Hotel and views",
      image: "/images/gallery/tasey-gallery-057.jpg",
    },
    {
      id: 23,
      title: "Reception desk 8",
      category: "Hotel and views",
      image: "/images/gallery/tasey-gallery-058.jpg",
    },
    {
      id: 24,
      title: "Hotel wall art 3",
      category: "Hotel and views",
      image: "/images/gallery/tasey-gallery-059.jpg",
    },
    {
      id: 25,
      title: "Hotel wall art 4",
      category: "Hotel and views",
      image: "/images/gallery/tasey-gallery-060.jpg",
    },
    {
      id: 26,
      title: "Hotel wall art 5",
      category: "Hotel and views",
      image: "/images/gallery/tasey-gallery-061.jpg",
    },
    {
      id: 27,
      title: "Lobby seating",
      category: "Hotel and views",
      image: "/images/gallery/tasey-gallery-062.jpg",
    },
    {
      id: 28,
      title: "Lobby and staircase",
      category: "Hotel and views",
      image: "/images/gallery/tasey-gallery-063.jpg",
    },
    {
      id: 29,
      title: "Hotel corridor",
      category: "Hotel and views",
      image: "/images/gallery/tasey-gallery-064.jpg",
    },
    {
      id: 30,
      title: "Guest room with patterned headboard",
      category: "Rooms and suites",
      image: "/images/tasey-17.jpeg",
    },
    {
      id: 31,
      title: "Room seating nook",
      category: "Rooms and suites",
      image: "/images/tasey-16.jpeg",
    },
    {
      id: 32,
      title: "Room lounge seating",
      category: "Rooms and suites",
      image: "/images/tasey-04.jpeg",
    },
    {
      id: 33,
      title: "Bedroom with curtains",
      category: "Rooms and suites",
      image: "/images/tasey-07.jpeg",
    },
    {
      id: 34,
      title: "Room with wall-mounted TV",
      category: "Rooms and suites",
      image: "/images/tasey-19.jpeg",
    },
    {
      id: 35,
      title: "Guest room",
      category: "Rooms and suites",
      image: "/images/gallery/tasey-gallery-065.jpg",
    },
    {
      id: 36,
      title: "Guest room 2",
      category: "Rooms and suites",
      image: "/images/gallery/tasey-gallery-066.jpg",
    },
    {
      id: 37,
      title: "Guest room 3",
      category: "Rooms and suites",
      image: "/images/gallery/tasey-gallery-067.jpg",
    },
    {
      id: 38,
      title: "Guest room 4",
      category: "Rooms and suites",
      image: "/images/gallery/tasey-gallery-068.jpg",
    },
    {
      id: 39,
      title: "Room seating area",
      category: "Rooms and suites",
      image: "/images/gallery/tasey-gallery-069.jpg",
    },
    {
      id: 40,
      title: "Room seating area 2",
      category: "Rooms and suites",
      image: "/images/gallery/tasey-gallery-070.jpg",
    },
    {
      id: 41,
      title: "Room bed and TV unit",
      category: "Rooms and suites",
      image: "/images/gallery/tasey-gallery-071.jpg",
    },
    {
      id: 42,
      title: "Room bed and TV unit 2",
      category: "Rooms and suites",
      image: "/images/gallery/tasey-gallery-072.jpg",
    },
    {
      id: 43,
      title: "Room work desk",
      category: "Rooms and suites",
      image: "/images/gallery/tasey-gallery-073.jpg",
    },
    {
      id: 44,
      title: "Room work desk 2",
      category: "Rooms and suites",
      image: "/images/gallery/tasey-gallery-074.jpg",
    },
    {
      id: 45,
      title: "Room work desk 3",
      category: "Rooms and suites",
      image: "/images/gallery/tasey-gallery-075.jpg",
    },
    {
      id: 46,
      title: "Room work desk 4",
      category: "Rooms and suites",
      image: "/images/gallery/tasey-gallery-076.jpg",
    },
    {
      id: 47,
      title: "Room work desk 5",
      category: "Rooms and suites",
      image: "/images/gallery/tasey-gallery-077.jpg",
    },
    {
      id: 48,
      title: "Guest room 5",
      category: "Rooms and suites",
      image: "/images/gallery/tasey-gallery-078.jpg",
    },
    {
      id: 49,
      title: "Guest room 6",
      category: "Rooms and suites",
      image: "/images/gallery/tasey-gallery-079.jpg",
    },
    {
      id: 50,
      title: "Room seating area 3",
      category: "Rooms and suites",
      image: "/images/gallery/tasey-gallery-080.jpg",
    },
    {
      id: 51,
      title: "Bathroom vanity",
      category: "Rooms and suites",
      image: "/images/gallery/tasey-gallery-081.jpg",
    },
    {
      id: 52,
      title: "Guest room 7",
      category: "Rooms and suites",
      image: "/images/gallery/tasey-gallery-082.jpg",
    },
    {
      id: 53,
      title: "Guest room 8",
      category: "Rooms and suites",
      image: "/images/gallery/tasey-gallery-083.jpg",
    },
    {
      id: 54,
      title: "Guest room 9",
      category: "Rooms and suites",
      image: "/images/gallery/tasey-gallery-084.jpg",
    },
    {
      id: 55,
      title: "Guest room 10",
      category: "Rooms and suites",
      image: "/images/gallery/tasey-gallery-085.jpg",
    },
    {
      id: 56,
      title: "Guest room with balcony window",
      category: "Rooms and suites",
      image: "/images/gallery/tasey-gallery-086.jpg",
    },
    {
      id: 57,
      title: "Guest room with balcony window 2",
      category: "Rooms and suites",
      image: "/images/gallery/tasey-gallery-087.jpg",
    },
    {
      id: 58,
      title: "Guest room with balcony window 3",
      category: "Rooms and suites",
      image: "/images/gallery/tasey-gallery-088.jpg",
    },
    {
      id: 59,
      title: "Guest room 11",
      category: "Rooms and suites",
      image: "/images/gallery/tasey-gallery-089.jpg",
    },
    {
      id: 60,
      title: "Guest room 12",
      category: "Rooms and suites",
      image: "/images/gallery/tasey-gallery-090.jpg",
    },
    {
      id: 61,
      title: "Guest room 13",
      category: "Rooms and suites",
      image: "/images/gallery/tasey-gallery-091.jpg",
    },
    {
      id: 62,
      title: "Guest room 14",
      category: "Rooms and suites",
      image: "/images/gallery/tasey-gallery-092.jpg",
    },
    {
      id: 63,
      title: "Guest room 15",
      category: "Rooms and suites",
      image: "/images/gallery/tasey-gallery-093.jpg",
    },
    {
      id: 64,
      title: "Guest room 16",
      category: "Rooms and suites",
      image: "/images/gallery/tasey-gallery-094.jpg",
    },
    {
      id: 65,
      title: "Guest room 17",
      category: "Rooms and suites",
      image: "/images/gallery/tasey-gallery-095.jpg",
    },
    {
      id: 66,
      title: "Guest room 18",
      category: "Rooms and suites",
      image: "/images/gallery/tasey-gallery-096.jpg",
    },
    {
      id: 67,
      title: "Guest room 19",
      category: "Rooms and suites",
      image: "/images/gallery/tasey-gallery-097.jpg",
    },
    {
      id: 68,
      title: "Guest room 20",
      category: "Rooms and suites",
      image: "/images/gallery/tasey-gallery-098.jpg",
    },
    {
      id: 69,
      title: "Guest room 21",
      category: "Rooms and suites",
      image: "/images/gallery/tasey-gallery-099.jpg",
    },
    {
      id: 70,
      title: "Rooftop pool and open sky",
      category: "Rooftop and pool",
      image: "/images/tasey-09.jpeg",
    },
    {
      id: 71,
      title: "Rooftop terrace and pool",
      category: "Rooftop and pool",
      image: "/images/tasey-06.jpeg",
    },
    {
      id: 72,
      title: "Rooftop pool with steel railing",
      category: "Rooftop and pool",
      image: "/images/tasey-05.jpeg",
    },
    {
      id: 73,
      title: "Haldi restaurant in daylight",
      category: "Dining and banquets",
      image: "/images/tasey-02.jpeg",
    },
    {
      id: 74,
      title: "Haldi restaurant with pendant lights",
      category: "Dining and banquets",
      image: "/images/tasey-11.jpeg",
    },
    {
      id: 75,
      title: "Private dining room",
      category: "Dining and banquets",
      image: "/images/tasey-12.jpeg",
    },
    {
      id: 76,
      title: "Banquet hall with balloons",
      category: "Dining and banquets",
      image: "/images/tasey-10.jpeg",
    },
    {
      id: 77,
      title: "Haldi restaurant, opening-day decor",
      category: "Dining and banquets",
      image: "/images/gallery/tasey-gallery-001.jpg",
    },
    {
      id: 78,
      title: "Haldi restaurant, opening-day decor 2",
      category: "Dining and banquets",
      image: "/images/gallery/tasey-gallery-002.jpg",
    },
    {
      id: 79,
      title: "Haldi restaurant, opening-day decor 3",
      category: "Dining and banquets",
      image: "/images/gallery/tasey-gallery-003.jpg",
    },
    {
      id: 80,
      title: "Haldi restaurant, opening-day decor 4",
      category: "Dining and banquets",
      image: "/images/gallery/tasey-gallery-004.jpg",
    },
    {
      id: 81,
      title: "Haldi restaurant, opening-day decor 5",
      category: "Dining and banquets",
      image: "/images/gallery/tasey-gallery-005.jpg",
    },
    {
      id: 82,
      title: "Haldi restaurant, opening-day decor 6",
      category: "Dining and banquets",
      image: "/images/gallery/tasey-gallery-006.jpg",
    },
    {
      id: 83,
      title: "Haldi restaurant, opening-day decor 7",
      category: "Dining and banquets",
      image: "/images/gallery/tasey-gallery-007.jpg",
    },
    {
      id: 84,
      title: "Haldi restaurant, opening-day decor 8",
      category: "Dining and banquets",
      image: "/images/gallery/tasey-gallery-008.jpg",
    },
    {
      id: 85,
      title: "Haldi restaurant, opening-day decor 9",
      category: "Dining and banquets",
      image: "/images/gallery/tasey-gallery-009.jpg",
    },
    {
      id: 86,
      title: "Haldi restaurant, opening-day decor 10",
      category: "Dining and banquets",
      image: "/images/gallery/tasey-gallery-010.jpg",
    },
    {
      id: 87,
      title: "Haldi restaurant, opening-day decor 11",
      category: "Dining and banquets",
      image: "/images/gallery/tasey-gallery-011.jpg",
    },
    {
      id: 88,
      title: "Haldi restaurant, opening-day decor 12",
      category: "Dining and banquets",
      image: "/images/gallery/tasey-gallery-012.jpg",
    },
    {
      id: 89,
      title: "Haldi restaurant seating",
      category: "Dining and banquets",
      image: "/images/gallery/tasey-gallery-016.jpg",
    },
    {
      id: 90,
      title: "Haldi restaurant seating 2",
      category: "Dining and banquets",
      image: "/images/gallery/tasey-gallery-017.jpg",
    },
    {
      id: 91,
      title: "Haldi restaurant seating 3",
      category: "Dining and banquets",
      image: "/images/gallery/tasey-gallery-018.jpg",
    },
    {
      id: 92,
      title: "Haldi restaurant seating 4",
      category: "Dining and banquets",
      image: "/images/gallery/tasey-gallery-019.jpg",
    },
    {
      id: 93,
      title: "Haldi restaurant seating 5",
      category: "Dining and banquets",
      image: "/images/gallery/tasey-gallery-020.jpg",
    },
    {
      id: 94,
      title: "Haldi restaurant seating 6",
      category: "Dining and banquets",
      image: "/images/gallery/tasey-gallery-021.jpg",
    },
    {
      id: 95,
      title: "Haldi restaurant seating 7",
      category: "Dining and banquets",
      image: "/images/gallery/tasey-gallery-022.jpg",
    },
    {
      id: 96,
      title: "Restaurant table setting",
      category: "Dining and banquets",
      image: "/images/gallery/tasey-gallery-023.jpg",
    },
    {
      id: 97,
      title: "Restaurant table setting 2",
      category: "Dining and banquets",
      image: "/images/gallery/tasey-gallery-024.jpg",
    },
    {
      id: 98,
      title: "Restaurant table setting 3",
      category: "Dining and banquets",
      image: "/images/gallery/tasey-gallery-025.jpg",
    },
    {
      id: 99,
      title: "Restaurant table setting 4",
      category: "Dining and banquets",
      image: "/images/gallery/tasey-gallery-026.jpg",
    },
    {
      id: 100,
      title: "Restaurant table setting 5",
      category: "Dining and banquets",
      image: "/images/gallery/tasey-gallery-027.jpg",
    },
    {
      id: 101,
      title: "Restaurant table setting 6",
      category: "Dining and banquets",
      image: "/images/gallery/tasey-gallery-028.jpg",
    },
    {
      id: 102,
      title: "Haldi restaurant seating detail",
      category: "Dining and banquets",
      image: "/images/gallery/tasey-gallery-029.jpg",
    },
    {
      id: 103,
      title: "Haldi restaurant seating detail 2",
      category: "Dining and banquets",
      image: "/images/gallery/tasey-gallery-030.jpg",
    },
    {
      id: 104,
      title: "Haldi restaurant seating detail 3",
      category: "Dining and banquets",
      image: "/images/gallery/tasey-gallery-031.jpg",
    },
    {
      id: 105,
      title: "Haldi restaurant seating detail 4",
      category: "Dining and banquets",
      image: "/images/gallery/tasey-gallery-034.jpg",
    },
    {
      id: 106,
      title: "Haldi restaurant seating detail 5",
      category: "Dining and banquets",
      image: "/images/gallery/tasey-gallery-035.jpg",
    },
    {
      id: 107,
      title: "Haldi restaurant seating detail 6",
      category: "Dining and banquets",
      image: "/images/gallery/tasey-gallery-036.jpg",
    },
    {
      id: 108,
      title: "Haldi restaurant seating detail 7",
      category: "Dining and banquets",
      image: "/images/gallery/tasey-gallery-038.jpg",
    },
    {
      id: 109,
      title: "Haldi restaurant seating detail 8",
      category: "Dining and banquets",
      image: "/images/gallery/tasey-gallery-039.jpg",
    },
    {
      id: 110,
      title: "Jhumka menu and table setting",
      category: "Dining and banquets",
      image: "/images/gallery/tasey-gallery-040.jpg",
    },
    {
      id: 111,
      title: "Jhumka menu and table setting 2",
      category: "Dining and banquets",
      image: "/images/gallery/tasey-gallery-041.jpg",
    },
    {
      id: 112,
      title: "Jhumka menu and table setting 3",
      category: "Dining and banquets",
      image: "/images/gallery/tasey-gallery-042.jpg",
    },
    {
      id: 113,
      title: "Jhumka menu and table setting 4",
      category: "Dining and banquets",
      image: "/images/gallery/tasey-gallery-043.jpg",
    },
    {
      id: 114,
      title: "Jhumka menu and table setting 5",
      category: "Dining and banquets",
      image: "/images/gallery/tasey-gallery-044.jpg",
    },
    {
      id: 115,
      title: "Jhumka menu and table setting 6",
      category: "Dining and banquets",
      image: "/images/gallery/tasey-gallery-045.jpg",
    },
    {
      id: 116,
      title: "Restaurant seating detail",
      category: "Dining and banquets",
      image: "/images/gallery/tasey-gallery-048.jpg",
    },
    {
      id: 117,
      title: "Table setting",
      category: "Dining and banquets",
      image: "/images/gallery/tasey-gallery-049.jpg",
    },
    {
      id: 118,
      title: "Crockery station",
      category: "Dining and banquets",
      image: "/images/gallery/tasey-gallery-050.jpg",
    },
    {
      id: 119,
      title: "Private event at Haldi",
      category: "Dining and banquets",
      image: "/images/gallery/tasey-gallery-100.jpg",
    },
    {
      id: 120,
      title: "Private event at Haldi 2",
      category: "Dining and banquets",
      image: "/images/gallery/tasey-gallery-101.jpg",
    },
    {
      id: 121,
      title: "Private event at Haldi 3",
      category: "Dining and banquets",
      image: "/images/gallery/tasey-gallery-102.jpg",
    },
    {
      id: 122,
      title: "Private event at Haldi 4",
      category: "Dining and banquets",
      image: "/images/gallery/tasey-gallery-103.jpg",
    },
    {
      id: 123,
      title: "Private event at Haldi 5",
      category: "Dining and banquets",
      image: "/images/gallery/tasey-gallery-104.jpg",
    },
    {
      id: 124,
      title: "Private event at Haldi 6",
      category: "Dining and banquets",
      image: "/images/gallery/tasey-gallery-105.jpg",
    },
    {
      id: 125,
      title: "Chef at the buffet counter",
      category: "Dining and banquets",
      image: "/images/gallery/tasey-gallery-106.jpg",
    },
    {
      id: 126,
      title: "Chef at the buffet counter 2",
      category: "Dining and banquets",
      image: "/images/gallery/tasey-gallery-107.jpg",
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
