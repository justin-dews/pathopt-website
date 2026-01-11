'use client';

import { motion } from 'framer-motion';
import { TeamCard } from '../ui/TeamCard';
import {
  staggerContainerSlow,
  fadeInUp,
  viewport
} from '@/lib/animations';

interface TeamMember {
  name: string;
  title: string;
  bio: string;
  philosophy: string;
  imageUrl?: string;
}

interface TeamGridProps {
  label: string;
  headline: string;
  members: TeamMember[];
}

export function TeamGrid({ label, headline, members }: TeamGridProps) {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="container-site">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainerSlow}
        >
          <motion.span className="label block mb-4" variants={fadeInUp}>
            {label}
          </motion.span>
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold"
            variants={fadeInUp}
          >
            {headline}
          </motion.h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainerSlow}
        >
          {members.map((member, index) => (
            <motion.div
              key={member.name}
              className={index === 1 ? 'lg:mt-12' : ''}
              variants={fadeInUp}
            >
              <TeamCard {...member} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
