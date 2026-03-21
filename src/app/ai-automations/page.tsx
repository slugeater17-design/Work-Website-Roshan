"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

const individualUseCases = [
  {
    title: "Morning Brief",
    description: "Automated daily summary of weather, calendar events, and news delivered to you every morning.",
  },
  {
    title: "Shopping List",
    description: "Collects grocery items from chat messages and organizes them into a shared document automatically.",
  },
  {
    title: "Voice Journal",
    description: "Converts your voice recordings into structured daily journal entries with AI organization.",
  },
  {
    title: "Package Tracking",
    description: "Monitors all your delivery statuses and sends you alerts when packages are near.",
  },
  {
    title: "Email Summaries",
    description: "Digests your unread messages and flags urgent items so you never miss what matters.",
  },
  {
    title: "Receipt Logging",
    description: "Extracts vendor and amount data from receipt photos into organized expense spreadsheets.",
  },
  {
    title: "Smart Home Control",
    description: "Triggers lights, devices, and home automation via simple chat commands.",
  },
  {
    title: "Meal Planning",
    description: "Suggests recipes based on preferences and automatically builds your weekly grocery list.",
  },
  {
    title: "Document Assistant",
    description: "Private local AI that analyzes contracts, files, and documents without sending data anywhere.",
  },
];

const companyUseCases = [
  {
    title: "Meeting Transcription",
    description: "Transcribes meeting audio and extracts action items with assigned owners automatically.",
  },
  {
    title: "Brand Monitoring",
    description: "Tracks brand mentions across social media with sentiment analysis reports.",
  },
  {
    title: "Client Onboarding",
    description: "Creates folders, sends welcome emails, and schedules calls automatically for new clients.",
  },
  {
    title: "KPI Reports",
    description: "Screenshots dashboards and posts key metrics to Slack or Discord on schedule.",
  },
  {
    title: "Content Ideation",
    description: "Generates blog topics, headlines, and content outlines based on your niche.",
  },
  {
    title: "Draft Generation",
    description: "Expands bullet-point outlines into full articles ready for review.",
  },
  {
    title: "Image Generation",
    description: "Creates on-brand social media visuals via AI APIs matching your style guide.",
  },
  {
    title: "Content Repurposing",
    description: "Adapts single posts for multiple platforms — LinkedIn, Twitter, Instagram, and more.",
  },
  {
    title: "Community Replies",
    description: "Drafts responses to common support questions for faster customer service.",
  },
  {
    title: "Server Monitoring",
    description: "Alerts your team when disk, CPU, or RAM exceed thresholds before issues occur.",
  },
  {
    title: "CI/CD Monitoring",
    description: "Notifies on build failures and deployment completions to keep your team informed.",
  },
  {
    title: "PR Summaries",
    description: "Reviews code changes automatically and suggests feedback for faster reviews.",
  },
  {
    title: "Product Research",
    description: "Compiles comparison reports on tools, services, and competitors automatically.",
  },
  {
    title: "Browser Automation",
    description: "Fills forms and automates repetitive admin tasks on internal tools.",
  },
];

const dashboardCards = [
  {
    id: "ai-workforce",
    title: "AI Workforce",
    description: "Monitor all your AI agents in one place. See which tasks they're handling, their status, and performance metrics.",
    image: "/openclaw/ai-workforce.png"
  },
  {
    id: "pipeline",
    title: "Pipeline Flows",
    description: "Visualize your automation pipelines. Track data flow between systems and identify bottlenecks instantly.",
    image: "/openclaw/pipeline.png"
  },
  {
    id: "newsletter",
    title: "Newsletter",
    description: "Automated content curation and distribution. Your AI assembles and sends newsletters on schedule.",
    image: "/openclaw/newsletter.png"
  },
  {
    id: "costs",
    title: "Usage & Costs",
    description: "Track API usage, compute costs, and ROI across all your automations. Full transparency on spending.",
    image: "/openclaw/costs.png"
  },
];

export default function AIAutomations() {
  const [activeTab, setActiveTab] = useState<"individual" | "company">("company");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const useCases = activeTab === "individual" ? individualUseCases : companyUseCases;

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

      {/* AI Command Center - Dashboard Cards */}
      <section className="px-6 py-24 sm:px-12 md:px-[120px] md:py-[100px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-medium tracking-[-0.03em] text-primary sm:text-4xl mb-4 text-center">
            Your Personal AI Command Center
          </h2>
          <p className="font-[family-name:var(--font-body)] text-muted text-center mb-16">
            Every client gets a custom dashboard to monitor their AI workforce in real time
          </p>

          {/* Dashboard Cards Grid */}
          <div className="grid gap-8 md:grid-cols-2">
            {dashboardCards.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(card.image)}
              >
                {/* Card Image with Glow */}
                <div className="relative rounded-lg overflow-hidden border border-border bg-surface transition-all duration-300 hover:border-indigo-500/70 shadow-[0_0_15px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.6)]">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <span className="font-[family-name:var(--font-body)] text-white text-sm font-medium">
                      Click to view full size
                    </span>
                  </div>
                </div>

                {/* Card Description */}
                <div className="mt-4">
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-medium text-primary mb-2">
                    {card.title}
                  </h3>
                  <p className="font-[family-name:var(--font-body)] text-sm text-muted leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Full Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-6xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-ai-violet transition-colors font-[family-name:var(--font-body)] text-sm"
              >
                Close ✕
              </button>
              <img
                src={selectedImage}
                alt="Workflow screenshot"
                className="w-full h-full object-contain rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Things You Can Achieve - Tabbed */}
      <section className="px-6 py-24 sm:px-12 md:px-[120px] md:py-[100px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-medium tracking-[-0.03em] text-primary sm:text-4xl mb-4 text-center">
            Things you can do with AI Automation Systems
          </h2>
          <p className="font-[family-name:var(--font-body)] text-muted text-center mb-8">
            Real automation examples for your personal or business needs
          </p>

          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <div className="flex">
              <button
                onClick={() => setActiveTab("individual")}
                className={`rounded-full px-8 py-3.5 font-[family-name:var(--font-body)] text-sm font-medium transition-all duration-300 ${
                  activeTab === "individual"
                    ? "bg-ai-violet text-white"
                    : "border border-border text-muted hover:border-white/[0.15] hover:text-primary"
                }`}
              >
                For Individuals
              </button>
              <button
                onClick={() => setActiveTab("company")}
                className={`rounded-full px-8 py-3.5 font-[family-name:var(--font-body)] text-sm font-medium transition-all duration-300 ${
                  activeTab === "company"
                    ? "bg-ai-violet text-white"
                    : "border border-border text-muted hover:border-white/[0.15] hover:text-primary"
                }`}
              >
                For Companies
              </button>
            </div>
          </div>

          {/* Use Cases Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group border border-border bg-surface p-5 transition-all duration-300 hover:border-ai-violet/30 hover:bg-surface-raised"
                >
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-medium text-primary mb-2">
                    {useCase.title}
                  </h3>
                  <p className="font-[family-name:var(--font-body)] text-[13px] text-muted leading-relaxed">
                    {useCase.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
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
            +91 9820134048
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
