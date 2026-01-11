interface FindingItem {
  text: string;
}

interface TimelineItem {
  week: string;
  title: string;
  description: string;
}

interface CaseSolutionSectionProps {
  headline: string;
  introduction?: string;
  findingsTitle?: string;
  findings?: FindingItem[];
  actionsTitle?: string;
  timeline?: TimelineItem[];
  ongoingNote?: string;
}

export function CaseSolutionSection({
  headline,
  introduction,
  findingsTitle,
  findings,
  actionsTitle,
  timeline,
  ongoingNote,
}: CaseSolutionSectionProps) {
  return (
    <section className="py-16 lg:py-24 bg-[var(--color-bg-alt)]">
      <div className="container-content">
        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">{headline}</h2>

        {/* Introduction */}
        {introduction && (
          <p className="text-lg text-[var(--color-text-muted)] leading-relaxed mb-10">
            {introduction}
          </p>
        )}

        {/* What We Found */}
        {findings && findings.length > 0 && (
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6">{findingsTitle || 'What we found:'}</h3>
            <ul className="space-y-3">
              {findings.map((finding, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] mt-2.5 flex-shrink-0" />
                  <span className="text-[var(--color-text-muted)]">{finding.text}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* What We Did Timeline */}
        {timeline && timeline.length > 0 && (
          <div>
            <h3 className="text-xl font-semibold mb-6">{actionsTitle || 'What we did:'}</h3>
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-6">
                  {/* Week Badge */}
                  <div className="flex-shrink-0">
                    <span className="inline-block px-3 py-1 bg-[var(--color-accent)] text-white text-sm font-medium rounded">
                      {item.week}
                    </span>
                  </div>
                  {/* Content */}
                  <div>
                    <h4 className="font-semibold mb-1">{item.title}</h4>
                    <p className="text-[var(--color-text-muted)]">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Ongoing Note */}
        {ongoingNote && (
          <div className="mt-10 p-6 bg-white rounded-lg border-l-4 border-[var(--color-green)]">
            <p className="text-[var(--color-text)]">{ongoingNote}</p>
          </div>
        )}
      </div>
    </section>
  );
}
