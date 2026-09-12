import {
  Globe,
  ShoppingCart,
  Boxes,
  Code2,
  Wrench,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "WordPress & WooCommerce",
    desc: "Custom themes, plugins, and high-converting WooCommerce stores engineered for speed, security, and clean maintainable code.",
    highlights: ["Custom themes", "WooCommerce", "ACF / CPT"],
  },
  {
    icon: Code2,
    title: "React & Headless Frontends",
    desc: "Fast single-page applications and headless CMS integrations bringing modern, dynamic interfaces to your product.",
    highlights: ["React 19", "Vite", "Tailwind CSS"],
  },
  {
    icon: Boxes,
    title: "Custom Plugin Architecture",
    desc: "Robust PHP OOP plugins and REST API automations that extend WordPress exactly how your business needs.",
    highlights: ["PHP OOP / MVC", "REST APIs", "Hooks"],
  },
  {
    icon: Wrench,
    title: "Performance, SEO & DevOps",
    desc: "Core Web Vitals optimization, caching strategies, and cloud infrastructure that keep sites fast under load.",
    highlights: ["Lighthouse 90+", "LiteSpeed / Redis", "VPS & Bash"],
  },
];

export default function Services() {
  return (
    <section id="services" className="section" aria-labelledby="services-heading">
      <div className="container-x">
        <div
          className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
          data-reveal
        >
          <div className="relative">
            <span
              aria-hidden="true"
              className="section-num absolute -top-10 -left-2 -z-10"
            >
              02
            </span>
            <p className="eyebrow">What I do</p>
            <h2
              id="services-heading"
              className="mt-4 max-w-xl text-3xl font-extrabold text-ink sm:text-4xl"
            >
              Services built around{" "}
              <span className="text-gradient">performance</span> &amp; code
              quality
            </h2>
          </div>
          <a
            href="#contact"
            className="btn btn-ghost shrink-0 px-5! py-2.5! text-sm"
          >
            Start a project <ShoppingCart className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <article
              key={service.title}
              data-reveal
              style={{ transitionDelay: `${(i % 4) * 80}ms` }}
              className="card group flex flex-col p-6"
            >
              <div className="flex items-start justify-between">
                <span className="service-index">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-ink transition-transform duration-300 group-hover:-translate-y-1">
                  <service.icon className="h-5 w-5" />
                </span>
              </div>

              <h3 className="mt-6 font-display text-lg font-bold text-ink">
                {service.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-mute">
                {service.desc}
              </p>

              <ul className="mt-5 flex flex-wrap gap-1.5">
                {service.highlights.map((h) => (
                  <li
                    key={h}
                    className="rounded-full bg-mist px-2.5 py-1 text-[11px] font-medium text-ink"
                  >
                    {h}
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