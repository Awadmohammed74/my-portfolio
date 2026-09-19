import {
  ArrowUpRight,
  Briefcase,
  Mail,
  MapPin,
  Quote,
  Zap,
} from "lucide-react";

const differentiators = [
  "Custom WordPress themes & plugins (PHP OOP, Hooks, REST API)",
  "High-converting WooCommerce stores with custom logic",
  "Performance & Core Web Vitals optimization (Lighthouse 90+)",
  "React / headless frontends and automated DevOps workflows",
];

const metrics = [
  { value: "3+", label: "Years" },
  { value: "20+", label: "Projects" },
  { value: "10+", label: "Stores" },
  { value: "90+", label: "Lighthouse" },
];

const facts = [
  { label: "Role", value: "Engineering Lead", icon: Briefcase },
  { label: "Location", value: "Egypt (GMT+3)", icon: MapPin },
  { label: "Email", value: "awadmhmd666@gmail.com", icon: Mail },
  { label: "Status", value: "Open for projects", icon: Zap },
];

export default function About() {
  return (
    <section id="about" className="section bg-soft-accent">
      <div className="container-x">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          {/* ── Portrait panel ─────────────────────────────── */}
          <div data-reveal className="relative order-1">
            <div
              aria-hidden="true"
              className="absolute -left-8 -top-8 -z-10 h-40 w-40 rounded-full bg-accent/40 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-10 -right-6 -z-10 h-44 w-44 rounded-full bg-accent-strong/20 blur-3xl"
            />

            <div className="gradient-ring shadow-[0_36px_70px_-36px_rgba(22,51,0,0.65)]">
              <div className="relative overflow-hidden bg-ink p-7 text-white sm:p-9">
                {/* Decorative grid + glow */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-28 opacity-25"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, rgba(159,232,112,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(159,232,112,0.4) 1px, transparent 1px)",
                    backgroundSize: "26px 26px",
                    maskImage:
                      "linear-gradient(to bottom, black, transparent)",
                    WebkitMaskImage:
                      "linear-gradient(to bottom, black, transparent)",
                  }}
                />
                <div
                  aria-hidden="true"
                  className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/25 blur-3xl"
                />

                {/* Monogram + role */}
                <div className="relative flex items-center gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-accent font-display text-2xl font-extrabold text-ink shadow-[0_14px_28px_-14px_rgba(76,127,37,0.8)]">
                    AM
                  </div>
                  <div>
                    <p className="font-display text-xl font-extrabold tracking-tight">
                      Awad Mohammed AbdelAal
                    </p>
                    <p className="mt-0.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                      WordPress &amp; React Engineer
                    </p>
                  </div>
                </div>

                <Quote
                  aria-hidden="true"
                  className="relative mt-7 h-6 w-6 text-accent/60"
                />
                <p className="relative mt-3 text-2xl font-semibold leading-snug text-white">
                  Turning complex requirements into{" "}
                  <span className="text-accent">clean, fast</span> and
                  maintainable code.
                </p>

                {/* Glass metrics */}
                <dl className="relative mt-7 grid grid-cols-2 gap-3">
                  {metrics.map((m) => (
                    <div
                      key={m.label}
                      className="glass-panel px-4 py-3.5 text-center transition-transform duration-300 hover:-translate-y-1"
                    >
                      <dd className="font-display text-2xl font-extrabold text-accent">
                        {m.value}
                      </dd>
                      <dt className="mt-0.5 text-[11px] font-medium text-white/60">
                        {m.label}
                      </dt>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-5 right-4 hidden items-center gap-2 rounded-full border border-line bg-white px-4 py-2 shadow-[0_16px_32px_-16px_rgba(22,51,0,0.5)] sm:flex">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-strong opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent-strong" />
              </span>
              <span className="text-xs font-semibold text-ink">
                Available for freelance
              </span>
            </div>
          </div>
{/* Copy */}
          <div data-reveal className="relative order-2">
            <span
              aria-hidden="true"
              className="section-num absolute -top-6 -left-2 -z-10"
            >
              01
            </span>
            <p className="eyebrow">About me</p>
            <h2 className="mt-4 text-3xl font-extrabold text-ink sm:text-4xl">
              A developer focused on{" "}
              <span className="text-gradient">performance &amp; impact</span>
            </h2>

            {/* Intro — editorial style with accent rule */}
            <div className="mt-6 border-l-[3px] border-accent-strong pl-5">
              <p className="text-lg leading-relaxed text-mute">
                Hello, I&apos;m{" "}
                <strong className="font-semibold text-ink">
                  Awad Mohammed AbdelAal
                </strong>
                , a WordPress specialist with 3+ years of professional
                experience developing custom plugins, high-converting
                WooCommerce stores, REST API automations, and optimized
                servers.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-mute">
                I combine the robustness of PHP MVC/OOP architecture with the
                performance of the React ecosystem to craft clean, maintainable
                code. I&apos;m currently completing my computer engineering
                studies at Misr Higher Institute.
              </p>
            </div>

            {/* Differentiators — dark numbered block */}
            <div
              className="relative mt-8 overflow-hidden rounded-2xl bg-ink p-5 sm:p-6"
              data-reveal
            >
              <div
                aria-hidden="true"
                className="absolute -right-14 -top-14 h-40 w-40 rounded-full bg-accent/20 blur-3xl"
              />
              <p className="relative text-[10px] font-bold uppercase tracking-[0.22em] text-accent">
                What I bring to the table
              </p>
              <ul className="relative mt-4 grid gap-3">
                {differentiators.map((item, i) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 rounded-xl bg-white/[0.06] px-3.5 py-3 ring-1 ring-white/10 transition-colors duration-300 hover:bg-white/10"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-accent font-display text-xs font-extrabold text-ink">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm font-medium leading-snug text-white/90">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick facts — icon cards */}
            <dl className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  title={fact.value}
                  className="flex items-center gap-3 rounded-xl border border-line bg-white/70 px-4 py-3 transition-all duration-300 hover:border-accent-strong/50 hover:bg-white"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent-strong">
                    <fact.icon className="h-4 w-4" />
                  </span>
                  <div className="min-w-0">
                    <dt className="text-[10px] font-bold uppercase tracking-widest text-mute">
                      {fact.label}
                    </dt>
                    <dd className="truncate text-sm font-semibold text-ink">
                      {fact.value}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex items-center gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-1.5 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:gap-2.5 hover:bg-accent-strong hover:text-ink"
              >
                See my work
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <span className="h-px flex-1 bg-line" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
