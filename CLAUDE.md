# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Dev server at http://localhost:4321 (hot reload)
npm run build     # Static build → ./dist/
npm run preview   # Serve the production build locally
```

No test or lint commands are configured.

## Architecture

**Koneko Ads** is a static marketing landing page built with Astro 4 + Tailwind CSS 3 + TypeScript. Output is pure HTML/CSS with zero runtime JavaScript (except a small inline mobile-menu toggle).

### Content / Component separation

All copy lives in `src/content/*.ts` as typed TypeScript objects — never inline text in components. Components import from content and render it. When updating visible text, edit the content files; when changing layout/markup, edit the component.

Page assembly: `src/pages/index.astro` → imports `BaseLayout` + every section component → each component imports its own content file.

### Path aliases (tsconfig.json)

| Alias | Resolves to |
|-------|-------------|
| `@content/*` | `src/content/*` |
| `@components/*` | `src/components/*` |
| `@layouts/*` | `src/layouts/*` |

### Design system

All design tokens are centralized in `tailwind.config.ts` under the `koneko.*` namespace. **Do not hardcode colors or spacing in components** — use the tokens.

Key tokens:
- `koneko.primary` (#7C3AED) — brand violet, interactive states, focus ring
- `koneko.neon` (#22D3EE) — cyan decorative accents
- `koneko.bg` / `koneko.bg-alt` / `koneko.card` — dark background layers
- `font-display` → Space Grotesk (headings), `font-body` → Inter (body)
- `spacing.section-desktop` (96px) / `spacing.section-mobile` (64px) — section vertical padding

### Component hierarchy

- **`src/layouts/BaseLayout.astro`** — HTML5 shell, Google Fonts, global styles, meta/OG tags
- **`src/components/ui/`** — atomic reusables: `SectionLabel`, `CtaButton`
- **`src/components/*.astro`** — one component per page section (Hero, Partners, Problem, Process, Metrics, Testimonials, Cta, Header, Footer)

### Pending items (tracked in README.md)

- `/public/images/logo-koneko.png` — real logo not yet added
- `/public/images/arquitectura-diagrama.png` — diagram not yet added
- Two KPI values in `src/content/metrics.ts` marked TODO (need real data)
- Contact form via Formspree (optional; currently uses `mailto:` from `src/content/site.ts`)

## Deployment

Zero-config deploy to Vercel or Netlify — both auto-detect Astro and run `astro build`.
