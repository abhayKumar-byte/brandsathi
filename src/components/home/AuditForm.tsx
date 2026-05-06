"use client";

import { useState } from "react";

export function AuditForm() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <form
      className="grid gap-3 md:grid-cols-5"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}>
      <input required placeholder="Name" className="rounded-xl border border-black/15 bg-white px-4 py-3" />
      <input required type="email" placeholder="Email" className="rounded-xl border border-black/15 bg-white px-4 py-3" />
      <input required placeholder="Website URL" className="rounded-xl border border-black/15 bg-white px-4 py-3" />
      <input required placeholder="Phone" className="rounded-xl border border-black/15 bg-white px-4 py-3" />
      <button className="rounded-xl bg-brand-primary px-5 py-3 font-semibold text-black">Get My Free Audit</button>
      {submitted && <p className="md:col-span-5 text-sm text-brand-accent">Thanks. We will send your audit in 24 hours.</p>}
    </form>
  );
}
