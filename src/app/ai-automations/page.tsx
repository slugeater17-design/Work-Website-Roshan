"use client";

import Link from "next/link";
import { motion } from "framer-motion";

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

      {/* What is OpenClaw */}
      <section className="px-6 py-24 sm:px-12 md:px-[120px] md:py-[100px] bg-surface">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-medium tracking-[-0.03em] text-primary sm:text-4xl mb-6">
            What is OpenClaw?
          </h2>
          <p className="font-[family-name:var(--font-body)] text-base text-muted leading-relaxed mb-6">
            OpenClaw is a personal AI-powered automation system designed to streamline your daily operations.
            From managing tasks to automating repetitive workflows, OpenClaw helps you focus on what matters most.
          </p>
          <ul className="space-y-4">
            {[
              "Automate repetitive tasks and save hours every week",
              "Integrate with your existing tools and workflows",
              "AI-powered decision making and task prioritization",
              "Custom workflows tailored to your specific needs",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-ai-violet mt-1">→</span>
                <span className="font-[family-name:var(--font-body)] text-muted">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* Screenshots Placeholder */}
      <section className="px-6 py-24 sm:px-12 md:px-[120px] md:py-[100px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-medium tracking-[-0.03em] text-primary sm:text-4xl mb-12 text-center">
            How it works
          </h2>

          {/* Placeholder for screenshots */}
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
