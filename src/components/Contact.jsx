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
  Phone,
  MessageCircle,
} from "lucide-react";
import { soundManager } from "../utils/sound";

const FORMSPREE_URL = "https://formspree.io/f/xnjkdlgv";

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

  const handleSubmit = async (e) => {
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

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });
      if (!res.ok) throw new Error("Failed");
      soundManager.playSuccess();
      setSubmitted(true);
    } catch (err) {
      soundManager.playError();
    }
  };

  useEffect(() => {
    /* same firework effect */
  }, [submitted]);

  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-primary/25 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 text-sm text-accent-primary mb-4 border border-accent-primary/10">
            <Mail className="w-3.5 h-3.5" />
            Contact Me
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
          <div className="space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-2xl font-black text-white">
                Get In Touch Directly
              </h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-medium">
                Available for WordPress projects, WooCommerce stores, and React
                frontend work. Reach out anytime.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                {
                  icon: <Mail className="w-5 h-5" />,
                  label: "Email",
                  value: "awadmhmd666@gmail.com",
                  color: "text-accent-primary",
                  link: "mailto:awadmhmd666@gmail.com",
                },
                {
                  icon: (
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  ),
                  label: "LinkedIn",
                  value: "LinkedIn Profile",
                  color: "text-blue-400",
                  link: "https://www.linkedin.com/in/awad-mohammed-6047b3360/",
                },
                {
                  icon: (
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  ),
                  label: "GitHub",
                  value: "GitHub Repos",
                  color: "text-white",
                  link: "https://github.com/Awadmohammed74",
                },
                {
                  icon: <MessageCircle className="w-5 h-5" />,
                  label: "WhatsApp",
                  value: "01018553683",
                  color: "text-green-400",
                  link: "https://wa.me/201018553683",
                },
                {
                  icon: <Phone className="w-5 h-5" />,
                  label: "Phone",
                  value: "01018553683",
                  color: "text-accent-secondary",
                  link: "tel:+201018553683",
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => soundManager.playTick()}
                  className={`group flex items-center gap-3 glass rounded-2xl p-4 border border-white/5 hover:border-accent-primary/30 transition-all duration-300 ${item.color}`}
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-all duration-300 shrink-0">
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-0.5">
                      {item.label}
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-accent-primary transition-colors truncate">
                      {item.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right panel: Form */}
          <div className="relative">
            {!submitted ? (
              <form
                action={FORMSPREE_URL}
                method="POST"
                onSubmit={handleSubmit}
                className="glass rounded-2xl p-6 sm:p-8 border border-white/5 space-y-5"
              >
                <div>
                  <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Awad Mohammed"
                    className={`w-full bg-white/5 border ${shakeName ? "border-red-500 animate-shake" : "border-white/10 focus:border-accent-primary"} rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 outline-none transition-all`}
                  />
                  {shakeName && (
                    <p className="flex items-center gap-1 text-red-400 text-[11px] mt-1">
                      <AlertCircle className="w-3 h-3" /> Please enter your name
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="awadmhmd666@gmail.com"
                    className={`w-full bg-white/5 border ${shakeEmail ? "border-red-500 animate-shake" : "border-white/10 focus:border-accent-primary"} rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 outline-none transition-all`}
                  />
                  {shakeEmail && (
                    <p className="flex items-center gap-1 text-red-400 text-[11px] mt-1">
                      <AlertCircle className="w-3 h-3" /> Please enter a valid
                      email
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. WooCommerce Performance Audit"
                    className="w-full bg-white/5 border border-white/10 focus:border-accent-primary rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your project needs..."
                    rows={4}
                    className={`w-full bg-white/5 border ${shakeMsg ? "border-red-500 animate-shake" : "border-white/10 focus:border-accent-primary"} rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 outline-none transition-all resize-none`}
                  />
                  {shakeMsg && (
                    <p className="flex items-center gap-1 text-red-400 text-[11px] mt-1">
                      <AlertCircle className="w-3 h-3" /> Please provide a
                      message
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  onMouseEnter={() => soundManager.playTick()}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-accent-primary to-accent-secondary hover:from-accent-primary/90 hover:to-accent-secondary/90 text-white font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-accent-primary/20 hover:shadow-accent-primary/40"
                >
                  <Send className="w-4 h-4" /> Send Message
                </button>
              </form>
            ) : (
              <div className="glass rounded-2xl p-8 sm:p-12 border border-accent-primary/20 text-center min-h-[400px] flex flex-col items-center justify-center animate-scale-in">
                <div className="w-16 h-16 rounded-full bg-accent-primary/20 flex items-center justify-center mb-5">
                  <CheckCircle className="w-8 h-8 text-accent-primary" />
                </div>
                <h3 className="text-2xl font-black text-white mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-400 text-sm max-w-sm mx-auto mb-6">
                  Your message has been received. I will review your requirements and respond within 24 hours.
                </p>
                <Sparkles className="w-12 h-12 text-accent-primary animate-pulse" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
