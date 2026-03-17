"use client";

import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section className="px-6 py-24 sm:px-12 md:px-[120px] md:py-[100px]">
      <ScrollReveal>
        <div className="flex max-w-2xl flex-col gap-8">
          <span className="font-[family-name:var(--font-body)] text-[11px] font-semibold tracking-[1.5px] text-dim">
            ABOUT
          </span>

          <h2 className="font-[family-name:var(--font-display)] text-4xl font-medium tracking-[-0.03em] text-primary">
            Roshan Noronha
          </h2>

          <p className="font-[family-name:var(--font-body)] text-base leading-[1.7] text-muted">
            Mumbai-based creative technologist building at the intersection of
            art, commerce, and AI. From artist-curated apparel to freelancer
            fintech — every venture is a bet on India&apos;s creative economy.
          </p>

          <div className="h-px w-12 bg-dim" />

          <p className="max-w-lg font-[family-name:var(--font-display)] text-xl italic leading-relaxed text-muted">
            I don&apos;t pick between creativity and technology. I build where
            they meet.
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}
