"use client";

import { motion } from "framer-motion";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/971507545032"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg"
      style={{ backgroundColor: "#25D366" }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 300 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* WhatsApp SVG icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="28"
        height="28"
        fill="white"
      >
        <path d="M16 .5C7.44.5.5 7.44.5 16c0 2.82.74 5.48 2.03 7.79L.5 31.5l7.9-2.07A15.45 15.45 0 0016 31.5C24.56 31.5 31.5 24.56 31.5 16S24.56.5 16 .5zm0 28.28a12.73 12.73 0 01-6.5-1.78l-.46-.28-4.69 1.23 1.25-4.57-.3-.47A12.78 12.78 0 1116 28.78zm7.02-9.57c-.38-.19-2.27-1.12-2.62-1.25-.35-.13-.6-.19-.86.19-.25.38-.97 1.25-1.19 1.5-.22.26-.44.29-.82.1-.38-.19-1.6-.59-3.04-1.88-1.12-1-1.88-2.24-2.1-2.62-.22-.38-.02-.58.17-.77.17-.17.38-.44.57-.66.19-.22.25-.38.38-.63.13-.25.06-.47-.03-.66-.1-.19-.86-2.07-1.18-2.84-.31-.74-.63-.64-.86-.65h-.73c-.25 0-.66.1-1.01.47-.35.38-1.32 1.29-1.32 3.14s1.35 3.64 1.54 3.89c.19.25 2.66 4.06 6.44 5.7.9.39 1.6.62 2.15.79.9.29 1.73.25 2.38.15.73-.11 2.27-.93 2.59-1.82.32-.9.32-1.67.22-1.82-.09-.16-.34-.25-.72-.44z" />
      </svg>

      {/* Pulse ring */}
      <span className="absolute w-full h-full rounded-full animate-ping opacity-25" style={{ backgroundColor: "#25D366" }} />
    </motion.a>
  );
}
