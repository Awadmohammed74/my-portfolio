import { useState, useEffect, useRef } from "react";
import { soundManager } from "../utils/sound";

export default function CommandPalette({ isOpen, onClose, activeTheme, onChangeTheme, isMuted, onToggleMute }) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const modalRef = useRef(null);
  const inputRef = useRef(null);

  // Command items
  const commands = [
    {
      id: "nav-home",
      title: "Go to Home",
      category: "Navigation",
      action: () => { window.location.hash = "#home"; onClose(); },
      icon: "🏠"
    },
    {
      id: "nav-about",
      title: "Go to About",
      category: "Navigation",
      action: () => { window.location.hash = "#about"; onClose(); },
      icon: "👨‍💻"
    },
    {
      id: "nav-skills",
      title: "Go to Skills",
      category: "Navigation",
      action: () => { window.location.hash = "#skills"; onClose(); },
      icon: "⚙️"
    },
    {
      id: "nav-projects",
      title: "Go to Projects",
      category: "Navigation",
      action: () => { window.location.hash = "#projects"; onClose(); },
      icon: "🚀"
    },
    {
      id: "nav-experience",
      title: "Go to Experience",
      category: "Navigation",
      action: () => { window.location.hash = "#experience"; onClose(); },
      icon: "💼"
    },
    {
      id: "nav-contact",
      title: "Go to Contact",
      category: "Navigation",
      action: () => { window.location.hash = "#contact"; onClose(); },
      icon: "✉️"
    },
    {
      id: "theme-neon-blue",
      title: "Switch to Neon Blue Theme",
      category: "Theme Customization",
      action: () => { onChangeTheme("neon-blue"); onClose(); },
      icon: "🔷",
      active: activeTheme === "neon-blue"
    },
    {
      id: "theme-cyberpunk",
      title: "Switch to Cyberpunk Theme",
      category: "Theme Customization",
      action: () => { onChangeTheme("cyberpunk"); onClose(); },
      icon: "🌸",
      active: activeTheme === "cyberpunk"
    },
    {
      id: "theme-emerald-grid",
      title: "Switch to Emerald Grid Theme",
      category: "Theme Customization",
      action: () => { onChangeTheme("emerald-grid"); onClose(); },
      icon: "🟢",
      active: activeTheme === "emerald-grid"
    },
    {
      id: "theme-electric-gold",
      title: "Switch to Electric Gold Theme",
      category: "Theme Customization",
      action: () => { onChangeTheme("electric-gold"); onClose(); },
      icon: "💛",
      active: activeTheme === "electric-gold"
    },
    {
      id: "sound-toggle",
      title: isMuted ? "Unmute UI Sound Effects" : "Mute UI Sound Effects",
      category: "Audio",
      action: () => { onToggleMute(); },
      icon: isMuted ? "🔊" : "🔇"
    }
  ];

  // Filter commands
  const filtered = commands.filter((cmd) =>
    cmd.title.toLowerCase().includes(query.toLowerCase()) ||
    cmd.category.toLowerCase().includes(query.toLowerCase())
  );

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
      setQuery("");
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  // Keyboard navigation inside palette
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        soundManager.playClick();
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        soundManager.playTick();
        setSelectedIndex((prev) => (prev + 1) % filtered.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        soundManager.playTick();
        setSelectedIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filtered[selectedIndex]) {
          soundManager.playSuccess();
          filtered[selectedIndex].action();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filtered, selectedIndex, onClose]);

  // Handle click outside to close
  const handleOverlayClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      soundManager.playClick();
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 cmd-overlay"
    >
      <div
        ref={modalRef}
        className="w-full max-w-xl rounded-2xl border border-white/10 bg-[#0a0a0f]/95 shadow-2xl overflow-hidden glass"
      >
        {/* Search header */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-white/5">
          <span className="text-xl">🔍</span>
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a command or search sections..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            className="w-full bg-transparent text-white text-sm outline-none placeholder-gray-500"
          />
          <kbd className="hidden sm:inline-flex px-1.5 py-0.5 rounded bg-white/10 text-[10px] text-gray-400 border border-white/10">ESC</kbd>
        </div>

        {/* Command list */}
        <div className="max-h-80 overflow-y-auto py-2">
          {filtered.length === 0 ? (
            <div className="px-4 py-6 text-center text-sm text-gray-500">
              No commands found. Try searching for "theme" or a section name.
            </div>
          ) : (
            filtered.map((cmd, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={cmd.id}
                  onClick={() => {
                    soundManager.playSuccess();
                    cmd.action();
                  }}
                  onMouseEnter={() => {
                    setSelectedIndex(idx);
                    soundManager.playTick();
                  }}
                  className={`flex items-center justify-between px-4 py-3 cursor-pointer transition-all duration-150 ${
                    isSelected
                      ? "bg-accent-primary/10 border-l-4 border-accent-primary pl-3 text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-lg">{cmd.icon}</span>
                    <div>
                      <div className="text-sm font-semibold">{cmd.title}</div>
                      <div className="text-xs text-gray-500">{cmd.category}</div>
                    </div>
                  </div>
                  {cmd.active && (
                    <span className="text-[10px] uppercase font-bold text-accent-primary tracking-wider bg-accent-primary/10 px-2 py-0.5 rounded-full border border-accent-primary/20">
                      Active
                    </span>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="flex items-center justify-between px-4 py-3 bg-black/30 border-t border-white/5 text-[11px] text-gray-500">
          <div className="flex gap-3">
            <span>↑↓ Navigate</span>
            <span>↵ Enter</span>
          </div>
          <div>Awad's Command Palette</div>
        </div>
      </div>
    </div>
  );
}
