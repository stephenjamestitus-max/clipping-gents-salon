import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact & Location | Clipping Gents Salon Sharjah",
  description:
    "Find Clipping Gents Salon at Al Shamsi Building, Al Nad, Sharjah. Open daily 8 AM – 10 PM. Call 050 754 5032 or book on WhatsApp.",
};

export default function ContactPage() {
  return <ContactClient />;
}
