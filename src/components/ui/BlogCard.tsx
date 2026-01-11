import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface BlogCardProps {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  featured?: boolean;
}

export function BlogCard({
  slug,
  category,
  title,
  excerpt,
  date,
  readingTime,
  featured = false,
}: BlogCardProps) {
  if (featured) {
    return (
      <Link
        href={`/blog/${slug}`}
        className="block group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image Placeholder */}
          <div className="aspect-[16/10] lg:aspect-auto lg:min-h-[400px] bg-[var(--color-green)] relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white/30 text-lg font-medium">
                Featured Image
              </span>
            </div>
            {/* Decorative Elements */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-[var(--color-gold)]/20 rounded-tl-full" />
            <div className="absolute top-0 left-0 w-24 h-24 bg-[var(--color-accent)]/10 rounded-br-full" />
          </div>

          {/* Content */}
          <div className="p-8 lg:p-10 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span className="label">{category}</span>
              <span className="text-[var(--color-text-muted)] text-sm">|</span>
              <span className="text-sm text-[var(--color-text-muted)]">{readingTime}</span>
            </div>

            <h3 className="text-2xl lg:text-3xl font-bold mb-4 group-hover:text-[var(--color-accent)] transition-colors leading-tight">
              {title}
            </h3>

            <p className="text-[var(--color-text-muted)] mb-6 leading-relaxed">
              {excerpt}
            </p>

            <div className="flex items-center justify-between">
              <time className="text-sm text-[var(--color-text-muted)]">{date}</time>
              <span className="inline-flex items-center gap-2 text-[var(--color-accent)] font-medium group-hover:gap-3 transition-all">
                Read Article
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  // Standard Card
  return (
    <Link
      href={`/blog/${slug}`}
      className="block group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 relative card-accent-bar"
    >
      {/* Image Placeholder */}
      <div className="aspect-[16/10] bg-[var(--color-green-light)] relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[var(--color-green)]/40 text-sm font-medium">
            Blog Image
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="label text-xs">{category}</span>
          <span className="text-[var(--color-text-muted)] text-xs">|</span>
          <span className="text-xs text-[var(--color-text-muted)]">{readingTime}</span>
        </div>

        <h3 className="text-xl font-bold mb-3 group-hover:text-[var(--color-accent)] transition-colors leading-tight line-clamp-2">
          {title}
        </h3>

        <p className="text-[var(--color-text-muted)] text-base mb-4 line-clamp-3">
          {excerpt}
        </p>

        <div className="flex items-center justify-between">
          <time className="text-sm text-[var(--color-text-muted)]">{date}</time>
          <span className="inline-flex items-center gap-2 text-[var(--color-accent)] font-medium text-sm group-hover:gap-3 transition-all">
            Read
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
