import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide transition-colors duration-200 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        clay: "bg-clay text-canvas hover:bg-clay-dark",
        forest: "bg-forest text-canvas hover:bg-ink",
        ghost:
          "border border-line bg-transparent text-ink hover:border-ink hover:bg-canvas",
        light:
          "border border-canvas/40 bg-transparent text-canvas hover:bg-canvas/10",
      },
      size: {
        md: "min-h-11 px-5 py-2.5 text-sm",
        lg: "min-h-12 px-6 py-3 text-base",
      },
    },
    defaultVariants: { variant: "clay", size: "md" },
  },
);

type Props = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean };

export function Button({ className, variant, size, asChild, ...props }: Props) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
}
