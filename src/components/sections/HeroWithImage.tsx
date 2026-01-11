interface HeroWithImageProps {
  label: string;
  headline: string;
  highlightWord?: string;
  subtitle: string;
  stats?: Array<{
    value: string;
    label: string;
    color?: 'accent' | 'green';
  }>;
  imagePlaceholder?: string;
}

export function HeroWithImage({
  label,
  headline,
  highlightWord,
  subtitle,
  stats,
  imagePlaceholder = 'Image',
}: HeroWithImageProps) {
  // Split headline to highlight a word if provided
  const renderHeadline = () => {
    if (!highlightWord) return headline;

    const parts = headline.split(highlightWord);
    if (parts.length === 1) return headline;

    return (
      <>
        {parts[0]}
        <span className="text-[var(--color-accent)]">{highlightWord}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <section className="relative min-h-[90vh] flex items-center py-32 lg:py-40 overflow-hidden">
      {/* Grid Lines Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="container-site h-full relative">
          <div className="absolute left-1/4 top-0 bottom-0 w-px bg-[var(--color-border)] opacity-50" />
          <div className="absolute right-1/4 top-0 bottom-0 w-px bg-[var(--color-border)] opacity-50" />
        </div>
      </div>

      <div className="container-site">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8 animate-fade-in-up">
              <div className="w-12 h-[3px] bg-[var(--color-accent)]" />
              <span className="label">{label}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 animate-fade-in-up [animation-delay:100ms]">
              {renderHeadline()}
            </h1>

            <p className="text-lg text-[var(--color-text-muted)] max-w-lg mb-10 animate-fade-in-up [animation-delay:200ms]">
              {subtitle}
            </p>

            {stats && stats.length > 0 && (
              <div className="flex flex-wrap gap-8 lg:gap-12 pt-8 border-t border-[var(--color-border)] animate-fade-in-up [animation-delay:300ms]">
                {stats.map((stat, index) => (
                  <div key={index} className="text-left">
                    <div
                      className="stat-number text-3xl lg:text-4xl"
                      style={{ color: stat.color === 'green' ? 'var(--color-green)' : 'var(--color-accent)' }}
                    >
                      {stat.value}
                    </div>
                    <div className="label mt-2 text-[var(--color-text-muted)]">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Visual */}
          <div className="relative h-[400px] lg:h-[500px] animate-fade-in-up [animation-delay:200ms]">
            {/* Accent Circle */}
            <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-[var(--color-accent)] opacity-10 z-0" />

            {/* Image Wrapper */}
            <div className="relative h-full rounded-lg overflow-hidden bg-[var(--color-green-light)]">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-[family-name:var(--font-mono)] text-sm uppercase tracking-wider text-[var(--color-green)]">
                  {imagePlaceholder}
                </span>
              </div>
            </div>

            {/* Grid Accent */}
            <div className="absolute -bottom-5 -left-5 w-36 h-36 border-2 border-[var(--color-accent)] opacity-30 z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
