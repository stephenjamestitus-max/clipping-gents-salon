"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Scissors,
  Zap,
  Sparkles,
  Heart,
  Users,
  MessageCircle,
} from "lucide-react";
import Marquee from "@/components/Marquee";
import StatsBar from "@/components/StatsCounter";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import SectionReveal from "@/components/SectionReveal";
import GoldDivider from "@/components/GoldDivider";

const heroWords = ["Sharp", "Cuts.", "Clean", "Fades.", "Sharjah's", "Finest."];

const services = [
  {
    icon: <Scissors size={22} />,
    title: "Precision Haircuts",
    desc: "Classic, modern, and fade cuts tailored to your face shape and style.",
    img: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: <Zap size={22} />,
    title: "Beard Styling",
    desc: "Shape, trim, and sculpt your beard with expert care and hot towel finish.",
    img: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: <Sparkles size={22} />,
    title: "Hot Shave",
    desc: "Traditional straight-razor shave with warm lather — the ultimate reset.",
    img: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: <Heart size={22} />,
    title: "Groom Packages",
    desc: "All-inclusive packages for weddings, events, and everyday excellence.",
    img: "https://images.unsplash.com/photo-1570172619644-7a19c93ff8e8?auto=format&fit=crop&w=600&q=80",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background photo */}
        <Image
          src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1920&q=80"
          alt="Clipping Gents Salon interior"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F0F]/80 via-[#0F0F0F]/70 to-[#0F0F0F]" />
        {/* Gold grid texture */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#C9A84C 1px, transparent 1px), linear-gradient(90deg, #C9A84C 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          {/* Scissors icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -30 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center mb-8"
          >
            <div className="w-20 h-20 rounded-full border border-[#C9A84C]/50 flex items-center justify-center bg-[#C9A84C]/15 backdrop-blur-sm">
              <Scissors size={36} className="text-[#C9A84C]" />
            </div>
          </motion.div>

          {/* Salon name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 leading-none"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            <span className="text-[#C9A84C]">Clipping</span>
            <br />
            <span className="text-[#F5ECD7]">Gents</span>
          </motion.h1>

          {/* Staggered tagline */}
          <motion.div
            className="flex flex-wrap justify-center gap-x-3 gap-y-1 mb-10 mt-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08, delayChildren: 0.8 } },
            }}
          >
            {heroWords.map((word, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                className="text-xl md:text-2xl text-[#F5ECD7]/60 font-light tracking-wide"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>

          {/* Rating badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.5 }}
            className="flex items-center justify-center gap-2 mb-10"
          >
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-[#C9A84C] text-sm">★</span>
              ))}
            </div>
            <span className="text-[#F5ECD7]/60 text-sm">4.9 · 36 Google Reviews</span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="https://wa.me/971507545032"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#C9A84C] text-[#0F0F0F] font-bold px-8 py-4 rounded-full text-base hover:bg-[#E8C96A] transition-all duration-200 gold-glow"
            >
              <MessageCircle size={18} />
              Book via WhatsApp
            </a>
            <Link
              href="/services"
              className="flex items-center gap-2 border border-[#F5ECD7]/30 text-[#F5ECD7] font-semibold px-8 py-4 rounded-full text-base hover:bg-[#F5ECD7]/10 hover:border-[#C9A84C]/60 transition-all duration-200 backdrop-blur-sm"
            >
              View Services
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[#F5ECD7]/30 text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-8 bg-gradient-to-b from-[#C9A84C]/60 to-transparent"
          />
        </motion.div>
      </section>

      {/* ── MARQUEE ───────────────────────────────────── */}
      <Marquee />

      {/* ── STATS ─────────────────────────────────────── */}
      <StatsBar />

      {/* ── AMBIANCE STRIP ────────────────────────────── */}
      <div className="grid grid-cols-3 h-52 md:h-72 overflow-hidden">
        {[
          { src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=800&q=80", alt: "Barber at work" },
          { src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80", alt: "Haircut in progress" },
          { src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=800&q=80", alt: "Hot shave" },
        ].map((img, i) => (
          <div key={i} className="relative overflow-hidden group">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-[#0F0F0F]/40 group-hover:bg-[#0F0F0F]/20 transition-colors duration-500" />
          </div>
        ))}
      </div>

      {/* ── SERVICES PREVIEW ──────────────────────────── */}
      <section className="bg-[#0F0F0F] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionReveal className="text-center mb-14">
            <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-[0.25em] mb-3">
              What We Do
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#F5ECD7]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Crafted for the Modern Gentleman
            </h2>
            <GoldDivider />
            <p className="text-[#888] max-w-xl mx-auto mt-2">
              Every service delivered with precision, care, and respect for your time.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc, i) => (
              <SectionReveal key={svc.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="bg-[#1A1A1A] border border-[#C9A84C]/15 rounded-2xl overflow-hidden h-full group gold-glow-hover transition-all duration-300"
                >
                  {/* Card image */}
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={svc.img}
                      alt={svc.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-600"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/20 to-transparent" />
                    <div className="absolute bottom-3 left-4 text-[#C9A84C] bg-[#0F0F0F]/60 backdrop-blur-sm rounded-lg p-1.5">
                      {svc.icon}
                    </div>
                  </div>
                  {/* Card body */}
                  <div className="p-6">
                    <h3
                      className="text-[#F5ECD7] font-bold text-lg mb-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {svc.title}
                    </h3>
                    <p className="text-[#888] text-sm leading-relaxed">{svc.desc}</p>
                  </div>
                </motion.div>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 border border-[#C9A84C]/40 text-[#C9A84C] text-sm font-semibold px-7 py-3 rounded-full hover:bg-[#C9A84C]/10 transition-colors"
            >
              See All Services →
            </Link>
          </SectionReveal>
        </div>
      </section>

      {/* ── TEAM TEASER ───────────────────────────────── */}
      <section className="relative py-24 px-6 border-y border-[#C9A84C]/10 overflow-hidden">
        {/* Background photo with strong overlay */}
        <Image
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1920&q=80"
          alt="Salon interior"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#1A1A1A]/92" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <SectionReveal className="text-center mb-14">
            <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-[0.25em] mb-3">
              The Talent
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#F5ECD7]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Meet Your Stylists
            </h2>
            <GoldDivider />
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Abdul Jabbar",
                role: "Lead Stylist",
                initials: "AJ",
                specialty: "Fades & Classic Cuts",
                reviews: "Most Reviewed",
              },
              {
                name: "Muhamad",
                role: "Senior Barber",
                initials: "MH",
                specialty: "Haircuts & Shaves",
                reviews: "",
              },
              {
                name: "Mazhar Iqbal",
                role: "Grooming Expert",
                initials: "MI",
                specialty: "Beard & Hair Styling",
                reviews: "",
              },
            ].map((stylist, i) => (
              <SectionReveal key={stylist.name} delay={i * 0.1}>
                <div className="text-center group">
                  <div className="relative w-24 h-24 rounded-full mx-auto mb-5 bg-[#C9A84C]/10 border-2 border-[#C9A84C]/30 flex items-center justify-center group-hover:border-[#C9A84C] transition-colors duration-300">
                    <span
                      className="text-2xl font-bold text-[#C9A84C]"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {stylist.initials}
                    </span>
                    {stylist.reviews && (
                      <span className="absolute -top-1 -right-1 bg-[#C9A84C] text-[#0F0F0F] text-[10px] font-bold px-2 py-0.5 rounded-full">
                        {stylist.reviews}
                      </span>
                    )}
                  </div>
                  <h3
                    className="text-[#F5ECD7] font-bold text-lg mb-1"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {stylist.name}
                  </h3>
                  <p className="text-[#C9A84C] text-sm mb-1">{stylist.role}</p>
                  <p className="text-[#888] text-xs">{stylist.specialty}</p>
                </div>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal className="text-center mt-12">
            <Link
              href="/team"
              className="inline-flex items-center gap-2 border border-[#C9A84C]/40 text-[#C9A84C] text-sm font-semibold px-7 py-3 rounded-full hover:bg-[#C9A84C]/10 transition-colors"
            >
              Full Team Profiles →
            </Link>
          </SectionReveal>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────── */}
      <section className="bg-[#0F0F0F] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionReveal className="text-center mb-14">
            <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-[0.25em] mb-3">
              Client Stories
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#F5ECD7]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              What They&apos;re Saying
            </h2>
            <GoldDivider />
          </SectionReveal>

          <SectionReveal>
            <TestimonialsCarousel />
          </SectionReveal>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────── */}
      <section className="relative py-28 px-6 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1920&q=80"
          alt="Barber at work"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#0F0F0F]/88" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <SectionReveal>
            <div className="w-16 h-16 rounded-full bg-[#C9A84C]/15 border border-[#C9A84C]/40 flex items-center justify-center mx-auto mb-8 backdrop-blur-sm">
              <Users size={28} className="text-[#C9A84C]" />
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#F5ECD7] mb-5"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Ready for Your Best Look?
            </h2>
            <p className="text-[#888] text-lg mb-10 max-w-xl mx-auto">
              Walk in or book your slot on WhatsApp. We&apos;re open daily 8 AM – 10 PM at Al Nad,
              Sharjah.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/971507545032"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#C9A84C] text-[#0F0F0F] font-bold px-8 py-4 rounded-full text-base hover:bg-[#E8C96A] transition-colors gold-glow"
              >
                <MessageCircle size={18} />
                Book via WhatsApp
              </a>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 border border-[#F5ECD7]/30 text-[#F5ECD7] font-semibold px-8 py-4 rounded-full hover:bg-[#F5ECD7]/10 hover:border-[#C9A84C]/50 transition-colors"
              >
                Get Directions
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
