"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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
import PageBanner from "@/components/PageBanner";
import { WA_URL, playfairStyle } from "@/lib/constants";

const services = [
  {
    icon: <Scissors size={20} />,
    name: "Haircut",
    desc: "Precision cut styled to your face shape, lifestyle, and preference. From classic tapers to modern textured looks.",
    price: "AED 20–35",
    tag: "Popular",
    img: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: <Scissors size={20} />,
    name: "Scissor Cut",
    desc: "Hand-crafted scissor-over-comb technique for a refined, natural finish. Perfect for longer styles and fine hair.",
    price: "AED 25–40",
    tag: "",
    img: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: <Zap size={20} />,
    name: "Beard Trim",
    desc: "Define and clean up your beard with expert clipper and scissor work. Maintains shape and symmetry.",
    price: "AED 15–25",
    tag: "Popular",
    img: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: <Zap size={20} />,
    name: "Beard Styling",
    desc: "Full beard sculpt — from shaping the neckline to detailed edging and conditioning for a sharp, polished look.",
    price: "AED 25–40",
    tag: "",
    img: "https://images.unsplash.com/photo-1590586767908-20d6d1b6db58?auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: <Sparkles size={20} />,
    name: "Hot Shave",
    desc: "Traditional straight-razor shave with warm steam towel, rich lather, and aftershave. The ultimate relaxation ritual.",
    price: "AED 30–45",
    tag: "Signature",
    img: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: <Eye size={20} />,
    name: "Eyebrow Trimming",
    desc: "Clean, precise eyebrow shaping to frame your face. Includes threading and waxing options.",
    price: "AED 10–15",
    tag: "",
    img: "https://images.unsplash.com/photo-1512690459411-b9245aed614b?auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: <Wind size={20} />,
    name: "Hair Straightening",
    desc: "Smooth and straighten curly or wavy hair with professional heat tools and protective styling products.",
    price: "AED 30–50",
    tag: "",
    img: "https://images.unsplash.com/photo-1519735777090-ec97162dc266?auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: <Droplets size={20} />,
    name: "Shampoo & Conditioning",
    desc: "Deep cleanse and hydrating condition with professional salon products. Add-on or standalone service.",
    price: "AED 10–20",
    tag: "",
    img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: <Baby size={20} />,
    name: "Kids' Cuts",
    desc: "Gentle, patient haircuts for boys under 12. We make the chair experience fun and stress-free.",
    price: "AED 15–25",
    tag: "",
    img: "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: <Heart size={20} />,
    name: "Groom Packages",
    desc: "Premium pre-wedding and event grooming bundles. Haircut + beard + shave + skincare — arrive looking flawless.",
    price: "AED 80–150",
    tag: "Best Value",
    img: "https://images.unsplash.com/photo-1570172619644-7a19c93ff8e8?auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: <Leaf size={20} />,
    name: "Male Body Hair Removal",
    desc: "Professional chest, back, and arm waxing or threading. Clean, smooth results in a private, comfortable setting.",
    price: "AED 40–80",
    tag: "",
    img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: <Gift size={20} />,
    name: "Complete Refresh",
    desc: "Haircut + shampoo + beard trim + hot towel finish. The full reset in one sitting.",
    price: "AED 60–90",
    tag: "New",
    img: "https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?auto=format&fit=crop&w=600&q=80",
  },
];

export default function ServicesClient() {
  return (
    <div className="bg-[#0F0F0F] min-h-screen pb-24">
      <PageBanner
        src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1920&q=80"
        alt="Barber services"
        eyebrow="Our Menu"
        title="Services"
      />

      <div className="max-w-6xl mx-auto px-6 pt-6 pb-8">
        <SectionReveal className="text-center mb-14">
          <GoldDivider />
          <p className="text-[#888] max-w-lg mx-auto mt-3 text-lg">
            Every service is performed by a specialist who takes pride in the craft.
            No rush. No shortcuts.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <SectionReveal key={svc.name} delay={i * 0.04}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className="relative bg-[#1A1A1A] border border-[#C9A84C]/15 rounded-2xl overflow-hidden h-full flex flex-col gold-glow-hover transition-all duration-300 group"
              >
                <div className="relative h-44 overflow-hidden shrink-0">
                  <Image
                    src={svc.img}
                    alt={svc.name}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/10 to-transparent" />
                  {svc.tag && (
                    <span className="absolute top-3 right-3 bg-[#C9A84C] text-[#0F0F0F] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                      {svc.tag}
                    </span>
                  )}
                  <div className="absolute bottom-3 left-4 text-[#C9A84C] bg-[#0F0F0F]/60 backdrop-blur-sm rounded-lg p-1.5">
                    {svc.icon}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h2 className="text-[#F5ECD7] font-bold text-xl mb-2" style={playfairStyle}>
                    {svc.name}
                  </h2>
                  <p className="text-[#888] text-sm leading-relaxed flex-1 mb-5">{svc.desc}</p>
                  <div className="border-t border-[#C9A84C]/10 pt-4 flex items-center justify-between">
                    <span className="text-[#C9A84C] font-bold text-base">{svc.price}</span>
                    <a
                      href={WA_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#888] hover:text-[#C9A84C] transition-colors underline-offset-2 hover:underline"
                    >
                      Book →
                    </a>
                  </div>
                </div>
              </motion.div>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal className="text-center mt-16">
          <p className="text-[#888] mb-6 text-base">
            Not sure what you need? Message us and we&apos;ll recommend the right service.
          </p>
          <a
            href={WA_URL}
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
