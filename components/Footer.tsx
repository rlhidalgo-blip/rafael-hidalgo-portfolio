import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-bone/10">
      <div className="mx-auto max-w-content px-6 py-24 sm:px-10">
        <h2 className="font-display text-4xl uppercase leading-[0.9] text-bone sm:text-6xl md:text-7xl">
          Let&apos;s talk
        </h2>
        <p className="mt-6 max-w-md text-muted">
          Open to conversations, collaboration, or just talking about AI and
          things worth building. Reach out.
        </p>

        <div className="mt-12 flex flex-col gap-4 font-mono text-sm tracking-label sm:flex-row sm:gap-10">
          <a
            href={profile.links.email}
            className="text-bone underline decoration-signal underline-offset-4 hover:text-signal"
          >
            EMAIL
          </a>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="text-bone underline decoration-signal underline-offset-4 hover:text-signal"
          >
            GITHUB
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-bone underline decoration-signal underline-offset-4 hover:text-signal"
          >
            LINKEDIN
          </a>
          <a
            href={profile.links.resume}
            className="text-bone underline decoration-signal underline-offset-4 hover:text-signal"
          >
            RESUME
          </a>
        </div>

        <p className="mt-20 font-mono text-xs tracking-label text-muted">
          © {new Date().getFullYear()} {profile.name.toUpperCase()} — EPOCH 01
        </p>
      </div>
    </footer>
  );
}
