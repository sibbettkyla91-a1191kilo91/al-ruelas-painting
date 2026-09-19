import { createFileRoute } from "@tanstack/react-router";
import { EstimateForm } from "@/components/estimate-form";
import { SectionHeading } from "@/components/section-heading";
import { hasEmail, hasPhone, mailHref, site, telHref } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: `Free Estimate | ${site.name}` },
      {
        name: "description",
        content: "Request a free painting estimate in Albany, Oregon. Interior, exterior, or both.",
      },
    ],
  }),
});

function ContactPage() {
  return (
    <main className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-5">
      <div className="lg:col-span-2">
        <SectionHeading
          kicker="Contact"
          title="Request a free estimate."
          lede="Tell us the rooms or sides of the house. We'll look at the surface before quoting."
        />
        <dl className="mt-8 space-y-4 text-sm">
          <div>
            <dt className="font-semibold">Area</dt>
            <dd className="text-muted">{site.shortLocation}</dd>
          </div>
          <div>
            <dt className="font-semibold">Phone</dt>
            <dd className="text-muted">
              {hasPhone() ? <a href={telHref()}>{site.phoneLabel || site.phone}</a> : "Add the number in site details."}
            </dd>
          </div>
          <div>
            <dt className="font-semibold">Email</dt>
            <dd className="text-muted">
              {hasEmail() ? <a href={mailHref()}>{site.email}</a> : "Add the inbox in site details."}
            </dd>
          </div>
          {site.hours ? (
            <div>
              <dt className="font-semibold">Hours</dt>
              <dd className="text-muted">{site.hours}</dd>
            </div>
          ) : null}
        </dl>
      </div>
      <div className="rounded-2xl bg-canvas p-6 ring-1 ring-line lg:col-span-3">
        <EstimateForm />
      </div>
    </main>
  );
}
