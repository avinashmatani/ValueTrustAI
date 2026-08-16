# ValueTrustAI — Project Handover

> **Date:** 2026-08-16
> **Status:** Site built, styled, and SEO-optimised. Ready for final content and deployment.

This document serves as a checkpoint for the next developer or AI agent picking up the ValueTrustAI website build.

---

## 🏗️ What has been built so far

1. **Framework & Stack:** Next.js 15 (App Router), React, Tailwind CSS v4, TypeScript.
2. **Global Layout:** Sticky header with mobile navigation; clean footer. Global SEO metadata is configured (`metadataBase` set).
3. **Design System:** Minimalist, premium agency feel. Uses `Geist` font, crisp `#4f46e5` Indigo accents, and subtle CSS hover states (lifts and shadows). No heavy animations.
4. **Pages Completed:**
   - `/` (Home): Hero, services grid, approach, CTA.
   - `/services`: Detailed breakdown of 4 service offerings, who they are for, and engagement models.
   - `/about`: Mission, team story, 4-phase approach, company values.
   - `/blog`: Markdown-based blog index.
   - `/blog/[slug]`: Dynamic blog post pages powered by `gray-matter` and `remark-html`.
   - `/contact`: UI built with loading/success/error states.
5. **Backend / API:**
   - `/api/contact`: Next.js API route that accepts POST requests from the contact form, validates the input, and currently logs the output to the server console.

---

## 🚀 Next Steps (Where to pick up)

### 1. Wire the Email Service (Priority)
The contact form works perfectly on the frontend, and the `/api/contact` route validates the data. However, it currently only does a `console.log`. 
- **Task:** Integrate an email service provider (like **Resend**, **SendGrid**, or **Postmark**) into `app/api/contact/route.ts` to actually send emails to `hello@valuetrustai.com`.

### 2. Content Injection
- Replace the placeholder email (`hello@valuetrustai.com`) if a different one is preferred.
- Update the placeholder stats on the `/about` page.
- Add real team member names/bios to the `/about` page if desired.
- Provide a real Open Graph image (replace `/og-image.jpg` in the `public` folder).

### 3. SEO Finalisation
- Create `app/sitemap.ts` to auto-generate `sitemap.xml`.
- Create `app/robots.ts` to generate `robots.txt`.
- Add Google Analytics or Plausible script to `app/layout.tsx`.

### 4. Deployment
- The site is ready to be deployed. **Vercel** is highly recommended. 
- You will need to add environment variables (e.g., `RESEND_API_KEY`) to the hosting provider once the contact form is wired.

---

## 📝 Notes for Agents
- **Next.js 15:** This project uses Next.js 15. Ensure you await `params` in dynamic routes (e.g., `const { slug } = await props.params;` in `/blog/[slug]/page.tsx`).
- **Tailwind v4:** This project uses Tailwind CSS v4. There is no `tailwind.config.ts`. Configuration is done via CSS variables in `app/globals.css`. Plugins are imported via `@plugin` directives.
- See `todo.md` for a granular checklist of tasks.
