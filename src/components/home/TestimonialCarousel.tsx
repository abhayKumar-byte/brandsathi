"use client";

import { useEffect, useState } from "react";

const testimonials = [
  { name: "Aarav Jain", company: "D2C Apparel", quote: "Our ROAS doubled in 90 days. BrandStathi executes fast.", stars: "★★★★★" },
  { name: "Neha Kapoor", company: "SaaS Platform", quote: "The SEO system they built keeps compounding every month.", stars: "★★★★★" },
  { name: "Rohit Mehta", company: "Healthcare Clinic", quote: "From low visibility to top local rankings in weeks.", stars: "★★★★★" },
];

export function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 2600);
    return () => clearInterval(t);
  }, []);
  const visible = [0, 1, 2].map((n) => testimonials[(index + n) % testimonials.length]);
  return (
    <section className="py-20">
      <div className="brand-container">
        <h2 className="text-center text-4xl font-bold md:text-5xl">What Our Clients Say</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {visible.map((item) => (
            <article key={item.name + item.company} className="brand-card p-6">
              <p className="text-brand-accent">{item.stars}</p>
              <p className="mt-3 text-black/80">&quot;{item.quote}&quot;</p>
              <p className="mt-4 text-sm font-semibold">{item.name}</p>
              <p className="text-xs text-black/60">{item.company}</p>
            </article>
          ))}
        </div>
        <p className="mt-5 text-center text-sm text-black/70">Google · Clutch · DesignRush | 4.9/5 average</p>
      </div>
    </section>
  );
}
