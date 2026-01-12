'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import {
  staggerContainer,
  fadeInUp,
  paragraphReveal,
  viewport,
} from '@/lib/animations';
import type { CityData } from '@/data/cities';

interface LocationHeroProps {
  city: CityData;
}

export function LocationHero({ city }: LocationHeroProps) {
  return (
    <motion.section
      className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-[var(--color-bg)]"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={staggerContainer}
    >
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(var(--color-text) 1px, transparent 1px),
            linear-gradient(90deg, var(--color-text) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative container-site">
        {/* Breadcrumb */}
        <motion.nav
          className="mb-6"
          variants={fadeInUp}
          aria-label="Breadcrumb"
        >
          <ol className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
            <li>
              <Link
                href="/"
                className="hover:text-[var(--color-accent)] transition-colors"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link
                href="/locations"
                className="hover:text-[var(--color-accent)] transition-colors"
              >
                Locations
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <span className="text-[var(--color-text)]">{city.city}</span>
            </li>
          </ol>
        </motion.nav>

        <div className="max-w-3xl">
          {/* Label */}
          <motion.div className="mb-4" variants={fadeInUp}>
            <span className="label">Fractional CMO {city.city}</span>
          </motion.div>

          {/* Headline - Direct Response: Specific + Outcome */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-[1.1]"
            variants={fadeInUp}
          >
            <span className="block">
              {city.city} Businesses Deserve Marketing
            </span>
            <span className="block text-[var(--color-accent)]">
              That Actually Works
            </span>
          </motion.h1>

          {/* Subheadline - Local Context */}
          <motion.p
            className="text-xl lg:text-2xl text-[var(--color-text-muted)] mb-8 leading-relaxed"
            variants={paragraphReveal}
          >
            Fractional CMO services for {city.industries.slice(0, 3).join(', ')}{' '}
            and home services businesses in {city.marketContext}.
          </motion.p>

          {/* Body - Pain Point + Solution */}
          <motion.div className="space-y-4 mb-10" variants={staggerContainer}>
            <motion.p
              className="text-lg text-[var(--color-text)] leading-relaxed"
              variants={paragraphReveal}
            >
              You&apos;ve probably tried local marketing agencies. Maybe a
              national one too. Same story every time: big promises, confusing
              reports, and a nagging feeling you&apos;re not getting your
              money&apos;s worth.
            </motion.p>

            <motion.p
              className="text-lg text-[var(--color-text)] leading-relaxed"
              variants={paragraphReveal}
            >
              We&apos;re three business owners who built PathOpt after living
              that exact frustration. Now we bring fractional CMO services to{' '}
              {city.city} businesses—strategic marketing leadership with
              complete transparency into where every dollar goes.
            </motion.p>

            <motion.p
              className="text-base text-[var(--color-brown)] leading-relaxed"
              variants={paragraphReveal}
            >
              No long-term contracts. No confusing jargon. Just real results you
              can see every day.
            </motion.p>
          </motion.div>

          {/* Stats - Local Social Proof */}
          <motion.div
            className="flex flex-wrap gap-8 mb-10 pb-10 border-b border-[var(--color-border)]"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <div className="text-3xl font-medium text-[var(--color-accent)] mb-1">
                $47→$27
              </div>
              <div className="text-sm text-[var(--color-brown)]">
                Cost Per Lead Reduction
              </div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <div className="text-3xl font-medium text-[var(--color-accent)] mb-1">
                30 Days
              </div>
              <div className="text-sm text-[var(--color-brown)]">
                To See Results
              </div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <div className="text-3xl font-medium text-[var(--color-accent)] mb-1">
                100%
              </div>
              <div className="text-sm text-[var(--color-brown)]">
                Transparency
              </div>
            </motion.div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            variants={fadeInUp}
          >
            <Button href="/contact">
              Get Your Free {city.city} Market Analysis
            </Button>
            <Button href="/case-studies/homeworks-construction" variant="secondary">
              See How We Cut Lead Costs 43%
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
