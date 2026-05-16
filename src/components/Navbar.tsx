"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Scissors } from "lucide-react";
import clsx from "clsx";
import { WA_URL, playfairStyle } from "@/lib/constants";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/team", label: "Our Team" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#0F0F0F]/90 backdrop-blur-md border-b border-[#C9A84C]/20 py-3"
          : "bg-transparent py-5"
      )}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Scissors
            size={22}
            className="text-[#C9A84C] group-hover:rotate-12 transition-transform duration-300"
          />
          <span
            className="font-serif text-xl font-bold tracking-wide"
            style={playfairStyle}
          >
            <span className="text-[#C9A84C]">Clipping</span>
            <span className="text-[#F5ECD7]"> Gents</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={clsx(
                  "text-sm font-medium tracking-wide transition-colors duration-200 relative group",
                  pathname === link.href
                    ? "text-[#C9A84C]"
                    : "text-[#F5ECD7]/70 hover:text-[#C9A84C]"
                )}
              >
                {link.label}
                <span
                  className={clsx(
                    "absolute -bottom-1 left-0 h-px bg-[#C9A84C] transition-all duration-300",
                    pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-[#C9A84C] text-[#0F0F0F] text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#E8C96A] transition-colors duration-200"
        >
          Book Now
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#F5ECD7] p-1"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-[#1A1A1A] border-t border-[#C9A84C]/20"
          >
            <ul className="px-6 py-4 flex flex-col gap-4">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={clsx(
                      "block text-base font-medium py-1 transition-colors",
                      pathname === link.href
                        ? "text-[#C9A84C]"
                        : "text-[#F5ECD7]/80 hover:text-[#C9A84C]"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-[#C9A84C] text-[#0F0F0F] font-semibold px-5 py-3 rounded-full mt-2"
                >
                  Book via WhatsApp
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
