interface Differentiator {
  title: string;
  description: string;
}

interface StorySectionProps {
  label: string;
  headline: string;
  introParagraph: string;
  bodyParagraphs: string[];
  differentiators: Differentiator[];
  closingParagraph: string;
}

export function StorySection({
  label,
  headline,
  introParagraph,
  bodyParagraphs,
  differentiators,
  closingParagraph,
}: StorySectionProps) {
  return (
    <section className="relative py-24 lg:py-32 bg-[var(--color-bg-alt)]">
      <div className="container-content">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="label block mb-4">{label}</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">{headline}</h2>
        </div>

        {/* Content */}
        <div className="relative">
          {/* Intro Quote */}
          <p className="text-xl lg:text-2xl font-[family-name:var(--font-display)] font-semibold leading-relaxed mb-10 pl-6 border-l-4 border-[var(--color-accent)]">
            {introParagraph}
          </p>

          {/* Body Paragraphs */}
          <div className="space-y-6 mb-10">
            {bodyParagraphs.map((paragraph, index) => (
              <p key={index} className="text-[var(--color-text-muted)]">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Differentiators Callout */}
          <div className="bg-white p-8 lg:p-10 rounded-lg border-l-4 border-[var(--color-accent)] my-10">
            <h3 className="text-xl font-bold text-[var(--color-accent)] mb-6">
              Here&apos;s what makes us different:
            </h3>
            <ul className="space-y-0 divide-y divide-[var(--color-border)]">
              {differentiators.map((item, index) => (
                <li key={index} className="py-4 flex flex-col sm:flex-row gap-2 sm:gap-4">
                  <strong className="text-[var(--color-text)] font-semibold min-w-[180px]">
                    {item.title}
                  </strong>
                  <span className="text-[var(--color-text-muted)]">
                    {item.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Closing */}
          <p className="text-lg text-[var(--color-text)] font-medium pt-8 border-t border-[var(--color-border)]">
            {closingParagraph}
          </p>
        </div>
      </div>
    </section>
  );
}
