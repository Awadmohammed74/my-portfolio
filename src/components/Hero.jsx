import { useState, useEffect } from "react";
import { ArrowRight, Mail, Clock, Rocket, Zap } from "lucide-react";

const roles = ["WordPress Developer", "React Developer"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(
      () => setRoleIndex((prev) => (prev + 1) % roles.length),
      3000,
    );
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) =>
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(10,10,15,1) 0%, rgba(59,130,246,0.1) 50%, rgba(139,92,246,0.1) 100%)",
        }}
      />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl animate-morph"
          style={{
            background:
              "radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)",
            transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-3xl animate-morph"
          style={{
            background:
              "radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)",
            transform: `translate(${-mousePos.x}px, ${-mousePos.y}px)`,
            animationDelay: "-4s",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl animate-float"
          style={{
            background:
              "radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)",
          }}
        />
      </div>
      <div className="absolute top-32 right-20 w-24 h-24 border border-white/10 rounded-full animate-spinSlow hidden lg:block" />
      <div
        className="absolute bottom-32 left-20 w-20 h-20 border border-white/10 rounded-full animate-spinSlow hidden lg:block"
        style={{ animationDirection: "reverse" }}
      />
      <div
        className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full animate-ping"
        style={{ background: "var(--accent-primary)" }}
      />
      <div
        className="absolute bottom-1/3 left-1/4 w-2 h-2 rounded-full animate-ping"
        style={{ background: "var(--accent-primary)", animationDelay: "0.5s" }}
      />
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="mb-8 animate-fade-in">
          <div className="relative w-32 h-32 mx-auto mb-6">
            <div
              className="absolute inset-0 rounded-full animate-pulse opacity-50"
              style={{
                background:
                  "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
              }}
            />
            <div
              className="relative w-full h-full rounded-full overflow-hidden border-2 shadow-2xl"
              style={{
                borderColor: "var(--accent-primary)",
                boxShadow: "0 0 30px var(--accent-glow)",
              }}
            >
              <img
                src="/assets/me.png"
                alt="Awad Mohammed"
                className={`w-full h-full object-cover ${imgLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}
                onLoad={() => setImgLoaded(true)}
                onError={() => setImgLoaded(false)}
              />
              {!imgLoaded && (
                <div className="absolute inset-0 flex items-center justify-center text-4xl font-black gradient-text">
                  AM
                </div>
              )}
            </div>
          </div>
        </div>
        <div
          className="inline-flex items-center gap-3 glass rounded-full px-6 py-3 text-sm text-gray-300 mb-10 animate-fade-in"
          style={{ borderColor: "var(--accent-border)" }}
        >
          <span className="relative flex h-2 w-2">
            <span
              className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
              style={{ background: "var(--accent-primary)" }}
            />
            <span
              className="relative inline-flex rounded-full h-2 w-2"
              style={{ background: "var(--accent-primary)" }}
            />
          </span>
          <span className="font-medium">Available for Work</span>
          <span className="text-gray-600">|</span>
          <span className="text-gray-400">Egypt</span>
        </div>
        <div className="mb-6 animate-slide-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
            <span className="block text-white mb-2">Hi, I'm</span>
            <span
              className="block animate-gradient"
              style={{
                background:
                  "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary), var(--accent-primary))",
                backgroundSize: "200% 200%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Awad Mohammed
            </span>
          </h1>
        </div>
        <div
          className="h-12 sm:h-14 mb-8 flex items-center justify-center animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          <span className="text-xl sm:text-2xl md:text-3xl font-bold">
            <span className="text-gray-500">I'm a </span>
            <span
              className="text-transparent animate-gradient"
              style={{
                background:
                  "linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))",
                backgroundSize: "200% 200%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {roles[roleIndex]}
            </span>
          </span>
        </div>
        <p
          className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in"
          style={{ animationDelay: "0.5s" }}
        >
          WordPress Developer with 3+ years of experience crafting
          high-performance websites. Specialized in custom themes, plugins,
          WooCommerce, and headless CMS solutions.
        </p>

        {/* Theme-aware CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in"
          style={{ animationDelay: "0.7s" }}
        >
          <a
            href="#projects"
            className="px-8 py-3.5 rounded-full font-bold text-white text-base transition-all duration-300 hover:scale-105 active:scale-95"
            style={{
              background: "var(--accent-primary)",
              boxShadow: "0 0 25px var(--accent-glow)",
            }}
          >
            <span className="flex items-center gap-2">
              View Projects <ArrowRight className="w-4 h-4" />
            </span>
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-full font-semibold text-white text-base border transition-all duration-300 hover:scale-105 active:scale-95 glass"
            style={{ borderColor: "var(--accent-border)" }}
          >
            <span className="flex items-center gap-2">
              Get In Touch <Mail className="w-4 h-4" />
            </span>
          </a>
        </div>

        {/* Stats with Lucide Icons */}
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto animate-fade-in"
          style={{ animationDelay: "0.9s" }}
        >
          {[
            { value: "3+", label: "Years Exp", icon: Clock },
            { value: "20+", label: "Projects", icon: Rocket },
            { value: "90+", label: "Lighthouse", icon: Zap },
          ].map((stat) => (
            <div
              key={stat.label}
              className="group relative glass rounded-2xl p-4 sm:p-5 flex flex-row sm:flex-col items-center sm:items-start gap-4 sm:gap-2 hover:border-[var(--accent-primary)]/30 transition-all duration-300 cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-primary)]/5 to-[var(--accent-secondary)]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10 flex flex-col items-center sm:items-start w-full">
                <stat.icon
                  className="w-6 h-6 mb-1"
                  style={{ color: "var(--accent-primary)" }}
                />
                <div
                  className="text-2xl sm:text-3xl font-black mb-0 sm:mb-1"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {stat.value}
                </div>
                <div className="text-xs text-gray-500 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in"
        style={{ animationDelay: "1.5s" }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-gray-600 font-medium tracking-wider uppercase">
            Scroll
          </span>
          <div className="w-5 h-8 border-2 border-gray-700 rounded-full flex justify-center pt-1.5">
            <div
              className="w-1 h-2 rounded-full animate-scroll"
              style={{
                background:
                  "linear-gradient(180deg, var(--accent-primary), var(--accent-secondary))",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
