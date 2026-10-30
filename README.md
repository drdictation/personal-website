# Associate Professor Chamara Basnayake Website

Premium multi-page Next.js website for a Melbourne-based gastroenterologist, designed to support GP referrals, patient information, and professional credibility without relying on generic medical marketing language.

## Site architecture

- Home
- About
- Conditions
- Procedures
  - Gastroscopy
  - Colonoscopy
- For Patients
- For Referrers
- Research, Leadership & Media
- Contact

## Stack

- Next.js App Router
- React
- TypeScript
- CSS with a custom editorial design system

## Local development

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

Do not open files inside `.next/server/app/` directly. Those are Next.js build artifacts, not standalone web pages, so subpages may appear unstyled or display raw React payload text.

If you want to preview the production build locally instead of the dev server:

```bash
npm run preview
```

Then open `http://127.0.0.1:3000`.

## Content editing

Practice details, professional copy and the agreed referral policy live in `lib/site-content.ts`. Procedure information lives in `lib/procedure-content.ts`.

Verify these items before production launch:

- `siteConfig.siteUrl`
- Current professional appointments, hospital locations and practice contact details
- Referral policy wording with the rooms
- Analytics configuration and the practice's privacy disclosures

## SEO and structured data

- Page metadata is defined per route
- `app/sitemap.ts` and `app/robots.ts` are included
- `components/structured-data.tsx` links the clinician's Person record, practice and services
- `/llms.txt` and `/llms-full.txt` are generated from the same content used by visible pages; edit the shared content instead of maintaining separate text files
- Fonts are downloaded at build time by `next/font` and served locally
- The Next.js-scoped PostCSS override keeps its transitive dependency on a patched 8.x version; review this override when upgrading Next.js

## Deployment to Vercel

1. Push the project to a Git provider supported by Vercel.
2. Create a new Vercel project and import the repository.
3. Set the framework preset to `Next.js`.
4. Add environment variables if needed:
   - `NEXT_PUBLIC_SITE_URL`
   - `NEXT_PUBLIC_ANALYTICS_ID`
5. Deploy. Production builds will run `npm run build`.

## Notes

- No contact forms or online booking are included, per brief.
- Copy is written in third person and avoids testimonials, superiority claims, and outcome promises.
- The codebase is structured so practice details can be maintained from one central content file.
