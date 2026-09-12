import { ArrowUpRight, Check } from "lucide-react";

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
        <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          {/* Visual vignette card */}
          <div data-reveal className="relative order-1">
            <div className="relative overflow-hidden rounded-3xl bg-ink p-8 text-white shadow-[0_30px_60px_-30px_rgba(22,51,0,0.7)] sm:p-10">
              {/* Decorative top grid */}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-24 opacity-30"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgba(159,232,112,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(159,232,112,0.35) 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }}
              />
              <div
                aria-hidden="true"
                className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/20 blur-3xl"
              />

              {/* Monogram */}
              <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-accent font-display text-4xl font-extrabold text-ink">
                AM
              </div>

              <p className="relative mt-8 max-w-xs text-2xl font-semibold leading-snug text-white">
                Turning complex requirements into{" "}
                <span className="text-accent">clean, fast</span> and maintainable
                code.
              </p>

              {/* Metrics */}
              <dl className="relative mt-8 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-white/15 pt-8">
                {metrics.map((m) => (
                  <div key={m.label}>
                    <dd className="font-display text-3xl font-extrabold text-accent sm:text-4xl">
                      {m.value}
                    </dd>
                    <dt className="mt-1 text-xs font-medium text-white/60">
                      {m.label}
                    </dt>
                  </div>
                ))}
              </dl>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-3 hidden items-center gap-2 rounded-full border border-line bg-white px-4 py-2 shadow-lg sm:flex">
              <span className="h-2 w-2 rounded-full bg-accent-strong" />
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
                  className="flex items-start gap-3 rounded-xl border border-line bg-white p-3.5"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-ink">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm text-ink">{item}</span>
                </li>
              ))}
            </ul>

            {/* Quick facts */}
            <dl className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-2xl border border-line bg-white p-4"
                >
                  <dt className="text-[11px] font-bold uppercase tracking-widest text-mute">
                    {fact.label}
                  </dt>
                  <dd className="mt-1 text-sm font-semibold break-all text-ink">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>

            <a
              href="#projects"
              className="mt-7 inline-flex items-center gap-1.5 font-semibold text-ink transition-colors hover:text-accent-strong"
            >
              See my work <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}