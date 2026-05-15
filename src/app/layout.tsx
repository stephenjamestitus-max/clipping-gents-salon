import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Clipping Gents Salon | Best Barber in Sharjah",
  description:
    "Top-rated men's salon in Sharjah with expert haircuts, beard styling, and grooming. Visit us at Al Nad near Amber Supermarket. Rated 4.9★ by 36 Google reviews.",
  keywords: [
    "barber Sharjah",
    "men salon Sharjah",
    "haircut Al Nad",
    "beard trim Sharjah",
    "gents salon Sharjah",
    "Clipping Gents",
  ],
  openGraph: {
    title: "Clipping Gents Salon | Best Barber in Sharjah",
    description:
      "Top-rated men's salon in Sharjah. Expert haircuts, beard styling, hot shaves & grooming packages.",
    url: "https://clipping-gents-salon.vercel.app",
    siteName: "Clipping Gents Salon",
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clipping Gents Salon | Best Barber in Sharjah",
    description: "Sharp Cuts. Clean Fades. Sharjah's Finest.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://clipping-gents-salon.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable}`}
    >
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
