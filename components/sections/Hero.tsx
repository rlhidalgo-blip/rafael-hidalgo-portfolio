"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { profile } from "@/data/profile";

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const fadeUp = (delay: number) =>
    reduceMotion
      ? { initial: false }
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
        };

  return (
    <section
      id="top"
      className="relative overflow-hidden px-6 pb-8 pt-16 sm:px-10 md:pt-20"
    >
      {/* Corner label */}
      <div className="pointer-events-none relative z-20 ml-[11%] mb-6 font-mono text-[0.65rem] leading-tight tracking-label text-muted md:mb-2">
        <p>COMPUTER SCIENCE</p>
        <p>ARTIFICIAL INTELLIGENCE</p>
      </div>

      {/* ---------- MOBILE composition ---------- */}
      <div className="relative z-10 mx-auto flex flex-col items-center pb-8 pt-2 text-center md:hidden">
        <span
          aria-hidden
          className="-mb-[6%] select-none font-display text-[24vw] font-black uppercase leading-[0.8] text-signal"
        >
          {profile.heroWord}
        </span>

        <div className="relative z-10 aspect-[3/4] w-[74vw] max-w-xs">
          <Image
            src="/images/portrait.png"
            alt="Rafael L. Hidalgo"
            fill
            priority
            sizes="75vw"
            className="object-cover object-top"
          />
        </div>

        <p className="-mt-3 font-mono text-xs tracking-label text-signal">
          CURRENTLY, I&apos;M
        </p>
        <h1 className="relative z-20 -mt-1 font-display text-4xl font-black uppercase leading-[0.9] text-bone">
          {profile.firstName}
          <br />
          {profile.lastName}
        </h1>
        <p className="mt-3 text-xs font-semibold text-signal">
          {profile.role}
        </p>
        <p className="mt-4 max-w-xs text-xs text-muted">{profile.heroBlurb}</p>

        <div className="mt-8 w-full space-y-1.5 border-t border-bone/10 pt-5">
          {profile.status.map((row) => (
            <div
              key={row.label}
              className="flex justify-center gap-4 font-mono text-xs tracking-label"
            >
              <span className="text-muted">{row.label}</span>
              <span className="text-bone">{row.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ---------- DESKTOP composition ---------- */}
      <div className="relative z-10 mx-auto hidden max-w-content md:block md:h-[74vh] md:min-h-[560px]">
        {/* Layer 0 — oversized wordmark */}
        <motion.span
          {...fadeUp(0.5)}
          aria-hidden
          className="pointer-events-none absolute left-[0.10%] top-[8%] z-0 select-none whitespace-nowrap font-display text-[10.5vw] font-black uppercase leading-none text-signal lg:text-[8vw]"
        >
          RAFAEL
          <br />
          HIDALGO
        </motion.span>

        {/* Layer 1 — portrait, breaking through the wordmark */}
        <motion.div
          {...fadeUp(0.25)}
          className="absolute left-[65%] top-[1%] z-10 aspect-[3/4] w-[27vw] max-w-lg"
        >
          <Image
            src="/images/portrait.png"
            alt="Rafael L. Hidalgo"
            
            fill
            priority
            sizes="30vw"
            className="object-cover object-top"
          />
        </motion.div>

        {/* Layer 2 — identity block, lower-left */}
        <motion.div
          {...fadeUp(0.4)}
          className="absolute bottom-[12%] left-0 z-20 w-[45%] min-w-[260px]"
        >
          <p className="font-mono text-xs tracking-label text-signal">
            CURRENTLY &apos;
          </p>
          <h1 className="mt-1 font-display text-6xl font-black uppercase leading-[0.88] text-bone lg:text-7xl">
            {profile.heroWord}
          </h1>
          <p className="mt-3 text-sm font-semibold text-signal">
            {profile.role}
          </p>
          <p className="mt-3 max-w-xs text-sm text-muted">
            {profile.heroBlurb}
          </p>
        </motion.div>

        {/* Layer 3 — status metadata, lower-right */}
        <motion.div
          {...fadeUp(0.55)}
          className="absolute bottom-[6%] right-0 z-20 space-y-1.5 text-right"
        >
          {profile.status.map((row) => (
            <div
              key={row.label}
              className="flex justify-end gap-4 font-mono text-xs tracking-label"
            >
              <span className="text-muted">{row.label}</span>
              <span className="text-bone">{row.value}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
