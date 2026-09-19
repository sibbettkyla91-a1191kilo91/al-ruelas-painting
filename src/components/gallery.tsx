import { X } from "lucide-react";
import { useEffect, useState } from "react";
import type { GalleryItem } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Gallery({ items }: { items: GalleryItem[] }) {
  const [active, setActive] = useState<GalleryItem | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <>
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <li key={item.src}>
            <button
              type="button"
              onClick={() => setActive(item)}
              className="group relative block w-full overflow-hidden rounded-2xl text-left"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="aspect-4/3 w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                loading="lazy"
              />
              <span className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-ink/70 to-transparent p-3 text-sm text-canvas">
                <span>{item.caption}</span>
                <span className="rounded-full bg-ink/50 px-2 py-0.5 text-xs">{item.category}</span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      {active ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={active.caption}
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            className="absolute top-4 right-4 inline-flex size-11 items-center justify-center rounded-full bg-canvas text-ink"
            aria-label="Close"
            onClick={() => setActive(null)}
          >
            <X className="size-5" />
          </button>
          <figure
            className={cn("max-h-[90vh] max-w-4xl")}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={active.src}
              alt={active.alt}
              className="max-h-[80vh] w-full rounded-2xl object-contain"
            />
            <figcaption className="mt-3 text-center text-sm text-cream">
              {active.caption}
              {active.placeholder ? " · Placeholder photo until job photos are added" : ""}
            </figcaption>
          </figure>
        </div>
      ) : null}
    </>
  );
}
