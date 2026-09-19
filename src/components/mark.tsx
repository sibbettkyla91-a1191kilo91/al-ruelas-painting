import { cn } from "@/lib/utils";

export function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={cn("size-9 shrink-0 text-sage", className)}
      aria-hidden="true"
    >
      <rect width="40" height="40" rx="10" fill="currentColor" />
      <path
        d="M12 26.5c4.2-1 7.2-6.4 8.6-11.2.5-1.6 2.6-1.5 3 .2 1.2 4.8 3.6 9.8 8.4 10.8"
        fill="none"
        stroke="#F4F0E8"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <circle cx="20" cy="13" r="2.1" fill="#F4F0E8" />
    </svg>
  );
}
