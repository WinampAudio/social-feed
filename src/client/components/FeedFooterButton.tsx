interface FeedFooterButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

function FeedFooterButton({ icon, children, ...props }: FeedFooterButtonProps) {
  // Should be a <NavLink> in some cases?

  return (
    <button
      type="button"
      className="p-2 flex gap-1 items-center text-xs font-medium"
      {...props}
    >
      {icon} {children}
    </button>
  );
}

export default FeedFooterButton;
