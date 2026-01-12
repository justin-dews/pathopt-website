'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import {
  staggerContainer,
  fadeInUp,
  paragraphReveal,
  scaleUp,
  viewport
} from '@/lib/animations';
import { useCountUp, formatCounterValue } from '@/lib/hooks/useCountUp';

const stats = [
  { number: '40+', label: 'Combined Years', isCounter: true, end: 40, suffix: '+' },
  { number: '3', label: 'Business Owners', isCounter: true, end: 3, suffix: '' },
  { number: '100%', label: 'Transparency', isCounter: false, end: 0, suffix: '' },
];

function StatCounter({ stat }: { stat: typeof stats[0] }) {
  const { count, ref } = useCountUp({
    end: stat.end,
    duration: 2000,
    decimals: 0
  });

  if (!stat.isCounter) {
    return (
      <motion.div
        key={stat.label}
        variants={scaleUp}
      >
        <div className="stat-number text-3xl font-medium text-[var(--color-accent)] mb-1">
          {stat.number}
        </div>
        <div className="text-sm text-[var(--color-brown)]">{stat.label}</div>
      </motion.div>
    );
  }

  return (
    <motion.div
      key={stat.label}
      variants={scaleUp}
      ref={ref}
    >
      <div className="stat-number text-3xl font-medium text-[var(--color-accent)] mb-1">
        {formatCounterValue(count, { suffix: stat.suffix })}
      </div>
      <div className="text-sm text-[var(--color-brown)]">{stat.label}</div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <motion.section
      className="pt-[calc(var(--nav-height)+4rem)] pb-24 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={staggerContainer}
    >
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="max-w-2xl">
            {/* Label */}
            <motion.div
              className="mb-6"
              variants={fadeInUp}
            >
              <span className="label">Growth Partner</span>
            </motion.div>

            {/* Headline with staggered lines */}
            <h1 className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,5vw,4rem)] font-extrabold leading-[1.1] tracking-tight mb-6">
              <motion.span
                className="block"
                variants={fadeInUp}
              >
                Stop Paying for Promises.
              </motion.span>
              <motion.span
                className="block text-[var(--color-accent)]"
                variants={fadeInUp}
              >
                Start Seeing Results.
              </motion.span>
            </h1>

            {/* Paragraphs with increasing delays */}
            <motion.p
              className="text-lg text-[var(--color-text)] mb-4 leading-relaxed"
              variants={paragraphReveal}
            >
              Not another agency. Three business owners bringing strategy, execution, and complete transparency to yours.
            </motion.p>

            <motion.p
              className="text-base text-[var(--color-brown)] mb-4 leading-relaxed"
              variants={paragraphReveal}
            >
              If you&apos;re like most small business owners, you&apos;ve switched marketing agencies more times than you can count. You write the checks every month, but you&apos;re never quite sure if you&apos;re getting your money&apos;s worth. Sound familiar? That&apos;s why we started PathOpt.
            </motion.p>

            <motion.p
              className="text-base text-[var(--color-brown)] mb-8 leading-relaxed"
              variants={paragraphReveal}
            >
              We&apos;re three business owners who got tired of the same problem you&apos;re facing. So we built something different: a growth partner that combines strategic thinking, operational expertise, and marketing optimization—all with complete transparency into where every dollar goes.
            </motion.p>

            {/* Stats with counters */}
            <motion.div
              className="flex gap-8 mb-10 pb-10 border-b border-[var(--color-border)]"
              variants={staggerContainer}
            >
              {stats.map((stat) => (
                <StatCounter key={stat.label} stat={stat} />
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={fadeInUp}
            >
              <Button href="/contact">
                See Where You&apos;re Leaving Money on the Table
              </Button>
              {/* Hidden until case study content is ready
              <Button href="/case-studies/homeworks-construction" variant="secondary">
                Watch How We Fixed a $47 Lead Problem in 30 Days
              </Button>
              */}
            </motion.div>
          </div>

          {/* Hero Image */}
          <motion.div
            className="relative order-first lg:order-last"
            variants={fadeInUp}
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/hero-collaboration.avif"
                alt="PathOpt team collaborating at conference table - business strategy and growth planning session"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                className="object-cover"
              />
              {/* Subtle overlay for better text contrast if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
