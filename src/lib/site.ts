/** Canonical origin. Used by metadata, robots, sitemap and structured data. */
export const SITE_URL = "https://thetaseyhotel.com";

/**
 * The hotel's Google listing, addressed by its Knowledge Graph id. Linking to it
 * from structured data ties this site to the listing so Google treats both as
 * one business. A kgmid URL opens the listing directly, so it is never
 * spell-corrected to "taste" the way a typed search for the name can be.
 */
export const GOOGLE_LISTING_URL = "https://www.google.com/search?kgmid=/g/11z_0qjm62";

export const HOTEL = {
  name: "The Tasey Hotel",
  legalName: "The Tasey Hotel",
  // Spellings people actually type. Google spell-corrects "Tasey" to "Taste",
  // so naming the variants in structured data helps it treat Tasey as a name.
  alternateNames: ["Tasey Hotel", "The Tasey", "Tasey Hotel Amer", "The Tasey Hotel Jaipur"],
  description:
    "The Tasey Hotel in Amer, Jaipur, with rooms, Haldi restaurant, Jhumka rooftop pool, event spaces, and nearby safaris.",
  // Locality matches the hotel's Google listing (Sisiyawas), confirmed by the
  // client on 30 October 2026. Keep the two identical so Google reads the site
  // and the listing as one business.
  street: "Near Nahargarh Biological Park, Sisiyawas, Delhi-Jaipur Highway, Amer",
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
  // Official profiles, emitted as schema.org `sameAs`. Instagram stays first:
  // the footer links it by index. Add Booking.com, MakeMyTrip, TripAdvisor URLs
  // here as they go live.
  sameAs: ["https://www.instagram.com/thetasey_hotel/", GOOGLE_LISTING_URL],
} as const;

/** Exact location pin; this does not imply a verified Google Business Profile. */
export const HOTEL_MAP_URL = `https://www.google.com/maps/search/?api=1&query=${HOTEL.latitude},${HOTEL.longitude}`;
