import Link from 'next/link';

interface ResultItem {
  label: string;
  value: string;
}

interface IndustryProofSectionProps {
  label?: string;
  headline: string;
  situation: string;
  problemTitle?: string;
  problemBullets: string[];
  solutionTitle?: string;
  solutionBullets: string[];
  resultsTitle?: string;
  results: ResultItem[];
  quote?: string;
  quoteAuthor?: string;
  quoteCompany?: string;
  ctaText?: string;
  ctaHref?: string;
}

export function IndustryProofSection({
  label,
  headline,
  situation,
  problemTitle = 'The Problem:',
  problemBullets,
  solutionTitle = 'What We Did:',
  solutionBullets,
  resultsTitle = 'The Results:',
  results,
  quote,
  quoteAuthor,
  quoteCompany,
  ctaText = 'Read the Full Case Study',
  ctaHref,
}: IndustryProofSectionProps) {
  return (
    <section className="py-16 lg:py-24 bg-[var(--color-bg-alt)]">
      <div className="container-content">
        {/* Label */}
        {label && <span className="label">{label}</span>}

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-8">{headline}</h2>

        {/* The Situation */}
        <div className="mb-8">
          <h3 className="font-bold text-lg mb-3">The Situation:</h3>
          <p className="text-[var(--color-text-muted)] leading-relaxed">
            {situation}
          </p>
        </div>

        {/* Problem Section */}
        <div className="mb-8">
          <h3 className="font-bold text-lg mb-3">{problemTitle}</h3>
          <ul className="space-y-2">
            {problemBullets.map((bullet, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-text-muted)] mt-2.5 flex-shrink-0" />
                <span className="text-[var(--color-text-muted)]">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Solution Section */}
        <div className="mb-8">
          <h3 className="font-bold text-lg mb-3">{solutionTitle}</h3>
          <ul className="space-y-2">
            {solutionBullets.map((bullet, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mt-2.5 flex-shrink-0" />
                <span className="text-[var(--color-text-muted)]">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Results Grid */}
        <div className="mb-8">
          <h3 className="font-bold text-lg mb-4">{resultsTitle}</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {results.map((result, index) => (
              <div
                key={index}
                className="bg-white p-5 rounded-lg border border-[var(--color-border)]"
              >
                <div className="stat-number text-2xl text-[var(--color-accent)] mb-1">
                  {result.value}
                </div>
                <p className="text-sm text-[var(--color-text-muted)]">
                  {result.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial Quote */}
        {quote && (
          <div className="bg-[var(--color-green)] text-white rounded-lg p-8 mb-8">
            <blockquote className="text-xl font-medium italic mb-4">
              &ldquo;{quote}&rdquo;
            </blockquote>
            {quoteAuthor && (
              <p className="opacity-90">
                — {quoteAuthor}
                {quoteCompany && `, ${quoteCompany}`}
              </p>
            )}
          </div>
        )}

        {/* CTA Link */}
        {ctaHref && (
          <Link
            href={ctaHref}
            className="inline-flex items-center gap-2 text-[var(--color-accent)] font-semibold hover:underline"
          >
            {ctaText}
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
        )}
      </div>
    </section>
  );
}
