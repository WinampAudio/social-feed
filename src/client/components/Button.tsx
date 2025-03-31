import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { classNames } from "~/modules/styles";
import { ArrowRight, LucideProps } from "lucide-react";

const buttonVariants = cva(
  [
    // Base styles
    "inline-flex items-center justify-center gap-2",
    "h-10 rounded-md px-8 transition-colors",
    "text-sm font-medium whitespace-nowrap",
    
    // Focus styles
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
    "[&_svg]:size-4 [&_svg]:shrink-0",

    // Hover styles
    "hover:cursor-pointer",

    // Disabled styles
    "disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent",
  ],
  {
    variants: {
      variant: {
        default: [
          "bg-zinc-950 text-[oklch(0.985_0_0)] shadow",
          "hover:bg-zinc-950/90",
          "disabled:hover:bg-zinc-950",
        ],
        outline: [
          "bg-white border border-zinc-300 text-zinc-900",
          "hover:bg-zinc-50",
          "disabled:hover:bg-white",
        ],
        ghost: [
          "bg-transparent text-zinc-950",
          "hover:bg-zinc-50",
          "disabled:hover:bg-transparent",
        ],
      },
      wFull: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      wFull: false,
    },
  }
);


export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    wFull?: boolean;
    children: React.ReactNode; 
    hasArrowRight?: boolean;
  };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild = false, variant, wFull, children, hasArrowRight, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    const hasArrowRightIcon = React.Children.toArray(children).some(
      (child) => React.isValidElement(child) && child.type === ArrowRight
    );

    return (
      <Comp
        className={classNames(
          buttonVariants({ variant, wFull, className }),
          hasArrowRightIcon && "group" 
        )}
        ref={ref}
        {...props}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child) && child.type === ArrowRight) {
            return React.cloneElement(child as React.ReactElement<LucideProps>, {
              className: classNames(
                child.props.className,
                "transition-transform group-hover:translate-x-1"
              ),
            });
          }
          return child;
        })}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };