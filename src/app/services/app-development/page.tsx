import Link from "next/link";
import Image from "next/image";

export default function AppDevelopmentPage() {
  return (
    <main className="brand-container py-16">
      <h1 className="text-5xl font-bold">Mobile App Development</h1>
      <p className="mt-3 max-w-3xl text-black/70">Build reliable app experiences with clear product strategy, smooth UX, and scalable code.</p>
      <div className="mt-8 relative h-64 overflow-hidden rounded-2xl border border-black/10">
        <Image src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1400&q=80" alt="Mobile app interface and development" fill className="object-cover" />
      </div>
      <ul className="mt-8 space-y-2 text-black/75">
        <li>• Product discovery and roadmap</li>
        <li>• Android and iOS app builds</li>
        <li>• API and backend integration</li>
        <li>• Launch and performance optimization</li>
      </ul>
      <Link href="/contact" className="mt-8 inline-flex rounded-full bg-brand-primary px-6 py-3 font-semibold text-white">
        Book a Discovery Call
      </Link>
    </main>
  );
}
