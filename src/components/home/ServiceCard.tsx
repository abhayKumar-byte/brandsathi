import Link from "next/link";
import type { LucideIcon } from "lucide-react";

type Props = {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
};

export function ServiceCard({ icon: Icon, title, description, href }: Props) {
  return (
    <article className="brand-card p-6 transition-shadow hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(255,77,0,0.25)]">
      <Icon className="h-6 w-6 text-brand-primary" />
      <h3 className="mt-4 text-xl font-bold">{title}</h3>
      <p className="mt-2 text-sm text-black/75">{description}</p>
      <Link href={href} className="mt-4 inline-flex text-sm font-semibold text-brand-accent">
        Learn More {"->"}
      </Link>
    </article>
  );
}
