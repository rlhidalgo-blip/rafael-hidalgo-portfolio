import Link from "next/link";
import { profile } from "@/data/profile";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-bone/10 bg-void/80 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-4 sm:px-10">
        <Link
          href="#top"
          className="font-mono text-sm tracking-label text-bone"
        >
          {profile.firstName.toUpperCase()}.{profile.lastName[0]}
        </Link>
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-xs tracking-label text-muted transition-colors hover:text-bone"
              >
                {link.label.toUpperCase()}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={profile.links.resume}
          className="font-mono text-xs tracking-label text-bone underline decoration-signal underline-offset-4"
        >
          RESUME
        </a>
      </nav>
    </header>
  );
}
