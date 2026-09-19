import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { estimateSchema, type EstimateInput } from "@/lib/estimate";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const empty: EstimateInput = {
  name: "",
  email: "",
  phone: "",
  propertyType: "House",
  job: "Interior",
  scope: "Not sure",
  contactMethod: "Either",
  message: "",
};

export function EstimateForm() {
  const [values, setValues] = useState<EstimateInput>(empty);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [note, setNote] = useState("");

  function field<K extends keyof EstimateInput>(key: K, value: EstimateInput[K]) {
    setValues((v) => ({ ...v, [key]: value }));
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const parsed = estimateSchema.safeParse(values);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const k = String(issue.path[0] ?? "form");
        if (!next[k]) next[k] = issue.message;
      }
      setErrors(next);
      setStatus("idle");
      return;
    }
    setErrors({});
    setStatus("sending");
    try {
      const res = await fetch("/api/estimate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const json = (await res.json()) as { ok?: boolean; delivery?: string; error?: string };
      if (!res.ok || !json.ok) {
        setStatus("error");
        setNote(json.error || "Something went wrong. Try again, or call when a number is posted.");
        return;
      }
      try {
        const prev = JSON.parse(localStorage.getItem("als-painting-estimates") || "[]") as unknown[];
        localStorage.setItem(
          "als-painting-estimates",
          JSON.stringify([{ at: new Date().toISOString(), ...parsed.data }, ...prev].slice(0, 20)),
        );
      } catch {
        /* ignore */
      }
      setStatus("ok");
      setNote(
        json.delivery === "forwarded"
          ? "Thanks — your estimate request is in. We'll be in touch."
          : "Thanks. Your details were saved. Until a phone or inbox is connected on this site, screenshot this page or follow up once contact info is posted.",
      );
      setValues(empty);
    } catch {
      setStatus("error");
      setNote("Network error. Check your connection and try again.");
    }
  }

  if (status === "ok") {
    return (
      <div className="rounded-2xl border border-line bg-canvas p-6" role="status">
        <h3 className="font-display text-2xl">Request received</h3>
        <p className="mt-2 text-muted">{note}</p>
        <Button className="mt-4" type="button" variant="ghost" onClick={() => setStatus("idle")}>
          Send another
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4" noValidate>
      <Field label="Name" error={errors.name}>
        <input
          className={inputClass}
          name="name"
          autoComplete="name"
          value={values.name}
          onChange={(e) => field("name", e.target.value)}
          required
        />
      </Field>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Email" error={errors.email}>
          <input
            className={inputClass}
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => field("email", e.target.value)}
            required
          />
        </Field>
        <Field label="Phone" error={errors.phone}>
          <input
            className={inputClass}
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => field("phone", e.target.value)}
            required
          />
        </Field>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Property">
          <select
            className={inputClass}
            value={values.propertyType}
            onChange={(e) => field("propertyType", e.target.value as EstimateInput["propertyType"])}
          >
            <option>House</option>
            <option>Townhome / condo</option>
            <option>Other</option>
          </select>
        </Field>
        <Field label="Interior or exterior">
          <select
            className={inputClass}
            value={values.job}
            onChange={(e) => field("job", e.target.value as EstimateInput["job"])}
          >
            <option>Interior</option>
            <option>Exterior</option>
            <option>Both</option>
            <option>Not sure yet</option>
          </select>
        </Field>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="About how much">
          <select
            className={inputClass}
            value={values.scope}
            onChange={(e) => field("scope", e.target.value as EstimateInput["scope"])}
          >
            <option>1–2 rooms</option>
            <option>Several rooms</option>
            <option>Whole interior</option>
            <option>Partial exterior</option>
            <option>Full exterior</option>
            <option>Not sure</option>
          </select>
        </Field>
        <Field label="Preferred contact">
          <select
            className={inputClass}
            value={values.contactMethod}
            onChange={(e) => field("contactMethod", e.target.value as EstimateInput["contactMethod"])}
          >
            <option>Either</option>
            <option>Phone</option>
            <option>Email</option>
          </select>
        </Field>
      </div>
      <Field label="Address and notes">
        <textarea
          className={cn(inputClass, "min-h-28 resize-y")}
          value={values.message}
          onChange={(e) => field("message", e.target.value)}
          placeholder="Street, rooms or sides of the house, timing, peeling paint, color ideas…"
        />
      </Field>
      {status === "error" ? (
        <p className="text-sm text-clay" role="alert">
          {note}
        </p>
      ) : (
        <p className="text-sm text-muted">
          {site.estimateEndpoint
            ? "We'll use this to schedule a look at the house."
            : "The form is live. Connect an inbox in site settings when you're ready to receive these by email."}
        </p>
      )}
      <Button type="submit" variant="forest" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send estimate request"}
      </Button>
    </form>
  );
}

const inputClass =
  "mt-1 w-full rounded-xl border border-line bg-canvas px-3 py-2.5 text-ink outline-none focus:border-sage";

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block text-sm font-semibold">
      {label}
      {children}
      {error ? (
        <span className="mt-1 block font-normal text-clay" role="alert">
          {error}
        </span>
      ) : null}
    </label>
  );
}
