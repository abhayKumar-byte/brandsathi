import Link from "next/link";
import Image from "next/image";

export default function SeoPage() {
  return (
    <main className="brand-container py-16">
      <h1 className="text-5xl font-bold">SEO Services</h1>
      <p className="mt-3 max-w-3xl text-black/70">Get sustainable organic growth with technical SEO, content strategy, and authority building.</p>
      <div className="mt-8 relative h-64 overflow-hidden rounded-2xl border border-black/10">
        <Image src="https://images.unsplash.com/photo-1562577309-2592ab84b1bc?auto=format&fit=crop&w=1400&q=80" alt="SEO analytics dashboard" fill className="object-cover" />
      </div>
      <ul className="mt-8 space-y-2 text-black/75">
        <li>• Technical audits and fixes</li>
        <li>• Keyword and intent mapping</li>
        <li>• On-page optimization and internal linking</li>
        <li>• Monthly KPI reporting</li>
      </ul>
      <Link href="/contact" className="mt-8 inline-flex rounded-full bg-brand-primary px-6 py-3 font-semibold text-white">
        Get Free Proposal
      </Link>
    </main>
  );
}
