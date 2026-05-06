import Link from "next/link";

export default function IndustrySaasPage() {
  return (
    <main className="brand-container py-16">
      <h1 className="text-5xl font-bold">SaaS Growth Marketing Services</h1>
      <p className="mt-3 text-black/70">Pipeline-focused SEO, content, and paid campaigns for product-led and sales-led SaaS teams.</p>
      <ul className="mt-6 space-y-2 text-sm text-black/75">
        <li>• ICP-focused content strategy for demand capture</li>
        <li>• Product + solution pages with conversion architecture</li>
        <li>• SQL-oriented paid campaign design and optimization</li>
      </ul>
      <Link href="/contact" className="mt-6 inline-flex rounded-full bg-brand-primary px-5 py-2 font-semibold text-white">
        Build SaaS Pipeline Plan
      </Link>
    </main>
  );
}
