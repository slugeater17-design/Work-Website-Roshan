"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex h-screen flex-col items-center justify-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="font-[family-name:var(--font-display)] text-5xl font-medium tracking-[-0.03em] text-primary sm:text-7xl md:text-8xl"
      >
        Roshan Noronha
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-5 font-[family-name:var(--font-body)] text-[13px] font-medium tracking-[3px] text-muted"
      >
        Art &nbsp;&middot;&nbsp; Merch &nbsp;&middot;&nbsp; AI
        &nbsp;&middot;&nbsp; Systems
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-12 flex flex-col items-center gap-2"
      >
        <div className="h-10 w-px bg-dim" />
        <span className="font-[family-name:var(--font-body)] text-[9px] font-semibold tracking-[2px] text-dim">
          SCROLL
        </span>
      </motion.div>
    </section>
  );
}
