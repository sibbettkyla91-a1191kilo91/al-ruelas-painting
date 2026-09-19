import { createFileRoute } from "@tanstack/react-router";
import { estimateSchema } from "@/lib/estimate";
import { site } from "@/lib/site";

export const Route = createFileRoute("/api/estimate")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let body: unknown;
        try {
          body = await request.json();
        } catch {
          return Response.json({ ok: false, error: "Invalid JSON." }, { status: 400 });
        }
        const parsed = estimateSchema.safeParse(body);
        if (!parsed.success) {
          return Response.json({ ok: false, error: "Please check the form and try again." }, { status: 400 });
        }

        const endpoint = site.estimateEndpoint;
        if (endpoint) {
          try {
            const forwarded = await fetch(endpoint, {
              method: "POST",
              headers: { "Content-Type": "application/json", Accept: "application/json" },
              body: JSON.stringify(parsed.data),
            });
            if (!forwarded.ok) {
              return Response.json(
                { ok: false, error: "Could not deliver the request. Try again shortly." },
                { status: 502 },
              );
            }
            return Response.json({ ok: true, delivery: "forwarded" });
          } catch {
            return Response.json(
              { ok: false, error: "Could not reach the estimate inbox." },
              { status: 502 },
            );
          }
        }

        return Response.json({ ok: true, delivery: "local" });
      },
    },
  },
});
