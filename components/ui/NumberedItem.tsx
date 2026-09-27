import { cn } from "@/lib/utils";

export default function NumberedItem({
  number,
  title,
  subtitle,
  detail,
  className,
}: {
  number: string;
  title: string;
  subtitle?: string;
  detail?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-[2.5rem_1fr] gap-4 border-t border-bone/10 py-6 first:border-t-0",
        className
      )}
    >
      <span className="font-mono text-sm text-signal">{number}</span>
      <div>
        <h3 className="font-sans text-lg font-semibold text-bone sm:text-xl">
          {title}
        </h3>
        {subtitle && (
          <p className="mt-1 text-sm text-muted sm:text-base">{subtitle}</p>
        )}
        {detail && (
          <p className="mt-1 font-mono text-xs tracking-label text-muted">
            {detail}
          </p>
        )}
      </div>
    </div>
  );
}
