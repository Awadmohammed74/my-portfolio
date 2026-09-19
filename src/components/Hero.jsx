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
          <div className="flex flex-col items-start">
            <span className="eyebrow animate-fade-up">
              <span className="h-2 w-2 rounded-full bg-accent-strong" />
              Available for work
            </span>

            <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tighter text-ink sm:text-6xl lg:text-7xl animate-fade-up delay-100">
              Awad Mohammed
              <span 
                key={roleIndex} 
                className="mt-3 block text-2xl font-bold tracking-tight text-mute sm:text-3xl animate-[fade-up_0.5s_ease-out_forwards]"
              >
                {roles[roleIndex]}
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-mute sm:text-lg animate-fade-up delay-200">
              Computer engineering student and web developer with 3+ years of
              experience shipping high-performance WordPress themes,
              WooCommerce ecosystems, custom plugins, and modern React
              frontends.
            </p>

            {/* CTA buttons — full width on mobile */}
            <div className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row animate-fade-up delay-300">
              <a
                href="#projects"
                className="btn btn-accent w-full justify-center sm:w-auto transition-all duration-300 hover:scale-105"
              >
                View Projects <ArrowDown className="h-4 w-4" />
              </a>
              <a
                href="/assets/Awad_Resme.pdf"
                download
                className="btn btn-ghost w-full justify-center sm:w-auto transition-all duration-300 hover:scale-105"
              >
                Download CV
              </a>
            </div>

            {/* Stats — premium cards */}
            <dl className="mt-12 grid grid-cols-3 gap-2.5 sm:gap-4">
              {[
                { value: "3+", label: "Years of experience" },
                { value: "20+", label: "Projects delivered" },
                { value: "90+", label: "Lighthouse score" },
              ].map((s, i) => (
                <div
                  key={s.label}
                  data-reveal
                  style={{ transitionDelay: `${i * 90}ms` }}
                  className="group relative overflow-hidden rounded-2xl border border-line bg-white/70 px-2 py-5 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent-strong/50 hover:shadow-[0_20px_40px_-24px_rgba(22,51,0,0.55)] sm:px-4 sm:py-6"
                >
                  {/* top accent tick */}
                  <span
                    aria-hidden="true"
                    className="absolute left-1/2 top-0 h-0.5 w-8 -translate-x-1/2 rounded-full bg-accent-strong transition-all duration-300 group-hover:w-14"
                  />
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="text-gradient font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                    {s.value}
                  </dd>
                  <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-mute sm:text-xs">
                    {s.label}
                  </p>
                </div>
              ))}
            </dl>
          </div>

          {/* Portrait */}
          <div className="mx-auto w-full max-w-sm animate-fade-up delay-400">
            <figure className="relative transition-transform duration-700 ease-out hover:-rotate-1 hover:scale-[1.02]">
              <div
                aria-hidden="true"
                className="absolute -inset-5 -z-10 rotate-3 rounded-[2rem] bg-ink/5"
              />
              <div
                aria-hidden="true"
                className="absolute -inset-4 -z-10 -rotate-2 rounded-[2rem] bg-accent/40"
              />
              <div className="overflow-hidden rounded-[2rem] border-2 border-white bg-white shadow-[0_32px_64px_-24px_rgba(22,51,0,0.15)]">
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
              <div className="absolute -left-4 top-6 flex items-center gap-3 rounded-2xl border border-white/60 bg-white/90 px-4 py-2.5 shadow-2xl backdrop-blur-md sm:-left-8 transition-transform duration-500 hover:-translate-y-1">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-strong opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent-strong" />
                </span>
                <span className="text-sm font-bold tracking-tight text-ink">Open to work</span>
              </div>

              {/* Floating metric badge */}
              <div className="absolute -right-3 bottom-8 rounded-3xl border border-white/60 bg-white/90 px-5 py-4 shadow-2xl backdrop-blur-md sm:-right-6 transition-transform duration-500 hover:-translate-y-1">
                <p className="font-display text-3xl font-extrabold text-ink">
                  90<span className="text-accent-strong">+</span>
                </p>
                <p className="mt-0.5 text-xs font-bold uppercase tracking-wider text-mute">
                  Lighthouse
                </p>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}