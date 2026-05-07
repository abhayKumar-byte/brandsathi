"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const rotating = ["Websites that Convert.", "SEO that Ranks.", "Shopify that Sells.", "Apps that Grow."];
const trust = ["Google Partner", "Meta Business Partner", "Shopify Partner", "200+ Clients", "95% Retention Rate"];
const movingCards = [
  { title: "Content Syndication", subtitle: "Authority links and wider content visibility.", size: "tall" },
  { title: "Website Copywriting", subtitle: "Conversion-first messaging for every funnel stage.", size: "short" },
  { title: "Press Release Writing", subtitle: "Brand stories crafted for credibility and reach.", size: "medium" },
  { title: "Press Release Distribution", subtitle: "Strategic distribution across high-trust publications.", size: "tall" },
  { title: "Blogger Outreach", subtitle: "Targeted publisher collaborations in your niche.", size: "large" },
  { title: "Local Citation Building", subtitle: "Consistent listings that strengthen local rankings.", size: "medium" },
  { title: "Niche Edits", subtitle: "Contextual backlinks placed in relevant content.", size: "short" },
  { title: "Digital PR", subtitle: "Newsworthy campaigns that attract links naturally.", size: "medium" },
  { title: "Technical SEO", subtitle: "Site health, speed, indexing, and crawl optimization.", size: "large" },
];

const cardSizeClass: Record<string, string> = {
  short: "min-h-24",
  medium: "min-h-32",
  tall: "min-h-40",
  large: "min-h-52",
};

export function HeroSection() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();
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
         

          <div
            className="relative mt-5 grid h-[520px] grid-cols-1 gap-3 overflow-hidden rounded-2xl bg-transparent p-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocusCapture={() => setIsPaused(true)}
            onBlurCapture={() => setIsPaused(false)}
          >
            {[0, 1, 2].map((columnIndex) => {
              const columnCards = movingCards.filter((_, i) => i % 3 === columnIndex);
              const loopCards = [...columnCards, ...columnCards];
              const duration = 18 + columnIndex * 3;

              return (
                <div
                  key={columnIndex}
                  className="flex flex-col gap-3"
                  style={{
                    animationName: shouldReduceMotion ? undefined : "heroColumnScroll",
                    animationDuration: shouldReduceMotion ? undefined : `${duration}s`,
                    animationTimingFunction: "linear",
                    animationIterationCount: "infinite",
                    animationPlayState: isPaused ? "paused" : "running",
                  }}
                >
                  {loopCards.map((card, cardIndex) => (
                    <motion.button
                      key={`${card.title}-${cardIndex}`}
                      type="button"
                      whileHover={{ y: -2, scale: 1.01 }}
                      whileTap={{ scale: 0.985 }}
                      className={`rounded-xl border border-black/15 bg-white/95 p-4 text-left shadow-[0_8px_26px_-18px_rgba(0,0,0,0.35)] transition-colors hover:border-brand-primary/60 ${cardSizeClass[card.size]}`}
                    >
                      <p className="text-sm font-semibold text-black">{card.title}</p>
                      <p className="mt-2 text-xs leading-relaxed text-black/65">{card.subtitle}</p>
                    </motion.button>
                  ))}
                </div>
              );
            })}
            <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-20 bg-linear-to-b from-[#f8fbffb3] via-[#f8fbff4d] to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-20 bg-linear-to-t from-[#f8fbffb3] via-[#f8fbff4d] to-transparent" />
          </div>
      </div>
      <style jsx>{`
        @keyframes heroColumnScroll {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-50%);
          }
        }
      `}</style>
    </section>
  );
}
