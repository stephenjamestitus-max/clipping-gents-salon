"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    name: "Ashiq Niyad",
    rating: 5,
    text: "Fantastic experience at Clipping Gents Salon. Abdul Jabbar's professionalism and excellent customer service made the visit truly memorable. Highly recommend!",
    avatar: "AN",
  },
  {
    name: "Alan Varghese Vinu",
    rating: 5,
    text: "Muhamad did an excellent job with my haircut and shave. The salon is clean and welcoming. Will definitely be returning.",
    avatar: "AV",
  },
  {
    name: "Ristia Nabilla",
    rating: 5,
    text: "Abdul Jabar you did good work I really appreciate your work. Very clean and precise — exactly what I wanted.",
    avatar: "RN",
  },
  {
    name: "Nawal Rahman",
    rating: 5,
    text: "Nice attitude, good communication, skillful stylist. Very reasonable and affordable prices. One of the best salons in Sharjah.",
    avatar: "NR",
  },
  {
    name: "Sumesh Mohan M",
    rating: 5,
    text: "Abdul Jabbar knows what style suits each face. He doesn't just cut hair — he gives you a look. Impressed every single time.",
    avatar: "SM",
  },
  {
    name: "Bhagyesh Balakrishnan",
    rating: 5,
    text: "Perfect in handling all grooming needs. Every minute detail taken care of. You feel like royalty walking out of that chair.",
    avatar: "BB",
  },
];

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = () => setCurrent((c) => (c + 1) % reviews.length);
  const prev = () => setCurrent((c) => (c - 1 + reviews.length) % reviews.length);

  useEffect(() => {
    timerRef.current = setInterval(next, 5000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(next, 5000);
  };

  const handlePrev = () => { prev(); resetTimer(); };
  const handleNext = () => { next(); resetTimer(); };

  return (
    <div className="relative max-w-3xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="bg-[#1A1A1A] border border-[#C9A84C]/20 rounded-2xl p-8 md:p-10"
        >
          {/* Stars */}
          <div className="flex gap-1 mb-5">
            {Array.from({ length: reviews[current].rating }).map((_, i) => (
              <Star key={i} size={16} className="text-[#C9A84C] fill-[#C9A84C]" />
            ))}
          </div>

          {/* Quote */}
          <blockquote
            className="text-[#F5ECD7] text-lg md:text-xl leading-relaxed mb-8 italic"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            &ldquo;{reviews[current].text}&rdquo;
          </blockquote>

          {/* Author */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#C9A84C]/20 border border-[#C9A84C]/40 flex items-center justify-center text-[#C9A84C] text-sm font-bold">
              {reviews[current].avatar}
            </div>
            <div>
              <div className="text-[#F5ECD7] font-semibold text-sm">{reviews[current].name}</div>
              <div className="text-[#888] text-xs">Verified Google Review</div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <div className="flex items-center justify-center gap-6 mt-8">
        <button
          onClick={handlePrev}
          className="w-10 h-10 rounded-full border border-[#C9A84C]/30 flex items-center justify-center text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0F0F0F] transition-colors"
          aria-label="Previous review"
        >
          <ChevronLeft size={18} />
        </button>

        <div className="flex gap-2">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => { setCurrent(i); resetTimer(); }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? "w-6 bg-[#C9A84C]" : "w-1.5 bg-[#C9A84C]/30"
              }`}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="w-10 h-10 rounded-full border border-[#C9A84C]/30 flex items-center justify-center text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0F0F0F] transition-colors"
          aria-label="Next review"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
