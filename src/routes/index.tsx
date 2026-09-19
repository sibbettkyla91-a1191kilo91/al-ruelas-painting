import { createFileRoute, Link } from "@tanstack/react-router";
import { EstimateForm } from "@/components/estimate-form";
import { Gallery } from "@/components/gallery";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { gallery, processSteps, services, site } from "@/lib/site";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: `${site.name} | Interior & Exterior Painting in Albany, Oregon` },
      { name: "description", content: site.description },
    ],
  }),
});

function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HousePainter",
    name: site.name,
    alternateName: site.legalName,
    description: site.description,
    areaServed: {
      "@type": "City",
      name: "Albany",
      addressRegion: "OR",
    },
    ...(site.phone ? { telephone: site.phone } : {}),
    ...(site.email ? { email: site.email } : {}),
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative overflow-hidden px-4 pb-20 pt-12 sm:px-6 sm:pt-16 lg:min-h-[86vh] lg:pb-24 lg:pt-20">
        <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden>
          <img
            src="/images/interior-living.jpg"
            alt=""
            className="absolute top-10 left-6 h-52 w-40 rounded-2xl object-cover opacity-95 shadow-lg"
          />
          <img
            src="/images/hero-craftsman.jpg"
            alt=""
            className="absolute bottom-16 left-10 h-40 w-52 rounded-2xl object-cover opacity-95 shadow-lg"
          />
          <img
            src="/images/interior-bedroom.jpg"
            alt=""
            className="absolute top-12 right-8 h-44 w-36 rounded-2xl object-cover opacity-95 shadow-lg"
          />
          <img
            src="/images/exterior-ranch.jpg"
            alt=""
            className="absolute right-10 bottom-14 h-48 w-44 rounded-2xl object-cover opacity-95 shadow-lg"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-2xl rounded-3xl bg-paper/80 px-4 py-10 text-center backdrop-blur-sm lg:bg-paper/70">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-sage">
            Albany · Interior & exterior
          </p>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl">Paint that looks right on an Oregon house.</h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted">{site.description}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg">
              <Link to="/contact">Request a free estimate</Link>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <Link to="/services">View our services</Link>
            </Button>
          </div>
        </div>

        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-3 gap-2 lg:hidden">
          {gallery.slice(0, 3).map((g) => (
            <img key={g.src} src={g.src} alt={g.alt} className="aspect-3/4 rounded-2xl object-cover" />
          ))}
        </div>
      </section>

      <section className="bg-forest text-canvas">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
          {[
            ["Free estimates", "Walk the job before you decide"],
            ["Interior & exterior", "Rooms, siding, trim, and doors"],
            ["Prep first", "Scrape, sand, caulk, then paint"],
            ["Local to Albany", "Willamette Valley homes"],
          ].map(([t, d]) => (
            <p key={t} className="font-semibold">
              {t}
              <span className="mt-1 block text-sm font-normal text-cream/75">{d}</span>
            </p>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading
          kicker="What we paint"
          title="House painting, done in the right order."
          lede="Most of the work is prep. We scrape, sand, caulk, and prime so the new coat stays put through wet winters and dry summers."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {services.map((s) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="group overflow-hidden rounded-2xl bg-canvas shadow-sm ring-1 ring-line"
            >
              <img
                src={s.image}
                alt={s.imageAlt}
                className="h-52 w-full object-cover transition duration-300 group-hover:scale-[1.03]"
              />
              <div className="p-5">
                <h3 className="text-2xl">{s.title}</h3>
                <p className="mt-2 text-muted">{s.summary}</p>
                <span className="mt-3 inline-block text-sm font-semibold text-sage">Learn more</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-cream/50 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            kicker="How it works"
            title="Five steps. No mystery."
            lede="The point is to take the guesswork out of having painters in the house."
          />
          <ol className="mt-10 grid gap-4 md:grid-cols-5">
            {processSteps.map((step) => (
              <li key={step.n} className="rounded-2xl bg-canvas p-5 ring-1 ring-line">
                <p className="font-display text-2xl text-clay">{step.n}</p>
                <h3 className="mt-2 text-lg">{step.title}</h3>
                <p className="mt-2 text-sm text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading
          kicker="Our work"
          title="How a finished house should look."
          lede="These are sample photographs until real job photos are added. The layout is ready for them."
        />
        <div className="mt-10">
          <Gallery items={gallery} />
        </div>
        <div className="mt-8">
          <Button asChild variant="ghost">
            <Link to="/work">See the full gallery</Link>
          </Button>
        </div>
      </section>

      <section className="bg-cream/50 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <SectionHeading
            kicker="About"
            title="A local painter for Albany houses."
            lede="Al's Painting is a residential painting company based in Albany, Oregon. We take on interior and exterior house painting for homeowners who want careful prep, honest scheduling, and a finish that still looks good next year."
          />
          <ul className="grid gap-4">
            {[
              ["We show up as quoted", "Clear scope, written estimate, and a start date you can plan around."],
              ["Prep is not optional", "Oregon weather finds weak spots. We wash, scrape, sand, and prime."],
              ["Respect for the house", "Drop cloths, clean edges, and a walkthrough at the end."],
            ].map(([t, d]) => (
              <li key={t} className="rounded-2xl bg-canvas p-5 ring-1 ring-line">
                <h3 className="text-xl">{t}</h3>
                <p className="mt-1 text-muted">{d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading
          kicker="Service area"
          title="Albany first."
          lede={site.serviceArea.nearbyNote}
        />
        <p className="mt-6 font-semibold">{site.serviceArea.primary.join(" · ")}</p>
      </section>

      <section id="estimate" className="border-t border-line bg-canvas py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <SectionHeading
              kicker="Estimate"
              title="Tell us about the house."
              lede="A few details now means a better visit later."
            />
            <p className="mt-6 text-muted">
              No invented reviews or awards here. The work should speak — and the estimate should be honest.
            </p>
          </div>
          <EstimateForm />
        </div>
      </section>
    </main>
  );
}
