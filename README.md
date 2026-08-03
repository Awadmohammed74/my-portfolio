# Awad Mohammed — Portfolio

> **World-Class WordPress & React Engineer**
>
> A premium, interactive portfolio website built with **React 19**, **Vite 6**, and **Tailwind CSS v4**. This project showcases full-stack engineering expertise across WordPress, WooCommerce, and modern React development — delivered as a blazing-fast, zero-backend single-page application with rich animations, custom theming, and a command palette.

---

## Table of Contents

- [Overview](#overview)
- [Live Preview](#live-preview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Themes](#themes)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Development Server](#running-the-development-server)
  - [Building for Production](#building-for-production)
  - [Previewing the Production Build](#previewing-the-production-build)
- [Configuration](#configuration)
  - [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [Components](#components)
- [Assets](#assets)
- [Performance](#performance)
- [License](#license)

---

## Overview

This portfolio is more than a résumé — it's an **interactive engineering showcase**. It features:

- A **custom WebGL/Canvas particle background** that dynamically responds to mouse movement and theme accent colors.
- A **spring-interpolated custom cursor** with hover-state detection for a desktop-grade experience.
- A **Command Palette** (`Ctrl/Cmd + K`) for keyboard-first navigation, theme switching, and audio control.
- A **dual-toned theme engine** with four professionally crafted presets.
- **UI sound effects** (optional) generated procedurally via the Web Audio API.
- Detailed **interactive case studies** for every featured project.

The result is a **90+ Lighthouse** scoring experience that demonstrates both design sensibility and technical depth.

---

## Live Preview

| Environment | URL                                                                                |
| ----------- | ---------------------------------------------------------------------------------- |
| Production  | [https://awad-portfolio-umber.vercel.app](https://awad-portfolio-umber.vercel.app) |
| Source Code | [GitHub Repository](https://github.com/Awadmohammed74/my-portfolio)                |

---

## Tech Stack

### Core Framework

| Technology       | Version | Purpose                                         |
| ---------------- | ------- | ----------------------------------------------- |
| **React**        | 19.x    | UI library — components, hooks, reactivity      |
| **Vite**         | 6.x     | Build tool & dev server — fast HMR / native ESM |
| **Tailwind CSS** | 4.x     | Utility-first CSS engine with JIT compilation   |
| **Lucide React** | 1.x     | Icon library for UI symbols                     |

### Styling & Effects

| Technology         | Purpose                         |
| ------------------ | ------------------------------- |
| **CSS Variables**  | Dynamic theme color system      |
| **Glass-morphism** | Frosted-glass visual language   |
| **Canvas API**     | Interactive particle background |
| **CSS Animations** | Custom keyframe animations      |
| **Web Audio API**  | Procedural sound effects        |

### Integrations

| Service       | Purpose                             |
| ------------- | ----------------------------------- |
| **Formspree** | Contact form backendless submission |
| **Vercel**    | Frontend hosting & global CDN       |

---

## Features

| Feature                   | Description                                                                 |
| ------------------------- | --------------------------------------------------------------------------- |
| 🪄 **Interactive Canvas** | Full-window particle system with mouse attraction & theme-adaptive coloring |
| ⌨️ **Command Palette**    | `Ctrl/Cmd + K` quick navigation, theme switching & audio controls           |
| 🎨 **Theme Engine**       | 4 presets: Neon Blue, Cyberpunk, Emerald Grid, Electric Gold                |
| 🔈 **Spatial Audio**      | Procedural sound feedback for clicks, hovers, theme changes & errors        |
| 🖱️ **Custom Cursor**      | Dual-element cursor with spring-interpolated ring lag                       |
| 📱 **Responsive Design**  | Mobile-first layout with adaptive component behavior                        |
| 📊 **Lighthouse ≥90**     | Performance-optimized for real-world scores                                 |
| 🧪 **Case Studies**       | Expandable modal with Challenge → Solution → Results for each project       |
| 📄 **CV Download**        | One-click resume/PDF download from the Hero section                         |
| 🧭 **Section Scrolling**  | Smooth scroll navigation with active-section highlighting                   |

---

## Themes

| Theme                     | Preview | Accent Primary        |
| ------------------------- | ------- | --------------------- |
| **Neon Blue** _(default)_ | 🔷      | `#3b82f6` → `#06b6d4` |
| **Cyberpunk**             | 🌸      | `#ec4899` → `#a855f7` |
| **Emerald Grid**          | 🟢      | `#10b981` → `#14b8a6` |
| **Electric Gold**         | 💛      | `#f59e0b` → `#f97316` |

Themes persist across sessions via `localStorage`.

---

## Project Structure

```
portfolio/
├── public/
│   ├── _redirects              # SPA fallback for Netlify/Vercel
│   ├── assets/
│   │   ├── projects/           # Project screenshots
│   │   ├── me.png              # Profile avatar
│   │   └── Awad_Resme.pdf      # Downloadable CV
├── src/
│   ├── components/
│   │   ├── App.jsx             # Root component — layout + global state
│   │   ├── BackgroundCanvas.jsx   # Interactive particle background
│   │   ├── Navbar.jsx          # Fixed navigation with theme/audio controls
│   │   ├── Hero.jsx            # Hero section with role rotation
│   │   ├── About.jsx           # Personal bio + contact stats grid
│   │   ├── Skills.jsx          # Animated skill bars by category
│   │   ├── Projects.jsx        # Filterable project showcase grid
│   │   ├── ProjectModal.jsx    # Case-study detail modal
│   │   ├── Experience.jsx      # Vertical timeline of career milestones
│   │   ├── TechTicker.jsx      # Infinite-scrolling tech logo marquee
│   │   ├── CommandPalette.jsx  # Ctrl/Cmd+K command interface
│   │   ├── Contact.jsx         # Contact form (Formspree) + info cards
│   │   └── Footer.jsx          # Footer with social links + scroll-to-top
│   ├── utils/
│   │   └── sound.js            # Web Audio API sound manager
│   ├── App.jsx
│   ├── index.css               # Tailwind base + custom keyframes/animations
│   └── main.jsx                # React 19 entry point (StrictMode)
├── index.html                  # HTML entry — SEO-optimized metadata
├── vite.config.js              # Vite config (React + Tailwind plugins)
├── package.json
├- README.md
└── .gitignore
```

---

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

| Tool        | Minimum Version |
| ----------- | --------------- |
| **Node.js** | 20.x LTS        |
| **npm**     | 10.x            |
| **Git**     | 2.40+           |

---

### Installation

Clone the repository and install dependencies:

```bash
# Clone the repository
git clone https://github.com/Awadmohammed74/my-portfolio.git
cd my-portfolio

# Install dependencies
npm install
```

---

### Running the Development Server

Start the Vite development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

> Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

---

### Building for Production

Create an optimized production build:

```bash
npm run build
```

This generates a `dist/` directory containing minified assets with content-hashed filenames, ready for deployment.

---

### Previewing the Production Build

Preview the production build locally to verify behavior before deploying:

```bash
npm run preview
```

> This spins up a local server simulating a production environment.

---

## Configuration

### Environment Variables

This project is a **static client-side application** and does not require any environment variables for core functionality.

| Variable | Description                                                |
| -------- | ---------------------------------------------------------- |
| `.env`   | Ignored by `.gitignore` — used for local secrets if needed |

> **Note:** The contact form uses **Formspree** (`https://formspree.io/f/xnjkdlgv`). To use your own endpoint, update the `FORMSPREE_URL` constant in `src/components/Contact.jsx`.

---

## Available Scripts

| Script         | Command           | Description                                   |
| -------------- | ----------------- | --------------------------------------------- |
| **Dev Server** | `npm run dev`     | Starts Vite dev server with HMR               |
| **Build**      | `npm run build`   | Produces a production-ready `dist/` directory |
| **Preview**    | `npm run preview` | Serves the production build locally           |

---

## Deployment

This project is optimized for **Vercel** and **Netlify** static hosting.

### Deploying to Vercel

```bash
# If you have the Vercel CLI installed
npm install -g vercel
vercel
```

The `vercel.json` or platform defaults will handle SPA routing via `public/_redirects`.

### Deploying to Netlify

1. Push to GitHub.
2. Import the repository into [Netlify](https://app.netlify.com).
3. Set **Build command**: `npm run build`
4. Set **Publish directory**: `dist`

The `public/_redirects` file ensures SPA fallback routing.

---

## Components

| Component                  | Description                                                                                                                                                                |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`App.jsx`**              | Root component — manages loading state, theme, mute state, command palette visibility, and custom cursor logic.                                                            |
| **`BackgroundCanvas.jsx`** | Renders an interactive particle system on `<canvas>` with mouse attraction, dynamic theme coloring, and visibility-aware animation pausing.                                |
| **`Navbar.jsx`**           | Fixed top navigation with scroll-aware styling, active section detection, theme selector dropdown, audio mute toggle, mobile menu, and command palette trigger (`Ctrl+K`). |
| **`Hero.jsx`**             | Hero section with role rotation, profile avatar, CTA buttons (View Projects / Download CV), and animated stat cards.                                                       |
| **`About.jsx`**            | Personal bio with profile imagery, key info grid (location, email, status), and tech badges.                                                                               |
| **`Skills.jsx`**           | Categorized skill bars with percentage levels, Intersection Observer-triggered animations, and filter tabs (WordPress, React, Backend, DevOps, Firebase, SEO).             |
| **`Projects.jsx`**         | Filterable project grid (WordPress / React tabs) with category sub-filters (Corporate / E-Commerce), hover overlays, and case-study modal launcher.                        |
| **`ProjectModal.jsx`**     | Modal displaying full project case study — Challenge, Solution, Results, and Technology stack.                                                                             |
| **`Experience.jsx`**       | Vertical timeline of professional roles with achievements, color-coded timeline dots, and role icons.                                                                      |
| **`TechTicker.jsx`**       | Infinite-scrolling marquee of technology logos (WordPress, PHP, React, WooCommerce, MySQL, JS, Git, Linux).                                                                |
| **`CommandPalette.jsx`**   | Keyboard-activated command palette with search, navigation shortcuts, theme switching, and audio toggle. Full keyboard navigation support.                                 |
| **`Contact.jsx`**          | Contact form (via Formspree) with inline validation, shake animations on error, and contact info cards (email, LinkedIn, GitHub, WhatsApp, phone).                         |
| **`Footer.jsx`**           | Footer with brand logo, scroll-to-top button, quick links, and social media icons (GitHub, LinkedIn).                                                                      |

---

## Assets

| File                           | Description                                      |
| ------------------------------ | ------------------------------------------------ |
| `public/assets/me.png`         | Profile avatar used in Hero and About sections   |
| `public/assets/Awad_Resme.pdf` | Downloadable CV/resume                           |
| `public/assets/projects/`      | Screenshots for project case studies             |
| `public/_redirects`            | SPA fallback routing rule (`/* /index.html 200`) |

---

## Performance

This portfolio is engineered for **speed and real-world Lighthouse excellence**:

- **90+ Lighthouse** scores (Performance, Accessibility, Best Practices, SEO)
- **No external backend dependencies** — pure static frontend
- **Procedural audio** — no audio files, zero payload cost
- **Intersection Observer** for efficient animation triggering
- **Canvas particle system** pauses when the tab is hidden
- **CSS Variables** power the theme system — dynamic recoloring with no JS re-renders
- **Vite 6** with native ESM and optimized production bundling

---

## License

This project is **personal and proprietary**. All code, designs, and content are the intellectual property of **Awad Mohammed AbdelAal** unless otherwise attributed.

- ✅ Feel free to **browse, fork, and learn** from the codebase
- ✅ Reference the architecture for your own portfolio
- ❌ Do **not** deploy or distribute this exact project as your own

---

<sub>Handcrafted with ❤️ and caffeine by **Awad Mohammed** — WordPress & React Engineer.</sub>
