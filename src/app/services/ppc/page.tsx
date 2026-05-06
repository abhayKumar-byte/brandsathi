import Link from "next/link";
import Image from "next/image";

export default function PpcPage() {
  return (
    <main className="brand-container py-16">
      <h1 className="text-5xl font-bold">PPC & Google Ads Management</h1>
      <p className="mt-3 max-w-3xl text-black/70">Scale qualified leads with high-intent campaigns, clean tracking, and aggressive optimization loops.</p>
      <div className="mt-8 relative h-64 overflow-hidden rounded-2xl border border-black/10">
        <Image src="https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&w=1400&q=80" alt="Paid ads optimization dashboard" fill className="object-cover" />
      </div>
      <ul className="mt-8 space-y-2 text-black/75">
        <li>• Full-funnel campaign architecture</li>
        <li>• Ad copy and creative testing</li>
        <li>• Landing page alignment and CRO</li>
        <li>• Weekly performance reporting</li>
      </ul>
      <Link href="/contact" className="mt-8 inline-flex rounded-full bg-brand-primary px-6 py-3 font-semibold text-white">
        Get a PPC Audit
      </Link>
    </main>
  );
}
