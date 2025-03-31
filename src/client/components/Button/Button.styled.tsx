import { cva } from "class-variance-authority";

export const buttonVariants = cva(
    [
      // Base styles
      "inline-flex items-center justify-center gap-2",
      "h-10 rounded-md transition-colors",
      "text-sm whitespace-nowrap",
      "[&_svg]:shrink-0",

      // Focus styles
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
     
      // Hover styles
      "hover:cursor-pointer",
  
      // Disabled styles
      "disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent",
    ],
    {
      variants: {
        variant: {
          default: [
            "bg-zinc-950 text-[oklch(0.985_0_0)] shadow px-8 font-medium",
            "hover:bg-zinc-950/90",
            "disabled:hover:bg-zinc-950",
          ],
          outline: [
            "bg-white border border-zinc-300 text-zinc-900 px-8 font-medium",
            "hover:bg-zinc-50",
            "disabled:hover:bg-white",
          ],
          ghost: [
            "bg-transparent text-zinc-950 px-2 font-semibold",
            "hover:bg-zinc-50",
            "disabled:hover:bg-transparent",
          ],
        },
        fullWidth: {
          true: "w-full",
          false: "",
        }, 
        size: {
          default: "[&_svg]:size-4",
          xs: "[&_svg]:size-3",
        },
      },    
      defaultVariants: {
        variant: "default",
        fullWidth: false,
        size: "default",
      },
    }
  );