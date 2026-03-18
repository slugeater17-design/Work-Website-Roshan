"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const workflowSteps = [
  {
    step: 1,
    title: "Free Consultation",
    description: "You set up a free consultation with us. We understand your needs and identify automation opportunities.",
  },
  {
    step: 2,
    title: "Choose Your Hosting",
    description: "Choose an appropriate hosting system — a local computer or cloud-based VPS depending on your requirements.",
  },
  {
    step: 3,
    title: "Configuration & Setup",
    description: "We configure and set up the systems and workflows tailored specifically for your operations.",
  },
  {
    step: 4,
    title: "AI Workforce Deployed",
    description: "We build the AI workforce according to your needs and it runs completely on auto. You focus on what matters.",
  },
];

export default function AIAutomations() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-base/80 backdrop-blur-md border-b border-border">
        <div className="px-6 py-4 sm:px-12 md:px-[120px]">
          <Link
            href="/"
            className="font-[family-name:var(--font-body)] text-sm text-muted hover:text-primary transition-colors"
          >
            &larr; Back to Home
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 pt-32 pb-24 sm:px-12 md:px-[120px] md:pt-40 md:pb-[100px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-block px-3 py-1 mb-6 font-[family-name:var(--font-body)] text-[11px] font-semibold tracking-[1.5px] text-ai-violet bg-ai-violet-bg">
            AI AUTOMATIONS & SYSTEMS
          </span>
          <h1 className="font-[family-name:var(--font-display)] text-4xl font-medium tracking-[-0.03em] text-primary sm:text-5xl md:text-6xl mb-6">
            Automate your workflow
          </h1>
          <p className="font-[family-name:var(--font-body)] text-lg text-muted leading-relaxed mb-8">
            Set up tools like OpenClaw for your personal stack and daily operations.
            Build systems that work for you, not the other way around.
          </p>
        </motion.div>
      </section>

      {/* How It Works - Workflow Chart */}
      <section className="px-6 py-24 sm:px-12 md:px-[120px] md:py-[100px] bg-surface">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-medium tracking-[-0.03em] text-primary sm:text-4xl mb-16 text-center">
            How it works
          </h2>

          {/* Workflow Steps */}
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block md:left-1/2 md:-translate-x-px" />

            <div className="space-y-12 md:space-y-16">
              {workflowSteps.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } items-start md:items-center gap-6`}
                >
                  {/* Step Number */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10">
                    <div className="w-12 h-12 rounded-full bg-ai-violet flex items-center justify-center">
                      <span className="font-[family-name:var(--font-body)] text-sm font-semibold text-white">
                        {item.step}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`ml-20 md:ml-0 md:w-[calc(50%-3rem)] ${
                      index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
                    }`}
                  >
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-medium text-primary mb-2">
                      {item.title}
                    </h3>
                    <p className="font-[family-name:var(--font-body)] text-sm text-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-[calc(50%-3rem)]" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Things You Can Achieve */}
      <section className="px-6 py-24 sm:px-12 md:px-[120px] md:py-[100px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-medium tracking-[-0.03em] text-primary sm:text-4xl mb-4 text-center">
            Things you can achieve with AI Automations
          </h2>
          <p className="font-[family-name:var(--font-body)] text-muted text-center mb-12">
            Real examples of what OpenClaw can do for you
          </p>

          {/* Screenshots Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {[1, 2, 3, 4].map((num) => (
              <div
                key={num}
                className="aspect-video bg-surface border border-border flex items-center justify-center"
              >
                <span className="font-[family-name:var(--font-body)] text-sm text-dim">
                  Screenshot {num} — Coming Soon
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 sm:px-12 md:px-[120px] md:py-[100px] bg-surface">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto text-center"
        >
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-medium tracking-[-0.03em] text-primary sm:text-4xl mb-6">
            Ready to automate?
          </h2>
          <p className="font-[family-name:var(--font-body)] text-muted mb-8">
            Get in touch to discuss how AI automations can transform your workflow.
          </p>
          <a
            href="mailto:roshan@creatingadam.in"
            className="inline-block rounded-full bg-ai-violet px-8 py-3.5 font-[family-name:var(--font-body)] text-[13px] font-medium text-white transition-opacity hover:opacity-90"
          >
            Get in touch
          </a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 sm:px-12 md:px-[120px] border-t border-border">
        <div className="flex flex-col items-center gap-4">
          <span className="font-[family-name:var(--font-body)] text-[13px] text-dim">
            +91-9820133408
          </span>
          <span className="font-[family-name:var(--font-body)] text-[13px] text-dim">
            roshan@creatingadam.in
          </span>
          <span className="font-[family-name:var(--font-body)] text-[11px] text-dim">
            &copy; 2026 Roshan Noronha. All rights reserved.
          </span>
        </div>
      </footer>
    </main>
  );
}
