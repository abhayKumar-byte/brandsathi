import { cn } from "@/lib/utils/cn";

type Props = {
  title: React.ReactNode;
  desc?: React.ReactNode;
  align?: "center" | "left";
};

export function Sectionhead({ title, desc, align = "center" }: Props) {
  return (
    <div className={cn("mt-16", align === "center" && "text-center")}>
      <h1 className="text-4xl lg:text-5xl font-bold lg:tracking-tight">{title}</h1>
      {desc != null && <p className="text-lg mt-4 text-slate-600">{desc}</p>}
    </div>
  );
}
