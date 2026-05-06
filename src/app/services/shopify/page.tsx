import Link from "next/link";
import Image from "next/image";

export default function ShopifyPage() {
  return (
    <main className="brand-container py-16">
      <h1 className="text-5xl font-bold">Shopify Store Design & Development</h1>
      <p className="mt-3 max-w-3xl text-black/70">BrandStathi builds Shopify stores that load fast, convert better, and scale with your catalog.</p>
      <div className="mt-8 relative h-64 overflow-hidden rounded-2xl border border-black/10">
        <Image src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1400&q=80" alt="Shopify ecommerce storefront" fill className="object-cover" />
      </div>
      <ul className="mt-8 space-y-2 text-black/75">
        <li>• Custom Shopify themes</li>
        <li>• App integrations and checkout optimization</li>
        <li>• Shopify SEO and speed fixes</li>
        <li>• Shopify Plus support</li>
      </ul>
      <Link href="/contact" className="mt-8 inline-flex rounded-full bg-brand-primary px-6 py-3 font-semibold text-white">
        Get Your Shopify Store Audited Free
      </Link>
    </main>
  );
}
