import { ValueCard } from '../ui/ValueCard';

interface Value {
  title: string;
  description: string;
}

interface MissionVisionValuesProps {
  mission: {
    label: string;
    statement: string;
  };
  vision: {
    label: string;
    statement: string;
  };
  values: {
    label: string;
    headline: string;
    items: Value[];
  };
}

export function MissionVisionValues({
  mission,
  vision,
  values,
}: MissionVisionValuesProps) {
  return (
    <section className="relative py-24 lg:py-32 bg-[var(--color-text)] text-[var(--color-bg)] overflow-hidden">
      {/* Background Gradient Overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background: `
            radial-gradient(circle at 20% 50%, var(--color-accent) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, var(--color-green) 0%, transparent 40%)
          `,
        }}
      />

      <div className="container-site relative z-10">
        {/* Mission & Vision Grid */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 mb-16 lg:mb-24">
          {/* Mission */}
          <div>
            <span className="label text-[var(--color-accent-light)] block mb-4">
              {mission.label}
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-[var(--color-bg)]">
              {mission.statement}
            </h3>
          </div>

          {/* Vision */}
          <div>
            <span className="label text-[var(--color-accent-light)] block mb-4">
              {vision.label}
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-[var(--color-bg)]">
              {vision.statement}
            </h3>
          </div>
        </div>

        {/* Values Section */}
        <div className="pt-16 lg:pt-20 border-t border-white/10">
          {/* Values Header */}
          <div className="text-center mb-12">
            <span className="label text-[var(--color-accent-light)] block mb-4">
              {values.label}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[var(--color-bg)]">
              {values.headline}
            </h3>
          </div>

          {/* Values Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {values.items.map((value, index) => (
              <div
                key={value.title}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ValueCard {...value} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
