import { Button } from '@/components/ui/Button';

interface IndustryHeroProps {
  headline: string;
  subheadline: string;
  paragraphs: string[];
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
}

export function IndustryHero({
  headline,
  subheadline,
  paragraphs,
  primaryCTA,
  secondaryCTA,
}: IndustryHeroProps) {
  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-[var(--color-bg)]">
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(var(--color-text) 1px, transparent 1px),
            linear-gradient(90deg, var(--color-text) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative container-site">
        <div className="max-w-3xl">
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-[1.1]">
            {headline}
          </h1>

          {/* Subheadline */}
          <p className="text-xl lg:text-2xl text-[var(--color-text-muted)] mb-8 leading-relaxed">
            {subheadline}
          </p>

          {/* Body Paragraphs */}
          <div className="space-y-4 mb-10">
            {paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-lg text-[var(--color-text)] leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
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
