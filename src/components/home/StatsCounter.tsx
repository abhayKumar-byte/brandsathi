"use client";

import { motion } from "framer-motion";

const stats = [
  "200+ Clients Served",
  "₹50Cr+ Revenue Generated",
  "500+ Projects Delivered",
  "95% Client Retention",
  "10+ Years Combined Experience",
  "4.9★ Average Rating",
];

export function StatsCounter() {
  return (
    <section className="brand-grid-bg py-20">
      <div className="brand-container">
        <h2 className="text-center text-4xl font-bold md:text-5xl">Numbers That Speak Louder Than Words</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {stats.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="rounded-2xl border border-brand-primary/45 bg-white p-6 text-center font-semibold">
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
