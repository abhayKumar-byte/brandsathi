import Image from "next/image";

export default function WorkPage() {
  const studies = [
    {
      title: "eCommerce: +340% Revenue with SEO + Shopify",
      challenge: "Low conversion and high CAC across paid channels.",
      solution: "Technical SEO, collection-page rebuild, and checkout CRO sprint.",
      result: "+340% revenue in 6 months",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "B2B SaaS: +210% Organic Traffic",
      challenge: "Strong product, weak category visibility and low demo volume.",
      solution: "Programmatic SEO architecture, content hubs, and internal linking model.",
      result: "+210% organic sessions with stronger SQL quality",
      image: "https://images.unsplash.com/photo-1551281044-8a95faca6f10?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Local Services: +500% Map Visibility",
      challenge: "Not ranking in map pack for high-intent local queries.",
      solution: "GBP optimization, review workflow, service-area landing pages.",
      result: "+500% map impressions and call growth",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    },
  ];
  return (
    <main className="brand-container py-16">
      <h1 className="text-5xl font-bold">Our Work</h1>
      <p className="mt-3 text-black/70">Case studies focused on revenue, visibility, and conversion growth.</p>
      <div className="mt-8 grid gap-4">
        {studies.map((item) => (
          <article key={item.title} className="brand-card overflow-hidden">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="relative h-56 md:h-auto">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
              </div>
              <div className="p-5 md:col-span-2">
                <h2 className="text-2xl font-semibold">{item.title}</h2>
                <p className="mt-3 text-sm text-black/70"><strong>Challenge:</strong> {item.challenge}</p>
                <p className="mt-2 text-sm text-black/70"><strong>Solution:</strong> {item.solution}</p>
                <p className="mt-2 text-sm font-semibold text-brand-accent"><strong>Result:</strong> {item.result}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
      <section className="mt-12 brand-card p-6">
        <h3 className="text-2xl font-bold">Need a Similar Growth Plan?</h3>
        <p className="mt-2 text-black/70">Get a custom roadmap with channels, projections, and execution priorities for your business.</p>
        <a href="/contact" className="mt-4 inline-flex rounded-full bg-brand-primary px-5 py-2 font-semibold text-white">
          Request a Free Audit
        </a>
      </section>
    </main>
  );
}
