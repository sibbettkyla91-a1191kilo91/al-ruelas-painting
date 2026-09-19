import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/lib/site";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
  head: () => ({
    meta: [{ title: `Privacy | ${site.name}` }],
  }),
});

function PrivacyPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
      <h1 className="text-4xl">Privacy</h1>
      <p className="mt-4 text-muted">
        Estimate requests collect your name, contact information, and project notes so {site.name} can follow up.
        We don't sell that information. Until an email inbox is connected, submissions are validated on the
        server and may be stored in your browser for confirmation only.
      </p>
    </main>
  );
}
