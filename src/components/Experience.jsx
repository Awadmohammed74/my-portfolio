import { Briefcase, Rocket, Sprout, CheckCircle } from "lucide-react";
import { soundManager } from "../utils/sound";

const experiences = [
  {
    role: "Freelance WordPress Architect & Developer",
    company: "Self-Employed (Remote Contract Basis)",
    period: "04/2023 - Present",
    desc: "Designed and engineered 20+ custom high-performance corporate sites, digital files marketplace, and WooCommerce portals. Engineered backend databases and server virtualization architectures.",
    achievements: [
      "Crafted bespoke WordPress themes and plugins employing robust PHP OOP namespaces",
      "Achieved 90+ Lighthouse Core Web Vitals performance benchmarks",
      "Integrated secure financial transaction workflows (Stripe, Paymob, Tabby installments)",
      "Automated server virtualization setups (VPS cloud instances) with Bash shell CLI scripts",
    ],
    color: "border-accent-primary",
    dotColor: "bg-accent-primary",
    icon: Briefcase,
  },
  {
    role: "WordPress Core Engineer",
    company: "Khaleej Tech (United Arab Emirates / Remote)",
    period: "06/2023 - 02/2025",
    desc: "Refactored checkout pipelines and pricing tables for digital marketplaces. Designed and built advanced admin dashboards using Custom Post Types (CPT) and ACF Pro structures.",
    achievements: [
      "Halved average page layout loading speeds from 4s to under 1.8s",
      "Created customized vendor registration workflows and commissions payout hooks",
      "Managed REST API endpoints for secure third-party corporate software syncing",
      "Maintained localized English/Arabic translations with Polylang database structures",
    ],
    color: "border-accent-secondary",
    dotColor: "bg-accent-secondary",
    icon: Rocket,
  },
  {
    role: "WordPress & Frontend Specialist",
    company: "Dev2Go (Egypt / Hybrid)",
    period: "05/2025 - 01/2026",
    desc: "Integrated headless CMS endpoints and automated deployment processes. Handled server configuration optimization, cache policies, and responsive layouts.",
    achievements: [
      "Engineered automated LiteSpeed and Redis database caching scripts to peak CPU capabilities",
      "Redesigned UI layouts to achieve perfect responsiveness on ultra-wide screens and mobiles",
      "Refactored custom fields data structures, reducing API retrieval latency by 30%",
      "Maintained technical documentation logs detailing theme plugin configurations",
    ],
    color: "border-pink-500",
    dotColor: "bg-pink-500",
    icon: Sprout,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-32 px-6">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-primary/25 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div
            onMouseEnter={() => soundManager.playTick()}
            className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 text-sm text-accent-primary mb-4 border border-accent-primary/15"
          >
            <Briefcase className="w-3.5 h-3.5" />
            Milestones & Career
          </div>
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            Professional{" "}
            <span className="gradient-text font-black">Journey</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto font-medium">
            Professional track records, corporate positions, and remote
            freelance deployments.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full mx-auto mt-4" />
        </div>

        {/* Timeline body */}
        <div className="relative">
          {/* Vertical central path line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent-primary via-accent-secondary to-pink-500 pointer-events-none" />

          {experiences.map((exp, idx) => {
            const IconComponent = exp.icon;
            return (
              <div key={idx} className="relative pl-20 pb-14 last:pb-0 group">
                {/* Timeline Dot with Icon */}
                <div
                  className={`absolute left-4 w-9 h-9 rounded-full ${exp.dotColor} flex items-center justify-center shadow-lg z-10 ring-4 ring-[#0a0a0f] transition-all duration-300 group-hover:scale-110`}
                >
                  <IconComponent className="w-4 h-4 text-white" />
                </div>

                {/* Experience Card */}
                <div
                  className={`glass rounded-2xl p-6 border-l-4 ${exp.color} border border-white/5 hover:border-white/10 transition-all duration-300 group-hover:-translate-y-0.5`}
                >
                  {/* Header Row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-black text-white">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-medium text-accent-primary mt-0.5">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1.5 rounded-full text-[10px] font-bold bg-white/5 text-gray-400 border border-white/5 whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {exp.desc}
                  </p>

                  {/* Achievements */}
                  <ul className="space-y-2.5">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-accent-primary" />
                        <span className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
