'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  staggerContainer,
  fadeInUp,
  scaleUp,
  viewport
} from '@/lib/animations';
import { useCountUp, formatCounterValue } from '@/lib/hooks/useCountUp';

interface MetricBlock {
  value: string;
  label: string;
}

interface CaseStudyPreview {
  title: string;
  description: string;
  href: string;
}

interface ProofSectionProps {
  headline: string;
  metrics?: MetricBlock[];
  caseStudy?: CaseStudyPreview;
  testimonial?: {
    quote: string;
    author: string;
    title: string;
  };
}

function MetricCard({ metric }: { metric: MetricBlock }) {
  // Extract numeric value if present for counter animation
  const numericMatch = metric.value.match(/^(\d+(?:\.\d+)?)/);
  const hasNumber = numericMatch !== null;
  const numericValue = hasNumber ? parseFloat(numericMatch[1]) : 0;
  const suffix = hasNumber ? metric.value.replace(numericMatch[0], '') : metric.value;

  const { count, ref } = useCountUp({
    end: numericValue,
    duration: 1500,
    decimals: metric.value.includes('.') ? 1 : 0
  });

  return (
    <motion.div
      className="bg-white p-6 rounded-lg border border-[var(--color-border)]"
      variants={scaleUp}
      ref={hasNumber ? ref : undefined}
    >
      <div className="stat-number text-3xl lg:text-4xl text-[var(--color-accent)] mb-2">
        {hasNumber ? formatCounterValue(count, { suffix }) : metric.value}
      </div>
      <p className="text-[var(--color-text-muted)] text-sm">
        {metric.label}
      </p>
    </motion.div>
  );
}

export function ProofSection({
  headline,
  metrics,
  caseStudy,
  testimonial,
}: ProofSectionProps) {
  return (
    <motion.section
      className="relative py-20 lg:py-28 bg-[var(--color-bg-alt)]"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={staggerContainer}
    >
      <div className="container-content">
        {/* Headline */}
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12"
          variants={fadeInUp}
        >
          {headline}
        </motion.h2>

        {/* Metrics Grid */}
        {metrics && metrics.length > 0 && (
          <motion.div
            className="grid sm:grid-cols-3 gap-6 mb-12"
            variants={staggerContainer}
          >
            {metrics.map((metric, index) => (
              <MetricCard key={index} metric={metric} />
            ))}
          </motion.div>
        )}

        {/* Case Study Preview */}
        {caseStudy && (
          <motion.div
            className="bg-white p-8 rounded-lg border-l-4 border-[var(--color-green)] mb-12"
            variants={fadeInUp}
          >
            <h3 className="font-[family-name:var(--font-display)] font-bold text-xl text-[var(--color-text)] mb-4">
              {caseStudy.title}
            </h3>
            <p className="text-[var(--color-text-muted)] mb-6">
              {caseStudy.description}
            </p>
            <Link
              href={caseStudy.href}
              className="inline-flex items-center gap-2 text-[var(--color-accent)] font-medium hover:underline"
            >
              Read the Full Case Study
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

        {/* Testimonial */}
        {testimonial && (
          <motion.div
            className="relative pl-8 border-l-4 border-[var(--color-gold)]"
            variants={fadeInUp}
          >
            <p className="text-xl font-[family-name:var(--font-display)] text-[var(--color-text)] mb-4 italic">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <p className="text-[var(--color-text-muted)]">
              <span className="font-medium">{testimonial.author}</span>,{' '}
              {testimonial.title}
            </p>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}
