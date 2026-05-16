"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import GoldDivider from "@/components/GoldDivider";
import PageBanner from "@/components/PageBanner";
import { WA_URL, playfairStyle } from "@/lib/constants";

const reviews = [
  {
    name: "Ashiq Niyad",
    avatar: "AN",
    rating: 5,
    highlight: "Professionalism & Customer Service",
    stylist: "Abdul Jabbar",
    review:
      "Fantastic experience at Clipping Gents Salon. Abdul Jabbar's professionalism and excellent customer service made the visit truly memorable. The environment is clean, calm, and welcoming. I walked in for a trim and walked out feeling like a new man. Highly recommend to anyone in Sharjah looking for a quality gents salon.",
  },
  {
    name: "Alan Varghese Vinu",
    avatar: "AV",
    rating: 5,
    highlight: "Excellent Haircut & Shave",
    stylist: "Muhamad",
    review:
      "Muhamad did an excellent job with my haircut and shave. The salon is clean and welcoming — you feel comfortable the moment you walk in. He listened carefully to what I wanted and delivered exactly that. Will definitely be returning. If you haven't tried Clipping Gents yet, you're missing out.",
  },
  {
    name: "Ristia Nabilla",
    avatar: "RN",
    rating: 5,
    highlight: "Great Work",
    stylist: "Abdul Jabbar",
    review:
      "Abdul Jabar you did good work I really appreciate your work. Very precise, very clean — exactly what I wanted. He took his time to understand the style I was going for and executed it flawlessly. Thank you for the great experience!",
  },
  {
    name: "Nawal Rahman",
    avatar: "NR",
    rating: 5,
    highlight: "Skillful & Affordable",
    stylist: null,
    review:
      "Nice attitude, good communication, skillful stylist. Very reasonable and affordable prices. One of the best salons in Sharjah without a doubt. The staff are friendly and attentive. I never feel rushed or overlooked — every visit feels premium even at the price point they offer.",
  },
  {
    name: "Sumesh Mohan M",
    avatar: "SM",
    rating: 5,
    highlight: "Knows What Style Suits You",
    stylist: "Abdul Jabbar",
    review:
      "Abdul Jabbar knows what style suits each face. He doesn't just cut hair — he gives you a look. I showed him a reference photo once and he improved on it without me even asking. That's the level of artistry you get here. I've been coming back every month and I won't be going anywhere else.",
  },
  {
    name: "Bhagyesh Balakrishnan",
    avatar: "BB",
    rating: 5,
    highlight: "Every Minute Detail Taken Care Of",
    stylist: null,
    review:
      "Perfect in handling all grooming needs. Every minute detail taken care of. You feel like royalty walking out of that chair. The attention to finishing touches — the razor line, the neck trim, the cleanup — is what separates this salon from the rest. Worth every dirham.",
  },
];

export default function ReviewsClient() {
  return (
    <div className="bg-[#0F0F0F] min-h-screen pb-24">
      <PageBanner
        src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1920&q=80"
        alt="Barbershop interior"
        eyebrow="Client Stories"
        title="Reviews"
      />

      <div className="max-w-5xl mx-auto px-6 pt-6">
        <SectionReveal className="text-center mb-14">
          <GoldDivider />
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="text-[#C9A84C] fill-[#C9A84C]" />
              ))}
            </div>
            <span className="text-[#F5ECD7] font-bold text-xl">4.9</span>
            <span className="text-[#888]">· 36 Google Reviews</span>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review, i) => (
            <SectionReveal key={review.name} delay={i * 0.07}>
              <motion.div
                whileHover={{ borderColor: "rgba(201,168,76,0.35)", y: -4 }}
                transition={{ duration: 0.2 }}
                className="bg-[#1A1A1A] border border-[#C9A84C]/15 rounded-2xl p-7 flex flex-col h-full transition-all duration-300"
              >
                <Quote size={28} className="text-[#C9A84C]/30 mb-4" />

                <span className="text-[#C9A84C] text-xs font-semibold uppercase tracking-wider mb-3">
                  {review.highlight}
                </span>

                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star key={j} size={14} className="text-[#C9A84C] fill-[#C9A84C]" />
                  ))}
                </div>

                <blockquote
                  className="text-[#F5ECD7]/85 text-sm md:text-base leading-relaxed italic flex-1 mb-6"
                  style={playfairStyle}
                >
                  &ldquo;{review.review}&rdquo;
                </blockquote>

                <div className="border-t border-[#C9A84C]/10 pt-5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#C9A84C]/15 border border-[#C9A84C]/30 flex items-center justify-center text-[#C9A84C] text-sm font-bold">
                      {review.avatar}
                    </div>
                    <div>
                      <div className="text-[#F5ECD7] font-semibold text-sm">{review.name}</div>
                      <div className="text-[#555] text-xs">Verified Google Review</div>
                    </div>
                  </div>
                  {review.stylist && (
                    <span className="text-[#555] text-xs">
                      Stylist: <span className="text-[#888]">{review.stylist}</span>
                    </span>
                  )}
                </div>
              </motion.div>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal className="text-center mt-16">
          <p className="text-[#888] mb-2 text-base">Loved your experience?</p>
          <p className="text-[#555] text-sm mb-8">
            Leave us a Google review — it helps the team and the community.
          </p>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#C9A84C] text-[#0F0F0F] font-bold px-8 py-4 rounded-full hover:bg-[#E8C96A] transition-colors gold-glow"
          >
            Book Your Visit
          </a>
        </SectionReveal>
      </div>
    </div>
  );
}
