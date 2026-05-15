# UX/UI Designer Portfolio — Build Plan

A personal portfolio website for a UX/UI Designer transitioning from Angular into React. Built to ship fast on Vercel's free tier with a **bold & expressive** visual direction.

---

## 1. Recommended Tech Stack

### Core framework
- **Next.js 16 (App Router)** — the latest stable as of early 2026. Built on React 19 with Server Components by default. Chosen because:
  - File-system based routing will feel familiar coming from Angular's module structure.
  - First-class deployment on Vercel (zero config, free hobby tier covers personal portfolios easily).
  - Excellent SEO/performance out of the box — important for being discoverable by recruiters.
  - The Angular → React jump is much smoother with Next.js than bare React (opinionated structure, built-in routing/layouts, server-side rendering).
- **TypeScript** — non-negotiable for a junior dev portfolio. TS will catch errors early, looks great to hiring managers, and Angular devs already think in types.

### Styling
- **Tailwind CSS v4** — utility-first CSS. Fastest way to ship a bold, custom-feeling design without writing piles of CSS. Pairs well with a designer's eye for spacing/typography.
- **CSS variables for the design system** — colors, type scale, spacing tokens. Keeps Tailwind constrained to your system rather than infinite ad-hoc values.

### Animation (the "bold & expressive" part)
- **Motion** (the React library formerly known as Framer Motion) — for component-level transitions, hover states, page transitions, and enter/exit animations. Declarative, plays nicely with React's render cycle.
- **GSAP + ScrollTrigger** — for scroll-driven storytelling inside case study pages (parallax, pinned sections, text reveals, image sequences). GSAP's free license covers everything you need; ScrollTrigger is now free too.
- **Lenis** — smooth scroll library. Tiny (~5KB), pairs with GSAP, gives portfolios that buttery scroll feel without the jank.

> **Why both Motion and GSAP?** Motion for *interactive UI* (buttons, cards, page transitions). GSAP for *scroll-driven case study narratives*. This is the same combo most agency/designer portfolios use in production.

### Case study content
- **MDX** (Markdown + JSX) via `@next/mdx` or `contentlayer`/`velite` — each case study lives as a `.mdx` file you can edit like a doc, but you can drop in React components (image carousels, prototype embeds, before/after sliders) inline. This is the right sweet spot: easier than a headless CMS, more flexible than hardcoded JSX.

### Forms (contact section)
- **React Hook Form** + **Zod** for validation.
- **Resend** or **Formspree** to actually deliver the email — both have generous free tiers, no backend needed.

### Supporting libraries
- **next/image** — built-in image optimization (huge for a portfolio full of screenshots).
- **next/font** — self-host Google Fonts or custom fonts with zero layout shift.
- **lucide-react** — clean icon set.
- **clsx** + **tailwind-merge** — for conditional class composition.

### Tooling
- **ESLint** + **Prettier** — included with `create-next-app`.
- **Vercel Analytics** (free) — see what recruiters actually click on.
- **Git + GitHub** — repo public, deploys auto-trigger on push to `main`.

### Hosting
- **Vercel** — free Hobby tier. Connect the GitHub repo, every push deploys automatically. Custom domain support is free (you only pay the registrar). Edge network = fast loads globally.

---

## 2. File Structure

