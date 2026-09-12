import { useEffect, useRef } from "react";
import { ArrowUpRight, Mail } from "lucide-react";

const keywords = [
  "WordPress",
  "WooCommerce",
  "React",
  "Custom Plugins",
  "Headless CMS",
  "REST APIs",
  "Performance & SEO",
  "DevOps",
];

function TechMarquee() {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // JS-driven rAF marquee — runs reliably on mobile regardless of
    // OS-level animation settings. Pauses only when off-screen to save battery.
    let raf = 0;
    let x = 0;
    let half = track.scrollWidth / 2;
    let visible = true;
    let last = performance.now();

    const measure = () => {
      half = track.scrollWidth / 2;
    };
    measure();
    window.addEventListener("resize", measure);

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    io.observe(track);

    const tick = (now) => {
      const dt = now - last;
      last = now;
      if (visible) {
        x -= dt * 0.035; // px per ms
        if (half > 0 && -x >= half) x += half;
        track.style.transform = `translate3d(${x}px, 0, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="absolute inset-x-0 top-0 overflow-hidden border-b border-white/10 py-4"
    >
      <div ref={trackRef} className="flex w-max items-center gap-10 will-change-transform">
        {[...keywords, ...keywords].map((word, i) => (
          <span
            key={i}
            className="flex items-center gap-10 text-xs font-semibold uppercase tracking-[0.2em] text-white/45"
          >
            {word}
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Cta() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 text-white">
      <TechMarquee />

      <div className="container-x pt-8">
        <div className="mx-auto max-w-2xl text-center" data-reveal>
          <p className="eyebrow justify-center text-accent">Let&apos;s talk</p>
          <h2 className="mt-5 text-3xl font-extrabold sm:text-4xl">
            Have a project in mind?
            <span className="mt-2 block text-accent">
              Let&apos;s build it together.
            </span>
          </h2>
          <p className="mt-4 text-white/70">
            From WooCommerce stores to React applications, I&apos;ll bring
            performance, clean code, and measurable results to your next build.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="#contact" className="btn btn-accent">
              Start a project <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="mailto:awadmhmd666@gmail.com"
              className="btn border border-white/30 bg-transparent text-white hover:border-accent hover:text-accent"
            >
              <Mail className="h-4 w-4" /> Email me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}