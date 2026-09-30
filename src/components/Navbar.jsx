import { useEffect, useRef, useState } from "react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const SECTION_IDS = navLinks.map((l) => l.href.slice(1));

// On the light menu, keep the focus ring a slightly deeper green so it reads.
const RING = "focus-visible:outline-accent-strong focus-visible:outline-offset-4";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [reduceMotion, setReduceMotion] = useState(false);
  const [pending, setPending] = useState(null);
  const barRef = useRef(null);
  const headerRef = useRef(null);
  const panelRef = useRef(null);
  const toggleRef = useRef(null);
  const firstLinkRef = useRef(null);
  const wasOpenRef = useRef(false);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      ticking = false;
      setScrolled(window.scrollY > 8);
      // Write directly to the DOM (no React re-render per scroll frame)
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      if (max <= 0 || !barRef.current) return;
      const p = Math.min(1, window.scrollY / max);
      // Skip micro-changes (mobile address-bar resize makes these jump around)
      if (Math.abs(p - lastP) < 0.002) return;
      lastP = p;
      barRef.current.style.transform = `scaleX(${p})`;
    };

    let lastP = 0;

    // Throttle to one update per animation frame — stops mobile jank
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Respect the user's motion preference (also gates the stagger delays).
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // If the viewport grows into the desktop layout while the menu is open,
  // close it so the background scroll-lock can never get stuck.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => {
      if (mq.matches) setOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Scroll-spy: flag the section currently sitting under the header.
  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      Boolean,
    );
    if (!sections.length) return;

    let ticking = false;
    let current = "";

    const compute = () => {
      ticking = false;
      const line = 96; // px from the top — matches scroll-padding-top (6rem)
      let found = "";
      for (const el of sections) {
        if (el.getBoundingClientRect().top <= line) found = el.id;
      }
      if (found !== current) {
        current = found;
        setActive(found);
      }
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(compute);
      }
    };

    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Lock background scrolling while the menu is open.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  // Move focus into the menu on open; hand it back to the toggle on close.
  useEffect(() => {
    if (open) {
      wasOpenRef.current = true;
      const raf = requestAnimationFrame(() => firstLinkRef.current?.focus());
      return () => cancelAnimationFrame(raf);
    }
    if (wasOpenRef.current) {
      wasOpenRef.current = false;
      toggleRef.current?.focus();
    }
  }, [open]);

  // Escape closes the menu; Tab is trapped inside header + panel.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
        return;
      }
      if (e.key !== "Tab") return;
      const roots = [headerRef.current, panelRef.current].filter(Boolean);
      const nodes = [];
      roots.forEach((root) =>
        root.querySelectorAll("a[href], button:not([disabled])").forEach((n) => {
          if (n.offsetParent !== null) nodes.push(n);
        }),
      );
      if (!nodes.length) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      const act = document.activeElement;
      if (e.shiftKey) {
        if (act === first) {
          e.preventDefault();
          last.focus();
        }
      } else if (act === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // Once the menu is closed, glide to the section the user picked.
  useEffect(() => {
    if (open || !pending) return;
    const el = document.getElementById(pending);
    if (el) {
      el.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start",
      });
      window.history.replaceState(null, "", `#${pending}`);
    }
    setPending(null);
  }, [open, pending, reduceMotion]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setOpen(false);
    setPending(href.slice(1));
  };

  const linkDelay = (i) => (open && !reduceMotion ? `${i * 50}ms` : "0ms");

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-mist/90 backdrop-blur border-b border-line shadow-[0_1px_0_0_rgba(22,51,0,0.04)]"
            : "bg-transparent"
        }`}
      >
      {/* Scroll progress — GPU transform, updated via ref (no re-renders) */}
      <div
        ref={barRef}
        aria-hidden="true"
        className="absolute left-0 top-0 h-0.5 w-full origin-left bg-accent-strong"
        style={{ transform: "scaleX(0)" }}
      />
      <nav className="container-x flex h-16 items-center justify-between">
        <a
          href="#home"
          className="font-display text-lg font-extrabold tracking-tight text-ink"
          onClick={(e) => handleNavClick(e, "#home")}
        >
          Awad<span className="text-accent-strong">.</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-mute transition-colors hover:text-ink hover:bg-white"
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="ml-2">
            <a href="#contact" className="btn btn-accent px-5! py-2.5! text-sm">
              Let&apos;s Talk
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          ref={toggleRef}
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white lg:hidden"
        >
          <span className="relative block h-3.5 w-5">
            <span
              className={`absolute left-0 top-[6px] h-0.5 w-full bg-ink transition-transform duration-300 ${
                open ? "rotate-45" : "-translate-y-[6px]"
              }`}
            />
            <span
              className={`absolute left-0 top-[6px] h-0.5 w-full bg-ink transition-[opacity,transform] duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[6px] h-0.5 w-full bg-ink transition-transform duration-300 ${
                open ? "-rotate-45" : "translate-y-[6px]"
              }`}
            />
          </span>
        </button>
      </nav>
      </header>

      {/* Fullscreen mobile menu — kept as a sibling of the header so the fixed
          overlay is never trapped by the header's backdrop-blur containing block. */}
      <div
        id="mobile-menu"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className={`fixed inset-x-0 top-0 z-30 flex h-[100dvh] w-full flex-col bg-[linear-gradient(180deg,#ffffff_0%,#f4faec_52%,#e8f3d9_100%)] text-ink transition-[opacity,visibility] duration-300 lg:hidden ${
          open ? "visible opacity-100" : "pointer-events-none invisible opacity-0"
        }`}
      >
        <div className="container-x flex h-full flex-col pb-8 pt-24">
          <nav
            aria-label="Primary"
            className="flex min-h-0 flex-1 flex-col justify-center overflow-y-auto"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((link, i) => {
                const isActive = active === link.href.slice(1);
                return (
                  <li key={link.name}>
                    <a
                      ref={i === 0 ? firstLinkRef : null}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      aria-current={isActive ? "true" : undefined}
                      style={{ transitionDelay: linkDelay(i) }}
                      className={`group flex items-center gap-4 rounded-2xl px-2 py-3 transition-[transform,opacity] duration-500 ease-out ${RING} ${
                        open
                          ? "translate-y-0 opacity-100"
                          : "translate-y-6 opacity-0"
                      }`}
                    >
                      <span className="w-7 shrink-0 text-xs font-semibold tabular-nums text-accent-strong">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`font-display text-3xl font-extrabold tracking-tight transition-colors duration-200 ${
                          isActive
                            ? "text-accent-strong"
                            : "text-ink/70 group-hover:text-ink"
                        }`}
                      >
                        {link.name}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div
            style={{ transitionDelay: linkDelay(navLinks.length) }}
            className={`pt-6 transition-[transform,opacity] duration-500 ease-out ${
              open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="btn btn-accent h-[52px] w-full text-base shadow-[0_14px_28px_-16px_rgba(22,51,0,0.45)]"
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
      </div>
    </>
  );
}