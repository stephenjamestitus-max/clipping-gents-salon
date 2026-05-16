"use client";

import { MapPin, Phone, Clock, MessageCircle, Navigation } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import GoldDivider from "@/components/GoldDivider";
import { WA_URL, PHONE_DISPLAY, PHONE_INTL, playfairStyle } from "@/lib/constants";

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const DEFAULT_HOURS = "8:00 AM – 10:00 PM";
const hours = DAYS.map((day) => ({ day, time: DEFAULT_HOURS }));

export default function ContactClient() {
  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

  return (
    <div className="bg-[#0F0F0F] min-h-screen pt-28 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionReveal className="text-center mb-16">
          <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-[0.25em] mb-3">
            Come Visit
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-[#F5ECD7] mb-4" style={playfairStyle}>
            Find Us
          </h1>
          <GoldDivider />
          <p className="text-[#888] max-w-lg mx-auto mt-3 text-lg">
            Walk-ins welcome. Reservations on WhatsApp for your convenience.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col gap-5">
            <SectionReveal>
              <div className="bg-[#1A1A1A] border border-[#C9A84C]/15 rounded-2xl p-7">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#C9A84C]/10 flex items-center justify-center">
                    <MapPin size={18} className="text-[#C9A84C]" />
                  </div>
                  <h2 className="text-[#F5ECD7] font-bold text-lg" style={playfairStyle}>
                    Location
                  </h2>
                </div>
                <p className="text-[#888] leading-relaxed mb-4">
                  Al Shamsi Building<br />
                  Opposite Amber Supermarket<br />
                  Al Nad, Sharjah, UAE
                </p>
                <p className="text-[#555] text-sm mb-5">
                  Plus Code: <span className="text-[#888] font-mono">89RR+FX Sharjah</span>
                </p>
                <a
                  href="https://maps.google.com/?q=89RR+FX+Sharjah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-[#C9A84C]/30 text-[#C9A84C] text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#C9A84C]/10 transition-colors"
                >
                  <Navigation size={14} />
                  Get Directions
                </a>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <div className="bg-[#1A1A1A] border border-[#C9A84C]/15 rounded-2xl p-7">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#C9A84C]/10 flex items-center justify-center">
                    <Phone size={18} className="text-[#C9A84C]" />
                  </div>
                  <h2 className="text-[#F5ECD7] font-bold text-lg" style={playfairStyle}>
                    Contact
                  </h2>
                </div>
                <div className="flex flex-col gap-4">
                  <a href="tel:+971507545032" className="flex items-center gap-3 group">
                    <Phone size={16} className="text-[#C9A84C] shrink-0" />
                    <div>
                      <div className="text-[#F5ECD7] group-hover:text-[#C9A84C] transition-colors font-medium">
                        {PHONE_DISPLAY}
                      </div>
                      <div className="text-[#555] text-xs">Tap to call</div>
                    </div>
                  </a>
                  <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                    <MessageCircle size={16} className="text-[#25D366] shrink-0" />
                    <div>
                      <div className="text-[#F5ECD7] group-hover:text-[#25D366] transition-colors font-medium">
                        WhatsApp: {PHONE_INTL}
                      </div>
                      <div className="text-[#555] text-xs">Book your appointment</div>
                    </div>
                  </a>
                </div>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.15}>
              <div className="bg-[#1A1A1A] border border-[#C9A84C]/15 rounded-2xl p-7">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#C9A84C]/10 flex items-center justify-center">
                    <Clock size={18} className="text-[#C9A84C]" />
                  </div>
                  <h2 className="text-[#F5ECD7] font-bold text-lg" style={playfairStyle}>
                    Opening Hours
                  </h2>
                </div>
                <table className="w-full text-sm">
                  <tbody>
                    {hours.map((h) => (
                      <tr
                        key={h.day}
                        className={`border-b border-[#C9A84C]/8 last:border-0 ${
                          h.day === today ? "text-[#C9A84C]" : "text-[#888]"
                        }`}
                      >
                        <td className={`py-2.5 font-medium ${h.day === today ? "text-[#C9A84C]" : "text-[#F5ECD7]/70"}`}>
                          {h.day}
                          {h.day === today && (
                            <span className="ml-2 text-[10px] bg-[#C9A84C]/20 text-[#C9A84C] px-1.5 py-0.5 rounded-full">
                              Today
                            </span>
                          )}
                        </td>
                        <td className="py-2.5 text-right">{h.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </SectionReveal>
          </div>

          <div className="flex flex-col gap-5">
            <SectionReveal delay={0.2} className="flex-1">
              <div className="bg-[#1A1A1A] border border-[#C9A84C]/15 rounded-2xl overflow-hidden min-h-[400px] h-full">
                <iframe
                  title="Clipping Gents Salon Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.3929!2d55.4!3d25.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDIxJzAwLjAiTiA1NcKwMjQnMDAuMCJF!5e0!3m2!1sen!2sae!4v1234567890!5m2!1sen!2sae"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </SectionReveal>

            <SectionReveal delay={0.3}>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#C9A84C] text-[#0F0F0F] font-bold py-4 rounded-2xl hover:bg-[#E8C96A] transition-colors gold-glow text-base"
              >
                <MessageCircle size={18} />
                Book via WhatsApp
              </a>
            </SectionReveal>
          </div>
        </div>
      </div>
    </div>
  );
}
