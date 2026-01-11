interface ProblemCard {
  title: string;
  description: string;
}

interface IndustryProblemSectionProps {
  label?: string;
  headline: string;
  introduction: string;
  cards?: ProblemCard[];
  problems?: ProblemCard[];
}

export function IndustryProblemSection({
  label = 'The Problem',
  headline,
  introduction,
  cards,
  problems,
}: IndustryProblemSectionProps) {
  // Support both 'cards' and 'problems' prop names
  const problemCards = cards || problems || [];
  return (
    <section className="py-16 lg:py-24 bg-[var(--color-bg-alt)]">
      <div className="container-site">
        {/* Label */}
        <span className="label">{label}</span>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-8">
          {headline}
        </h2>

        {/* Introduction */}
        <p className="text-lg text-[var(--color-text-muted)] leading-relaxed max-w-2xl mb-12">
          {introduction}
        </p>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problemCards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 relative overflow-hidden card-accent-bar"
            >
              {/* Number Badge */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[var(--color-accent-light)] flex items-center justify-center">
                <span className="text-[var(--color-accent)] font-bold">
                  {index + 1}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-4 pr-12">{card.title}</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
