import { useState, useEffect, useRef } from "react";
import { Search, Palette, Volume2, VolumeX } from "lucide-react";
import { soundManager } from "../utils/sound";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar({
  activeTheme,
  onChangeTheme,
  isMuted,
  onToggleMute,
  onOpenCmd,
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showThemeMenu, setShowThemeMenu] = useState(false);
  const themeMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = navLinks.map((l) => l.href.slice(1));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 160) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (themeMenuRef.current && !themeMenuRef.current.contains(e.target)) {
        setShowThemeMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const themes = [
    { id: "neon-blue", name: "Neon Blue", color: "bg-blue-500", icon: "🔷" },
    { id: "cyberpunk", name: "Cyberpunk", color: "bg-pink-500", icon: "🌸" },
    {
      id: "emerald-grid",
      name: "Emerald Grid",
      color: "bg-emerald-500",
      icon: "🟢",
    },
    {
      id: "electric-gold",
      name: "Electric Gold",
      color: "bg-amber-500",
      icon: "💛",
    },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${scrolled ? "bg-[#050508]/85 backdrop-blur-xl border-b border-white/5 py-2.5 shadow-lg shadow-black/20" : "bg-transparent py-4"}`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#home"
          onMouseEnter={() => soundManager.playTick()}
          onClick={() => soundManager.playClick()}
          className="text-2xl font-black tracking-tight group relative font-['Outfit']"
        >
          <span className="gradient-text font-black">Awad</span>
          <span className="text-white">.</span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-primary group-hover:w-full transition-all duration-300" />
        </a>

        <div className="hidden md:flex items-center gap-1.5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onMouseEnter={() => soundManager.playTick()}
              onClick={() => soundManager.playClick()}
              className={`relative px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${activeSection === link.href.slice(1) ? "text-white bg-accent-primary/10 border border-accent-primary/20" : "text-gray-400 hover:text-white hover:bg-white/5 border border-transparent"}`}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenCmd}
            onMouseEnter={() => soundManager.playTick()}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
            title="Open Command Palette"
          >
            <Search className="w-3.5 h-3.5" />
            <span>Search</span>
            <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-[9px] border border-white/10 text-gray-500">
              Ctrl K
            </kbd>
          </button>

          <div className="relative" ref={themeMenuRef}>
            <button
              onClick={() => {
                soundManager.playClick();
                setShowThemeMenu(!showThemeMenu);
              }}
              onMouseEnter={() => soundManager.playTick()}
              className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-accent-primary/30 transition-all text-sm cursor-pointer"
              title="Change Theme Color"
            >
              <Palette className="w-4 h-4 text-accent-primary" />
            </button>
            {showThemeMenu && (
              <div className="absolute right-0 mt-2.5 w-48 rounded-xl border border-white/10 bg-[#0a0a0f] p-1.5 shadow-2xl glass animate-scale-in">
                <div className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold px-2.5 py-1.5">
                  Theme Presets
                </div>
                {themes.map((themeItem) => (
                  <button
                    key={themeItem.id}
                    onClick={() => {
                      onChangeTheme(themeItem.id);
                      setShowThemeMenu(false);
                    }}
                    onMouseEnter={() => soundManager.playTick()}
                    className={`w-full flex items-center gap-3.5 px-2.5 py-2 rounded-lg text-left text-xs font-semibold transition-all cursor-pointer ${activeTheme === themeItem.id ? "bg-accent-primary/15 text-white" : "text-gray-400 hover:text-white hover:bg-white/5"}`}
                  >
                    <span
                      className={`w-3.5 h-3.5 rounded-full ${themeItem.color} border border-white/10`}
                    />
                    {themeItem.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => {
              onToggleMute();
            }}
            onMouseEnter={() => soundManager.playTick()}
            className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-accent-primary/30 transition-all cursor-pointer"
            title={isMuted ? "Unmute UI sounds" : "Mute UI sounds"}
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4 text-gray-500" />
            ) : (
              <Volume2 className="w-4 h-4 text-accent-primary" />
            )}
          </button>

          <a
            href="#contact"
            onMouseEnter={() => soundManager.playTick()}
            onClick={() => soundManager.playClick()}
            className="px-5 py-2 text-xs font-black rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary hover:from-accent-primary/90 hover:to-accent-secondary/90 text-white transition-all duration-300 shadow-md shadow-accent-primary/20 hover:shadow-accent-primary/45 hover:scale-105"
          >
            Let's Talk
          </a>
        </div>

        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => {
              soundManager.playClick();
              const currIdx = themes.findIndex((t) => t.id === activeTheme);
              const nextIdx = (currIdx + 1) % themes.length;
              onChangeTheme(themes[nextIdx].id);
            }}
            className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-sm"
          >
            <Palette className="w-4 h-4 text-accent-primary" />
          </button>
          <button
            onClick={() => {
              soundManager.playClick();
              setMobileOpen(!mobileOpen);
            }}
            className="w-10 h-10 flex items-center justify-center border border-white/10 rounded-full"
            aria-label="Toggle menu"
          >
            <div className="w-5 flex flex-col gap-1.5">
              <span
                className={`block h-0.5 w-5 bg-white transition-all duration-300 origin-center ${mobileOpen ? "rotate-45 translate-y-[4px]" : ""}`}
              />
              <span
                className={`block h-0.5 w-5 bg-white transition-all duration-300 ${mobileOpen ? "opacity-0 scale-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-5 bg-white transition-all duration-300 origin-center ${mobileOpen ? "-rotate-45 -translate-y-[4px]" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${mobileOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0 pointer-events-none"}`}
      >
        <div className="mx-4 p-4 rounded-2xl bg-[#050508]/95 backdrop-blur-xl border border-white/10 shadow-2xl">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  soundManager.playClick();
                  setMobileOpen(false);
                }}
                onMouseEnter={() => soundManager.playTick()}
                className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${activeSection === link.href.slice(1) ? "text-white bg-accent-primary/15 border border-accent-primary/10" : "text-gray-400 hover:text-white hover:bg-white/5"}`}
              >
                {link.name}
              </a>
            ))}
            <div className="h-px bg-white/5 my-1.5" />
            <button
              onClick={() => {
                onToggleMute();
                setMobileOpen(false);
              }}
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-left text-sm text-gray-400 hover:text-white hover:bg-white/5"
            >
              <span>{isMuted ? "Enable UI Sounds" : "Disable UI Sounds"}</span>
              {isMuted ? (
                <VolumeX className="w-4 h-4 ml-auto" />
              ) : (
                <Volume2 className="w-4 h-4 ml-auto" />
              )}
            </button>
            <button
              onClick={() => {
                setMobileOpen(false);
                onOpenCmd();
              }}
              className="flex items-center justify-between px-4 py-2.5 rounded-xl text-left text-sm text-gray-400 hover:text-white hover:bg-white/5"
            >
              <span>Search / Cmd Palette</span>
              <Search className="w-4 h-4" />
            </button>
            <a
              href="#contact"
              onClick={() => {
                soundManager.playClick();
                setMobileOpen(false);
              }}
              className="mt-2.5 px-4 py-3 rounded-xl text-sm font-bold text-center bg-gradient-to-r from-accent-primary to-accent-secondary text-white shadow-lg shadow-accent-primary/10"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
