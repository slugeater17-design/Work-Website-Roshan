"use client";

import ScrollReveal from "./ScrollReveal";

export default function ContactCTA() {
  return (
    <section
      id="contact"
      className="flex flex-col items-center gap-8 bg-surface px-6 py-24 sm:px-12 md:px-[120px] md:py-[100px]"
    >
      <ScrollReveal>
        <div className="flex flex-col items-center gap-8">
          <h2 className="text-center font-[family-name:var(--font-display)] text-4xl font-medium tracking-[-0.03em] text-primary sm:text-5xl">
            Let&apos;s build something
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:hello@creatingadam.in"
              className="rounded-full bg-primary px-8 py-3.5 font-[family-name:var(--font-body)] text-[13px] font-medium text-base transition-opacity hover:opacity-90"
            >
              Get in touch
            </a>
            <a
              href="https://instagram.com/creatingadam.in"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border px-6 py-3.5 font-[family-name:var(--font-body)] text-[13px] text-muted transition-colors hover:border-white/[0.15] hover:text-primary"
            >
              Instagram
            </a>
            <a
              href="https://youtube.com/@creatingadam"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border px-6 py-3.5 font-[family-name:var(--font-body)] text-[13px] text-muted transition-colors hover:border-white/[0.15] hover:text-primary"
            >
              YouTube
            </a>
            <a
              href="https://freelanca.creatingadam.in"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border px-6 py-3.5 font-[family-name:var(--font-body)] text-[13px] text-muted transition-colors hover:border-white/[0.15] hover:text-primary"
            >
              FreelanCA
            </a>
          </div>

          <span className="font-[family-name:var(--font-body)] text-[13px] text-dim">
            hello@creatingadam.in
          </span>

          <div className="h-px w-10 bg-border" />

          <span className="font-[family-name:var(--font-body)] text-[11px] text-dim">
            &copy; 2026 Roshan Noronha. All rights reserved.
          </span>
        </div>
      </ScrollReveal>
    </section>
  );
}
