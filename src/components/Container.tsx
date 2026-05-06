import { cn } from "@/lib/utils/cn";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function Container({ children, className }: Props) {
  return (
    <div className={cn("max-w-(--breakpoint-xl) mx-auto px-5", className)}>{children}</div>
  );
}
