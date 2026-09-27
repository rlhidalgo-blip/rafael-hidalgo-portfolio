import { profile } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-content px-6 py-24 sm:px-10">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_2fr]">
        <p className="font-mono text-xs tracking-label text-signal">
          ABOUT
        </p>
        <p className="max-w-2xl text-xl leading-relaxed text-bone sm:text-2xl">
          {profile.aboutParagraph}
        </p>
      </div>
    </section>
  );
}
