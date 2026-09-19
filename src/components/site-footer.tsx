import { Link } from "@tanstack/react-router";
import { Mark } from "@/components/mark";
import { Button } from "@/components/ui/button";
import { hasEmail, hasPhone, mailHref, nav, services, site, telHref } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-forest text-canvas">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2.5">
            <Mark className="text-sage" />
            <span className="font-display text-xl">{site.name}</span>
          </div>
          <p className="mt-3 text-sm text-cream/80">{site.tagline}</p>
          <Button asChild className="mt-5" variant="clay">
            <Link to="/contact">Request an estimate</Link>
          </Button>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cream/60">Visit</p>
          <ul className="mt-3 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="hover:text-cream">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cream/60">Services</p>
          <ul className="mt-3 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link to="/services/$slug" params={{ slug: s.slug }} className="hover:text-cream">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cream/60">Contact</p>
          <ul className="mt-3 space-y-2 text-sm text-cream/85">
            <li>{site.shortLocation}</li>
            {hasPhone() ? (
              <li>
                <a href={telHref()}>{site.phoneLabel || site.phone}</a>
              </li>
            ) : (
              <li>Phone — add in site details</li>
            )}
            {hasEmail() ? (
              <li>
                <a href={mailHref()}>{site.email}</a>
              </li>
            ) : (
              <li>Email — add in site details</li>
            )}
            {site.licenseNumber ? (
              <li>
                {site.licenseLabel} {site.licenseNumber}
              </li>
            ) : null}
          </ul>
        </div>
      </div>
      <div className="border-t border-canvas/10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4 text-xs text-cream/60 sm:px-6">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <Link to="/privacy" className="hover:text-cream">
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
}
