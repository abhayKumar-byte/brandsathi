import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white py-14">
      <div className="brand-container grid gap-10 md:grid-cols-5">
        <div className="md:col-span-2">
          <h3 className="text-xl font-bold">BrandStathi</h3>
          <p className="mt-2 text-sm text-black/70">Where Brands Are Born. Where Growth Never Stops.</p>
          <p className="mt-4 text-sm text-black/60">Email: hello@brandsathi.com · Phone: +91 98765 43210</p>
          <a className="mt-2 inline-block text-sm text-brand-accent" href="https://wa.me/919876543210">WhatsApp Us</a>
        </div>
        <div>
          <p className="font-semibold">Services</p>
          <ul className="mt-2 space-y-2 text-sm text-black/70">
            <li><Link href="/services/seo">SEO</Link></li>
            <li><Link href="/services/ppc">PPC</Link></li>
            <li><Link href="/services/shopify">Shopify</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">Company</p>
          <ul className="mt-2 space-y-2 text-sm text-black/70">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/work">Work</Link></li>
            <li><Link href="/blog">Blog</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">Industries</p>
          <ul className="mt-2 space-y-2 text-sm text-black/70">
            <li><Link href="/industries/ecommerce">eCommerce</Link></li>
            <li><Link href="/industries/real-estate">Real Estate</Link></li>
            <li><Link href="/industries/saas">SaaS</Link></li>
          </ul>
        </div>
      </div>
      <div className="brand-container mt-10 border-t border-black/10 pt-5 text-xs text-black/60">
        © 2025 BrandStathi | Privacy Policy | Terms | Sitemap
      </div>
    </footer>
  );
}
