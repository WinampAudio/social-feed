import { classNames } from "~/modules/styles";

export function Separator({
  className,
  ...props
}: React.HTMLAttributes<HTMLHRElement>) {
  return (
    <hr
      className={classNames(
        "border-t border-gray-200 dark:border-gray-700",
        className,
      )}
      {...props}
    />
  );
}
