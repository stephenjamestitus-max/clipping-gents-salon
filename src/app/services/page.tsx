import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Services | Clipping Gents Salon Sharjah",
  description:
    "Full menu of men's grooming services: haircuts, beard trims, hot shaves, eyebrow threading, hair straightening, kids' cuts and groom packages.",
};

export default function ServicesPage() {
  return <ServicesClient />;
}
