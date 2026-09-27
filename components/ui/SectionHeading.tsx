import { cn } from "@/lib/utils";

export default function SectionHeading({
  eyebrow,
  title,
  action,
  className,
}: {
  eyebrow?: string;
  title: string;
  action?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-end justify-between gap-6 border-b border-bone/10 pb-6",
        className
      )}
    >
      <div>
        {eyebrow && (
          <p className="mb-2 font-mono text-xs tracking-label text-signal">
            {eyebrow}
          </p>
        )}
        <h2 className="font-display text-3xl uppercase leading-none text-bone sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </div>
      {action && <div className="hidden shrink-0 sm:block">{action}</div>}
    </div>
  );
}
