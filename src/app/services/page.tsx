import Link from "next/link";
import Image from "next/image";

const services = [
  ["SEO", "/services/seo"],
  ["Shopify Development", "/services/shopify"],
  ["Web Design", "/services/web-design"],
  ["App Development", "/services/app-development"],
  ["PPC / Google Ads", "/services/ppc"],
];

export default function ServicesPage() {
  return (
    <main className="brand-container py-16">
      <h1 className="text-5xl font-bold">Full-Service Growth Stack</h1>
      <p className="mt-3 max-w-3xl text-black/70">
        We combine SEO, paid media, content, design, Shopify, and app development into one execution system. No handoff chaos.
      </p>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <article className="brand-card p-5">
          <p className="text-xs uppercase tracking-[0.16em] text-brand-primary">Deliverables</p>
          <ul className="mt-3 space-y-1 text-sm text-black/75">
            <li>• Strategy + audit deck</li>
            <li>• Weekly performance execution</li>
            <li>• Monthly KPI dashboard</li>
            <li>• Dedicated account manager</li>
          </ul>
        </article>
        <article className="brand-card p-5">
          <p className="text-xs uppercase tracking-[0.16em] text-brand-primary">Focused On Outcomes</p>
          <ul className="mt-3 space-y-1 text-sm text-black/75">
            <li>• More qualified leads</li>
            <li>• Better ROAS</li>
            <li>• Higher conversion rates</li>
            <li>• Faster website performance</li>
          </ul>
        </article>
        <article className="brand-card p-5">
          <p className="text-xs uppercase tracking-[0.16em] text-brand-primary">Built For</p>
          <ul className="mt-3 space-y-1 text-sm text-black/75">
            <li>• SMBs and local brands</li>
            <li>• Funded startups</li>
            <li>• Shopify and D2C teams</li>
            <li>• Enterprise programs</li>
          </ul>
        </article>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {services.map(([name, href]) => (
          <Link key={name} href={href} className="brand-card p-5 hover:border-brand-primary">
            <h2 className="text-2xl font-semibold">{name}</h2>
            <p className="mt-2 text-sm text-black/70">Learn strategy, deliverables, and pricing starts.</p>
          </Link>
        ))}
      </div>
      <section className="mt-14 grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold">How We Engage</h2>
          <ol className="mt-4 space-y-2 text-black/75">
            <li>1. Discovery + goals alignment</li>
            <li>2. Market + channel audit</li>
            <li>3. 90-day execution roadmap</li>
            <li>4. Weekly sprints and optimization</li>
            <li>5. Monthly reporting and scale planning</li>
          </ol>
          <Link href="/contact" className="mt-6 inline-flex rounded-full bg-brand-primary px-5 py-2 font-semibold text-white">
            Book a Free Strategy Call
          </Link>
        </div>
        <div className="relative h-72 overflow-hidden rounded-2xl border border-black/10">
          <Image
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
            alt="Marketing strategy team workshop"
            fill
            className="object-cover"
          />
        </div>
      </section>
    </main>
  );
}
