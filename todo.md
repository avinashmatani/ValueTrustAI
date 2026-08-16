# ValueTrustAI — Website TODO

> Last updated: 2026-08-16 (session 5)
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
- [x] `/contact` — Lead form (Name, Email, Company, Message), spinner, success state
- [x] `/blog` — Markdown blog (gray-matter + remark), index + post pages, typography plugin, first post

---

## 🔲 Still to Do

### 1. Wire contact form to real email service
**Status:** Logs to console only — UI is done
**Pick one:**
- [ ] **Resend** ← recommended (simple API, free tier 100 emails/day, great DX)
- [ ] **Formspree** — no backend needed, just swap `handleSubmit` to POST a URL
- [ ] **SendGrid** — enterprise-grade, more setup required

**Once chosen, also provide:**
- [ ] Real contact email address (where submissions should arrive)
- [ ] Calendly / booking link to embed or link in the contact page

---

### 2. Content updates (swap placeholders with real info)
- [ ] Replace placeholder contact email `hello@valuetrustai.com` with real address
- [ ] Replace stat cards on About page (`50+ projects`, `10+ years`, etc.) with real figures
- [ ] Add real team member bios + photos to About page (currently narrative only)
- [ ] Add Calendly embed or booking link to Contact page
- [ ] Add partner / credential logos if applicable (Microsoft, AWS, Google Cloud, etc.)

---

### 3. Branding
- [ ] **Logo** — SVG/PNG file to replace text `ValueTrustAI` in Header/Footer
- [ ] **Tagline** — confirm or update: currently *"Intelligence you can act on."*
- [ ] **Brand colors** — currently Indigo (#4f46e5). Provide hex codes to change
- [ ] **Favicon** — generate from logo once finalised

---

### 4. Blog — more posts
- [ ] Add 2–3 more real posts to `content/blog/` (just drop `.md` files)
- [ ] Frontmatter schema: `title`, `date` (YYYY-MM-DD), `description`
- [ ] Optional: add `author` field to frontmatter + display on post page

---

### 5. SEO & Meta
**Status:** `title` + `description` + Open Graph tags set on all pages; `metadataBase` configured.
**Remaining:**
- [x] Open Graph tags & `metadataBase` configured (placeholder image set)
- [ ] Replace `/og-image.jpg` with a real image file.
- [ ] `sitemap.xml` — auto-generate with Next.js `app/sitemap.ts`
- [ ] `robots.txt` — add `app/robots.ts`

---

### 6. Analytics
- [ ] Google Analytics 4 tracking ID — add via `next/script` in root layout
- [ ] Or: Plausible / Fathom (privacy-first, simpler)

---

### 7. Deployment
**Status:** Not yet deployed
**Needs your input:**
- [ ] **Vercel** ← recommended (one `vercel` command, free tier, native Next.js)
- [ ] Domain purchased? Where registered? (GoDaddy, Cloudflare, Namecheap)
- [ ] Env vars once form is wired: `RESEND_API_KEY` etc.

---

## 📋 Quick Input Checklist

| Item | Status |
|---|---|
| ~~Final services list~~ | ✅ Done |
| ~~Company story / mission~~ | ✅ Done |
| ~~Contact form (UI)~~ | ✅ Done |
| ~~Blog setup + first post~~ | ✅ Done |
| Contact form destination (email service) | ⏳ Needed |
| Real contact email address | ⏳ Needed |
| Calendly / booking link | ⏳ Needed |
| Logo file (SVG/PNG) | ⏳ Needed |
| Domain name | ⏳ Needed |
| Hosting preference | ⏳ Needed |
| More blog posts (topics or drafts) | ⏳ Needed |
| Real team member bios + photos | ⏳ Optional |
| Confirmed tagline | ⏳ Optional |
| Brand colors / hex codes | ⏳ Optional |
| Analytics tracking ID | ⏳ Optional |
| Partner / credential logos | ⏳ Optional |

---

## 🗂 Build Order

1. ~~**Services page**~~ ✅ Done
2. ~~**About page**~~ ✅ Done
3. ~~**Contact page**~~ ✅ Done
4. ~~**Blog**~~ ✅ Done
5. **Wire contact form** — once email service is chosen ← next decision
6. **SEO** — sitemap, robots.txt, Open Graph images
7. **Deploy to Vercel** — go live
