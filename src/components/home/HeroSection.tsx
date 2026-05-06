"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const rotating = ["Websites that Convert.", "SEO that Ranks.", "Shopify that Sells.", "Apps that Grow."];
const trust = ["Google Partner", "Meta Business Partner", "Shopify Partner", "200+ Clients", "95% Retention Rate"];

export function HeroSection() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIndex((s) => (s + 1) % rotating.length), 1800);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#4285f433,transparent_40%),radial-gradient(circle_at_left,#0f9d5826,transparent_35%),radial-gradient(circle_at_bottom,#db443722,transparent_30%)]" />
      <div className="brand-container relative grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <motion.p key={rotating[index]} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-brand-accent">
            {rotating[index]}
          </motion.p>
          <h1 className="mt-4 text-5xl font-extrabold leading-tight md:text-7xl">We Build Brands. We Drive Revenue.</h1>
          <p className="mt-5 max-w-2xl text-black/75">
            BrandSathi is a full-service digital marketing and development agency trusted by 200+ brands across India and globally.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-full bg-brand-primary px-6 py-3 font-semibold">Get a Free Proposal</Link>
            <Link href="/work" className="rounded-full border border-black/25 px-6 py-3 font-semibold">See Our Work</Link>
          </div>
          <div className="mt-6 flex flex-wrap gap-3 text-xs text-black/70">
            {trust.map((item) => (
              <span key={item} className="rounded-full border border-black/15 px-3 py-1">{item}</span>
            ))}
          </div>
        </div>
        <div className="brand-card p-8 shadow-sm">
          <h3 className="text-lg font-semibold">Performance Snapshot</h3>
          <div className="mt-6 grid grid-cols-2 gap-4">
            {["+340% Revenue", "+210% Traffic", "3.8x ROAS", "91% Lead Quality"].map((kpi) => (
              <div key={kpi} className="rounded-xl border border-black/10 bg-white p-4 text-center">
                <p className="text-2xl font-bold text-brand-accent">{kpi}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
