import { useEffect, useState } from "react";
import { ArrowUpRight, BookOpenText, X } from "lucide-react";

const allProjects = {
  wordpress: [
    {
      title: "Sign Beauty",
      desc: "Luxury bilingual (Arabic/English) beauty & personal care e-commerce store in UAE. Built with WooCommerce, Elementor Pro, and custom HTML/CSS/JS sections.",
      tags: [
        "WooCommerce",
        "Elementor Pro",
        "Bilingual",
        "E-commerce",
        "UAE",
        "Custom Sections",
      ],
      image: "/assets/signbeauty.png",
      link: "https://signbeauty.ae",
      category: "ecommerce",
      fullDesc:
        "Official bilingual (Arabic & English) e-commerce store for Sign Beauty, a UAE-based personal care and beauty trading company. The homepage features fully custom-coded HTML/CSS/JS sections (such as interactive feature grids) integrated via Elementor Pro, combined with a high-performance WooCommerce architecture reflecting luxury brand identity (#123325 and #D4AF37).",
      caseStudy: {
        challenge:
          "The client needed a luxurious and fast bilingual e-commerce platform in the UAE market that reflects their high-end natural beauty products. Key challenges included: implementing seamless Arabic/English language switching, designing bespoke custom sections on the homepage to match elite visual standards, ensuring seamless mobile responsiveness, and creating a smooth shopping experience for luxury skincare, hair care, and wellness items.",
        solution:
          "Developed a fully optimized bilingual WooCommerce store using Elementor Pro paired with bespoke HTML, CSS, and JavaScript code blocks for the homepage features section. Applied a sophisticated color palette (Dark Green #123325 and Gold #D4AF37), organized clear categories ranging from Dead Sea products to organic hair care, and structured the inner pages with Gutenberg blocks for optimal speed and SEO performance.",
        results:
          "Delivered an exquisite, high-speed, and secure bilingual e-commerce platform tailored for the UAE market. The custom sections and smooth language switching provide a unique brand presentation that significantly enhances user engagement and trust.",
        techStack: [
          "WordPress",
          "WooCommerce",
          "Elementor Pro",
          "Bilingual (AR/EN)",
          "Custom HTML/CSS/JS",
          "Gutenberg",
          "SEO Optimization",
        ],
      },
    },
    {
      title: "Khaleej Tech",
      desc: "Digital marketing agency website in UAE. Custom Gutenberg development with dynamic portfolio showcase and interactive service blocks.",
      tags: ["WordPress", "Gutenberg", "Digital Marketing", "UAE", "Portfolio"],
      image: "/assets/khaleejtech.jpg",
      link: "https://khaleejtech.ae",
      category: "corporate",
      fullDesc:
        "Official website for Khaleej Tech, a UAE-based digital marketing and technology services company. Built with custom Gutenberg blocks and custom HTML/CSS/JS sections featuring a dynamic portfolio section, interactive service tabs, and modern animations.",
      caseStudy: {
        challenge:
          "The client needed a modern digital agency website that showcases their portfolio, services, and expertise in the competitive UAE digital market. Key challenges included: creating dynamic service presentation sections, building an interactive portfolio showcase, and ensuring the site reflects the agency's own digital capabilities.",
        solution:
          "Developed using WordPress with custom Gutenberg blocks and tailored HTML/CSS/JS code sections instead of page builders for optimal performance. Created dynamic tab sections for presenting services interactively, built a professional portfolio section showcasing client work, added custom JavaScript for smooth animations and sliders, and optimized for SEO and speed.",
        results:
          "Delivered a lightweight, ultra-fast, and secure digital agency website that effectively showcases Khaleej Tech's capabilities. The clean custom codebase provides an engaging user experience that builds trust with potential clients and demonstrates the company's technical expertise.",
        techStack: [
          "WordPress",
          "Gutenberg",
          "Custom HTML/CSS",
          "Custom JavaScript",
          "SEO",
          "Performance Optimization",
        ],
      },
    },
    {
      title: "MIVANO Interior",
      desc: "Luxury interior design & finishing company website in UAE. Full custom WordPress development from Figma with bilingual support (Arabic/English).",
      tags: [
        "WordPress",
        "Elementor Pro",
        "Arabic/English",
        "Interior Design",
        "UAE",
      ],
      image: "/assets/mivanointerior.jpg",
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
      desc: "Financial consulting & company formation services website in UAE. Full custom WordPress with bilingual support and interactive lead generation.",
      tags: [
        "WordPress",
        "Elementor Pro",
        "Financial Consulting",
        "UAE",
        "RTL/LTR",
      ],
      image: "/assets/speed-solution.png",
      link: "https://speedsolution.ae",
      category: "corporate",
      fullDesc:
        "Designed and developed the official website for Speed Solutions, a UAE-based company specializing in business formation, financial auditing, and tax solutions. The project involved a complete Figma-to-WordPress conversion with full customization, bilingual support, and optimized user experience.",
      caseStudy: {
        challenge:
          "The client needed a professional digital platform targeting investors and entrepreneurs in the UAE market with a seamless bilingual user experience. Key challenges included: converting a complex Figma design with multiple service pages, building a bilingual site with perfect RTL/LTR compatibility, and creating an effective lead generation system.",
        solution:
          "Built a fully custom WordPress site using Elementor Pro with pixel-perfect Figma conversion. Implemented full bilingual support (Arabic/English) with RTL/LTR compatibility, created dedicated service pages for each corporate offering, integrated advanced lead generation forms, and added custom JavaScript for smooth animations and sliders.",
        results:
          "Delivered a premium, fast, and secure bilingual website that clearly showcases Speed Solutions' services in the UAE market. The site effectively builds trust with entrepreneurs, resulting in increased conversion rates and consultation requests.",
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
      image: "/assets/shams city.png",
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
      title: "Pyramids Zone",
      desc: "Legal consulting & company formation landing page in Egypt. Full custom WordPress with interactive cost calculator and email automation.",
      tags: ["WordPress", "Landing Page", "Legal", "Egypt", "Automation"],
      image: "/assets/pyramids-zone.png",
      link: "https://pyramidszone.com",
      category: "corporate",
      fullDesc:
        "Designed and developed a high-converting landing page for Pyramids Zone, an accredited company formation and investor residency services provider in Egypt. The project features a custom interactive cost calculator with full email automation for lead generation.",
      caseStudy: {
        challenge:
          "Client needed a professional landing page with an interactive cost estimation tool for company formation services in Egypt. Main challenges were: converting a complex Figma design with multiple interactive elements, building a dynamic calculator supporting EGP and USD currencies, and automating the lead follow-up process.",
        solution:
          "Built a fully custom WordPress landing page using Elementor Pro. Developed a dynamic cost calculator using Custom CSS & JS that lets clients estimate formation costs instantly in both EGP and USD. Connected the calculator to SMTP email automation for automatic lead data collection and cost breakdown delivery.",
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
      desc: "High-converting WooCommerce e-commerce store in Egypt with full custom development. Features urgency engine, smart cross-selling, and WhatsApp checkout.",
      tags: ["WooCommerce", "E-commerce", "Egypt", "Full Custom", "Automation"],
      image: "/assets/tmayoz.png",
      link: "https://tmayoz.com",
      category: "ecommerce",
      fullDesc:
        "Designed and developed a professional WooCommerce e-commerce store for 'Tmayoz' in Egypt with full custom development. Features include a golden countdown urgency engine, smart cross-selling system, geolocation address fill, dynamic tax incentives, and WhatsApp instant checkout loop — all built with custom PHP/JS.",
      caseStudy: {
        challenge:
          "Client needed a high-converting e-commerce store in the Egyptian market with advanced features to reduce cart abandonment and increase conversion rates. Main challenges included: building a custom urgency system, creating smart cross-selling that respects cart contents, automating checkout processes, and dynamic tax calculations.",
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
      image: "/assets/the sun shop.png",
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
  ],
  react: [
    {
      title: "Awad Mohammed Portfolio",
      desc: "Personal portfolio built with React 19 + Tailwind CSS v4. Fast, minimal, and mobile-first.",
      tags: ["React", "Tailwind CSS", "Vite", "Vercel"],
      image: "/assets/my-portfolio.png",
      link: "https://awad-portfolio-umber.vercel.app/",
      github: "https://github.com/Awadmohammed74/my-portfolio",
      category: "react",
      fullDesc:
        "A premium interactive portfolio website showcasing my work as a WordPress & React developer. Built from scratch using React 19, Tailwind CSS v4, and Vite 6 for blazing-fast performance.",
      caseStudy: {
        challenge:
          "Needed a modern portfolio that reflects technical skills in both WordPress/PHP backend and React frontend development. The site had to be fast, accessible, and show real case studies with live links.",
        solution:
          "Architected a single-page React app with a clean, semantic, mobile-first design system, subtle scroll reveals, and detailed project case studies with real screenshots.",
        results:
          "Built a 90+ Lighthouse scoring portfolio deployed on Vercel with zero external backend, showcasing real client work and case studies.",
        techStack: [
          "React 19",
          "Tailwind CSS v4",
          "Vite",
          "Lucide React",
          "Vercel",
        ],
      },
    },
    {
      title: "PROCMS Application",
      desc: "Professional CMS platform built using React 19, Vite, Tailwind CSS, and Firebase with real-time data sync and SEO management.",
      tags: ["React 19", "Vite", "Tailwind CSS", "Firebase", "CMS"],
      image: "/assets/procms.png",
      link: "https://awad-cms-dashboard.vercel.app/",
      github: "https://vercel.com/awad-dev/awad-cms-dashboard",
      category: "react",
      fullDesc:
        "Built a professional CMS platform using React 19, Vite, Tailwind CSS, and Firebase (Firestore & Auth) featuring real-time data synchronization and comprehensive SEO management.",
      caseStudy: {
        challenge:
          "Needed a robust, real-time content management system built with modern React standards, capable of handling authentication, real-time database updates, and SEO configurations smoothly.",
        solution:
          "Developed a scalable single-page application utilizing React 19 and Vite for high performance. Integrated Firebase Firestore and Authentication for secure real-time data synchronization, styled with Tailwind CSS, and structured for optimal SEO management.",
        results:
          "Delivered a high-performance, responsive CMS platform with instant data syncing and secure authentication, achieving strong web vitals and a seamless user experience.",
        techStack: [
          "React 19",
          "Vite",
          "Tailwind CSS",
          "Firebase (Firestore & Auth)",
          "SEO Management",
        ],
      },
    },
  ],
  shopify: [
    {
      title: "Flamngoo",
      desc: "Shopify home appliances store in Egypt. Full custom-coded theme with bespoke homepage sections, product page buy-box, and a custom Service Centers page with filters.",
      tags: ["Shopify", "E-commerce", "Egypt", "Custom Liquid", "Filters"],
      image: "/assets/flamngoo.png",
      link: "https://flamngoo.com",
      category: "ecommerce",
      fullDesc:
        "Official Shopify store for FLAMNGO, an Egyptian home appliances manufacturer. Built on a premium Shopify theme with extensive custom Liquid/HTML/CSS/JS: multiple custom homepage sections, a fixed 'Buy Now' bar on product pages, and a fully custom Service Centers page with category/brand filters.",
      caseStudy: {
        challenge:
          "Client needed a high-converting Egyptian e-commerce store for home appliances with a strong brand identity and advanced UX features. Key challenges included: converting a custom design into a Shopify theme, building multiple bespoke homepage sections, implementing a sticky 'Buy Now' bar on product pages, and creating a custom Service Centers page with dynamic filtering.",
        solution:
          "Developed a fully custom Shopify theme based on a premium template, heavily modified with custom Liquid, HTML, CSS, and JavaScript. Implemented: multiple custom homepage sections (hero, categories, bundles, latest products, testimonials, about factory, footer), a fixed 'Buy Now' bar on product pages for higher conversions, and a custom Service Centers page with category/brand filters using custom JS. All other pages (About, Policies, Contact) were also fully custom-coded to match the brand's visual identity.",
        results:
          "Delivered a fast, secure, and conversion-optimized Shopify store tailored for the Egyptian market. The custom homepage sections and sticky buy-bar significantly improve user engagement and checkout rates. The custom Service Centers page enhances post-purchase support and brand trust.",
        techStack: [
          "Shopify",
          "Custom Liquid",
          "HTML/CSS",
          "JavaScript",
          "E-commerce",
          "Custom Filters",
          "UX Optimization",
        ],
      },
    },
  ],
};

const PROJECT_IMAGE_KEYS = Object.freeze([
  { id: "wordpress", label: "WordPress " },
  { id: "react", label: "React " },
  { id: "shopify", label: "Shopify " },
]);

export default function Projects() {
  const [tab, setTab] = useState("wordpress");
  const [sub, setSub] = useState("corporate");
  const [selected, setSelected] = useState(null);

  const filtered = allProjects[tab].filter((p) =>
    tab === "react" || tab === "shopify" ? true : p.category === sub,
  );

  const wordpressCounts = {
    corporate:
      allProjects.wordpress?.filter((p) => p.category === "corporate").length ||
      0,
    ecommerce:
      allProjects.wordpress?.filter((p) => p.category === "ecommerce").length ||
      0,
  };

  useEffect(() => {
    if (!selected) return;
    const onKey = (e) => e.key === "Escape" && setSelected(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <section
      id="projects"
      className="section bg-soft-accent relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-40 h-64 w-64 rounded-full bg-accent/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-20 h-72 w-72 rounded-full bg-accent-strong/10 blur-3xl"
      />

      <div className="container-x">
        <div
          className="relative mx-auto max-w-2xl pb-4 text-center"
          data-reveal
        >
          <span
            aria-hidden="true"
            className="section-num absolute -top-6 left-1/2 -z-10 -translate-x-1/2"
          >
            04
          </span>
          <p className="eyebrow justify-center">Selected work</p>
          <h2 className="mt-4 text-3xl font-extrabold text-ink sm:text-4xl">
            Projects I&apos;ve <span className="text-gradient">shipped</span>
          </h2>
          <p className="mt-4 text-mute">
            Real production sites and applications built for clients across
            multiple markets.
          </p>
        </div>

        <div
          className="mt-10 flex justify-center"
          role="tablist"
          aria-label="Filter projects by platform"
          data-reveal
        >
          <div className="tab-group inline-flex">
            {PROJECT_IMAGE_KEYS.map((t) => (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={tab === t.id}
                onClick={() => {
                  setTab(t.id);
                  setSub("corporate");
                }}
                className={`tab ${tab === t.id ? "is-active" : ""}`}
              >
                {t.label}
                <span className="tab-count">{allProjects[t.id].length}</span>
              </button>
            ))}
          </div>
        </div>

        {tab === "wordpress" && (
          <div
            className="mt-5 flex flex-wrap justify-center gap-2"
            role="group"
            aria-label="Filter WordPress projects by type"
            data-reveal
          >
            {[
              { id: "corporate", label: "Corporate Sites" },
              { id: "ecommerce", label: "E-Commerce Stores" },
            ].map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setSub(f.id)}
                className={`tab-sub ${sub === f.id ? "is-active" : ""}`}
              >
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-current opacity-60"
                />
                {f.label}
                <span className="text-[11px] font-bold opacity-70">
                  {wordpressCounts[f.id]}
                </span>
              </button>
            ))}
          </div>
        )}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <article
              key={project.title}
              data-reveal
              style={{ transitionDelay: `${(i % 3) * 80}ms` }}
              className="card group flex flex-col overflow-hidden"
            >
              <div className="relative aspect-video overflow-hidden bg-line">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-lg font-bold text-ink">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-mute">
                  {project.desc}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-mist px-2.5 py-1 text-[11px] font-medium text-ink"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
                  <button
                    type="button"
                    onClick={() => setSelected(project)}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition-colors hover:text-accent-strong"
                  >
                    <BookOpenText className="h-4 w-4" /> Case study
                  </button>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/vbtn inline-flex items-center gap-1.5 border-b-2 border-accent pb-1 text-xs font-semibold uppercase tracking-wider text-ink transition-colors duration-300 hover:border-accent-strong"
                  >
                    Visit
                    <ArrowUpRight className="h-3.5 w-3.5 text-accent transition-transform duration-300 group-hover/vbtn:translate-x-0.5 group-hover/vbtn:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}

function ProjectModal({ project, onClose }) {
  const cs = project.caseStudy;
  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-ink/60 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} case study`}
    >
      <div
        className="flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-t-3xl bg-surface sm:rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-line px-6 py-4">
          <h3 className="font-display text-lg font-bold text-ink">
            {project.title}
          </h3>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close case study"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink transition-colors hover:bg-mist"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="overflow-y-auto">
          <div className="relative aspect-video w-full overflow-hidden border-b border-line bg-line">
            <img
              src={project.image}
              alt={`${project.title} preview`}
              loading="lazy"
              className="h-full w-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>

          <div className="p-6">
            {cs && (
              <div className="space-y-5">
                <section>
                  <h4 className="font-display text-base font-bold text-ink">
                    The challenge
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-mute">
                    {cs.challenge}
                  </p>
                </section>
                <section>
                  <h4 className="font-display text-base font-bold text-ink">
                    The approach
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-mute">
                    {cs.solution}
                  </p>
                </section>
                <section>
                  <h4 className="font-display text-base font-bold text-ink">
                    Results
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-mute">
                    {cs.results}
                  </p>
                </section>
                {cs.techStack && (
                  <section>
                    <h4 className="font-display text-base font-bold text-ink">
                      Technologies used
                    </h4>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {cs.techStack.map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-mist px-3 py-1.5 text-xs font-medium text-ink"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </section>
                )}
              </div>
            )}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent flex-1 shadow-[0_12px_28px_-14px_rgba(76,127,37,0.9)]"
              >
                Visit live site <ArrowUpRight className="h-4 w-4" />
              </a>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost flex-1"
                >
                  View repository
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
