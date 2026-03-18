"use client";

import { useEffect, useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";

const brands = [
  "Famous Studios",
  "Emmay Entertainment",
  "Nicko Cruises",
  "MushMeToo",
  "Hogarth Studios",
];

export default function SocialProof() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % brands.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Show 3 brands at a time on desktop, 1 on mobile
  const getVisibleBrands = () => {
    const indices = [];
    for (let i = 0; i < 3; i++) {
      indices.push((currentIndex + i) % brands.length);
    }
    return indices;
  };

  return (
    <section className="bg-surface px-6 py-24 sm:px-12 md:px-[120px] md:py-[100px]">
      <ScrollReveal>
        <div className="flex flex-col items-center gap-12">
          <span className="font-[family-name:var(--font-body)] text-[11px] font-semibold tracking-[1.5px] text-dim">
            TRUSTED BY
          </span>

          <div className="relative h-16 w-full max-w-3xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center gap-4 sm:gap-6"
              >
                {getVisibleBrands().map((index) => (
                  <div
                    key={brands[index]}
                    className="flex items-center justify-center border border-border px-7 py-4 transition-colors duration-300 hover:border-white/[0.15]"
                  >
                    <span className="font-[family-name:var(--font-body)] text-xs font-medium text-muted whitespace-nowrap">
                      {brands[index]}
                    </span>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel indicators */}
          <div className="flex gap-2">
            {brands.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-primary w-4" : "bg-border"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
