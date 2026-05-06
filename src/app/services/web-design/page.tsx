import Link from "next/link";
import Image from "next/image";

export default function WebDesignPage() {
  return (
    <main className="brand-container py-16">
      <h1 className="text-5xl font-bold">Website Design & Development</h1>
      <p className="mt-3 max-w-3xl text-black/70">Conversion-first websites for startups, SMBs, and enterprise teams that need speed and clarity.</p>
      <div className="mt-8 relative h-64 overflow-hidden rounded-2xl border border-black/10">
        <Image src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1400&q=80" alt="Website design wireframe on monitor" fill className="object-cover" />
      </div>
      <ul className="mt-8 space-y-2 text-black/75">
        <li>• UX strategy and wireframes</li>
        <li>• Responsive UI design</li>
        <li>• Next.js development</li>
        <li>• SEO-ready technical structure</li>
      </ul>
      <Link href="/contact" className="mt-8 inline-flex rounded-full bg-brand-primary px-6 py-3 font-semibold text-white">
        Start Your Website Project
      </Link>
    </main>
  );
}
