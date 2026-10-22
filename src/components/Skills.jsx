import { useRef, useState } from "react";
import { Boxes, Droplets, LayoutGrid, Zap } from "lucide-react";
import {
  SiWordpress, SiPhp, SiWoocommerce, SiHetzner, SiMake, SiZapier,
  SiReact, SiRedux, SiJavascript, SiTailwindcss, SiHtml5, SiCss, SiFigma,
  SiGit, SiGithub, SiDocker,
  SiFirebase, SiSupabase,
  SiShopify,
  SiLighthouse, SiGoogleanalytics, SiRedis,
} from "react-icons/si";

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
    logos: [SiWordpress, SiPhp, SiWoocommerce, Boxes],
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
    logos: [SiReact, SiRedux, SiJavascript, SiTailwindcss, SiHtml5, SiCss, SiFigma],
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
    logos: [SiGit, SiGithub, SiDocker, SiHetzner, Zap, SiZapier, SiMake],
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
    logos: [SiFirebase, SiSupabase],
  },
  {
    id: "shopify",
    title: "Shopify Development",
    skills: [
      { name: "Custom Theme Development (Liquid)", level: 88 },
      { name: "Custom Sections & Schema Blocks", level: 86 },
      { name: "Custom HTML/CSS/JS Integration", level: 92 },
      { name: "Product & Collection Page Customization", level: 85 },
      { name: "Checkout & Conversion Optimization", level: 80 },
    ],
    logos: [SiShopify, Droplets, SiJavascript],
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
    logos: [SiLighthouse, SiGoogleanalytics, Zap, SiRedis],
  },
];

const filters = [
  { id: "all", label: "All", icon: LayoutGrid },
  { id: "wordpress", label: "WordPress", icon: SiWordpress },
  { id: "frontend", label: "Frontend", icon: SiReact },
  { id: "devops", label: "DevOps", icon: SiGit },
  { id: "firebase", label: "Firebase", icon: SiFirebase },
  { id: "shopify", label: "Shopify", icon: SiShopify },
  { id: "seo", label: "SEO", icon: SiLighthouse },
];

export default function Skills() {
  const [active, setActive] = useState("all");
  // First paint keeps the per-card scroll reveal; once the user filters, cards
  // mount plain so the grid can cross-fade them in with a light 200ms fade.
  const [filteredOnce, setFilteredOnce] = useState(false);
  const tabRefs = useRef([]);

  const visible =
    active === "all"
      ? skillCategories
      : skillCategories.filter((c) => c.id === active);

  const selectTab = (id) => {
    setActive(id);
    setFilteredOnce(true);
  };

  // Roving tab stop: arrow keys / Home / End move focus and activate the tab.
  const onTabKeyDown = (event, index) => {
    const last = filters.length - 1;
    let next;
    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown":
        next = index === last ? 0 : index + 1;
        break;
      case "ArrowLeft":
      case "ArrowUp":
        next = index === 0 ? last : index - 1;
        break;
      case "Home":
        next = 0;
        break;
      case "End":
        next = last;
        break;
      default:
        return;
    }
    event.preventDefault();
    selectTab(filters[next].id);
    tabRefs.current[next]?.focus();
  };

  return (
    <section id="skills" className="section relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-28 bottom-10 h-72 w-72 rounded-full bg-accent/12 blur-3xl"
      />

      <div className="container-x">
        <div
          className="relative mx-auto max-w-2xl pb-4 text-center"
          data-reveal
        >
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
          className="mt-8"
          data-reveal
          role="tablist"
          aria-label="Filter skills by category"
        >
          <div className="tab-group">
            {filters.map((f, index) => (
              <button
                key={f.id}
                ref={(el) => {
                  tabRefs.current[index] = el;
                }}
                type="button"
                role="tab"
                aria-selected={active === f.id}
                tabIndex={active === f.id ? 0 : -1}
                onClick={() => selectTab(f.id)}
                onKeyDown={(event) => onTabKeyDown(event, index)}
                className={`tab flex items-center gap-1.5 ${active === f.id ? "is-active" : ""}`}
              >
                {f.icon && <f.icon className="h-3.5 w-3.5" />}
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div
          key={active}
          className="skills-grid mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {visible.map((category, i) => (
            <article
              key={category.id}
              data-reveal={filteredOnce ? undefined : true}
              style={
                filteredOnce
                  ? undefined
                  : { transitionDelay: `${(i % 3) * 80}ms` }
              }
              className="card flex h-full flex-col p-6"
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
               <div className="mt-auto pt-5 flex flex-wrap items-center gap-2 border-t border-line">
                 {(category.logos || []).map((Icon, idx) => (
                   <span key={idx} className="flex h-7 w-7 items-center justify-center rounded-lg bg-ink/5 text-ink/70">
                     <Icon className="h-4 w-4" />
                   </span>
                 ))}
               </div>

            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
