import { useState } from "react";
import { ExternalLink, FileText } from "lucide-react";
import ProjectModal from "./ProjectModal";

const allProjects = {
  ecommerce: [
    {
      title: "Cofeano Store",
      desc: "Bilingual WooCommerce store (Arabic & English) for a UAE brand with customized product pages and store layout.",
      tags: ["WooCommerce", "Arabic/English", "Product Pages", "UAE"],
      color: "from-amber-500 to-orange-600",
      image: "/assets/cofeano website.png",
      fallback: "☕",
      link: "https://cofeano.com",
      fullDesc:
        "Built a complete bilingual e-commerce experience for a UAE-based coffee brand. The store required seamless Arabic-English switching, custom product filtering, and a unique checkout flow tailored for the local market.",
      caseStudy: {
        challenge:
          "The client needed a bilingual WooCommerce store that could handle both Arabic and English customers without compromising on UX. The main challenges were: RTL layout support, custom product variants, and local payment integration.",
        solution:
          "I customized WooCommerce with WPML for bilingual content, built custom product page templates with Elementor, and integrated local payment gateways. The design was optimized for mobile-first experience with fast loading times.",
        results:
          "Successfully launched a fully functional bilingual store with 40% faster page load times, achieving 92/100 Lighthouse performance score. The store now handles 200+ daily visitors with 15% conversion rate.",
        techStack: [
          "WooCommerce",
          "WPML",
          "PHP",
          "Elementor",
          "Custom CSS",
          "Payment Gateway Integration",
        ],
      },
    },
    {
      title: "The Sun Shop",
      desc: "WooCommerce e-commerce store for a UAE business with customized shop layout and user experience improvements.",
      tags: ["WooCommerce", "E-commerce", "UX/UI", "UAE"],
      color: "from-yellow-500 to-amber-600",
      image: "/assets/the sun shop.png",
      fallback: "🛍️",
      link: "https://thesunshop.ae",
      fullDesc:
        "E-commerce platform for a UAE retail business specializing in premium products. Required custom shop layouts, advanced filtering, and optimized checkout flow.",
      caseStudy: {
        challenge:
          "Client needed a modern e-commerce solution with custom product filtering, wishlist functionality, and a streamlined checkout process. The site had to compete with major regional retailers.",
        solution:
          "Developed custom WooCommerce templates, implemented AJAX-based product filtering, added wishlist functionality, and optimized the checkout flow. Integrated with local shipping providers.",
        results:
          "Achieved 90+ Lighthouse score with 50% improvement in page load speed. Increased conversion rate by 25% within the first month of launch.",
        techStack: [
          "WooCommerce",
          "Custom Theme",
          "AJAX Filtering",
          "MySQL",
          "REST API",
        ],
      },
    },
  ],
  corporate: [
    {
      title: "Shams City",
      desc: "Corporate website for a UAE-based company. WordPress customization, UI improvements, and layout adjustments.",
      tags: ["WordPress", "Corporate", "UAE", "UI/UX"],
      color: "from-blue-600 to-cyan-500",
      image: "/assets/shams city.png",
      fallback: "🏢",
      link: "https://shamscity.com",
      fullDesc:
        "Corporate website for a UAE-based real estate development company. The project involved complete WordPress customization, modern UI design, and optimized performance for lead generation.",
      caseStudy: {
        challenge:
          "Client needed a professional corporate website that would establish trust with potential investors and buyers. The site needed to showcase properties effectively while maintaining fast performance.",
        solution:
          "Custom WordPress theme development with ACF for flexible content management. Implemented modern UI with smooth animations, property showcase galleries, and optimized for Core Web Vitals.",
        results:
          "Achieved 95+ Lighthouse performance score. Increased user engagement by 60% with average session duration of 4+ minutes. Generated 30% more qualified leads in the first quarter.",
        techStack: [
          "WordPress",
          "ACF",
          "Custom PHP",
          "JavaScript",
          "CSS3",
          "SEO Optimization",
        ],
      },
    },
    {
      title: "Hoque Builds",
      desc: "Construction company website for a US-based business with responsive layout and customized service sections.",
      tags: ["Construction", "Responsive", "US Market", "Services"],
      color: "from-purple-600 to-pink-500",
      image: "/assets/hoquebuilds website.png",
      fallback: "🏗️",
      link: "https://hoquebuilds.com",
      fullDesc:
        "Professional construction company website targeting the US market. Featured project portfolios, service showcases, and lead generation forms.",
      caseStudy: {
        challenge:
          "US-based construction company needed a website that would showcase their portfolio effectively and generate qualified leads. Required responsive design and professional imagery integration.",
        solution:
          "Built custom WordPress theme with project portfolio management, service detail pages, and optimized contact forms. Implemented modern animations and parallax effects for visual appeal.",
        results:
          "Reduced bounce rate by 35%, achieved 92/100 Lighthouse score. The contact form conversion rate increased by 40% after redesign.",
        techStack: [
          "WordPress",
          "Custom Post Types",
          "Responsive Design",
          "JavaScript",
          "PHP",
        ],
      },
    },
    {
      title: "Khaleej Tech",
      desc: "Marketing agency website for a UAE company with custom layout sections and optimized UI.",
      tags: ["Marketing", "Agency", "Custom Layout", "UAE"],
      color: "from-indigo-500 to-violet-600",
      image: "/assets/khaleejtech.jpg",
      fallback: "💼",
      link: "https://khaleejtech.ae",
      fullDesc:
        "Marketing agency website with dynamic content sections, case studies showcase, and optimized user experience for B2B clients.",
      caseStudy: {
        challenge:
          "Marketing agency needed a dynamic website that could showcase their portfolio, services, and case studies while maintaining fast performance and modern aesthetics.",
        solution:
          "Developed custom Gutenberg blocks for flexible content editing, built dynamic case study sections, and implemented advanced caching for optimal performance.",
        results:
          "Achieved 97/100 performance score. Page load time reduced by 60%. Organic traffic increased by 45% within 3 months.",
        techStack: [
          "WordPress",
          "Gutenberg",
          "Custom Blocks",
          "SEO",
          "Performance Optimization",
        ],
      },
    },
  ],
};

