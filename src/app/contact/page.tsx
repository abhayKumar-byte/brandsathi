import { ContactForm } from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <main className="brand-container py-16">
      <h1 className="text-5xl font-bold">Get Your Free Proposal</h1>
      <p className="mt-3 text-black/70">Tell us your goals and we will send a practical plan within one business day.</p>
      <div className="mt-12 grid max-w-5xl gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold">Contact BrandSathi</h2>
          <p className="mt-3 text-black/70">India-first. Global-ready. Speak to an expert about SEO, Shopify, ads, or product growth.</p>
          <div className="mt-5 space-y-2 text-sm text-black/75">
            <p>Email: hello@brandsathi.com</p>
            <p>Phone: +91 98765 43210</p>
            <p>WhatsApp: +91 98765 43210</p>
            <p>Address: Ahmedabad, Gujarat, India</p>
          </div>
        </div>
        <div className="brand-card p-5">
          <ContactForm />
        </div>
      </div>
      <section className="mt-12 grid gap-6 md:grid-cols-2">
        <article className="brand-card p-6">
          <h2 className="text-2xl font-bold">What Happens After You Submit?</h2>
          <ol className="mt-3 space-y-2 text-sm text-black/75">
            <li>1. We review your website and current channels.</li>
            <li>2. You get a tailored strategy call with priorities.</li>
            <li>3. We share a transparent 30/60/90-day action plan.</li>
          </ol>
        </article>
        <article className="brand-card p-6">
          <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
          <div className="mt-3 space-y-3 text-sm text-black/75">
            <p><strong>Do you work internationally?</strong> Yes, we support India-first and global campaigns.</p>
            <p><strong>Minimum contract period?</strong> Most retainers start at 3 months for meaningful outcomes.</p>
            <p><strong>Do you provide one-time audits?</strong> Yes, we do audit-only engagements too.</p>
          </div>
        </article>
      </section>
    </main>
  );
}
