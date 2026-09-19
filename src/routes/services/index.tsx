import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { services, site } from "@/lib/site";

export const Route = createFileRoute("/services/")({
  component: ServicesIndex,
  head: () => ({
    meta: [
      { title: `Services | ${site.name}` },
      {
        name: "description",
        content: "Interior and exterior residential painting, prep, trim, and color help in Albany, Oregon.",
      },
    ],
  }),
});

function ServicesIndex() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <SectionHeading
        kicker="Services"
        title="What we take on."
        lede="Residential interiors and exteriors. If a job is outside this list, ask — we'll say so."
      />
      <div className="mt-10 grid gap-6">
        {services.map((s) => (
          <article key={s.slug} className="grid overflow-hidden rounded-2xl bg-canvas ring-1 ring-line md:grid-cols-2">
            <img src={s.image} alt={s.imageAlt} className="h-64 w-full object-cover md:h-full" />
            <div className="flex flex-col justify-center p-6 sm:p-8">
              <h2 className="text-3xl">{s.title}</h2>
              <p className="mt-3 text-muted">{s.summary}</p>
              <Button asChild className="mt-6 self-start">
                <Link to="/services/$slug" params={{ slug: s.slug }}>
                  Learn more
                </Link>
              </Button>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
