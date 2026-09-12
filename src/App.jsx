import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

export default function App() {
  // Reveal elements as they enter the viewport. Uses a MutationObserver so any
  // dynamically added/removed elements (e.g. tab switches in Projects) are also
  // revealed — otherwise they would stay hidden. Respects reduced motion via CSS.
  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      document
        .querySelectorAll("[data-reveal]")
        .forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const reveal = () => {
      document
        .querySelectorAll("[data-reveal]:not(.is-visible)")
        .forEach((el) => {
          if (el.__revealIO) return;
          const io = new IntersectionObserver(
            ([entry]) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                io.disconnect();
              }
            },
            { threshold: 0.12, rootMargin: "0px 0px -30px 0px" },
          );
          el.__revealIO = io;
          io.observe(el);
        });
    };

    reveal();
    const mo = new MutationObserver(reveal);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => mo.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-mist text-ink overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
