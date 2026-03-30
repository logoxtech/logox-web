# Logox.tech — Official Website

Marketing and contact site for **Logox**, a digital automation and AI agency based in Guatemala.

**Stack:** Astro · TypeScript · Tailwind CSS · Firebase Hosting · GitHub Actions CI/CD  
**Languages:** English (EN) · Spanish (ES)  
**Live:** [https://logox.tech](https://logox.tech)

---

## Getting Started

```bash
npm install
npm run dev        # localhost:4321
npm run build      # production build
npm run preview    # preview build locally
```

## Project Structure

```
src/
├── pages/
│   ├── en/        → English pages
│   └── es/        → Spanish pages
├── layouts/       → Shared layouts (Layout.astro)
├── components/    → Reusable components (Navbar, Hero, FAQ, etc.)
├── i18n/          → Translation strings (ui.ts)
└── styles/        → Global CSS
public/            → Static assets (og-image.png, favicon.svg)
```

## i18n

All copy is managed through `src/i18n/ui.ts`. Each key exists in both `en` and `es` objects. Language detection is based on the URL path (`/en/*` vs `/es/*`).

## Environment Variables

No environment variables are required to run locally. For production deployments, configure your Firebase project credentials in your CI/CD environment.

## Deployment

Auto-deploys to **Firebase Hosting** on push to `main` via GitHub Actions.

The build step runs `astro build` and the output (`dist/`) is deployed directly.

## Commands

| Command           | Action                                      |
|-------------------|---------------------------------------------|
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Start local dev server at `localhost:4321`  |
| `npm run build`   | Build production site to `./dist/`          |
| `npm run preview` | Preview production build locally            |
| `npm run astro`   | Run Astro CLI commands                      |

---

© 2026 Logox · [hello@logox.tech](mailto:hello@logox.tech)
