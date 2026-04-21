"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "@phosphor-icons/react";
import { FadeIn } from "./AnimatedSection";

export type FAQItem = {
  question: string;
  answer: string;
};

export default function FAQ({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <FadeIn key={item.question} delay={i * 0.05}>
            <div
              className={`rounded-xl border bg-surface/30 transition-colors duration-400 ${
                isOpen
                  ? "border-white/[0.1]"
                  : "border-white/[0.04] hover:border-white/[0.08]"
              }`}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full flex items-center justify-between gap-6 text-left px-5 md:px-6 py-5 md:py-6"
                aria-expanded={isOpen}
              >
                <span className="text-sm md:text-base font-medium text-white/95">
                  {item.question}
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="shrink-0 w-8 h-8 rounded-lg bg-surface border border-white/[0.08] flex items-center justify-center"
                >
                  <Plus size={14} weight="bold" className="text-accent" />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 md:px-6 pb-5 md:pb-6 -mt-1">
                      <p className="text-sm text-muted leading-relaxed max-w-[680px]">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </FadeIn>
        );
      })}
    </div>
  );
}
