# Rafael L. Hidalgo — Portfolio (EPOCH concept, V1)

Next.js + TypeScript + Tailwind + Framer Motion + Lenis.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## What's real vs. placeholder right now

**Real, from you:**
- Name, education (FEU Institute of Technology, BSCS-AI, expected 2029)
- Organizations (ACM — Member)
- Skills (Languages: Java, Python, JavaScript, SQL / Web: HTML, CSS)
- Bio copy in `data/profile.ts`

**Still placeholder — clearly marked with `TODO` comments:**
- `data/projects.ts` — three neutral project slots (PROJECT 01/02/03),
  ready to receive real project data in the same shape.
- `data/skills.ts` — "Currently Learning" category, empty until you add to it.
- `data/profile.ts` — email / GitHub / LinkedIn / resume links.
- Hero portrait — see `PORTRAIT.md`.

## Editing content

You shouldn't need to touch component files to update text — everything
content-related lives in `/data`. Open the relevant file, edit the
values, save, refresh the browser.

## Next steps (see the implementation plan from the brief)

1. Re-upload the portrait → finalize hero.
2. Send real project details → fill in `data/projects.ts`.
3. Send real email/GitHub/LinkedIn/resume PDF → fill in `data/profile.ts`
   and drop `resume.pdf` into `/public`.
4. Then: responsive pass, performance/SEO pass, deploy to Vercel.
