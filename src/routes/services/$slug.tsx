import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { services, site, type ServiceSlug } from "@/lib/site";

export const Route = createFileRoute("/services/$slug")({
  component: ServicePage,
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData!.service.title} | ${site.name}` },
      { name: "description", content: loaderData!.service.summary },
    ],
  }),
});

function ServicePage() {
  const { service } = Route.useLoaderData();
  const others = services.filter((s) => s.slug !== (service.slug as ServiceSlug));

  return (
    <main>
      <section className="relative min-h-[42vh] overflow-hidden">
        <img src={service.image} alt={service.imageAlt} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/75 to-ink/20" />
        <div className="relative mx-auto flex min-h-[42vh] max-w-6xl items-end px-4 pb-10 sm:px-6">
          <div className="max-w-2xl text-canvas">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-cream/80">Service</p>
            <h1 className="mt-2 text-4xl sm:text-5xl">{service.title}</h1>
            <p className="mt-3 text-lg text-cream/90">{service.summary}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="text-2xl">What's included</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
            {service.includes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h2 className="mt-10 text-2xl">Preparation</h2>
          <p className="mt-3 text-muted">{service.prep}</p>
          <h2 className="mt-10 text-2xl">Why it matters</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
            {service.benefits.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <aside className="h-fit rounded-2xl bg-canvas p-6 ring-1 ring-line">
          <h2 className="text-xl">Ready for a look at the house?</h2>
          <p className="mt-2 text-sm text-muted">Free estimates. We'll walk the job before quoting.</p>
          <Button asChild className="mt-4 w-full">
            <Link to="/contact">Request a free estimate</Link>
          </Button>
        </aside>
      </section>

      <section className="border-t border-line py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading kicker="More" title="Other services" />
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {others.map((s) => (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="overflow-hidden rounded-2xl bg-canvas ring-1 ring-line"
              >
                <img src={s.image} alt="" className="h-36 w-full object-cover" />
                <p className="p-4 font-semibold">{s.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
