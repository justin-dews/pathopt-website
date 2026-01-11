'use client';

import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import Link from 'next/link';
import {
  staggerContainerFast,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleUp,
  viewport
} from '@/lib/animations';

interface WhoItsForProps {
  headline: string;
  subheadline?: string;
  items?: string[];
  fitCriteria?: string[];
  notFitCriteria?: string[];
  cta?: {
    text: string;
    href: string;
  };
}

export function WhoItsFor({
  headline,
  subheadline,
  items,
  fitCriteria,
  notFitCriteria,
  cta,
}: WhoItsForProps) {
  // If using simple items list (no fit/not-fit split)
  const isSimpleList = items && items.length > 0 && !fitCriteria && !notFitCriteria;

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
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
          variants={fadeInUp}
        >
          {headline}
        </motion.h2>

        {/* Optional Subheadline */}
        {subheadline && (
          <motion.p
            className="text-lg text-[var(--color-text-muted)] mb-8 max-w-2xl"
            variants={fadeInUp}
          >
            {subheadline}
          </motion.p>
        )}

        {/* Simple List Layout */}
        {isSimpleList && (
          <motion.div
            className="bg-white p-8 rounded-lg max-w-2xl"
            variants={fadeInUp}
          >
            <motion.ul
              className="space-y-4"
              variants={staggerContainerFast}
            >
              {items.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3"
                  variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={viewport}
                    transition={{ delay: index * 0.08, type: 'spring' }}
                  >
                    <Check className="w-5 h-5 text-[var(--color-green)] mt-0.5 flex-shrink-0" />
                  </motion.div>
                  <span className="text-[var(--color-text)]">{item}</span>
                </motion.li>
              ))}
            </motion.ul>

            {cta && (
              <motion.div variants={scaleUp}>
                <Link
                  href={cta.href}
                  className="inline-flex items-center gap-2 mt-8 text-[var(--color-accent)] font-semibold hover:underline"
                >
                  {cta.text}
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </motion.div>
            )}
          </motion.div>
        )}

        {/* Split Fit/Not-Fit Layout */}
        {fitCriteria && notFitCriteria && (
          <motion.div
            className="grid md:grid-cols-2 gap-8 mt-8"
            variants={staggerContainerFast}
          >
            {/* Fit Criteria */}
            <motion.div
              className="bg-[var(--color-green-light)] p-8 rounded-lg"
              variants={fadeInLeft}
            >
              <p className="font-bold text-[var(--color-green)] mb-6">
                This is for you if...
              </p>
              <motion.ul
                className="space-y-4"
                variants={staggerContainerFast}
              >
                {fitCriteria.map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3"
                    variants={fadeInLeft}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={viewport}
                      transition={{ delay: index * 0.08, type: 'spring' }}
                    >
                      <Check className="w-5 h-5 text-[var(--color-green)] mt-0.5 flex-shrink-0" />
                    </motion.div>
                    <span className="text-[var(--color-text)]">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Not Fit Criteria */}
            <motion.div
              className="bg-[var(--color-accent-light)] p-8 rounded-lg"
              variants={fadeInRight}
            >
              <p className="font-bold text-[var(--color-accent)] mb-6">
                This is NOT for you if...
              </p>
              <motion.ul
                className="space-y-4"
                variants={staggerContainerFast}
              >
                {notFitCriteria.map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3"
                    variants={fadeInRight}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={viewport}
                      transition={{ delay: index * 0.08, type: 'spring' }}
                    >
                      <X className="w-5 h-5 text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                    </motion.div>
                    <span className="text-[var(--color-text)]">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}
