"use client";

import ScrollReveal from "./ScrollReveal";

const brands = [
  "Famous Studios",
  "Emmay Entertainment",
  "Nicko Cruises",
  "MushMeToo",
  "Hogarth Studios",
];

export default function SocialProof() {
  return (
    <section className="bg-surface px-6 py-24 sm:px-12 md:px-[120px] md:py-[100px]">
      <ScrollReveal>
        <div className="flex flex-col items-center gap-12">
          <span className="font-[family-name:var(--font-body)] text-[11px] font-semibold tracking-[1.5px] text-dim">
            TRUSTED BY
          </span>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {brands.map((brand) => (
              <div
                key={brand}
                className="flex items-center justify-center border border-border px-7 py-4 transition-colors duration-300 hover:border-white/[0.15]"
              >
                <span className="font-[family-name:var(--font-body)] text-xs font-medium text-muted">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
