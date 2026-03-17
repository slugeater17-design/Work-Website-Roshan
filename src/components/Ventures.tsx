"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

type ColorKey = "blue" | "green" | "violet" | "amber";

interface Venture {
  monogram: string;
  title: string;
  description: string;
  link: string;
  linkLabel: string;
  color: ColorKey;
  external?: boolean;
}

const colorMap: Record<
  ColorKey,
  { text: string; bg: string; border: string }
> = {
  blue: {
    text: "text-ca-blue",
    bg: "bg-ca-blue-bg",
    border: "border-ca-blue/20",
  },
  green: {
    text: "text-fl-green",
    bg: "bg-fl-green-bg",
    border: "border-fl-green/20",
  },
  violet: {
    text: "text-ai-violet",
    bg: "bg-ai-violet-bg",
    border: "border-ai-violet/20",
  },
  amber: {
    text: "text-amber",
    bg: "bg-amber-bg",
    border: "border-amber/20",
  },
};

const individualVentures: Venture[] = [
  {
    monogram: "CA",
    title: "Creating Adam",
    description:
      "Wear art. Original designs, premium fabrics, limited drops.",
    link: "https://creatingadam.in",
    linkLabel: "creatingadam.in",
    color: "blue",
    external: true,
  },
  {
    monogram: "FL",
    title: "FreelanCA",
    description:
      "Your money, sorted. Invoicing, taxes & financial OS built for freelancers.",
    link: "https://freelanca.creatingadam.in",
    linkLabel: "freelanca.creatingadam.in",
    color: "green",
    external: true,
  },
  {
    monogram: "HA",
    title: "House of Artists",
    description:
      "Commission an artist. Pick from curated creatives for custom, one-of-a-kind work.",
    link: "#contact",
    linkLabel: "house-of-artists",
    color: "blue",
  },
  {
    monogram: "WD",
    title: "Website Design",
    description:
      "Get online. Fast, beautiful sites that actually convert — your portfolio, store, or personal brand.",
    link: "#contact",
    linkLabel: "Get in touch",
    color: "amber",
  },
  {
    monogram: "AI",
    title: "AI Automation",
    description:
      "Automate your workflow. Set up tools like Openclaw for your personal stack and daily operations.",
    link: "#contact",
    linkLabel: "Get in touch",
    color: "violet",
  },
];

const companyVentures: Venture[] = [
  {
    monogram: "CC",
    title: "CA Custom",
    description:
      "Branded merch for your team. End-to-end from concept to delivery, at any scale.",
    link: "#contact",
    linkLabel: "ca-customs",
    color: "blue",
  },
  {
    monogram: "WD",
    title: "Website Design",
    description:
      "Ship your company site. Fast, responsive, and built to scale with your business.",
    link: "#contact",
    linkLabel: "Get in touch",
    color: "amber",
  },
  {
    monogram: "AI",
    title: "AI Automation & Systems",
    description:
      "Enterprise AI systems. Strategy, implementation, and scale for your organization's workflows.",
    link: "#contact",
    linkLabel: "Consulting",
    color: "violet",
  },
  {
    monogram: "CA",
    title: "Creating Adam",
    description:
      "Corporate gifting. Premium artist-designed apparel for clients, events, and team milestones.",
    link: "https://creatingadam.in",
    linkLabel: "creatingadam.in",
    color: "blue",
    external: true,
  },
];

function VentureCard({
  venture,
  index,
}: {
  venture: Venture;
  index: number;
}) {
  const colors = colorMap[venture.color];

  return (
    <motion.a
      href={venture.link}
      target={venture.external ? "_blank" : undefined}
      rel={venture.external ? "noopener noreferrer" : undefined}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{
        duration: 0.35,
        delay: index * 0.06,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="group flex gap-4 rounded-none border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/[0.12] hover:bg-surface-raised sm:gap-5 sm:p-6"
    >
      <div className="shrink-0">
        <div
          className={`flex items-center justify-center rounded-none px-2 py-1 ${colors.bg}`}
        >
          <span
            className={`font-[family-name:var(--font-body)] text-[10px] font-semibold tracking-[1px] ${colors.text}`}
          >
            {venture.monogram}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <h3 className="font-[family-name:var(--font-display)] text-xl font-medium text-primary">
          {venture.title}
        </h3>
        <p className="font-[family-name:var(--font-body)] text-[13px] leading-relaxed text-muted">
          {venture.description}
        </p>
        <span
          className={`mt-1 font-[family-name:var(--font-body)] text-[11px] font-medium ${colors.text} transition-opacity group-hover:opacity-80`}
        >
          {venture.linkLabel} &rarr;
        </span>
      </div>
    </motion.a>
  );
}

export default function Ventures() {
  const [activeTab, setActiveTab] = useState<"individual" | "company">(
    "individual"
  );

  const ventures =
    activeTab === "individual" ? individualVentures : companyVentures;

  return (
    <section className="px-6 py-24 sm:px-12 md:px-[120px] md:py-[100px]">
      <ScrollReveal>
        <div className="mb-12 flex flex-col items-center gap-6">
          <span className="font-[family-name:var(--font-body)] text-[11px] font-semibold tracking-[1.5px] text-dim">
            ARE YOU
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-4xl font-medium tracking-[-0.03em] text-primary sm:text-[44px]">
            Are you?
          </h2>

          <div className="flex">
            <button
              onClick={() => setActiveTab("individual")}
              className={`rounded-full px-8 py-3.5 font-[family-name:var(--font-body)] text-sm font-medium transition-all duration-300 ${
                activeTab === "individual"
                  ? "bg-primary text-base"
                  : "border border-border text-muted hover:border-white/[0.15] hover:text-primary"
              }`}
            >
              An Individual
            </button>
            <button
              onClick={() => setActiveTab("company")}
              className={`rounded-full px-8 py-3.5 font-[family-name:var(--font-body)] text-sm transition-all duration-300 ${
                activeTab === "company"
                  ? "bg-primary font-medium text-base"
                  : "border border-border text-muted hover:border-white/[0.15] hover:text-primary"
              }`}
            >
              A Company
            </button>
          </div>
        </div>
      </ScrollReveal>

      <div className="mx-auto max-w-3xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-3"
          >
            <span className="mb-1 font-[family-name:var(--font-body)] text-[10px] font-semibold tracking-[1.5px] text-dim">
              {activeTab === "individual"
                ? "FOR INDIVIDUALS"
                : "FOR COMPANIES"}
            </span>
            {ventures.map((venture, i) => (
              <VentureCard key={venture.title} venture={venture} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
