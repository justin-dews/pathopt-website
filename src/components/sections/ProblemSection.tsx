'use client';

import { motion } from 'framer-motion';
import {
  staggerContainerFast,
  fadeInUp,
  fadeInLeft,
  viewport
} from '@/lib/animations';

interface ProblemSectionProps {
  headline: string;
  introParagraphs: string[];
  problemItems?: Array<{
    title: string;
    description: string;
  }>;
  symptoms?: string[];
  closingParagraph?: string;
}

export function ProblemSection({
  headline,
  introParagraphs,
  problemItems,
  symptoms,
  closingParagraph,
}: ProblemSectionProps) {
  return (
    <motion.section
      className="relative py-20 lg:py-28 bg-[var(--color-bg-alt)]"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={staggerContainerFast}
    >
      <div className="container-content">
        {/* Headline */}
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-10"
          variants={fadeInUp}
        >
          {headline}
        </motion.h2>

        {/* Intro Paragraphs */}
        <motion.div className="space-y-6 mb-10" variants={staggerContainerFast}>
          {introParagraphs.map((paragraph, index) => (
            <motion.p
              key={index}
              className="text-[var(--color-text-muted)] text-lg"
              variants={fadeInUp}
            >
              {paragraph}
            </motion.p>
          ))}
        </motion.div>

        {/* Problem Items (Options) */}
        {problemItems && problemItems.length > 0 && (
          <motion.div className="space-y-6 mb-10" variants={staggerContainerFast}>
            {problemItems.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg border-l-4 border-[var(--color-accent)]"
                variants={fadeInLeft}
              >
                <p className="font-[family-name:var(--font-display)] font-bold text-[var(--color-text)] mb-2">
                  {item.title}
                </p>
                <p className="text-[var(--color-text-muted)]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Symptoms List */}
        {symptoms && symptoms.length > 0 && (
          <motion.div
            className="bg-white p-8 rounded-lg mb-10"
            variants={fadeInLeft}
          >
            <p className="font-bold text-[var(--color-text)] mb-4">
              The symptoms:
            </p>
            <motion.ul
              className="space-y-3"
              variants={staggerContainerFast}
            >
              {symptoms.map((symptom, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3 text-[var(--color-text-muted)]"
                  variants={fadeInLeft}
                >
                  <span className="text-[var(--color-accent)] mt-1">•</span>
                  {symptom}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}

        {/* Closing */}
        {closingParagraph && (
          <motion.p
            className="text-lg font-medium text-[var(--color-text)]"
            variants={fadeInUp}
          >
            {closingParagraph}
          </motion.p>
        )}
      </div>
    </motion.section>
  );
}
