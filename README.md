# Awad Mohammed — Portfolio

A clean, professional portfolio for a WordPress & React engineer, built with **React 19**, **Vite 6**, and **Tailwind CSS v4**. Single-page, zero-backend, optimized for performance and accessibility.

## Live Preview

| Environment | URL |
| ----------- | --- |
| Production  | [https://awad-portfolio-umber.vercel.app](https://awad-portfolio-umber.vercel.app) |
| Source Code | [GitHub Repository](https://github.com/Awadmohammed74/my-portfolio) |

## Tech Stack

| Technology | Version | Purpose |
| ---------- | ------- | ------- |
| React | 19.x | UI library — components, hooks, reactivity |
| Vite | 6.x | Build tool & dev server — fast HMR, native ESM |
| Tailwind CSS | 4.x | Utility-first CSS engine with JIT compilation |
| Lucide React | latest | Icon library |

**Integrations:** Formspree (contact form submissions).

## Features

- Semantic HTML5 structure with accessible, high-contrast design.
- Design system built on two brand colors: accent `#9FE870` and ink `#163300`.
- Filterable project grid (WordPress / React) with category sub-filters and interactive case studies.
- Scroll-reveal animations via `IntersectionObserver`, with staggered card entrances and full `prefers-reduced-motion` support.
- Contact form with inline validation and submission status feedback.
- Fully responsive, mobile-first layout across all breakpoints.

## Project Structure

```
src/
├── App.jsx              # App shell, scroll progress bar, reveal observer
├── index.css            # Tailwind theme tokens, base styles, animations
└── components/
    ├── Navbar.jsx       # Sticky navigation, mobile menu, scroll-spy
    ├── Hero.jsx         # Intro, avatar, CTA buttons, tech badges
    ├── About.jsx        # Bio, metrics, quick facts
    ├── Services.jsx     # Service cards with index numbers
    ├── Skills.jsx       # Skill categories with filter tabs and bars
    ├── Projects.jsx     # Filterable project grid + case-study modal
    ├── Experience.jsx   # Numbered timeline of professional roles
    ├── Contact.jsx      # Contact channels + Formspree form
    ├── Cta.jsx          # Closing CTA banner with tech marquee
    └── Footer.jsx       # Brand, quick links, social icons
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
git clone https://github.com/Awadmohammed74/my-portfolio.git
cd my-portfolio
npm install
```

### Running the Development Server

```bash
npm run dev
```

The site runs at `http://localhost:5173` with hot module replacement.

### Building for Production

```bash
npm run build
```

Output is written to `dist/`.

### Previewing the Production Build

```bash
npm run preview
```

## Configuration

The contact form posts to Formspree. Update the endpoint in `src/components/Contact.jsx`:

```js
const FORMSPREE_URL = "https://formspree.io/f/<your-form-id>";
```

## Assets

| File | Description |
| ---- | ----------- |
| `public/assets/awad.png` | Profile avatar used in the Hero section |
| `public/assets/Awad_Resme.pdf` | Downloadable CV |
| `public/assets/` | Project screenshots for case studies |
| `public/_redirects` | SPA fallback routing rule (`/* /index.html 200`) |

## Performance

- 90+ Lighthouse scores (Performance, Accessibility, Best Practices, SEO)
- No external backend dependencies — pure static frontend
- `IntersectionObserver`-driven animations; content stays visible without JavaScript
- Optimized production bundle via Vite 6

## Deployment

Deployed on Vercel. Any static host works — upload the contents of `dist/` after building. The included `_redirects` file covers SPA routing on Netlify-style hosts.

## License

This project is personal and proprietary. All code, designs, and content are the intellectual property of Awad Mohammed AbdelAal unless otherwise attributed.

- You may browse, fork, and learn from the codebase.
- You may not deploy or distribute this project as your own.
