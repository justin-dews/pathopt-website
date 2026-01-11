interface MetricBlock {
  label: string;
  before: string;
  after: string;
  change: string;
}

interface CaseStudyHeroProps {
  industry: string;
  headline: string;
  subheadline: string;
  metrics: MetricBlock[];
}

export function CaseStudyHero({
  industry,
  headline,
  subheadline,
  metrics,
}: CaseStudyHeroProps) {
  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-[var(--color-bg)]">
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
        <div className="max-w-4xl">
          {/* Industry Tag */}
          <span className="label">{industry}</span>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mt-4 mb-6 leading-[1.1]">
            {headline}
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-[var(--color-text-muted)] leading-relaxed max-w-2xl">
            {subheadline}
          </p>
        </div>

        {/* Metrics Table */}
        <div className="mt-12 bg-white rounded-lg overflow-hidden shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[var(--color-border)]">
            {metrics.map((metric, index) => (
              <div key={index} className="p-6 text-center">
                <p className="text-sm text-[var(--color-text-muted)] mb-2">
                  {metric.label}
                </p>
                <div className="flex items-center justify-center gap-3 mb-2">
                  <span className="text-[var(--color-text-muted)] line-through text-lg">
                    {metric.before}
                  </span>
                  <span className="text-[var(--color-accent)]">→</span>
                  <span className="stat-number text-2xl font-bold text-[var(--color-green)]">
                    {metric.after}
                  </span>
                </div>
                <span className="inline-block px-2 py-1 bg-[var(--color-green-light)] text-[var(--color-green)] text-xs font-medium rounded">
                  {metric.change}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
