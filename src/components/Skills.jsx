import { useState, useEffect, useRef } from "react";
import { Globe, Layout, Terminal, Cloud, Zap, Code2 } from "lucide-react";
import { soundManager } from "../utils/sound";

const skillCategories = [
  {
    id: "wordpress",
    title: "WordPress Core",
    icon: Globe,
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
    icon: Layout,
    skills: [
      { name: "React Framework & Advanced Architecture", level: 90 },
      { name: "Global State (Redux / Context / Hooks)", level: 85 },
      { name: "JavaScript ES6+ Core Logic", level: 90 },
      { name: "Tailwind CSS v4 & Responsive Grid", level: 85 },
      { name: "HTML5 / CSS3 Hardware Effects", level: 95 },
      { name: "Figma UI Prototype Conversion", level: 75 },
    ],
  },
  {
    id: "backend",
    title: "Backend & Systems",
    icon: Terminal,
    skills: [
      { name: "PHP OOP / MVC Abstractions", level: 90 },
      { name: "MySQL Database Relational Schema", level: 85 },
      { name: "REST API Design & Webhooks", level: 88 },
      { name: "Linux Bash CLI & Shell Automation", level: 78 },
    ],
  },
  {
    id: "devops",
    title: "DevOps & Cloud",
    icon: Cloud,
    skills: [
      { name: "VPS Cloud Infrastructure (Hetzner)", level: 82 },
      { name: "LiteSpeed Enterprise Web Server", level: 80 },
      { name: "Workflow Automation (Zapier / Make)", level: 85 },
      { name: "Git Version Control / GitHub workflows", level: 80 },
    ],
  },
  {
    id: "seo",
    title: "Performance & SEO",
    icon: Zap,
    skills: [
      { name: "Google Lighthouse Speed Indexing", level: 92 },
      { name: "Core Web Vitals Optimization", level: 88 },
      { name: "Caching Engine (LiteSpeed Cache / Redis)", level: 82 },
      { name: "Google Search Console & Schema JSON", level: 80 },
    ],
  },
];

function SkillBar({ name, level, index, startAnimation }) {
  return (
    <div className="group">
      <div className="flex items-center justify-between mb-1.5 text-xs">
        <span className="text-gray-300 group-hover:text-white font-semibold transition-colors duration-200">
          {name}
        </span>
        <span className="text-gray-500 font-mono font-semibold">{level}%</span>
      </div>
      <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden border border-white/5">
        <div
          className="h-full rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary transition-all duration-[1200ms] ease-out group-hover:from-accent-secondary group-hover:to-accent-primary"
          style={{
            width: startAnimation ? `${level}%` : "0%",
            transitionDelay: `${index * 0.05}s`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [animateBars, setAnimateBars] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateBars(true);
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const filteredCategories =
    activeFilter === "all"
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeFilter);

  return (
    <section id="skills" className="relative py-32 px-6">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-primary/25 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto" ref={sectionRef}>
        <div className="text-center mb-16 relative">
          <div
            onMouseEnter={() => soundManager.playTick()}
            className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 text-sm text-accent-primary mb-4 border border-accent-primary/10"
          >
            <Code2 className="w-3.5 h-3.5" />
            Engineering Toolkit
          </div>
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            Technical <span className="gradient-text font-black">Stack</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto font-medium">
            Core capabilities across frontend, backend, systems, and performance
            tuning.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full mx-auto mt-4" />
        </div>

        <div className="flex flex-wrap justify-center gap-2.5 mb-12 animate-fade-in">
          {[
            { id: "all", label: "All Systems", icon: Code2 },
            { id: "wordpress", label: "WordPress", icon: Globe },
            { id: "frontend", label: "React Ecosystem", icon: Layout },
            { id: "backend", label: "Backend", icon: Terminal },
            { id: "devops", label: "DevOps", icon: Cloud },
            { id: "seo", label: "SEO", icon: Zap },
          ].map((filter) => (
            <button
              key={filter.id}
              onClick={() => {
                soundManager.playClick();
                setActiveFilter(filter.id);
                setAnimateBars(false);
                setTimeout(() => setAnimateBars(true), 300);
              }}
              onMouseEnter={() => soundManager.playTick()}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold transition-all border cursor-pointer ${
                activeFilter === filter.id
                  ? "bg-accent-primary text-white border-accent-primary shadow-lg shadow-accent-primary/20"
                  : "text-gray-400 hover:text-white border-white/5 glass"
              }`}
            >
              <filter.icon className="w-3 h-3" />
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                onMouseEnter={() => soundManager.playTick()}
                className="glass rounded-2xl p-6 border border-white/5 hover:border-accent-primary/20 transition-all duration-300 group cursor-default"
              >
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-accent-primary/10 flex items-center justify-center group-hover:bg-accent-primary/20 transition-all duration-300">
                    <IconComponent className="w-5 h-5 text-accent-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">
                      {category.title}
                    </div>
                    <div className="text-[10px] text-gray-500 font-semibold tracking-wider">
                      ({category.skills.length} core competencies)
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, idx) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      index={idx}
                      startAnimation={animateBars}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 glass rounded-full px-6 py-3 text-sm text-gray-400 border border-white/5">
            <Zap className="w-4 h-4 text-accent-primary" />
            <span>90% average proficiency across all engineering fields</span>
          </div>
        </div>
      </div>
    </section>
  );
}
