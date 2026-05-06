const logos = Array.from({ length: 20 }, (_, i) => `Client ${i + 1}`);

export function MarqueeStrip() {
  const items = [...logos, ...logos];
  return (
    <section className="border-y border-black/10 py-8">
      <div className="brand-container overflow-hidden">
        <p className="mb-4 text-center text-sm text-black/70">Trusted by brands across industries</p>
        <div className="marquee-track flex w-max gap-10">
          {items.map((item, idx) => (
            <span key={`${item}-${idx}`} className="text-sm font-semibold uppercase tracking-[0.2em] text-black/55">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
