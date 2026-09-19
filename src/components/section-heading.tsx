import { cn } from "@/lib/utils";

export function SectionHeading({
  kicker,
  title,
  lede,
  className,
}: {
  kicker?: string;
  title: string;
  lede?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {kicker ? (
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-sage">{kicker}</p>
      ) : null}
      <h2 className="text-3xl sm:text-4xl">{title}</h2>
      {lede ? <p className="mt-3 text-lg text-muted">{lede}</p> : null}
    </div>
  );
}
