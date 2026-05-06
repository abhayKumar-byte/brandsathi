import Link from "next/link";

export default function IndustryEcommercePage() {
  return (
    <main className="brand-container py-16">
      <h1 className="text-5xl font-bold">eCommerce Marketing Services</h1>
      <p className="mt-3 text-black/70">SEO, paid ads, and conversion optimization tailored for high-growth online stores.</p>
      <ul className="mt-6 space-y-2 text-sm text-black/75">
        <li>• Channel mix: SEO + Shopping ads + lifecycle email</li>
        <li>• Merchandising-led collection page optimization</li>
        <li>• Conversion experiments for PDP/checkout flow</li>
      </ul>
      <Link href="/contact" className="mt-6 inline-flex rounded-full bg-brand-primary px-5 py-2 font-semibold text-white">
        Get an eCommerce Growth Plan
      </Link>
    </main>
  );
}
