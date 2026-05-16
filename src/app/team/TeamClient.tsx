"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Award, Clock } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import GoldDivider from "@/components/GoldDivider";
import PageBanner from "@/components/PageBanner";
import { WA_URL, playfairStyle } from "@/lib/constants";

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
    img: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80",
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
    img: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=800&q=80",
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
    img: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=800&q=80",
  },
];

export default function TeamClient() {
  return (
    <div className="bg-[#0F0F0F] min-h-screen pb-24">
      <PageBanner
        src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1920&q=80"
        alt="Salon interior"
        eyebrow="The Talent"
        title="Our Team"
      />

      <div className="max-w-5xl mx-auto px-6 pt-6">
        <SectionReveal className="text-center mb-14">
          <GoldDivider />
          <p className="text-[#888] max-w-lg mx-auto mt-3 text-lg">
            Three specialists. Thousands of satisfied clients. One shared standard of excellence.
          </p>
        </SectionReveal>

        <div className="flex flex-col gap-10">
          {team.map((member, i) => (
            <SectionReveal key={member.name} delay={i * 0.1}>
              <motion.div
                whileHover={{ borderColor: "rgba(201,168,76,0.4)" }}
                className="bg-[#1A1A1A] border border-[#C9A84C]/15 rounded-3xl overflow-hidden flex flex-col md:flex-row"
              >
                <div className="relative md:w-64 h-56 md:h-auto shrink-0 overflow-hidden">
                  <Image
                    src={member.img}
                    alt={`${member.name} — ${member.role}`}
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1A1A1A]/60 hidden md:block" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 to-transparent md:hidden" />
                  <div className="absolute bottom-4 left-4 md:hidden">
                    <span className="text-3xl font-bold text-[#C9A84C] drop-shadow-lg" style={playfairStyle}>
                      {member.initials}
                    </span>
                  </div>
                  {member.tag && (
                    <span className="absolute top-4 left-4 bg-[#C9A84C] text-[#0F0F0F] text-[10px] font-bold px-2.5 py-1 rounded-full">
                      {member.tag}
                    </span>
                  )}
                </div>

                <div className="flex-1 p-8 md:p-10">
                  <div className="flex items-start justify-between flex-wrap gap-3 mb-4">
                    <div>
                      <h2 className="text-[#F5ECD7] text-2xl md:text-3xl font-bold mb-1" style={playfairStyle}>
                        {member.name}
                      </h2>
                      <p className="text-[#C9A84C] text-sm font-medium">{member.role}</p>
                      <p className="text-[#555] text-xs mt-1 uppercase tracking-widest">{member.specialty}</p>
                    </div>
                    <div className="flex flex-col gap-1.5 items-end">
                      <div className="flex items-center gap-1.5 text-[#888] text-xs">
                        <Clock size={11} className="text-[#C9A84C]" />
                        {member.experience}
                      </div>
                      <div className="flex items-center gap-1.5 text-[#888] text-xs">
                        <Award size={11} className="text-[#C9A84C]" />
                        Expert Certified
                      </div>
                    </div>
                  </div>

                  <p className="text-[#888] leading-relaxed mb-6 text-sm md:text-base">{member.bio}</p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {member.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-[#888]">
                        <Star size={11} className="text-[#C9A84C] mt-1 shrink-0 fill-[#C9A84C]" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal className="text-center mt-16">
          <p className="text-[#888] mb-6">Request a specific stylist when you book.</p>
          <a
            href={WA_URL}
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
