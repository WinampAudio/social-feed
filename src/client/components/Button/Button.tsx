import React, { FC, MouseEventHandler } from "react";
import { Link } from "react-router";
import { buttonVariants } from "./Button.styled";
import { type VariantProps } from 'class-variance-authority';
import { cn } from "../../lib/utils";
import { ArrowRight, LucideProps } from "lucide-react";

export type ButtonProps = {
  ariaLabel: string;
  onClick?: MouseEventHandler;
  fullWidth?: boolean;
  className?: string;
  children: React.ReactNode;
  to?: string;
  variant?: VariantProps<typeof buttonVariants>['variant'];
  disabled?: boolean;
  size?: VariantProps<typeof buttonVariants>['size'];
};

const Button: FC<ButtonProps> = ({
  className,
  to,
  onClick,
  variant,
  fullWidth,
  children,
  ariaLabel,
  disabled,
  size,
  ...props
}) => {
  const hasArrowRightIcon = React.Children.toArray(children).some(
    (child) => React.isValidElement(child) && child.type === ArrowRight
  );

  const wrappedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type === ArrowRight) {
      return React.cloneElement(child as React.ReactElement<LucideProps>, {
        className: cn(
          child.props.className,
          "transition-transform group-hover:translate-x-1"
        ),
      });
    }
    return child;
  });

  const combinedClassNames = cn(
    buttonVariants({ variant, fullWidth, className, size }),
    hasArrowRightIcon && "group"
  );

  if (to) {
    return (
      <Link
        aria-label={ariaLabel}
        role="link"
        to={to}
        className={combinedClassNames}
        {...props}
      >
        {wrappedChildren}
      </Link>
    );
  }

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      className={combinedClassNames}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {wrappedChildren}
    </button>
  );
};

Button.displayName = "Button";

export { Button, buttonVariants };