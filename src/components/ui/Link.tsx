import { cn } from "@/lib/utils/cn";

type LinkVariant = "outline" | "primary" | "inverted" | "muted";
type LinkSize = "md" | "lg";

export type LinkProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string;
  size?: LinkSize;
  block?: boolean;
  variant?: LinkVariant;
};

const sizes: Record<LinkSize, string> = {
  lg: "px-5 py-2.5",
  md: "px-4 py-2",
};

const variants: Record<LinkVariant, string> = {
  outline: "bg-white border-2 border-black hover:bg-gray-100 text-black ",
  primary: "bg-black text-white hover:bg-gray-800  border-2 border-transparent",
  inverted: "bg-white text-black   border-2 border-transparent",
  muted: "bg-gray-100 hover:bg-gray-200   border-2 border-transparent",
};

export function Link({
  href,
  block,
  size = "lg",
  variant = "primary",
  className,
  children,
  ...rest
}: LinkProps) {
  return (
    <a
      href={href}
      className={cn(
        "rounded-sm text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200",
        block && "w-full",
        sizes[size],
        variants[variant],
        className
      )}
      {...rest}
    >
      {children}
    </a>
  );
}
