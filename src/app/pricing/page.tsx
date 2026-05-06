const pricing = [
  {
    name: "Starter",
    price: "₹15,000/mo",
    services: ["Local SEO setup", "Basic PPC campaign", "2 landing pages", "Monthly reporting"],
  },
  {
    name: "Growth",
    price: "₹45,000/mo",
    services: ["Full SEO + content", "Paid ads management", "Shopify CRO", "Weekly strategy calls"],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    services: ["Dedicated growth pod", "App + web engineering", "Omnichannel execution", "Executive reporting"],
  },
];

export default function PricingPage() {
  return (
    <main className="brand-container py-16">
      <h1 className="text-5xl font-bold">Transparent Pricing</h1>
      <p className="mt-3 text-black/70">No hidden fees. Clear packages designed to match your growth stage.</p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {pricing.map((plan) => (
          <article key={plan.name} className={`brand-card p-6 ${plan.featured ? "border-brand-primary" : ""}`}>
            <h2 className="text-2xl font-bold">{plan.name}</h2>
            <p className="mt-2 text-3xl font-extrabold text-brand-accent">{plan.price}</p>
            <ul className="mt-4 space-y-2 text-sm text-black/75">
              {plan.services.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
            <a href="/contact" className="mt-6 inline-flex rounded-full bg-brand-primary px-5 py-2 font-semibold text-white">
              Get Free Proposal
            </a>
          </article>
        ))}
      </div>
      <section className="mt-12 grid gap-6 md:grid-cols-2">
        <article className="brand-card p-6">
          <h2 className="text-2xl font-bold">What’s Included In Every Plan</h2>
          <ul className="mt-3 space-y-2 text-sm text-black/75">
            <li>• Dedicated account manager</li>
            <li>• Weekly implementation sprint</li>
            <li>• KPI dashboard and monthly review</li>
            <li>• Slack/WhatsApp communication channel</li>
          </ul>
        </article>
        <article className="brand-card p-6">
          <h2 className="text-2xl font-bold">Need Service-Specific Pricing?</h2>
          <p className="mt-3 text-sm text-black/75">
            We also offer separate SEO, PPC, Shopify, and web development retainers with clear scopes and outcomes.
          </p>
          <a href="/contact" className="mt-5 inline-flex rounded-full border border-brand-primary px-5 py-2 font-semibold">
            Request Detailed Pricing Sheet
          </a>
        </article>
      </section>
    </main>
  );
}
