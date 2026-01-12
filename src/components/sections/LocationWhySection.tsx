'use client';

import { motion } from 'framer-motion';
import {
  staggerContainer,
  fadeInUp,
  viewport,
} from '@/lib/animations';
import type { CityData } from '@/data/cities';

interface LocationWhySectionProps {
  city: CityData;
}

const benefits = [
  {
    title: 'See Where Every Dollar Goes',
    description:
      'Real-time dashboards, daily updates in plain English, and complete access to your accounts. No more wondering if your marketing is working.',
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
  },
  {
    title: 'Partners, Not Vendors',
    description:
      "We're three business owners who've written the same checks you're writing. We understand the pressure of making payroll, the frustration of wasted ad spend, and the need for straight answers.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    title: 'Results in 30 Days',
    description:
      "Not 6 months. Not 'give it time.' We've cut cost per lead in half within the first month for clients. If we can't show you results fast, we'll tell you.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: 'No Long-Term Contracts',
    description:
      "If we're not delivering value, you shouldn't be locked in. We earn your business every month. That's how it should work.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
];

export function LocationWhySection({ city }: LocationWhySectionProps) {
  return (
    <motion.section
      className="py-16 lg:py-24 bg-[var(--color-bg-alt)]"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={staggerContainer}
    >
      <div className="container-site">
        {/* Section Header */}
        <motion.div className="max-w-3xl mb-12" variants={fadeInUp}>
          <span className="label mb-4 block">Why {city.city} Businesses Choose Us</span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Fractional CMO Services Built for {city.region} Contractors
          </h2>
          <p className="text-lg text-[var(--color-text-muted)]">
            With {city.businessCount} businesses competing in {city.city}, you
            need marketing that actually moves the needle—not vanity metrics
            that look good in a report.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={staggerContainer}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-[var(--color-bg)] p-8 rounded-xl border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-colors"
              variants={fadeInUp}
            >
              <div className="w-12 h-12 rounded-lg bg-[var(--color-accent)]/10 text-[var(--color-accent)] flex items-center justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Local Industries */}
        <motion.div
          className="mt-16 p-8 bg-[var(--color-bg)] rounded-xl border border-[var(--color-border)]"
          variants={fadeInUp}
        >
          <h3 className="text-xl font-semibold mb-4">
            Industries We Serve in {city.city}
          </h3>
          <div className="flex flex-wrap gap-3">
            {city.industries.map((industry, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-[var(--color-bg-alt)] rounded-full text-sm font-medium text-[var(--color-text)]"
              >
                {industry.charAt(0).toUpperCase() + industry.slice(1)}
              </span>
            ))}
            <span className="px-4 py-2 bg-[var(--color-accent)]/10 text-[var(--color-accent)] rounded-full text-sm font-medium">
              + More Home Services
            </span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
