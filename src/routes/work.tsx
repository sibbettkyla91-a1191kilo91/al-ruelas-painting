import { createFileRoute } from "@tanstack/react-router";
import { Gallery } from "@/components/gallery";
import { SectionHeading } from "@/components/section-heading";
import { gallery, site } from "@/lib/site";

export const Route = createFileRoute("/work")({
  component: WorkPage,
  head: () => ({
    meta: [
      { title: `Our Work | ${site.name}` },
      {
        name: "description",
        content: "Sample photography and a gallery ready for real interior and exterior painting jobs in Albany, Oregon.",
      },
    ],
  }),
});

function WorkPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <SectionHeading
        kicker="Our work"
        title="A gallery built for real job photos."
        lede="Until Al's Painting adds completed projects, these are style samples — not claimed jobs. Click any photo to open it."
      />
      <div className="mt-10">
        <Gallery items={gallery} />
      </div>
    </main>
  );
}
