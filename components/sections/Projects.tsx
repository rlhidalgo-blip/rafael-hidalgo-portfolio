import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-content px-6 py-24 sm:px-10">
      <SectionHeading eyebrow="SELECTED WORK" title="Projects" />

      <div className="mt-4">
        {projects.map((project) => (
          <article
            key={project.number}
            className="group grid grid-cols-1 gap-6 border-t border-bone/10 py-10 md:grid-cols-[6rem_1fr_1fr] md:gap-10"
          >
            <span className="font-mono text-sm text-signal">
              {project.number}
            </span>

            <div>
              <h3 className="font-display text-2xl uppercase leading-tight text-bone transition-colors group-hover:text-signal sm:text-3xl">
                {project.name}
              </h3>
              <p className="mt-2 font-mono text-xs tracking-label text-muted">
                {project.type} — {project.year}
              </p>
            </div>

            <div>
              <p className="text-sm text-muted sm:text-base">
                {project.description}
              </p>
              <div className="mt-4 flex gap-4 font-mono text-xs tracking-label">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-bone underline decoration-signal underline-offset-4"
                  >
                    GITHUB
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="text-bone underline decoration-signal underline-offset-4"
                  >
                    LIVE
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
