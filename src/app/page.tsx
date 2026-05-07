import {
  BarChart3,
  Brush,
  Building2,
  Globe,
  Megaphone,
  Search,
  ShoppingCart,
  Smartphone,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { HeroSection } from "@/components/home/HeroSection";
import { MarqueeStrip } from "@/components/home/MarqueeStrip";
import { StatsCounter } from "@/components/home/StatsCounter";
import { ServiceCard } from "@/components/home/ServiceCard";
import { CaseStudySlider } from "@/components/home/CaseStudySlider";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { TestimonialCarousel } from "@/components/home/TestimonialCarousel";
import { BlogCard } from "@/components/home/BlogCard";
import { AuditForm } from "@/components/home/AuditForm";
import { WhatsAppWidget } from "@/components/home/WhatsAppWidget";
import { SmoothScrollHero } from "@/components/home/SmoothScrollHero";
import { TextParallaxContentExample } from "@/components/home/TextParallaxContentExample";
import { getAllBlogPosts } from "@/lib/content/blog";

const services = [
  { icon: Search, title: "SEO", description: "Rank higher and compound organic leads month after month.", href: "/services/seo" },
  { icon: Megaphone, title: "PPC & Google Ads", description: "Turn ad spend into measurable pipeline with better ROAS.", href: "/services/ppc" },
  { icon: Globe, title: "Social Media Marketing", description: "Build attention and conversion-focused campaigns across platforms.", href: "/services" },
  { icon: Brush, title: "Web Design & Development", description: "Fast, conversion-focused websites built for growth.", href: "/services/web-design" },
  { icon: ShoppingCart, title: "Shopify Development", description: "Build storefronts that convert visitors into buyers.", href: "/services/shopify" },
  { icon: Smartphone, title: "Mobile App Development", description: "Launch app experiences that retain users and drive revenue.", href: "/services/app-development" },
  { icon: BarChart3, title: "CRO", description: "Lift conversion rates with data-backed experimentation.", href: "/services" },
  { icon: Building2, title: "Branding", description: "Create brand systems your audience remembers instantly.", href: "/services" },
];

export default function HomePage() {
  const posts = getAllBlogPosts().slice(0, 3);
  return (
    <main>
      <HeroSection />
      <MarqueeStrip />
      <StatsCounter />

      <section className="py-20">
        <div className="brand-container">
          <h2 className="text-center text-4xl font-bold md:text-5xl">Everything You Need to Dominate Online</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>
     


      <section className="py-20">
        <div className="brand-container grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-4xl font-bold md:text-5xl">Why Leading Brands Choose BrandSathi</h2>
            <ul className="mt-6 space-y-3 text-black/80">
              <li>Full-Stack Agency — Marketing + Design + Development under one roof</li>
              <li>Transparent Pricing — No hidden fees, clear monthly packages</li>
              <li>Dedicated Account Manager — Your single point of contact</li>
              <li>Data-Driven Strategy — Every decision backed by analytics</li>
            </ul>
            <Link href="/about" className="mt-6 inline-flex rounded-full border border-brand-primary px-5 py-2 font-semibold">
              Meet the Team
            </Link>
          </div>
          <div className="brand-card min-h-72 p-6">
            <p className="text-sm text-brand-accent">Team-first execution</p>
            <p className="mt-3 text-black/70">Real specialists across SEO, paid media, Shopify, and product engineering aligned to one growth plan.</p>
          </div>
        </div>
      </section>

      <ProcessTimeline />
      <TextParallaxContentExample />
 

      <section className="py-20">
        <div className="brand-container grid gap-8 rounded-3xl border border-black/10 bg-[linear-gradient(120deg,#ffffff,#f8fbff)] p-6 md:grid-cols-2 md:items-center md:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary">Industries We Serve</p>
            <h2 className="mt-3 text-4xl font-bold md:text-5xl">Growth Strategies Built for Your Market</h2>
            <p className="mt-4 text-black/75">
              From high-velocity D2C brands to complex B2B companies, we build channel-specific strategies that fit
              your audience, sales cycle, and revenue goals.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "eCommerce",
                "SaaS",
                "Healthcare",
                "Real Estate",
                "Education",
                "Restaurants",
                "Law Firms",
                "Startups",
                "Fashion",
                "Finance",
                "Travel",
                "Automotive",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-black/15 bg-white px-4 py-2 text-sm text-black/80 transition hover:border-brand-primary hover:text-black"
                >
                  {item}
                </span>
              ))}
            </div>
            <Link href="/contact" className="mt-7 inline-flex rounded-full bg-brand-primary px-6 py-3 font-semibold text-black">
              Talk to an Industry Expert
            </Link>
          </div>
          <div className="rounded-2xl border border-black/10 bg-white/90 p-4">
            <Image
              src="/api.svg"
              alt="Industries supported by BrandSathi"
              width={640}
              height={460}
              className="h-auto w-full rounded-xl object-contain"
            />
          </div>
        </div>
      </section>
      <CaseStudySlider />


      <TestimonialCarousel />

       <SmoothScrollHero />

      <section className="bg-brand-primary py-16 text-black">
        <div className="brand-container grid gap-6 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-4xl font-bold">Shopify Partner Agency — We Build Stores That Sell</h2>
            <p className="mt-3 text-black/80">Custom themes, Shopify Plus, integrations, speed optimization, and Shopify SEO.</p>
          </div>
          <Link href="/services/shopify" className="inline-flex w-fit rounded-full bg-white px-6 py-3 font-semibold text-brand-dark border border-black/15">
            Get Your Shopify Store Audited Free
          </Link>
        </div>
      </section>

      <section className="py-20">
        <div className="brand-container">
          <h2 className="text-center text-4xl font-bold md:text-5xl">Marketing Insights From Our Experts</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {posts.map((post) => (
              <BlogCard
                key={post.slug}
                category={post.data.category}
                title={post.data.title}
                date={post.data.publishDate.toDateString()}
                readTime="6 min read"
                href={`/blog/${post.slug}`}
              />
            ))}
          </div>
          <Link href="/blog" className="mx-auto mt-8 block w-fit rounded-full border border-black/20 px-5 py-2 font-semibold">
            View All Articles
          </Link>
        </div>
      </section>

      <section className="bg-[linear-gradient(120deg,#f8fbff,#eef5ff)] py-20">
        <div className="brand-container">
          <h2 className="text-4xl font-bold md:text-5xl">Get a Free Website & Marketing Audit</h2>
          <p className="mt-2 text-black/70">See exactly what&apos;s holding your business back — in 24 hours.</p>
          <div className="mt-6">
            <AuditForm />
            <p className="mt-3 text-xs text-black/70">No spam. No commitment. 100% Free.</p>
          </div>
        </div>
      </section>
      <WhatsAppWidget />
    </main>
  );
}
