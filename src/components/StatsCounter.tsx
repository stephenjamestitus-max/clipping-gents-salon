"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface Stat {
  value: number;
  suffix: string;
  label: string;
  prefix?: string;
}

const stats: Stat[] = [
  { value: 4.9, suffix: "★", label: "Google Rating", prefix: "" },
  { value: 36, suffix: "+", label: "Happy Reviews", prefix: "" },
  { value: 3, suffix: "", label: "Expert Stylists", prefix: "" },
  { value: 5, suffix: "+", label: "Years Experience", prefix: "" },
];

function Counter({ value, suffix, prefix = "" }: { value: number; suffix: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const isDecimal = value % 1 !== 0;

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(isDecimal ? Math.round(current * 10) / 10 : Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, value, isDecimal]);

  return (
    <span ref={ref}>
      {prefix}{isDecimal ? count.toFixed(1) : count}{suffix}
    </span>
  );
}

export default function StatsBar() {
  return (
    <div className="bg-[#1A1A1A] border-y border-[#C9A84C]/20 py-10">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="text-center"
          >
            <div
              className="text-4xl font-bold text-[#C9A84C] mb-1"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              <Counter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
            </div>
            <div className="text-[#888] text-sm tracking-wide">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
