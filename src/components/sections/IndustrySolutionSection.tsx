interface BulletPoint {
  text: string;
}

interface Pillar {
  title: string;
  description?: string;
  bullets: BulletPoint[];
}

interface IndustrySolutionSectionProps {
  label?: string;
  headline: string;
  introduction: string;
  pillars: Pillar[];
}

export function IndustrySolutionSection({
  label,
  headline,
  introduction,
  pillars,
}: IndustrySolutionSectionProps) {
  return (
    <section className="py-16 lg:py-24 bg-[var(--color-bg)]">
      <div className="container-site">
        {/* Label */}
        {label && <span className="label">{label}</span>}

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6">{headline}</h2>

        {/* Introduction */}
        <p className="text-lg text-[var(--color-text-muted)] leading-relaxed max-w-3xl mb-12">
          {introduction}
        </p>

        {/* 3-Pillar Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-colors duration-300"
            >
              {/* Pillar Number Badge */}
              <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] text-white flex items-center justify-center font-bold text-lg mb-6">
                {index + 1}
              </div>

              {/* Pillar Title */}
              <h3 className="text-xl font-bold mb-4">{pillar.title}</h3>

              {/* Optional Description */}
              {pillar.description && (
                <p className="text-[var(--color-text-muted)] mb-4">
                  {pillar.description}
                </p>
              )}

              {/* Bullet Points */}
              <ul className="space-y-3">
                {pillar.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mt-2.5 flex-shrink-0" />
                    <span className="text-[var(--color-text-muted)] text-sm leading-relaxed">
                      {bullet.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
