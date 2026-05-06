import Link from "next/link";

type Props = {
  category: string;
  title: string;
  date: string;
  readTime: string;
  href: string;
};

export function BlogCard({ category, title, date, readTime, href }: Props) {
  return (
    <article className="brand-card p-5">
      <p className="text-xs uppercase tracking-[0.2em] text-brand-accent">{category}</p>
      <h3 className="mt-3 text-xl font-bold">{title}</h3>
      <p className="mt-3 text-sm text-black/60">
        {date} · {readTime}
      </p>
      <Link className="mt-4 inline-flex text-sm font-semibold text-brand-primary" href={href}>
        Read More {"->"}
      </Link>
    </article>
  );
}
