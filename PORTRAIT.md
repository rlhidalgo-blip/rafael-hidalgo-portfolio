# Dropping in your real portrait

The hero currently renders a placeholder frame (dashed border, "PORTRAIT
PLACEHOLDER" label) exactly where your photo will go. I built the full
composition around this placeholder so nothing else has to change once
you swap it in — I just haven't been able to see the actual photo yet
(both upload attempts came through as empty files), so I can't safely
invent or alter your likeness from a description alone.

## What to send

Re-upload the portrait in a normal message (not pasted as a code block or
file reference) so I can actually see the pixels. PNG or JPG, highest
resolution you have.

## What I'll do with it once I can see it

1. Crop/reframe as needed for the hero's 3:4 zone.
2. If the background isn't already close to solid black, isolate you from
   it (background removal) so you merge into the dark canvas the way the
   reference composition does, instead of sitting in an obvious rectangle.
3. Apply a duotone/high-contrast treatment consistent with the site's
   black/red/bone palette.
4. Position it so it overlaps the "TRAINING" wordmark the way the hero
   was designed, and wire it in as a `next/image` for automatic
   optimization.

## In the meantime

Everything else — layout, motion, content, data structure — works and can
be reviewed right now with the placeholder in place. This isn't blocking
anything except the final hero polish.

## Manual fallback

If you'd rather do the photo prep yourself: export a PNG with a
transparent or solid-black background, drop it at
`/public/images/portrait.png`, and replace the placeholder `<div>` in
`components/sections/Hero.tsx` with:

```tsx
import Image from "next/image";

<Image
  src="/images/portrait.png"
  alt="Rafael L. Hidalgo"
  width={800}
  height={1067}
  priority
  className="h-full w-full object-cover"
/>
```
