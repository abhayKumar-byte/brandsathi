import { cn } from "@/lib/utils/cn";

type BtnVariant = "outline" | "primary";
type BtnSize = "md" | "lg";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: BtnSize;
  block?: boolean;
  variant?: BtnVariant;
};

const sizes: Record<BtnSize, string> = {
  md: "px-5 py-2.5",
  lg: "px-6 py-3",
};

const variants: Record<BtnVariant, string> = {
  outline: "border-2 border-black hover:bg-black text-black hover:text-white",
  primary: "bg-black text-white hover:bg-slate-900  border-2 border-transparent",
};

export function Button({
  size = "md",
  variant = "primary",
  block,
  className,
  children,
  type = "button",
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
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
    </button>
  );
}
