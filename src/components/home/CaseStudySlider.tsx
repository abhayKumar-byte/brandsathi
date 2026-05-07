"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const studies = [
  {
    title: "eCommerce Brand",
    industry: "Fashion D2C",
    growth: "+340% Revenue in 6 Months",
    summary: "SEO + Shopify optimization unlocked profitable scale.",
    metricLabel: "ROAS Improvement",
    metricValue: "4.1x",
  },
  {
    title: "B2B SaaS",
    industry: "B2B Technology",
    growth: "+210% Organic Traffic",
    summary: "Technical SEO and content architecture drove qualified pipeline.",
    metricLabel: "Demo Requests",
    metricValue: "+168%",
  },
  {
    title: "Local Business",
    industry: "Multi-location Services",
    growth: "+500% Google Maps Visibility",
    summary: "Local SEO framework boosted calls and visits consistently.",
    metricLabel: "Qualified Calls",
    metricValue: "+287%",
  },
];

export function CaseStudySlider() {
  const [tab, setTab] = useState(0);
  const current = studies[tab];
  return (
    <section className="py-20">
      <div className="brand-container">
        <div className="grid gap-8 rounded-3xl border border-black/10 bg-white p-6 md:grid-cols-2 md:items-center md:p-10">
          <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary">Case Studies</p>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">Real Results. Real Clients.</h2>
          <p className="mt-3 text-black/70">
            We combine SEO, performance marketing, and conversion optimization to deliver measurable growth across
            different business models.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {studies.map((s, i) => (
              <button
                key={s.title}
                onClick={() => setTab(i)}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  i === tab ? "bg-brand-primary text-black" : "border border-black/20 text-black/75 hover:border-brand-primary"
                }`}
              >
                {s.title}
              </button>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-black/10 bg-brand-light/40 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/60">{current.industry}</p>
            <p className="mt-2 text-3xl font-extrabold text-brand-accent">{current.growth}</p>
            <p className="mt-2 text-black/75">{current.summary}</p>
            <p className="mt-4 text-sm text-black/80">
              <span className="font-semibold">{current.metricLabel}:</span> {current.metricValue}
            </p>
            <Link href="/work" className="mt-5 inline-flex rounded-lg border border-brand-primary px-4 py-2 text-sm font-semibold">
              See All Case Studies
            </Link>
          </div>
          </div>
          <div className="rounded-2xl border border-black/10 bg-[linear-gradient(120deg,#f8fbff,#ffffff)] p-4">
            <Image
              src="/autoseo.svg"
              alt="BrandSathi case study results visual"
              width={640}
              height={460}
              className="h-auto w-full rounded-xl object-contain"
            />
          </div>
      </div>
      </div>
    </section>
  );
}
