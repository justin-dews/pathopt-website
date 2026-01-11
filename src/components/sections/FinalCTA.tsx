import { Button } from '@/components/ui/Button';

export function FinalCTA() {
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
          <span className="label !text-[var(--color-accent)]">Ready to Grow?</span>

          <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-tight mt-4 mb-4 text-[var(--color-bg)]">
            Tired of Agencies That Promise and Consultants Who Don&apos;t Execute?
          </h2>

          <p className="text-lg text-[var(--color-bg)]/80 mb-8 max-w-[600px] mx-auto">
            Get the strategic thinking, operational expertise, and hands-on execution your business actually needs—from three partners who&apos;ve built businesses themselves.
          </p>

          <Button href="/contact" variant="white">
            See What&apos;s Costing You Growth (Free)
          </Button>
        </div>
      </div>
    </section>
  );
}
