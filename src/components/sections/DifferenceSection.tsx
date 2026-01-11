interface DifferenceItem {
  title: string;
  description: string;
}

interface DifferenceSectionProps {
  headline: string;
  introduction?: string;
  items: DifferenceItem[];
}

export function DifferenceSection({
  headline,
  introduction,
  items,
}: DifferenceSectionProps) {
  return (
    <section className="py-16 lg:py-24 bg-[var(--color-bg-alt)]">
      <div className="container-content">
        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">{headline}</h2>

        {/* Introduction */}
        {introduction && (
          <p className="text-lg text-[var(--color-text-muted)] leading-relaxed mb-10">
            {introduction}
          </p>
        )}

        {/* Difference Items */}
        <div className="space-y-6">
          {items.map((item, index) => (
            <div key={index} className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2 text-[var(--color-accent)]">
                {item.title}
              </h3>
              <p className="text-[var(--color-text-muted)]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
