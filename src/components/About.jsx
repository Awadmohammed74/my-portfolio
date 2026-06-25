import { useState, useEffect, useRef } from "react";
import {
  Monitor,
  Code2,
  Briefcase,
  FolderOpen,
  Terminal as TerminalIcon,
} from "lucide-react";
import { soundManager } from "../utils/sound";

export default function About() {
  const [isTerminalMode, setIsTerminalMode] = useState(false);
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalHistory, setTerminalHistory] = useState([
    { type: "system", text: "AwadOS v1.2.4 (React 19 System Kernel Loaded)" },
    { type: "system", text: "Type 'help' to list available system commands." },
    { type: "system", text: "" },
  ]);
  const [matrixActive, setMatrixActive] = useState(false);

  const terminalEndRef = useRef(null);
  const matrixCanvasRef = useRef(null);

  // Auto scroll terminal to bottom
  useEffect(() => {
    if (isTerminalMode) {
      terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [terminalHistory, isTerminalMode]);

  // Matrix code rain effect
  useEffect(() => {
    if (!matrixActive || !isTerminalMode) return;

    const canvas = matrixCanvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animFrame;
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight || 300;

    const katakana =
      "ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const alphabet = katakana.split("");

    const fontSize = 13;
    const columns = canvas.width / fontSize;

    const rainDrops = [];
    for (let x = 0; x < columns; x++) {
      rainDrops[x] = 1;
    }

    const draw = () => {
      // Semi-transparent black background to leave trails
      ctx.fillStyle = "rgba(5, 5, 10, 0.08)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#0f0"; // Matrix Green
      ctx.font = fontSize + "px monospace";

      for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet[Math.floor(Math.random() * alphabet.length)];
        ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          rainDrops[i] = 0;
        }
        rainDrops[i]++;
      }
      animFrame = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight || 300;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener("resize", handleResize);
    };
  }, [matrixActive, isTerminalMode]);

  // Terminal commands interpreter
  const handleTerminalSubmit = (e) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    if (!cmd) return;

    soundManager.playClick();
    const newHistory = [
      ...terminalHistory,
      { type: "input", text: `awad-server:~$ ${terminalInput}` },
    ];

    switch (cmd) {
      case "help":
        newHistory.push(
          { type: "output", text: "Available System commands:" },
          {
            type: "output",
            text: "  about    - Print professional background summary",
          },
          {
            type: "output",
            text: "  skills   - List technical tools & developer skills",
          },
          {
            type: "output",
            text: "  projects - List active project repositories",
          },
          {
            type: "output",
            text: "  matrix   - Toggle the Matrix Digital Code Rain overlay",
          },
          { type: "output", text: "  clear    - Clear console display logs" },
          { type: "output", text: "  exit     - Exit hacker console mode" },
        );
        soundManager.playSuccess();
        break;
      case "about":
        newHistory.push(
          { type: "output", text: "Full Name: Awad Mohammed AbdelAal" },
          {
            type: "output",
            text: "Role: Specialized WordPress & Frontend React Engineer",
          },
          {
            type: "output",
            text: "Academic: Computer Engineering at Misr Higher Institute",
          },
          {
            type: "output",
            text: "Bio: Passionate about constructing high-speed ecommerce platforms, custom theme structures, WooCommerce core APIs, and sleek single-page React apps.",
          },
        );
        soundManager.playSuccess();
        break;
      case "skills":
        newHistory.push(
          { type: "output", text: "=== CORE STACK ===" },
          {
            type: "output",
            text: "  WordPress Themes & Plugins (95% Proficiency)",
          },
          {
            type: "output",
            text: "  PHP / OOP & MySQL Backend Systems (90% Proficiency)",
          },
          {
            type: "output",
            text: "  JavaScript (ES6+) & React Frontend (85% Proficiency)",
          },
          {
            type: "output",
            text: "  SEO / Core Web Vitals Optimization (90% Proficiency)",
          },
          {
            type: "output",
            text: "  Server VPS / Linux Bash scripting (82% Proficiency)",
          },
        );
        soundManager.playSuccess();
        break;
      case "projects":
        newHistory.push(
          { type: "output", text: "=== FEATURED WORKS ===" },
          {
            type: "output",
            text: "  * The Sun Shop - Bilingual multi-currency WooCommerce portal",
          },
          {
            type: "output",
            text: "  * EzzyRigs Marketplace - Digital vendors marketplace platform",
          },
          {
            type: "output",
            text: "  * Khaleej Tech - Corporate infrastructure showcase page",
          },
          {
            type: "output",
            text: "  * Shams City - Luxury Real Estate listing engine",
          },
        );
        soundManager.playSuccess();
        break;
      case "matrix":
        setMatrixActive(!matrixActive);
        newHistory.push({
          type: "output",
          text: !matrixActive
            ? "Initializing Matrix digital rain overlay... (Green rain activated)"
            : "Matrix overlay disabled.",
        });
        soundManager.playSuccess();
        break;
      case "clear":
        setTerminalHistory([]);
        setTerminalInput("");
        return;
      case "exit":
        setIsTerminalMode(false);
        setMatrixActive(false);
        return;
      default:
        newHistory.push({
          type: "error",
          text: `Command not found: '${cmd}'. Type 'help' for options.`,
        });
        soundManager.playError();
        break;
    }

    setTerminalHistory(newHistory);
    setTerminalInput("");
  };

  return (
    <section id="about" className="relative py-32 px-6">
      {/* Decorative Top Accent line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-primary/30 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <div
            onMouseEnter={() => soundManager.playTick()}
            className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 text-sm text-accent-primary mb-4 border border-accent-primary/10"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-pulse" />
            About System Kernel
          </div>
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            Passionate About <span className="gradient-text">Engineering</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full mx-auto" />

          {/* Mode Switcher Buttons */}
          <div className="mt-8 flex justify-center gap-3">
            <button
              onClick={() => {
                soundManager.playClick();
                setIsTerminalMode(false);
                setMatrixActive(false);
              }}
              onMouseEnter={() => soundManager.playTick()}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all border cursor-pointer ${
                !isTerminalMode
                  ? "bg-accent-primary text-white border-accent-primary shadow-lg shadow-accent-primary/20"
                  : "text-gray-400 hover:text-white border-white/5 glass"
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
              Standard Card View
            </button>
            <button
              onClick={() => {
                soundManager.playClick();
                setIsTerminalMode(true);
              }}
              onMouseEnter={() => soundManager.playTick()}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all border cursor-pointer ${
                isTerminalMode
                  ? "bg-accent-primary text-white border-accent-primary shadow-lg shadow-accent-primary/20"
                  : "text-gray-400 hover:text-white border-white/5 glass"
              }`}
            >
              <TerminalIcon className="w-3.5 h-3.5" />
              Developer Hacker console
            </button>
          </div>
        </div>

        {/* Content Container */}
        <div className="min-h-[400px]">
          {!isTerminalMode ? (
            /* ================= STANDARD VIEW ================= */
            <div className="grid md:grid-cols-2 gap-12 items-center animate-scale-in">
              {/* Left Side: Avatar Graphics */}
              <div className="relative">
                <div className="relative w-72 h-72 sm:w-80 sm:h-80 mx-auto">
                  {/* Glowing Morph Blob background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 rounded-full animate-morph blur-2xl pointer-events-none" />

                  {/* Avatar Body */}
                  <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-accent-primary/20 shadow-2xl group">
                    <img
                      src="/assets/me.png"
                      alt="Awad Mohammed"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display = "flex";
                      }}
                    />
                    {/* Fallback if image fails */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10 items-center justify-center hidden">
                      <div className="text-center">
                        <div className="text-6xl font-black gradient-text tracking-wide mb-2 font-['Outfit']">
                          AM
                        </div>
                        <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                          Awad Mohammed
                        </div>
                      </div>
                    </div>

                    {/* Orbiting ring */}
                    <div
                      className="absolute inset-0 rounded-full border border-accent-primary/20 pointer-events-none"
                      style={{ animation: "spinSlow 20s linear infinite" }}
                    >
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-accent-primary rounded-full shadow-lg shadow-accent-primary/50" />
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-accent-secondary rounded-full shadow-lg shadow-accent-secondary/50" />
                    </div>
                  </div>
                </div>

                {/* Floating Skill Badges */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-3 flex-wrap justify-center max-w-sm">
                  {[
                    { name: "WordPress", icon: Code2 },
                    { name: "PHP OOP", icon: Code2 },
                    { name: "React CMS", icon: Briefcase },
                  ].map((item, i) => (
                    <div
                      key={item.name}
                      onMouseEnter={() => soundManager.playTick()}
                      className="glass rounded-full px-4.5 py-2 text-xs font-semibold text-gray-300 border border-white/5 shadow-md hover:border-accent-primary/40 transition-colors cursor-default"
                    >
                      <span
                        className={`inline-flex items-center justify-center mr-2 ${i === 0 ? "text-accent-primary" : i === 1 ? "text-accent-secondary" : "text-pink-500"}`}
                      >
                        <item.icon className="w-3 h-3" />
                      </span>
                      {item.name}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side: Description Text */}
              <div className="space-y-6">
                <p className="text-gray-300 text-lg leading-relaxed font-medium">
                  Hello! I'm{" "}
                  <span className="text-white font-black font-['Outfit']">
                    Awad Mohammed AbdelAal
                  </span>
                  , a dedicated{" "}
                  <span className="text-accent-primary font-bold">
                    WordPress Specialist
                  </span>{" "}
                  with 3+ years of professional history developing custom
                  plugins, high-converting WooCommerce storefronts, REST API
                  automations, and optimized servers.
                </p>

                <p className="text-gray-400 leading-relaxed text-sm">
                  I construct clean code structures combining the robust MVC/OOP
                  capabilities of PHP backend frameworks with the
                  high-performance modern user interfaces of React. Currently
                  completing computer engineering studies at Misr Higher
                  Institute.
                </p>

                {/* Quick Info Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  {[
                    { label: "Engineering Lead", value: "Awad Mohammed" },
                    { label: "Location Coordinates", value: "Egypt (GMT+3)" },
                    { label: "Secure Email", value: "awadmhmd666@gmail.com" },
                    { label: "Current Status", value: "Open for Projects" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      onMouseEnter={() => soundManager.playTick()}
                      className="glass rounded-2xl p-4 border border-white/5 hover:border-accent-primary/20 transition-all duration-300 cursor-default"
                    >
                      <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-1">
                        {item.label}
                      </div>
                      <div className="text-xs sm:text-sm font-semibold text-white break-all">
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* ================= HACKER MODE TERMINAL ================= */
            <div
              className="max-w-3xl mx-auto rounded-xl terminal-window overflow-hidden border border-white/10 relative animate-scale-in shadow-2xl"
              onMouseEnter={() => soundManager.playTick()}
            >
              {/* Optional Matrix Canvas Overlay */}
              {matrixActive && (
                <canvas
                  ref={matrixCanvasRef}
                  className="absolute inset-0 pointer-events-none opacity-20 z-0 bg-transparent"
                />
              )}

              {/* Terminal header bar */}
              <div className="terminal-header flex items-center justify-between px-4 py-2 bg-black/40 z-10 relative">
                <div className="flex gap-2">
                  <div className="terminal-dot bg-red-500/80" />
                  <div className="terminal-dot bg-yellow-500/80" />
                  <div className="terminal-dot bg-green-500/80" />
                </div>
                <div className="text-[11px] font-bold text-gray-500 font-mono tracking-wider">
                  awad-server:~ (bash)
                </div>
                <div className="w-12" />
              </div>

              {/* Terminal logs panel */}
              <div className="p-5 h-80 overflow-y-auto text-xs font-mono space-y-2 z-10 relative text-green-400 bg-transparent scrollbar-thin">
                {terminalHistory.map((item, idx) => (
                  <div
                    key={idx}
                    className="whitespace-pre-wrap leading-relaxed"
                  >
                    {item.type === "input" && (
                      <span className="text-blue-400">{item.text}</span>
                    )}
                    {item.type === "system" && (
                      <span className="text-yellow-400 font-semibold">
                        {item.text}
                      </span>
                    )}
                    {item.type === "output" && (
                      <span className="text-gray-300">{item.text}</span>
                    )}
                    {item.type === "error" && (
                      <span className="text-red-400 font-bold animate-pulse">
                        {item.text}
                      </span>
                    )}
                  </div>
                ))}
                <div ref={terminalEndRef} />
              </div>

              {/* Terminal input form */}
              <form
                onSubmit={handleTerminalSubmit}
                className="flex items-center gap-2 px-5 py-3 border-t border-white/5 bg-black/60 z-10 relative"
              >
                <span className="text-blue-400 text-xs font-mono font-bold shrink-0">
                  awad-server:~$
                </span>
                <input
                  type="text"
                  value={terminalInput}
                  onChange={(e) => {
                    setTerminalInput(e.target.value);
                    if (e.target.value) soundManager.playTick();
                  }}
                  placeholder="Enter command (e.g. help, about, skills, matrix, exit)..."
                  className="terminal-input w-full text-xs font-mono"
                  autoFocus
                />
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
