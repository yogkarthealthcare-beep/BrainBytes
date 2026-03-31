# 🧠 Brain Bytes — Angular Website

> A premium, animation-rich Angular 17 website for a modern software company.
> Built with Tailwind CSS, CSS animations, and a dark cyber-precision design aesthetic.

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm 9+

### Install & Run
```bash
# Install dependencies
npm install

# Start development server
npm start
# → http://localhost:4200

# Production build
npm run build
# → /dist/brain-bytes/
```

### Instant Preview (No build required)
Open `brain-bytes-preview.html` directly in your browser for a complete, fully-animated standalone HTML preview of the landing page — zero dependencies.

---

## 🗂 Project Structure

```
src/
├── app/
│   ├── app.component.ts          # Root component
│   ├── app.routes.ts             # Angular Router config
│   └── components/
│       ├── navbar/               # Sticky animated navbar + mobile hamburger
│       ├── footer/               # Footer with newsletter + links
│       ├── home/                 # ⭐ Landing Page (particle system, animations)
│       ├── about/                # Company story + timeline + values
│       ├── developers/           # Team cards with stack pills + socials
│       ├── products/             # Featured product + full suite
│       ├── gallery/              # Filterable portfolio + client showcase
│       └── contact/              # Contact form + FAQ
├── styles.css                    # Global Tailwind + custom CSS
└── index.html                    # Google Fonts import
```

---

## 🎨 Design System

| Token | Value |
|---|---|
| Primary Background | `#08081A` |
| Card Background | `#111130` |
| Cyan Accent | `#00F5FF` |
| Violet Accent | `#7C3AED` |
| Pink Accent | `#F472B6` |
| Body Text | `#8892A4` |
| Display Font | Syne (Google) |
| Body Font | DM Sans (Google) |
| Mono Font | JetBrains Mono (Google) |

---

## ✨ Animations

### Hero Section
- Canvas particle system with animated interconnected nodes
- Staggered entrance animations (tag → headline → sub → buttons → stats → scroll indicator)
- Three animated radial gradient blobs

### Scroll Animations
- Custom `IntersectionObserver`-based reveal system
- Supports: `data-reveal`, `data-reveal="left"`, `data-reveal="right"`, `data-reveal="scale"`
- Delay variants: `data-delay="100"` through `data-delay="600"`

### Interactive Animations
- Service cards: lift + border glow + arrow slide-in on hover
- Product cards: lift + border glow + shadow on hover
- Developer cards: lift + gradient border reveal
- Stats: animated counters triggered on scroll entry

### Continuous Animations
- Client logo marquee (infinite scroll, pauses on hover)
- Floating blob backgrounds
- CTA button pulse shadow
- Brain emoji glow cycle
- Visual bar breathe effect
- Float animation on about section visual card

---

## 📄 Pages & Routes

| Route | Component | Description |
|---|---|---|
| `/` | HomeComponent | Landing page with all 7 sections |
| `/about` | AboutComponent | Company story, timeline, values |
| `/developers` | DevelopersComponent | Team member cards |
| `/products` | ProductsComponent | Full product suite |
| `/gallery` | GalleryComponent | Filterable project portfolio |
| `/contact` | ContactComponent | Contact form + FAQ |

---

## 🛠 Tech Stack

- **Framework**: Angular 17 (Standalone Components, lazy-loaded routes)
- **Styling**: Tailwind CSS 3 + custom CSS animations
- **Fonts**: Google Fonts (Syne · DM Sans · JetBrains Mono)
- **Animations**: CSS keyframes + Angular lifecycle hooks + IntersectionObserver
- **Build**: Angular CLI with `@angular-devkit/build-angular:application`

---

## 📦 Build Output

After `npm run build`, the `/dist/brain-bytes/` folder contains fully static files.
Deploy to **Netlify**, **Vercel**, **Firebase Hosting**, **GitHub Pages**, or any static host.

For SPA routing (non-root routes), configure your host to redirect all 404s to `index.html`.

---

## 🌐 Deployment (Netlify example)

```bash
npm run build
# Drag /dist/brain-bytes/browser/ to netlify.com/drop
```

Or add a `netlify.toml`:
```toml
[build]
  publish = "dist/brain-bytes/browser"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

Built with ❤️ by Brain Bytes Engineering.
