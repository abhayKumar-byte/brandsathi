"use client";

import { motion } from "framer-motion";

const steps = [
  "Discovery Call",
  "Strategy & Audit",
  "Execution",
  "Reporting",
  "Scale",
];

export function ProcessTimeline() {
  return (
    <section className="bg-brand-light py-20 text-[#111]">
      <div className="brand-container">
        <h2 className="text-center text-4xl font-bold md:text-5xl">How We Work</h2>
        <div className="mt-12 grid gap-4 md:grid-cols-5">
          {steps.map((step, i) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-black/15 bg-white p-5">
              <p className="text-sm text-brand-primary">Step {i + 1}</p>
              <p className="mt-2 font-semibold">{step}</p>
            </motion.div>
          ))}
        </div>
        <a href="/contact" className="mt-8 inline-flex rounded-full bg-brand-primary px-6 py-3 font-semibold text-black">
          Start with a free discovery call {"->"} Book Now
        </a>
      </div>
    </section>
  );
}
