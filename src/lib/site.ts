/** Canonical origin. Used by metadata, robots, sitemap and structured data. */
export const SITE_URL = "https://thetaseyhotel.com";

export const HOTEL = {
  name: "The Tasey Hotel",
  legalName: "The Tasey Hotel",
  description:
    "The Tasey Hotel in Amer, Jaipur, with rooms, Haldi restaurant, Jhumka rooftop pool, event spaces, and nearby safaris.",
  street: "Amer",
  locality: "Jaipur",
  region: "Rajasthan",
  postalCode: "302028",
  country: "IN",
  // Amer, Jaipur. Approximate — replace with the exact pin from Google Business.
  latitude: 26.9855,
  longitude: 75.8513,
  phones: ["+917073873670", "+919145824248"],
  priceRange: "₹₹",
  image: "/images/tasey-01.jpeg",
} as const;
