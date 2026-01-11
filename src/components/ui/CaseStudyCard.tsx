import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface CaseStudyCardProps {
  slug: string;
  industry: string;
  title: string;
  description: string;
  metrics: Array<{
    label: string;
    value: string;
    change?: string;
  }>;
  featured?: boolean;
}

export function CaseStudyCard({
  slug,
  industry,
  title,
  description,
  metrics,
  featured = false,
}: CaseStudyCardProps) {
  if (featured) {
    return (
      <Link
        href={`/case-studies/${slug}`}
        className="block group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image Placeholder */}
          <div className="aspect-[16/10] lg:aspect-auto bg-[var(--color-green)] relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white/30 text-lg font-medium">
                Case Study Image
              </span>
            </div>
            {/* Decorative Elements */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-[var(--color-gold)]/20 rounded-tl-full" />
          </div>

          {/* Content */}
          <div className="p-8 lg:p-10">
            <span className="label">{industry}</span>
            <h3 className="text-2xl lg:text-3xl font-bold mt-3 mb-4 group-hover:text-[var(--color-accent)] transition-colors">
              {title}
            </h3>
            <p className="text-[var(--color-text-muted)] mb-6">{description}</p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {metrics.map((metric, index) => (
                <div key={index} className="bg-[var(--color-bg)] rounded-lg p-4">
                  <div className="stat-number text-2xl font-bold text-[var(--color-accent)]">
                    {metric.value}
                  </div>
                  <div className="text-sm text-[var(--color-text-muted)]">
                    {metric.label}
                  </div>
                  {metric.change && (
                    <div className="text-xs text-[var(--color-green)] font-medium mt-1">
                      {metric.change}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <span className="inline-flex items-center gap-2 text-[var(--color-accent)] font-medium group-hover:gap-3 transition-all">
              Read Case Study
              <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </div>
      </Link>
    );
  }

  // Standard Card
  return (
    <Link
      href={`/case-studies/${slug}`}
      className="block group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 relative card-accent-bar"
    >
      {/* Image Placeholder */}
      <div className="aspect-[16/10] bg-[var(--color-green-light)] relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[var(--color-green)]/40 text-sm font-medium">
            Case Study Image
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <span className="label text-xs">{industry}</span>
        <h3 className="text-xl font-bold mt-2 mb-3 group-hover:text-[var(--color-accent)] transition-colors">
          {title}
        </h3>
        <p className="text-[var(--color-text-muted)] text-base mb-4 line-clamp-2">
          {description}
        </p>

        {/* Key Metric */}
        {metrics[0] && (
          <div className="flex items-baseline gap-2 mb-4">
            <span className="stat-number text-xl font-bold text-[var(--color-accent)]">
              {metrics[0].value}
            </span>
            <span className="text-sm text-[var(--color-text-muted)]">
              {metrics[0].label}
            </span>
          </div>
        )}

        <span className="inline-flex items-center gap-2 text-[var(--color-accent)] font-medium text-sm group-hover:gap-3 transition-all">
          Read More
          <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </Link>
  );
}
