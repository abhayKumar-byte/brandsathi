"use client";

import { useEffect, useState } from "react";
import NextLink from "next/link";
import { ChevronDown, Flame, Menu, X } from "lucide-react";

type MegaGroup = {
  heading: string;
  href: string;
  items: string[];
};

const megaGroups: MegaGroup[] = [
  {
    heading: "Digital Marketing",
    href: "/services",
    items: ["Digital Strategy", "Franchise Marketing", "Enterprise Marketing"],
  },
  {
    heading: "Search Engine Optimization (SEO)",
    href: "/services/seo",
    items: ["Local SEO", "Technical SEO", "AI SEO Services", "SEO Audits"],
  },
  {
    heading: "Pay Per Click (PPC) Marketing",
    href: "/services/ppc",
    items: ["Google Ads", "YouTube Ads", "Programmatic Ads", "Franchise PPC"],
  },
  {
    heading: "Social Media Marketing",
    href: "/services",
    items: ["Social Media Management", "Brand Management", "Social Ad Campaigns"],
  },
  {
    heading: "Web Design & Development",
    href: "/services/web-design",
    items: ["Branding Services", "Custom Web Design", "WordPress/Next.js Design"],
  },
  {
    heading: "eCommerce Marketing",
    href: "/services/shopify",
    items: ["eCommerce SEO", "Shopify SEO", "Conversion Optimization"],
  },
  {
    heading: "Mobile App Development",
    href: "/services/app-development",
    items: ["Android Apps", "iOS Apps", "API Integrations"],
  },
  {
    heading: "Content Marketing",
    href: "/services",
    items: ["SEO Content", "Copywriting", "Email Marketing", "Outbound Campaigns"],
  },
];

const aboutMenu = [
  "Who We Are",
  "Why Choose Us?",
  "Client Testimonials",
  "Careers",
  "Awards & Recognition",
  "Thrive Stats",
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMega, setActiveMega] = useState<"services" | "about" | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all ${scrolled ? "border-b border-black/10 bg-white/90 py-3 backdrop-blur" : "bg-white py-5"}`}>
      <div className="brand-container flex items-center justify-between gap-4">
        <NextLink href="/" className="inline-flex items-center gap-2 text-lg font-bold">
          <Flame className="h-5 w-5 text-brand-primary" />
          BrandStathi
        </NextLink>
        <nav className="hidden items-center gap-6 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setActiveMega("services")}
            onMouseLeave={() => setActiveMega((curr) => (curr === "services" ? null : curr))}>
            <button className="inline-flex items-center gap-1 text-sm font-medium">
              Services <ChevronDown className="h-4 w-4" />
            </button>
            {activeMega === "services" && (
              <div className="absolute left-1/2 top-8 z-50 w-[1000px] -translate-x-1/2 rounded-2xl border border-black/10 bg-white p-6 shadow-2xl">
                <div className="grid grid-cols-4 gap-4">
                  {megaGroups.map((group) => (
                    <div key={group.heading}>
                      <NextLink href={group.href} className="text-sm font-semibold text-brand-dark hover:text-brand-primary">
                        {group.heading}
                      </NextLink>
                      <ul className="mt-2 space-y-1 text-xs text-black/70">
                        {group.items.map((item) => (
                          <li key={item}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <div className="col-span-1 space-y-3">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-black/50">Results</p>
                    <a href="/work" className="block overflow-hidden rounded-xl border border-black/10 hover:border-brand-primary">
                      <img
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=80"
                        alt="Marketing results case study"
                        className="h-24 w-full object-cover"
                      />
                      <p className="p-2 text-xs font-semibold">BrandStathi Case Studies</p>
                    </a>
                    <a href="/about" className="block overflow-hidden rounded-xl border border-black/10 hover:border-brand-primary">
                      <img
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=500&q=80"
                        alt="Client testimonial stories"
                        className="h-24 w-full object-cover"
                      />
                      <p className="p-2 text-xs font-semibold">Client Testimonials</p>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
          <NextLink href="/industries/ecommerce" className="text-sm font-medium">Local</NextLink>
          <NextLink href="/work" className="text-sm font-medium">Results</NextLink>
          <div
            className="relative"
            onMouseEnter={() => setActiveMega("about")}
            onMouseLeave={() => setActiveMega((curr) => (curr === "about" ? null : curr))}>
            <button className="inline-flex items-center gap-1 text-sm font-medium">
              About <ChevronDown className="h-4 w-4" />
            </button>
            {activeMega === "about" && (
              <div className="absolute left-1/2 top-8 z-50 w-[560px] -translate-x-1/2 rounded-2xl border border-black/10 bg-white p-6 shadow-2xl">
                <div className="grid grid-cols-2 gap-3">
                  {aboutMenu.map((item) => (
                    <a key={item} href="/about" className="rounded-lg p-2 text-sm font-semibold hover:bg-black/5">
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
          <NextLink href="/work" className="text-sm font-medium">Work</NextLink>
          <NextLink href="/blog" className="text-sm font-medium">Learn</NextLink>
          <NextLink href="/contact" className="text-sm font-medium">Contact</NextLink>
        </nav>
        <div className="hidden items-center gap-4 lg:flex">
          <a href="tel:+919876543210" className="text-sm text-black/70">+91 98765 43210</a>
          <NextLink href="/contact" className="rounded-full bg-brand-primary px-5 py-2 text-sm font-semibold">
            Get Free Proposal
          </NextLink>
        </div>
        <button
          type="button"
          className="lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden fixed inset-0 top-16 bg-white p-6">
          <div className="flex flex-col gap-4">
            <NextLink href="/services" onClick={() => setOpen(false)}>Services</NextLink>
            <NextLink href="/industries/ecommerce" onClick={() => setOpen(false)}>Local</NextLink>
            <NextLink href="/work" onClick={() => setOpen(false)}>Work</NextLink>
            <NextLink href="/pricing" onClick={() => setOpen(false)}>Pricing</NextLink>
            <NextLink href="/about" onClick={() => setOpen(false)}>About</NextLink>
            <NextLink href="/blog" onClick={() => setOpen(false)}>Learn</NextLink>
            <NextLink href="/contact" className="mt-4 rounded-full bg-brand-primary px-5 py-3 text-center font-semibold" onClick={() => setOpen(false)}>
              Get Free Proposal
            </NextLink>
          </div>
        </div>
      )}
    </header>
  );
}
