import type { Metadata } from "next";
import TeamClient from "./TeamClient";

export const metadata: Metadata = {
  title: "Our Team | Clipping Gents Salon Sharjah",
  description:
    "Meet Abdul Jabbar, Muhamad, and Mazhar Iqbal — Sharjah's finest grooming experts at Clipping Gents Salon.",
};

export default function TeamPage() {
  return <TeamClient />;
}
