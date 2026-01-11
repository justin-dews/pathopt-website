'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { BenefitCard } from '@/components/ui/BenefitCard';
import {
  staggerContainer,
  fadeInUp,
  scaleUpSlide,
  viewport
} from '@/lib/animations';

interface Benefit {
  icon?: LucideIcon;
  imageSrc?: string;
  imageAlt?: string;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    imageSrc: '/real-business-owners-icon.avif',
    imageAlt: 'Real Business Owners - PathOpt team members',
    title: 'Real Business Owners',
    description:
      "40+ combined years building and scaling businesses—not consultants reading from playbooks. We've written the $5K/month agency checks and wondered if we were getting ripped off. That's exactly why we built PathOpt.",
  },
  {
    imageSrc: '/strategy-execution-icon.avif',
    imageAlt: 'Strategy + Execution - PathOpt hands-on implementation',
    title: 'Strategy + Execution',
    description:
      "We don't just advise—we implement. You get $250K/year executive thinking at a fraction of the cost, plus hands-on execution that actually gets results. No 47-slide decks that collect dust.",
  },
  {
    imageSrc: '/complete-transparency-icon.avif',
    imageAlt: 'Complete Transparency - PathOpt clear reporting',
    title: 'Complete Transparency',
    description:
      "See exactly where every dollar of your monthly spend goes—and what it's producing. Real-time dashboards updated daily. Plain English reports, not agency-speak. No black boxes. No wondering.",
  },
  {
    imageSrc: '/venn-partnership-icon.avif',
    imageAlt: 'True Partnership - PathOpt unified solution',
    title: 'One Partner, Not Five Vendors',
    description:
      'Stop paying 4-5 vendors $2K-$8K each while they blame each other when things break. PathOpt handles your marketing, systems, and operations in one place. One dashboard. One weekly call. One team accountable for results.',
  },
];

export function Benefits() {
  return (
    <section className="py-24 bg-[var(--color-bg-alt)]">
      <div className="container-site">
        {/* Header */}
        <motion.div
          className="text-center max-w-[700px] mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
        >
          <motion.span className="label" variants={fadeInUp}>
            Benefits
          </motion.span>
          <motion.h2
            className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-tight mt-2 mb-4"
            variants={fadeInUp}
          >
            Why Business Owners Trust PathOpt
          </motion.h2>
          <motion.p
            className="text-lg text-[var(--color-brown)]"
            variants={fadeInUp}
          >
            We&apos;re not selling shiny tools—we&apos;re fixing what slows you down.
          </motion.p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              variants={scaleUpSlide}
            >
              <BenefitCard
                icon={benefit.icon}
                imageSrc={benefit.imageSrc}
                imageAlt={benefit.imageAlt}
                title={benefit.title}
                description={benefit.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
