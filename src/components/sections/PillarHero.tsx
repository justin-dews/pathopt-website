import { Button } from '../ui/Button';

interface PillarHeroProps {
  label: string;
  headline: string;
  subtitle: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
}

export function PillarHero({
  label,
  headline,
  subtitle,
  primaryCTA,
  secondaryCTA,
}: PillarHeroProps) {
  return (
    <section className="relative min-h-[70vh] flex items-center py-32 lg:py-40 overflow-hidden">
      {/* Grid Lines Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="container-site h-full relative">
          <div className="absolute left-1/4 top-0 bottom-0 w-px bg-[var(--color-border)] opacity-50" />
          <div className="absolute right-1/4 top-0 bottom-0 w-px bg-[var(--color-border)] opacity-50" />
        </div>
      </div>

      <div className="container-site">
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

          {/* Subtitle */}
          <p className="text-lg lg:text-xl text-[var(--color-text-muted)] mb-10 max-w-2xl animate-fade-in-up [animation-delay:200ms]">
            {subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 animate-fade-in-up [animation-delay:300ms]">
            <Button href={primaryCTA.href} variant="primary">
              {primaryCTA.text}
            </Button>
            {secondaryCTA && (
              <Button href={secondaryCTA.href} variant="secondary">
                {secondaryCTA.text}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
