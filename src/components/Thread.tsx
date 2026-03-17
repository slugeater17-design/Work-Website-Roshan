"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const nodes = [
  { label: "Art & Design", color: "blue" as const },
  { label: "Brand & Merch", color: "blue" as const },
  { label: "Artist Platform", color: "blue" as const },
  { label: "Freelancer OS", color: "green" as const },
  { label: "AI Systems", color: "violet" as const },
  { label: "Web Design", color: "amber" as const },
];

const colorStyles = {
  blue: "bg-ca-blue-bg text-ca-blue",
  green: "bg-fl-green-bg text-fl-green",
  violet: "bg-ai-violet-bg text-ai-violet",
  amber: "bg-amber-bg text-amber",
};

export default function Thread() {
  return (
    <section className="px-6 py-24 sm:px-12 md:px-[120px] md:py-[100px]">
      <ScrollReveal>
        <div className="flex flex-col items-center gap-10">
          <div className="flex flex-col items-center gap-4 text-center">
            <span className="font-[family-name:var(--font-body)] text-[11px] font-semibold tracking-[1.5px] text-dim">
              THE THREAD
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-medium tracking-[-0.03em] text-primary sm:text-4xl">
              From canvas to cloud
            </h2>
            <p className="max-w-[700px] font-[family-name:var(--font-body)] text-[15px] leading-relaxed text-muted">
              Every venture is a node on the same spectrum — creativity at one
              end, technology at the other, and I operate across the full range.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {nodes.map((node, i) => (
              <motion.div
                key={node.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                className="flex items-center gap-3"
              >
                <span
                  className={`rounded-full px-4 py-2 font-[family-name:var(--font-body)] text-xs font-medium ${colorStyles[node.color]}`}
                >
                  {node.label}
                </span>
                {i < nodes.length - 1 && (
                  <span className="hidden text-xs text-dim sm:inline">
                    &rarr;
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
