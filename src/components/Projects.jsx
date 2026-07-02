import { useState } from "react";
import {
  ExternalLink,
  FileText,
  Globe,
  ShoppingCart,
  Code,
} from "lucide-react";
import ProjectModal from "./ProjectModal";

function Github({ className, ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

const allProjects = {
  wordpress: [
    {
      title: "MIVANO Interior",
      desc: "Luxury interior design & finishing company website in UAE. Full custom WordPress development from Figma to WordPress with bilingual support (Arabic/English).",
      tags: [
        "WordPress",
        "Elementor Pro",
        "Arabic/English",
        "Interior Design",
        "UAE",
      ],
      color: "from-amber-500 to-orange-600",
      image: "/assets/mivanointerior.jpg",
      fallback: "🏛️",
      link: "https://mivanointerior.com",
      category: "corporate",
      fullDesc:
        "Designed and developed a luxury corporate website for MIVANO, an interior design and finishing company in the UAE. The project involved a complete Figma-to-WordPress conversion with full customization, bilingual support (Arabic/English RTL/LTR), and a premium user experience showcasing the company's high-end design services.",
      caseStudy: {
        challenge:
          "The client needed a luxury digital presence that reflects their high-end interior design brand in the UAE market. Key challenges included: pixel-perfect Figma conversion, seamless Arabic/English bilingual experience with RTL/LTR support, interactive service pages, and a lead generation system for consultation requests.",
        solution:
          "Built a fully custom WordPress site using Elementor Pro with pixel-perfect Figma conversion. Implemented full bilingual support with RTL/LTR direction switching, dynamic service pages for each design category, interactive project galleries with modern animations, and integrated professional contact forms with strategic CTAs for lead generation.",
        results:
          "Delivered a luxury, fast, and secure bilingual digital platform that effectively represents MIVANO's brand in the UAE market. The site showcases services professionally with smooth animations and sliders, achieving high engagement rates and increased consultation requests through optimized lead generation forms.",
        techStack: [
          "WordPress",
          "Elementor Pro",
          "JavaScript",
          "Figma to WordPress",
          "SEO",
          "RTL/LTR",
        ],
      },
    },
    {
      title: "Speed Solutions",
      desc: "Financial consulting & company formation services website in UAE. Full custom WordPress development with dynamic cost calculator and automation.",
      tags: [
        "WordPress",
        "Elementor",
        "Financial Consulting",
        "UAE",
        "RTL/LTR",
      ],
      color: "from-blue-600 to-cyan-500",
      image: "/assets/speed-solution.png",
      fallback: "📊",
      link: "https://speedsolution.ae",
      category: "corporate",
      fullDesc:
        "Designed and developed the official website for Speed Solutions, a UAE-based company specializing in business formation, financial auditing, and tax solutions. The project involved a complete Figma-to-WordPress conversion with full customization, bilingual support, and optimized user experience for investors and entrepreneurs.",
      caseStudy: {
        challenge:
          "The client needed a professional digital platform targeting investors and entrepreneurs in the UAE market. Main challenges included: converting a complex Figma design with multiple service pages, building a bilingual site with perfect RTL/LTR compatibility, and creating an effective lead generation system for consultation requests.",
        solution:
          "Developed using WordPress + Elementor Pro with full customization. Created dedicated service pages for each offering (company formation, corporate tax, VAT, e-invoicing, bookkeeping, auditing), integrated a 'Request Free Consultation' system for lead generation, and added smooth JavaScript animations and sliders without compromising performance.",
        results:
          "Delivered a premium, fast, and secure bilingual website that clearly showcases Speed Solutions' services. The site effectively builds trust with entrepreneurs through client testimonials and social proof elements, resulting in increased conversion rates and consultation requests.",
        techStack: [
          "WordPress",
          "Elementor Pro",
          "JavaScript",
          "Figma to WordPress",
          "SEO",
          "Performance Optimization",
        ],
      },
    },
    {
      title: "Shams City",
      desc: "Company formation & visa services website in UAE. Full custom WordPress with interactive cost calculator and automated lead generation via Make.",
      tags: ["WordPress", "Elementor", "Business Setup", "UAE", "Automation"],
      color: "from-blue-600 to-cyan-500",
      image: "/assets/shams city.png",
      fallback: "🏢",
      link: "https://shamscity.com",
      category: "corporate",
      fullDesc:
        "Official website for Shams City, a UAE-based company formation and visa services provider. Built with full custom WordPress development featuring a dynamic cost calculator that automates lead generation through Make integration.",
      caseStudy: {
        challenge:
          "Client needed a professional corporate website with an interactive cost estimation tool for business setup services. The main challenges were: creating a dynamic calculator that provides accurate cost estimates, automation of the lead collection process, and maintaining high performance with complex interactive elements.",
        solution:
          "Developed a fully custom WordPress site with Elementor Pro. Engineered a dynamic cost calculator using Custom CSS & JS that lets clients estimate formation costs in simple steps. Connected the calculator to Make (formerly Integromat) for full automation — sending detailed cost breakdowns via email and logging data to Google Sheets for the sales team.",
        results:
          "Delivered a fast, secure, and interactive corporate website with a fully automated lead generation system. The cost calculator significantly improves user engagement and conversion rates, while the automation pipeline streamlines the sales process and data management.",
        techStack: [
          "WordPress",
          "Elementor Pro",
          "Custom JavaScript",
          "Make Automation",
          "Google Sheets",
          "SEO",
        ],
      },
    },
    {
      title: "Khaleej Tech",
      desc: "Digital marketing agency website in UAE. Full custom WordPress development with dynamic portfolio showcase and interactive service tabs.",
      tags: ["WordPress", "Elementor", "Digital Marketing", "UAE", "Portfolio"],
      color: "from-indigo-500 to-violet-600",
      image: "/assets/khaleejtech.jpg",
      fallback: "💼",
      link: "https://khaleejtech.ae",
      category: "corporate",
      fullDesc:
        "Official website for Khaleej Tech, a UAE-based digital marketing and technology services company. Built with full custom WordPress development featuring a dynamic portfolio section, interactive service tabs, and modern animations.",
      caseStudy: {
        challenge:
          "The client needed a modern digital agency website that showcases their portfolio, services, and expertise in the competitive UAE digital market. Key challenges included: creating dynamic service presentation sections, building an interactive portfolio showcase, and ensuring the site reflects the agency's own digital capabilities.",
        solution:
          "Developed using WordPress + Elementor with full customization. Created dynamic Tab sections for presenting services interactively, built a professional Portfolio section showcasing client work, added custom JavaScript for smooth animations and sliders, and optimized for SEO and performance.",
        results:
          "Delivered a professional, fast, and secure digital agency website that effectively showcases Khaleej Tech's capabilities. The dynamic portfolio and interactive service tabs provide an engaging user experience that builds trust with potential clients and demonstrates the company's technical expertise.",
        techStack: [
          "WordPress",
          "Elementor",
          "Custom JavaScript",
          "SEO",
          "Performance Optimization",
        ],
      },
    },
    {
      title: "Pyramids Zone",
      desc: "Legal consulting & company formation landing page in Egypt. Full custom WordPress with interactive cost calculator and email automation.",
      tags: ["WordPress", "Landing Page", "Legal", "Egypt", "Automation"],
      color: "from-purple-600 to-pink-500",
      image: "/assets/pyramids-zone.png",
      fallback: "⚖️",
      link: "https://pyramidszone.com",
      category: "corporate",
      fullDesc:
        "Designed and developed a high-converting landing page for Pyramids Zone, an accredited company formation and investor residency services provider in Egypt. The project features a custom interactive cost calculator with full email automation for lead generation.",
      caseStudy: {
        challenge:
          "Client needed a professional landing page with an interactive cost estimation tool for company formation services in Egypt. Main challenges were: converting a complex Figma design with multiple interactive elements, building a dynamic calculator supporting EGP and USD currencies, and automating the lead follow-up process.",
        solution:
          "Built a fully custom WordPress landing page using Elementor Pro. Developed a dynamic cost calculator using Custom CSS & JS that lets clients estimate formation costs instantly in both EGP and USD. Connected the calculator to SMTP email automation for automatic lead data collection and cost breakdown delivery to prospects.",
        results:
          "Delivered a high-converting, fast, and interactive landing page with a fully automated lead generation system. The cost calculator significantly increases visitor engagement and conversion rates, while the email automation pipeline enables the sales team to follow up with qualified leads instantly.",
        techStack: [
          "WordPress",
          "Elementor Pro",
          "Custom JavaScript",
          "SMTP Automation",
          "Figma to WordPress",
          "SEO",
        ],
      },
    },
    {
      title: "Tmayoz Store",
      desc: "High-converting WooCommerce e-commerce store in Egypt with full custom development. Features urgency engine, smart cross-selling, and WhatsApp instant checkout.",
      tags: ["WooCommerce", "E-commerce", "Egypt", "Full Custom", "Automation"],
      color: "from-green-600 to-emerald-500",
      image: "/assets/tmayoz.png",
      fallback: "🛒",
      link: "https://tmayoz.com",
      category: "ecommerce",
      fullDesc:
        "Designed and developed a professional WooCommerce e-commerce store for 'Tmayoz' in Egypt with full custom development. Features include a golden countdown urgency engine, smart cross-selling system, geolocation address fill, dynamic tax incentives, and WhatsApp instant checkout loop — all built with custom PHP/JS.",
      caseStudy: {
        challenge:
          "Client needed a high-converting e-commerce store in the Egyptian market with advanced features to reduce cart abandonment and increase conversion rates. Main challenges included: building a custom urgency system, creating smart cross-selling that respects cart contents, automating checkout processes, and implementing dynamic tax calculations.",
        solution:
          "Built a fully custom WooCommerce store using WoodMart + Elementor with custom PHP/JS snippets and hooks. Implemented: a floating golden countdown timer on product cards (urgency engine), smart cross-selling widget with auto-exclusion of cart items, HTML5 geolocation for auto-filling shipping addresses, dynamic tax adjustment system using MutationObserver API, and WhatsApp instant checkout integration on the thank-you page.",
        results:
          "Delivered a highly automated, conversion-optimized e-commerce store in the Egyptian market. The urgency engine and smart cross-selling features significantly reduce cart abandonment. The geolocation and WhatsApp checkout minimize friction in the buying process, while the dynamic tax system provides real-time savings visibility to customers.",
        techStack: [
          "WooCommerce",
          "WoodMart",
          "Elementor",
          "Custom PHP",
          "Custom JavaScript",
          "WhatsApp API",
          "Geolocation API",
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
      category: "ecommerce",
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
    {
      title: "Cofeano Store",
      desc: "Bilingual WooCommerce store (Arabic & English) for a UAE brand with customized product pages and store layout.",
      tags: ["WooCommerce", "Arabic/English", "Product Pages", "UAE"],
      color: "from-amber-500 to-orange-600",
      image: "/assets/cofeano website.png",
      fallback: "☕",
      link: "https://cofeano.com",
      category: "ecommerce",
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
  ],
  react: [
    {
      title: "Awad Mohammed Portfolio",
      desc: "My personal portfolio built with React 19 + Tailwind CSS v4. Features interactive backgrounds, theme switcher, case studies, and a command palette.",
      tags: ["React", "Tailwind CSS", "Vite", "Lucide", "Netlify"],
      color: "from-blue-600 to-cyan-400",
      image: "/assets/my-portfolio.png",
      fallback: "⚛️",
      link: "https://awad-portfolio-umber.vercel.app/",
      github: "https://github.com/Awadmohammed74/my-portfolio",
      category: "react",
      fullDesc:
        "A premium interactive portfolio website showcasing my work as a WordPress & React developer. Built from scratch using React 19, Tailwind CSS v4, and Vite 6 for blazing-fast performance.",
      caseStudy: {
        challenge:
          "Needed a modern portfolio that reflects my technical skills in both WordPress/PHP backend and modern React frontend development. The site had to be visually stunning, performant, and show real case studies with live project links.",
        solution:
          "Architected a single-page React app with interactive canvas background, 4 dynamic themes (Neon Blue, Cyberpunk, Emerald Grid, Electric Gold), custom cursor with spring animation, Command Palette (Ctrl+K), and detailed project case studies with images and hover overlays.",
        results:
          "Built a 90+ Lighthouse scoring portfolio with zero external backend. Features interactive particle canvas, 8 project case studies with real screenshots, and a premium glass-morphism design system that dynamically inherits theme colors via CSS variables.",
        techStack: [
          "React 19",
          "Tailwind CSS v4",
          "Vite 6",
          "Lucide React",
          "CSS Variables",
          "Canvas API",
          "Netlify",
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
  const [activeTab, setActiveTab] = useState("wordpress");
  const [subFilter, setSubFilter] = useState("corporate");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = allProjects[activeTab].filter((p) => {
    if (activeTab === "react") return true;
    return p.category === p.category; // الحفاظ على الشرط الأصلي
  }).filter((p) => {
    if (activeTab === "react") return true;
    return p.category === subFilter;
  });

  const wordpressCounts = {
    corporate: allProjects.wordpress.filter((p) => p.category === "corporate")
      .length,
    ecommerce: allProjects.wordpress.filter((p) => p.category === "ecommerce")
      .length,
  };

  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500/30 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 text-sm text-accent-primary mb-4 border border-accent-primary/10">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-pulse" />
            My Projects
          </div>
          <h2
            className="text-4xl sm:text-5xl font-black mb-4"
            style={{ color: "#ffffff" }}
          >
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">
            Professional websites and e-commerce stores I've built
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full mx-auto" />
        </div>

        {/* Main Tabs */}
        <div className="flex items-center justify-center mb-8">
          <div className="inline-flex p-1 bg-white/5 rounded-full border border-white/10">
            <button
              onClick={() => {
                setActiveTab("wordpress");
                setSubFilter("corporate");
              }}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${activeTab === "wordpress" ? "bg-accent-primary text-white shadow-lg" : "text-gray-400 hover:text-white"}`}
            >
              <Globe className="w-4 h-4" />
              <span>WordPress ({allProjects.wordpress.length})</span>
            </button>
            <button
              onClick={() => {
                setActiveTab("react");
                setSubFilter("corporate");
              }}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${activeTab === "react" ? "bg-accent-primary text-white shadow-lg" : "text-gray-400 hover:text-white"}`}
            >
              <Code className="w-4 h-4" />
              <span>React ({allProjects.react.length})</span>
            </button>
          </div>
        </div>

        {/* Sub Filter */}
        {activeTab === "wordpress" && (
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12">
            {[
              {
                id: "corporate",
                label: "Corporate Sites",
                count: wordpressCounts.corporate,
                icon: ExternalLink,
              },
              {
                id: "ecommerce",
                label: "E-Commerce Stores",
                count: wordpressCounts.ecommerce,
                icon: ShoppingCart,
              },
            ].map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSubFilter(filter.id)}
                className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 backdrop-blur-md cursor-pointer ${subFilter === filter.id ? "text-white border border-accent-primary/60 bg-white/15 shadow-md shadow-accent-primary/5" : "text-gray-300 hover:text-white bg-white/[0.04] border border-white/10"}`}
              >
                <filter.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent-primary" />
                <span>{filter.label}</span>
                <span className="text-[10px] sm:text-xs bg-white/10 px-1.5 py-0.5 rounded-md font-normal opacity-80">
                  {filter.count}
                </span>
              </button>
            ))}
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.title}
              className="group relative glass rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-accent-primary/30 cursor-pointer"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div
                className={`h-2 bg-gradient-to-r ${project.color} transition-all duration-500 group-hover:h-3`}
              />

              {/* Image with Overlay Buttons */}
              <div className="relative h-48 overflow-hidden">
                <ProjectImage project={project} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/95 via-[#0a0a0f]/75 to-transparent transition-all duration-300" />

                {/* الحاوية الأساسية المحسنة - ثابتة وظاهرة دائماً من غير هوفر */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2.5 p-4 transition-all duration-300">

                  {/* الأزرار ترتب رأسيًا في الموبايل بعرض أصغر (145px) ومتباعدة بـ gap-2، وفي الديسكتب طبيعية */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-2 w-full max-w-[145px] sm:max-w-none">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        window.open(project.link, "_blank");
                      }}
                      className="px-4 py-2.5 text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-2 transition-all duration-300 active:scale-95 sm:hover:scale-105 backdrop-blur-md cursor-pointer w-full sm:w-auto sm:min-w-[110px]"
                      style={{
                        background: "var(--accent-primary)",
                        boxShadow: "0 4px 12px -2px var(--accent-glow)",
                      }}
                    >
                      <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                      <span className="whitespace-nowrap">Live Demo</span>
                    </button>

                    {project.github && (
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          window.open(project.github, "_blank");
                        }}
                        className="px-4 py-2.5 text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-2 transition-all duration-300 active:scale-95 sm:hover:scale-105 backdrop-blur-md cursor-pointer w-full sm:w-auto sm:min-w-[100px]"
                        style={{
                          background: "rgba(31, 41, 55, 0.8)",
                          border: "1px solid rgba(255, 255, 255, 0.15)",
                          boxShadow: "0 4px 12px -2px rgba(0, 0, 0, 0.5)",
                        }}
                      >
                        <Github className="w-3.5 h-3.5 shrink-0" />
                        <span className="whitespace-nowrap">GitHub</span>
                      </button>
                    )}
                  </div>

                  {/* زر الـ Case Study ملموم ومحدد على الموبايل بـ max-w-[145px] */}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                    className="px-4 py-2.5 text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-2 transition-all duration-300 active:scale-95 sm:hover:scale-105 backdrop-blur-md cursor-pointer w-full max-w-[145px] sm:w-auto sm:min-w-[115px]"
                    style={{
                      background: "var(--accent-secondary)",
                      boxShadow: "0 4px 12px -2px var(--accent-glow)",
                    }}
                  >
                    <FileText className="w-3.5 h-3.5 shrink-0" />
                    <span className="whitespace-nowrap">Case Study</span>
                  </button>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-4 sm:p-6">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center text-white font-bold text-lg mb-4 group-hover:scale-110 transition-transform duration-300 -mt-16 relative z-10 shadow-xl`}
                >
                  {project.title[0]}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-accent-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] sm:text-xs px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white/5 text-gray-400 border border-white/5 group-hover:border-white/10 transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* الحاوية السفلية - Space Between كامل */}
                <div className="flex items-center justify-between w-full mt-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.link, "_blank");
                    }}
                    className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-accent-primary group-hover:text-accent-secondary transition-colors cursor-pointer"
                  >
                    <span>View Website</span>
                    <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  {project.github && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.github, "_blank");
                      }}
                      className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-400 hover:text-white transition-colors cursor-pointer"
                    >
                      <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      <span>GitHub</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-accent-primary/10 rounded-full blur-3xl" />
                <div className="absolute -top-20 -left-20 w-40 h-40 bg-accent-secondary/10 rounded-full blur-3xl" />
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
}