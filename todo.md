# ValueTrustAI — Website TODO

> Last updated: 2026-08-16
> Track progress by changing `[ ]` to `[x]` when complete.

---

## ✅ Completed

- [x] Next.js 15 project scaffolded (TypeScript, Tailwind v4, App Router, ESLint)
- [x] Global layout — sticky Header with hamburger menu, Footer with nav + contact
- [x] Home page — Hero, Services overview, How We Work (3-step), CTA banner
- [x] Stub pages created — `/services`, `/about`, `/blog`, `/blog/[slug]`, `/contact`
- [x] Repo pushed to GitHub → `github.com/avinashmatani/ValueTrustAI` (private)

---

## 🔲 Pages to Build

### 1. `/services` — Services Page
**Status:** Stub only (placeholder text)
**Needs your input:**
- [ ] Final list of services (how many? same 4 as home, or more?)
- [ ] For each service: full description (2–4 sentences), any pricing tiers or engagement models
- [ ] Any case study / outcome you can mention per service (e.g. "Reduced processing time by 60%")
- [ ] Do you want a "Book a call" CTA per service card?

---

### 2. `/about` — About Page
**Status:** Stub only
**Needs your input:**
- [ ] Company story / founding narrative (1–2 paragraphs)
- [ ] Mission statement or values (e.g. 3 core values with descriptions)
- [ ] Team members to feature:
  - Name
  - Role / title
  - Short bio (2–3 sentences)
  - Photo (or use initials/avatar as placeholder)
  - LinkedIn URL (optional)
- [ ] Any credentials, certifications, or partner logos (e.g. Microsoft, AWS, Google Cloud)?
- [ ] Location(s) — city/country you operate from

---

### 3. `/blog` — Blog Index + Posts
**Status:** Index stub + one sample `.md` file
**Needs your input:**
- [ ] Do you want markdown-based blog posts (MDX/gray-matter) or a CMS (e.g. Contentlayer, Sanity)?
- [ ] First 2–3 real blog post topics or drafts to publish
- [ ] For each post:
  - Title
  - Slug (URL-friendly, e.g. `what-is-ai-strategy`)
  - Author name
  - Publish date
  - Cover image (optional)
  - Full content (markdown)
- [ ] Blog categories / tags (optional)

---

### 4. `/contact` — Contact Page
**Status:** Stub only
**Needs your input:**
- [ ] Real contact email address
- [ ] Phone number (optional)
- [ ] Office address / location (optional)
- [ ] Calendly link or booking URL for "Book a discovery call" button
- [ ] Which form fields do you want? (e.g. Name, Email, Company, Message, Budget range?)
- [ ] Where should form submissions go? Options:
  - Email via a service (Resend, SendGrid, Nodemailer)
  - Third-party form (Formspree, Tally, Typeform embed)
  - CRM integration (HubSpot, etc.)

---

### 5. Global / Branding
**Needs your input:**
- [ ] **Logo** — do you have a logo file (SVG/PNG)? Currently using text `ValueTrustAI`
- [ ] **Tagline** — confirm final tagline (currently using: *"Intelligence you can act on."*)
- [ ] **Brand colors** — confirm primary color (currently using Indigo). Any specific hex codes?
- [ ] **Favicon** — custom favicon or generate from logo?
- [ ] **Google Analytics / tracking ID** — if you want analytics added
- [ ] **Domain name** — for meta tags and canonical URLs (e.g. `valuetrustai.com`)

---

### 6. SEO & Meta
**Status:** Basic metadata set up on home page
**To do (after content is finalised):**
- [ ] Unique `title` + `description` per page
- [ ] Open Graph images for social sharing
- [ ] `sitemap.xml` and `robots.txt`

---

### 7. Deployment
**Status:** Not yet deployed
**Needs your input:**
- [ ] Hosting preference:
  - **Vercel** (recommended — native Next.js, free tier available)
  - Netlify
  - Self-hosted / VPS
- [ ] Domain already purchased? If yes, where (GoDaddy, Namecheap, Cloudflare)?
- [ ] Environment variables needed (e.g. contact form API keys, analytics)

---

## 📋 Quick Input Checklist (share these and I'll build)

| Item | Status |
|---|---|
| Final services list (names + descriptions) | ⏳ Needed |
| Company story / mission | ⏳ Needed |
| Team members (name, role, bio, photo) | ⏳ Needed |
| Contact email + booking link | ⏳ Needed |
| Logo file | ⏳ Needed |
| Confirmed tagline | ⏳ Needed |
| Brand colors / hex codes | ⏳ Needed |
| Blog post drafts (at least 1–2) | ⏳ Needed |
| Domain name | ⏳ Needed |
| Hosting preference | ⏳ Needed |
| Contact form destination | ⏳ Needed |
| Analytics tracking ID | ⏳ Optional |
| Partner / credential logos | ⏳ Optional |

---

## 🗂 Build Order (recommended)

1. **Services page** — high visibility, links from home page CTA
2. **Contact page** — needed to capture leads immediately
3. **About page** — builds trust and brand
4. **Blog** — set up parser + first 2 posts
5. **SEO + meta** — once all content is final
6. **Deploy to Vercel** — go live

