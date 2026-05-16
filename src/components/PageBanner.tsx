import Image from "next/image";

interface PageBannerProps {
  src: string;
  alt: string;
  eyebrow: string;
  title: string;
}

export default function PageBanner({ src, alt, eyebrow, title }: PageBannerProps) {
  return (
    <div className="relative h-64 md:h-80 overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        priority
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F0F]/65 via-[#0F0F0F]/55 to-[#0F0F0F]" />
      <div className="absolute inset-0 flex flex-col items-center justify-center pt-16 text-center px-6">
        <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-[0.25em] mb-3">
          {eyebrow}
        </p>
        <h1
          className="text-5xl md:text-6xl font-bold text-[#F5ECD7]"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {title}
        </h1>
      </div>
    </div>
  );
}