```
portfolio/
├── public/
│   ├── images/
│   │   ├── projects/        # case study hero shots, screenshots
│   │   ├── about/           # headshot, personal photos
│   │   └── og/              # OG share images (1200x630)
│   ├── fonts/               # if self-hosting custom display fonts
│   └── resume.pdf
│
├── src/
│   ├── app/
│   │   ├── layout.tsx       # root layout: <html>, fonts, analytics
│   │   ├── page.tsx         # the single-page homepage (hero + projects + about + contact)
│   │   ├── globals.css      # Tailwind imports, CSS vars, base styles
│   │   ├── not-found.tsx
│   │   │
│   │   └── work/
│   │       ├── layout.tsx           # shared case study chrome (back link, progress bar)
│   │       └── [slug]/
│   │           └── page.tsx         # renders an individual MDX case study
│   │
│   ├── components/
│   │   ├── sections/                # one component per homepage section
│   │   │   ├── Hero.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── About.tsx
│   │   │   └── Contact.tsx
│   │   ├── ui/                      # reusable primitives
│   │   │   ├── Button.tsx
│   │   │   ├── ProjectCard.tsx
│   │   │   ├── SectionHeading.tsx
│   │   │   └── Marquee.tsx
│   │   ├── mdx/                     # custom MDX components for case studies
│   │   │   ├── Figure.tsx
│   │   │   ├── BeforeAfter.tsx
│   │   │   ├── Callout.tsx
│   │   │   └── mdx-components.tsx
│   │   ├── motion/                  # reusable animation wrappers
│   │   │   ├── FadeIn.tsx
│   │   │   ├── RevealText.tsx
│   │   │   └── ScrollTriggerWrap.tsx
│   │   └── layout/
│   │       ├── Nav.tsx
│   │       ├── Footer.tsx
│   │       └── SmoothScroll.tsx     # Lenis provider
│   │
│   ├── content/
│   │   └── projects/                # the 3 case studies live here
│   │       ├── project-one.mdx
│   │       ├── project-two.mdx
│   │       └── project-three.mdx
│   │
│   ├── lib/
│   │   ├── projects.ts              # load + parse MDX, expose getAllProjects()
│   │   ├── seo.ts                   # generateMetadata helpers
│   │   └── utils.ts                 # cn() helper, etc.
│   │
│   ├── styles/
│   │   └── tokens.css               # CSS vars: colors, type scale, spacing, easings
│   │
│   └── types/
│       └── project.ts               # Project frontmatter type
│
├── .env.local                       # RESEND_API_KEY, etc. (gitignored)
├── .env.example                     # committed template
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

**Why this shape:** the homepage is a single scroll experience (`app/page.tsx` composing four section components), with case studies as their own routes under `/work/[slug]`. Content is decoupled from components — adding a fourth case study is one new `.mdx` file, no code changes.

---

## 3. Design Considerations

### Voice & visual direction (bold & expressive)
- **Pick a strong type pairing.** One distinctive display face for headlines (something with personality — a variable font lets you animate weight on hover), one neutral sans for body. The 2026 trend pairing nostalgic rounded display fonts with modern monospace is working well for designer portfolios; consider it.
- **Type-driven hero.** A 2026 pattern in standout designer portfolios: oversized name set at viewport-edge-to-edge, with the tagline as supporting copy. No hero image. Your name *is* the visual.
- **Limited but loud palette.** One bold accent color (electric, saturated) against a near-black or off-white base. Use the accent intentionally — CTAs, hover states, current section indicator. Don't paint everything with it.
- **Motion as a design system, not decoration.** Define 3–4 motion primitives (fade-up reveal, character split reveal, magnetic hover on links, parallax) and reuse them everywhere. Consistent motion reads as polish; one-off animations read as noise.

### Information architecture
- **Single-page homepage** with anchored nav (`#hero`, `#work`, `#about`, `#contact`). Recruiters skim — don't make them click.
- **Case studies are separate routes**, not modals. Better SEO, shareable URLs, and gives each case study room to breathe.
- **Lead each case study with the outcome.** "Increased activation 34%" reads stronger than "I redesigned onboarding." Then process. Then artifacts.

### Performance & technical UX
- **Image discipline.** Every screenshot through `next/image` with explicit dimensions. Use AVIF/WebP. Lazy-load below the fold. A 5MB hero image will tank your Lighthouse score and slow recruiters' patience.
- **Target Core Web Vitals.** LCP under 2.5s, CLS under 0.1, INP under 200ms. Vercel Analytics will surface regressions.
- **Reduced motion.** Respect `prefers-reduced-motion`. Motion + GSAP both have hooks for this — wire it in from day one, not as a Phase 2 fix.

