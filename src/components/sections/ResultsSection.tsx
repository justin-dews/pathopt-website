interface ResultItem {
  metric: string;
  description: string;
}

interface ResultsSectionProps {
  headline: string;
  results: ResultItem[];
}

export function ResultsSection({ headline, results }: ResultsSectionProps) {
  return (
    <section className="py-16 lg:py-24 bg-[var(--color-bg)]">
      <div className="container-content">
        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">{headline}</h2>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {results.map((result, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 relative overflow-hidden"
            >
              {/* Background Accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--color-green-light)] rounded-bl-full opacity-50" />

              {/* Content */}
              <div className="relative">
                <div className="stat-number text-3xl lg:text-4xl font-bold text-[var(--color-green)] mb-3">
                  {result.metric}
                </div>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  {result.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
