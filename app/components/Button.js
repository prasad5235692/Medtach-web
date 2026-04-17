import Link from "next/link";
export default function Button({
  href,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  children,
  className = "",
}) {
  const base =
    "inline-flex items-center justify-center rounded-lg font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500";

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-3.5 text-base",
  };

  const variants = {
    primary:   "bg-purple-700 text-white hover:bg-purple-800 shadow-sm hover:shadow-md",
    secondary: "bg-purple-50 text-purple-700 hover:bg-purple-100",
    outline:   "border border-purple-700 text-purple-700 hover:bg-purple-50",
    ghost:     "text-purple-700 hover:bg-purple-50",
    dark:      "bg-gray-900 text-white hover:bg-gray-800 shadow-sm hover:shadow-md",
    white:     "bg-white text-purple-700 hover:bg-purple-50 shadow-sm",
    accent:    "bg-orange-500 text-white hover:bg-orange-600 shadow-sm shadow-orange-200/50 hover:shadow-md",
  };

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
