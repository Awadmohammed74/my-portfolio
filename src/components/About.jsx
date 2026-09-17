import { ArrowUpRight, Check, Quote } from "lucide-react";

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
  { label: "Role", value: "Engineering Lead" },
  { label: "Location", value: "Egypt (GMT+3)" },
  { label: "Email", value: "awadmhmd666@gmail.com" },
  { label: "Status", value: "Open for projects" },
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

            <p className="mt-6 text-lg leading-relaxed text-mute">
              Hello, I&apos;m{" "}
              <strong className="font-semibold text-ink">
                Awad Mohammed AbdelAal
              </strong>
              , a WordPress specialist with 3+ years of professional experience
              developing custom plugins, high-converting WooCommerce stores,
              REST API automations, and optimized servers.
            </p>

            <p className="mt-4 leading-relaxed text-mute">
              I combine the robustness of PHP MVC/OOP architecture with the
              performance of the React ecosystem to craft clean, maintainable
              code. I&apos;m currently completing my computer engineering studies
              at Misr Higher Institute.
            </p>

            {/* Differentiators */}
            <ul className="mt-7 grid gap-3">
              {differentiators.map((item, i) => (
                <li
                  key={item}
                  data-reveal
                  style={{ transitionDelay: `${i * 70}ms` }}
                  className="feature-row"
                >
                  <span className="relative z-10 mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ink text-accent">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="relative z-10 text-sm font-medium text-ink">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* Quick facts */}
            <dl className="mt-6 flex flex-wrap gap-2">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  title={fact.value}
                  className="chip !flex-col !items-start !gap-0 !rounded-xl !px-3.5 !py-2"
                >
                  <dt className="text-[10px] font-bold uppercase tracking-widest text-mute">
                    {fact.label}
                  </dt>
                  <dd className="text-xs font-semibold break-all text-ink">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>

            <a
              href="#projects"
              className="group mt-8 inline-flex items-center gap-1.5 font-semibold text-ink transition-colors hover:text-accent-strong"
            >
              See my work
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
