# ValueTrustAI — Website TODO

> Last updated: 2026-08-16 (session 4)
> Track progress by changing `[ ]` to `[x]` when complete.

---

## ✅ Completed

- [x] Next.js 15 project scaffolded (TypeScript, Tailwind v4, App Router, ESLint)
- [x] Global layout — sticky Header with hamburger menu, Footer with nav + contact
- [x] Home page — Hero, Services overview, How We Work (3-step), CTA banner
- [x] Stub pages created — `/services`, `/about`, `/blog`, `/blog/[slug]`, `/contact`
- [x] Repo pushed to GitHub → `github.com/avinashmatani/ValueTrustAI` (private)
- [x] `/services` — Full Services page (4 services, bullet points, "Who this is for", engagement models, CTA)
- [x] `/about` — Mission, Team Story + stat cards, 4-phase Approach, 5 Values, CTA
- [x] `/contact` — Lead form (Name, Email, Company, Message), spinner, success state, scoped metadata layout

---

## 🔲 Still to Do

### 1. `/blog` — Blog Index + Posts
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

### 2. Contact form — wire to real email service
**Status:** Logs to console; ready to wire
**Options (pick one):**
- [ ] **Resend** — recommended, simple API, free tier (100 emails/day)
- [ ] **Formspree** — no backend needed, just a POST URL
- [ ] **SendGrid** — enterprise-grade, more setup
- [ ] **Calendly embed** — replace or supplement the form

---

### 3. Global / Branding
**Needs your input:**
- [ ] **Logo** — do you have a logo file (SVG/PNG)? Currently using text `ValueTrustAI`
- [ ] **Tagline** — confirm final tagline (currently: *"Intelligence you can act on."*)
- [ ] **Brand colors** — confirm primary color (currently Indigo). Any specific hex codes?
- [ ] **Favicon** — custom favicon or generate from logo?
- [ ] **Google Analytics ID** — if you want analytics
- [ ] **Domain name** — for meta tags and canonical URLs (e.g. `valuetrustai.com`)

---

### 4. SEO & Meta
**Status:** `title` + `description` set on all pages built so far
**Remaining:**
- [ ] Open Graph images for social sharing
- [ ] `sitemap.xml` and `robots.txt`

---

### 5. Deployment
**Status:** Not yet deployed
**Needs your input:**
- [ ] Hosting preference:
  - **Vercel** ← recommended (native Next.js, free tier, one-command deploy)
  - Netlify
  - Self-hosted / VPS
- [ ] Domain already purchased? If yes, where (GoDaddy, Namecheap, Cloudflare)?
- [ ] Environment variables needed once contact form is wired (e.g. `RESEND_API_KEY`)

---

## 📋 Quick Input Checklist

| Item | Status |
|---|---|
| ~~Final services list~~ | ✅ Done |
| ~~Company story / mission~~ | ✅ Done |
| ~~Team narrative~~ | ✅ Done |
| ~~Contact form (fields + UI)~~ | ✅ Done |
| Contact form destination (email service) | ⏳ Needed |
| Contact email address | ⏳ Needed |
| Calendly / booking link | ⏳ Needed |
| Blog post drafts (at least 1–2) | ⏳ Needed |
| Logo file | ⏳ Needed |
| Confirmed tagline | ⏳ Needed |
| Brand colors / hex codes | ⏳ Needed |
| Domain name | ⏳ Needed |
| Hosting preference | ⏳ Needed |
| Analytics tracking ID | ⏳ Optional |
| Partner / credential logos | ⏳ Optional |
| Real team member bios + photos | ⏳ Optional |

---

## 🗂 Build Order

1. ~~**Services page**~~ ✅ Done
2. ~~**About page**~~ ✅ Done
3. ~~**Contact page**~~ ✅ Done
4. **Blog** — set up markdown parser + first 2 posts ← next up
5. **Wire contact form** — to email service once you choose one
6. **SEO** — Open Graph images, sitemap, robots.txt
7. **Deploy to Vercel** — go live
