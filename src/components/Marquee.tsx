const items = [
  "Haircuts",
  "Beard Trims",
  "Hot Shaves",
  "Kids Cuts",
  "Groom Packages",
  "Sharjah's #1 Rated Salon",
  "Haircuts",
  "Beard Trims",
  "Hot Shaves",
  "Kids Cuts",
  "Groom Packages",
  "Sharjah's #1 Rated Salon",
];

export default function Marquee() {
  return (
    <div className="bg-[#C9A84C] py-3 overflow-hidden">
      <div className="marquee-track">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-4 px-4">
            <span className="text-[#0F0F0F] text-sm font-semibold uppercase tracking-widest whitespace-nowrap">
              {item}
            </span>
            <span className="text-[#0F0F0F]/50 text-lg">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
