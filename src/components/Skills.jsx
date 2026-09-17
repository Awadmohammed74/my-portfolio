import { useState } from "react";

const skillCategories = [
  {
    id: "wordpress",
    title: "WordPress Core",
    skills: [
      { name: "Theme Development (PHP OOP)", level: 95 },
      { name: "Plugin Development (Hooks & REST API)", level: 90 },
      { name: "Advanced Custom Fields (ACF Pro)", level: 92 },
      { name: "WooCommerce Engine Customization", level: 88 },
      { name: "Gutenberg Block Architectures", level: 78 },
    ],
  },
  {
    id: "frontend",
    title: "Frontend Engineering",
    skills: [
      { name: "React & Advanced Architecture", level: 90 },
      { name: "Global State (Redux / Context / Hooks)", level: 85 },
      { name: "JavaScript ES6+", level: 90 },
      { name: "Tailwind CSS v4 & Responsive Grid", level: 85 },
      { name: "HTML5 / CSS3", level: 95 },
      { name: "Figma to Interface", level: 75 },
    ],
  },
  {
    id: "backend",
    title: "Backend & Systems",
    skills: [
      { name: "PHP OOP / MVC", level: 90 },
      { name: "MySQL Relational Schema", level: 85 },
      { name: "REST API Design & Webhooks", level: 88 },
      { name: "Postman API Testing", level: 88 },
      { name: "Linux Bash & Shell Automation", level: 78 },
    ],
  },
  {
    id: "devops",
    title: "DevOps & Cloud",
    skills: [
      { name: "VPS Infrastructure (Hetzner)", level: 82 },
      { name: "LiteSpeed Enterprise Server", level: 80 },
      { name: "Workflow Automation (Zapier / Make)", level: 85 },
      { name: "Git & GitHub workflows", level: 80 },
    ],
  },
  {
    id: "firebase",
    title: "Firebase, Supabase & Auth",
    skills: [
      { name: "Supabase PostgreSQL & Auth", level: 85 },
      { name: "Firebase Firestore & Realtime", level: 85 },
      { name: "Firebase Authentication", level: 88 },
      { name: "Firebase Cloud Messaging", level: 80 },
      { name: "Firebase Hosting & Functions", level: 75 },
    ],
  },
  {
    id: "seo",
    title: "Performance & SEO",
    skills: [
      { name: "Lighthouse Speed Indexing", level: 92 },
      { name: "Core Web Vitals Optimization", level: 88 },
      { name: "Caching (LiteSpeed / Redis)", level: 82 },
      { name: "Search Console & Schema JSON", level: 80 },
    ],
  },
];

const filters = [
  { id: "all", label: "All" },
  { id: "wordpress", label: "WordPress" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "devops", label: "DevOps" },
  { id: "firebase", label: "Firebase" },
  { id: "seo", label: "SEO" },
];

export default function Skills() {
  const [active, setActive] = useState("all");
  const visible =
    active === "all"
      ? skillCategories
      : skillCategories.filter((c) => c.id === active);

  return (
    <section id="skills" className="section relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-28 bottom-10 h-72 w-72 rounded-full bg-accent/12 blur-3xl"
      />

      <div className="container-x">
        <div className="relative mx-auto max-w-2xl pb-4 text-center" data-reveal>
          <span
            aria-hidden="true"
            className="section-num absolute -top-6 left-1/2 -z-10 -translate-x-1/2"
          >
            03
          </span>
          <p className="eyebrow justify-center">Skills</p>
          <h2 className="mt-4 text-3xl font-extrabold text-ink sm:text-4xl">
            A focused <span className="text-gradient">engineering toolkit</span>
          </h2>
          <p className="mt-4 text-mute">
            The tools and technologies I use to ship fast, reliable products.
          </p>
        </div>

        <div
          className="mt-8 flex justify-center"
          data-reveal
          role="tablist"
          aria-label="Filter skills by category"
        >
          <div className="tab-group">
            {filters.map((f) => (
              <button
                key={f.id}
                type="button"
                role="tab"
                aria-selected={active === f.id}
                onClick={() => setActive(f.id)}
                className={`tab ${active === f.id ? "is-active" : ""}`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((category, i) => (
            <article
              key={category.id}
              data-reveal
              style={{ transitionDelay: `${(i % 3) * 80}ms` }}
              className="card p-6"
            >
              <h3 className="font-display text-lg font-bold text-ink">
                {category.title}
              </h3>
              <p className="mb-5 mt-1 text-xs font-medium text-mute">
                {category.skills.length} competencies
              </p>

              <ul className="space-y-4">
                {category.skills.map((skill) => (
                  <li key={skill.name}>
                    <div className="mb-1.5 flex items-baseline justify-between gap-3">
                      <span className="text-sm font-medium text-ink">
                        {skill.name}
                      </span>
                      <span className="text-xs font-semibold text-mute">
                        {skill.level}%
                      </span>
                    </div>
                    <div
                      className="h-1.5 overflow-hidden rounded-full bg-line"
                      role="progressbar"
                      aria-valuenow={skill.level}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={skill.name}
                    >
                      <div
                        className="h-full rounded-full bg-accent-strong"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}