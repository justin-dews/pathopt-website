interface CostItem {
  label: string;
  value: string;
}

interface AgitateSectionProps {
  headline: string;
  introduction?: string;
  costs: CostItem[];
  closingParagraph?: string;
}

export function AgitateSection({
  headline,
  introduction,
  costs,
  closingParagraph,
}: AgitateSectionProps) {
  return (
    <section className="py-16 lg:py-24 bg-[var(--color-bg)]">
      <div className="container-content">
        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">{headline}</h2>

        {/* Introduction */}
        {introduction && (
          <p className="text-lg text-[var(--color-text-muted)] leading-relaxed mb-8">
            {introduction}
          </p>
        )}

        {/* Cost Breakdown */}
        <div className="bg-white rounded-lg p-8 mb-8">
          <ul className="space-y-4">
            {costs.map((cost, index) => (
              <li
                key={index}
                className="flex items-start gap-4 pb-4 border-b border-[var(--color-border)] last:border-0 last:pb-0"
              >
                <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] mt-2.5 flex-shrink-0" />
                <div>
                  <span className="font-semibold">{cost.label}:</span>{' '}
                  <span className="text-[var(--color-text-muted)]">
                    {cost.value}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Summary */}
        <div className="bg-[var(--color-accent-light)] rounded-lg p-6 border-l-4 border-[var(--color-accent)]">
          <p className="text-lg font-medium">
            Add it up. That&apos;s not a marketing investment. That&apos;s a marketing tax.
          </p>
        </div>

        {/* Closing */}
        {closingParagraph && (
          <p className="text-lg text-[var(--color-text-muted)] leading-relaxed mt-8">
            {closingParagraph}
          </p>
        )}
      </div>
    </section>
  );
}
