"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const steps = [
  {
    title: "Discovery Call",
    description: "We understand your business goals, audience, and growth blockers in a focused 30-minute session.",
  },
  {
    title: "Strategy & Audit",
    description: "You get a clear roadmap with channel priorities, quick wins, and a timeline built for your budget.",
  },
  {
    title: "Execution",
    description: "Our team launches campaigns, creatives, SEO, and automation with rapid weekly implementation cycles.",
  },
  {
    title: "Reporting",
    description: "Transparent dashboards and action-led reviews show what is working and what we optimize next.",
  },
  {
    title: "Scale",
    description: "Once unit economics are healthy, we scale winning campaigns to drive consistent, profitable growth.",
  },
];

export function ProcessTimeline() {
  return (
    <section className="bg-brand-light py-20 text-[#111]">
      <div className="brand-container">
        <div className="grid gap-10 rounded-3xl border border-black/10 bg-white p-6 md:grid-cols-2 md:items-center md:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary">Our Process</p>
            <h2 className="mt-3 text-4xl font-bold md:text-5xl">How We Turn Marketing Into Revenue</h2>
            <p className="mt-4 text-base text-black/70">
              Every engagement follows a proven five-step framework designed to move from planning to measurable
              business growth, without guesswork.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-black/70">
              <span className="rounded-full border border-black/15 px-4 py-2">Performance Marketing</span>
              <span className="rounded-full border border-black/15 px-4 py-2">SEO & Content</span>
              <span className="rounded-full border border-black/15 px-4 py-2">Web & Funnel Optimization</span>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-brand-light/40 p-4">
            <Image
              src="/Analytics.svg"
              alt="BrandSathi growth process visual"
              width={640}
              height={420}
              className="h-auto w-full rounded-xl object-contain"
              priority={false}
            />
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-5">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-black/15 bg-white p-5"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-primary">Step {i + 1}</p>
              <p className="mt-2 text-lg font-semibold">{step.title}</p>
              <p className="mt-2 text-sm text-black/70">{step.description}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-black/70">Ready to start? We can map your custom growth plan this week.</p>
          <Link href="/contact" className="inline-flex rounded-full bg-brand-primary px-6 py-3 font-semibold text-black">
            Start with a Free Discovery Call {"->"} Book Now
          </Link>
        </div>
      </div>
    </section>
  );
}
