import { Button } from '@/components/ui/Button';

interface FinalCTASectionProps {
  label?: string;
  headline: string;
  subheadline: string;
  ctaText?: string;
  ctaHref?: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  friction?: string;
}

export function FinalCTASection({
  label = 'Ready to Grow?',
  headline,
  subheadline,
  ctaText,
  ctaHref = '/contact',
  primaryCTA,
  friction,
}: FinalCTASectionProps) {
  // Support both old ctaText/ctaHref props and new primaryCTA prop
  const buttonText = primaryCTA?.text || ctaText || 'Get Started';
  const buttonHref = primaryCTA?.href || ctaHref;

  return (
    <section className="bg-[var(--color-text)] text-[var(--color-bg)] py-40 relative overflow-hidden">
      {/* Gradient Background */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 20% 50%, var(--color-accent) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, var(--color-green) 0%, transparent 40%)
          `,
        }}
      />

      <div className="container-site relative z-10">
        <div className="text-center max-w-[800px] mx-auto">
          <span className="label !text-[var(--color-accent)]">{label}</span>

          <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-tight mt-4 mb-4 text-[var(--color-bg)]">
            {headline}
          </h2>

          <p className="text-lg text-[var(--color-bg)]/80 mb-8 max-w-[600px] mx-auto">
            {subheadline}
          </p>

          <Button href={buttonHref} variant="white">
            {buttonText}
          </Button>

          {friction && (
            <p className="text-sm text-[var(--color-bg)]/60 mt-4">
              {friction}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
