import { useEffect, useState } from "react";
import { ArrowDown, Download } from "lucide-react";

const roles = [
  "WordPress & WooCommerce Engineer",
  "React Frontend Developer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setRoleIndex((prev) => (prev + 1) % roles.length),
      3200,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" className="relative pt-28 pb-16 sm:pt-32">
      {/* Decorative depth: soft grid + accent orb */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="bg-grid absolute inset-0" />
        <div className="animate-float-soft absolute -right-24 top-16 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
      </div>

      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Copy */}
          <div data-reveal>
            <span className="eyebrow">
              <span className="h-2 w-2 rounded-full bg-accent-strong" />
              Available for work
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
              Awad Mohammed
              <span className="mt-3 block text-xl font-semibold text-mute sm:text-2xl">
                {roles[roleIndex]}
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-mute sm:text-lg">
              Computer engineering student and web developer with 3+ years of
              experience shipping high-performance WordPress themes,
              WooCommerce ecosystems, custom plugins, and modern React
              frontends.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#projects" className="btn btn-accent">
                View Projects <ArrowDown className="h-4 w-4" />
              </a>
              <a
                href="/assets/Awad_Resme.pdf"
                download
                className="btn btn-ghost"
              >
                Download CV
              </a>
            </div>

            {/* Tech focus chips */}
            <ul className="mt-8 flex flex-wrap gap-2">
              {["WordPress", "WooCommerce", "React", "PHP OOP", "REST APIs"].map(
                (tag) => (
              <li key={tag} className="chip">
                {tag}
              </li>
                ),
              )}
            </ul>

            {/* Stats */}
            <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-line pt-8">
              {[
                { value: "3+", label: "Years of experience" },
                { value: "20+", label: "Projects delivered" },
                { value: "90+", label: "Lighthouse score" },
              ].map((s) => (
                <div key={s.label}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="font-display text-3xl font-extrabold text-ink sm:text-4xl">
                    {s.value}
                  </dd>
                  <p className="mt-1 text-xs font-medium text-mute sm:text-sm">
                    {s.label}
                  </p>
                </div>
              ))}
            </dl>
          </div>

          {/* Portrait */}
          <div data-reveal className="mx-auto w-full max-w-sm">
            <figure className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-5 -z-10 rotate-3 rounded-[2rem] bg-ink/5"
              />
              <div
                aria-hidden="true"
                className="absolute -inset-4 -z-10 -rotate-2 rounded-[2rem] bg-accent/40"
              />
              <div className="overflow-hidden rounded-[2rem] border border-line bg-white shadow-[0_24px_50px_-30px_rgba(22,51,0,0.4)]">
                <img
                  src="/assets/awad.png"
                  alt="Portrait of Awad Mohammed"
                  width={640}
                  height={800}
                  loading="eager"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>

              {/* Floating role badge */}
              <div className="absolute -left-4 top-6 flex items-center gap-2 rounded-xl border border-line bg-white px-3.5 py-2 shadow-lg sm:-left-8">
                <span className="h-2.5 w-2.5 rounded-full bg-accent-strong" />
                <span className="text-xs font-semibold text-ink">Open to work</span>
              </div>

              {/* Floating metric badge */}
              <div className="absolute -right-3 bottom-8 rounded-2xl border border-line bg-white px-4 py-3 shadow-lg sm:-right-6">
                <p className="font-display text-2xl font-extrabold text-ink">
                  90<span className="text-accent-strong">+</span>
                </p>
                <p className="text-[11px] font-semibold text-mute">
                  Lighthouse score
                </p>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}