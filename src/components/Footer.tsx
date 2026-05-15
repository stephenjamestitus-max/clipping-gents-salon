import Link from "next/link";
import { Scissors, MapPin, Phone, Clock } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/team", label: "Our Team" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#C9A84C]/20 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Scissors size={20} className="text-[#C9A84C]" />
              <span
                className="font-serif text-xl font-bold"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                <span className="text-[#C9A84C]">Clipping</span>
                <span className="text-[#F5ECD7]"> Gents</span>
              </span>
            </div>
            <p className="text-[#888] text-sm leading-relaxed mb-6">
              Sharp Cuts. Clean Fades. Sharjah&apos;s Finest.<br />
              Serving the Al Nad community with precision grooming since day one.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-[#C9A84C]/30 flex items-center justify-center text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0F0F0F] transition-colors duration-200"
              >
                {/* Instagram icon */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full border border-[#C9A84C]/30 flex items-center justify-center text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0F0F0F] transition-colors duration-200"
              >
                {/* Facebook icon */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3
              className="text-[#F5ECD7] font-semibold text-sm uppercase tracking-widest mb-5"
            >
              Navigation
            </h3>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#888] text-sm hover:text-[#C9A84C] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="text-[#F5ECD7] font-semibold text-sm uppercase tracking-widest mb-5"
            >
              Find Us
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-[#888]">
                <MapPin size={16} className="text-[#C9A84C] mt-0.5 shrink-0" />
                <span>Al Shamsi Building, opposite Amber Supermarket, Al Nad, Sharjah</span>
              </li>
              <li className="flex gap-3 text-sm">
                <Phone size={16} className="text-[#C9A84C] mt-0.5 shrink-0" />
                <a
                  href="tel:+971507545032"
                  className="text-[#888] hover:text-[#C9A84C] transition-colors"
                >
                  050 754 5032
                </a>
              </li>
              <li className="flex gap-3 text-sm text-[#888]">
                <Clock size={16} className="text-[#C9A84C] mt-0.5 shrink-0" />
                <span>Daily · 8:00 AM – 10:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#C9A84C]/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#555] text-xs">
            © {new Date().getFullYear()} Clipping Gents Salon. All rights reserved.
          </p>
          <p className="text-[#555] text-xs">
            Al Nad · Sharjah · UAE
          </p>
        </div>
      </div>
    </footer>
  );
}
