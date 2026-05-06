"use client";

import { useState } from "react";

const studies = [
  {
    title: "eCommerce Brand",
    growth: "+340% Revenue in 6 Months",
    summary: "SEO + Shopify optimization unlocked profitable scale.",
  },
  {
    title: "B2B SaaS",
    growth: "+210% Organic Traffic",
    summary: "Technical SEO and content architecture drove qualified pipeline.",
  },
  {
    title: "Local Business",
    growth: "+500% Google Maps Visibility",
    summary: "Local SEO framework boosted calls and visits consistently.",
  },
];

export function CaseStudySlider() {
  const [tab, setTab] = useState(0);
  const current = studies[tab];
  return (
    <section className="py-20">
      <div className="brand-container">
        <div className="rounded-2xl border-l-4 border-brand-primary bg-white p-8">
          <h2 className="text-4xl font-bold">Real Results. Real Clients.</h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {studies.map((s, i) => (
              <button key={s.title} onClick={() => setTab(i)} className={`rounded-full px-4 py-2 text-sm ${i === tab ? "bg-brand-primary" : "border border-black/20"}`}>
                {s.title}
              </button>
            ))}
          </div>
          <div className="mt-6">
            <p className="text-3xl font-extrabold text-brand-accent">{current.growth}</p>
            <p className="mt-2 text-black/75">{current.summary}</p>
            <a href="/work" className="mt-5 inline-flex rounded-lg border border-brand-primary px-4 py-2 text-sm font-semibold">
              See All Case Studies
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
