import Link from "next/link";

export default function IndustryRealEstatePage() {
  return (
    <main className="brand-container py-16">
      <h1 className="text-5xl font-bold">Real Estate Marketing Services</h1>
      <p className="mt-3 text-black/70">Get more qualified buyer and seller leads with local SEO, paid media, and trust-first funnels.</p>
      <ul className="mt-6 space-y-2 text-sm text-black/75">
        <li>• Location pages and map-pack visibility strategy</li>
        <li>• High-intent lead form and call funnel design</li>
        <li>• Listing ad campaigns with cost-per-lead control</li>
      </ul>
      <Link href="/contact" className="mt-6 inline-flex rounded-full bg-brand-primary px-5 py-2 font-semibold text-white">
        Request Real Estate Growth Audit
      </Link>
    </main>
  );
}
