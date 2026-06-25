import { soundManager } from "../utils/sound";

const techLogos = [
  {
    name: "WordPress",
    icon: (
      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
        <path d="M12.158 12.786l-2.698 7.84c.806.236 1.657.365 2.54.365 1.047 0 2.05-.177 2.986-.505l-2.828-7.7zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.114 1.137c4.894.407 8.784 4.5 8.784 9.479 0 1.258-.236 2.46-.665 3.57L16.42 2.37c1.782-.8 3.73-1.18 5.694-1.233zM3.11 15.65c-.754-1.96-1.157-4.08-1.157-6.286 0-3.32 1.343-6.326 3.51-8.514L10.36 15.9l-7.25-.25zm14.168 5.86l2.368-6.9c.5.957.784 2.05.784 3.2 0 1.37-.384 2.65-1.047 3.74L17.278 21.5z" />
      </svg>
    ),
  },
  {
    name: "PHP",
    icon: (
      <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-4.7 6.4h2.1c1 .0 1.7.3 2.1 1 .4.6.5 1.3.2 2.1-.2.8-.7 1.5-1.5 1.9-.7.4-1.5.5-2.5.5H6.2L5 16h1.5l.8-2.6H8c1.3.0 2.2-.3 2.8-.9.6-.6.8-1.5.6-2.5-.2-1-.8-1.8-1.7-2.2-.9-.4-2-.4-3.3-.4zm8.2 0h1.5l-.8 2.6h2.1c1.3.0 2.2-.3 2.8-.9.6-.6.8-1.5.6-2.5-.2-1-.8-1.8-1.7-2.2-.9-.4-2-.4-3.3-.4h-3.4L12.1 16h1.5l.8-2.6H16c1.3.0 2.2-.3 2.8-.9.6-.6.8-1.5.6-2.5-.2-1-.8-1.8-1.7-2.2-.9-.4-2-.4-3.3-.4z" />
      </svg>
    ),
  },
  {
    name: "React",
    icon: (
      <svg className="w-7 h-7 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
        <ellipse rx="10" ry="4.5" transform="rotate(0 12 12)" cx="12" cy="12" />
        <ellipse rx="10" ry="4.5" transform="rotate(60 12 12)" cx="12" cy="12" />
        <ellipse rx="10" ry="4.5" transform="rotate(120 12 12)" cx="12" cy="12" />
        <circle cx="12" cy="12" r="2" className="fill-current" />
      </svg>
    ),
  },
  {
    name: "WooCommerce",
    icon: (
      <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
        <path d="M22.062 10.75c0-.986-.79-1.785-1.764-1.785H3.7c-.974 0-1.764.8-1.764 1.785V20c0 .986.79 1.785 1.764 1.785h16.598C21.272 21.785 22.06 20.986 22.06 20v-9.25zm-15.01 7.21c-.815 0-1.478-.663-1.478-1.478s.663-1.478 1.478-1.478 1.478.663 1.478 1.478-.663 1.478-1.478 1.478zm8.938 0c-.815 0-1.478-.663-1.478-1.478s.663-1.478 1.478-1.478 1.478.663 1.478 1.478-.663 1.478-1.478 1.478zM12 2C9.5 2 7 3.5 7 5.5S9.5 9 12 9s5-1.5 5-3.5S14.5 2 12 2z" />
      </svg>
    ),
  },
  {
    name: "MySQL",
    icon: (
      <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 3.79 2 6v12c0 2.21 4.477 4 10 4s10-1.79 10-4V6c0-2.21-4.477-4-10-4zm0 2c4.418 0 8 1.343 8 3s-3.582 3-8 3-8-1.343-8-3 3.582-3 8-3zm-8 4.93c1.944 1.096 4.8 1.82 8 1.82s6.056-.724 8-1.82v2.14c0 1.657-3.582 3-8 3s-8-1.343-8-3v-2.14zm0 4c1.944 1.096 4.8 1.82 8 1.82s6.056-.724 8-1.82v2.14c0 1.657-3.582 3-8 3s-8-1.343-8-3v-2.14z" />
      </svg>
    ),
  },
  {
    name: "JavaScript",
    icon: (
      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0V0zm22.034 18.576c-.224-1.332-1.36-2.144-2.884-2.816l-.88-.384c-.816-.368-1.168-.624-1.168-1.04 0-.416.32-.736.96-.736.656 0 1.072.256 1.376.752l2.08-1.312c-.528-.992-1.552-1.84-3.216-1.84-2.288 0-3.648 1.296-3.648 2.944 0 1.84 1.248 2.592 2.752 3.248l.896.384c.832.368 1.392.688 1.392 1.248 0 .528-.464.912-1.28.912-.928 0-1.6-.448-1.952-1.184l-2.096 1.28c.672 1.408 2.016 2.224 3.984 2.224 2.72 0 4.192-1.312 4.192-3.712zm-9.52-5.712h-2.288v7.824c0 1.136-.544 1.712-1.632 1.712-.528 0-.96-.16-1.248-.4l-.656 1.808c.576.432 1.488.688 2.592.688 2.448 0 3.232-1.328 3.232-3.792v-7.84z" />
      </svg>
    ),
  },
  {
    name: "Git & Versioning",
    icon: (
      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
        <path d="M23.384 11.237L12.76.613a1.08 1.08 0 00-1.527 0L8.742 3.102l2.96 2.96a2.9 2.9 0 011.83 1.832l3.05 3.05a2.9 2.9 0 11-1.272 1.272l-3.05-3.05a2.9 2.9 0 01-1.832-1.83l-2.96-2.96L2.613 9.71a1.08 1.08 0 000 1.527l10.624 10.624a1.08 1.08 0 001.527 0l8.62-8.624a1.08 1.08 0 000-1.527z" />
      </svg>
    ),
  },
  {
    name: "Linux Cloud Server",
    icon: (
      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
        <path d="M12 2c5.522 0 10 4.477 10 10s-4.478 10-10 10S2 17.523 2 12 6.478 2 12 2zm1 14v-2h-2v2h2zm-1-10c-1.657 0-3 1.343-3 3h1.5c0-.827.673-1.5 1.5-1.5s1.5.673 1.5 1.5c0 .827-.673 1.5-1.5 1.5h-.5v2h1v-1.127c1.455-.41 2.5-1.743 2.5-3.373 0-1.657-1.343-3-3-3z" />
      </svg>
    ),
  },
];

export default function TechTicker() {
  // We duplicate the list to make the scrolling infinite and seamless
  const duplicatedLogos = [...techLogos, ...techLogos];

  return (
    <div className="w-full py-10 relative overflow-hidden border-y border-white/5 bg-[#050508]/20 z-10 pointer-events-auto">
      {/* Light left & right fade overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#050508] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#050508] to-transparent z-10 pointer-events-none" />

      {/* Infinite scrolling row */}
      <div className="animate-marquee flex items-center gap-12 sm:gap-20">
        {duplicatedLogos.map((logo, idx) => (
          <div
            key={idx}
            onMouseEnter={() => soundManager.playTick()}
            className="flex items-center gap-3 text-gray-500 hover:text-accent-primary transition-all duration-300 transform hover:scale-105 cursor-default select-none shrink-0"
            title={logo.name}
          >
            <div className="w-7 h-7 flex items-center justify-center">
              {logo.icon}
            </div>
            <span className="text-xs tracking-[0.15em] font-extrabold uppercase font-['Outfit']">
              {logo.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
