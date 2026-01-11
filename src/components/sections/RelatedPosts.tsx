'use client';

import { motion } from 'framer-motion';
import { BlogCard } from '@/components/ui/BlogCard';
import { BlogPost } from '@/data/blog-posts';
import {
  staggerContainer,
  fadeInUp,
  scaleUp,
  viewport
} from '@/lib/animations';

interface RelatedPostsProps {
  posts: BlogPost[];
  headline?: string;
}

export function RelatedPosts({
  posts,
  headline = 'More from PathOpt',
}: RelatedPostsProps) {
  if (posts.length === 0) return null;

  return (
    <section className="py-16 lg:py-24 bg-[var(--color-bg-alt)]">
      <div className="container-site">
        <motion.div
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
        >
          <motion.div
            className="flex items-center gap-3 mb-4"
            variants={fadeInUp}
          >
            <div className="w-12 h-[3px] bg-[var(--color-accent)]" />
            <span className="label">Keep Reading</span>
          </motion.div>
          <motion.h2
            className="text-3xl lg:text-4xl font-bold"
            variants={fadeInUp}
          >
            {headline}
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
        >
          {posts.map((post) => (
            <motion.div key={post.slug} variants={scaleUp}>
              <BlogCard
                slug={post.slug}
                category={post.category}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                readingTime={post.readingTime}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
