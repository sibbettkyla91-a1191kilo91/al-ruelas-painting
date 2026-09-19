import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { site } from "@/lib/site";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: `${site.name} | House Painting in ${site.shortLocation}` },
      { name: "description", content: site.description },
      { name: "theme-color", content: "#5A6B4A" },
      { property: "og:title", content: `${site.name} | House Painting in ${site.shortLocation}` },
      { property: "og:description", content: site.description },
      { property: "og:image", content: "/og.jpg" },
      { name: "og:type", content: "website" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Source+Sans+3:wght@400;600;700&display=swap",
      },
    ],
  }),
  component: Root,
  notFoundComponent: NotFound,
});

function Root() {
  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="bg-paper text-ink">
        <SiteLayout>
          <Outlet />
        </SiteLayout>
        <Scripts />
      </body>
    </html>
  );
}

function NotFound() {
  return (
    <main className="mx-auto max-w-xl px-4 py-24 text-center">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-sage">404</p>
      <h1 className="mt-2 text-4xl">That page isn't here.</h1>
      <p className="mt-3 text-muted">Try the menu, or request an estimate from the contact page.</p>
      <a href="/" className="mt-6 inline-block font-semibold text-sage">
        Back home
      </a>
    </main>
  );
}
