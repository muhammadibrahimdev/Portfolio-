# Muhammad Ibrahim — Portfolio (Stage 1: Design System)

This is being built in stages. **Stage 1 is done**: design tokens + core UI
primitives. Sections (Hero, About, Experience, Skills, Projects, Learning
Roadmap, GitHub, Contact) come next, one at a time.

## Run it

```bash
npm install
npm run dev
```

Open `http://localhost:3000` — you'll see a **style-guide preview** at
`app/page.tsx`, not the real homepage yet. It exists so you can check colors,
type, and components render correctly before real content goes on top.

## What's in Stage 1

- `tailwind.config.ts` — full color/type/animation token system
- `app/globals.css` — base resets, focus states, signature grid background
- `lib/utils.ts` — `cn()` class-merge helper
- `lib/animations.ts` — shared Framer Motion variants (fade, stagger, slide)
- `components/ui/button.tsx` — primary / secondary / ghost / link variants
- `components/ui/badge.tsx` — tech-stack chip component
- `components/ui/card.tsx` — card primitive family (Header/Title/Content/Footer)
- `components/ui/container.tsx` — page container + reusable `SectionHeading`
- `components/ui/status-dot.tsx` — pulsing status indicator
- `components/system-panel.tsx` — **signature element**: a mock live-system
  readout (uptime, latency, stack) that carries the backend-engineer identity
  through the site

## Design decisions (why it looks like this)

- **Palette is green-tinted, not neutral black** — background, surface, and
  text colors all lean slightly green so the dark theme feels designed, not
  like `#000000` + a CSS accent.
- **Mono type carries meaning, not decoration** — IBM Plex Mono is reserved
  for things that are actually system-like: badges, the system panel, labels.
  It was chosen over Geist Mono specifically to avoid the "generic AI
  portfolio" mono look; Plex has more character in its numerals and spacing.
  Headings stay in Geist Sans, body in Inter.
- **The system panel is the one bold move** — instead of a generic hero glow,
  there's a small "terminal" widget with fake-but-plausible metrics. It's the
  visual proof of "I build backend systems," and it'll reappear (smaller) near
  the GitHub section later.

## Next steps (as requested)

1. ✅ Design system + primitives
2. ⏭ Build sections one by one: Hero → About → Experience → Skills →
   Projects → Learning Roadmap → GitHub → Contact → Footer
3. ⏭ Final pass: consistency review, performance/Lighthouse, SEO files,
   accessibility audit, deployment instructions
