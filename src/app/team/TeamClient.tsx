"use client";

import { motion } from "framer-motion";
import { Star, Award, Clock } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import GoldDivider from "@/components/GoldDivider";

const team = [
  {
    name: "Abdul Jabbar",
    initials: "AJ",
    role: "Lead Stylist & Founder",
    specialty: "Precision Fades, Classic Cuts, Beard Sculpting",
    experience: "8+ Years",
    tag: "Most Reviewed",
    bio: "Abdul Jabbar is the heartbeat of Clipping Gents Salon. Known for his meticulous eye for detail and warm hospitality, he has built a loyal following across Sharjah's Al Nad community. Clients trust him not just with their hair — but with their look, their confidence, and their story.",
    highlights: [
      "Named in 4 of 6 five-star reviews by name",
      "Specialist in face-shape analysis",
      "Expert in hot straight-razor shaves",
      "Fluent in Arabic, Urdu & English",
    ],
  },
  {
    name: "Muhamad",
    initials: "MH",
    role: "Senior Barber",
    specialty: "Haircuts, Scissor Work, Clean Shaves",
    experience: "5+ Years",
    tag: "",
    bio: "Muhamad brings calm precision and a gentle touch to every client. Praised specifically by clients for his clean results and the welcoming atmosphere he creates, Muhamad is a trusted cornerstone of the salon's daily excellence.",
    highlights: [
      "Master of scissor-over-comb technique",
      "Consistently praised for clean results",
      "Specialist in straight shaves",
      "Patient with first-time clients and children",
    ],
  },
  {
    name: "Mazhar Iqbal",
    initials: "MI",
    role: "Grooming Expert",
    specialty: "Beard Styling, Hair Straightening, Groom Packages",
    experience: "6+ Years",
    tag: "",
    bio: "Mazhar Iqbal is the salon's grooming specialist, with deep expertise in beard design and pre-event styling. His eye for symmetry and his calm demeanour make him the go-to stylist for grooms and professionals who can't afford anything less than perfect.",
    highlights: [
      "Specialist in wedding groom packages",
      "Expert in beard line design",
      "Trained in hair straightening techniques",
      "Detail-oriented finishing & aftercare",
    ],
  },
];

export default function TeamClient() {
  return (
    <div className="bg-[#0F0F0F] min-h-screen pt-28 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <SectionReveal className="text-center mb-16">
          <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-[0.25em] mb-3">
            The Talent
          </p>
          <h1
            className="text-5xl md:text-6xl font-bold text-[#F5ECD7] mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Our Team
          </h1>
          <GoldDivider />
          <p className="text-[#888] max-w-lg mx-auto mt-3 text-lg">
            Three specialists. Thousands of satisfied clients. One shared standard of excellence.
          </p>
        </SectionReveal>

        {/* Team cards */}
        <div className="flex flex-col gap-10">
          {team.map((member, i) => (
            <SectionReveal key={member.name} delay={i * 0.1}>
              <motion.div
                whileHover={{ borderColor: "rgba(201,168,76,0.4)" }}
                className="bg-[#1A1A1A] border border-[#C9A84C]/15 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row gap-8"
              >
                {/* Avatar column */}
                <div className="flex flex-col items-center md:items-start gap-4 md:w-48 shrink-0">
                  <div className="relative w-28 h-28 rounded-full bg-[#C9A84C]/10 border-2 border-[#C9A84C]/40 flex items-center justify-center">
                    <span
                      className="text-3xl font-bold text-[#C9A84C]"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {member.initials}
                    </span>
                    {member.tag && (
                      <span className="absolute -top-2 -right-2 bg-[#C9A84C] text-[#0F0F0F] text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
                        {member.tag}
                      </span>
                    )}
                  </div>

                  <div className="text-center md:text-left">
                    <div className="flex items-center gap-1.5 text-[#888] text-xs mb-1">
                      <Clock size={12} className="text-[#C9A84C]" />
                      {member.experience}
                    </div>
                    <div className="flex items-center gap-1.5 text-[#888] text-xs">
                      <Award size={12} className="text-[#C9A84C]" />
                      Expert Certified
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h2
                    className="text-[#F5ECD7] text-2xl md:text-3xl font-bold mb-1"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {member.name}
                  </h2>
                  <p className="text-[#C9A84C] text-sm font-medium mb-1">{member.role}</p>
                  <p className="text-[#555] text-xs mb-5 uppercase tracking-widest">{member.specialty}</p>

                  <p className="text-[#888] leading-relaxed mb-6 text-sm md:text-base">{member.bio}</p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {member.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-[#888]">
                        <Star size={12} className="text-[#C9A84C] mt-1 shrink-0 fill-[#C9A84C]" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </SectionReveal>
          ))}
        </div>

        {/* CTA */}
        <SectionReveal className="text-center mt-16">
          <p className="text-[#888] mb-6">Request a specific stylist when you book.</p>
          <a
            href="https://wa.me/971507545032"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#C9A84C] text-[#0F0F0F] font-bold px-8 py-4 rounded-full hover:bg-[#E8C96A] transition-colors gold-glow"
          >
            Book Your Stylist
          </a>
        </SectionReveal>
      </div>
    </div>
  );
}
