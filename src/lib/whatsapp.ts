/**
 * WhatsApp hand-off for reservations.
 *
 * The hotel has no WhatsApp Business API, so we cannot send messages on the
 * guest's behalf. Instead we build a fully pre-filled wa.me deep link: the
 * guest taps Send in their own WhatsApp and the reservations desk receives the
 * complete request in a normal chat. No API, no server, no credentials.
 */

/** Reservations desk, digits only with country code — the form wa.me requires. */
export const WHATSAPP_NUMBER = "917073873670";

/** Same number, formatted for display in the UI. */
export const WHATSAPP_DISPLAY = "+91 70738 73670";

/** Front desk second line, used for tel: links only. */
export const PHONE_SECONDARY = "+919145824248";

type Kind = "room" | "dining" | "excursion" | "event";

/**
 * Which kind of request each booking category is. This drives both the opening
 * line ("reserve a table" vs "book a safari") and whether the message quotes a
 * date range or a single date — a dinner booking has no check-out.
 */
const CATEGORY_KIND: Record<string, Kind> = {
  "Executive Room": "room",
  "Luxury Room": "room",
  "Suite Room": "room",
  "Haldi Restaurant": "dining",
  "Jhumka Rooftop Pool": "dining",
  "Elephant Village Excursion": "excursion",
  "Jhalana Leopard Safari": "excursion",
  "Nahargarh Lion Safari": "excursion",
  "Custom Excursion Request": "excursion",
  "Banquet Event": "event",
};

const OPENING_LINE: Record<Kind, string> = {
  room: "I would like to reserve a room.",
  dining: "I would like to reserve a table.",
  excursion: "I would like to book an excursion.",
  event: "I would like to enquire about an event booking.",
};

export function categoryKind(category: string): Kind {
  return CATEGORY_KIND[category] ?? "room";
}

/** "2026-09-24" -> "24 Sep 2026". Falls back to the raw value if unparseable. */
function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  if (!y || !m || !d) return iso;
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${d} ${months[m - 1]} ${y}`;
}

/** Local-time ISO date `offset` days from today, for form defaults. */
export function isoDaysFromToday(offset: number): string {
  const d = new Date();
  d.setDate(d.getDate() + offset);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

export interface BookingDetails {
  reference: string;
  category: string;
  checkIn: string;
  checkOut: string;
  guests: string;
  fullName: string;
  phone: string;
  email?: string;
  specialRequests?: string;
}

/**
 * The message body the guest sends. Plain text with real line breaks — WhatsApp
 * renders these as-is, so the desk sees a readable request rather than one long
 * run-on line.
 */
export function buildBookingMessage(d: BookingDetails): string {
  const kind = categoryKind(d.category);
  const lines = [
    `Hello The Tasey Hotel, ${OPENING_LINE[kind]}`,
    "",
    `Reference: ${d.reference}`,
    `Booking for: ${d.category}`,
  ];

  if (kind === "room") {
    lines.push(`Check-in: ${formatDate(d.checkIn)}`, `Check-out: ${formatDate(d.checkOut)}`);
  } else {
    lines.push(`Date: ${formatDate(d.checkIn)}`);
  }

  lines.push(`Guests: ${d.guests}`, "", `Name: ${d.fullName}`, `Phone: ${d.phone}`);

  if (d.email?.trim()) lines.push(`Email: ${d.email.trim()}`);
  if (d.specialRequests?.trim()) lines.push("", `Special requests: ${d.specialRequests.trim()}`);

  lines.push("", "Please confirm availability. Thank you.");

  return lines.join("\n");
}

/** wa.me deep link with the message pre-filled and URL-encoded. */
export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/** Short enquiry link for the floating button and general "chat with us" CTAs. */
export function enquiryUrl(
  message = "Hello The Tasey, I would like to enquire about room availability and dining.",
): string {
  return buildWhatsAppUrl(message);
}
