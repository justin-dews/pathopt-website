interface BlogHeroProps {
  label: string;
  headline: string;
  description?: string;
}

export function BlogHero({ label, headline, description }: BlogHeroProps) {
  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
      {/* Grid Lines Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="container-site h-full relative">
          <div className="absolute left-1/4 top-0 bottom-0 w-px bg-[var(--color-border)] opacity-50" />
          <div className="absolute right-1/4 top-0 bottom-0 w-px bg-[var(--color-border)] opacity-50" />
        </div>
      </div>

      <div className="container-site relative">
        <div className="max-w-3xl">
          {/* Label */}
          <div className="flex items-center gap-3 mb-8 animate-fade-in-up">
            <div className="w-12 h-[3px] bg-[var(--color-accent)]" />
            <span className="label">{label}</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 animate-fade-in-up [animation-delay:100ms]">
            {headline}
          </h1>

          {/* Description */}
          {description && (
            <p className="text-lg lg:text-xl text-[var(--color-text-muted)] max-w-2xl animate-fade-in-up [animation-delay:200ms]">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
