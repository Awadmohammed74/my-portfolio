import { useState } from "react";
import { Check, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";

const FORMSPREE_URL = "https://formspree.io/f/xnjkdlgv";

const BRAND_ICONS = {
  LinkedIn:
    "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  GitHub:
    "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
};

function InfoIcon({ icon, label }) {
  if (typeof icon === "string") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
        <path d={icon} />
      </svg>
    );
  }
  const Icon = icon;
  return <Icon className="h-5 w-5" aria-hidden="true" />;
}

const info = [
  { icon: Mail, label: "Email", value: "awadmhmd666@gmail.com", href: "mailto:awadmhmd666@gmail.com" },
  { icon: Phone, label: "Phone", value: "+20 101 855 3683", href: "tel:+201018553683" },
  { icon: MessageCircle, label: "WhatsApp", value: "Chat on WhatsApp", href: "https://wa.me/201018553683" },
  { icon: BRAND_ICONS.LinkedIn, label: "LinkedIn", value: "awad-mohammed", href: "https://www.linkedin.com/in/awad-mohammed-6047b3360/" },
  { icon: BRAND_ICONS.GitHub, label: "GitHub", value: "@Awadmohammed74", href: "https://github.com/Awadmohammed74" },
  { icon: MapPin, label: "Location", value: "Egypt · GMT+3" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const update = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) {
      setStatus("error");
      return;
    }
    try {
      setStatus("sending");
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-mute/70 focus:border-ink focus:outline-none transition-colors";

  return (
    <section id="contact" className="section">
      <div className="container-x">
        <div className="relative mx-auto max-w-2xl pb-4 text-center" data-reveal>
          <span
            aria-hidden="true"
            className="section-num absolute -top-6 left-1/2 -z-10 -translate-x-1/2"
          >
            06
          </span>
          <p className="eyebrow justify-center">Contact</p>
          <h2 className="mt-4 text-3xl font-extrabold text-ink sm:text-4xl">
            Let&apos;s build something <span className="text-gradient">great</span>
          </h2>
          <p className="mt-4 text-mute">
            Have a WooCommerce store, plugin, or React project in mind? I&apos;ll
            respond within 24 hours.
          </p>
        </div>

        <div
          className="mt-12 grid items-end gap-8 lg:grid-cols-[0.9fr_1.1fr]"
          data-reveal
        >
          {/* Info */}
          <aside>
            <h3 className="font-display text-xl font-bold text-ink">
              Get in touch
            </h3>
            <ul className="mt-6 space-y-4">
              {info.map((item) => (
                <li
                  key={item.label}
                  className="flex items-start gap-4 rounded-2xl border border-line bg-white p-4"
                >
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-ink">
                    <InfoIcon icon={item.icon} label={item.label} />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-mute">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="mt-0.5 block text-sm font-semibold text-ink hover:underline"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-0.5 text-sm font-semibold text-ink">
                        {item.value}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </aside>

          {/* Form */}
          {status === "sent" ? (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-line bg-white p-10 text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-ink">
                <Check className="h-8 w-8" />
              </span>
              <h3 className="mt-6 font-display text-xl font-bold text-ink">
                Message sent
              </h3>
              <p className="mt-2 max-w-sm text-sm text-mute">
                Thanks for reaching out. I&apos;ll review your requirements and
                get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-line bg-white p-6 sm:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium text-ink"
                  >
                    Name <span className="text-accent-strong">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={update("name")}
                    placeholder="Your name"
                    required
                    className={inputClass}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium text-ink"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={update("email")}
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="mt-4">
                <label
                  htmlFor="subject"
                  className="mb-1.5 block text-sm font-medium text-ink"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  value={form.subject}
                  onChange={update("subject")}
                  placeholder="e.g. WooCommerce performance audit"
                  className={inputClass}
                />
              </div>

              <div className="mt-4">
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-ink"
                >
                  Message <span className="text-accent-strong">*</span>
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={form.message}
                  onChange={update("message")}
                  placeholder="Describe your project needs..."
                  required
                  className={`${inputClass} resize-none`}
                />
              </div>

              {status === "error" && (
                <p className="mt-3 text-sm text-red-600">
                  Please add your name, a valid email, and a message.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="btn btn-accent mt-6 w-full"
              >
                {status === "sending" ? (
                  "Sending…"
                ) : (
                  <>
                    Send message <Send className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}