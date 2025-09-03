import { cva } from "class-variance-authority";
import clsx from "clsx";

const button = cva(
  "inline-flex items-center justify-center rounded-2xl font-semibold transition focus:outline-none focus:ring-4",
  {
    variants: {
      variant: {
        primary: "bg-brand-green text-white hover:opacity-90 focus:ring-white/40",
        secondary: "border border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white",
        ghost: "text-brand-blue hover:underline"
      },
      size: { sm: "px-4 py-2 text-sm", md: "px-6 py-3", lg: "px-7 py-3.5 text-lg" }
    },
    defaultVariants: { variant: "primary", size: "md" }
  }
);

export function Button({ variant, size, className, ...props }) {
  return <button className={clsx(button({ variant, size }), className)} {...props} />;
}
