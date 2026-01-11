'use client';

import { motion } from 'framer-motion';
import {
  staggerContainer,
  fadeInUp,
  fadeInRight,
  viewport
} from '@/lib/animations';

interface SolutionItem {
  title: string;
  description: string;
}

interface SolutionSectionProps {
  headline: string;
  introParagraph?: string;
  items: SolutionItem[];
}

export function SolutionSection({
  headline,
  introParagraph,
  items,
}: SolutionSectionProps) {
  return (
    <motion.section
      className="relative py-20 lg:py-28"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={staggerContainer}
    >
      <div className="container-content">
        {/* Headline */}
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8"
          variants={fadeInUp}
        >
          {headline}
        </motion.h2>

        {/* Intro Paragraph */}
        {introParagraph && (
          <motion.p
            className="text-lg text-[var(--color-text-muted)] mb-12 max-w-2xl"
            variants={fadeInUp}
          >
            {introParagraph}
          </motion.p>
        )}

        {/* What You Get Label */}
        <motion.p className="label mb-6" variants={fadeInUp}>
          What You Get
        </motion.p>

        {/* Solution Items Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={staggerContainer}
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-lg border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-colors duration-300"
              variants={fadeInRight}
            >
              <h3 className="font-[family-name:var(--font-display)] font-bold text-lg text-[var(--color-text)] mb-3">
                {item.title}
              </h3>
              <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