### Accessibility (non-negotiable, especially for a UX designer)
- Semantic HTML: `<main>`, `<section>`, `<nav>`, one `<h1>`, proper heading hierarchy.
- Color contrast minimum 4.5:1 for body text, 3:1 for large text — *check this for your accent color against your background*; bold portfolios often fail here.
- Keyboard navigable: every interactive element reachable via Tab, visible focus rings (don't strip them).
- Alt text on every image. For case study screenshots, describe the screen contents, not the file ("Onboarding step 2 showing role selection cards").
- Test with a screen reader at least once before shipping. Demonstrates the rigor employers want from a UX hire.

### Responsive strategy
- Mobile-first. Many recruiters will open the link on phone first.
- Three breakpoints is enough: mobile (default), tablet (`md:` 768px), desktop (`lg:` 1024px). Avoid pixel-perfect designs at every width — design fluidly with `clamp()` for type sizes.

### SEO & shareability
- Per-page `generateMetadata()` for case study OG tags.
- Custom OG image per case study (1200×630, big text, no tiny screenshots).
- `sitemap.xml` + `robots.txt` via Next.js's built-in route handlers.
- Schema.org `Person` JSON-LD on the homepage.

### Content checklist before launch
- 3 case studies, each with: problem, role, process snapshot, key decisions, outcome/metric, lessons.
- Headshot or strong personal photo for About.
- Real, current contact email — and double-check the form actually delivers.
- Resume PDF in `/public`.

---

## 4. Step-by-Step Implementation Plan

### Phase 0 — Foundation (Day 1, ~2 hours)
1. Run `npx create-next-app@latest portfolio --typescript --tailwind --app --eslint --src-dir`.
2. Initialize git, push to a new GitHub repo.
3. Connect the repo to Vercel — get the auto-deploy URL working before writing real code. Push a "Hello world" and confirm it's live.
4. Set up Prettier with Tailwind plugin, configure path aliases (`@/components`, `@/lib`, etc. in `tsconfig.json`).

### Phase 1 — Design system & tokens (Day 1–2, ~3 hours)
5. Define design tokens in `src/styles/tokens.css`: color palette (base, accent, neutrals), type scale (fluid via `clamp()`), spacing scale, easing curves, animation durations.
6. Wire tokens into `tailwind.config.ts` so utilities respect your system (`bg-accent`, `text-display`, etc.).
7. Set up fonts with `next/font` — pick your display + body pairing.
8. Build the primitive components: `Button`, `SectionHeading`, `Container`. Get a Storybook-of-one going by making a `/styleguide` route you'll delete before launch.

### Phase 2 — Layout shell (Day 2, ~2 hours)
9. Build `Nav` (sticky, anchor links, mobile menu) and `Footer`.
10. Wire up Lenis in a `SmoothScroll` client-component wrapper in the root layout.
11. Set up the motion primitives in `components/motion/`: `FadeIn`, `RevealText`. Include the `prefers-reduced-motion` check.

### Phase 3 — Homepage sections (Day 3–4, ~6 hours)
12. **Hero** — name + tagline. Big type. Add character-level reveal on mount using Motion. One subtle scroll-down indicator.
13. **Projects** — grid or stacked cards (3 cards for 3 case studies). Each card: thumbnail, title, role, year. Magnetic hover effect on cards is a nice "bold" touch.
14. **About** — photo + 2–3 short paragraphs + skills list + resume download link. Keep it human, not corporate.
15. **Contact** — form (name, email, message) with React Hook Form + Zod. Wire to Resend or Formspree. Include direct email and social links (LinkedIn, Dribbble, etc.) as fallbacks.

### Phase 4 — Case study system (Day 5–6, ~6 hours)
16. Install MDX support (`@next/mdx` or `velite` for typed frontmatter — velite is nicer for portfolios).
17. Define the Project frontmatter type (title, slug, role, year, summary, cover, accentColor).
18. Build `lib/projects.ts` — functions to list all projects and load one by slug.
19. Build `app/work/[slug]/page.tsx` — renders MDX with custom components, generates static params at build time.
20. Build the MDX components: `Figure` (image with caption), `Callout`, `BeforeAfter` (slider), maybe `Stat` (big metric reveal). These are what give your case studies design polish.
21. Add scroll-driven moments inside case studies using GSAP ScrollTrigger — pinned sections, image sequences, text reveals on scroll. Use sparingly; one or two per case study is plenty.

### Phase 5 — Content (Day 7, time varies — this is your real bottleneck)
22. Write all 3 case studies as `.mdx` files. Lead with outcome, then problem → process → solution → reflection.
23. Export and optimize all screenshots (AVIF or WebP, max 1920w for hero shots, 1200w for inline).
24. Write About section copy. Pick a photo.
25. Generate OG images for each case study.

### Phase 6 — Polish & QA (Day 8, ~4 hours)
26. **Performance audit**: Lighthouse on every page. Target 95+ across the board. Fix LCP regressions (usually a too-large hero image or a render-blocking font).
27. **Accessibility audit**: keyboard nav, screen reader spot-check (VoiceOver on Mac is free), color contrast on every text/background combo, focus rings visible everywhere.
28. **Cross-browser/device**: Safari, Chrome, Firefox; iPhone, Android, iPad, desktop.
29. **Reduced motion**: toggle the OS setting, confirm the site is still usable and legible.
30. **Real device test** on a phone — touch targets minimum 44×44, no horizontal scroll, hero text readable.

### Phase 7 — Ship (Day 8)
31. Buy your domain (Namecheap, Cloudflare, etc.). Point it at Vercel (Vercel's docs make this 5 minutes).
32. Configure environment variables in Vercel for Resend/Formspree.
33. Submit sitemap to Google Search Console.
34. Add Vercel Analytics.
35. Test the contact form one more time from your actual domain.
36. Update LinkedIn, email signature, Dribbble bio with the new URL.

### Phase 8 — After launch (ongoing)
37. Watch Vercel Analytics for the first month — what do people click? Where do they bounce?
38. Add a fourth case study when you have a strong one — should now be a 30-minute task (new `.mdx` file, push, deploy).
39. Quarterly: refresh resume PDF, update About blurb, refresh OG images if you've redesigned anything.

---

## Realistic timeline

If this is evening/weekend work alongside a job: **plan for 3 weeks**, not 8 days. The implementation is ~8 focused days of work; the case study writing and visual content prep is what people underestimate.

If full-time on this: **~1.5 weeks** including the content writing.

## What to NOT do

- Don't build a custom CMS. MDX files are enough.
- Don't add a blog unless you'll actually write — an abandoned blog reads worse than no blog.
- Don't animate everything. The most expressive portfolios in 2026 are restrained — they pick 3–4 strong moments and execute them flawlessly, rather than 20 mediocre ones.
- Don't ship without testing the contact form end-to-end.