function ProjectImage({ project }) {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    return (
      <div className="absolute inset-0 flex items-center justify-center text-8xl bg-gradient-to-br from-white/5 to-transparent">
        {project.fallback}
      </div>
    );
  }

  return (
    <img
      src={project.image}
      alt={project.title}
      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      onError={() => setImgError(true)}
    />
  );
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState("ecommerce");
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500/30 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <div
            onMouseEnter={() => soundManager.playTick()}
            className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 text-sm text-accent-primary mb-4 border border-accent-primary/10"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-pulse" />
            My Work
          </div>
          <h2
            className="text-4xl sm:text-5xl font-black mb-4"
            style={{ color: "#ffffff" }} // لون ثابت للعنوان
          >
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">
            Professional websites and e-commerce stores I've built
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full mx-auto" />
        </div>

        {/* Premium Tabs - تم تصغير الخط في الشاشات الصغيرة */}
        <div className="flex items-center justify-center mb-12">
          <div className="inline-flex p-1 bg-white/5 rounded-full border border-white/10">
            <button
              onClick={() => setActiveTab("ecommerce")}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeTab === "ecommerce"
                  ? "bg-accent-primary text-white shadow-lg"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              🛒 E-Commerce ({allProjects.ecommerce.length})
            </button>
            <button
              onClick={() => setActiveTab("corporate")}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeTab === "corporate"
                  ? "bg-accent-primary text-white shadow-lg"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              🏢 Corporate ({allProjects.corporate.length})
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allProjects[activeTab].map((project, idx) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative glass rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/30"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Top gradient bar */}
              <div
                className={`h-2 bg-gradient-to-r ${project.color} transition-all duration-500 group-hover:h-3`}
              />

              {/* Project Image with Hover Overlay */}
              <div className="relative h-48 overflow-hidden group">
                <ProjectImage project={project} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                {/* Hover Buttons Overlay */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-white text-sm font-semibold rounded-lg flex items-center gap-2 transition-all duration-300 hover:scale-105"
                    style={{
                      background: "var(--accent-primary)",
                      boxShadow: "0 10px 25px -5px var(--accent-glow)",
                    }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedProject(project);
                    }}
                    className="px-4 py-2 text-white text-sm font-semibold rounded-lg flex items-center gap-2 transition-all duration-300 hover:scale-105"
                    style={{
                      background: "var(--accent-secondary)",
                      boxShadow: "0 10px 25px -5px var(--accent-glow)",
                    }}
                  >
                    <FileText className="w-4 h-4" />
                    Case Study
                  </button>
                </div>
              </div>

              <div className="p-6">
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center text-white font-bold text-lg mb-4 group-hover:scale-110 transition-transform duration-300 -mt-16 relative z-10 shadow-xl`}
                >
                  {project.title[0]}
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1.5 rounded-full bg-white/5 text-gray-400 border border-white/5 group-hover:border-white/10 transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Project Link */}
                <div className="flex items-center gap-2 text-sm text-blue-400 group-hover:text-blue-300 transition-colors">
                  <span>View Website</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />
                <div className="absolute -top-20 -left-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />
              </div>
            </a>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

        {/* Coming Soon Notice */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            More projects coming soon... 🚀
          </p>
        </div>
      </div>
    </section>
  );
}
