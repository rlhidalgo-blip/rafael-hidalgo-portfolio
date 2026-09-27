import SectionHeading from "@/components/ui/SectionHeading";
import NumberedItem from "@/components/ui/NumberedItem";
import { education, organizations } from "@/data/education";

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-content px-6 py-24 sm:px-10">
      <SectionHeading eyebrow="BACKGROUND" title="Education" />

      <div className="mt-4 grid grid-cols-1 gap-12 md:grid-cols-2">
        <div>
          <p className="mb-2 font-mono text-xs tracking-label text-muted">
            EDUCATION
          </p>
          {education.map((entry, i) => (
            <NumberedItem
              key={entry.institution}
              number={String(i + 1).padStart(2, "0")}
              title={entry.institution}
              subtitle={entry.program}
              detail={entry.detail}
            />
          ))}
        </div>

        <div>
          <p className="mb-2 font-mono text-xs tracking-label text-muted">
            ORGANIZATIONS
          </p>
          {organizations.map((entry, i) => (
            <NumberedItem
              key={entry.name}
              number={String(i + 1).padStart(2, "0")}
              title={entry.name}
              subtitle={entry.role}
              detail={entry.detail}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
