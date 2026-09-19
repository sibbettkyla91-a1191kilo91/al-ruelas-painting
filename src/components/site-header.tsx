import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mark } from "@/components/mark";
import { hasPhone, nav, site, telHref } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/90 backdrop-blur-md">
      {hasPhone() ? (
        <div className="bg-forest text-canvas">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-1.5 text-sm sm:px-6">
            <p className="truncate">{site.tagline}</p>
            <a href={telHref()} className="inline-flex items-center gap-1.5 font-semibold">
              <Phone className="size-3.5" />
              {site.phoneLabel || site.phone}
            </a>
          </div>
        </div>
      ) : null}

      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-2.5 text-ink" onClick={() => setOpen(false)}>
          <Mark />
          <span className="leading-tight">
            <span className="font-display block text-lg tracking-tight">{site.name}</span>
            <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-sage">
              {site.shortLocation}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-semibold text-ink/80 hover:text-ink"
              activeProps={{ className: "text-sm font-semibold text-sage" }}
            >
              {item.label}
            </Link>
          ))}
          <Button asChild>
            <Link to="/contact">Get a free estimate</Link>
          </Button>
        </nav>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full border border-line lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "border-t border-line bg-paper px-4 py-4 lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav className="flex flex-col gap-1" aria-label="Mobile">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-xl px-3 py-3 text-base font-semibold"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Button asChild className="mt-2 w-full">
            <Link to="/contact" onClick={() => setOpen(false)}>
              Get a free estimate
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
