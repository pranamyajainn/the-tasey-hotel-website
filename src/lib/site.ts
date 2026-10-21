/** Canonical origin. Used by metadata, robots, sitemap and structured data. */
export const SITE_URL = "https://thetaseyhotel.com";

export const HOTEL = {
  name: "The Tasey Hotel",
  legalName: "The Tasey Hotel",
  // Spellings people actually type. Google spell-corrects "Tasey" to "Taste",
  // so naming the variants in structured data helps it treat Tasey as a name.
  alternateNames: ["Tasey Hotel", "The Tasey", "Tasey Hotel Amer", "The Tasey Hotel Jaipur"],
  description:
    "The Tasey Hotel in Amer, Jaipur, with rooms, Haldi restaurant, Jhumka rooftop pool, event spaces, and nearby safaris.",
  street: "Near Nahargarh Biological Park, Kunda, Delhi-Jaipur Highway, Amer",
  locality: "Jaipur",
  region: "Rajasthan",
  postalCode: "302028",
  country: "IN",
  // Hotel location supplied by the client on 20 October 2026.
  latitude: 27.0131268,
  longitude: 75.8787436,
  phones: ["+917073873670", "+919145824248"],
  priceRange: "₹₹",
  image: "/images/tasey-01.jpeg",
  logo: "/logo.png",
  email: "thetaseyhotel@gmail.com",
  instagramHandle: "thetasey_hotel",
  // Official profiles, emitted as schema.org `sameAs`. Add the Google Business
  // Profile, Booking.com, MakeMyTrip, TripAdvisor URLs here as they go live.
  sameAs: ["https://www.instagram.com/thetasey_hotel/"],
} as const;

/** Exact location pin; this does not imply a verified Google Business Profile. */
export const HOTEL_MAP_URL = `https://www.google.com/maps/search/?api=1&query=${HOTEL.latitude},${HOTEL.longitude}`;
