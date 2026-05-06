import Image from "next/image";
import { getPublishedTeamMembers } from "@/lib/content/team";

export default function AboutPage() {
  const publishedTeamMembers = getPublishedTeamMembers();

  return (
    <main className="brand-container py-16">
      <h1 className="text-5xl font-bold">About BrandSathi</h1>
      <p className="mt-4 max-w-3xl text-black/70">
        We are a growth-focused agency blending marketing, design, and engineering for Indian SMBs and global brands.
      </p>
      <section className="mt-8 grid gap-6 md:grid-cols-3">
        <article className="brand-card p-5">
          <p className="text-xs uppercase tracking-[0.14em] text-brand-primary">Mission</p>
          <p className="mt-2 text-sm text-black/75">Help brands build repeatable growth systems that drive revenue, not vanity metrics.</p>
        </article>
        <article className="brand-card p-5">
          <p className="text-xs uppercase tracking-[0.14em] text-brand-primary">Approach</p>
          <p className="mt-2 text-sm text-black/75">Research-first strategy, fast weekly execution, and transparent reporting.</p>
        </article>
        <article className="brand-card p-5">
          <p className="text-xs uppercase tracking-[0.14em] text-brand-primary">Culture</p>
          <p className="mt-2 text-sm text-black/75">Ownership, clarity, and constant optimization across channels and product touchpoints.</p>
        </article>
      </section>
      <div className="mt-10 flex flex-col gap-3">
        <h2 className="text-3xl font-bold">Real Team. Real Operators.</h2>
        <p className="text-black/70">Meet the people executing your SEO, paid media, Shopify, and product growth roadmap.</p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {publishedTeamMembers.map((member) => (
          <div key={member.slug} className="brand-card p-4">
            <div className="relative aspect-square w-full">
              <Image
                src={member.data.avatar.src}
                alt={member.data.avatar.alt}
                sizes="(max-width: 800px) 100vw, 380px"
                width={400}
                height={400}
                className="aspect-square w-full rounded-lg object-cover object-center"
              />
            </div>
            <div className="mt-4">
              <h2 className="text-lg font-semibold">{member.data.name}</h2>
              <h3 className="text-sm text-black/60">{member.data.title}</h3>
              <a href="#" className="mt-3 inline-flex text-sm text-brand-accent">LinkedIn Profile</a>
            </div>
          </div>
        ))}
      </div>
      <section className="mt-12 brand-card p-6">
        <h3 className="text-2xl font-bold">Awards, Reviews, and Trust Signals</h3>
        <div className="mt-4 grid gap-3 text-sm text-black/75 md:grid-cols-3">
          <p>Google Partner Certified</p>
          <p>Meta Business Partner</p>
          <p>4.9/5 Average Client Rating</p>
        </div>
      </section>
    </main>
  );
}
