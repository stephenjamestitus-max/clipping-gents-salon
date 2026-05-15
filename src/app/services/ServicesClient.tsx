"use client";

import { motion } from "framer-motion";
import {
  Scissors,
  Zap,
  Sparkles,
  Heart,
  Eye,
  Wind,
  Droplets,
  Baby,
  Gift,
  Leaf,
} from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import GoldDivider from "@/components/GoldDivider";

const services = [
  {
    icon: <Scissors size={32} />,
    name: "Haircut",
    desc: "Precision cut styled to your face shape, lifestyle, and preference. From classic tapers to modern textured looks.",
    price: "AED 20–35",
    tag: "Popular",
  },
  {
    icon: <Scissors size={32} />,
    name: "Scissor Cut",
    desc: "Hand-crafted scissor-over-comb technique for a refined, natural finish. Perfect for longer styles and fine hair.",
    price: "AED 25–40",
    tag: "",
  },
  {
    icon: <Zap size={32} />,
    name: "Beard Trim",
    desc: "Define and clean up your beard with expert clipper and scissor work. Maintains shape and symmetry.",
    price: "AED 15–25",
    tag: "Popular",
  },
  {
    icon: <Zap size={32} />,
    name: "Beard Styling",
    desc: "Full beard sculpt — from shaping the neckline to detailed edging and conditioning for a sharp, polished look.",
    price: "AED 25–40",
    tag: "",
  },
  {
    icon: <Sparkles size={32} />,
    name: "Hot Shave",
    desc: "Traditional straight-razor shave with warm steam towel, rich lather, and aftershave. The ultimate relaxation ritual.",
    price: "AED 30–45",
    tag: "Signature",
  },
  {
    icon: <Eye size={32} />,
    name: "Eyebrow Trimming",
    desc: "Clean, precise eyebrow shaping to frame your face. Includes threading and waxing options.",
    price: "AED 10–15",
    tag: "",
  },
  {
    icon: <Wind size={32} />,
    name: "Hair Straightening",
    desc: "Smooth and straighten curly or wavy hair with professional heat tools and protective styling products.",
    price: "AED 30–50",
    tag: "",
  },
  {
    icon: <Droplets size={32} />,
    name: "Shampoo & Conditioning",
    desc: "Deep cleanse and hydrating condition with professional salon products. Add-on or standalone service.",
    price: "AED 10–20",
    tag: "",
  },
  {
    icon: <Baby size={32} />,
    name: "Kids' Cuts",
    desc: "Gentle, patient haircuts for boys under 12. We make the chair experience fun and stress-free.",
    price: "AED 15–25",
    tag: "",
  },
  {
    icon: <Heart size={32} />,
    name: "Groom Packages",
    desc: "Premium pre-wedding and event grooming bundles. Haircut + beard + shave + skincare — arrive looking flawless.",
    price: "AED 80–150",
    tag: "Best Value",
  },
  {
    icon: <Leaf size={32} />,
    name: "Male Body Hair Removal",
    desc: "Professional chest, back, and arm waxing or threading. Clean, smooth results in a private, comfortable setting.",
    price: "AED 40–80",
    tag: "",
  },
  {
    icon: <Gift size={32} />,
    name: "Complete Refresh",
    desc: "Haircut + shampoo + beard trim + hot towel finish. The full reset in one sitting.",
    price: "AED 60–90",
    tag: "New",
  },
];

export default function ServicesClient() {
  return (
    <div className="bg-[#0F0F0F] min-h-screen pt-28 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <SectionReveal className="text-center mb-16">
          <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-[0.25em] mb-3">
            Our Menu
          </p>
          <h1
            className="text-5xl md:text-6xl font-bold text-[#F5ECD7] mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Services
          </h1>
          <GoldDivider />
          <p className="text-[#888] max-w-lg mx-auto mt-3 text-lg">
            Every service is performed by a specialist who takes pride in the craft.
            No rush. No shortcuts.
          </p>
        </SectionReveal>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <SectionReveal key={svc.name} delay={i * 0.05}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className="relative bg-[#1A1A1A] border border-[#C9A84C]/15 rounded-2xl p-7 h-full flex flex-col gold-glow-hover transition-all duration-300 group"
              >
                {/* Tag */}
                {svc.tag && (
                  <span className="absolute top-5 right-5 bg-[#C9A84C] text-[#0F0F0F] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                    {svc.tag}
                  </span>
                )}

                {/* Icon */}
                <div className="text-[#C9A84C] mb-5 w-12 h-12 rounded-xl bg-[#C9A84C]/10 flex items-center justify-center group-hover:bg-[#C9A84C]/20 transition-colors duration-300">
                  {svc.icon}
                </div>

                {/* Name */}
                <h2
                  className="text-[#F5ECD7] font-bold text-xl mb-2"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {svc.name}
                </h2>

                {/* Desc */}
                <p className="text-[#888] text-sm leading-relaxed flex-1 mb-5">
                  {svc.desc}
                </p>

                {/* Price */}
                <div className="border-t border-[#C9A84C]/10 pt-4 flex items-center justify-between">
                  <span className="text-[#C9A84C] font-bold text-base">{svc.price}</span>
                  <a
                    href="https://wa.me/971507545032"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#888] hover:text-[#C9A84C] transition-colors underline-offset-2 hover:underline"
                  >
                    Book →
                  </a>
                </div>
              </motion.div>
            </SectionReveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <SectionReveal className="text-center mt-16">
          <p className="text-[#888] mb-6 text-base">
            Not sure what you need? Message us and we&apos;ll recommend the right service.
          </p>
          <a
            href="https://wa.me/971507545032"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#C9A84C] text-[#0F0F0F] font-bold px-8 py-4 rounded-full hover:bg-[#E8C96A] transition-colors gold-glow"
          >
            Chat on WhatsApp
          </a>
        </SectionReveal>
      </div>
    </div>
  );
}
