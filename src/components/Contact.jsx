import { useState, useRef, useEffect } from "react";
import {
  Send,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  Sparkles,
} from "lucide-react";
import { soundManager } from "../utils/sound";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [shakeName, setShakeName] = useState(false);
  const [shakeEmail, setShakeEmail] = useState(false);
  const [shakeMsg, setShakeMsg] = useState(false);

  const canvasRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    let hasError = false;
    if (!name.trim()) {
      setShakeName(true);
      setTimeout(() => setShakeName(false), 500);
      hasError = true;
    }
    if (!email.trim() || !email.includes("@")) {
      setShakeEmail(true);
      setTimeout(() => setShakeEmail(false), 500);
      hasError = true;
    }
    if (!message.trim()) {
      setShakeMsg(true);
      setTimeout(() => setShakeMsg(false), 500);
      hasError = true;
    }

    if (hasError) {
      soundManager.playError();
      return;
    }

    soundManager.playSuccess();
    setSubmitted(true);
  };

  useEffect(() => {
    if (!submitted) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight || 350;

    let particles = [];
    const colors = [
      getComputedStyle(document.documentElement)
        .getPropertyValue("--accent-primary")
        .trim() || "#3b82f6",
      getComputedStyle(document.documentElement)
        .getPropertyValue("--accent-secondary")
        .trim() || "#8b5cf6",
      "#f472b6",
      "#38bdf8",
      "#34d399",
    ];

    class Spark {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = Math.random() * 3 + 1.5;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.vx = (Math.random() - 0.5) * 6;
        this.vy = (Math.random() - 0.5) * 6 - 3;
        this.gravity = 0.08;
        this.alpha = 1;
        this.decay = Math.random() * 0.015 + 0.01;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vy += this.gravity;
        this.alpha -= this.decay;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    const spawnX = canvas.width / 2;
    const spawnY = canvas.height / 2 - 20;
    for (let i = 0; i < 70; i++) {
      particles.push(new Spark(spawnX, spawnY));
    }

    let animationFrame;
    const animateSparks = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, idx) => {
        p.update();
        p.draw();
        if (p.alpha <= 0) {
          particles.splice(idx, 1);
        }
      });

      if (particles.length > 0) {
        animationFrame = requestAnimationFrame(animateSparks);
      }
    };
    animateSparks();

    return () => cancelAnimationFrame(animationFrame);
  }, [submitted]);

  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-primary/25 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div
            onMouseEnter={() => soundManager.playTick()}
            className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 text-sm text-accent-primary mb-4 border border-accent-primary/10"
          >
            <Mail className="w-3.5 h-3.5" />
            Contact Terminal
          </div>
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            Let's{" "}
            <span className="gradient-text font-black">Work Together</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto font-medium">
            Have a project framework or custom plugins needed? Let's build
            something world-class.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          {/* Left panel: Info */}
          <div className="space-y-8 flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-2xl font-black text-white">
                Initiate Project Brief
              </h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-medium">
                I am actively accepting requests for theme construction, custom
                WooCommerce integrations, performance consulting, and headless
                React web solutions.
              </p>
            </div>

            {/* Methods */}
            <div className="space-y-4.5">
              {[
                {
                  icon: <Mail className="w-5 h-5" />,
                  label: "Encrypted Mailbox",
                  value: "awadmhmd666@gmail.com",
                  color: "text-accent-primary",
                  link: "mailto:awadmhmd666@gmail.com",
                },
                {
                  icon: <MapPin className="w-5 h-5" />,
                  label: "Operations Location",
                  value: "Egypt (GMT+3 Timezone)",
                  color: "text-accent-secondary",
                  link: "https://maps.google.com/?q=Egypt",
                },
                {
                  icon: <Clock className="w-5 h-5" />,
                  label: "Client Booking Pipeline",
                  value: "Available for Contracts",
                  color: "text-pink-500",
                  link: "#",
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => soundManager.playTick()}
                  className={`group flex items-center gap-4 glass rounded-2xl p-4 border border-white/5 hover:border-accent-primary/30 transition-all duration-300 cursor-pointer ${item.color}`}
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-0.5">
                      {item.label}
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-accent-primary transition-colors">
                      {item.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right panel: Form */}
          <div className="relative">
            <canvas
              ref={canvasRef}
              className="absolute inset-0 pointer-events-none z-10 rounded-2xl"
            />

            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className="glass rounded-2xl p-6 sm:p-8 border border-white/5 space-y-5"
              >
                {/* Name */}
                <div>
                  <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Awad Mohammed"
                    className={`w-full bg-white/5 border ${shakeName ? "border-red-500 animate-shake" : "border-white/10 focus:border-accent-primary"} rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 outline-none transition-all`}
                  />
                  {shakeName && (
                    <p className="flex items-center gap-1 text-red-400 text-[11px] mt-1">
                      <AlertCircle className="w-3 h-3" />
                      Please enter your name
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="awadmhmd666@gmail.com"
                    className={`w-full bg-white/5 border ${shakeEmail ? "border-red-500 animate-shake" : "border-white/10 focus:border-accent-primary"} rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 outline-none transition-all`}
                  />
                  {shakeEmail && (
                    <p className="flex items-center gap-1 text-red-400 text-[11px] mt-1">
                      <AlertCircle className="w-3 h-3" />
                      Please enter a valid email
                    </p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. WooCommerce Performance Audit Request"
                    className="w-full bg-white/5 border border-white/10 focus:border-accent-primary rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 outline-none transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your project requirements or framework needs..."
                    rows={4}
                    className={`w-full bg-white/5 border ${shakeMsg ? "border-red-500 animate-shake" : "border-white/10 focus:border-accent-primary"} rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 outline-none transition-all resize-none`}
                  />
                  {shakeMsg && (
                    <p className="flex items-center gap-1 text-red-400 text-[11px] mt-1">
                      <AlertCircle className="w-3 h-3" />
                      Please provide a message
                    </p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  onMouseEnter={() => soundManager.playTick()}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-accent-primary to-accent-secondary hover:from-accent-primary/90 hover:to-accent-secondary/90 text-white font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-accent-primary/20 hover:shadow-accent-primary/40"
                >
                  <Send className="w-4 h-4" />
                  Spawn Project Brief
                </button>
              </form>
            ) : (
              /* Success State */
              <div className="glass rounded-2xl p-8 sm:p-12 border border-accent-primary/20 text-center min-h-[400px] flex flex-col items-center justify-center animate-scale-in">
                <div className="w-16 h-16 rounded-full bg-accent-primary/20 flex items-center justify-center mb-5">
                  <CheckCircle className="w-8 h-8 text-accent-primary" />
                </div>
                <h3 className="text-2xl font-black text-white mb-2">
                  Message Launched!
                </h3>
                <p className="text-gray-400 text-sm max-w-sm mx-auto mb-6">
                  Your encrypted transmission has been received. I'll decode
                  your requirements and respond within 24 business hours.
                </p>
                <Sparkles className="w-12 h-12 text-accent-primary animate-pulse" />
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setName("");
                    setEmail("");
                    setSubject("");
                    setMessage("");
                  }}
                  onMouseEnter={() => soundManager.playTick()}
                  className="mt-6 px-6 py-2 rounded-full text-xs font-bold border border-white/10 text-gray-400 hover:text-white hover:bg-white/5 transition-all"
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
