import { Slot } from "@radix-ui/react-slot";
import * as React from "react";
import { classNames } from "~/modules/styles";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={classNames(
          "inline-flex items-center justify-center gap-2 h-10 rounded-md px-8 transition-colors",
          "text-sm font-medium whitespace-nowrap",
          "bg-slate-950 text-[oklch(0.985_0_0)] shadow hover:bg-slate-950/90",
          "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none",
          "disabled:opacity-50",
          "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button };
