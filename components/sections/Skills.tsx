import SectionHeading from "@/components/ui/SectionHeading";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-content px-6 py-24 sm:px-10">
      <SectionHeading eyebrow="TOOLKIT" title="Skills" />

      <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-3">
        {skillCategories.map((group) => (
          <div key={group.category}>
            <h3 className="font-mono text-xs tracking-label text-muted">
              {group.category.toUpperCase()}
            </h3>
            {group.items.length > 0 ? (
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="font-display text-xl uppercase leading-tight text-bone sm:text-2xl"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 text-sm italic text-muted">
                {group.placeholder}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
