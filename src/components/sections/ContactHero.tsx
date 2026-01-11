interface ContactHeroProps {
  headline: string;
  subheadline: string;
}

export function ContactHero({ headline, subheadline }: ContactHeroProps) {
  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 bg-[var(--color-bg)]">
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

      <div className="relative container-content text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-[1.1]">
          {headline}
        </h1>
        <p className="text-lg sm:text-xl text-[var(--color-text-muted)] max-w-2xl mx-auto leading-relaxed">
          {subheadline}
        </p>
      </div>
    </section>
  );
}
