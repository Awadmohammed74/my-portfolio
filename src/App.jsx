import { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackgroundCanvas from "./components/BackgroundCanvas";
import CommandPalette from "./components/CommandPalette";
import { soundManager } from "./utils/sound";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState(
    localStorage.getItem("portfolio_theme") || "neon-blue",
  );
  const [isMuted, setIsMuted] = useState(soundManager.isMuted());
  const [isCmdOpen, setIsCmdOpen] = useState(false);

  // Custom Cursor Refs
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  // Initialize Theme Attribute on load
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Set loading timeout
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  // Keyboard shortcut listener for Command Palette (Ctrl+K or Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        soundManager.playClick();
        setIsCmdOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Custom cursor movement with spring interpolation (lagging ring)
  useEffect(() => {
    if (isLoading) return;

    const cursor = cursorRef.current;
    const ring = ringRef.current;
    if (!cursor || !ring) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.left = `${mouseX}px`;
      cursor.style.top = `${mouseY}px`;
    };

    window.addEventListener("mousemove", handleMouseMove);

    let animationFrame;
    const updateRing = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      animationFrame = requestAnimationFrame(updateRing);
    };
    updateRing();

    // Event delegation for hover states
    const handleMouseOver = (e) => {
      const target = e.target;
      const isClickable =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".cursor-pointer") ||
        target.classList.contains("cursor-pointer");

      setIsHovering(isClickable);
    };

    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(animationFrame);
    };
  }, [isLoading]);

  // Global theme switcher handler
  const handleChangeTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem("portfolio_theme", newTheme);
    soundManager.playThemeChange();
  };

  // Global sound toggler
  const handleToggleMute = () => {
    const muted = soundManager.toggleMute();
    setIsMuted(muted);
    if (!muted) {
      soundManager.playSuccess();
    }
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-[#0a0a0f] flex items-center justify-center z-50 transition-all">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full border-4 border-transparent border-t-accent-primary border-r-purple-500 animate-spin" />
          <div className="text-white font-bold text-xl tracking-wider uppercase">
            Awad Mohammed
          </div>
          <p className="text-[10px] text-gray-500 tracking-[0.2em] uppercase mt-2">
            Loading Portfolio Experience
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050508] text-white overflow-x-hidden relative">
      {/* Background Interactive Particles */}
      <BackgroundCanvas />

      {/* Custom Cursor FX elements */}
      <div
        ref={cursorRef}
        className={`custom-cursor ${isHovering ? "hovering" : ""}`}
        style={{ left: "-100px", top: "-100px" }}
      />
      <div
        ref={ringRef}
        className={`custom-cursor-ring ${isHovering ? "hovering" : ""}`}
        style={{ left: "-100px", top: "-100px" }}
      />

      {/* Global Command Palette search */}
      <CommandPalette
        isOpen={isCmdOpen}
        onClose={() => setIsCmdOpen(false)}
        activeTheme={theme}
        onChangeTheme={handleChangeTheme}
        isMuted={isMuted}
        onToggleMute={handleToggleMute}
      />

      {/* Portfolio Structure */}
      <Navbar
        activeTheme={theme}
        onChangeTheme={handleChangeTheme}
        isMuted={isMuted}
        onToggleMute={handleToggleMute}
        onOpenCmd={() => {
          soundManager.playClick();
          setIsCmdOpen(true);
        }}
      />

      <Hero activeTheme={theme} />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}
