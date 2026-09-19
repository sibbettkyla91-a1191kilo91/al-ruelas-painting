import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/lib/site";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: `About | ${site.name}` },
      { name: "description", content: site.description },
    ],
  }),
});

function AboutPage() {
  return (
    <main>
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading
            kicker="About"
            title="Local painting, done carefully."
            lede="Al's Painting is a residential painting company in Albany, Oregon. We work on interiors and exteriors for homeowners who want the house treated with respect while the work happens."
          />
          <p className="mt-6 text-muted">
            This page is ready for a real story — years in the trade, who shows up on site, and how Al likes to run a job. Until those details are written, here's the standard we already hold:
          </p>
          <Button asChild className="mt-8">
            <Link to="/contact">Request a free estimate</Link>
          </Button>
        </div>
        <img
          src="/images/hero-craftsman.jpg"
          alt="Craftsman home with cream siding and sage trim"
          className="h-full max-h-[480px] w-full rounded-3xl object-cover"
        />
      </section>
      <section className="bg-cream/50 py-16">
        <div className="mx-auto grid max-w-6xl gap-4 px-4 sm:px-6 md:grid-cols-3">
          {[
            ["Pride in workmanship", "Cut lines, even coats, and a finish that still looks right the next winter."],
            ["Clean job sites", "Protection down before paint goes up. We leave the house looking lived-in, not like a job site."],
            ["Straightforward talk", "If the siding isn't ready, we'll say so. If the timeline slips for weather, you'll hear it early."],
          ].map(([t, d]) => (
            <article key={t} className="rounded-2xl bg-canvas p-6 ring-1 ring-line">
              <h2 className="text-xl">{t}</h2>
              <p className="mt-2 text-muted">{d}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
