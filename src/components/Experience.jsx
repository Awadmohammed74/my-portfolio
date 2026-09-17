import { Briefcase, Check } from "lucide-react";

const experiences = [
  {
    role: "Freelance WordPress Architect & Developer",
    company: "Self-Employed · Remote",
    period: "04/2023 — Present",
    desc: "Designing and engineering custom high-performance corporate sites, digital marketplaces, and WooCommerce portals with robust backend architectures.",
    achievements: [
      "Bespoke themes and plugins with PHP OOP namespaces",
      "90+ Lighthouse Core Web Vitals benchmarks",
      "Secure financial flows (Stripe, Paymob, Tabby)",
      "VPS automation with Bash CLI scripts",
    ],
  },
  {
    role: "WordPress Core Engineer",
    company: "Khaleej Tech · UAE, Remote",
    period: "06/2023 — 02/2025",
    desc: "Refactored checkout pipelines and pricing tables for digital marketplaces; built advanced admin dashboards with CPT and ACF Pro.",
    achievements: [
      "Halved layout loading times from 4s to under 1.8s",
      "Custom vendor registration and commission hooks",
      "REST API endpoints for third-party software sync",
      "Bilingual English/Arabic with Polylang structures",
    ],
  },
  {
    role: "WordPress & Frontend Specialist",
    company: "Dev2Go · Egypt, Hybrid",
    period: "05/2025 — 01/2026",
    desc: "Integrated headless CMS endpoints, automated deployments, and optimized server configuration, caching, and responsive layouts.",
    achievements: [
      "Automated LiteSpeed & Redis caching scripts",
      "Fully responsive ultra-wide and mobile layouts",
      "Custom-field refactors cutting API latency 30%",
      "Maintained technical documentation logs",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-24 h-80 w-80 rounded-full bg-accent/12 blur-3xl"
      />

      <div className="container-x max-w-4xl">
        <div className="relative mx-auto max-w-2xl pb-4 text-center" data-reveal>
          <span
            aria-hidden="true"
            className="section-num absolute -top-6 left-1/2 -z-10 -translate-x-1/2"
          >
            05
          </span>
          <p className="eyebrow justify-center">Experience</p>
          <h2 className="mt-4 text-3xl font-extrabold text-ink sm:text-4xl">
            A track record of <span className="text-gradient">shipped work</span>
          </h2>
        </div>

        <ol className="mt-14 space-y-6">
          {experiences.map((exp, i) => (
            <li
              key={exp.role}
              data-reveal
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div className="flex gap-4 sm:gap-6">
                {/* Timeline rail */}
                <div className="flex flex-col items-center">
                  <span className="font-display flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink text-base font-bold text-accent shadow-lg shadow-[0_10px_24px_-12px_rgba(22,51,0,0.7)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {i < experiences.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="my-1 w-px flex-1 bg-line"
                    />
                  )}
                </div>

                {/* Card */}
                <article className="card flex-1 p-6 sm:p-7">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <h3 className="font-display text-lg font-bold leading-snug text-ink">
                      {exp.role}
                    </h3>
                    <span className="shrink-0 rounded-full border border-line bg-white px-3 py-1 text-xs font-semibold text-ink transition-colors hover:border-accent-strong hover:bg-accent/40">
                      {exp.period}
                    </span>
                  </div>

                  <p className="mt-2 flex items-center gap-1.5 text-sm font-semibold text-accent-strong">
                    <Briefcase className="h-4 w-4 shrink-0" />
                    {exp.company}
                  </p>

                  <p className="mt-3 text-sm leading-relaxed text-mute">
                    {exp.desc}
                  </p>

                  <ul className="mt-5 grid gap-2.5 border-t border-line pt-4 sm:grid-cols-2">
                    {exp.achievements.map((a) => (
                      <li
                        key={a}
                        className="flex items-start gap-2.5 text-sm leading-snug text-ink"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-ink">
                          <Check className="h-3 w-3" />
                        </span>
                        {a}
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}