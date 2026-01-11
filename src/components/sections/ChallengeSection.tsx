interface ChallengeItem {
  title: string;
  description: string;
}

interface ChallengeSectionProps {
  headline: string;
  introduction: string;
  challenges: ChallengeItem[];
  closingParagraph?: string;
}

export function ChallengeSection({
  headline,
  introduction,
  challenges,
  closingParagraph,
}: ChallengeSectionProps) {
  return (
    <section className="py-16 lg:py-24 bg-[var(--color-bg)]">
      <div className="container-content">
        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">{headline}</h2>

        {/* Introduction */}
        <p className="text-lg text-[var(--color-text-muted)] leading-relaxed mb-10">
          {introduction}
        </p>

        {/* Challenge Items */}
        <div className="space-y-6 mb-10">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 border-l-4 border-[var(--color-accent)]"
            >
              <h3 className="font-semibold text-lg mb-2">{challenge.title}</h3>
              <p className="text-[var(--color-text-muted)]">
                {challenge.description}
              </p>
            </div>
          ))}
        </div>

        {/* Closing Paragraph */}
        {closingParagraph && (
          <p className="text-lg text-[var(--color-text)] leading-relaxed">
            {closingParagraph}
          </p>
        )}
      </div>
    </section>
  );
}
